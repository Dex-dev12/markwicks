import { Link } from 'react-router-dom'
import { SERVICES } from '../data/services.js'

export default function Footer() {
  return (
    <footer className="bg-deep text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <div className="grid lg:grid-cols-8 gap-10">
          <div className="lg:col-span-3 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Markwicks Services" className="h-10 w-auto" />
              <span className="font-display font-bold font-heavy text-2xl">Markwicks Services</span>
            </div>
            <p className="font-serif italic text-white/70 text-lg max-w-xs">Make a difference with us.</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="relative h-2 w-2 rounded-full bg-emerald-500">
                <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">Taking commercial & residential enquiries</span>
            </div>
          </div>
          <div>
            <h5 className="font-display font-semibold mb-4 text-sm uppercase tracking-wide text-white/50">Services</h5>
            <ul className="space-y-2.5 text-sm text-white/70">
              {SERVICES.slice(0, 4).map((s) => (
                <li key={s.slug}><Link to={`/services/${s.slug}`} className="lift-on-hover">{s.title}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-display font-semibold mb-4 text-sm uppercase tracking-wide text-white/50">Company</h5>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li><Link to="/about" className="lift-on-hover">About Us</Link></li>
              <li><Link to="/portfolio" className="lift-on-hover">Portfolio</Link></li>
              <li><Link to="/contact" className="lift-on-hover">Contact</Link></li>
              <li><Link to="/privacy" className="lift-on-hover">Privacy</Link></li>
              <li><Link to="/terms" className="lift-on-hover">Terms</Link></li>
            </ul>
          </div>
          <div className="lg:col-span-2">
            <h5 className="font-display font-semibold mb-4 text-sm uppercase tracking-wide text-white/50">Contact</h5>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>02 6331 4527</li>
              <li><a href="mailto:info@markwicksservices.com.au" className="lift-on-hover whitespace-nowrap">info@markwicksservices.com.au</a></li>
              <li>4 Jarrah Court, Kelso NSW 2795</li>
              <li className="pt-1.5">Weekdays: 7am - 4pm</li>
              <li>Saturday: By appointment</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
          <div>
            <h5 className="font-display font-semibold mb-4 text-sm uppercase tracking-wide text-white/50">Areas Served</h5>
            <p className="text-sm text-white/70 leading-relaxed">
              Bathurst, Orange, Lithgow, Oberon, O&apos;Connell, Blayney, Portland, Wallerawang &amp; the Central West NSW region.
            </p>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <span>&copy; {new Date().getFullYear()} Markwicks Services. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <Link to="/privacy" className="lift-on-hover">Privacy</Link>
            <Link to="/terms" className="lift-on-hover">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
