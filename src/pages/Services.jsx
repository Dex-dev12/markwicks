import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ArrowRight } from 'lucide-react'
import { PageBanner } from '../components/shared.jsx'
import { SERVICES } from '../data/services.js'

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
        subtitle="We provide residential services, commercial grounds maintenance, landscaping, rural & acreage services, weed management, and earthworks & excavation across Bathurst and the Central West."
        img="/images/services-header.jpg"
      />
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
                  <p className="text-muted leading-relaxed mb-6">{s.text}</p>
                  <Link to={`/services/${s.slug}`} className="inline-flex items-center gap-1.5 text-sm font-medium text-primary lift-on-hover">
                    Learn more <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}
