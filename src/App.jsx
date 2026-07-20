import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const location = useLocation()

  useEffect(() => {
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', `https://markwicksservices.com.au${location.pathname}`)
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
    </div>
  )
}
