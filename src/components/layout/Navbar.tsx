'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const links = [
  { name: 'Products', href: '/products' },
  { name: 'Industries', href: '/industries' },
  { name: 'Case Studies', href: '/solutions' },
  { name: 'About', href: '/about' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Mobile drawer + scroll state are handled here rather than in GlobalEffects,
  // because they need React state.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav id="nav" className={scrolled ? 'scrolled' : undefined}>
        <div className="container">
          <div className="nav-inner">
            <Link href="/" className="nav-logo">
              <span className="nav-logo-dot" />
              ThermaCore Solutions
            </Link>

            <ul className="nav-links">
              {links.map((l) => (
                <li key={l.name}>
                  <Link href={l.href}>{l.name}</Link>
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <Link href="/contact" className="nav-cta">
                Request Catalog
              </Link>
              <button
                type="button"
                className="nav-toggle"
                aria-expanded={open}
                aria-controls="mobile-menu"
                aria-label="Toggle navigation menu"
                onClick={() => setOpen((o) => !o)}
              >
                <span className={`nav-toggle-bar ${open ? 'open' : ''}`} />
                <span className={`nav-toggle-bar ${open ? 'open' : ''}`} />
                <span className={`nav-toggle-bar ${open ? 'open' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div id="mobile-menu" className={`mobile-menu ${open ? 'open' : ''}`} hidden={!open}>
        {links.map((l) => (
          <Link key={l.name} href={l.href} onClick={() => setOpen(false)}>
            {l.name}
          </Link>
        ))}
        <Link href="/contact" className="btn-quote" onClick={() => setOpen(false)}>
          Request Catalog
        </Link>
      </div>
    </>
  );
}
