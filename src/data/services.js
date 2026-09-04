import { Building2, Sprout, Tractor, Leaf, Shovel, Home as HomeIcon } from 'lucide-react'

export const SERVICES = [
  {
    slug: 'residential-services',
    icon: HomeIcon,
    title: 'Residential Services',
    text: 'Lawn mowing, garden maintenance and property upkeep for homes and weekenders across the Bathurst region.',
    body: "We still look after home and weekender properties across Bathurst and the Central West: mowing, garden maintenance, hedge trimming and the general upkeep that keeps a property presentable. Our focus has shifted toward commercial and institutional contracts, so residential work sits alongside that as a smaller part of what we do, not something we've phased out.",
    bullets: ['Lawn Mowing', 'Garden Maintenance', 'Hedge Trimming', 'Weed Control', 'Brush Cutting', 'Pressure Washing', 'Green Waste Removal', 'Property Maintenance'],
    img: '/images/residential-lawn-care.jpg',
    alt: 'Neatly mowed residential front lawn',
    gallery: [
      { src: '/images/residential-lawn-care.jpg', alt: 'Neatly mowed residential front lawn' },
      { src: '/images/residential-garden-bed-edging.jpg', alt: 'Crew member edging a residential front garden bed' },
      { src: '/images/contact-header.jpg', alt: 'Established residential front yard with garden bed and lawn' },
    ],
  },
  {
    slug: 'commercial-grounds-maintenance',
    icon: Building2,
    title: 'Commercial Grounds Maintenance',
    text: 'Scheduled grounds maintenance for schools, TAFE NSW, aged care, strata and industrial sites across the Bathurst region.',
    body: "Our core business. We run standing grounds-maintenance contracts across schools, TAFE NSW campuses, aged care facilities, strata complexes, industrial sites and commercial properties, on a fixed recurring schedule, so the site always looks the way it's supposed to without anyone having to chase us.",
    bullets: ['Schools', 'TAFE NSW', 'Aged Care', 'Strata', 'Industrial Sites', 'Commercial Properties', 'Scheduled Maintenance Programs'],
    intro: "Grounds maintenance on a commercial or institutional site is a scheduling problem as much as a landscaping one. The lawns, garden beds and hard surfaces need to look consistently presentable without anyone on site having to think about it, and the work has to happen around the people using the place: students between classes, residents in aged care, staff and deliveries on an industrial site. That is the part we are set up for.",
    sections: [
      {
        heading: 'How a standing contract works',
        body: "Most of our commercial work runs on a fixed recurring schedule agreed up front, rather than ad-hoc callouts. We agree the scope and frequency for each site, then the same crew works to that cycle through the year, adjusting for growth rates through spring and summer and tapering back over winter. The point of a standing schedule is that the site never drifts into looking neglected, and nobody at your end has to chase us to book the next visit.",
      },
      {
        heading: 'Working around occupied sites',
        body: "Schools, TAFE campuses, aged care facilities and hospitals all have periods where noisy equipment is a problem and areas that need to stay clear. We plan visits around those constraints rather than turning up and working through them. On education sites that usually means the bulk of the noisy work happens outside teaching hours or during breaks; on aged care and health sites it means keeping access paths clear and being conscious of residents and visitors moving through.",
      },
      {
        heading: 'What a site typically includes',
        body: "The exact scope varies, but a standing grounds contract usually covers mowing and edging to a set standard, garden bed maintenance and weeding, mulching on an agreed cycle, hedge and shrub trimming, and keeping car parks, footpaths and entries clear of clippings and debris. Larger sites often add seasonal work such as pruning, turf renovation or mulch top-ups scheduled into the annual cycle rather than quoted each time.",
      },
      {
        heading: 'Who we work with around Bathurst',
        body: "Our commercial work sits across schools, TAFE NSW campuses, aged care facilities, strata complexes, industrial sites and commercial properties through Bathurst, Kelso and the surrounding Central West. That mix matters: an institutional site is judged by whether it looks cared for every day of the term, not by how it looks the week after a one-off tidy up.",
      },
    ],
    faqs: [
      { q: 'Do you work to a fixed schedule or on call?', a: 'Standing contracts run to a fixed recurring schedule agreed at the start, with the frequency adjusted across the seasons as growth rates change. Ad-hoc work can be arranged, but the recurring schedule is what keeps a site consistently presentable.' },
      { q: 'Can you work around school hours and occupied buildings?', a: 'Yes. On education, aged care and health sites we plan the noisy work around teaching hours, quiet periods and access requirements rather than working straight through them.' },
      { q: 'What areas around Bathurst do you cover?', a: 'Bathurst and Kelso primarily, extending across the Central West including Orange, Lithgow, Oberon, Blayney, Portland and Wallerawang depending on the site and schedule.' },
      { q: 'Do you handle one-off work as well as contracts?', a: 'Yes, though standing grounds contracts are the core of what we do. One-off projects such as landscaping, mulching or excavation are handled separately and can be scheduled alongside an existing contract.' },
      { q: 'How do we get a quote for a commercial site?', a: 'Get in touch and we will arrange a site visit to look at the areas involved, the standard you need and how often it should be maintained, then put together a schedule and price against that scope.' },
    ],
    img: '/images/parking-lot-mulch.jpg',
    alt: 'Completed commercial car park mulching and garden bed work',
    gallery: [
      { src: '/images/parking-lot-mulch.jpg', alt: 'Completed commercial car park mulching and garden bed work' },
      { src: '/images/commercial-mower-carpark.jpg', alt: 'Ride-on mower working a commercial car park garden bed' },
      { src: '/images/commercial-carpark-garden-bed.jpg', alt: 'Freshly mulched garden bed at a commercial car park' },
    ],
  },
  {
    slug: 'landscaping',
    icon: Sprout,
    title: 'Landscaping',
    text: 'Landscape renovations, garden beds and property makeovers for residential and commercial sites.',
    body: "From a single front yard transformation to a full property makeover, we handle landscaping work end to end: garden beds, decorative gravel, edging, retaining walls, and turf and site preparation, whether it's a stand-alone project or part of a larger commercial site.",
    bullets: ['Landscape Renovations', 'Front Yard Transformations', 'Garden Beds', 'Decorative Gravel', 'Edging', 'Turf Preparation', 'Site Preparation', 'Retaining Walls', 'Property Makeovers'],
    img: '/images/gravel-pathway.jpg',
    alt: 'Landscaped gravel pathway and garden bed on a rural property',
    gallery: [
      { src: '/images/gravel-pathway.jpg', alt: 'Landscaped gravel pathway and garden bed on a rural property' },
      { src: '/images/landscaping-retaining-wall-build.jpg', alt: 'Timber retaining wall under construction in a backyard' },
      { src: '/images/landscaping-mulch-edging.jpg', alt: 'Freshly edged mulch garden bed along a rural property fence line' },
    ],
  },
  {
    slug: 'rural-acreage-services',
    icon: Tractor,
    title: 'Rural & Acreage Services',
    text: 'Acreage mowing, slashing and property maintenance for rural landholders across the Central West.',
    body: "Our equipment is built for the bigger properties that standard mowing services can't handle: acreage mowing, slashing, tractor work and general grounds maintenance for rural landholders, plus property clearing and fire hazard reduction ahead of the fire season.",
    bullets: ['Acreage Mowing', 'Slashing', 'Weed Management', 'Property Clearing', 'Grounds Maintenance', 'Tractor Work', 'Earthworks', 'Fire Hazard Reduction', 'Rural Property Maintenance'],
    img: '/images/mower-mowing.jpg',
    alt: 'Commercial mower cutting a large rural paddock',
    gallery: [
      { src: '/images/mower-mowing.jpg', alt: 'Commercial mower cutting a large rural paddock' },
      { src: '/images/rural-truck-paddock.jpg', alt: 'Markwicks Services truck and trailer parked in a rural paddock' },
      { src: '/images/rural-paddock-slashing.jpg', alt: 'Slashed dry paddock on a rural Central West property' },
    ],
  },
  {
    slug: 'weed-management',
    icon: Leaf,
    title: 'Weed Management',
    text: 'Weed control and herbicide application for rural, commercial and noxious weed management needs.',
    body: "Weed control runs alongside most of our maintenance contracts, and we also take it on as a standalone job: herbicide applications, noxious weed management, and weed control across rural properties and commercial sites.",
    bullets: ['Weed Control', 'Noxious Weed Management', 'Herbicide Applications', 'Rural Weed Management', 'Commercial Weed Management'],
    img: '/images/weed-management.jpg',
    alt: 'Flail mower attachment clearing overgrown grass and weeds on a residential property',
    gallery: [
      { src: '/images/weed-management.jpg', alt: 'Flail mower attachment clearing overgrown grass and weeds on a residential property' },
    ],
  },
  {
    slug: 'earthworks-excavation',
    icon: Shovel,
    title: 'Earthworks & Excavation',
    text: 'Bobcat work, trenching and site preparation for small and large earthworks projects.',
    body: "Alongside our grounds maintenance work, we take on earthworks and excavation: bobcat work, trenching, levelling and site preparation, for jobs ranging from small residential projects to larger rural and commercial site works.",
    bullets: ['Excavation', 'Bobcat Work', 'Site Preparation', 'Trenching', 'Levelling', 'Property Clearing', 'Landscape Excavation', 'Rural Projects', 'Small and Large Earthworks'],
    img: '/images/bobcat-action.jpg',
    alt: 'Markwicks Services operating a Bobcat excavator on site',
    gallery: [
      { src: '/images/bobcat-action.jpg', alt: 'Markwicks Services operating a Bobcat excavator on site' },
      { src: '/images/earthworks-bobcat-auger-residential.jpg', alt: 'Bobcat with auger attachment drilling beside a residential home' },
      { src: '/images/earthworks-rural-excavation-pit.jpg', alt: 'Excavation pit and truck at a rural property earthworks site' },
    ],
  },
]

export function getServiceBySlug(slug) {
  return SERVICES.find((s) => s.slug === slug)
}
