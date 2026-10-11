'use client';

import { useEffect, useRef, useState } from 'react';

const PHRASES = [
  'Insulation Solutions',
  'Aerogel Technology',
  'Sustainable Architecture',
  'Thermal Performance',
  'Bio-Based Systems',
];

/**
 * Rotating second line of the hero headline.
 *
 * The gradient text-fill lives on THIS element rather than a wrapper:
 * `background-clip:text` on a parent does not reliably paint through a nested
 * animated inline span, which left the line invisible.
 */
export default function RotatingText() {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<'entering' | 'exiting'>('entering');
  const swap = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhase('exiting');
      swap.current = setTimeout(() => {
        setIndex((i) => (i + 1) % PHRASES.length);
        setPhase('entering');
      }, 400);
    }, 2800);

    return () => {
      clearInterval(interval);
      if (swap.current) clearTimeout(swap.current);
    };
  }, []);

  return (
    <span className={`line2 r-text ${phase}`} id="hero-rotating">
      {PHRASES[index]}
    </span>
  );
}
