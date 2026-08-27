import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowUpRight, ShieldCheck, BadgeCheck, Award, Truck } from 'lucide-react'
import { PageBanner, TRUSTED_BY } from '../components/shared.jsx'
import { CASE_STUDIES } from '../data/caseStudies.js'

const STORY_PHOTOS = [
  { src: '/images/story-fleet.jpg', alt: 'Markwicks Services truck, ute and trailer fleet parked together on a suburban street' },
  { src: '/images/story-bobcat-auger.jpg', alt: 'Markwicks Services crew member operating a Bobcat with auger attachment beside a tree' },
  { src: '/images/story-truck-steps.jpg', alt: 'Markwicks Services branded truck at a rural property during a garden steps installation' },
  { src: '/images/story-pergola-crew.jpg', alt: 'Markwicks Services crew member building a pergola roof' },
]

const WHY_PHOTOS = [
  { src: '/images/bobcat-action.jpg', alt: 'Markwicks Services operating a Bobcat excavator on site' },
  { src: '/images/campus-parking-mulch.jpg', alt: 'Freshly mulched garden beds at an institutional car park' },
  { src: '/images/estate-street-crew.jpg', alt: 'Markwicks Services crew and branded truck on a residential estate street' },
  { src: '/images/excavator-truck.jpg', alt: 'Excavation and earthworks in progress' },
]

const WHY_HIGHLIGHTS = [
  {
    icon: ShieldCheck,
    title: 'Fully Insured',
    text: 'Public liability and workers compensation cover, sighted before we set foot on any site.',
  },
  {
    icon: BadgeCheck,
    title: 'Licensed & Qualified',
    text: 'Relevant trade licensing and site safety qualifications held across the crew.',
  },
  {
    icon: Award,
    title: '15+ Years Local',
    text: 'Two generations of the Markwick family working the Bathurst region',
  },
  {
    icon: Truck,
    title: 'Commercial Equipment',
    text: 'Our owned and operated mowers, tractors, slashers, excavators and trucks',
  },
]

