import { Building2, Sprout, Tractor, Leaf, Shovel, Home as HomeIcon } from 'lucide-react'

export const SERVICES = [
  {
    slug: 'residential-services',
    icon: HomeIcon,
    title: 'Residential Services',
    text: 'Lawn mowing, garden maintenance and property upkeep for homes and weekenders across the Bathurst region.',
    body: "We still look after home and weekender properties across Bathurst and the Central West — mowing, garden maintenance, hedge trimming and the general upkeep that keeps a property presentable. Our focus has shifted toward commercial and institutional contracts, so residential work sits alongside that as a smaller part of what we do, not something we've phased out.",
    bullets: ['Lawn Mowing', 'Garden Maintenance', 'Hedge Trimming', 'Weed Control', 'Brush Cutting', 'Pressure Washing', 'Green Waste Removal', 'Property Maintenance'],
    img: '/images/farmyard.jpg',
    alt: 'Residential lawn mowing and garden maintenance',
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
  },
  {
    slug: 'weed-management',
    icon: Leaf,
    title: 'Weed Management',
    text: 'Weed control and herbicide application for rural, commercial and noxious weed management needs.',
    body: "Weed control runs alongside most of our maintenance contracts, and we also take it on as a standalone job — herbicide applications, noxious weed management, and weed control across rural properties and commercial sites.",
    bullets: ['Weed Control', 'Noxious Weed Management', 'Herbicide Applications', 'Rural Weed Management', 'Commercial Weed Management'],
    img: '/images/winter-wheat.jpg',
    alt: 'Tractor applying herbicide spray across a paddock',
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
  },
]

export function getServiceBySlug(slug) {
  return SERVICES.find((s) => s.slug === slug)
}
