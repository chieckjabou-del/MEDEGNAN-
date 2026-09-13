"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import type { NavItem } from "@/lib/content/site";

/**
 * Menu de navigation des petits écrans.
 *
 * Le panneau est projeté dans `document.body` plutôt que rendu à sa place dans
 * l'arbre, et ce n'est pas un raffinement : c'est la correction d'un bug qui
 * rendait le menu inutilisable.
 *
 * L'en-tête porte un `backdrop-blur`. Or un filtre d'arrière-plan crée un bloc
 * conteneur pour ses descendants en position fixe : le panneau ne se calait
 * donc pas sur la fenêtre mais sur l'en-tête, haut de 64 px. Avec `top: 64px`
 * et `bottom: 0` mesurés dans cette boîte, il se réduisait à une bande de
 * 64 pixels, invisible derrière le contenu de la page. Au clic, le menu
 * semblait passer sous la page.
 *
 * Une projection dans le corps du document met le panneau hors d'atteinte de ce
 * filtre, et le protège du même coup de tout `transform` ou `filter` qu'un
 * futur ancêtre pourrait porter, qui produirait exactement le même effet.
 */
export default function MobileNav({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const bouton = useRef<HTMLButtonElement>(null);
  const panneau = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    function surTouche(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        bouton.current?.focus();
      }
    }

    // Sans ce verrou, la page continue de défiler derrière le menu ouvert.
    const defilementInitial = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", surTouche);
    panneau.current?.focus();

    return () => {
      document.body.style.overflow = defilementInitial;
      document.removeEventListener("keydown", surTouche);
    };
  }, [open]);

  function fermer() {
    setOpen(false);
  }

  const contenu = (
    <div
      id="mobile-nav-panel"
      ref={panneau}
      tabIndex={-1}
      className="fixed inset-x-0 bottom-0 top-[65px] z-40 overflow-y-auto bg-paper px-6 py-8 focus:outline-none xl:hidden"
    >
      <nav aria-label="Navigation principale">
        <ul className="flex flex-col gap-1">
          {items.map((item) => (
            <li key={item.href} className="border-b border-line py-3">
              <Link href={item.href} onClick={fermer} className="block font-display text-2xl">
                {item.label}
              </Link>
              {item.children && (
                <ul className="mt-2 flex flex-col gap-2 pl-4">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link href={child.href} onClick={fermer} className="block py-1 text-sm text-ink-soft">
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className="mt-8 flex flex-col gap-3">
        <Link
          href="/demander-un-diagnostic"
          onClick={fermer}
          className="inline-flex items-center justify-center rounded-sm bg-ink px-6 py-3 text-sm font-medium text-paper"
        >
          Réserver mon Audit Flash
        </Link>
      </div>
    </div>
  );

  return (
    <div className="xl:hidden">
      <button
        type="button"
        ref={bouton}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        onClick={() => setOpen((v) => !v)}
        className="flex h-11 w-11 items-center justify-center rounded-sm border border-ink/20"
      >
        <span className="sr-only">Menu</span>
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" aria-hidden="true">
          {open ? (
            <path d="M1 1L19 13M19 1L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          ) : (
            <>
              <path d="M0 1H20" stroke="currentColor" strokeWidth="2" />
              <path d="M0 7H20" stroke="currentColor" strokeWidth="2" />
              <path d="M0 13H20" stroke="currentColor" strokeWidth="2" />
            </>
          )}
        </svg>
      </button>

      {/* `open` ne peut passer à vrai que sur un clic, donc jamais pendant le
          rendu serveur : `document` existe forcément ici. */}
      {open && createPortal(contenu, document.body)}
    </div>
  );
}
