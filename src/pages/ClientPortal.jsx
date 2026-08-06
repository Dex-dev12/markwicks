import { Link } from 'react-router-dom'
import { ArrowUpRight, UserRound } from 'lucide-react'

export default function ClientPortal() {
  return (
    <div className="min-h-screen bg-background text-ink font-body px-6 sm:px-10 lg:px-16 pt-40 pb-24 max-w-3xl mx-auto text-center">
      <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
        <UserRound className="h-6 w-6 text-primary" />
      </div>
      <h1 className="font-display text-4xl font-bold tracking-tight mb-4">Client Portal — Coming Soon</h1>
      <p className="text-muted leading-relaxed max-w-xl mx-auto mb-8">
        Our client portal for scheduling, reports and invoices is on the way. In the meantime, get in touch directly and we'll take care of it.
      </p>
      <Link to="/contact" className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-primary/30">
        Contact Us <ArrowUpRight className="h-4 w-4" />
      </Link>
    </div>
  )
}
