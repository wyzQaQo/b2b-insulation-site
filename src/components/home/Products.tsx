import Link from 'next/link';
import type { Product } from '@/data/products';

export function ProductCard({ p }: { p: Product }) {
  return (
    <div className="product-card" id={p.slug} data-glare>
      <div className="product-img">
        <div className="product-img-bg" style={{ background: p.gradient }} />
        <span style={{ position: 'relative', zIndex: 1 }}>{p.icon}</span>
      </div>
      <div className="product-body">
        <div className="product-tag" style={{ color: p.seriesColor }}>
          {p.series}
        </div>
        <h3>{p.name}</h3>
        <div className="product-specs">
          <span className="spec-chip">λ = {p.lambda} W/(m·K)</span>
          <span className="spec-chip">Fire: {p.fire}</span>
          {p.specs.slice(2, 5).map((s) => (
            <span className="spec-chip" key={s}>
              {s}
            </span>
          ))}
        </div>
        <div className="product-moq">
          MOQ: {p.moq} · Lead Time: {p.leadTime}
        </div>
        <Link href={`/products#${p.slug}`} className="btn-quote">
          View Specs / Get a Quote
        </Link>
      </div>
    </div>
  );
}

export default function Products({ items, showHeader = true }: { items: Product[]; showHeader?: boolean }) {
  return (
    <section className="products-section" id="products">
      <div className="container">
        {showHeader ? (
          <div className="section-header-center reveal">
            <span className="label">Product Range</span>
            <h2>
              Engineering-grade specifications.
              <br />
              Factory-direct pricing.
            </h2>
            <p>
              Every SKU ships with full TDS + SDS documentation. CE certificates available on
              request.
            </p>
          </div>
        ) : null}

        <div className="products-grid" id="products-grid">
          {items.map((p) => (
            <ProductCard key={p.slug} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
