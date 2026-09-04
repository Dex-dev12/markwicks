// JSON-LD structured data, emitted server-side by prerender.mjs so it lands in
// the raw HTML response rather than depending on Google's render pass.
//
// Every value below is taken from the site's own contact/about content.
// Anything unverified (priceRange, ABN, social profiles, geo coordinates,
// founding date) is deliberately omitted rather than guessed - fabricated
// structured data breaches Google's guidelines. AggregateRating is likewise
// absent: there is one genuine testimonial and no star ratings.

import { SERVICES } from './services.js'

const SITE = 'https://markwicksservices.com.au'
const BUSINESS_ID = `${SITE}/#business`

export const BUSINESS = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': BUSINESS_ID,
  name: 'Markwicks Services',
  url: `${SITE}/`,
  image: `${SITE}/logo.png`,
  logo: `${SITE}/logo.png`,
  telephone: '+61432165468',
  email: 'contact@markwicksservices.com.au',
  description:
    'Scheduled commercial grounds maintenance, contract mowing, landscaping, excavation and weed management across Bathurst and the Central West NSW.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '4 Jarrah Court',
    addressLocality: 'Kelso',
    addressRegion: 'NSW',
    postalCode: '2795',
    addressCountry: 'AU',
  },
  areaServed: [
    { '@type': 'City', name: 'Bathurst' },
    { '@type': 'AdministrativeArea', name: 'Central West NSW' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '07:00',
      closes: '16:00',
    },
  ],
}

function breadcrumb(trail) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE}${item.path}`,
    })),
  }
}

function serviceSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE}/services/${service.slug}#service`,
    name: service.title,
    description: service.text,
    serviceType: service.title,
    provider: { '@id': BUSINESS_ID },
    areaServed: [
      { '@type': 'City', name: 'Bathurst' },
      { '@type': 'AdministrativeArea', name: 'Central West NSW' },
    ],
  }
}

// Returns the JSON-LD blocks belonging on a given route.
export function schemaFor(pathname) {
  const key = pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname

  if (key === '/') return [BUSINESS]

  const blocks = []
  const serviceMatch = key.match(/^\/services\/(.+)$/)

  if (serviceMatch) {
    const service = SERVICES.find((s) => s.slug === serviceMatch[1])
    if (service) {
      blocks.push(serviceSchema(service))
      blocks.push(
        breadcrumb([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: service.title, path: key },
        ])
      )
    }
    return blocks
  }

  const NAMES = {
    '/about': 'About',
    '/services': 'Services',
    '/equipment': 'Equipment',
    '/portfolio': 'Portfolio',
    '/contact': 'Contact',
  }
  if (NAMES[key]) {
    blocks.push(breadcrumb([{ name: 'Home', path: '/' }, { name: NAMES[key], path: key }]))
  }
  return blocks
}
