import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  Tractor, ArrowUpRight, ArrowRight, Phone, Mail, MapPin, Clock,
  Shovel, Waves, SprayCan, Scissors, TreePine, Building2,
  ShieldCheck, Award, Menu, X, Upload, CheckCircle2,
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Commercial', href: '#commercial' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

const SERVICES = [
  { icon: Shovel, title: 'Earthworks & Site Prep', text: 'Excavator and Bobcat work for site prep, trenches, culverts, driveways and level building sites.' },
  { icon: Waves, title: 'Dams & Drainage', text: 'Dam cleanouts and repairs, storm water culverts, pipe laying and deep ripping.' },
  { icon: SprayCan, title: 'Weed & Vegetation Control', text: 'Slashing, mulching, blackberry, broom and biddy bush removal for properties of any size.' },
  { icon: Scissors, title: 'Grounds Maintenance', text: 'Mowing, hedging, mulching, overseeding and retaining walls for homes, weekenders and commercial sites.' },
  { icon: TreePine, title: 'Environmental & Land Management', text: 'Swales on contour, tree planting, water conservation and paddock clean-up for the long term.' },
  { icon: Building2, title: 'Commercial Grounds Contracts', text: 'Scheduled grounds maintenance for councils, developers, strata and property managers.' },
]

const PROTOCOL_STEPS = [
  {
    num: '01',
    title: 'Call & Discuss',
    text: "Call Clay on 0427 375 529 and tell us about the job — residential, rural or commercial. We'll talk you through the right approach and the rate.",
    bullets: ['30 years as a licensed machine operator', 'Rates from $66/hr incl. GST'],
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Grange%20Farm%20Farmyard%20-%20geograph.org.uk%20-%20244947.jpg?width=800',
    alt: 'Rural farmyard property in the Bathurst region',
  },
  {
    num: '02',
    title: 'Complete',
    text: 'We get the job done in the minimum time required to achieve high quality results — on time, every time.',
    bullets: ['Full fleet: excavator, Bobcat, tractor, mowers', 'Residential, rural & commercial sites'],
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Digger%20at%20Low%20Bank%20Farm%20-%20geograph.org.uk%20-%201053732.jpg?width=800',
    alt: 'Digger at work on a rural farm property',
  },
  {
    num: '03',
    title: 'Maintain',
    text: 'For weekenders and commercial sites, an ongoing arrangement keeps the grounds looking their best.',
    bullets: ['Standing commercial contracts welcome', 'Scheduled, recurring grounds care'],
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/TORO%20Z%20Master%20Commercial%20Zero-Turn%20Riders%20mower%20at%20Construct%20Expo%20Utilaje%202010.JPG?width=800',
    alt: 'Commercial zero-turn mower used for scheduled grounds maintenance',
  },
]

const TRUST_SIGNALS = [
  {
    icon: ShieldCheck,
    title: '30 Years Licensed',
    quote: "“Clay has the equipment that I need but can't afford to buy. Getting him in has proven to be excellent value for money.”",
  },
  {
    icon: Clock,
    title: 'On Time, Every Time',
    quote: '“Clay always turns up on time — bright and cheery.”',
  },
  {
    icon: Award,
    title: 'Residential to Commercial',
    quote: '“Markwicks have managed our weekender so the gardens are always perfect when we arrive.”',
  },
]

