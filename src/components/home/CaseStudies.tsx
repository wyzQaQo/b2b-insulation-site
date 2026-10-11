import type { CaseStudy } from '@/data/content';

export default function CaseStudies({ items }: { items: CaseStudy[] }) {
  return (
    <section className="cases-section" id="cases">
      <div className="container">
        <div className="section-header reveal">
          <span className="label">Case Studies</span>
          <h2>Real projects. Real results.</h2>
          <p>
            Not stock photos. Actual engineering specifications, verified performance
            measurements and procurement details shared with every case study.
          </p>
        </div>

        <div className="cases-grid">
          {items.map((c, i) => (
            <div className={`case-card reveal ${i % 2 === 1 ? 'reveal-delay-1' : ''}`} key={c.title}>
              <div className="case-flag">{c.flag}</div>
              <div className="case-tag">{c.tag}</div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              <div className="case-metrics">
                {c.metrics.map((m) => (
                  <div className="case-metric" key={m.label}>
                    <div className="case-metric-num">{m.value}</div>
                    <div className="case-metric-label">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
