'use client';

import { useEffect, useRef } from 'react';

/**
 * Perlin-noise flow-line field behind the hero. Ported from the original
 * design's `threads-canvas` IIFE, rebuilt as a React component so it unmounts
 * cleanly and respects `prefers-reduced-motion`.
 */
export default function ThreadsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let frame = 0;
    const lines: {
      x: number;
      y: number;
      hue: number;
      alpha: number;
      speed: number;
    }[] = [];

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };

    // Cheap value-noise in place of a full Perlin implementation.
    const hash = (n: number) => (Math.sin(n * 127.1) * 43758.5453) % 1;
    const noise2D = (x: number, y: number) => {
      const ix = Math.floor(x);
      const iy = Math.floor(y);
      const fx = x - ix;
      const fy = y - iy;
      const a = hash(ix + iy * 57);
      const b = hash(ix + 1 + iy * 57);
      const c = hash(ix + (iy + 1) * 57);
      const d = hash(ix + 1 + (iy + 1) * 57);
      const ux = fx * fx * (3 - 2 * fx);
      const uy = fy * fy * (3 - 2 * fy);
      return a * (1 - ux) * (1 - uy) + b * ux * (1 - uy) + c * (1 - ux) * uy + d * ux * uy;
    };

    const LINE_COUNT = 38;
    const STEP = 120;

    const seed = () => {
      lines.length = 0;
      for (let i = 0; i < LINE_COUNT; i += 1) {
        lines.push({
          x: Math.random() * W,
          y: (i / LINE_COUNT) * H * 1.2 - H * 0.1,
          hue: 195 + Math.random() * 30,
          alpha: 0.15 + Math.random() * 0.2,
          speed: 0.4 + Math.random() * 0.8,
        });
      }
    };

    let t = 0;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      t += 0.003;
      for (const ln of lines) {
        let px = ln.x;
        let py = ln.y;
        ctx.beginPath();
        ctx.moveTo(px, py);
        for (let s = 0; s < STEP; s += 1) {
          const n = noise2D(px / 300 + t, py / 300) * 2 * Math.PI * 3;
          px += Math.cos(n) * ln.speed * 2;
          py += Math.sin(n) * ln.speed * 0.8;
          ctx.lineTo(px, py);
        }
        ctx.strokeStyle = `hsla(${ln.hue},80%,65%,${ln.alpha})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      frame = requestAnimationFrame(draw);
    };

    resize();
    seed();
    window.addEventListener('resize', resize);

    if (reduce) {
      draw();
      cancelAnimationFrame(frame);
    } else {
      frame = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas id="threads-canvas" ref={canvasRef} aria-hidden="true" />;
}
