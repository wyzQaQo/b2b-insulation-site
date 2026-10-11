import type { Metadata } from 'next';
import Link from 'next/link';
import PageHeader from '@/components/layout/PageHeader';
import Stats from '@/components/home/Stats';
import Certs from '@/components/home/Certs';
import { certifications, stats } from '@/data/content';

export const metadata: Metadata = {
  title: 'About ThermaCore — Manufacturer & Export Engineering Support',
  description:
    'Factory-direct insulation supply with CE/EN 13163, ISO 9001 and REACH documentation, exporting to 40+ countries from a 50 m² minimum order quantity.',
};

const MILESTONES = [
  {
    year: '2009',
    title: 'Founded as an EPS conversion plant',
    body: 'Started as a 12-person EPS and graphite-EPS conversion facility supplying regional render contractors. The decision to move in-house rather than distribute is still what lets us quote EXW today.',
  },
  {
    year: '2014',
    title: 'First EN 13163 CE certification',
    body: 'Passed factory production control auditing for EN 13163 (EPS) and EN 13164 (UFH boards), opening direct specification by EU contractors instead of resale through distributors.',
  },
  {
    year: '2017',
    title: 'Aerogel blanketing line commissioned',
    body: 'Added in-house aerogel blanketing so ultra-thin and high-temperature projects could be supplied from the same order book as commodity boards — no separate import lane.',
  },
  {
    year: '2020',
    title: 'ISO 9001 and REACH compliance',
    body: 'Full quality-management certification plus REACH registration for every article shipped into the EU, including the bio-based range.',
  },
  {
    year: '2022',
    title: 'Bio-based range launched',
    body: 'Hemp fibre and carbonised cork added for Passivhaus, LEED and BREEAM projects that could not use mineral wool or EPS on indoor-air-quality grounds.',
  },
  {
    year: '2024',
    title: 'EV battery thermal barriers',
    body: 'Cut-to-drawing aerogel pads qualified to UL 2580 and UN 38.3 for cell-to-pack manufacturers, entering a supply chain with entirely different documentation requirements.',
  },
];

const CAPABILITIES = [
  {
    icon: '🏭',
    title: 'Factory-direct production',
    body: 'EPS conversion, graphite EPS, aerogel blanketing, UFH board and system assembly all run in-house. No distributor margin sits between you and the line.',
  },
  {
    icon: '📐',
    title: 'Engineering support included',
    body: 'Every quotation is reviewed by an engineer for buildability, fixing density and detail junctions. We will tell you when a cheaper SKU is the wrong answer.',
  },
  {
    icon: '📋',
    title: 'Full documentation, always',
    body: 'CE Declaration of Performance, TDS, SDS, EN 12667 test reports and fire classification are issued with every order — not on request afterwards.',
  },
  {
    icon: '📦',
    title: 'MOQ from 50 m²',
    body: 'Small orders accepted for sampling and pilot projects. Bulk pricing applies from one 40HQ, with CIF Rotterdam, CIF Hamburg and DDP available.',
  },
  {
    icon: '🚚',
    title: 'EU logistics',
    body: 'Consolidated sea freight, China–EU rail for urgent call-offs, and DDP delivery so no customs surprises land on your invoice.',
  },
  {
    icon: '🌍',
    title: '40+ export markets',
    body: 'Documented experience with EN, DIN, NEN, SFS and BS acceptance criteria, including heritage-authority submissions.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="About Us"
        title={
          <>
            A manufacturer that
            <br />
            answers its own email.
          </>
        }
        lede="ThermaCore supplies insulation systems directly from our own production lines to contractors, architects and OEM engineers across 40+ countries. No distributor margin, no unquoted lead times."
      />

      <Stats items={stats} />

      {/* ---- Positioning ---- */}
      <section className="pain-section">
        <div className="container">
          <div className="section-header reveal">
            <span className="label">What We Are</span>
            <h2>Engineers who sell what they build.</h2>
            <p>
              We are not a trading company with a website. Aerogel blanketing, EPS conversion and
              UFH board assembly all happen on our own lines, which is why we can quote EXW, ship
              from 50 m² and answer technical questions without escalating to a supplier.
            </p>
          </div>

          <div className="capability-grid">
            {CAPABILITIES.map((c) => (
              <div className="capability-card reveal" key={c.title} data-spotlight>
                <div className="pain-icon tech">{c.icon}</div>
                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>{c.title}</h3>
                <p style={{ color: 'var(--c-text2)', fontSize: '0.9rem', lineHeight: 1.75, margin: 0 }}>
                  {c.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Timeline ---- */}
      <section className="tech-section" id="timeline">
        <div className="container">
          <div className="section-header reveal">
            <span className="label">Milestones</span>
            <h2>How the range was built.</h2>
            <p>
              Each product was added because a customer project demanded it and no existing
              supplier would certify it properly.
            </p>
          </div>

          <ol className="timeline">
            {MILESTONES.map((m) => (
              <li className="timeline-item reveal" key={m.year}>
                <div className="timeline-year">{m.year}</div>
                <div className="timeline-body">
                  <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>{m.title}</h3>
                  <p style={{ color: 'var(--c-text2)', fontSize: '0.92rem', lineHeight: 1.8, margin: 0 }}>
                    {m.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ---- Trade terms ---- */}
      <section className="cases-section">
        <div className="container">
          <div className="section-header-center reveal">
            <span className="label">Trade Terms</span>
            <h2>How we quote and ship.</h2>
            <p>Every quotation states the Incoterm explicitly, so the delivered cost is not a surprise later.</p>
          </div>

          <div className="terms-grid">
            {[
              { k: 'EXW Factory', v: 'Qingdao, China — lowest price, buyer arranges freight' },
              { k: 'FOB Qingdao', v: 'Includes export clearance and port handling' },
              { k: 'CIF Rotterdam', v: 'Sea freight and marine insurance to NL' },
              { k: 'CIF Hamburg', v: 'Sea freight and marine insurance to DE' },
              { k: 'DDP', v: 'Delivered, duty paid — no customs on your invoice' },
              { k: 'Rail (China–EU)', v: 'Urgent call-offs, ~18 days door to door' },
            ].map((t) => (
              <div className="term-card reveal" key={t.k}>
                <div className="term-k">{t.k}</div>
                <div className="term-v">{t.v}</div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link href="/products" className="btn-electric">
              See the Product Range →
            </Link>
          </div>
        </div>
      </section>

      <Certs items={certifications} withCta />
    </>
  );
}
