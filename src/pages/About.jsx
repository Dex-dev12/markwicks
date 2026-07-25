import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { PageBanner } from '../components/shared.jsx'

const STORY_STEPS = [
  {
    num: '01',
    title: 'Get in Touch',
    text: "Tell us about your site — a single property or a multi-site contract. We'll talk you through the right schedule and the rate.",
    bullets: ['Direct contact with Cory, no call centre', 'Rates confirmed up front before work begins'],
    img: '/images/mulch-bed-mountain.jpg',
    alt: 'Garden bed landscaping on a rural property with mountain views',
  },
  {
    num: '02',
    title: 'On Schedule',
    text: 'Every site runs on a fixed, recurring cycle — mowed, edged and tidied to the same standard, visit after visit.',
    bullets: ['Commercial mowers, tractor and slashers', 'One crew across every site on the contract'],
    img: '/images/mower-mowing.jpg',
    alt: 'Commercial mower cutting a lush green paddock',
  },
  {
    num: '03',
    title: 'Maintain',
    text: 'For standing commercial contracts and weekenders alike, an ongoing arrangement keeps every site looking the way it should.',
    bullets: ['Standing commercial contracts welcome', 'Excavation and mulching available alongside'],
    img: '/images/bobcat-action.jpg',
    alt: 'Markwicks Services operating a Bobcat excavator on site',
  },
]

function StoryProtocol() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.protocol-heading', {
        scrollTrigger: { trigger: containerRef.current, start: 'top 80%', once: true },
        x: -40, opacity: 0, duration: 0.9, ease: 'power3.out',
      })
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
      <div className="protocol-heading max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-16">
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

function OurStory() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.story-text', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        x: -40, opacity: 0, duration: 0.9, ease: 'power3.out',
      })
      gsap.from('.story-photo', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        x: 40, opacity: 0, duration: 0.9, delay: 0.15, ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid lg:grid-cols-2 gap-16 items-center">
        <div className="story-text">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tighter mb-6">Our Story</h2>
          <p className="text-muted leading-relaxed mb-4">
            Markwicks Services is a family-owned and operated business based in Bathurst, NSW, originally starting as a father-and-son team with Clay and Cory Markwick working together. As the business grew, Cory's brothers became involved, bringing additional skills and experience to the team, with Cory's wife, Claudia, later taking on the administration, accounts, client communication, scheduling and day to day business operations.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            What started as a small family operation has continued to grow into a professional team providing grounds maintenance, landscaping, weed control, acreage and rural property maintenance, along with access to earthworks and machinery services through the wider Markwick family.
          </p>
          <p className="text-muted leading-relaxed">
            While the business continues to grow, our focus remains the same — quality workmanship, reliability, strong client relationships and the personal service you expect from a local family business.
          </p>
        </div>
        <div className="story-photo rounded-3xl overflow-hidden border border-divider">
          <img src="/images/truck-trailer.jpg" alt="Markwicks Services truck and trailer with excavator and mower on site" className="h-full w-full object-cover" />
        </div>
      </div>
    </section>
  )
}

function AboutClosingCta() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-cta-content', {
        scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true },
        x: -40, opacity: 0, duration: 0.9, ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="pb-24 sm:pb-32 text-center">
      <div className="about-cta-content max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tighter mb-5">Want to know why clients stick around?</h2>
        <Link to="/why-choose-us" className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-full font-semibold shadow-lg shadow-primary/30">
          See Why Choose Us <ArrowUpRight className="h-4 w-4" />
        </Link>
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
        subtitle="A family-owned and operated business built across two generations of the Markwick family — treating every site, from a single lawn to a multi-site commercial contract, with the same standard."
        img="/images/retaining-wall-crew.jpg"
      />

      <OurStory />

      <StoryProtocol />

      <AboutClosingCta />
    </>
  )
}
