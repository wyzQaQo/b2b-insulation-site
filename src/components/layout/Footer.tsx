import Link from 'next/link';

const PRODUCT_LINKS = [
  { label: 'Aerogel Blanket TC-AG15', href: '/products#aerogel-blanket-tc-ag15' },
  { label: 'Vacuum Panel VIP-25', href: '/products#vacuum-insulation-panel-vip-25' },
  { label: 'Hemp Fiber Board HF-50', href: '/products#hemp-fiber-board-hf-50' },
  { label: 'Carbonised Cork CC-30', href: '/products#carbonised-cork-board-cc-30' },
  { label: 'SEPS Graphite EPS', href: '/products#seps-graphite-eps-se-031' },
  { label: 'UFH Mushroom Board', href: '/products#ufh-mushroom-board-mb-20' },
];

const COMPANY_LINKS = [
  { label: 'About Us', href: '/about' },
  { label: 'Industries', href: '/industries' },
  { label: 'Case Studies', href: '/solutions' },
  { label: 'ROI Calculator', href: '/solutions#calculator' },
  { label: 'Request a Quote', href: '/contact' },
];

const TRADE_LINKS = [
  'FOB Qingdao',
  'CIF Rotterdam',
  'CIF Hamburg',
  'DDP (Tax Inclusive)',
  'China–EU Rail',
  'Free Sample Policy',
];

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand-name">ThermaCore Solutions</div>
            <p className="footer-brand-desc">
              Next-generation thermal insulation systems for sustainable European architecture.
              CE-certified. Factory-direct. Engineering support included.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-btn" aria-label="LinkedIn">in</a>
              <a href="#" className="social-btn" aria-label="X">tw</a>
              <a href="#" className="social-btn" aria-label="YouTube">yt</a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Products</h4>
            <ul className="footer-links">
              {PRODUCT_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Company</h4>
            <ul className="footer-links">
              {COMPANY_LINKS.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Trade Terms</h4>
            <ul className="footer-links">
              {TRADE_LINKS.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copy">
            © 2026 ThermaCore Solutions. All CE certificates available upon request. Privacy
            Policy · Terms of Trade
          </div>
          <div className="footer-flags">🇩🇪 🇳🇱 🇫🇷 🇦🇹 🇧🇪 🇵🇱 🇸🇪 🇳🇴</div>
        </div>
      </div>
    </footer>
  );
}
