import { useState } from 'react'
import { CheckCircle2, Mail, MapPin, Upload, X, ArrowUpRight } from 'lucide-react'
import { PageBanner, Field } from '../components/shared.jsx'

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [files, setFiles] = useState([])

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 1200)
  }

  const onDrop = (e) => {
    e.preventDefault()
    const list = [...e.dataTransfer.files].filter((f) => f.type.startsWith('image/')).slice(0, 5 - files.length)
    setFiles((prev) => [...prev, ...list])
  }

  return (
    <>
      <PageBanner
        eyebrow="Get In Touch"
        title="Tell us about the sites you need looked after."
        subtitle="Whether it's a one-off job or a standing multi-site contract, the first step is the same — an email or the form below."
        img="https://commons.wikimedia.org/wiki/Special:FilePath/Grange%20Farm%20Farmyard%20-%20geograph.org.uk%20-%20244947.jpg?width=1800"
      />

      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <div className="space-y-5">
                <div className="flex items-center gap-3">
                  <span className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0"><Mail className="h-4 w-4 text-primary" /></span>
                  <div>
                    <p className="text-xs text-muted">Email</p>
                    <a href="mailto:info@markwicksservices.com.au" className="font-medium lift-on-hover">info@markwicksservices.com.au</a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0"><MapPin className="h-4 w-4 text-primary" /></span>
                  <div>
                    <p className="text-xs text-muted">Area Served</p>
                    <p className="font-medium">Bathurst, NSW</p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted mt-8 leading-relaxed">Your details are used only to prepare your quote and schedule the job — never sold or shared.</p>
            </div>

            <div className="lg:col-span-7 bg-surface rounded-3xl border border-divider p-6 sm:p-10">
              {status === 'sent' ? (
                <div className="flex flex-col items-center justify-center text-center h-full py-16">
                  <CheckCircle2 className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-display text-2xl font-bold mb-2">Thanks — we'll be in touch.</h3>
                  <p className="text-muted">Your enquiry has been received. We'll be in touch within one business day.</p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Name" id="name" placeholder="Your full name" />
                    <Field label="Email" id="email" type="email" placeholder="you@example.com" />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Phone" id="phone" type="tel" placeholder="04xx xxx xxx" />
                    <Field label="Site / Property Address" id="address" placeholder="Suburb or property name" />
                  </div>
                  <Field label="Message" id="message" textarea rows={5} placeholder="Tell us about the job — single site, multi-site contract, residential or commercial." />

                  <div
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={onDrop}
                    className="rounded-xl border-2 border-dashed border-divider p-6 text-center cursor-pointer hover:border-primary/40 transition"
                  >
                    <Upload className="h-5 w-5 text-muted mx-auto mb-2" />
                    <p className="text-sm text-muted">Drop site photos here (up to 5 images)</p>
                    {files.length > 0 && (
                      <ul className="mt-3 flex flex-wrap gap-2 justify-center">
                        {files.map((f, i) => (
                          <li key={i} className="text-xs bg-background border border-divider rounded-full px-3 py-1 flex items-center gap-1.5">
                            {f.name}
                            <button type="button" onClick={() => setFiles((prev) => prev.filter((_, idx) => idx !== i))} className="text-muted hover:text-ink">
                              <X className="h-3 w-3" />
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="magnetic-btn w-full inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3.5 rounded-full font-semibold shadow-lg shadow-primary/30 disabled:opacity-70"
                  >
                    {status === 'sending' ? 'Sending…' : 'Send Enquiry'}
                    {status !== 'sending' && <ArrowUpRight className="h-4 w-4" />}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
