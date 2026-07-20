import { Scissors, Building2, Sprout, Shovel, Leaf, Home as HomeIcon } from 'lucide-react'

export const SERVICES = [
  {
    slug: 'commercial-grounds-maintenance',
    icon: Building2,
    title: 'Commercial Grounds Maintenance',
    text: 'Scheduled mowing and grounds care for councils, TAFE campuses, schools, strata and property managers.',
    body: "Our core business. We run standing grounds-maintenance contracts across multiple commercial and institutional sites — mowing, edging, garden bed upkeep and general presentation, on a fixed schedule so the site always looks the way it's supposed to without anyone having to chase us.",
    bullets: ['Multi-site contracts (councils, TAFE, schools, strata)', 'Fixed recurring schedule, not ad-hoc', 'One team, one point of contact across all sites', 'Reporting available for property/facilities managers'],
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/TORO%20Z%20Master%20Commercial%20Zero-Turn%20Riders%20mower%20at%20Construct%20Expo%20Utilaje%202010.JPG?width=1400',
    alt: 'Commercial zero-turn mower used for scheduled grounds maintenance',
  },
  {
    slug: 'contract-mowing',
    icon: Scissors,
    title: 'Contract Mowing',
    text: 'Reliable, scheduled mowing for commercial and multi-site clients across the Bathurst region.',
    body: "Fortnightly, monthly, or whatever cycle the site needs — contract mowing that runs on a schedule you can set and forget. Built for clients managing multiple properties who need consistency across every site, not just one.",
    bullets: ['Flexible recurring cycles to suit the site', 'Consistent standard across every visit', 'Multi-site scheduling for property managers', 'Bathurst region wide'],
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Spraying%20Winter%20Wheat%20near%20Worlaby%20-%20geograph.org.uk%20-%201739571.jpg?width=1400',
    alt: 'Contract mowing and grounds care in progress',
  },
  {
    slug: 'property-maintenance',
    icon: Sprout,
    title: 'Property Maintenance',
    text: 'General upkeep between mows — garden beds, edges, presentation, and the small jobs that keep a site tidy.',
    body: "Mowing is only part of keeping a property presentable. We handle the general upkeep around it too — garden bed maintenance, edging, tidying communal areas — so commercial and strata sites stay consistently presentable, not just freshly mowed once a fortnight.",
    bullets: ['Garden bed upkeep and weeding', 'Edging and general tidying', 'Suits strata and multi-tenant sites', 'Bundled with mowing contracts or standalone'],
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Several%20people%20planting%20trees.jpg?width=1400',
    alt: 'General property and garden bed maintenance',
  },
  {
    slug: 'excavation-site-work',
    icon: Shovel,
    title: 'Excavation & Site Work',
    text: 'Small-to-medium excavation work — site prep, trenching and drainage — alongside our grounds contracts.',
    body: "Alongside our grounds maintenance work, we take on excavation and site work — trenching, drainage, and site prep for smaller projects. A useful add-on for clients who already have us on site for grounds care and need earthworks done too.",
    bullets: ['Trenching and drainage work', 'Small-to-medium site prep', 'Convenient for existing grounds-contract clients', 'Residential and commercial'],
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Digger%20at%20Low%20Bank%20Farm%20-%20geograph.org.uk%20-%201053732.jpg?width=1400',
    alt: 'Excavation and site work',
  },
  {
    slug: 'mulching-garden-care',
    icon: Leaf,
    title: 'Mulching & Garden Care',
    text: 'Mulching, garden refresh and vegetation tidy-ups for commercial grounds and residential properties.',
    body: "Mulching keeps garden beds healthy and presentable between seasons. We handle mulch delivery and spreading, garden bed refreshes and general vegetation tidy-ups — usually scheduled alongside a grounds maintenance contract, but available as a standalone job too.",
    bullets: ['Mulch supply and spreading', 'Garden bed refreshes', 'Vegetation tidy-ups', 'Standalone or bundled with maintenance contracts'],
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Construction%20site%20excavator%20and%20truck.jpg?width=1400',
    alt: 'Mulching and garden care work',
  },
  {
    slug: 'residential-grounds-care',
    icon: HomeIcon,
    title: 'Residential Grounds Care',
    text: 'Mowing and grounds care for home and weekender properties across the Bathurst region.',
    body: "We still look after home and weekender properties across the Bathurst region — mowing, edging and general grounds care, the same reliable standard we run on our commercial contracts. Our focus has shifted toward commercial and institutional work, so residential availability varies by season.",
    bullets: ['Mowing and edging for homes and weekenders', 'Same standard as our commercial contracts', 'Availability varies — commercial contracts take priority', 'Bathurst region'],
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Grange%20Farm%20Farmyard%20-%20geograph.org.uk%20-%20244947.jpg?width=1400',
    alt: 'Residential grounds care',
  },
]

export function getServiceBySlug(slug) {
  return SERVICES.find((s) => s.slug === slug)
}
