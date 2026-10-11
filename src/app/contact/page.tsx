import type { Metadata } from 'next';
import PageHeader from '@/components/layout/PageHeader';
import Rfq from '@/components/home/Rfq';

export const metadata: Metadata = {
  title: 'Contact & RFQ — Technical Catalog & Free Sample | ThermaCore Solutions',
  description:
    'Request the technical catalogue, CE documentation and a CIF/DDP quotation. Engineering response within 24 business hours, average 4 hours.',
};

const CHANNELS = [
  { icon: '✉️', label: 'Technical Sales', value: 'sales@thermaco.re', note: 'RFQ, TDS/SDS, quotations' },
  { icon: '📐', label: 'Engineering Desk', value: 'engineering@thermaco.re', note: 'U-value calcs, buildability review' },
  { icon: '📞', label: 'Phone / WhatsApp', value: '+31 10 000 0000', note: 'Mon–Fri 08:00–18:00 CET' },
  { icon: '📍', label: 'Export Office', value: 'Rotterdam, Netherlands', note: 'CIF / DDP documentation' },
];

const PROMISES = [
  { icon: '⚡', title: '24-hour response', body: 'Every enquiry answered within one business day, with a named engineer rather than an auto-reply.' },
  { icon: '📄', title: 'Documents included', body: 'CE Declaration of Performance, TDS, SDS and EN 12667 test reports ship with the quotation.' },
  { icon: '🎁', title: 'Free sample dispatch', body: 'A4-sized material samples ship with every quote. You pay only the freight.' },
  { icon: '🔁', title: 'No-obligation trial', body: 'Start from 50 m². If the material does not suit the build, we would rather know early.' },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Direct Inquiry / RFQ"
        title={
          <>
            Get your technical catalog
            <br />
            and sample kit in 24 hours.
          </>
        }
        lede="Tell us about the project. An engineer — not a sales queue — will come back with product recommendations, CE documentation and a CIF/DDP quotation."
      />

      <section style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <div className="channel-grid">
            {CHANNELS.map((c) => (
              <div className="channel-card reveal" key={c.label}>
                <div className="channel-icon">{c.icon}</div>
                <div className="channel-label">{c.label}</div>
                <div className="channel-value">{c.value}</div>
                <div className="channel-note">{c.note}</div>
              </div>
            ))}
          </div>

          <div className="promise-grid">
            {PROMISES.map((p) => (
              <div className="promise-card reveal" key={p.title}>
                <span className="promise-icon">{p.icon}</span>
                <div>
                  <h3 style={{ fontSize: '0.98rem', marginBottom: '0.35rem' }}>{p.title}</h3>
                  <p style={{ color: 'var(--c-text2)', fontSize: '0.86rem', lineHeight: 1.7, margin: 0 }}>
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Rfq />
    </>
  );
}
