'use client';

import { useEffect, useRef } from 'react';

type Stat = { count: number; suffix: string; label: string };

/**
 * Count-up statistics row. Numbers animate once, when the row scrolls into view.
 */
export default function Stats({ items }: { items: Stat[] }) {
  const rowRef = useRef<HTMLDivElement>(null);
  const done = useRef(false);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const run = (el: HTMLElement) => {
      const target = Number(el.dataset.count ?? '0');
      const suffix = el.dataset.suffix ?? '';
      if (reduce) {
        el.textContent = (target >= 1000 ? target.toLocaleString() : target) + suffix;
        return;
      }
      const dur = 2000;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / dur, 1);
        const ease = 1 - Math.pow(1 - t, 4);
        const val = Math.round(ease * target);
        el.textContent = (val >= 1000 ? val.toLocaleString() : val) + suffix;
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || done.current) return;
          done.current = true;
          row.querySelectorAll<HTMLElement>('[data-count]').forEach(run);
          io.disconnect();
        });
      },
      { threshold: 0.2 },
    );

    io.observe(row);
    return () => io.disconnect();
  }, []);

  return (
    <section className="stats-section">
      <div className="container">
        <div className="stats-grid" ref={rowRef}>
          {items.map((s, i) => (
            <div key={s.label} className={`stat-box reveal reveal-delay-${(i % 4) + 1}`}>
              <div className="stat-num" data-count={s.count} data-suffix={s.suffix}>
                0
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
