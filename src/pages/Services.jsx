import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ArrowRight } from 'lucide-react'
import { PageBanner } from '../components/shared.jsx'
import { SERVICES, SERVICES_PAGE } from '../data/services.js'

export default function Services() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.svc-row').forEach((row) => {
        gsap.from(row, {
          scrollTrigger: { trigger: row, start: 'top 80%', once: true },
          y: 30, opacity: 0, duration: 0.7, ease: 'power3.out',
        })
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <>
      <PageBanner
        eyebrow="What We Do"
        title="Our Services"
        subtitle="We provide a full spectrum of landscaping and grounds keeping services. Ranging from residential services, to commercial grounds maintenance, rural & acreage services, weed management, and earthworks & excavation across Bathurst and the Central West."
        img="/images/services-header.jpg"
      />
      <section className="pt-20 sm:pt-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <p className="max-w-3xl text-ink leading-relaxed text-lg sm:text-xl">{SERVICES_PAGE.intro}</p>
        </div>
      </section>

      <section ref={ref}>
        {SERVICES.map((s, i) => {
          const imageFirst = i % 2 === 0
          return (
            <div key={s.slug} className={`svc-row ${i % 2 === 0 ? 'bg-background' : 'bg-surface'}`}>
              <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className={`rounded-3xl overflow-hidden border border-divider ${imageFirst ? 'lg:order-1' : 'lg:order-2'}`}>
                  <img src={s.img} alt={s.alt} loading="lazy" decoding="async" className="h-full w-full object-cover aspect-[4/3]" />
                </div>
                <div className={imageFirst ? 'lg:order-2' : 'lg:order-1'}>
                  <div className="h-11 w-11 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                    <s.icon className="h-6 w-6 text-primary" strokeWidth={2.2} />
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tighter mb-3">{s.title}</h2>
                  <p className="text-ink leading-relaxed mb-3">{s.text}</p>
                  <p className="text-muted leading-relaxed mb-6">{s.body}</p>
                  <Link to={`/services/${s.slug}`} className="inline-flex items-center gap-1.5 text-sm font-medium text-primary lift-on-hover">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </section>

      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl space-y-12">
            {SERVICES_PAGE.sections.map((sec) => (
              <div key={sec.heading}>
                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tighter mb-4">{sec.heading}</h2>
                <p className="text-muted leading-relaxed text-base sm:text-lg">{sec.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface border-t border-divider py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] text-primary mb-3">Common Questions</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tighter mb-12 max-w-3xl">Working with us.</h2>
          <div className="max-w-3xl divide-y divide-divider border-t border-divider">
            {SERVICES_PAGE.faqs.map((f) => (
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
    </>
  )
}
