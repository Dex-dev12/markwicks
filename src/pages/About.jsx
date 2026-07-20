import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { PageBanner, FleetShuffler, CountUp } from '../components/shared.jsx'

const STORY_STEPS = [
  {
    num: '01',
    title: 'Get in Touch',
    text: "Tell us about your site — a single property or a multi-site contract. We'll talk you through the right schedule and the rate.",
    bullets: ['Direct contact with Cory, no call centre', 'Rates confirmed up front before work begins'],
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Grange%20Farm%20Farmyard%20-%20geograph.org.uk%20-%20244947.jpg?width=800',
    alt: 'Property grounds in the Bathurst region',
  },
  {
    num: '02',
    title: 'On Schedule',
    text: 'Every site runs on a fixed, recurring cycle — mowed, edged and tidied to the same standard, visit after visit.',
    bullets: ['Commercial mowers, tractor and slashers', 'One crew across every site on the contract'],
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/TORO%20Z%20Master%20Commercial%20Zero-Turn%20Riders%20mower%20at%20Construct%20Expo%20Utilaje%202010.JPG?width=800',
    alt: 'Commercial mower on a scheduled grounds maintenance visit',
  },
  {
    num: '03',
    title: 'Maintain',
    text: 'For standing commercial contracts and weekenders alike, an ongoing arrangement keeps every site looking the way it should.',
    bullets: ['Standing commercial contracts welcome', 'Excavation and mulching available alongside'],
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Digger%20at%20Low%20Bank%20Farm%20-%20geograph.org.uk%20-%201053732.jpg?width=800',
    alt: 'Excavation and site work',
  },
]

function StoryProtocol() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card')
      cards.slice(0, -1).forEach((card) => {
        gsap.to(card, {
          scrollTrigger: { trigger: card, start: 'top top+=100', end: '+=500', scrub: 1 },
          scale: 0.92, filter: 'blur(6px) saturate(0.7)', opacity: 0.5, ease: 'none',
        })
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-16">
        <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] text-primary mb-3">How We Work</p>
        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tighter max-w-3xl">
          Get in touch, get scheduled, stay maintained.
        </h2>
        <p className="mt-4 text-muted max-w-xl">The same straightforward process whether it's one site or a standing multi-site contract.</p>
      </div>

      <div className="relative">
        {STORY_STEPS.map((step) => (
          <div
            key={step.num}
            className="protocol-card sticky top-24 bg-surface border border-divider rounded-3xl mx-auto max-w-7xl mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-0 overflow-hidden rounded-3xl">
              <div className="md:col-span-3 p-8 sm:p-12 flex flex-col justify-center">
                <span className="font-mono text-sm text-primary mb-3">{step.num}</span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-4">{step.title}</h3>
                <p className="text-muted leading-relaxed mb-5">{step.text}</p>
                <ul className="space-y-2">
                  {step.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-muted">
                      <ArrowRight className="h-3.5 w-3.5 text-primary shrink-0" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-2 min-h-[220px] md:min-h-0">
                <img src={step.img} alt={step.alt} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default function About() {
  useEffect(() => {
    const id = setTimeout(() => ScrollTrigger.refresh(), 200)
    return () => clearTimeout(id)
  }, [])

  return (
    <>
      <PageBanner
        eyebrow="About Us"
        title="A dedicated crew, built around commercial reliability."
        subtitle="Markwicks Services is run by Cory and Claudia Markwick — a small, dedicated crew that treats every site, from a single lawn to a multi-site commercial contract, with the same standard."
        img="https://commons.wikimedia.org/wiki/Special:FilePath/TORO%20Z%20Master%20Commercial%20Zero-Turn%20Riders%20mower%20at%20Construct%20Expo%20Utilaje%202010.JPG?width=1800"
      />

      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] text-primary mb-3">Our Story</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tighter mb-6">No job is too big or small.</h2>
            <p className="text-muted leading-relaxed mb-4">
              Markwicks Services is a family-run crew of three — Cory, his brother, and Claudia handling the office side — servicing the Bathurst region. What started with residential mowing has grown into standing commercial grounds contracts, including scheduled maintenance across multiple TAFE NSW sites.
            </p>
            <p className="text-muted leading-relaxed">
              Our focus now sits firmly on commercial and institutional grounds care — reliable, scheduled, and reported on — with excavation, mulching, and residential work available alongside it.
            </p>
          </div>
          <FleetShuffler />
        </div>
      </section>

      <section className="relative py-24 sm:py-32 overflow-hidden grid-bg">
        <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid lg:grid-cols-3 lg:divide-x divide-divider gap-10 lg:gap-0">
          {[
            { end: 5, suffix: '+', label: 'Commercial sites serviced on standing contracts' },
            { end: 3, suffix: '', label: 'Person crew, one point of contact' },
            { end: 100, suffix: '%', label: 'Scheduled — no ad-hoc guesswork' },
          ].map((p) => (
            <div key={p.label} className="lg:px-10 first:pl-0">
              <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] text-muted mb-3">Track Record</p>
              <p className="font-display text-5xl sm:text-6xl font-bold gradient-text">
                <CountUp end={p.end} suffix={p.suffix} />
              </p>
              <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent mt-4 mb-4" style={{ animation: 'pillar-sweep 3s ease-in-out infinite' }} />
              <p className="text-sm sm:text-base text-muted leading-relaxed">{p.label}</p>
            </div>
          ))}
        </div>
      </section>

      <StoryProtocol />

      <section className="pb-24 sm:pb-32 text-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tighter mb-5">Want to know why clients stick around?</h2>
          <Link to="/why-choose-us" className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-full font-semibold shadow-lg shadow-primary/30">
            See Why Choose Us <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
