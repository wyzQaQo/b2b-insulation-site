import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/layout/PageHeader';
import Stats from '@/components/home/Stats';
import Applications from '@/components/home/Applications';
import Rfq from '@/components/home/Rfq';
import { applications, industries, stats } from '@/data/content';
import { productBySlug } from '@/data/content';

export const metadata: Metadata = {
  title: 'Industries Served — Historic, Industrial, Cold Chain, Marine, EV | ThermaCore',
  description:
    'How ThermaCore insulation systems are specified across historic restoration, new-build residential, petrochemical, cold chain, marine/RV and EV battery manufacturing.',
};

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        label="Industry Sectors"
        title={
          <>
            Six sectors.
            <br />
            Six different physics problems.
          </>
        }
        lede="A heritage façade, an LNG pipe run and a freezer room have almost nothing in common thermally. Here is what we specify for each — and the numbers it delivers."
      />

      <Stats items={stats} />

      <section className="products-section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div style={{ display: 'grid', gap: '1.5rem' }}>
            {industries.map((ind, i) => (
              <article key={ind.slug} id={ind.slug} className="industry-card reveal" style={{ scrollMarginTop: '100px' }}>
                <div className="industry-visual">
                  <div className="app-vis-bg" style={{ background: ind.gradient }} />
                  <span style={{ position: 'relative', zIndex: 1, fontSize: '5rem' }}>{ind.icon}</span>
                  <div className="industry-index">{String(i + 1).padStart(2, '0')}</div>
                </div>

                <div className="industry-body">
                  <div className="product-tag" style={{ color: 'var(--c-tech)' }}>
                    {ind.name}
                  </div>
                  <h3 style={{ fontSize: '1.5rem', margin: '0.5rem 0 0.75rem', lineHeight: 1.3 }}>
                    {ind.headline}
                  </h3>
                  <p style={{ color: 'var(--c-text2)', lineHeight: 1.85, marginBottom: '1.5rem', fontSize: '0.94rem' }}>
                    {ind.body}
                  </p>

                  <div className="app-specs" style={{ marginBottom: '1.5rem' }}>
                    {ind.specs.map((s) => (
                      <div className="app-spec-row" key={s.k}>
                        <span>{s.k}</span>
                        <span>{s.v}</span>
                      </div>
                    ))}
                  </div>

                  <span className="rfq-label">Recommended Products</span>
                  <div className="product-specs" style={{ marginBottom: '1.5rem' }}>
                    {ind.productSlugs.map((slug) => {
                      const p = productBySlug(slug);
                      if (!p) return null;
                      return (
                        <Link
                          key={slug}
                          href={`/products#${slug}`}
                          className="spec-chip"
                          style={{ color: p.seriesColor, borderColor: `${p.seriesColor}44` }}
                        >
                          {p.icon} {p.name}
                        </Link>
                      );
                    })}
                  </div>

                  <Link href="/contact" className="btn-quote" style={{ maxWidth: '360px' }}>
                    Discuss This Sector With An Engineer →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Applications items={applications} />

      <Rfq />
    </>
  );
}
