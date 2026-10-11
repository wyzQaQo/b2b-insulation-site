import Link from 'next/link';
import type { Cert } from '@/data/content';

export default function Certs({ items, withCta = true }: { items: Cert[]; withCta?: boolean }) {
  return (
    <section className="certs-section" id="certifications">
      <div className="container">
        <div className="section-header-center reveal">
          <span className="label">Compliance &amp; Trust</span>
          <h2>
            Every certificate on file.
            <br />
            Available for download.
          </h2>
          <p>
            European B2B procurement requires verified compliance. All certificates are current,
            third-party audited and downloadable with every product inquiry.
          </p>
        </div>

        <div className="certs-row reveal">
          {items.map((c) => (
            <div className="cert-card" key={c.name}>
              <div
                className="cert-badge"
                style={
                  c.tone === 'eco'
                    ? { background: 'rgba(34,197,94,0.1)', color: 'var(--c-eco)', borderColor: 'rgba(34,197,94,0.3)' }
                    : c.tone === 'danger'
                      ? { background: 'rgba(239,68,68,0.1)', color: '#F87171', borderColor: 'rgba(239,68,68,0.3)' }
                      : c.tone === 'warm'
                        ? { background: 'rgba(245,158,11,0.1)', color: 'var(--c-warm)', borderColor: 'rgba(245,158,11,0.3)' }
                        : { fontSize: '0.75rem' }
                }
              >
                {c.badge}
              </div>
              <div className="cert-name">{c.name}</div>
              <div className="cert-desc">{c.desc}</div>
            </div>
          ))}
        </div>

        {withCta ? (
          <div style={{ textAlign: 'center', marginTop: '2rem', color: 'var(--c-text3)', fontSize: '0.88rem' }}>
            All products meet stringent European structural and fire safety standards.{' '}
            <Link href="/contact" style={{ color: 'var(--c-tech)', textDecoration: 'none' }}>
              Request full certificate package →
            </Link>
          </div>
        ) : null}
      </div>
    </section>
  );
}
