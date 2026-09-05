import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ArrowRight, ShieldCheck, Users2, MapPin } from 'lucide-react'
import { SERVICES } from '../data/services.js'
import { CASE_STUDIES } from '../data/caseStudies.js'
import { CountUp, TrustedByStrip } from '../components/shared.jsx'
import Img from '../components/Img.jsx'
import { useGsapEffect } from '../lib/animations.js'

const HERO_SLIDES = [
  {
    src: '/images/truck-trailer.jpg',
    alt: 'Markwicks Services truck and trailer with excavator and mower on site',
  },
  {
    src: '/images/mulch-bed-paddock.jpg',
    alt: 'Freshly mulched garden beds on a rural property',
  },
  {
    src: '/images/gravel-pathway.jpg',
    alt: 'Landscaped gravel pathway and mulch bed on a rural property',
  },
]

function Hero() {
  const ref = useRef(null)
  const bgRef = useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const [loadedCount, setLoadedCount] = useState(1)

  useEffect(() => {
    const id = setInterval(() => setActiveSlide((s) => (s + 1) % HERO_SLIDES.length), 5000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const id = setTimeout(() => setLoadedCount(HERO_SLIDES.length), 1200)
    return () => clearTimeout(id)
  }, [])

  useGsapEffect(({ gsap, ScrollTrigger }) => {
      gsap.from('.hero-eyebrow', { y: 20, opacity: 0, duration: 0.8, delay: 0.1, ease: 'power3.out' })
      gsap.from('.hero-meta, .hero-cta', {
        y: 24, opacity: 0, duration: 0.8, delay: 0.8, stagger: 0.12, ease: 'power3.out',
      })
      gsap.to(bgRef.current, {
        yPercent: 28,
        scale: 1.12,
        ease: 'none',
        scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true },
      })
      gsap.to('.hero-content', {
        yPercent: -18,
        opacity: 0.4,
        ease: 'none',
        scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true },
      })
  }, [], ref)

  return (
    <section ref={ref} className="relative min-h-[100dvh] overflow-hidden bg-deep">
      <div ref={bgRef} className="absolute inset-x-0 -top-[15%] -bottom-[15%]">
        {HERO_SLIDES.slice(0, loadedCount).map((slide, i) => (
          <Img
            key={i}
            src={slide.src}
            alt={slide.alt}
            sizes="100vw"
            // The first slide is the LCP element. Without these the browser
            // cannot discover it until the JS bundle has parsed and mounted.
            fetchPriority={i === 0 ? 'high' : 'low'}
            loading={i === 0 ? 'eager' : 'lazy'}
            decoding={i === 0 ? 'sync' : 'async'}
            className="absolute inset-0 h-full w-full object-cover brightness-[0.5] transition-opacity"
            style={{
              opacity: activeSlide === i ? 1 : 0,
              transitionDuration: '1800ms',
              transitionTimingFunction: 'ease-in-out',
              animation: `hero-kenburns ${HERO_SLIDES.length * 9}s ease-in-out infinite alternate`,
              animationDelay: `${i * -9}s`,
            }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-deep/60" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-deep to-transparent" />

      <div className="hero-content relative z-10 max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-20 pt-44 pb-24 min-h-[100dvh] flex flex-col justify-center">
        <p className="hero-eyebrow font-mono text-xs uppercase tracking-[0.25em] text-white/70 mb-7">
          Bathurst, NSW &middot; Commercial &amp; Residential Grounds Care
        </p>
        <h1 className="font-display font-heavy text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tighter leading-[1.12] max-w-5xl">
          <span className="hero-line-1 block">Landscaping and Grounds Maintenance</span>
          <span className="hero-line-2 block font-serif italic font-medium">for Commercial, Residential & Rural Clients.</span>
        </h1>
        <p className="hero-meta mt-7 max-w-lg text-white/70 text-base sm:text-lg leading-relaxed">
          Licensed, scheduled grounds maintenance for councils, schools, strata and commercial sites across the Bathurst region.
        </p>
        <div className="hero-meta mt-16 flex flex-wrap items-center gap-x-8 gap-y-3">
          {[
            { end: 5, suffix: '+', label: 'Commercial Sites' },
            { end: 15, suffix: '+', label: 'Years in Operation' },
            { end: 100, suffix: '%', label: 'Insured' },
          ].map((s, i) => (
            <div key={s.label} className={`flex items-center ${i > 0 ? 'border-l border-white/20 pl-8' : ''}`}>
              <div className="flex items-center gap-2.5">
                <span className="font-display text-xl sm:text-2xl font-bold text-white"><CountUp end={s.end} suffix={s.suffix} /></span>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/50 leading-tight max-w-[6rem]">{s.label}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="hero-cta mt-12 flex flex-wrap gap-4">
          <Link to="/contact" className="magnetic-btn inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-semibold shadow-lg shadow-primary/30 transition-colors">
            Get in Touch <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link to="/portfolio" className="magnetic-btn inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border-2 border-white/70 transition-colors">
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  )
}

function Intro() {
  const ref = useRef(null)
  useGsapEffect(({ gsap, ScrollTrigger }) => {
      gsap.from('.intro-photos', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        x: -40, opacity: 0, duration: 0.9, ease: 'power3.out',
      })
      gsap.from('.intro-text', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        x: 40, opacity: 0, duration: 0.9, delay: 0.15, ease: 'power3.out',
      })
  }, [], ref)

  const points = [
    { icon: ShieldCheck, title: 'WHS as standard', text: 'Safety is part of the daily routine on every site, not an afterthought.' },
    { icon: Users2, title: 'Contract after contract', text: 'So much of our work comes from clients renewing us, site after site.' },
    { icon: MapPin, title: 'Local, on schedule', text: 'We turn up when we say we will, and run every site to the same standard.' },
  ]

  return (
    <section ref={ref} className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <div className="intro-photos order-2 lg:order-1 grid grid-cols-2 gap-4">
          <div className="col-span-2 rounded-3xl overflow-hidden border border-divider aspect-[16/10]">
            <Img src="/images/estate-garden-bed.jpg" alt="Completed front yard landscaping and garden bed makeover" loading="lazy" decoding="async" className="h-full w-full object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
          <div className="rounded-3xl overflow-hidden border border-divider aspect-square">
            <Img src="/images/parking-lot-mulch.jpg" alt="Completed commercial car park mulching and garden bed work" loading="lazy" decoding="async" className="h-full w-full object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
          <div className="rounded-3xl overflow-hidden border border-divider aspect-square">
            <Img src="/images/mulch-bed-mountain.jpg" alt="Garden bed landscaping on a rural property with mountain views" loading="lazy" decoding="async" className="h-full w-full object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
        </div>
        <div className="intro-text order-1 lg:order-2">
          <p className="font-mono text-sm uppercase tracking-[0.18em] text-primary mb-4">Who We Are</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tighter mb-7">Make a difference with us!</h2>
          <p className="text-muted leading-relaxed text-lg sm:text-xl mb-10">
            We handle the full spectrum of landscaping and grounds work from commercial maintenance and property makeovers to rural and acreage services, weed management, and earthworks and excavation. We service schools, TAFE NSW, aged care facilities, strata complexes, industrial sites, and rural landholders across the Central West.
          </p>
          <div className="space-y-7">
            {points.map((p) => (
              <div key={p.title} className="flex gap-5">
                <div className="h-12 w-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                  <p.icon className="h-6 w-6 text-primary" strokeWidth={2.2} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-lg text-ink mb-1">{p.title}</h3>
                  <p className="text-base text-muted leading-relaxed">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const TESTIMONIALS = [
  {
    quote: "We have used Markwicks for a number of years as our go-to team for all our landscaping and garden maintenance needs. Their work has ranged from designing and installing garden features and retaining walls to the regular upkeep of our large country garden. We also rely on them to maintain our commercial premises. The boys are consistently reliable, trustworthy and hardworking. Their pricing is fair, and the work is always completed to a high standard. We are very happy to highly recommend Markwicks.",
    name: 'Mary-Rose Townsend',
  },
]

function Testimonials() {
  const ref = useRef(null)
  useGsapEffect(({ gsap, ScrollTrigger }) => {
      gsap.from('.testi-heading', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        y: 24, opacity: 0, duration: 1, ease: 'power2.out',
      })
      gsap.from('.testimonial-card', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        y: 40, opacity: 0, scale: 0.97, duration: 0.8, delay: 0.15, stagger: 0.15, ease: 'power3.out',
      })
      gsap.to('.testi-heading', {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'center top', scrub: 0.6 },
      })
  }, [], ref)

  return (
    <section ref={ref} className="pb-24 sm:pb-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="testi-heading">
          <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] text-primary mb-3 text-center">What Clients Say</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tighter text-center mb-14">Trusted to turn up and get it done.</h2>
        </div>
        <div
          className={
            TESTIMONIALS.length === 1
              ? 'max-w-3xl mx-auto'
              : TESTIMONIALS.length === 2
                ? 'grid grid-cols-1 lg:grid-cols-2 gap-6'
                : 'grid grid-cols-1 lg:grid-cols-3 gap-6'
          }
        >
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="testimonial-card rounded-3xl bg-surface border border-divider p-6 sm:p-8">
              {t.name && <p className="text-sm font-semibold text-ink mb-1">{t.name}</p>}
              {t.role && <p className="text-xs text-muted mb-4">{t.role}</p>}
              <p className="font-serif italic text-lg text-ink leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesPreview() {
  const ref = useRef(null)
  useGsapEffect(({ gsap, ScrollTrigger }) => {
      gsap.from('.svc-heading', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        x: -40, opacity: 0, duration: 0.9, ease: 'power3.out',
      })
      gsap.from('.svc-cta', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        x: 40, opacity: 0, duration: 0.9, ease: 'power3.out',
      })
      gsap.from('.svc-tile', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        y: 30, opacity: 0, duration: 0.7, delay: 0.15, stagger: 0.1, ease: 'power3.out',
      })
      gsap.to('.svc-heading', {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'center top', scrub: 0.6 },
      })
  }, [], ref)

  return (
    <section ref={ref} className="bg-deep text-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-14 flex flex-wrap items-end justify-between gap-6">
        <div className="svc-heading">
          <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] text-primary-light mb-3">What We Do</p>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tighter max-w-3xl">
            Commercial and Residential work across Bathurst &amp; the Central West.
          </h2>
        </div>
        <Link to="/services" className="svc-cta magnetic-btn inline-flex items-center gap-2 glass-dark text-white px-6 py-3 rounded-lg font-semibold border border-white/15 shrink-0">
          View All Services <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {SERVICES.map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}`} className="svc-tile relative overflow-hidden bg-deep p-8 sm:p-10 min-h-[300px] flex flex-col justify-end group">
              <Img src={s.img}
                alt={s.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-50" sizes="(min-width: 1024px) 50vw, 100vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/85 to-deep/40" />
              <div className="relative z-10">
                <div className="h-11 w-11 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 transition-transform group-hover:scale-110">
                  <s.icon className="h-6 w-6 text-primary-light" strokeWidth={2.2} />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{s.text}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-primary-light">
                  Learn more <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function RecentWork() {
  const ref = useRef(null)
  useGsapEffect(({ gsap, ScrollTrigger }) => {
      gsap.from('.work-heading', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        x: -40, opacity: 0, duration: 0.9, ease: 'power3.out',
      })
      gsap.from('.work-cta', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        x: 40, opacity: 0, duration: 0.9, ease: 'power3.out',
      })
      gsap.from('.work-featured', {
        scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true },
        x: -30, opacity: 0, duration: 0.8, delay: 0.1, ease: 'power3.out',
      })
      gsap.from('.work-list-item', {
        scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true },
        y: 20, opacity: 0, duration: 0.6, delay: 0.2, stagger: 0.08, ease: 'power3.out',
      })
      gsap.to('.work-heading', {
        yPercent: -20,
        ease: 'none',
        scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'center top', scrub: 0.6 },
      })
  }, [], ref)

  const featured = CASE_STUDIES.find((c) => c.slug === 'tafe-nsw-multi-site') ?? CASE_STUDIES[0]
  const rest = CASE_STUDIES.filter((c) => c.slug !== featured.slug).slice(0, 3)

  return (
    <section ref={ref} className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-14 flex flex-wrap items-end justify-between gap-6">
        <div className="work-heading">
          <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] text-primary mb-3">Recent Work</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tighter max-w-2xl">See what we have been on site for.</h2>
        </div>
        <Link to="/portfolio" className="work-cta magnetic-btn inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-primary/30 shrink-0">
          View Portfolio <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-5 gap-6">
          <Link to="/portfolio" className="work-featured group relative overflow-hidden rounded-3xl border border-divider bg-surface lg:col-span-3">
            <div className="relative aspect-[16/11] overflow-hidden bg-background">
              <Img src={featured.img} alt={featured.alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" sizes="(min-width: 1024px) 50vw, 100vw" />
            </div>
            <div className="p-6 sm:p-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary mb-1.5">{featured.category}</p>
              <h3 className="font-display text-xl font-semibold leading-snug mb-1.5">{featured.title}</h3>
              <p className="text-sm text-muted">{featured.client}</p>
            </div>
          </Link>

          <div className="lg:col-span-2 flex flex-col gap-4">
            {rest.map((c) => (
              <Link key={c.slug} to="/portfolio" className="work-list-item group flex items-center gap-4 rounded-2xl border border-divider bg-surface p-3 hover:bg-background transition-colors">
                <div className="relative h-20 w-24 shrink-0 rounded-xl overflow-hidden bg-background">
                  {c.img && <Img src={c.img} alt={c.alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" sizes="(min-width: 1024px) 50vw, 100vw" />}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary mb-1">{c.category}</p>
                  <h3 className="font-display text-sm font-semibold leading-snug truncate">{c.title}</h3>
                </div>
                <ArrowRight className="h-4 w-4 text-muted shrink-0 transition-transform group-hover:translate-x-0.5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function StatsCta() {
  const ref = useRef(null)
  useGsapEffect(({ gsap, ScrollTrigger }) => {
      gsap.from('.cta-content', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        y: 30, opacity: 0, duration: 0.8, ease: 'power3.out',
      })
      gsap.to('.cta-content', {
        yPercent: -15,
        ease: 'none',
        scrollTrigger: { trigger: ref.current, start: 'top bottom', end: 'bottom top', scrub: 0.6 },
      })
  }, [], ref)

  return (
    <section ref={ref} className="pb-24 sm:pb-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="cta-content text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tighter mb-5">Ready to put your grounds on a schedule?</h2>
          <Link to="/contact" className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-lg font-semibold shadow-lg shadow-primary/30">
            Get in Touch <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedByStrip />
      <Intro />
      <ServicesPreview />
      <RecentWork />
      <Testimonials />
      <StatsCta />
    </>
  )
}
