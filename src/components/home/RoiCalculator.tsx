'use client';

import { useState } from 'react';

type System = {
  value: string;
  label: string;
  lambda: number;
  priceM2: number;
  thicknesses: number[];
};

/** Per-product thickness options actually offered for sale (mm). */
const SYSTEMS: System[] = [
  {
    value: 'seps',
    label: 'SEPS Graphite EPS SE-031 (λ=0.031)',
    lambda: 0.031,
    priceM2: 18,
    thicknesses: [30, 45, 60, 80, 100, 120, 150, 200],
  },
  {
    value: 'aerogel',
    label: 'Aerogel TC-AG15 (λ=0.015)',
    lambda: 0.015,
    priceM2: 85,
    thicknesses: [10, 15, 20, 25, 30, 40, 50],
  },
  {
    value: 'vip',
    label: 'Vacuum Panel VIP-25 (λ=0.004)',
    lambda: 0.004,
    priceM2: 140,
    thicknesses: [20, 25, 30, 40],
  },
  {
    value: 'hemp',
    label: 'Hemp Fiber HF-50 (λ=0.038)',
    lambda: 0.038,
    priceM2: 28,
    thicknesses: [30, 50, 60, 80, 100, 120],
  },
  {
    value: 'cork',
    label: 'Carbonised Cork CC-30 (λ=0.040)',
    lambda: 0.04,
    priceM2: 32,
    thicknesses: [30, 40, 60, 80, 100],
  },
];

/** Reference build-up: 100 mm mineral wool, the usual code-minimum specifier. */
const BASELINE_LAMBDA = 0.04;
const BASELINE_THICKNESS_M = 0.1;
const BASELINE_U = BASELINE_LAMBDA / BASELINE_THICKNESS_M; // 0.40 W/m²K