function CountUp({ end, suffix = '', duration = 2000 }) {
  const [value, setValue] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const startTs = performance.now()
        const tick = (now) => {
          const t = Math.min(1, (now - startTs) / duration)
          const eased = 1 - Math.pow(1 - t, 3)
          setValue(Math.round(end * eased))
          if (t < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.4 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [end, duration])

  return <span ref={ref} className="tabular-nums">{value}{suffix}</span>
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl rounded-full px-4 sm:px-6 py-2.5 transition-colors ${scrolled ? 'glass' : ''}`}>
        <nav className="flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <img src="/logo.png" alt="Markwicks Services" className="h-9 w-auto" />
            <span className={`font-display font-bold tracking-tight text-lg transition-colors ${scrolled ? 'text-ink' : 'text-white'}`}>
              Markwicks Services
            </span>
          </a>
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`lift-on-hover text-sm font-medium ${scrolled ? 'text-ink/80 hover:text-ink' : 'text-white/80 hover:text-white'}`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="hidden lg:block">
            <a href="#contact" className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-lg shadow-primary/30">
              Get a Quote <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <button
            className={`lg:hidden ${scrolled ? 'text-ink' : 'text-white'}`}
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-[60] glass-dark backdrop-blur-2xl flex flex-col">
          <div className="flex items-center justify-between px-6 py-5">
            <span className="font-display font-bold text-lg text-white">Markwicks Services</span>
            <button className="text-white" onClick={() => setOpen(false)} aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center flex-1 gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl font-semibold text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold mt-4"
            >
              Get a Quote <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </>
  )
}

const HERO_SLIDES = [
  {
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Construction%20site%20excavator%20and%20truck.jpg?width=1800',
    alt: 'Excavator and truck working on a construction and earthworks site',
  },
  {
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Several%20people%20planting%20trees.jpg?width=1800',
    alt: 'Volunteers and workers planting trees as part of a revegetation project',
  },
  {
    src: 'https://commons.wikimedia.org/wiki/Special:FilePath/Spraying%20Winter%20Wheat%20near%20Worlaby%20-%20geograph.org.uk%20-%201739571.jpg?width=1800',
    alt: 'Tractor spraying a paddock as part of a weed control program',
  },
]

function Hero() {
  const ref = useRef(null)
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setActiveSlide((s) => (s + 1) % HERO_SLIDES.length), 5000)
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-line-1', { y: 40, opacity: 0, duration: 1, delay: 0.3, ease: 'power3.out' })
      gsap.from('.hero-line-2', { y: 60, opacity: 0, duration: 1.2, delay: 0.5, ease: 'power3.out' })
      gsap.from('.hero-cta, .hero-meta', { y: 24, opacity: 0, duration: 0.8, delay: 0.8, stagger: 0.12, ease: 'power3.out' })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section id="home" ref={ref} className="relative min-h-[100dvh] overflow-hidden">
      <style>{`
        @keyframes hero-kenburns {
          0%   { transform: scale(1); }
          100% { transform: scale(1.09); }
        }
      `}</style>
      <div className="absolute inset-0">
        {HERO_SLIDES.map((slide, i) => (
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-32 pb-20 min-h-[100dvh] flex flex-col justify-end">
        <p className="hero-meta font-mono text-xs uppercase tracking-[0.25em] text-white/70 mb-6">
          O'Connell, NSW &mdash; Serving the Bathurst Region
        </p>
        <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[0.95] max-w-5xl">
          <span className="hero-line-1 block">We've got the tools</span>
          <span className="hero-line-2 block font-serif italic font-medium">to get your project done.</span>
        </h1>
        <p className="hero-meta mt-8 max-w-xl text-white/70 text-base sm:text-lg leading-relaxed">
          Three decades of licensed earthmoving, weed control, grounds maintenance and environmental land management — trusted by rural landholders and increasingly relied on for commercial and civil contracts across the Bathurst region.
        </p>
        <div className="hero-cta mt-10 flex flex-wrap gap-3">
          <a href="#contact" className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold shadow-lg shadow-primary/30">
            Get a Quote <ArrowUpRight className="h-4 w-4" />
          </a>
          <a href="tel:0427375529" className="magnetic-btn inline-flex items-center gap-2 glass-dark text-white px-6 py-3 rounded-full font-semibold border border-white/15">
            <Phone className="h-4 w-4" /> Call Clay — 0427 375 529
          </a>
        </div>
      </div>
    </section>
  )
}

function FleetShuffler() {
  const cards = [
    { name: 'Excavator', text: 'Trenches, culverts & deep ripping' },
    { name: 'Bobcat', text: 'Site prep, grading & driveways' },
    { name: 'Tractor & Mowers', text: 'Slashing, mowing & grounds care' },
  ]
  const [front, setFront] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setFront((f) => (f + 1) % cards.length), 3000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative h-44 rounded-3xl bg-gradient-to-b from-[#1C1C1C] to-[#0F0F10] overflow-hidden">
      {cards.map((card, i) => {
        const order = (i - front + cards.length) % cards.length
        const isFront = order === 0
        return (
          <div
            key={card.name}
            className="absolute inset-x-4 top-4 rounded-2xl bg-white/[0.06] border border-white/10 p-4 transition-all duration-700 ease-out"
            style={{
              transform: `translateY(${order * 10}px) scale(${1 - order * 0.06})`,
              filter: isFront ? 'none' : `blur(${order * 1.5}px)`,
              opacity: isFront ? 1 : 0.55 - order * 0.15,
              zIndex: cards.length - order,
            }}
          >
            <div className="flex items-center gap-2 mb-1.5">
              <Tractor className="h-4 w-4 text-primary" strokeWidth={2.4} />
              <span className="font-display font-semibold text-white text-sm">{card.name}</span>
            </div>
            <p className="text-white/60 text-xs leading-relaxed">{card.text}</p>
          </div>
        )
      })}
    </div>
  )
}

function SiteProgress() {
  const statuses = ['Clearing', 'Grading', 'Planting', 'Complete']
  const [statusIdx, setStatusIdx] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setStatusIdx((s) => (s + 1) % statuses.length), 2300)
    return () => clearInterval(id)
  }, [])

  const leaves = Array.from({ length: 7 })

  return (
    <div
      className="relative h-44 rounded-3xl overflow-hidden"
      style={{ background: 'linear-gradient(180deg, #F5ECE9 0%, #E8D3CD 70%, #D9B8AF 100%)' }}
    >
      <style>{`
        @keyframes rain-fall {
          0%   { transform: translate(-50%, -10px) rotate(-8deg); opacity: 0; }
          12%  { opacity: 1; }
          82%  { opacity: 1; }
          100% { transform: translate(-50%, 95px) rotate(12deg); opacity: 0; }
        }
        @keyframes rain-ripple {
          0%   { transform: translateX(-50%) scale(0.4); opacity: 0.9; }
          80%  { transform: translateX(-50%) scale(3.5); opacity: 0; }
          100% { transform: translateX(-50%) scale(3.5); opacity: 0; }
        }
        @keyframes rain-fadein {
          from { opacity: 0; transform: translateY(2px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="absolute h-24 w-24 rounded-full bg-white/40 blur-2xl -top-6 -left-6" />
      <div className="absolute h-20 w-20 rounded-full bg-white/30 blur-2xl top-10 right-2" />

      <div className="absolute top-2.5 inset-x-3 flex items-center justify-between">
        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#8A4A3D]">Site Progress</span>
        <span className="font-mono text-[9px] text-[#8A4A3D]">04</span>
      </div>

      <svg className="absolute top-8 left-1/2 -translate-x-1/2" width="90" height="14" viewBox="0 0 90 14">
        <path d="M2 10 Q45 2 88 10" stroke="#8A4A3D" strokeWidth="2" fill="none" opacity="0.5" />
      </svg>

      {leaves.map((_, i) => (
        <svg
          key={i}
          className="absolute"
          style={{
            left: `${12 + i * 11}%`,
            top: 18,
            animation: `rain-fall ${2.4 + (i % 3) * 0.4}s ${i * 0.35}s linear infinite`,
          }}
          width="12" height="16" viewBox="0 0 24 32"
        >
          <defs>
            <linearGradient id={`leafGrad${i}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E2536B" />
              <stop offset="55%" stopColor="#C8102E" />
              <stop offset="100%" stopColor="#970C22" />
            </linearGradient>
          </defs>
          <path d="M12 2C6 8 3 16 6 24c2 5 8 6 6-2C10 16 12 8 12 2Z" fill={`url(#leafGrad${i})`} />
          <path d="M12 4V22" stroke="white" strokeOpacity="0.35" strokeWidth="1" />
        </svg>
      ))}

      <svg className="absolute bottom-6 inset-x-0" width="100%" height="10" viewBox="0 0 300 10" preserveAspectRatio="none">
        <path d="M0 8 Q10 2 20 8 T40 8 T60 8 T80 8 T100 8 T120 8 T140 8 T160 8 T180 8 T200 8 T220 8 T240 8 T260 8 T280 8 T300 8" stroke="#8A4A3D" strokeWidth="1.4" fill="none" opacity="0.45" />
      </svg>

      {[20, 50, 78].map((left, i) => (
        <span
          key={i}
          className="absolute bottom-6 h-2 w-2 rounded-full border border-[#8A4A3D]/50"
          style={{ left: `${left}%`, animation: `rain-ripple ${2.4 + (i % 3) * 0.4}s ${i * 0.7}s linear infinite` }}
        />
      ))}

      <div className="absolute bottom-2.5 inset-x-3 flex items-center gap-2">
        <span className="relative h-1.5 w-1.5 rounded-full bg-primary">
          <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
        </span>
        <span key={statusIdx} className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#8A4A3D]" style={{ animation: 'rain-fadein 0.4s ease-out' }}>
          {statuses[statusIdx]}
        </span>
      </div>
    </div>
  )
}

function SiteVisitScheduler() {
  const [step, setStep] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % 5), 1400)
    return () => clearInterval(id)
  }, [])

  const days = Array.from({ length: 14 })
  const targetDay = 9
  const cursorPositions = [
    { left: '10%', top: '20%' },
    { left: '10%', top: '20%' },
    { left: '64%', top: '58%' },
    { left: '64%', top: '58%' },
    { left: '64%', top: '58%' },
  ]

  return (
    <div className="relative h-44 rounded-3xl bg-white border border-divider overflow-hidden p-3">
      <div className="flex items-center justify-between mb-2">
        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted">Book a Site Visit</span>
        <span className="font-mono text-[9px] text-muted">Jul</span>
      </div>
      <div className="grid grid-cols-7 gap-1">
        {days.map((_, i) => {
          const isTarget = i === targetDay
          const confirmed = isTarget && step >= 3
          return (
            <div
              key={i}
              className={`h-4 w-4 rounded-[4px] flex items-center justify-center text-[7px] font-mono transition-colors duration-300 ${
                confirmed ? 'bg-primary text-white' : isTarget && step === 2 ? 'bg-primary/30 text-primary' : 'bg-background text-muted/60'
              }`}
            >
              {i + 1}
            </div>
          )
        })}
      </div>

      <div
        className="absolute h-3 w-3 transition-all duration-700 ease-out"
        style={{ left: cursorPositions[step].left, top: cursorPositions[step].top }}
      >
        <svg width="14" height="14" viewBox="0 0 16 16">
          <path d="M2 1l11 5-5 1.5L6 13z" fill="#111111" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      {step >= 3 && (
        <div className="absolute bottom-3 inset-x-3 flex items-center gap-1.5" style={{ animation: 'rain-fadein 0.4s ease-out' }}>
          <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
          <span className="font-mono text-[9px] text-ink">Site visit confirmed</span>
        </div>
      )}
    </div>
  )
}

function Features() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.feature-card', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        y: 40, opacity: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  const cards = [
    {
      eyebrow: 'Fleet',
      title: 'One contractor, full equipment',
      body: 'Excavator, Bobcat, tractor and commercial mowers — Clay operates the lot personally, so there\'s no subcontractor chain to manage.',
      bullets: ['30 years as a licensed operator', 'One point of contact, start to finish'],
      Comp: FleetShuffler,
    },
    {
      eyebrow: 'Every Job',
      title: 'From cleared ground to finished site',
      body: 'Whatever the job — a single earthworks project or an ongoing grounds contract — it moves through the same stages, tracked start to finish.',
      bullets: ['Clearing, grading, planting, complete', 'Applies to residential & commercial work'],
      Comp: SiteProgress,
    },
    {
      eyebrow: 'Scheduling',
      title: 'Get a site visit on the calendar',
      body: 'Call, discuss the job, and lock in a time — the same straightforward process whether it\'s a single job or a standing commercial arrangement.',
      bullets: ['Fast response, real availability', 'No job too big or small'],
      Comp: SiteVisitScheduler,
    },
  ]

  return (
    <section id="why-us" ref={ref} className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div key={card.title} className="feature-card rounded-3xl bg-surface border border-divider p-6 sm:p-8">
              <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] text-primary mb-2">{card.eyebrow}</p>
              <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight mb-4">{card.title}</h3>
              <card.Comp />
              <p className="mt-5 text-sm sm:text-base text-muted leading-relaxed">{card.body}</p>
              <ul className="mt-4 space-y-1.5">
                {card.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-muted">
                    <ArrowRight className="h-3.5 w-3.5 text-primary mt-0.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Pillars() {
  return (
    <section id="track-record" className="relative py-24 sm:py-32 overflow-hidden grid-bg">
      <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid lg:grid-cols-3 lg:divide-x divide-divider gap-10 lg:gap-0">
        {[
          { end: 30, suffix: '+', label: 'Years licensed machine operation' },
          { end: 4, suffix: '', label: 'Service divisions under one roof' },
          { end: 100, suffix: '%', label: 'On-time arrival — every time' },
        ].map((p) => (
          <div key={p.label} className="lg:px-10 first:pl-0">
            <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] text-muted mb-3">Track Record</p>
            <p className="font-display text-5xl sm:text-6xl font-bold gradient-text">
              <CountUp end={p.end} suffix={p.suffix} />
            </p>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent mt-4 mb-4" style={{ animation: 'pillar-sweep 3s ease-in-out infinite' }} />
            <style>{`@keyframes pillar-sweep { 0% { transform: translateX(-100%); } 50% { transform: translateX(100%); } 100% { transform: translateX(100%); } }`}</style>
            <p className="text-sm sm:text-base text-muted leading-relaxed">{p.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Protocol() {
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
    <section id="process" ref={containerRef} className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-16">
        <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] text-primary mb-3">How a Job Runs</p>
        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tighter max-w-3xl">
          Call, discuss, complete, maintain.
        </h2>
        <p className="mt-4 text-muted max-w-xl">The same straightforward process whether it's a single job or a standing commercial arrangement.</p>
      </div>

      <div className="relative">
        {PROTOCOL_STEPS.map((step) => (
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

function ServicesGrid() {
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
    <section id="services" ref={ref} className="bg-deep text-white py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-14">
        <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] text-primary-light mb-3">What We Do</p>
        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tighter max-w-3xl">
          A full selection of contracting and landscaping options.
        </h2>
        <p className="mt-4 text-white/60 max-w-xl">
          Earthworks, weed control, grounds maintenance and environmental work — for decades, Markwicks has loyally catered to the Bathurst community across all four.
        </p>
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {SERVICES.map((s) => (
            <div key={s.title} className="svc-tile bg-deep p-8 sm:p-10 transition-colors hover:bg-white/[0.03] group">
              <div className="h-11 w-11 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 transition-transform group-hover:scale-110">
                <s.icon className="h-6 w-6 text-primary-light" strokeWidth={2.2} />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

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
    <section id="commercial" ref={ref} className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] text-primary mb-3">Built For Commercial Ground</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tighter">A contractor commercial clients can put on a schedule and forget about.</h2>
          <p className="mt-4 text-muted">Councils, developers, strata and property managers need the same thing from a contractor: someone who turns up, does the job to spec, and doesn't need chasing.</p>
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

function Field({ label, id, type = 'text', placeholder, textarea, rows }) {
  const Tag = textarea ? 'textarea' : 'input'
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">{label}</label>
      <Tag
        id={id}
        name={id}
        type={textarea ? undefined : type}
        rows={rows}
        placeholder={placeholder}
        className="rounded-xl border border-divider px-4 py-2.5 text-sm bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition"
      />
    </div>
  )
}

function ContactForm() {
  const [status, setStatus] = useState('idle')
  const [files, setFiles] = useState([])

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 1200)
  }

  const onDrop = (e) => {
    e.preventDefault()
    const list = [...e.dataTransfer.files].filter((f) => f.type.startsWith('image/')).slice(0, 5 - files.length)
    setFiles((prev) => [...prev, ...list])
  }

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] text-primary mb-3">Get In Touch</p>
            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tighter mb-4">Tell us about the ground you need worked.</h2>
            <p className="text-muted leading-relaxed mb-8">Whether it's a one-off job or a standing commercial contract, the first step is the same — a call, an email, or the form here.</p>

            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0"><Phone className="h-4 w-4 text-primary" /></span>
                <div>
                  <p className="text-xs text-muted">Phone</p>
                  <a href="tel:0427375529" className="font-medium lift-on-hover">0427 375 529</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0"><Mail className="h-4 w-4 text-primary" /></span>
                <div>
                  <p className="text-xs text-muted">Email</p>
                  <a href="mailto:claymarkwick@bigpond.com" className="font-medium lift-on-hover">claymarkwick@bigpond.com</a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0"><MapPin className="h-4 w-4 text-primary" /></span>
                <div>
                  <p className="text-xs text-muted">Address</p>
                  <p className="font-medium">397 Wambool Road, O'Connell, NSW 2795</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-muted mt-8 leading-relaxed">Your details are used only to prepare your quote and schedule the job — never sold or shared.</p>
          </div>

          <div className="lg:col-span-7 bg-surface rounded-3xl border border-divider p-6 sm:p-10">
            {status === 'sent' ? (
              <div className="flex flex-col items-center justify-center text-center h-full py-16">
                <CheckCircle2 className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-display text-2xl font-bold mb-2">Thanks — we'll be in touch.</h3>
                <p className="text-muted">Your enquiry has been received. We'll be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Name" id="name" placeholder="Your full name" />
                  <Field label="Email" id="email" type="email" placeholder="you@example.com" />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <Field label="Phone" id="phone" type="tel" placeholder="04xx xxx xxx" />
                  <Field label="Property / Site Address" id="address" placeholder="Suburb or property name" />
                </div>
                <Field label="Message" id="message" textarea rows={5} placeholder="Tell us about the job — residential, rural or commercial." />

                <div
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={onDrop}
                  className="rounded-xl border-2 border-dashed border-divider p-6 text-center cursor-pointer hover:border-primary/40 transition"
                >
                  <Upload className="h-5 w-5 text-muted mx-auto mb-2" />
                  <p className="text-sm text-muted">Drop site photos here (up to 5 images)</p>
                  {files.length > 0 && (
                    <ul className="mt-3 flex flex-wrap gap-2 justify-center">
                      {files.map((f, i) => (
                        <li key={i} className="text-xs bg-background border border-divider rounded-full px-3 py-1 flex items-center gap-1.5">
                          {f.name}
                          <button type="button" onClick={() => setFiles((prev) => prev.filter((_, idx) => idx !== i))} className="text-muted hover:text-ink">
                            <X className="h-3 w-3" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="magnetic-btn w-full inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3.5 rounded-full font-semibold shadow-lg shadow-primary/30 disabled:opacity-70"
                >
                  {status === 'sending' ? 'Sending…' : 'Send Enquiry'}
                  {status !== 'sending' && <ArrowUpRight className="h-4 w-4" />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-deep text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Markwicks Services" className="h-10 w-auto" />
              <span className="font-display font-bold text-2xl">Markwicks Services</span>
            </div>
            <p className="font-serif italic text-white/70 text-lg max-w-xs">No job is too big or small.</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="relative h-2 w-2 rounded-full bg-emerald-500">
                <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75" />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">Taking commercial & residential enquiries</span>
            </div>
          </div>
          <div>
            <h5 className="font-display font-semibold mb-4 text-sm uppercase tracking-wide text-white/50">Services</h5>
            <ul className="space-y-2.5 text-sm text-white/70">
              {SERVICES.slice(0, 4).map((s) => (
                <li key={s.title}><a href="#services" className="lift-on-hover">{s.title}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-display font-semibold mb-4 text-sm uppercase tracking-wide text-white/50">Company</h5>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li><a href="#commercial" className="lift-on-hover">Commercial</a></li>
              <li><a href="#process" className="lift-on-hover">Process</a></li>
              <li><a href="#contact" className="lift-on-hover">Contact</a></li>
              <li><a href="/privacy" className="lift-on-hover">Privacy</a></li>
              <li><a href="/terms" className="lift-on-hover">Terms</a></li>
            </ul>
          </div>
          <div>
            <h5 className="font-display font-semibold mb-4 text-sm uppercase tracking-wide text-white/50">Contact</h5>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li><a href="tel:0427375529" className="lift-on-hover">0427 375 529</a></li>
              <li><a href="mailto:claymarkwick@bigpond.com" className="lift-on-hover">claymarkwick@bigpond.com</a></li>
              <li>397 Wambool Road</li>
              <li>O'Connell, NSW 2795</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <span>&copy; {new Date().getFullYear()} Markwicks Services. All rights reserved.</span>
          <div className="flex items-center gap-5">
            <a href="/privacy" className="lift-on-hover">Privacy</a>
            <a href="/terms" className="lift-on-hover">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  useEffect(() => {
    const id = setTimeout(() => ScrollTrigger.refresh(), 200)
    return () => clearTimeout(id)
  }, [])

  return (
    <div className="relative">
      <div className="noise-overlay" />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pillars />
        <Protocol />
        <ServicesGrid />
        <TrustSignals />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}
