import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { PageBanner } from '../components/shared.jsx'
import { getAreaBySlug } from '../data/areas.js'
import { SERVICES } from '../data/services.js'

export default function AreaDetail() {
  const { slug } = useParams()
  const area = getAreaBySlug(slug)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [slug])

  if (!area) return <Navigate to="/services" replace />

  return (
    <>
      <PageBanner
        eyebrow={`Servicing ${area.region}`}
        title={`${area.name}`}
        subtitle={area.lead}
        img={area.img}
        imgAlt={area.alt}
      />

      <section className="pt-20 sm:pt-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <p className="max-w-3xl text-ink leading-relaxed text-lg sm:text-xl">{area.intro}</p>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="max-w-3xl space-y-12">
            {(area.sections || []).map((sec) => (
              <div key={sec.heading}>
                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tighter mb-4">{sec.heading}</h2>
                <p className="text-muted leading-relaxed text-base sm:text-lg">{sec.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Every area page links to all six service pages, so the cluster points
          back at the parents rather than competing with them. */}
      <section className="bg-surface border-t border-divider py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tighter mb-3">
            What we do in {area.name}
          </h2>
          <p className="text-muted leading-relaxed mb-10 max-w-3xl">
            Every service below is available across {area.name} and the surrounding {area.region} district.
          </p>
          {/* Each service gets a real h2 carrying service + town, with copy specific
              to this area, then links through to the parent service page. */}
          {area.serviceNotes?.length > 0 && (
            <div className="max-w-3xl space-y-12 mb-16">
              {area.serviceNotes.map((n) => {
                const svc = SERVICES.find((s) => s.slug === n.slug)
                return (
                  <div key={n.slug}>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tighter mb-4">{n.heading}</h2>
                    <p className="text-muted leading-relaxed text-base sm:text-lg mb-4">{n.body}</p>
                    {svc && (
                      <Link to={`/services/${svc.slug}`} className="inline-flex items-center gap-1.5 text-sm font-medium text-primary lift-on-hover">
                        More on {svc.title.toLowerCase()} <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    )}
                  </div>
                )
              })}
            </div>
          )}

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group rounded-2xl border border-divider bg-background p-6 lift-on-hover"
              >
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <s.icon className="h-5 w-5 text-primary" strokeWidth={2.2} />
                </div>
                <h3 className="font-display text-lg font-bold tracking-tight mb-2">
                  {s.title} in {area.name}
                </h3>
                <p className="text-muted text-sm leading-relaxed mb-4">{s.cardText || s.text}</p>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Learn more <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <p className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.18em] text-primary mb-3">Common Questions</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tighter mb-12 max-w-3xl">
            Working in {area.name}.
          </h2>
          <div className="max-w-3xl divide-y divide-divider border-t border-divider">
            {area.faqs.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex items-start justify-between gap-6 cursor-pointer list-none font-display text-lg sm:text-xl font-semibold tracking-tight text-ink">
                  {f.q}
                  <ArrowRight className="h-5 w-5 text-primary shrink-0 mt-1 transition-transform group-open:rotate-90" />
                </summary>
                <p className="text-muted leading-relaxed text-base sm:text-lg mt-4">{f.a}</p>
              </details>
            ))}
          </div>
          <Link to="/contact" className="magnetic-btn inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold shadow-lg shadow-primary/30 mt-12">
            Get a quote in {area.name} <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  )
}
