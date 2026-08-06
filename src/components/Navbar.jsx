import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowUpRight, ChevronDown, Mail, Menu, Phone, X } from 'lucide-react'
import { SERVICES } from '../data/services.js'

function TopBar() {
  return (
    <div className="hidden lg:flex fixed top-0 inset-x-0 z-50 h-8 bg-deep text-white/70 text-xs items-center justify-between px-6 sm:px-12 lg:px-20">
      <div className="flex items-center gap-6">
        <a href="tel:0263314527" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
          <Phone className="h-3 w-3" /> 02 6331 4527
        </a>
        <a href="mailto:info@markwicksservices.com.au" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
          <Mail className="h-3 w-3" /> info@markwicksservices.com.au
        </a>
      </div>
    </div>
  )
}

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services', dropdown: true },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 90)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
    setMobileServicesOpen(false)
  }, [location.pathname])

  return (
    <>
      <TopBar />
      <header
        className={`fixed top-4 lg:top-[52px] left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl rounded-full px-4 sm:px-6 py-2.5 transition-colors duration-300 ${
          scrolled ? 'bg-surface/95 backdrop-blur-md shadow-sm border border-divider' : 'border border-transparent'
        }`}
      >
        <nav className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <img src="/logo.png" alt="Markwicks Services" className="h-9 w-auto" />
            <span className={`font-display font-bold font-heavy tracking-tight text-lg transition-colors ${scrolled ? 'text-ink' : 'text-white'}`}>
              Markwicks Services
            </span>
          </Link>
          <div className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <NavLink
                    to={link.href}
                    className={({ isActive }) =>
                      `nav-underline relative pb-1 flex items-center gap-1 text-sm font-medium after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:bg-primary after:transition-all after:duration-300 ${
                        isActive ? 'text-primary after:w-full' : `after:w-0 hover:after:w-full ${scrolled ? 'text-ink/80 hover:text-ink' : 'text-white/85 hover:text-white'}`
                      }`
                    }
                  >
                    {link.label} <ChevronDown className="h-3.5 w-3.5" />
                  </NavLink>
                  {servicesOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                      <div className="bg-surface border border-divider rounded-2xl p-2 w-72 shadow-xl">
                        {SERVICES.map((s) => (
                          <Link
                            key={s.slug}
                            to={`/services/${s.slug}`}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-ink hover:bg-primary/10 hover:text-primary transition-colors"
                          >
                            <s.icon className="h-4 w-4 shrink-0" />
                            {s.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) =>
                    `nav-underline relative pb-1 text-sm font-medium after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:bg-primary after:transition-all after:duration-300 ${
                      isActive ? 'text-primary after:w-full' : `after:w-0 hover:after:w-full ${scrolled ? 'text-ink/80 hover:text-ink' : 'text-white/85 hover:text-white'}`
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              )
            )}
          </div>
          <div className="hidden lg:block">
            <Link to="/contact" className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-lg shadow-primary/30">
              Get in Touch <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <button
            className={`lg:hidden transition-colors ${scrolled ? 'text-ink' : 'text-white'}`}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] glass-dark backdrop-blur-2xl flex flex-col overflow-y-auto">
          <div className="flex items-center justify-between px-6 py-5">
            <span className="font-display font-bold font-heavy text-lg text-white">Markwicks Services</span>
            <button className="text-white" onClick={() => setOpen(false)} aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 gap-6 py-8">
            {NAV_LINKS.map((link) =>
              link.dropdown ? (
                <div key={link.href} className="flex flex-col items-center gap-4">
                  <button
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className="flex items-center gap-1.5 font-display text-3xl font-semibold text-white"
                  >
                    {link.label} <ChevronDown className={`h-6 w-6 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileServicesOpen && (
                    <div className="flex flex-col items-center gap-3">
                      {SERVICES.map((s) => (
                        <Link key={s.slug} to={`/services/${s.slug}`} className="font-body text-base text-white/70">
                          {s.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link key={link.href} to={link.href} className="font-display text-3xl font-semibold text-white">
                  {link.label}
                </Link>
              )
            )}
            <Link
              to="/contact"
              className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold mt-4"
            >
              Get in Touch <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
