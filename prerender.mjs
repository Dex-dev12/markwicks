// Pre-renders each route to real static HTML at build time.
//
// Without this the server ships an empty SPA shell for every URL: identical
// bytes, the homepage's title and canonical on every page, and no content for
// crawlers that do not execute JavaScript.
//
// Uses puppeteer rather than a system Chrome path so it runs both locally and
// on Vercel's Linux builders.

import { createServer } from 'node:http'
import { readFile, writeFile, mkdir, stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// Vercel's build image lacks the shared libraries a stock Chromium needs
// (libnspr4.so and friends), and there is no root access to install them.
// @sparticuz/chromium ships a build with those bundled. Locally, plain
// puppeteer with its own download is simpler and faster.
async function launchBrowser() {
  const onVercel = Boolean(process.env.VERCEL || process.env.CI)
  if (onVercel) {
    const [{ default: chromium }, { default: puppeteerCore }] = await Promise.all([
      import('@sparticuz/chromium'),
      import('puppeteer-core'),
    ])
    return puppeteerCore.launch({
      args: [...chromium.args, '--no-sandbox', '--disable-dev-shm-usage'],
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    })
  }
  const { default: puppeteer } = await import('puppeteer')
  return puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-dev-shm-usage'],
  })
}
const DIST = path.join(__dirname, 'dist')
const PORT = Number(process.env.PRERENDER_PORT || 4173)

// Keep in sync with public/sitemap.xml and the routes in src/main.jsx.
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

const MIME = {
  '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml',
  '.webp': 'image/webp', '.avif': 'image/avif',
  '.json': 'application/json', '.woff2': 'font/woff2', '.woff': 'font/woff',
  '.ico': 'image/x-icon', '.txt': 'text/plain', '.xml': 'application/xml',
}

async function startServer() {
  const server = createServer(async (req, res) => {
    const reqPath = decodeURIComponent(req.url.split('?')[0])
    let filePath = path.join(DIST, reqPath)
    try {
      const s = await stat(filePath)
      if (s.isDirectory()) filePath = path.join(filePath, 'index.html')
    } catch {
      filePath = path.join(DIST, 'index.html')
    }
    try {
      const data = await readFile(filePath)
      res.writeHead(200, { 'Content-Type': MIME[path.extname(filePath)] || 'application/octet-stream' })
      res.end(data)
    } catch {
      res.writeHead(404)
      res.end('not found')
    }
  })
  await new Promise((resolve) => server.listen(PORT, '127.0.0.1', resolve))
  return server
}

async function main() {
  const server = await startServer()
  const browser = await launchBrowser()

  let failures = 0
  try {
    const page = await browser.newPage()
    await page.setViewport({ width: 1440, height: 2400 })

    for (const route of ROUTES) {
      const url = `http://127.0.0.1:${PORT}${route}`
      try {
        await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 })
        // The SEO effect runs after mount; wait for the title to stop being the
        // build-time placeholder before capturing.
        await page.waitForFunction('document.title && document.title.length > 0', { timeout: 10000 })

        const html = '<!doctype html>\n' + (await page.content())

        // A route that renders nothing means a missing route definition, not a
        // slow render. Fail loudly rather than shipping an empty page.
        const textLength = await page.evaluate(() => document.body.innerText.trim().length)
        if (textLength < 200) {
          console.error(`  ✗ ${route} rendered only ${textLength} chars of text - check the route exists`)
          failures++
          continue
        }

        const outDir = route === '/' ? DIST : path.join(DIST, route)
        await mkdir(outDir, { recursive: true })
        await writeFile(path.join(outDir, 'index.html'), html, 'utf-8')
        console.log(`  ✓ ${route.padEnd(45)} ${String(html.length).padStart(6)} bytes`)
      } catch (e) {
        console.error(`  ✗ ${route} failed: ${e.message}`)
        failures++
      }
    }
  } finally {
    await browser.close()
    server.close()
  }

  if (failures) {
    console.error(`\nPre-render finished with ${failures} failed route(s).`)
    process.exit(1)
  }
  console.log(`\nPre-rendered ${ROUTES.length} routes.`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
