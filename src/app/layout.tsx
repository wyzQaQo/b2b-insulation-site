import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import GlobalEffects from '@/components/home/GlobalEffects';

export const metadata: Metadata = {
  metadataBase: new URL('https://thermaco.re'),
  title: {
    default: 'ThermaCore Solutions — Next-Generation Insulation Systems',
    template: '%s | ThermaCore Solutions',
  },
  description:
    'Manufacturer-direct aerogel, vacuum insulation panels, bio-based boards and complete ETICS systems. CE / EN 13163 / ISO 9001 documented, MOQ from 50 m², shipping CIF and DDP worldwide.',
  keywords: [
    'aerogel blanket',
    'vacuum insulation panel',
    'SEPS graphite EPS',
    'hemp fiber insulation',
    'carbonised cork board',
    'UFH mushroom board',
    'ETICS system',
    'thermal insulation supplier',
  ],
  openGraph: {
    title: 'ThermaCore Solutions — Next-Generation Insulation Systems',
    description:
      'Aerogel, VIP, bio-based boards and complete ETICS systems. Factory-direct pricing with full CE documentation.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <GlobalEffects />
        <a
          href="https://wa.me/"
          className="wa-float"
          title="WhatsApp"
          aria-label="Chat on WhatsApp"
          rel="noopener noreferrer"
        >
          💬
        </a>
      </body>
    </html>
  );
}
