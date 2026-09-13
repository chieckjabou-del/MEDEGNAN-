"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Chiffre qui s'incrémente lorsqu'il entre dans l'écran.
 * La valeur finale est rendue telle quelle dans le HTML : sans JavaScript,
 * ou si l'utilisateur a demandé à réduire les animations, le chiffre exact
 * est affiché immédiatement. Aucune valeur n'est jamais inventée : on
 * n'anime que le compte vers la valeur réelle fournie.
 */
export default function CountUp({
  value,
  className = "",
  declencher,
}: {
  value: string;
  className?: string;
  /**
   * Déclencheur explicite, à fournir quand l'entrée dans l'écran ne veut rien
   * dire. C'est le cas dans le mur de preuves : les quatre chiffres occupent la
   * même cellule et sont donc tous à l'écran dès que le bloc s'y trouve. Sans
   * ce drapeau, les quatre compteraient en même temps, et les trois derniers
   * seraient terminés avant qu'on arrive à eux.
   *
   * Laissé indéfini, le composant garde son comportement d'origine : il compte
   * quand il entre dans l'écran.
   */
  declencher?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const dejaCompte = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const match = value.match(/^(\D*)(\d+)(.*)$/);
    if (!match) return;
    const [, prefix, digits, suffix] = match;
    const target = Number(digits);
    if (!Number.isFinite(target) || target === 0) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let image = 0;

    function compter() {
      if (dejaCompte.current) return;
      dejaCompte.current = true;
      const duree = 1100;
      const depart = performance.now();
      const pas = (maintenant: number) => {
        const avancement = Math.min((maintenant - depart) / duree, 1);
        // Décélération : rapide au début, posé à l'arrivée.
        const adouci = 1 - Math.pow(1 - avancement, 3);
        setDisplay(`${prefix}${Math.round(target * adouci)}${avancement === 1 ? suffix : ""}`);
        if (avancement < 1) image = requestAnimationFrame(pas);
      };
      image = requestAnimationFrame(pas);
    }

    if (declencher !== undefined) {
      if (declencher) compter();
      return () => {
        if (image) cancelAnimationFrame(image);
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);
          compter();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (image) cancelAnimationFrame(image);
    };
  }, [value, declencher]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
