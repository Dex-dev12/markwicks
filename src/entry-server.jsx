// Renders a route to static HTML in plain Node — no browser, no Chromium, and
// so nothing for a build image's missing shared libraries to break.
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import AppRoutes from './routes.jsx'
import { getSeo } from './data/seo.js'
import { schemaFor } from './data/schema.js'

export function render(url) {
  const html = renderToString(
    <StaticRouter location={url}>
      <AppRoutes />
    </StaticRouter>
  )
  return { html, seo: getSeo(url), schema: schemaFor(url) }
}
