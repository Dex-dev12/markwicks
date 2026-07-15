import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-ink font-body px-6 sm:px-10 lg:px-16 py-16 max-w-3xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-primary lift-on-hover mb-10">
        <ArrowLeft className="h-3.5 w-3.5" /> Back to home
      </Link>
      <h1 className="font-display text-4xl font-bold tracking-tight mb-8">Terms of Service</h1>
      <div className="space-y-6 text-muted leading-relaxed">
        <p>These terms govern quotes and work booked through Markwicks Services (ABN details supplied on invoice).</p>
        <h2 className="font-display text-xl font-semibold text-ink mt-8">Quotes &amp; pricing</h2>
        <p>Rates start from $66/hr incl. GST. Final pricing depends on site access, ground conditions, and job scope, and will be confirmed before work begins.</p>
        <h2 className="font-display text-xl font-semibold text-ink mt-8">Scheduling</h2>
        <p>We aim to complete every job on the agreed date. Weather and ground conditions may occasionally require rescheduling — we'll always contact you in advance.</p>
        <h2 className="font-display text-xl font-semibold text-ink mt-8">Contact</h2>
        <p>Questions about a quote or an active job can be directed to <a href="tel:0427375529" className="text-primary lift-on-hover">0427 375 529</a>.</p>
      </div>
    </div>
  )
}
