import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ArrowUpRight, ArrowRight, Phone } from 'lucide-react'
import { SERVICES } from '../data/services.js'
import { CASE_STUDIES } from '../data/caseStudies.js'
import { CountUp, TrustedByStrip } from '../components/shared.jsx'

const HERO_SLIDES = [
  {
    src: '/images/truck-trailer.jpg',
    alt: 'Markwicks Services truck and trailer with excavator and mower on site',
  },
  {
    src: '/images/bobcat-action.jpg',
    alt: 'Markwicks Services operating a Bobcat excavator on site',
  },
  {
    src: '/images/gravel-pathway.jpg',
    alt: 'Landscaped gravel pathway and mulch bed on a rural property',
  },
  {
    src: '/images/mower-mowing.jpg',
    alt: 'Commercial mower cutting a lush green paddock',
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-line-1, .hero-line-2, .hero-cta, .hero-meta', {
        y: 30, opacity: 0, duration: 1, delay: 0.3, ease: 'power3.out',
      })
      gsap.to(bgRef.current, {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: { trigger: ref.current, start: 'top top', end: 'bottom top', scrub: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative min-h-[88dvh] overflow-hidden bg-deep">
      <div ref={bgRef} className="absolute inset-x-0 -top-[15%] -bottom-[15%]">
        {HERO_SLIDES.slice(0, loadedCount).map((slide, i) => (
          <img
            key={i}
            src={slide.src}
            alt={slide.alt}
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
      <div className="absolute inset-0 bg-gradient-to-br from-deep/85 via-deep/45 to-deep/75" />
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-deep to-transparent" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div className="absolute top-24 right-6 sm:right-16 hidden sm:block">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="absolute h-2.5 w-2.5 rounded-full bg-primary animate-float"
            style={{ right: i * 34, top: i * 46, animationDelay: `${i * 0.6}s` }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-20 min-h-[88dvh] flex flex-col justify-center">
        <p className="hero-meta font-mono text-xs uppercase tracking-[0.25em] text-primary-light mb-6">
          Bathurst &amp; the Central West NSW
        </p>
        <h1 className="font-display font-heavy text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tighter leading-[0.95] max-w-5xl">
          <span className="hero-line-1 block">Grounds Maintenance and Property Solutions</span>
          <span className="hero-line-2 block font-serif italic font-medium">for Commercial, Residential &amp; Rural Clients.</span>
        </h1>
        <div className="hero-meta mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
          {[
            { text: 'Family Owned and Operated' },
            { end: 15, suffix: '+', label: 'Years in Operation' },
            { text: 'Local Business' },
          ].map((s, i) => (
            <div key={s.text ?? s.label} className={`flex items-center ${i > 0 ? 'border-l border-white/20 pl-8' : ''}`}>
              {s.text ? (
                <span className="font-mono text-xs sm:text-sm tracking-[0.12em] text-white">{s.text}</span>
              ) : (
                <div className="flex items-center gap-2.5">
                  <span className="font-display text-xl sm:text-2xl font-bold text-white"><CountUp end={s.end} suffix={s.suffix} /></span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/50 leading-tight max-w-[6rem]">{s.label}</span>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="hero-cta mt-10 flex flex-wrap gap-3">
          <Link to="/contact" className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold shadow-lg shadow-primary/30">
            Get in Touch <ArrowUpRight className="h-4 w-4" />
          </Link>
          <Link to="/contact" className="magnetic-btn inline-flex items-center gap-2 glass-dark text-white px-6 py-3 rounded-full font-semibold border border-white/15">
            <Phone className="h-4 w-4" /> Call Now
          </Link>
        </div>
      </div>
    </section>
  )
}

function Intro() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.intro-photos', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        x: -40, opacity: 0, duration: 0.9, ease: 'power3.out',
      })
      gsap.from('.intro-text', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        x: 40, opacity: 0, duration: 0.9, delay: 0.15, ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="intro-photos order-2 lg:order-1 grid grid-cols-2 gap-4">
          <div className="col-span-2 rounded-3xl overflow-hidden border border-divider aspect-[16/10]">
            <img src="/images/estate-garden-bed.jpg" alt="Completed front yard landscaping and garden bed makeover" className="h-full w-full object-cover" />
          </div>
          <div className="rounded-3xl overflow-hidden border border-divider aspect-square">
            <img src="/images/parking-lot-mulch.jpg" alt="Completed commercial car park mulching and garden bed work" className="h-full w-full object-cover" />
          </div>
          <div className="rounded-3xl overflow-hidden border border-divider aspect-square">
            <img src="/images/mulch-bed-mountain.jpg" alt="Garden bed landscaping on a rural property with mountain views" className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="intro-text order-1 lg:order-2">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tighter mb-6">Make a difference with us!</h2>
          <div className="space-y-5 text-muted leading-relaxed text-base sm:text-lg">
            <p>
              Our reputation is built on turning up when we say we will and running every site to the same standard, which is why so much of our work comes from clients renewing us contract after contract. Every schedule is built around the site — its access, its deadlines, and what the client actually needs from a visit.
            </p>
            <p>
              We place a high priority on WHS standards and treat them as part of the daily routine on every site, not an afterthought. As the standards contractors are expected to meet keep evolving, we keep our own approach current alongside them.
            </p>
            <p>
              Our work spans residential and commercial grounds maintenance, landscaping and property makeovers, rural and acreage services, weed management, and earthworks and excavation — servicing schools, TAFE NSW, aged care facilities, strata complexes, industrial sites, commercial properties and rural landholders alike.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

const TESTIMONIALS = [
  { quote: 'Awaiting client testimonial — swap in a real quote once confirmed.', name: '[Client name]', role: '[Organisation]', placeholder: true },
  { quote: 'Awaiting client testimonial — swap in a real quote once confirmed.', name: '[Client name]', role: '[Organisation]', placeholder: true },
  { quote: 'Awaiting client testimonial — swap in a real quote once confirmed.', name: '[Client name]', role: '[Organisation]', placeholder: true },
]

function Testimonials() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testi-heading', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        x: -40, opacity: 0, duration: 0.9, ease: 'power3.out',
      })
      gsap.from('.testimonial-card', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        y: 40, opacity: 0, duration: 0.8, delay: 0.15, stagger: 0.15, ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="pb-24 sm:pb-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="testi-heading">
          <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] text-primary mb-3 text-center">What Clients Say</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tighter text-center mb-14">Trusted to turn up and get it done.</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="testimonial-card rounded-3xl bg-surface border border-divider p-6 sm:p-8">
              {t.placeholder && (
                <span className="inline-block bg-deep/80 text-white text-[10px] font-mono uppercase tracking-[0.15em] px-2.5 py-1 rounded-full mb-4">
                  Example
                </span>
              )}
              <p className="font-serif italic text-lg text-ink leading-relaxed mb-5">&ldquo;{t.quote}&rdquo;</p>
              <p className="text-sm font-semibold text-ink">{t.name}</p>
              <p className="text-xs text-muted">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ServicesPreview() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
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
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="bg-deep text-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-14 flex flex-wrap items-end justify-between gap-6">
        <div className="svc-heading">
          <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] text-primary-light mb-3">What We Do</p>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tighter max-w-3xl">
            Commercial and Residential work across Bathurst &amp; the Central West.
          </h2>
        </div>
        <Link to="/services" className="svc-cta magnetic-btn inline-flex items-center gap-2 glass-dark text-white px-6 py-3 rounded-full font-semibold border border-white/15 shrink-0">
          View All Services <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {SERVICES.map((s) => (
            <Link key={s.slug} to={`/services/${s.slug}`} className="svc-tile relative overflow-hidden bg-deep p-8 sm:p-10 min-h-[300px] flex flex-col justify-end group">
              <img
                src={s.img}
                alt={s.alt}
                className="absolute inset-0 h-full w-full object-cover opacity-40 transition-transform duration-700 group-hover:scale-105 group-hover:opacity-50"
              />
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
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.work-heading', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        x: -40, opacity: 0, duration: 0.9, ease: 'power3.out',
      })
      gsap.from('.work-cta', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        x: 40, opacity: 0, duration: 0.9, ease: 'power3.out',
      })
      gsap.from('.work-tile', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        y: 30, opacity: 0, duration: 0.7, delay: 0.15, stagger: 0.1, ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  const featured = CASE_STUDIES.slice(0, 4)

  return (
    <section ref={ref} className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-14 flex flex-wrap items-end justify-between gap-6">
        <div className="work-heading">
          <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] text-primary mb-3">Recent Work</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tighter max-w-2xl">See what we have been on site for.</h2>
        </div>
        <Link to="/portfolio" className="work-cta magnetic-btn inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold shadow-lg shadow-primary/30 shrink-0">
          View Portfolio <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((c) => (
            <Link key={c.slug} to="/portfolio" className="work-tile rounded-3xl overflow-hidden border border-divider bg-surface group">
              <div className="relative aspect-[4/3] overflow-hidden bg-background">
                {c.img && <img src={c.img} alt={c.alt} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />}
                {c.placeholder && (
                  <span className="absolute top-3 right-3 bg-deep/80 text-white text-[10px] font-mono uppercase tracking-[0.15em] px-2.5 py-1 rounded-full">
                    Example
                  </span>
                )}
              </div>
              <div className="p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary mb-1">{c.category}</p>
                <h3 className="font-display text-base font-semibold leading-snug">{c.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function StatsCta() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-content', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        y: 30, opacity: 0, duration: 0.8, ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden grid-bg">
      <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="cta-content text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tighter mb-5">Ready to put your grounds on a schedule?</h2>
          <Link to="/contact" className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-full font-semibold shadow-lg shadow-primary/30">
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
