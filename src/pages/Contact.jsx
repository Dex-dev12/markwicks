import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Mail, MapPin, Map, Clock } from 'lucide-react'
import { PageBanner } from '../components/shared.jsx'

export default function Contact() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-info', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        x: -40, opacity: 0, duration: 0.9, ease: 'power3.out',
      })
      gsap.from('.contact-form', {
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        x: 40, opacity: 0, duration: 0.9, delay: 0.15, ease: 'power3.out',
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  useEffect(() => {
    if (document.querySelector('script[src="https://links.versflows.com/js/form_embed.js"]')) return
    const script = document.createElement('script')
    script.src = 'https://links.versflows.com/js/form_embed.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <>
      <PageBanner
        eyebrow="Get In Touch"
        title="Tell us about the sites you need looked after."
        subtitle="Whether it's a one-off job or a standing multi-site contract, the first step is the same — an email or the form below."
        img="/images/farmyard.jpg"
      />

      <section ref={ref} className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="contact-info lg:col-span-4">
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
                    <p className="text-xs text-muted">Address</p>
                    <p className="font-medium">4 Jarrah Court, Kelso NSW 2795</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0"><Map className="h-4 w-4 text-primary" /></span>
                  <div>
                    <p className="text-xs text-muted">Areas Served</p>
                    <p className="font-medium">Bathurst &amp; Central West NSW</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0"><Clock className="h-4 w-4 text-primary" /></span>
                  <div>
                    <p className="text-xs text-muted">Hours</p>
                    <p className="font-medium">Weekdays: 7am - 4pm</p>
                    <p className="font-medium">Sat: By appointment &middot; Sun: Closed</p>
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted mt-8 leading-relaxed">Your details are used only to prepare your quote and schedule the job — never sold or shared.</p>
            </div>

            <div className="contact-form lg:col-span-8 bg-surface rounded-3xl p-6 sm:p-8 overflow-hidden">
              <iframe
                src="https://links.versflows.com/widget/form/IJZrHCNaYa7AJc0wWtoH"
                scrolling="no"
                style={{ width: '100%', height: '100%', minHeight: '400px', border: 'none', borderRadius: '8px', overflow: 'hidden' }}
                id="inline-IJZrHCNaYa7AJc0wWtoH"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Markwicks Services Form"
                data-height="undefined"
                data-layout-iframe-id="inline-IJZrHCNaYa7AJc0wWtoH"
                data-form-id="IJZrHCNaYa7AJc0wWtoH"
                title="Markwicks Services Form"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
