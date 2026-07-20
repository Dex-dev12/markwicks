import { useEffect, useRef, useState } from 'react'
import { Tractor, CheckCircle2 } from 'lucide-react'

const TRUSTED_BY = [
  { name: 'TAFE NSW', logo: '/logos/tafe-nsw.png', placeholder: false },
  { name: '[Council Name]', placeholder: true },
  { name: '[Strata Body]', placeholder: true },
  { name: '[Property Group]', placeholder: true },
  { name: '[School / Campus]', placeholder: true },
]

export function TrustedByStrip() {
  const track = [...TRUSTED_BY, ...TRUSTED_BY]
  return (
    <section className="border-y border-divider bg-surface py-6 overflow-hidden">
      <div className="mb-3 px-6 sm:px-10 lg:px-16">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted text-center">Trusted By</p>
      </div>
      <div className="marquee-mask">
        <div className="marquee-track flex items-center gap-16 w-max">
          {track.map((c, i) =>
            c.logo ? (
              <img
                key={`${c.name}-${i}`}
                src={c.logo}
                alt={c.name}
                className="h-6 sm:h-7 w-auto object-contain shrink-0 opacity-70"
              />
            ) : (
              <span
                key={`${c.name}-${i}`}
                className={`font-display text-xl sm:text-2xl font-bold tracking-tight whitespace-nowrap ${c.placeholder ? 'text-muted/40' : 'text-ink/70'}`}
              >
                {c.name}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  )
}

export function PageBanner({ eyebrow, title, subtitle, img }) {
  return (
    <section className="relative pt-28 pb-12 sm:pt-32 sm:pb-14 overflow-hidden">
      <div className="absolute inset-0">
        <img src={img} alt="" className="h-full w-full object-cover brightness-[0.4]" />
      </div>
      <div className="absolute inset-0 bg-deep/75" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-primary-light mb-3">{eyebrow}</p>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tighter leading-[1.05] max-w-3xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-xl text-white/70 text-sm sm:text-base leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  )
}

export function CountUp({ end, suffix = '', duration = 2000 }) {
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

export function Field({ label, id, type = 'text', placeholder, textarea, rows }) {
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

export function FleetShuffler() {
  const cards = [
    { name: 'Commercial Mowers', text: 'Scheduled mowing across multi-site contracts' },
    { name: 'Tractor & Slashers', text: 'Larger sites, paddocks and reserves' },
    { name: 'Excavator & Bobcat', text: 'Site work and drainage alongside grounds care' },
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

export function SiteProgress() {
  const statuses = ['Scheduled', 'On Site', 'Complete', 'Reported']
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
      <div className="absolute h-24 w-24 rounded-full bg-white/40 blur-2xl -top-6 -left-6" />
      <div className="absolute h-20 w-20 rounded-full bg-white/30 blur-2xl top-10 right-2" />

      <div className="absolute top-2.5 inset-x-3 flex items-center justify-between">
        <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#8A4A3D]">Site Cycle</span>
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

export function SiteVisitScheduler() {
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
