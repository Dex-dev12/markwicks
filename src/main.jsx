import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes.jsx'
import './index.css'

// hydrateRoot, not createRoot: every route ships fully prerendered HTML, and
// createRoot discards existing server markup and rebuilds the tree from
// scratch. Hydration reuses the DOM already on screen.
hydrateRoot(
  document.getElementById('root'),
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>
)
