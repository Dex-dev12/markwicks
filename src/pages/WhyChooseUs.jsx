import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ArrowUpRight, Award, Clock, ShieldCheck } from 'lucide-react'
import { PageBanner, SiteProgress, SiteVisitScheduler } from '../components/shared.jsx'

const TRUST_SIGNALS = [
  {
    icon: ShieldCheck,
    title: 'Scheduled, Not Ad-Hoc',
    quote: 'Every site runs on a fixed cycle — no chasing us to find out when we\'re coming.',
  },
  {
    icon: Clock,
    title: 'One Crew, One Standard',
    quote: 'The same family crew across every site, so quality doesn\'t vary contract to contract.',
  },
  {
    icon: Award,
    title: 'Commercial-Ready',
    quote: 'Already trusted with standing grounds contracts across multiple TAFE NSW sites.',
  },
]

function TrustSignals() {
  const ref = useRef(null)
  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        gsap.from('.trust-badge', { y: 16, opacity: 0, duration: 0.4, stagger: 0.08, ease: 'power2.out' })
        obs.disconnect()
      }
    }, { threshold: 0.15 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] text-primary mb-3">Built For Commercial Ground</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tighter">A contractor commercial clients can put on a schedule and forget about.</h2>
          <p className="mt-4 text-muted">Councils, TAFE campuses, strata and property managers need the same thing from a contractor: someone who turns up, does the job to spec, and doesn't need chasing.</p>
        </div>
        <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {TRUST_SIGNALS.map((t) => (
            <div key={t.title} className="trust-badge">
              <div className="bg-surface rounded-2xl border border-divider p-6 sm:p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="h-11 w-11 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                  <t.icon className="h-5 w-5 text-primary" strokeWidth={2.3} />
                </div>
                <h3 className="font-display text-lg font-semibold mb-3">{t.title}</h3>
                <p className="font-serif italic text-muted leading-relaxed">{t.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function WhyChooseUs() {
  return (
    <>
      <PageBanner
        eyebrow="Why Choose Us"
        title="Turns up, does the job to spec, doesn't need chasing."
        subtitle="That's the whole pitch. One dedicated crew running a fixed schedule across every site — tracked from booking to completion."
        img="/images/estate-street-crew.jpg"
      />

      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl bg-surface border border-divider p-6 sm:p-8">
            <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] text-primary mb-2">Every Site</p>
            <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-4">Scheduled, not ad-hoc</h3>
            <SiteProgress />
            <p className="mt-5 text-sm sm:text-base text-muted leading-relaxed">Multi-site contracts run on a fixed cycle, tracked from scheduling through to completion and reporting.</p>
          </div>
          <div className="rounded-3xl bg-surface border border-divider p-6 sm:p-8">
            <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] text-primary mb-2">Scheduling</p>
            <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-4">Get a site visit on the calendar</h3>
            <SiteVisitScheduler />
            <p className="mt-5 text-sm sm:text-base text-muted leading-relaxed">Tell us about your sites and we'll lock in a walkthrough — the same straightforward process for one site or twenty.</p>
          </div>
        </div>
      </section>

      <TrustSignals />

      <section className="pb-24 sm:pb-32 text-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tighter mb-5">See the work before you call.</h2>
          <Link to="/portfolio" className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-full font-semibold shadow-lg shadow-primary/30">
            View Portfolio <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
