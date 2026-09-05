import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { PageBanner } from '../components/shared.jsx'
import { CASE_STUDIES } from '../data/caseStudies.js'
import Img from '../components/Img.jsx'
import { useGsapEffect } from '../lib/animations.js'

function PortfolioClosingCta() {
  const ref = useRef(null)
  useGsapEffect(({ gsap, ScrollTrigger }) => {
      gsap.from('.portfolio-cta-content', {
        scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true },
        y: 24, opacity: 0, duration: 1, ease: 'power2.out',
      })
  }, [], ref)

  return (
    <section ref={ref} className="pb-24 sm:pb-32 text-center">
      <div className="portfolio-cta-content max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tighter mb-5">Have a job in mind?</h2>
        <Link to="/contact" className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-lg font-semibold shadow-lg shadow-primary/30">
          Get in Touch <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}

export default function Portfolio() {
  const ref = useRef(null)
  useGsapEffect(({ gsap, ScrollTrigger }) => {
      gsap.from('.case-tile', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        y: 30, opacity: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
      })
  }, [], ref)

  return (
    <>
      <PageBanner
        eyebrow="Portfolio"
        title="Work across the Bathurst region."
        subtitle="Commercial grounds contracts, excavation and residential grounds care. Take a look at what we have done across the Bathurst region."
        img="/images/portfolio-header.jpg"
      />

      <section ref={ref} className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASE_STUDIES.map((c) => (
              <div key={c.slug} className="case-tile rounded-3xl overflow-hidden border border-divider bg-surface flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden bg-background">
                  {c.img && <Img src={c.img} alt={c.alt} loading="lazy" decoding="async" className="h-full w-full object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />}
                  {c.placeholder && (
                    <span className="absolute top-3 right-3 bg-deep/80 text-white text-[10px] font-mono uppercase tracking-[0.15em] px-2.5 py-1 rounded-full">
                      Example
                    </span>
                  )}
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary mb-1.5">{c.category}</p>
                  <h3 className="font-display text-lg font-semibold mb-1">{c.title}</h3>
                  <p className="text-xs text-muted mb-3">{c.client}</p>
                  <p className="text-sm text-muted leading-relaxed">{c.summary}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PortfolioClosingCta />
    </>
  )
}
