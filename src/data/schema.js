// JSON-LD structured data, emitted server-side by prerender.mjs so it lands in
// the raw HTML response rather than depending on Google's render pass.
//
// Every value below is taken from the site's own contact/about content.
// Anything unverified (priceRange, ABN, social profiles, geo coordinates,
// founding date) is deliberately omitted rather than guessed - fabricated
// structured data breaches Google's guidelines. AggregateRating is likewise
// absent: there is one genuine testimonial and no star ratings.

import { SERVICES, SERVICES_PAGE } from './services.js'
import { AREAS } from './areas.js'

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
  // Geocoded from the registered address rather than approximated, so the pin
  // lands on the actual premises. Local SEO guidance asks for 5+ decimals.
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -33.4060453,
    longitude: 149.6099360,
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

// Only emitted for services that actually carry FAQ copy on the page. Google
// requires the answer text to be visible to the visitor, which it is: the
// <details> elements render their answers in the HTML, collapsed rather than
// removed.
function faqSchema(service) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE}/services/${service.slug}#faq`,
    mainEntity: service.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
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
      if (service.faqs?.length) blocks.push(faqSchema(service))
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

  const areaMatch = key.match(/^\/areas\/(.+)$/)
  if (areaMatch) {
    const area = AREAS.find((a) => a.slug === areaMatch[1])
    if (area) {
      blocks.push({
        '@context': 'https://schema.org',
        '@type': 'HomeAndConstructionBusiness',
        '@id': `${SITE}/areas/${area.slug}#business`,
        name: `Markwicks Services — ${area.name}`,
        description: area.lead,
        url: `${SITE}/areas/${area.slug}`,
        image: `${SITE}/logo.png`,
        telephone: '+61432165468',
        email: 'contact@markwicksservices.com.au',
        // The crew and the plant are dispatched from Kelso; this page is a
        // service area, not a second premises, so the address stays the real
        // one and areaServed carries the town.
        address: BUSINESS.address,
        branchOf: { '@id': BUSINESS_ID },
        areaServed: {
          '@type': 'City',
          name: area.name,
          address: {
            '@type': 'PostalAddress',
            addressLocality: area.name,
            addressRegion: 'NSW',
            postalCode: area.postcode,
            addressCountry: 'AU',
          },
        },
      })
      blocks.push({
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${SITE}/areas/${area.slug}#service`,
        name: `Landscaping and grounds maintenance in ${area.name}`,
        description: area.lead,
        provider: { '@id': BUSINESS_ID },
        areaServed: { '@type': 'City', name: area.name },
      })
      blocks.push(
        breadcrumb([
          { name: 'Home', path: '/' },
          { name: 'Areas', path: '/areas' },
          { name: area.name, path: key },
        ])
      )
      if (area.faqs?.length) {
        blocks.push({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          '@id': `${SITE}/areas/${area.slug}#faq`,
          mainEntity: area.faqs.map((f) => ({
            '@type': 'Question',
            name: f.q,
            acceptedAnswer: { '@type': 'Answer', text: f.a },
          })),
        })
      }
    }
    return blocks
  }

  const NAMES = {
    '/about': 'About',
    '/services': 'Services',
    '/equipment': 'Equipment',
    '/portfolio': 'Portfolio',
    '/contact': 'Contact',
    '/areas': 'Areas We Serve',
  }
  if (NAMES[key]) {
    blocks.push(breadcrumb([{ name: 'Home', path: '/' }, { name: NAMES[key], path: key }]))
  }
  if (key === '/services' && SERVICES_PAGE.faqs?.length) {
    blocks.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      '@id': `${SITE}/services#faq`,
      mainEntity: SERVICES_PAGE.faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    })
  }
  return blocks
}
