import { comparisonRows } from '@/data/products';

export default function TechCompare() {
  return (
    <section className="tech-section" id="performance">
      <div className="container">
        <div className="section-header reveal">
          <span className="label">Performance Data</span>
          <h2>The numbers don&apos;t lie.</h2>
          <p>
            Thermal conductivity (λ-value) determines actual insulation thickness needed. Lower =
            thinner. The difference between aerogel and mineral wool is the difference between
            20 mm and 120 mm.
          </p>
        </div>

        <div style={{ overflowX: 'auto', marginTop: '3rem' }}>
          <table className="compare-table" id="compare-tbl">
            <thead>
              <tr>
                <th>Product</th>
                <th>λ-Value [W/(m·K)]</th>
                <th>Equiv. Thickness*</th>
                <th>Fire Rating</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.name} className={row.highlight ? 'highlight-row' : undefined} style={row.muted ? { opacity: 0.5 } : undefined}>
                  <td className="product-name">{row.name}</td>
                  <td>
                    <span className="lambda" style={row.muted ? { color: 'var(--c-text3)' } : undefined}>
                      {row.lambda}
                    </span>
                  </td>
                  <td>
                    <div className="lambda-bar-wrap">
                      <div className={`lambda-bar ${row.barTone}`} style={{ width: 0 }} data-w={row.bar} />
                      <span>{row.thickness}</span>
                    </div>
                  </td>
                  <td>
                    <span className={`badge-fire ${row.fire.toLowerCase()}`}>{row.fire}</span>
                  </td>
                  <td>
                    <span
                      className={`label ${row.category === 'Eco' ? 'label-eco' : ''}`}
                      style={
                        row.category === 'Economy'
                          ? { color: 'var(--c-warm)', fontSize: '0.68rem' }
                          : row.category === 'Conventional'
                            ? { fontSize: '0.75rem', color: 'var(--c-text3)' }
                            : { fontSize: '0.68rem' }
                      }
                    >
                      {row.category}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={{ fontSize: '0.78rem', color: 'var(--c-text3)', marginTop: '1rem' }}>
          * Thickness required for R=2.5 m²K/W equivalent. All values per manufacturer TDS,
          tested to EN 12667.
        </p>
      </div>
    </section>
  );
}
