import { useState, useEffect, useRef } from 'react';

// ── Hook: scroll-based reveal ──────────────────────────────────────────────
export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

// ── Hook: mouse-tilt on card ───────────────────────────────────────────────
export function useTilt(strength = 8) {
  const ref = useRef(null);
  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `rotateX(${py * -strength}deg) rotateY(${px * strength}deg) translateZ(10px)`;
  };
  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = '';
  };
  return { ref, onPointerMove: handleMove, onPointerLeave: handleLeave };
}

// ── Asset URL helper for Vite & GitHub Pages ───────────────────────────────
export function getAssetUrl(path) {
  if (!path) return '';
  const cleanPath = path.replace(/^(\.\/|\/)?(public\/)?/, '');
  const base = import.meta.env.BASE_URL || '/';
  return base.endsWith('/') ? `${base}${cleanPath}` : `${base}/${cleanPath}`;
}
