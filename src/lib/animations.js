// GSAP loading, kept off the critical startup path.
//
// GSAP and ScrollTrigger were imported at module scope, so they were part of
// the initial bundle and initialised during startup. Diagnostic Lighthouse runs
// put that at roughly 2s of LCP: the prerendered HTML paints, then the bundle
// executes and GSAP touches above-the-fold elements, and Chrome records LCP at
// the end of that.
//
// The animations are enhancement, not content - every page renders correctly
// from the prerendered HTML without them - so GSAP now loads as its own chunk
// after first paint.

import { useEffect } from 'react'

let gsapPromise = null

export function loadGsap() {
  if (!gsapPromise) {
    gsapPromise = Promise.all([import('gsap'), import('gsap/ScrollTrigger')]).then(
      ([gsapMod, stMod]) => {
        const gsap = gsapMod.gsap ?? gsapMod.default
        const ScrollTrigger = stMod.ScrollTrigger ?? stMod.default
        gsap.registerPlugin(ScrollTrigger)
        return { gsap, ScrollTrigger }
      }
    )
  }
  return gsapPromise
}

// Waits for the browser to be idle, then loads GSAP and runs `setup` inside a
// gsap.context scoped to `scopeRef` so every tween it creates is reverted
// together on cleanup - the same lifecycle the inline gsap.context calls had.
export function useGsapEffect(setup, deps = [], scopeRef) {
  useEffect(() => {
    let cancelled = false
    let ctx

    const start = () => {
      loadGsap().then(({ gsap, ScrollTrigger }) => {
        if (cancelled) return
        ctx = gsap.context(() => setup({ gsap, ScrollTrigger }), scopeRef?.current ?? undefined)
      })
    }

    // Two frames puts this after the first paint rather than merely after mount.
    let idleId
    const raf = requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        if (cancelled) return
        if ('requestIdleCallback' in window) {
          idleId = window.requestIdleCallback(start, { timeout: 1200 })
        } else {
          start()
        }
      })
    )

    return () => {
      cancelled = true
      cancelAnimationFrame(raf)
      if (idleId && 'cancelIdleCallback' in window) window.cancelIdleCallback(idleId)
      ctx?.revert()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}
