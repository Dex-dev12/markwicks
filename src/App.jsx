import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { getSeo } from './data/seo.js'

// ScrollTrigger touches window on registration, which does not exist during
// the Node render pass.
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function App() {
  const location = useLocation()
  const [prewarm, setPrewarm] = useState(false)

  useEffect(() => {
    if (prewarm) return
    const start = () => setPrewarm(true)
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(start, { timeout: 4000 })
      return () => window.cancelIdleCallback(id)
    }
    const id = setTimeout(start, 2500)
    return () => clearTimeout(id)
  }, [prewarm])

  useEffect(() => {
    const { title, description, canonical, ogImage } = getSeo(location.pathname)

    document.title = title

    const setMeta = (selector, attr, value) => {
      let el = document.head.querySelector(selector)
      if (!el) {
        el = document.createElement('meta')
        const [key, val] = attr
        el.setAttribute(key, val)
        document.head.appendChild(el)
      }
      el.setAttribute('content', value)
    }

    setMeta('meta[name="description"]', ['name', 'description'], description)
    setMeta('meta[property="og:title"]', ['property', 'og:title'], title)
    setMeta('meta[property="og:description"]', ['property', 'og:description'], description)
    setMeta('meta[property="og:url"]', ['property', 'og:url'], canonical)
    setMeta('meta[property="og:type"]', ['property', 'og:type'], 'website')
    setMeta('meta[property="og:image"]', ['property', 'og:image'], ogImage)
    setMeta('meta[name="twitter:card"]', ['name', 'twitter:card'], 'summary_large_image')
    setMeta('meta[name="twitter:title"]', ['name', 'twitter:title'], title)
    setMeta('meta[name="twitter:description"]', ['name', 'twitter:description'], description)
    setMeta('meta[name="twitter:image"]', ['name', 'twitter:image'], ogImage)

    let link = document.head.querySelector('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.setAttribute('rel', 'canonical')
      document.head.appendChild(link)
    }
    link.setAttribute('href', canonical)
  }, [location.pathname])

  useEffect(() => {
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      })
      return () => cancelAnimationFrame(raf2)
    })
    const id = setTimeout(() => {
      ScrollTrigger.refresh()
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }, 200)
    return () => {
      cancelAnimationFrame(raf1)
      clearTimeout(id)
    }
  }, [location.pathname])

  return (
    <div className="relative">
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      {prewarm && location.pathname !== '/contact' && (
        // GHL's form_embed.js stays loaded after a visit to /contact and resizes any
        // iframe pointing at the form, inline styles included. The wrapper keeps that
        // out of the document flow and clips it, whatever the script does to the iframe.
        <div
          aria-hidden="true"
          style={{ position: 'fixed', top: 0, left: 0, width: 0, height: 0, overflow: 'hidden', pointerEvents: 'none' }}
        >
          <iframe
            src="https://links.versflows.com/widget/form/IJZrHCNaYa7AJc0wWtoH?notrack=true"
            title=""
            tabIndex={-1}
            style={{ width: '800px', height: '600px', border: 0 }}
          />
        </div>
      )}
    </div>
  )
}
