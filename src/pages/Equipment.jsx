import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { PageBanner } from '../components/shared.jsx'
import Img from '../components/Img.jsx'
import { useGsapEffect } from '../lib/animations.js'

const EQUIPMENT = [
  {
    title: 'Bobcat Skid Steer Loaders',
    lead: 'Bobcat S770 and S650 skid steer loaders, in tracked and wheeled options to suit different sites and ground conditions.',
    bulletsLabel: 'Attachments include:',
    bullets: [
      'Forestry mulchers',
      'Slashers in various sizes',
      'Earthmoving buckets',
      'Grabs',
      'General earthmoving and site preparation attachments',
    ],
    img: '/images/earthworks-bobcat-auger-residential.jpg',
    alt: 'Bobcat with auger attachment drilling beside a residential home',
  },
  {
    title: 'Bobcat Excavators',
    lead: 'Bobcat E50 Excavator and Bobcat E20 Excavator, the E20 ideal for smaller jobs and tighter-access areas.',
    bulletsLabel: 'Attachments include:',
    bullets: [
      'Flail mowers',
      'Grabs',
      'Earthmoving buckets',
      'General excavation and earthmoving attachments',
    ],
    img: '/images/excavator-truck.jpg',
    alt: 'Excavation and earthworks in progress',
  },
  {
    title: 'Commercial Toro Ride-On Mower',
    lead: 'Suitable for larger commercial grounds, open areas and regular property maintenance.',
    img: '/images/commercial-mower-carpark.jpg',
    alt: 'Ride-on mower working a commercial car park garden bed',
  },
  {
    title: 'Commercial Zero-Turn Mower',
    lead: 'For efficient mowing around buildings, gardens, pathways and more detailed areas.',
    img: '/images/mower-mowing.jpg',
    alt: 'Commercial mower cutting a large rural paddock',
  },
  {
    title: 'Kubota ZD1221 Ride-On Mower',
    lead: 'A commercial diesel mower for larger mowing jobs and ongoing grounds maintenance.',
    img: '/images/mower.jpg',
    alt: 'Commercial ride-on mower on a grassed area',
  },
  {
    title: 'John Deere Compact Tractor with Front-End Loader',
    lead: 'Suitable for landscaping, site clean-ups, moving soil and materials, property maintenance and general earthworks.',
    img: '/images/farmyard.jpg',
    alt: 'Rural property yard used for equipment and materials handling',
  },
  {
    title: 'Utility Vehicle',
    lead: 'For transporting equipment, tools and materials around larger properties and work sites.',
    img: '/images/rural-truck-paddock.jpg',
    alt: 'Markwicks Services truck and trailer parked in a rural paddock',
  },
  {
    title: 'Work Utes & Tipper/Tray Trucks',
    lead: 'Allowing our team to transport machinery, green waste, landscaping materials and equipment between sites.',
    img: '/images/story-fleet.jpg',
    alt: 'Markwicks Services truck, ute and trailer fleet parked together on a suburban street',
  },
  {
    title: 'Commercial Handheld Equipment',
    lead: 'Including brushcutters, blowers and other equipment required for lawn, garden and grounds maintenance.',
    img: '/images/residential-lawn-care.jpg',
    alt: 'Neatly mowed residential front lawn',
  },
  {
    title: 'Utility Buggy with Commercial Spraying Equipment',
    lead: 'Set up for efficient spraying across larger commercial properties, grounds and open areas, including weed control and property maintenance applications.',
    img: '/images/weed-management.jpg',
    alt: 'Flail mower attachment clearing overgrown grass and weeds on a residential property',
  },
]

function EquipmentRow({ item, index }) {
  const ref = useRef(null)
  const reverse = index % 2 === 1

  useGsapEffect(({ gsap, ScrollTrigger }) => {
      gsap.from('.equip-text', {
        scrollTrigger: { trigger: ref.current, start: 'top 82%', once: true },
        x: reverse ? 40 : -40, opacity: 0, duration: 0.9, ease: 'power3.out',
      })
      gsap.from('.equip-photo', {
        scrollTrigger: { trigger: ref.current, start: 'top 82%', once: true },
        x: reverse ? -40 : 40, opacity: 0, duration: 0.9, delay: 0.1, ease: 'power3.out',
      })
  }, [reverse], ref)

  const num = String(index + 1).padStart(2, '0')

  return (
    <section ref={ref} className={`py-14 sm:py-20 border-b border-divider ${index % 2 === 0 ? 'bg-background' : 'bg-surface'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className={`equip-text ${reverse ? 'lg:order-2' : ''}`}>
          <p className="font-mono text-xs text-primary mb-3 tabular-nums">{num} / {String(EQUIPMENT.length).padStart(2, '0')}</p>
          <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tighter mb-3">{item.title}</h3>
          <p className="text-muted leading-relaxed">{item.lead}</p>
          {item.bullets && (
            <div className="mt-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted mb-3">{item.bulletsLabel}</p>
              <ul className="space-y-2">
                {item.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-ink">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" strokeWidth={2.2} />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className={`equip-photo ${reverse ? 'lg:order-1' : ''}`}>
          <div className="rounded-3xl overflow-hidden border border-divider aspect-[4/3]">
            <Img src={item.img} alt={item.alt} loading="lazy" decoding="async" className="h-full w-full object-cover" sizes="(min-width: 1024px) 50vw, 100vw" />
          </div>
        </div>
      </div>
    </section>
  )
}

function EquipmentCTA() {
  const ref = useRef(null)
  useGsapEffect(({ gsap, ScrollTrigger }) => {
      gsap.from('.equip-cta-content', {
        scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true },
        y: 30, opacity: 0, duration: 0.9, ease: 'power3.out',
      })
  }, [], ref)

  return (
    <section ref={ref} className="py-24 sm:py-28">
      <div className="equip-cta-content max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 rounded-4xl bg-deep px-8 py-14 sm:py-16 text-center">
        <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tighter text-white mb-4">
          Our own equipment, on your site when you need it.
        </h2>
        <p className="text-white/70 max-w-xl mx-auto mb-8 leading-relaxed">
          No waiting on hired machinery. The fleet above is ours, maintained and ready, so jobs stay on schedule.
        </p>
        <Link to="/contact" className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-primary/30">
          Get in Touch <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}

export default function Equipment() {
  return (
    <>
      <PageBanner
        eyebrow="Our Fleet"
        title="The equipment behind every job we take on"
        subtitle="From skid steers and excavators to commercial mowers and spray rigs, our own fleet, maintained and ready, so we're never waiting on hired machinery."
        img="/images/bobcat-action.jpg"
      />

      {EQUIPMENT.map((item, i) => (
        <EquipmentRow key={item.title} item={item} index={i} />
      ))}

      <EquipmentCTA />
    </>
  )
}
