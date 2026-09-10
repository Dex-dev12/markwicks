// Build-time static generation.
//
// Renders every route to real HTML using react-dom/server in plain Node.
// The previous implementation drove a headless Chrome, which failed on
// Vercel's build image (stock Chromium is missing libnspr4.so, and
// @sparticuz/chromium did not resolve it either). Nothing here needs a
// browser, so there is nothing environment-specific left to break.

import { readFile, writeFile, mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { execFileSync } from 'node:child_process'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST = path.join(__dirname, 'dist')
const SSR_ENTRY = path.join(__dirname, 'dist-ssr', 'entry-server.js')

// Keep in sync with src/routes.jsx. The sitemap is generated from this list
// at build time, so lastmod can never drift from what was actually deployed.
const ROUTES = [
  '/',
  '/about',
  '/services',
  '/services/residential-services',
  '/services/commercial-grounds-maintenance',
  '/services/landscaping',
  '/services/rural-acreage-services',
  '/services/weed-management',
  '/services/earthworks-excavation',
  '/equipment',
  '/portfolio',
  '/contact',
  '/areas',
  '/areas/orange',
  '/areas/lithgow',
  '/areas/oberon',
  '/areas/blayney',
  '/portal',
  '/privacy',
  '/terms',
]

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

function headFor({ title, description, canonical, ogImage }) {
  return [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}" />`,
    `<link rel="canonical" href="${esc(canonical)}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:url" content="${esc(canonical)}" />`,
    `<meta property="og:image" content="${esc(ogImage)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(title)}" />`,
    `<meta name="twitter:description" content="${esc(description)}" />`,
    `<meta name="twitter:image" content="${esc(ogImage)}" />`,
  ].join('\n    ')
}

// JSON-LD goes in the served HTML rather than being injected by React, so it
// does not depend on Google's rendering budget. </script> is escaped because a
// literal one inside a script block would terminate it early.
function jsonLd(blocks) {
  if (!blocks || !blocks.length) return ''
  return blocks
    .map(
      (b) =>
        `<script type="application/ld+json">${JSON.stringify(b).replace(/<\//g, '<\\/')}</script>`
    )
    .join('\n    ')
}

async function main() {
  const template = await readFile(path.join(DIST, 'index.html'), 'utf-8')
  const { render } = await import(SSR_ENTRY)

  let failures = 0
  for (const route of ROUTES) {
    try {
      const { html, seo, schema } = render(route)

      if (html.trim().length < 500) {
        console.error(`  x ${route} produced only ${html.trim().length} chars - check the route exists`)
        failures++
        continue
      }

      let page = template
        // Drop the build-time title/description; the per-route ones replace them.
        .replace(/<title>[\s\S]*?<\/title>\s*/i, '')
        .replace(/<meta\s+name="description"[^>]*>\s*/i, '')
        .replace('</head>', `  ${headFor(seo)}\n  ${jsonLd(schema)}\n  </head>`)
        .replace('<div id="root"></div>', `<div id="root">${html}</div>`)

      const outDir = route === '/' ? DIST : path.join(DIST, route)
      await mkdir(outDir, { recursive: true })
      await writeFile(path.join(outDir, 'index.html'), page, 'utf-8')
      console.log(`  ok ${route.padEnd(45)} ${String(page.length).padStart(6)} bytes`)
    } catch (e) {
      console.error(`  x ${route} failed: ${e.message}`)
      failures++
    }
  }

  if (failures) {
    console.error(`\nPrerender finished with ${failures} failed route(s).`)
    process.exit(1)
  }
  // A hand-maintained sitemap goes stale silently: 12 URLs were still claiming
  // a lastmod that predated the rewrite that tripled their word count, which
  // tells Google there is nothing worth re-crawling.
  const SITEMAP_EXCLUDE = new Set(['/portal', '/privacy', '/terms'])
  const SITEMAP_ROUTES = ROUTES.filter((r) => !SITEMAP_EXCLUDE.has(r))
  const PRIORITY = {"/": "1.0", "/about": "0.8", "/services": "0.9", "/services/residential-services": "0.7", "/services/commercial-grounds-maintenance": "0.7", "/services/landscaping": "0.7", "/services/rural-acreage-services": "0.7", "/services/weed-management": "0.7", "/services/earthworks-excavation": "0.7", "/portfolio": "0.8", "/contact": "0.9", "/equipment": "0.6", "/areas": "0.8", "/areas/orange": "0.8", "/areas/lithgow": "0.8", "/areas/oberon": "0.8", "/areas/blayney": "0.8"}
  const today = new Date().toISOString().slice(0, 10)

  // Every route used to claim the build date, so a one-word edit to a single
  // page moved all 17 lastmods in lockstep. Google only leans on lastmod where
  // it proves accurate; a date that is always identical and always current
  // carries no information, and the signal gets discounted. Derive each date
  // from the last commit that touched the files the page is actually built
  // from instead.
  const SOURCES = {
    '/': ['src/pages/Home.jsx'],
    '/about': ['src/pages/About.jsx'],
    '/services': ['src/pages/Services.jsx', 'src/data/services.js'],
    '/equipment': ['src/pages/Equipment.jsx'],
    '/portfolio': ['src/pages/Portfolio.jsx', 'src/data/caseStudies.js'],
    '/contact': ['src/pages/Contact.jsx'],
    '/areas': ['src/pages/Areas.jsx', 'src/data/areas.js'],
  }
  const sourcesFor = (r) =>
    SOURCES[r] ||
    (r.startsWith('/services/')
      ? ['src/pages/ServiceDetail.jsx', 'src/data/services.js']
      : ['src/pages/AreaDetail.jsx', 'src/data/areas.js'])

  // Deliberately not including src/data/seo.js or src/data/schema.js here.
  // Both feed every page's head, so folding them in would re-date all 17 URLs
  // on any shared-metadata tweak - the same lockstep this replaced. A title
  // change going unsignalled is a smaller cost than a lastmod Google learns to
  // ignore.

  // Vercel clones shallowly, so git log can legitimately return nothing here.
  // Falling back to the build date keeps the sitemap valid rather than
  // emitting an empty lastmod.
  const gitDate = (files) => {
    try {
      const out = execFileSync('git', ['log', '-1', '--format=%cI', '--', ...files], {
        cwd: __dirname,
        encoding: 'utf-8',
        stdio: ['ignore', 'pipe', 'ignore'],
      }).trim()
      return out ? out.slice(0, 10) : null
    } catch {
      return null
    }
  }

  let fellBack = 0
  const lastmodFor = (r) => {
    const d = gitDate(sourcesFor(r))
    if (!d) fellBack++
    return d || today
  }

  const sitemap =
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    SITEMAP_ROUTES.map((r) => {
      const loc = `https://markwicksservices.com.au${r === '/' ? '/' : r}`
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmodFor(r)}</lastmod>\n    <priority>${PRIORITY[r] || '0.7'}</priority>\n  </url>`
    }).join('\n') +
    '\n</urlset>\n'
  await writeFile(path.join(DIST, 'sitemap.xml'), sitemap)
  console.log(
    `Sitemap written: ${SITEMAP_ROUTES.length} URLs` +
      (fellBack ? `, ${fellBack} fell back to the build date (no git history).` : ', lastmod per page from git.')
  )

  console.log(`\nPrerendered ${ROUTES.length} routes.`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
