import Link from 'next/link';
import ThreadsBackground from './ThreadsBackground';
import RotatingText from './RotatingText';

export default function Hero() {
  return (
    <section id="hero">
      <ThreadsBackground />
      <div className="hero-noise" />
      <div className="hero-grad" />
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            EU Certified · ISO 9001 · CE Marked Insulation Systems
          </div>

          <h1 className="hero-title">
            <span className="line1">Next-Generation</span>
            <RotatingText />
          </h1>

          <p className="hero-sub">
            From aerogel nanotechnology to bio-based hemp fibers — precision-engineered thermal
            systems that meet EU standards and help architects build the future.
          </p>

          <div className="hero-btns">
            <span className="magnet-wrap">
              <Link href="/contact" className="btn-electric">
                Request Tech Catalog
              </Link>
            </span>
            <Link href="/products" className="btn-ghost">
              Explore Products →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
