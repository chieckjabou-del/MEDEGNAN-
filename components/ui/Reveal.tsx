"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Apparition au défilement. Le contenu est visible par défaut dans le HTML :
 * l'état masqué n'est appliqué que si le navigateur exécute du JavaScript
 * (classe "js" posée sur <html>), et jamais si l'utilisateur a demandé à
 * réduire les animations. Un visiteur sans JS voit donc la page complète.
 */
export default function Reveal({
  children,
  className = "",
  delay = 0,
  as: As = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.classList.add("is-revealed");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          // On révèle aussi ce qui est déjà passé au-dessus de l'écran : sans
          // cela, un défilement brusque (ancre, restauration de position,
          // molette rapide) laisserait ces blocs invisibles pour toujours.
          const dejaDepasse = entry.boundingClientRect.bottom < 0;
          if (entry.isIntersecting || dejaDepasse) {
            (entry.target as HTMLElement).classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <As
      ref={ref as never}
      data-reveal=""
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={className}
    >
      {children}
    </As>
  );
}
