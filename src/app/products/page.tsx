import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import { ProductCard } from '@/components/home/Products';
import TechCompare from '@/components/home/TechCompare';
import Certs from '@/components/home/Certs';
import { certifications } from '@/data/content';
import { products } from '@/data/products';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Product Range — Aerogel, VIP, Hemp, Cork, SEPS | ThermaCore Solutions',
  description:
    'Six insulation systems compared on λ-value, fire class, thickness and MOQ. Full TDS/SDS and CE documentation on every SKU.',
};

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        id="top"
        label="Product Range"
        title={
          <>
            Six systems.
            <br />
            One supplier.
          </>
        }
        lede="Aerogel, vacuum insulation panels, bio-based boards and complete ETICS systems — from 50 m² MOQ, factory-direct, with CE documentation on every SKU."
      />

      <TechCompare />

      <section className="products-section" id="products" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header-center reveal">
            <span className="label">Technical Portfolio</span>
            <h2>Full specification per system</h2>
            <p>Click any product for λ-value, density, service temperature, lead time and trade terms.</p>
          </div>
          <div className="products-grid">
            {products.map((p) => (
              <ProductCard key={p.slug} p={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ---- Detailed spec sheets ---- */}
      <section className="tech-section" id="specifications">
        <div className="container">
          <div className="section-header reveal">
            <span className="label">Data Sheets</span>
            <h2>Engineering specification detail</h2>
            <p>
              Values per manufacturer TDS, tested to EN 12667 / EN 12939. Full TDS and SDS PDFs
              are issued with every quotation.
            </p>
          </div>

          <div style={{ display: 'grid', gap: '1.5rem', marginTop: '3rem' }}>
            {products.map((p) => (
              <article
                key={p.slug}
                id={p.slug}
                className="spec-sheet reveal"
                style={{ scrollMarginTop: '100px' }}
              >
                <div className="spec-sheet-head">
                  <div
                    className="spec-sheet-icon"
                    style={{ background: p.gradient, borderColor: `${p.seriesColor}33` }}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <div className="product-tag" style={{ color: p.seriesColor }}>
                      {p.series}
                    </div>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{p.name}</h3>
                    <p style={{ color: 'var(--c-text2)', fontSize: '0.92rem', lineHeight: 1.75, maxWidth: '62ch' }}>
                      {p.summary}
                    </p>
                  </div>
                  <div style={{ marginLeft: 'auto', textAlign: 'right', flexShrink: 0 }}>
                    <div
                      style={{
                        fontSize: '2rem',
                        fontWeight: 700,
                        fontFamily: "'Courier New',monospace",
                        color: p.seriesColor,
                        lineHeight: 1,
                      }}
                    >
                      {p.lambda}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--c-text3)', letterSpacing: '0.1em' }}>
                      λ W/(m·K)
                    </div>
                  </div>
                </div>

                <div className="spec-sheet-grid">
                  {[
                    ['Thickness Range', p.thickness],
                    ['Fire Classification', `EN 13501-1 · ${p.fire}`],
                    ['Density', p.density],
                    ['Service Temperature', p.tempRange],
                    ['MOQ', p.moq],
                    ['Lead Time', p.leadTime],
                  ].map(([k, v]) => (
                    <div className="spec-sheet-cell" key={k}>
                      <span className="spec-sheet-k">{k}</span>
                      <span className="spec-sheet-v">{v}</span>
                    </div>
                  ))}
                </div>

                <div className="spec-sheet-cols">
                  <div>
                    <span className="rfq-label">Key Properties</span>
                    <div className="product-specs">
                      {p.specs.map((s) => (
                        <span className="spec-chip" key={s}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="rfq-label">Typical Applications</span>
                    <ul className="tick-list">
                      {p.applications.map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="rfq-label">Certification</span>
                    <div className="product-specs">
                      {p.certifications.map((c) => (
                        <span className="spec-chip" key={c}>
                          {c}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="spec-sheet-foot">
                  <span style={{ color: 'var(--c-text3)', fontSize: '0.82rem' }}>{p.incoterm}</span>
                  <Link href="/contact" className="btn-quote" style={{ maxWidth: '260px' }}>
                    Request Quote &amp; Free Sample
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Certs items={certifications} />
    </>
  );
}
