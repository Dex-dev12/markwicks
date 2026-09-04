// Per-route SEO metadata.
// Every route needs its own entry: without one the page inherits whatever the
// previous route set, which is what produced twelve identically-titled pages.

const SITE = 'https://markwicksservices.com.au'
const DEFAULT_OG_IMAGE = `${SITE}/images/parking-lot-mulch.jpg`

export const SEO = {
  '/': {
    title: 'Grounds Maintenance & Landscaping Bathurst | Markwicks',
    description:
      'Scheduled grounds maintenance, landscaping, acreage mowing and excavation across Bathurst and the Central West. Trusted by schools, TAFE NSW and aged care.',
  },
  '/about': {
    title: 'About Us | Markwicks Services Bathurst',
    description:
      'Family-run grounds maintenance contractors based in Kelso, servicing Bathurst and the Central West. Fully insured, with standing institutional contracts.',
  },
  '/services': {
    title: 'Grounds Maintenance & Landscaping Services | Bathurst',
    description:
      'Commercial grounds maintenance, residential lawn care, landscaping, rural and acreage services, weed management and earthworks across the Bathurst region.',
  },
  '/services/residential-services': {
    title: 'Residential Lawn & Garden Care Bathurst | Markwicks',
    description:
      'Lawn mowing, garden maintenance, hedge trimming and property upkeep for homes and weekenders across Bathurst and the Central West.',
  },
  '/services/commercial-grounds-maintenance': {
    title: 'Commercial Grounds Maintenance Bathurst | Markwicks',
    description:
      'Scheduled grounds maintenance contracts for schools, TAFE NSW campuses, aged care, strata and industrial sites across the Bathurst region.',
  },
  '/services/landscaping': {
    title: 'Landscaping Bathurst | Garden Beds & Turf | Markwicks',
    description:
      'Landscape renovations, garden beds, decorative gravel, edging, retaining walls and turf preparation for residential and commercial sites in Bathurst.',
  },
  '/services/rural-acreage-services': {
    title: 'Rural & Acreage Mowing Bathurst | Markwicks Services',
    description:
      'Slashing, acreage mowing, fence lines and property maintenance for rural blocks and acreage across Bathurst and the Central West.',
  },
  '/services/weed-management': {
    title: 'Weed Management & Spraying Bathurst | Markwicks',
    description:
      'Weed control and herbicide application for commercial, institutional and rural properties across Bathurst and the Central West NSW region.',
  },
  '/services/earthworks-excavation': {
    title: 'Earthworks & Excavation Bathurst | Markwicks Services',
    description:
      'Excavation, trenching, site preparation and earthworks for commercial, rural and residential projects across Bathurst and the Central West.',
  },
  '/portfolio': {
    title: 'Our Work | Grounds Maintenance Projects Bathurst',
    description:
      'Completed grounds maintenance, landscaping and excavation projects across schools, TAFE NSW campuses, aged care and commercial sites in the Bathurst region.',
  },
  '/equipment': {
    title: 'Our Equipment | Markwicks Services Bathurst',
    description:
      'The mowers, tractors, excavators and specialist machinery Markwicks Services runs across commercial and rural grounds maintenance contracts.',
  },
  '/contact': {
    title: 'Contact Us | Markwicks Services Bathurst NSW',
    description:
      'Get a quote for grounds maintenance, landscaping or excavation in Bathurst and the Central West. Call 0432 165 468 or send an enquiry.',
  },
  '/privacy': {
    title: 'Privacy Policy | Markwicks Services',
    description: 'How Markwicks Services collects, uses and protects your personal information.',
  },
  '/terms': {
    title: 'Terms of Service | Markwicks Services',
    description: 'The terms governing use of the Markwicks Services website and our services.',
  },
}

const FALLBACK = SEO['/']

export function getSeo(pathname) {
  // Trailing slashes on anything but the root would otherwise miss the lookup.
  const key = pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
  const meta = SEO[key] || FALLBACK
  return { ...meta, canonical: `${SITE}${key}`, ogImage: DEFAULT_OG_IMAGE }
}
