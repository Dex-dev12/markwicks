import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { getSeo } from './data/seo.js'
import { loadGsap } from './lib/animations.js'


export default function App() {
  const location = useLocation()
  const [prewarm, setPrewarm] = useState(false)

  // The GoHighLevel form is slow to appear cold, so it is warmed in the
  // background before the visitor reaches /contact. Warming it on every page
  // load cost every visitor a third-party script most of them never needed, so
  // it now waits for intent: hovering, focusing or touching anything that
  // points at /contact. That is well ahead of the click, so the form is still
  // ready on arrival, and visitors who never head there never pay for it.
  useEffect(() => {
    if (prewarm) return
    const start = () => setPrewarm(true)

    const isContactTarget = (el) =>
      el instanceof Element && Boolean(el.closest('a[href="/contact"], a[href*="/contact"]'))

    const onIntent = (e) => {
      if (isContactTarget(e.target)) start()
    }

    document.addEventListener('pointerover', onIntent, { passive: true })
    document.addEventListener('focusin', onIntent)
    document.addEventListener('touchstart', onIntent, { passive: true })

    // Fallback: a visitor who has stayed a while is likely to convert, so warm
    // it anyway once the page has been idle for a good stretch.
    const idle = setTimeout(start, 12000)

    return () => {
      document.removeEventListener('pointerover', onIntent)
      document.removeEventListener('focusin', onIntent)
      document.removeEventListener('touchstart', onIntent)
      clearTimeout(idle)
    }
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
      // Only refresh if GSAP has already been pulled in by a page's animations;
      // never load it just to refresh.
      loadGsap().then(({ ScrollTrigger }) => ScrollTrigger.refresh()).catch(() => {})
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
