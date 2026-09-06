import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { PageBanner } from '../components/shared.jsx'
import Img from '../components/Img.jsx'

const EQUIPMENT = [
  {
    title: 'Bobcat Skid Steer Loaders',
    lead: 'Bobcat S770 and S650 skid steer loaders, in tracked and wheeled options to suit different sites and ground conditions.',
    detail: "The skid steers do the widest range of work in the fleet, and running them in both tracked and wheeled configurations is the reason why. Tracks spread the load on soft, wet or sloping ground where wheels would dig in or lose traction, which matters on rural blocks through winter and on any site that has had rain in the past week. Wheels are faster and gentler on established lawns and hard surfaces. The attachments do the rest: a forestry mulcher cuts and mulches woody regrowth in one pass instead of leaving material to rake and burn, slashers in several sizes handle paddocks depending on what has grown in them, and buckets and grabs cover the earthmoving.",
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
    detail: "Two machines, and the size difference matters more than it sounds. The E20 is the one that fits through a standard side gate and works in a suburban backyard without taking out the fence or the driveway, which is what makes residential excavation viable at all on tight blocks. The E50 handles volume on open sites and has the reach and breakout force for rock, which is a routine consideration around Bathurst and the Central West where stone sits shallow. A flail mower attachment turns the excavator into a tool for drains, table drains and rough edges that no mower can reach.",
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
    detail: "Built for open ground: sports fields, campus lawns, large commercial frontages and the big open areas on a grounds contract. A domestic mower will cut the same grass, but it will take three times as long and will not hold a consistent height across a large area, which is exactly what an institutional site is judged on. Deck width and engine capacity are what separate a commercial machine here, not features.",
    img: '/images/commercial-mower-carpark.jpg',
    alt: 'Ride-on mower working a commercial car park garden bed',
  },
  {
    title: 'Commercial Zero-Turn Mower',
    lead: 'For efficient mowing around buildings, gardens, pathways and more detailed areas.',
    detail: "The zero-turn exists for everything the Toro cannot get close to. Around garden beds, between buildings, along pathways and through the detailed sections of a commercial site, the turning circle is what determines how much has to be finished by hand afterwards. Less handheld trimming means a faster visit and a tidier result, and on a site that is cut every week through spring that difference compounds.",
    img: '/images/mower-mowing.jpg',
    alt: 'Commercial mower cutting a large rural paddock',
  },
  {
    title: 'Kubota ZD1221 Ride-On Mower',
    lead: 'A commercial diesel mower for larger mowing jobs and ongoing grounds maintenance.',
    detail: "A commercial diesel machine that runs on the larger recurring jobs. Diesel matters on a mower that is under load for most of a working day: it holds torque through heavy, wet spring growth rather than bogging down, and it is more economical over the hours a standing grounds contract puts on a machine. It sits alongside the Toro rather than replacing it, so two machines can work a large site at once.",
    img: '/images/mower.jpg',
    alt: 'Commercial ride-on mower on a grassed area',
  },
  {
    title: 'John Deere Compact Tractor with Front-End Loader',
    lead: 'Suitable for landscaping, site clean-ups, moving soil and materials, property maintenance and general earthworks.',
    detail: "The tractor is the material-handling machine. Soil, mulch, gravel and turf all have to be moved before they can be laid, and doing that with a loader rather than by hand is the difference between a landscaping job taking two days and taking five. It also covers open-country mowing on acreage where speed matters more than manoeuvrability, and general site clean-up work where there is room to operate.",
    img: '/images/farmyard.jpg',
    alt: 'Rural property yard used for equipment and materials handling',
  },
  {
    title: 'Utility Vehicle',
    lead: 'For transporting equipment, tools and materials around larger properties and work sites.',
    detail: "On a large site the time lost walking tools and equipment back and forth is real, and it comes straight out of the working day. The utility vehicle carries equipment, fuel and materials directly to where the crew is working, which matters most on rural blocks and multi-hectare commercial grounds where the working face can be a long way from where the truck is parked.",
    img: '/images/rural-truck-paddock.jpg',
    alt: 'Markwicks Services truck and trailer parked in a rural paddock',
  },
  {
    title: 'Work Utes & Tipper/Tray Trucks',
    lead: 'Allowing our team to transport machinery, green waste, landscaping materials and equipment between sites.',
    detail: "The trucks are what make everything else possible. Machinery has to get to site, and green waste, cleared material and spoil have to leave it. Tipper capacity is why clippings, prunings and excavated material go with us rather than being left in a pile for someone else to deal with, and it is the reason a property clean-up finishes clean rather than finishing with a heap in the corner.",
    img: '/images/story-fleet.jpg',
    alt: 'Markwicks Services truck, ute and trailer fleet parked together on a suburban street',
  },
  {
    title: 'Commercial Handheld Equipment',
    lead: 'Including brushcutters, blowers and other equipment required for lawn, garden and grounds maintenance.',
    detail: "Brushcutters, blowers, hedge trimmers and edgers do the finishing, and the finishing is what a property is actually judged on. A site can be mown perfectly and still look neglected if the edges have crept, the beds have not been cut back and the paths are covered in clippings. Commercial-grade handheld gear holds up to daily use in a way domestic equipment does not.",
    img: '/images/residential-lawn-care.jpg',
    alt: 'Neatly mowed residential front lawn',
  },
  {
    title: 'Utility Buggy with Commercial Spraying Equipment',
    lead: 'Set up for efficient spraying across larger commercial properties, grounds and open areas, including weed control and property maintenance applications.',
    detail: "Spraying by knapsack is viable on a suburban block and hopeless on anything larger. The buggy carries commercial spraying equipment across rural properties, fence lines, dam surrounds, car park edges and the awkward strips no mower reaches, covering ground fast enough that scheduled treatment through the growing season is practical rather than aspirational. Treating during active growth is what actually works; treating after weeds have set seed only tidies up the current year.",
    img: '/images/weed-management.jpg',
    alt: 'Flail mower attachment clearing overgrown grass and weeds on a residential property',
  },
]

