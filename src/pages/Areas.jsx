import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin } from 'lucide-react'
import { PageBanner } from '../components/shared.jsx'
import { AREAS, AREAS_PAGE, ALSO_SERVICED } from '../data/areas.js'

export default function Areas() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [])

  return (
    <>
      <PageBanner
        eyebrow="Where We Work"
        title="Areas We Serve"
        subtitle="Grounds maintenance, landscaping, acreage work and earthworks across Bathurst, Kelso and the wider Central West of NSW."
        img="/images/services-header.jpg"
      />

      <section className="pt-20 sm:pt-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <p className="max-w-3xl text-ink leading-relaxed text-lg sm:text-xl">{AREAS_PAGE.intro}</p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {AREAS.map((a) => (
              <Link
                key={a.slug}
                to={`/areas/${a.slug}`}
                className="group rounded-2xl border border-divider bg-surface p-6 lift-on-hover"
              >
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <MapPin className="h-5 w-5 text-primary" strokeWidth={2.2} />
                </div>
                <h2 className="font-display text-xl font-bold tracking-tight mb-2">{a.name}</h2>
                <p className="text-muted text-sm leading-relaxed mb-4">{a.lead}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  What we do in {a.name} <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 max-w-3xl">
            <h2 className="font-display text-xl font-bold tracking-tight mb-3">We also work across</h2>
            <p className="text-muted leading-relaxed">
              {ALSO_SERVICED.join(' · ')} and the surrounding districts. If your property is not listed, it is
              still worth asking &mdash; how far we travel depends on the size of the job.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24 sm:pb-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl space-y-12">
            {AREAS_PAGE.sections.map((sec) => (
              <div key={sec.heading}>
                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tighter mb-4">{sec.heading}</h2>
                <p className="text-muted leading-relaxed text-base sm:text-lg">{sec.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