function WhyChooseUsSection() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.why-heading', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        x: -40, opacity: 0, duration: 0.9, ease: 'power3.out',
      })
      gsap.from('.why-photo', {
        scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true },
        y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      })
      gsap.from('.why-card', {
        scrollTrigger: { trigger: ref.current, start: 'top 70%', once: true },
        y: 30, opacity: 0, duration: 0.7, stagger: 0.1, delay: 0.1, ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="py-24 sm:py-32 bg-surface border-y border-divider">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="why-heading max-w-2xl mb-14">
          <h2 className="relative inline-block w-fit font-display text-3xl sm:text-4xl font-bold tracking-tighter pb-2 mb-6 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:bg-primary">Why Choose Us</h2>
          <p className="text-muted leading-relaxed mb-4">
            Commercial and government buyers need proof, not promises, before they hand over a site. Here's what we bring to the table before a contract is even signed.
          </p>
          <p className="text-muted leading-relaxed">
            Every site runs under a strict WHS management system with complete insurance. So our clients deal with a compliant, accountable business, not a casual operator. It's the same crew and the same standard whether it's a single lawn or a standing multi site contract.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {WHY_PHOTOS.map((p) => (
            <div key={p.src} className="why-photo rounded-2xl overflow-hidden border border-divider aspect-square">
              <img src={p.src} alt={p.alt} loading="lazy" decoding="async" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {WHY_HIGHLIGHTS.map((h) => (
            <div key={h.title} className="why-card rounded-3xl border border-divider bg-background p-6">
              <div className="h-11 w-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <h.icon className="h-5 w-5 text-primary" strokeWidth={2.2} />
              </div>
              <h3 className="font-display font-semibold text-ink mb-1.5">{h.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{h.text}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-muted max-w-2xl mx-auto">
          Trusted by schools, TAFE NSW, aged care facilities, strata complexes, industrial sites, commercial properties and rural landholders across the Central West.
        </p>
      </div>
    </section>
  )
}

function OurClientsSection() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.clients-heading', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        x: -40, opacity: 0, duration: 0.9, ease: 'power3.out',
      })
      gsap.from('.client-card', {
        scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true },
        y: 24, opacity: 0, duration: 0.6, stagger: 0.04, ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="py-24 sm:py-32 border-b border-divider">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="clients-heading max-w-2xl mb-14">
          <h2 className="relative inline-block w-fit font-display text-3xl sm:text-4xl font-bold tracking-tighter pb-2 mb-6 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:bg-primary">Our Clients</h2>
          <p className="text-muted leading-relaxed">
            View a full list of our clients and who we have worked with. We have worked with clients across a huge range of industries whether it's strata bodies, retirement communities, private hospitals. Your business could be next.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {TRUSTED_BY.map((c) => (
            <div
              key={c.name}
              className="client-card rounded-2xl border border-divider bg-surface flex flex-col items-center justify-center gap-4 py-8 px-4"
            >
              <img
                src={c.logo}
                alt={c.name}
                loading="lazy"
                decoding="async"
                className="h-11 w-auto max-w-[80%] object-contain"
              />
              <p className="text-xs sm:text-sm font-medium text-ink text-center leading-snug">{c.name}</p>
            </div>
          ))}
        </div>
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
        x: 40, opacity: 0, duration: 0.7, stagger: 0.08, delay: 0.15, ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid lg:grid-cols-2 gap-16 items-start">
        <div className="story-text">
          <h2 className="relative inline-block w-fit font-display text-3xl sm:text-4xl font-bold tracking-tighter pb-2 mb-6 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full after:bg-primary">Our Story</h2>
          <p className="text-muted leading-relaxed mb-4">
            Markwicks Services is a family-owned and operated business based in Bathurst, NSW, originally starting as a father-and-son team with Clay and Cory Markwick working together. As the business grew, Cory's brothers became involved, bringing additional skills and experience to the team, with Cory's wife, Claudia, later taking on the administration, accounts, client communication, scheduling and day to day business operations.
          </p>
          <p className="text-muted leading-relaxed mb-4">
            What started as a small family operation has continued to grow into a professional team providing grounds maintenance, landscaping, weed control, acreage and rural property maintenance, along with access to earthworks and machinery services through the wider Markwick family.
          </p>
          <p className="text-muted leading-relaxed">
            While the business continues to grow, our focus remains the same: quality workmanship, reliability, strong client relationships and the personal service you expect from a local family business.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {STORY_PHOTOS.map((p) => (
            <div key={p.src} className="story-photo rounded-2xl overflow-hidden border border-divider aspect-square">
              <img src={p.src} alt={p.alt} loading="lazy" decoding="async" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutPortfolioPreview() {
  const ref = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-work-heading', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        x: -40, opacity: 0, duration: 0.9, ease: 'power3.out',
      })
      gsap.from('.about-work-cta', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        x: 40, opacity: 0, duration: 0.9, ease: 'power3.out',
      })
      gsap.from('.about-work-tile', {
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
        <div className="about-work-heading">
          <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] text-primary mb-3">Our Work</p>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tighter max-w-2xl">See the kind of work we've been doing.</h2>
        </div>
        <Link to="/portfolio" className="about-work-cta magnetic-btn inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-primary/30 shrink-0">
          View Portfolio <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((c) => (
            <Link key={c.slug} to="/portfolio" className="about-work-tile rounded-3xl overflow-hidden border border-divider bg-surface group">
              <div className="relative aspect-[4/3] overflow-hidden bg-background">
                <img src={c.img} alt={c.alt} loading="lazy" decoding="async" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
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

export default function About() {
  useEffect(() => {
    const id = setTimeout(() => ScrollTrigger.refresh(), 200)
    return () => clearTimeout(id)
  }, [])

  return (
    <>
      <PageBanner
        eyebrow="About Us"
        title="A dedicated hardworking crew"
        subtitle="A family owned and operated business built across two generations of the Markwick family, treating every site, from a single lawn to a multi site commercial contract, with the same standard."
        img="/images/about-header.jpg"
      />

      <OurStory />

      <WhyChooseUsSection />

      <OurClientsSection />

      <AboutPortfolioPreview />
    </>
  )
}
