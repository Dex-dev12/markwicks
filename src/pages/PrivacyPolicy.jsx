import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-ink font-body px-6 sm:px-10 lg:px-16 py-16 max-w-3xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-primary lift-on-hover mb-10">
        <ArrowLeft className="h-3.5 w-3.5" /> Back to home
      </Link>
      <h1 className="font-display text-4xl font-bold tracking-tight mb-8">Privacy Policy</h1>
      <div className="space-y-6 text-muted leading-relaxed">
        <p>Markwicks Services ("we", "us") respects your privacy. This policy explains what information we collect through this website and how it's used.</p>
        <h2 className="font-display text-xl font-semibold text-ink mt-8">Information we collect</h2>
        <p>When you submit a quote request through our contact form, we collect your name, phone number, email address, and any job details or photos you choose to provide.</p>
        <h2 className="font-display text-xl font-semibold text-ink mt-8">How we use it</h2>
        <p>We use this information solely to respond to your enquiry, prepare a quote, and schedule work. We do not sell or share your details with third parties.</p>
        <h2 className="font-display text-xl font-semibold text-ink mt-8">Contact</h2>
        <p>Questions about this policy can be directed to <a href="mailto:claymarkwick@bigpond.com" className="text-primary lift-on-hover">claymarkwick@bigpond.com</a>.</p>
      </div>
    </div>
  )
}
