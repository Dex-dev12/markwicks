import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ArrowUpRight } from 'lucide-react'
import { PageBanner } from '../components/shared.jsx'
import { CASE_STUDIES, PORTFOLIO_PAGE } from '../data/caseStudies.js'
import Img from '../components/Img.jsx'

function PortfolioClosingCta() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.portfolio-cta-content', {
        scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true },
        y: 24, opacity: 0, duration: 1, ease: 'power2.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

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
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.case-tile', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        y: 30, opacity: 0, duration: 0.7, stagger: 0.08, ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <>
      <PageBanner
        eyebrow="Portfolio"
        title="Work across the Bathurst region."
        subtitle="Commercial grounds contracts, excavation and residential grounds care. Take a look at what we have done across the Bathurst region."
        img="/images/portfolio-header.jpg"
      imgAlt="Completed grounds maintenance and landscaping work in the Bathurst region"
        />

      <section className="pt-20 sm:pt-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <p className="max-w-3xl text-ink leading-relaxed text-lg sm:text-xl">{PORTFOLIO_PAGE.intro}</p>
        </div>
      </section>

      <section ref={ref} className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          {/* Alternating rows rather than a tile grid: each job carries a
              paragraph of detail now, which a three-column card cannot hold. */}
          <div className="flex flex-col gap-16 sm:gap-20">
            {CASE_STUDIES.map((c, i) => {
              const imageFirst = i % 2 === 0
              return (
                <article key={c.slug} className="case-tile grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                  <div className={`lg:col-span-6 ${imageFirst ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-divider bg-background">
                      {c.img && <Img src={c.img} alt={c.alt} loading="lazy" decoding="async" className="h-full w-full object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />}
                      {c.placeholder && (
                        <span className="absolute top-3 right-3 bg-deep/80 text-white text-[10px] font-mono uppercase tracking-[0.15em] px-2.5 py-1 rounded-full">
                          Example
                        </span>
                      )}
                    </div>
                  </div>
                  <div className={`lg:col-span-6 ${imageFirst ? 'lg:order-2' : 'lg:order-1'}`}>
                    <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] text-primary mb-3">{c.category}</p>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tighter mb-2">{c.title}</h2>
                    <p className="text-sm text-muted mb-5">{c.client}</p>
                    <p className="text-ink leading-relaxed mb-4">{c.summary}</p>
                    {c.detail && <p className="text-muted leading-relaxed">{c.detail}</p>}
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {PORTFOLIO_PAGE.sections?.length > 0 && (
        <section className="pb-20 sm:pb-28">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="max-w-3xl space-y-12">
              {PORTFOLIO_PAGE.sections.map((sec) => (
                <div key={sec.heading}>
                  <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tighter mb-4">{sec.heading}</h2>
                  <p className="text-muted leading-relaxed text-base sm:text-lg">{sec.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <PortfolioClosingCta />
    </>
  )
}
