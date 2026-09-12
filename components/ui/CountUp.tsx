"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Chiffre qui s'incrémente lorsqu'il entre dans l'écran.
 * La valeur finale est rendue telle quelle dans le HTML : sans JavaScript,
 * ou si l'utilisateur a demandé à réduire les animations, le chiffre exact
 * est affiché immédiatement. Aucune valeur n'est jamais inventée : on
 * n'anime que le compte vers la valeur réelle fournie.
 */
export default function CountUp({ value, className = "" }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const match = value.match(/^(\D*)(\d+)(.*)$/);
    if (!match) return;
    const [, prefix, digits, suffix] = match;
    const target = Number(digits);
    if (!Number.isFinite(target) || target === 0) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);

          const duration = 1100;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            // Décélération : rapide au début, posé à l'arrivée.
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(`${prefix}${Math.round(target * eased)}${progress === 1 ? suffix : ""}`);
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