function EquipmentRow({ item, index }) {
  const ref = useRef(null)
  const reverse = index % 2 === 1

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.equip-text', {
        scrollTrigger: { trigger: ref.current, start: 'top 82%', once: true },
        x: reverse ? 40 : -40, opacity: 0, duration: 0.9, ease: 'power3.out',
      })
      gsap.from('.equip-photo', {
        scrollTrigger: { trigger: ref.current, start: 'top 82%', once: true },
        x: reverse ? -40 : 40, opacity: 0, duration: 0.9, delay: 0.1, ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [reverse])

  const num = String(index + 1).padStart(2, '0')

  return (
    <section ref={ref} className={`py-14 sm:py-20 border-b border-divider ${index % 2 === 0 ? 'bg-background' : 'bg-surface'}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className={`equip-text ${reverse ? 'lg:order-2' : ''}`}>
          <p className="font-mono text-xs text-primary mb-3 tabular-nums">{num} / {String(EQUIPMENT.length).padStart(2, '0')}</p>
          <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tighter mb-3">{item.title}</h3>
          <p className="text-ink leading-relaxed mb-4">{item.lead}</p>
          {item.detail && <p className="text-muted leading-relaxed">{item.detail}</p>}
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
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.equip-cta-content', {
        scrollTrigger: { trigger: ref.current, start: 'top 85%', once: true },
        y: 30, opacity: 0, duration: 0.9, ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

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

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <p className="max-w-3xl text-ink leading-relaxed text-lg sm:text-xl">
            Most grounds maintenance contractors hire their earthmoving plant in when a job needs it. We own ours,
            and that single decision shapes what we can take on. A maintenance contract can absorb a levelling job
            mid-year, a garden renovation can include the excavation underneath it, and a rural block can be cut
            and cleared in the same week, all without a second contractor and a second schedule to work around.
          </p>
          <p className="max-w-3xl text-muted leading-relaxed mt-5">
            The other reason for the range below is that no single machine suits every site. Ground that is soft in
            August is firm in January, a suburban backyard and an open paddock need different machines entirely,
            and shallow rock changes the answer again. Matching the machine to the site is most of the job.
          </p>
        </div>
      </section>

      {EQUIPMENT.map((item, i) => (
        <EquipmentRow key={item.title} item={item} index={i} />
      ))}

      <EquipmentCTA />
    </>
  )
}
