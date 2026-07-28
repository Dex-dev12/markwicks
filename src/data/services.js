import { Building2, Sprout, Tractor, Leaf, Shovel, Home as HomeIcon } from 'lucide-react'

export const SERVICES = [
  {
    slug: 'residential-services',
    icon: HomeIcon,
    title: 'Residential Services',
    text: 'Lawn mowing, garden maintenance and property upkeep for homes and weekenders across the Bathurst region.',
    body: "We still look after home and weekender properties across Bathurst and the Central West — mowing, garden maintenance, hedge trimming and the general upkeep that keeps a property presentable. Our focus has shifted toward commercial and institutional contracts, so residential work sits alongside that as a smaller part of what we do, not something we've phased out.",
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
    body: "Our core business. We run standing grounds-maintenance contracts across schools, TAFE NSW campuses, aged care facilities, strata complexes, industrial sites and commercial properties — on a fixed recurring schedule, so the site always looks the way it's supposed to without anyone having to chase us.",
    bullets: ['Schools', 'TAFE NSW', 'Aged Care', 'Strata', 'Industrial Sites', 'Commercial Properties', 'Scheduled Maintenance Programs'],
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
    body: "From a single front yard transformation to a full property makeover, we handle landscaping work end to end — garden beds, decorative gravel, edging, retaining walls, and turf and site preparation — whether it's a stand-alone project or part of a larger commercial site.",
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
    body: "Our equipment is built for the bigger properties that standard mowing services can't handle — acreage mowing, slashing, tractor work and general grounds maintenance for rural landholders, plus property clearing and fire hazard reduction ahead of the fire season.",
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
    body: "Weed control runs alongside most of our maintenance contracts, and we also take it on as a standalone job — herbicide applications, noxious weed management, and weed control across rural properties and commercial sites.",
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
    body: "Alongside our grounds maintenance work, we take on earthworks and excavation — bobcat work, trenching, levelling and site preparation, for jobs ranging from small residential projects to larger rural and commercial site works.",
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
