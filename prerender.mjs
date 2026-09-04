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

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST = path.join(__dirname, 'dist')
const SSR_ENTRY = path.join(__dirname, 'dist-ssr', 'entry-server.js')

// Keep in sync with public/sitemap.xml and src/routes.jsx.
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

async function main() {
  const template = await readFile(path.join(DIST, 'index.html'), 'utf-8')
  const { render } = await import(SSR_ENTRY)

  let failures = 0
  for (const route of ROUTES) {
    try {
      const { html, seo } = render(route)

      if (html.trim().length < 500) {
        console.error(`  x ${route} produced only ${html.trim().length} chars - check the route exists`)
        failures++
        continue
      }

      let page = template
        // Drop the build-time title/description; the per-route ones replace them.
        .replace(/<title>[\s\S]*?<\/title>\s*/i, '')
        .replace(/<meta\s+name="description"[^>]*>\s*/i, '')
        .replace('</head>', `  ${headFor(seo)}\n  </head>`)
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
  console.log(`\nPrerendered ${ROUTES.length} routes.`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
