"use client";

import { useEffect, useRef, useState } from "react";
import TrameRadar from "@/components/ui/TrameRadar";
import CountUp from "@/components/ui/CountUp";

export type Preuve = { value: string; label: string; detail: string };

/**
 * Mur de preuves : le bloc se fixe à l'écran et les chiffres se succèdent au
 * défilement, chacun à pleine page.
 *
 * Trois précautions encadrent l'effet, parce qu'un bloc qui retient le
 * défilement est vite pénible.
 *
 * 1. Il ne s'applique qu'à partir de 768 px et seulement si le navigateur
 *    exécute du JavaScript. En dessous, ou sans JavaScript, les quatre chiffres
 *    se lisent en grille, dans l'ordre, sans rien retenir du tout. Les règles
 *    correspondantes vivent dans globals.css, côté CSS uniquement : le composant
 *    ne mesure rien avant d'en avoir le droit.
 * 2. Il est entièrement désactivé pour qui demande à son système de réduire les
 *    animations. Retenir le défilement sur quatre hauteurs d'écran est
 *    exactement ce dont ces personnes ne veulent pas.
 * 3. Les quatre chiffres restent dans le document, superposés dans la même
 *    cellule de grille : aucun n'est retiré ni remplacé. Un lecteur d'écran les
 *    parcourt dans l'ordre, et la hauteur du bloc ne dépend pas de celui qui est
 *    affiché.
 *
 * La position est lue dans un `requestAnimationFrame` plutôt qu'à chaque
 * événement de défilement : le navigateur en émet bien plus qu'il ne dessine
 * d'images, et mesurer à chaque fois ferait recalculer la mise en page pour
 * rien.
 */
export default function MurDePreuves({ preuves }: { preuves: Preuve[] }) {
  const section = useRef<HTMLDivElement>(null);
  const [actif, setActif] = useState(0);
  // Vrai seulement quand l'effet de fixation est réellement en service. Sert à
  // choisir qui déclenche le décompte des chiffres : l'avancement du
  // défilement quand le bloc est fixé, l'entrée dans l'écran sinon.
  const [fixe, setFixe] = useState(false);

  useEffect(() => {
    const el = section.current;
    if (!el) return;

    const petitEcran = window.matchMedia("(max-width: 767px)");
    const moinsDeMouvement = window.matchMedia("(prefers-reduced-motion: reduce)");
    let demande = 0;

    function mesurer() {
      demande = 0;
      const e = section.current;
      if (!e) return;
      const r = e.getBoundingClientRect();
      const course = r.height - window.innerHeight;
      if (course <= 0) return;
      const avancement = Math.min(Math.max(-r.top / course, 0), 1);
      // Le dernier chiffre doit tenir jusqu'au bout de la course, d'où le
      // plafond : sans lui, `avancement === 1` donnerait un indice hors liste.
      const i = Math.min(Math.floor(avancement * preuves.length), preuves.length - 1);
      setActif(i);
    }

    function auDefilement() {
      if (demande) return;
      demande = requestAnimationFrame(mesurer);
    }

    function brancher() {
      if (petitEcran.matches || moinsDeMouvement.matches) {
        window.removeEventListener("scroll", auDefilement);
        setFixe(false);
        setActif(0);
        return;
      }
      setFixe(true);
      window.addEventListener("scroll", auDefilement, { passive: true });
      mesurer();
    }

    brancher();
    petitEcran.addEventListener("change", brancher);
    moinsDeMouvement.addEventListener("change", brancher);

    return () => {
      window.removeEventListener("scroll", auDefilement);
      petitEcran.removeEventListener("change", brancher);
      moinsDeMouvement.removeEventListener("change", brancher);
      if (demande) cancelAnimationFrame(demande);
    };
  }, [preuves.length]);

  return (
    <section
      ref={section}
      className="mc-mur relative bg-ink text-paper"
      style={{ ["--mc-mur-pas" as string]: preuves.length }}
    >
      <div className="mc-mur-ecran relative overflow-hidden">
        <TrameRadar className="mc-mur-trame pointer-events-none absolute text-accent" />

        <div className="relative mx-auto w-full max-w-(--container-content) px-6 md:px-10">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-accent">
            Pas un discours, des chiffres
          </p>

          <ol className="mc-mur-liste mt-8">
            {preuves.map((p, i) => (
              <li key={p.label} className="mc-preuve" data-actif={i === actif ? "" : undefined}>
                <p className="mc-preuve-valeur font-mono font-bold text-accent">
                  <CountUp value={p.value} declencher={fixe ? i <= actif : undefined} />
                </p>
                <p className="mc-preuve-libelle mt-4 max-w-[22ch] font-bold text-paper text-balance">{p.label}</p>
                <p className="mt-4 max-w-[46ch] leading-relaxed text-paper/70">{p.detail}</p>
              </li>
            ))}
          </ol>

          {/* Repère d'avancement : on doit savoir où l'on en est, et combien il
              reste, sinon un bloc qui retient le défilement inquiète. */}
          <ol className="mc-mur-jauge mt-12 flex gap-2" aria-hidden="true">
            {preuves.map((p, i) => (
              <li
                key={`jauge-${p.label}`}
                className={`h-0.5 w-10 transition-colors duration-300 ${i <= actif ? "bg-accent" : "bg-paper/25"}`}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