export default function RoiCalculator() {
  const [system, setSystem] = useState('seps');
  const [thickness, setThickness] = useState(120);
  const [area, setArea] = useState(500);
  const [price, setPrice] = useState(0.28);
  const [hdd, setHdd] = useState(2800);
  const [result, setResult] = useState<null | {
    u: number;
    annualKwh: number;
    savingEur: number;
    materialCost: number;
    payback: string;
    spaceDelta: number;
    breakevenMm: number;
  }>(null);

  const active = SYSTEMS.find((s) => s.value === system) ?? SYSTEMS[0];
  const minT = active.thicknesses[0];
  const maxT = active.thicknesses[active.thicknesses.length - 1];

  const onSystemChange = (v: string) => {
    const next = SYSTEMS.find((s) => s.value === v) ?? SYSTEMS[0];
    setSystem(v);
    setThickness(next.thicknesses[Math.min(3, next.thicknesses.length - 1)]);
  };

  /** Thickness (mm) at which this material matches or beats the baseline U. */
  const breakevenMm = (s: System) => Math.ceil((BASELINE_LAMBDA / s.lambda) * 1000 / 5) * 5;

  const calculate = () => {
    const tM = thickness / 1000;
    const u = active.lambda / tM;
    const deltaU = BASELINE_U - u; // negative when the build-up under-performs
    const annualKwh = (deltaU * area * hdd * 24) / 1000;
    const savingEur = annualKwh * price;
    const materialCost = area * active.priceM2;
    setResult({
      u,
      annualKwh,
      savingEur,
      materialCost,
      payback: savingEur > 0 ? (materialCost / savingEur).toFixed(1) : '—',
      spaceDelta: (BASELINE_THICKNESS_M - tM) * area,
      breakevenMm: breakevenMm(active),
    });
  };

  return (
    <section className="roi-section" id="calculator">
      <div className="container">
        <div className="section-header-center reveal">
          <span className="label">ROI Calculator</span>
          <h2>What does upgrading your insulation actually save?</h2>
          <p>
            Pick a system and its thickness. We compare it against a 100 mm mineral wool build-up
            and report the annual energy delta, material cost and how much wall depth the system
            saves or costs you.
          </p>
        </div>

        <div className="roi-grid">
          <div className="roi-form reveal">
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Project Parameters</h3>

            <div className="form-group">
              <label htmlFor="calc-product">Insulation System</label>
              <select
                id="calc-product"
                className="form-select"
                value={system}
                onChange={(e) => onSystemChange(e.target.value)}
              >
                {SYSTEMS.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="calc-thickness">
                Installed Thickness — U = {(active.lambda / (thickness / 1000)).toFixed(3)} W/m²K
              </label>
              <div className="range-wrap">
                <input
                  id="calc-thickness"
                  type="range"
                  className="form-range"
                  min={minT}
                  max={maxT}
                  step={5}
                  value={thickness}
                  onChange={(e) => setThickness(Number(e.target.value))}
                />
                <div className="range-val">
                  <span>{minT} mm</span>
                  <span>{thickness} mm</span>
                  <span>{maxT} mm</span>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="calc-area">Wall / Roof Area (m²)</label>
              <div className="range-wrap">
                <input
                  id="calc-area"
                  type="range"
                  className="form-range"
                  min={50}
                  max={5000}
                  step={50}
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                />
                <div className="range-val">
                  <span>50 m²</span>
                  <span>{area.toLocaleString()} m²</span>
                  <span>5,000 m²</span>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="calc-price">Local Energy Price (€/kWh)</label>
              <div className="range-wrap">
                <input
                  id="calc-price"
                  type="range"
                  className="form-range"
                  min={0.1}
                  max={0.5}
                  step={0.01}
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                />
                <div className="range-val">
                  <span>€0.10</span>
                  <span>€{price.toFixed(2)}</span>
                  <span>€0.50</span>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="calc-hdd">Heating Degree Days (HDD)</label>
              <select
                id="calc-hdd"
                className="form-select"
                value={hdd}
                onChange={(e) => setHdd(Number(e.target.value))}
              >
                <option value={1800}>Mediterranean (1,800 HDD)</option>
                <option value={2800}>Central Europe (2,800 HDD)</option>
                <option value={3800}>Northern Europe (3,800 HDD)</option>
                <option value={4800}>Scandinavia (4,800 HDD)</option>
              </select>
            </div>

            <button type="button" className="btn-calc" onClick={calculate}>
              Calculate Energy Savings →
            </button>
          </div>

          <div className="roi-result reveal reveal-delay-1" id="roi-result" aria-live="polite">
            {result ? (
              <>
                <h3 style={{ marginBottom: '0.25rem' }}>Estimated Results</h3>
                <p style={{ color: 'var(--c-text3)', fontSize: '0.8rem', marginBottom: '1.25rem' }}>
                  {active.label} @ {thickness} mm · U = {result.u.toFixed(3)} W/m²K · baseline
                  100 mm mineral wool, U = {BASELINE_U.toFixed(2)} W/m²K
                </p>

                <div className="roi-result-grid">
                  <div className="roi-metric">
                    <div
                      className="roi-metric-num"
                      style={{ color: result.savingEur > 0 ? 'var(--c-eco)' : 'var(--c-warm)' }}
                    >
                      {result.savingEur >= 0 ? '' : '−'}
                      €{Math.abs(Math.round(result.savingEur)).toLocaleString()}
                    </div>
                    <div className="roi-metric-label">
                      {result.savingEur >= 0 ? 'Annual Energy Savings' : 'Annual Energy Penalty'}
                    </div>
                  </div>

                  <div className="roi-metric">
                    <div className="roi-metric-num" style={{ color: 'var(--c-text)' }}>
                      {result.payback === '—' ? 'n/a' : `${result.payback} yrs`}
                    </div>
                    <div className="roi-metric-label">Simple Payback</div>
                  </div>

                  <div className="roi-metric">
                    <div className="roi-metric-num" style={{ color: 'var(--c-text)' }}>
                      €{Math.round(result.materialCost).toLocaleString()}
                    </div>
                    <div className="roi-metric-label">Material Cost (est.)</div>
                  </div>

                  <div className="roi-metric">
                    <div
                      className="roi-metric-num"
                      style={{ color: result.spaceDelta >= 0 ? 'var(--c-tech)' : 'var(--c-text2)' }}
                    >
                      {result.spaceDelta >= 0 ? '+' : '−'}
                      {Math.abs(Math.round(result.spaceDelta)).toLocaleString()} m²
                    </div>
                    <div className="roi-metric-label">
                      {result.spaceDelta >= 0 ? 'Wall Volume Saved' : 'Extra Wall Volume Needed'}
                    </div>
                  </div>
                </div>

                {result.savingEur <= 0 ? (
                  <div className="roi-warning">
                    <strong>At {thickness} mm this build-up under-performs the baseline.</strong>
                    <p style={{ color: 'var(--c-text2)', marginTop: '0.6rem', lineHeight: 1.8 }}>
                      It would consume{' '}
                      {Math.abs(Math.round(result.annualKwh)).toLocaleString()} kWh/yr more than
                      100 mm mineral wool. To reach {BASELINE_U.toFixed(2)} W/m²K this material
                      would need <strong>{result.breakevenMm.toLocaleString()} mm</strong> — far
                      beyond any offered thickness. High-performance products like this one are
                      specified for the space they save, not to out-perform mineral wool at equal
                      thickness.
                    </p>
                  </div>
                ) : null}

                <p style={{ fontSize: '0.78rem', color: 'var(--c-text3)', marginTop: '1rem' }}>
                  *Indicative only: steady-state heat loss scaled by heating degree days, excluding
                  thermal bridging, air leakage and system efficiency. Payback considers material
                  cost against energy savings alone and does not monetise the interior space shown
                  above, which is usually the decisive factor for thin high-performance products.
                  Request a detailed engineering analysis with your project specification.
                </p>
              </>
            ) : (
              <div className="roi-placeholder">
                <div className="roi-placeholder-icon">🧮</div>
                <p>Configure parameters and click Calculate to see your projected savings.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
