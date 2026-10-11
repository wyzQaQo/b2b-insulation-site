import { tickerItems } from '@/data/content';

export default function Ticker() {
  const loop = [...tickerItems, ...tickerItems];

  return (
    <div className="ticker-section">
      <div className="ticker-track" id="ticker-track">
        {loop.map((item, i) => (
          <div className="ticker-item" key={i} aria-hidden={i >= tickerItems.length}>
            <strong>{item.strong}</strong>
            <span className="ticker-sep">·</span>
            {item.rest}
          </div>
        ))}
      </div>
    </div>
  );
}
