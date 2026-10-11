'use client';

import { useEffect } from 'react';

/**
 * Global DOM effects ported from the original prototype:
 *  - nav background on scroll
 *  - magnetic hover on primary buttons
 *  - spotlight / glare tracking on cards
 *  - scroll reveal via IntersectionObserver
 *  - lambda comparison bars animating in
 *  - character scramble on section labels
 *  - glow on h2 hover
 *
 * Mounted once from the root layout so every route benefits.
 */
export default function GlobalEffects() {
  useEffect(() => {
    const cleanups: (() => void)[] = [];

    // ---- Nav scroll state -------------------------------------------------
    const nav = document.getElementById('nav');
    if (nav) {
      const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 60);
      onScroll();
      window.addEventListener('scroll', onScroll, { passive: true });
      cleanups.push(() => window.removeEventListener('scroll', onScroll));
    }

    // ---- Magnetic buttons -------------------------------------------------
    const magnets = document.querySelectorAll<HTMLElement>('.magnet-wrap, .btn-ghost, .btn-electric, .nav-cta');
    magnets.forEach((btn) => {
      const move = (e: MouseEvent) => {
        const r = btn.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.18;
        const y = (e.clientY - r.top - r.height / 2) * 0.18;
        btn.style.transform = `translate(${x}px,${y}px)`;
      };
      const leave = () => {
        btn.style.transform = '';
      };
      btn.addEventListener('mousemove', move);
      btn.addEventListener('mouseleave', leave);
      cleanups.push(() => {
        btn.removeEventListener('mousemove', move);
        btn.removeEventListener('mouseleave', leave);
      });
    });

    // ---- Cursor-tracked spotlight / glare --------------------------------
    const track = (selector: string, xProp: string, yProp: string) => {
      document.querySelectorAll<HTMLElement>(selector).forEach((card) => {
        const move = (e: MouseEvent) => {
          const r = card.getBoundingClientRect();
          card.style.setProperty(xProp, `${((e.clientX - r.left) / r.width) * 100}%`);
          card.style.setProperty(yProp, `${((e.clientY - r.top) / r.height) * 100}%`);
        };
        card.addEventListener('mousemove', move);
        cleanups.push(() => card.removeEventListener('mousemove', move));
      });
    };
    track('[data-spotlight]', '--mx', '--my');
    track('[data-glare]', '--gx', '--gy');

    // ---- Scroll reveal ---------------------------------------------------
    const revealables = document.querySelectorAll<HTMLElement>('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        });
      },
      { threshold: 0.12 },
    );
    revealables.forEach((el) => io.observe(el));
    cleanups.push(() => io.disconnect());

    // ---- Lambda comparison bars ------------------------------------------
    const tbl = document.getElementById('compare-tbl');
    if (tbl) {
      const barObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            document.querySelectorAll<HTMLElement>('.lambda-bar[data-w]').forEach((bar) => {
              bar.style.width = bar.dataset.w ?? '0%';
            });
            barObs.disconnect();
          });
        },
        { threshold: 0.15 },
      );
      barObs.observe(tbl);
      cleanups.push(() => barObs.disconnect());
    }

    // ---- Character scramble on labels ------------------------------------
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    document.querySelectorAll<HTMLElement>('.label').forEach((el) => {
      const orig = el.dataset.orig ?? el.textContent ?? '';
      el.dataset.orig = orig;
      const enter = () => {
        let iter = 0;
        const id = setInterval(() => {
          el.textContent = orig
            .split('')
            .map((c, i) => (i < iter ? orig[i] : c === ' ' ? ' ' : chars[Math.floor(Math.random() * chars.length)]))
            .join('');
          if (iter >= orig.length) clearInterval(id);
          iter += 1.2;
        }, 35);
      };
      const leave = () => {
        el.textContent = orig;
      };
      el.addEventListener('mouseenter', enter);
      el.addEventListener('mouseleave', leave);
      cleanups.push(() => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
      });
    });

    // ---- Heading glow -----------------------------------------------------
    document.querySelectorAll<HTMLElement>('h2').forEach((h) => {
      const enter = () => {
        h.style.textShadow = '0 0 40px rgba(14,165,233,0.20)';
      };
      const leave = () => {
        h.style.textShadow = '';
      };
      h.addEventListener('mouseenter', enter);
      h.addEventListener('mouseleave', leave);
      cleanups.push(() => {
        h.removeEventListener('mouseenter', enter);
        h.removeEventListener('mouseleave', leave);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
