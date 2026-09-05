import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes.jsx'
import './index.css'

// hydrateRoot, not createRoot: every route ships fully prerendered HTML, and
// createRoot discards existing server markup and rebuilds the tree from
// scratch. That threw away the prerendered DOM and re-painted the whole page,
// which is what put ~2s of "element render delay" on the hero headline.
// Hydration reuses the DOM that is already on screen and only attaches
// behaviour to it.
hydrateRoot(
  document.getElementById('root'),
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
)
