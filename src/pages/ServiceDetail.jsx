import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { PageBanner } from '../components/shared.jsx'
import { SERVICES, getServiceBySlug } from '../data/services.js'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [slug])

  if (!service) return <Navigate to="/services" replace />

  const others = SERVICES.filter((s) => s.slug !== slug)

  return (
    <>
      <PageBanner eyebrow="Services" title={service.title} subtitle={service.text} img={service.img} />

      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <p className="text-muted leading-relaxed text-base sm:text-lg mb-8">{service.body}</p>
            <ul className="space-y-3">
              {service.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm sm:text-base text-ink">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" /> {b}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold shadow-lg shadow-primary/30 mt-10">
              Get a Quote <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-divider">
              <img src={service.img} alt={service.alt} className="h-full w-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-deep text-white py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-14">
          <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] text-primary-light mb-3">Other Services</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tighter max-w-3xl">More ways we can help.</h2>
        </div>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {others.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="bg-deep p-8 sm:p-10 transition-colors hover:bg-white/[0.03] group">
                <div className="h-11 w-11 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 transition-transform group-hover:scale-110">
                  <s.icon className="h-6 w-6 text-primary-light" strokeWidth={2.2} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{s.text}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-primary-light">
                  Learn more <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
            <Link to="/services" className="bg-deep p-8 sm:p-10 transition-colors hover:bg-white/[0.03] group flex flex-col justify-center items-start">
              <div className="h-11 w-11 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 transition-transform group-hover:scale-110">
                <ArrowRight className="h-5 w-5 text-primary-light" strokeWidth={2.2} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">View All Services</h3>
              <p className="text-white/60 text-sm leading-relaxed">See the full list of what Markwicks can help with.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
