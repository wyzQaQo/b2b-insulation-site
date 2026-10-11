import Link from 'next/link';
import { painPoints } from '@/data/content';

export default function PainPoints() {
  return (
    <section className="pain-section">
      <div className="container">
        <div className="section-header reveal">
          <span className="label">Three Pathways</span>
          <h2>Which challenge are you solving?</h2>
          <p>
            We design each system for a specific structural constraint — because a 19th-century
            heritage wall and an industrial pipeline are not the same problem.
          </p>
        </div>

        <div className="pain-grid">
          {painPoints.map((p) => (
            <div className="pain-card" key={p.title} data-spotlight>
              <div className={`pain-icon ${p.iconClass}`}>{p.icon}</div>
              <span className={`label ${p.labelClass}`} style={{ marginBottom: '0.75rem', display: 'block' }}>
                {p.label}
              </span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
              <Link href={p.href} className="pain-arrow" style={{ color: p.linkColor }}>
                {p.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
