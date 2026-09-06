import { useEffect, useRef } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { gsap } from 'gsap'
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { PageBanner } from '../components/shared.jsx'
import { SERVICES, getServiceBySlug } from '../data/services.js'
import Img from '../components/Img.jsx'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)
  const bodyRef = useRef(null)
  const othersRef = useRef(null)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [slug])

  useEffect(() => {
    if (!service) return
    const ctx = gsap.context(() => {
      gsap.from('.svc-detail-text', {
        scrollTrigger: { trigger: bodyRef.current, start: 'top 80%', once: true },
        x: -40, opacity: 0, duration: 0.9, ease: 'power3.out',
      })
      gsap.from('.svc-detail-photo', {
        scrollTrigger: { trigger: bodyRef.current, start: 'top 80%', once: true },
        x: 40, opacity: 0, duration: 0.9, delay: 0.15, ease: 'power3.out',
      })
      gsap.from('.svc-others-heading', {
        scrollTrigger: { trigger: othersRef.current, start: 'top 80%', once: true },
        x: -40, opacity: 0, duration: 0.9, ease: 'power3.out',
      })
      gsap.from('.svc-other-tile', {
        scrollTrigger: { trigger: othersRef.current, start: 'top 80%', once: true },
        y: 30, opacity: 0, duration: 0.7, delay: 0.15, stagger: 0.08, ease: 'power3.out',
      })
    })
    return () => ctx.revert()
  }, [slug, service])

  if (!service) return <Navigate to="/services" replace />

  const others = SERVICES.filter((s) => s.slug !== slug)

  return (
    <>
      <PageBanner eyebrow="Services" title={service.title} subtitle={service.text} img={service.img} />

      <section ref={bodyRef} className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid lg:grid-cols-12 gap-12">
          <div className="svc-detail-text lg:col-span-7">
            {service.intro && (
              <p className="text-ink leading-relaxed text-lg sm:text-xl mb-6">{service.intro}</p>
            )}
            <p className="text-muted leading-relaxed text-base sm:text-lg mb-8">{service.body}</p>
            <ul className="space-y-3">
              {service.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm sm:text-base text-ink">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" /> {b}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-primary/30 mt-10">
              Get in Touch <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="svc-detail-photo lg:col-span-5">
            {service.gallery.length > 1 ? (
              <div className={`grid gap-4 ${service.gallery.length === 3 ? 'grid-cols-2' : 'grid-cols-2'}`}>
                <div className={`rounded-3xl overflow-hidden border border-divider ${service.gallery.length === 3 ? 'col-span-2' : ''} aspect-[4/3]`}>
                  <Img src={service.gallery[0].src} alt={service.gallery[0].alt} loading="lazy" decoding="async" className="h-full w-full object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
                </div>
                {service.gallery.slice(1).map((p) => (
                  <div key={p.src} className="rounded-2xl overflow-hidden border border-divider aspect-square">
                    <Img src={p.src} alt={p.alt} loading="lazy" decoding="async" className="h-full w-full object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
                  </div>
                ))}
              </div>
            ) : (
              <div className="rounded-3xl overflow-hidden border border-divider aspect-[4/3]">
                <Img src={service.gallery[0].src} alt={service.gallery[0].alt} loading="lazy" decoding="async" className="h-full w-full object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
              </div>
            )}
          </div>
        </div>
      </section>

      {service.sections?.length > 0 && (
        <section className="pb-24 sm:pb-32">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="max-w-3xl space-y-12">
              {service.sections.map((sec) => (
                <div key={sec.heading}>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tighter mb-4">{sec.heading}</h2>
                  <p className="text-muted leading-relaxed text-base sm:text-lg">{sec.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.faqs?.length > 0 && (
        <section className="bg-surface border-t border-divider py-24 sm:py-32">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] text-primary mb-3">Common Questions</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tighter mb-12 max-w-3xl">
              {service.title}, answered.
            </h2>
            <div className="max-w-3xl divide-y divide-divider border-t border-divider">
              {service.faqs.map((f) => (
                <details key={f.q} className="group py-6">
                  <summary className="flex items-start justify-between gap-6 cursor-pointer list-none font-display text-lg sm:text-xl font-semibold tracking-tight text-ink">
                    {f.q}
                    <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-1 transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="text-muted leading-relaxed text-base sm:text-lg mt-4">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      <section ref={othersRef} className="bg-deep text-white py-24 sm:py-32">
        <div className="svc-others-heading max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-14">
          <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] text-primary-light mb-3">Other Services</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tighter max-w-3xl">More ways we can help.</h2>
        </div>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
            {others.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="svc-other-tile bg-deep p-8 sm:p-10 transition-colors hover:bg-white/[0.03] group">
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
            <Link to="/services" className="svc-other-tile bg-deep p-8 sm:p-10 transition-colors hover:bg-white/[0.03] group flex flex-col justify-center items-start">
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
