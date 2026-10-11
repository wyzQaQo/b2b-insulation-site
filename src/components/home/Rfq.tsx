'use client';

import { useState } from 'react';

const STEPS = ['1 · Contact', '2 · Project', '3 · Products'];

const PRODUCT_CHOICES = [
  'Aerogel Blanket',
  'Vacuum Panel VIP',
  'Hemp Fiber Board',
  'Carbonised Cork',
  'SEPS Graphite EPS',
  'UFH Mushroom Board',
];

const SHIPPING_CHOICES = ['FOB Qingdao', 'CIF Rotterdam/Hamburg', 'DDP (duty paid)', 'Free Sample First'];

const DOC_CHOICES = ['CE Certificate', 'Fire Test Report', 'TDS + SDS PDF', 'ISO 9001 Cert'];

function ChoiceGroup({ name, options }: { name: string; options: string[] }) {
  return (
    <div className="rfq-checkbox-row">
      {options.map((opt, i) => (
        <span key={opt}>
          <input
            type="checkbox"
            id={`${name}-${i}`}
            name={name}
            value={opt}
            className="rfq-checkbox"
          />
          <label htmlFor={`${name}-${i}`} className="rfq-check-label">
            {opt}
          </label>
        </span>
      ))}
    </div>
  );
}

/** Three-step RFQ form, replacing the original global `goStep` / `submitRFQ`. */
export default function Rfq() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <section className="rfq-section" id="rfq">
        <div className="container">
          <div className="rfq-wrap">
            <div className="rfq-form">
              <div className="rfq-success" role="status">
                <div className="rfq-success-icon">✅</div>
                <h3>Enquiry Received!</h3>
                <p style={{ color: 'var(--c-text2)', marginTop: '1rem', lineHeight: 1.8 }}>
                  Our engineering team will respond within 24 business hours with:
                  <br />
                  <strong>
                    · CE certificates · Product TDS/SDS · CIF/DDP quotation · Free sample
                    dispatch
                  </strong>
                </p>
                <p style={{ marginTop: '1.5rem', color: 'var(--c-text3)', fontSize: '0.85rem' }}>
                  Avg. response time: 4 hours during EU business hours
                </p>
                <button
                  type="button"
                  className="btn-prev"
                  style={{ marginTop: '2rem' }}
                  onClick={() => {
                    setSubmitted(false);
                    setStep(1);
                  }}
                >
                  ← Submit another enquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="rfq-section" id="rfq">
      <div className="container">
        <div className="section-header-center reveal">
          <span className="label">Request a Quote</span>
          <h2>
            Get your tech catalog &amp; sample kit
            <br />
            in 24 hours.
          </h2>
          <p>
            Tell us about your project. Our engineering team will respond with product
            recommendations, CE documentation and a CIF/DDP quotation within one business day.
          </p>
        </div>

        <div className="rfq-wrap">
          <div className="rfq-steps">
            {STEPS.map((s, i) => (
              <button
                key={s}
                type="button"
                className={`rfq-step ${i + 1 === step ? 'active' : ''} ${i + 1 < step ? 'done' : ''}`}
                onClick={() => setStep(i + 1)}
              >
                {s}
              </button>
            ))}
          </div>

          <form
            className="rfq-form reveal"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            {/* ---------- Step 1 ---------- */}
            <div className={`rfq-panel ${step === 1 ? 'active' : ''}`} id="rfq-panel-1">
              <h3 style={{ marginBottom: '1.5rem' }}>Your Contact Details</h3>
              <div className="rfq-row">
                <div>
                  <label className="rfq-label" htmlFor="rfq-name">
                    First &amp; Last Name *
                  </label>
                  <input id="rfq-name" name="name" type="text" className="rfq-input" placeholder="Hans Müller" required />
                </div>
                <div>
                  <label className="rfq-label" htmlFor="rfq-company">
                    Company Name *
                  </label>
                  <input id="rfq-company" name="company" type="text" className="rfq-input" placeholder="Bau GmbH" required />
                </div>
              </div>
              <div className="rfq-row">
                <div>
                  <label className="rfq-label" htmlFor="rfq-email">
                    Business Email *
                  </label>
                  <input id="rfq-email" name="email" type="email" className="rfq-input" placeholder="h.mueller@bau.de" required />
                </div>
                <div>
                  <label className="rfq-label" htmlFor="rfq-phone">
                    Phone / WhatsApp
                  </label>
                  <input id="rfq-phone" name="phone" type="tel" className="rfq-input" placeholder="+49 …" />
                </div>
              </div>
              <div>
                <label className="rfq-label" htmlFor="rfq-country">
                  Country
                </label>
                <select id="rfq-country" name="country" className="rfq-select">
                  {['Germany', 'Netherlands', 'Austria', 'France', 'Belgium', 'Poland', 'Other EU'].map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div className="rfq-nav">
                <span />
                <button type="button" className="btn-next" onClick={() => setStep(2)}>
                  Next: Project Details →
                </button>
              </div>
            </div>

            {/* ---------- Step 2 ---------- */}
            <div className={`rfq-panel ${step === 2 ? 'active' : ''}`} id="rfq-panel-2">
              <h3 style={{ marginBottom: '1.5rem' }}>Project Details</h3>
              <div className="rfq-row">
                <div>
                  <label className="rfq-label" htmlFor="rfq-ptype">
                    Project Type
                  </label>
                  <select id="rfq-ptype" name="projectType" className="rfq-select">
                    {['New Build', 'Renovation', 'Industrial', 'Campervan/RV', 'EV Battery'].map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="rfq-label" htmlFor="rfq-area">
                    Approximate Area (m²)
                  </label>
                  <input id="rfq-area" name="area" type="number" className="rfq-input" placeholder="e.g. 500" />
                </div>
              </div>
              <div className="rfq-row">
                <div>
                  <label className="rfq-label" htmlFor="rfq-uvalue">
                    Required U-Value (W/m²K)
                  </label>
                  <input id="rfq-uvalue" name="uvalue" type="text" className="rfq-input" placeholder="e.g. ≤ 0.20" />
                </div>
                <div>
                  <label className="rfq-label" htmlFor="rfq-thickness">
                    Max Insulation Thickness
                  </label>
                  <input id="rfq-thickness" name="maxThickness" type="text" className="rfq-input" placeholder="e.g. 30mm" />
                </div>
              </div>
              <div>
                <label className="rfq-label" htmlFor="rfq-notes">
                  Project Notes
                </label>
                <textarea id="rfq-notes" name="notes" className="rfq-textarea" placeholder="Describe your project, constraints, certifications needed…" />
              </div>
              <div className="rfq-nav">
                <button type="button" className="btn-prev" onClick={() => setStep(1)}>
                  ← Back
                </button>
                <button type="button" className="btn-next" onClick={() => setStep(3)}>
                  Next: Products →
                </button>
              </div>
            </div>

            {/* ---------- Step 3 ---------- */}
            <div className={`rfq-panel ${step === 3 ? 'active' : ''}`} id="rfq-panel-3">
              <h3 style={{ marginBottom: '1rem' }}>Products of Interest</h3>
              <span className="rfq-label">Select all that apply</span>
              <ChoiceGroup name="products" options={PRODUCT_CHOICES} />

              <span className="rfq-label" style={{ marginTop: '1rem' }}>
                Shipping Terms
              </span>
              <ChoiceGroup name="shipping" options={SHIPPING_CHOICES} />

              <span className="rfq-label" style={{ marginTop: '1rem' }}>
                Required Documentation
              </span>
              <ChoiceGroup name="docs" options={DOC_CHOICES} />

              <div className="rfq-nav">
                <button type="button" className="btn-prev" onClick={() => setStep(2)}>
                  ← Back
                </button>
                <button
                  type="submit"
                  className="btn-next"
                  style={{ background: 'linear-gradient(135deg,var(--c-tech),var(--c-eco))', color: '#000' }}
                >
                  Submit Enquiry ✓
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
