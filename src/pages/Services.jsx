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
      gsap.from('.svc-tile', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <>
      <PageBanner
        eyebrow="Our Services"
        title="Commercial grounds care, with the extras alongside."
        subtitle="Scheduled mowing and property maintenance for commercial and institutional sites — plus excavation, mulching and residential grounds care across the Bathurst region."
        img="/images/digger-farm.jpg"
      />
      <section ref={ref} className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-divider rounded-3xl overflow-hidden border border-divider">
            {SERVICES.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`} className="svc-tile bg-surface p-8 sm:p-10 transition-colors hover:bg-background group">
                <div className="h-11 w-11 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 transition-transform group-hover:scale-110">
                  <s.icon className="h-6 w-6 text-primary" strokeWidth={2.2} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{s.text}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                  Learn more <ArrowRight className="h-3 w-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
