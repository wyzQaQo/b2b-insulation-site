'use client';

import { useState } from 'react';
import type { Application } from '@/data/content';

/** Tabbed application scenarios. Replaces the original DOM-click handler. */
export default function Applications({ items }: { items: Application[] }) {
  const [active, setActive] = useState(0);
  const current = items[active];

  return (
    <section className="app-section" id="applications">
      <div className="container">
        <div className="section-header-center reveal">
          <span className="label">Application Scenarios</span>
          <h2>
            We don&apos;t just sell materials.
            <br />
            We understand your build.
          </h2>
        </div>

        <div className="app-tabs" id="app-tabs" role="tablist" aria-label="Application scenarios">
          {items.map((a, i) => (
            <button
              key={a.tab}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-controls={`app-panel-${i}`}
              id={`app-tab-${i}`}
              className={`app-tab ${i === active ? 'active' : ''}`}
              onClick={() => setActive(i)}
            >
              {a.tab}
            </button>
          ))}
        </div>

        <div className="app-panels">
          {items.map((a, i) => (
            <div
              key={a.tab}
              role="tabpanel"
              id={`app-panel-${i}`}
              aria-labelledby={`app-tab-${i}`}
              data-panel-id={i}
              hidden={i !== active}
              className={`app-panel ${i === active ? 'active' : ''}`}
            >
              <div className="app-panel-inner">
                <div className="app-visual">
                  <div className="app-vis-bg" style={{ background: a.gradient }} />
                  <span style={{ position: 'relative', zIndex: 1, fontSize: '6rem' }}>{a.icon}</span>
                </div>
                <div className="app-info">
                  <span className="label">{a.label}</span>
                  <h3>{a.title}</h3>
                  <p>{a.body}</p>
                  <div className="app-specs">
                    {a.specs.map((s) => (
                      <div className="app-spec-row" key={s.k}>
                        <span>{s.k}</span>
                        <span>{s.v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <span className="sr-only" aria-live="polite">
          Showing {current.label}
        </span>
      </div>
    </section>
  );
}
