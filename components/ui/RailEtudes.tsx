"use client";

import { useEffect, useRef, useState } from "react";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import type { CaseStudyRecord } from "@/lib/content/case-studies";

/**
 * Les études de cas couchées sur un rail que l'on fait glisser.
 *
 * Ce n'est volontairement PAS un carrousel au sens habituel du terme, et la
 * distinction n'est pas une coquetterie de vocabulaire : ce qui dessert les
 * carrousels sur une page d'accueil, c'est la rotation automatique et le fait
 * que tout ce qui suit la première vue reste invisible et donc ignoré.
 *
 * Trois choix évitent cela.
 *
 * 1. Rien ne tourne tout seul. Le visiteur avance quand il décide d'avancer.
 *    Une rotation automatique déplace le contenu pendant la lecture et fait
 *    manquer la carte qu'on était en train de lire.
 * 2. La carte suivante dépasse toujours dans le cadre. C'est le détail qui
 *    change le plus la découverte d'un rail : un bord de carte visible dit
 *    qu'il y a une suite, là où un alignement net laisse croire que tout est
 *    déjà montré.
 * 3. Le défilement natif fait le travail. Le rail reste une zone qui défile
 *    horizontalement, donc la molette, le pavé tactile, le doigt, la barre de
 *    défilement et le clavier fonctionnent sans une ligne de JavaScript. Le
 *    script n'ajoute que le repère de position et les raccourcis.
 *
 * Sans JavaScript, le rail glisse toujours ; seul le repère disparaît, puisque
 * lui seul en dépend.
 */
export default function RailEtudes({ etudes }: { etudes: CaseStudyRecord[] }) {
  const rail = useRef<HTMLUListElement>(null);
  const [avancement, setAvancement] = useState(0);
  const [actif, setActif] = useState(0);
  // Le nombre de repères n'est PAS le nombre d'études. Sur grand écran, trois
  // cartes tiennent déjà dans le cadre : afficher quatre points laisserait
  // croire à quatre positions, alors qu'il n'y en a que deux, et cliquer le
  // troisième sauterait à la fin sans que le repère corresponde à rien. Le
  // nombre de repères se déduit donc de ce qui dépasse réellement du cadre, et
  // il est recalculé à chaque changement de largeur.
  const [vues, setVues] = useState(1);
  const [part, setPart] = useState(1);

  useEffect(() => {
    const el = rail.current;
    if (!el) return;
    let demande = 0;

    function mesurer() {
      demande = 0;
      const e = rail.current;
      if (!e) return;
      const course = e.scrollWidth - e.clientWidth;
      const a = course > 0 ? Math.min(Math.max(e.scrollLeft / course, 0), 1) : 0;
      const n = Math.max(Math.ceil(e.scrollWidth / e.clientWidth), 1);
      setAvancement(a);
      setVues(n);
      // Largeur de la pastille : la part du rail visible dans le cadre, comme
      // le ferait le curseur d'une barre de défilement.
      setPart(Math.min(e.clientWidth / e.scrollWidth, 1));
      setActif(Math.min(Math.round(a * (n - 1)), n - 1));
    }

    function auDefilement() {
      if (demande) return;
      demande = requestAnimationFrame(mesurer);
    }

    el.addEventListener("scroll", auDefilement, { passive: true });
    window.addEventListener("resize", auDefilement);
    mesurer();

    return () => {
      el.removeEventListener("scroll", auDefilement);
      window.removeEventListener("resize", auDefilement);
      if (demande) cancelAnimationFrame(demande);
    };
  }, [etudes.length]);

  function allerA(i: number) {
    const el = rail.current;
    if (!el) return;
    const course = el.scrollWidth - el.clientWidth;
    const cible = vues > 1 ? (course * i) / (vues - 1) : 0;
    const doux = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ left: cible, behavior: doux ? "smooth" : "auto" });
  }

  const largeurPastille = part * 100;

  return (
    <div>
      <ul
        ref={rail}
        // `tabIndex` sur une zone qui défile : sans lui, une personne au clavier
        // ne peut pas atteindre le contenu qui dépasse du cadre.
        tabIndex={0}
        role="region"
        aria-label={`${etudes.length} études de cas, faites glisser pour les parcourir`}
        // `scroll-pl` est indispensable ici : sans lui, le pas de magnétisme
        // ignore le rembourrage, la première carte vient coller au bord de
        // l'écran et la marge de page disparaît au repos.
        className="mc-rail -mx-6 flex snap-x snap-mandatory gap-6 scroll-pl-6 overflow-x-auto px-6 pb-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink md:-mx-10 md:scroll-pl-10 md:px-10"
      >
        {etudes.map((e) => (
          <li
            key={e.slug}
            className="w-[82%] shrink-0 snap-start sm:w-[58%] lg:w-[38%]"
          >
            <CaseStudyCard study={e} />
          </li>
        ))}
      </ul>

      {/* Le repère de position : une pastille qui glisse dans sa gorge, et
          autant de zones cliquables que d'études. La pastille suit le
          défilement en continu, elle ne saute pas d'un cran à l'autre. */}
      <div className="mc-rail-jauge mt-8 flex items-center gap-5">
        <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-ink/15">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-accent-hover"
            style={{
              width: `${largeurPastille}%`,
              transform: `translateX(${(avancement * (100 - largeurPastille) * 100) / largeurPastille}%)`,
            }}
          />
        </div>
        <ul className="flex gap-1.5">
          {Array.from({ length: vues }, (_, i) => (
            <li key={`point-${i}`}>
              <button
                type="button"
                onClick={() => allerA(i)}
                aria-label={`Aller à la vue ${i + 1} sur ${vues} des études de cas`}
                aria-current={i === actif ? "true" : undefined}
                className={`block h-2.5 w-2.5 cursor-pointer rounded-full transition-colors ${
                  i === actif ? "bg-accent-hover" : "bg-ink/25 hover:bg-ink/50"
                }`}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
