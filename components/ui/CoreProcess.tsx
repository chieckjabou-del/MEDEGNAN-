"use client";

import { useRef, useState } from "react";
import Reveal from "@/components/ui/Reveal";
import type { CorePhase } from "@/lib/content/methodology";

// Progression sémantique : on part du signal d'alerte pour arriver au résultat.
// Le texte utilise les variantes assombries, lisibles sur fond clair comme sur
// fond bleuté ; les pastilles et filets gardent la couleur de marque.
const phaseTone = [
  { text: "text-signal-text", bar: "bg-signal" },
  { text: "text-processus", bar: "bg-processus" },
  { text: "text-analyse-text", bar: "bg-analyse" },
  { text: "text-resultat-text", bar: "bg-resultat" },
];

/**
 * Les quatre phases en accordéon horizontal : une colonne ouverte, les autres
 * repliées en tranche verticale.
 *
 * Trois règles tiennent ce composant :
 *
 * 1. Une phase est toujours ouverte. Cliquer sur la phase ouverte ne la ferme
 *    pas. Un accordéon entièrement fermé ne dit plus rien au visiteur, et c'est
 *    la façon la plus courante de rater ce motif sur une page de présentation.
 * 2. Replié ne veut pas dire muet. Chaque tranche garde son code, sa couleur et
 *    son nom, donc la séquence Stabilisation, Structuration, Accélération,
 *    Domination se lit même quand une seule phase est déployée.
 * 3. Le texte des phases fermées reste dans le HTML, simplement masqué par une
 *    hauteur nulle : il est donc lisible par les moteurs de recherche, jamais
 *    retiré du document. Les règles `html:not(.js)` de globals.css déplient les
 *    quatre phases quand JavaScript est absent. Attention toutefois : tant que
 *    `app/loading.tsx` enveloppe chaque page dans une frontière Suspense, le
 *    contenu entier du site arrive dans un `div hidden` que seul JavaScript
 *    vient révéler. Ces règles sont donc correctes mais sans effet visible
 *    aujourd'hui ; elles le deviendront si cette frontière disparaît.
 *
 * L'état ouvert est posé directement dans le state React, jamais à la fin d'une
 * transition : un clic rapide sur une autre phase doit pouvoir interrompre
 * l'animation en cours sans laisser le composant dans un état faux.
 */
export default function CoreProcess({ phases }: { phases: CorePhase[] }) {
  const [ouverte, setOuverte] = useState(0);
  const boutons = useRef<(HTMLButtonElement | null)[]>([]);

  // La colonne ouverte occupe cinq parts, chaque tranche repliée en occupe une.
  const colonnes = phases.map((_, i) => (i === ouverte ? "5fr" : "1fr")).join(" ");

  function surTouche(e: React.KeyboardEvent) {
    const suivant = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
    if (!suivant) return;
    e.preventDefault();
    const cible = (ouverte + suivant + phases.length) % phases.length;
    setOuverte(cible);
    boutons.current[cible]?.focus();
  }

  return (
    <Reveal as="div">
      <ol
        className="mc-phases grid gap-px border border-line bg-line md:min-h-[19rem] md:transition-[grid-template-columns] md:duration-[520ms] md:ease-[cubic-bezier(0.22,0.61,0.36,1)] motion-reduce:md:transition-none"
        style={{ gridTemplateColumns: colonnes }}
        onKeyDown={surTouche}
      >
        {phases.map((phase, i) => {
          const tone = phaseTone[i % phaseTone.length];
          const estOuverte = i === ouverte;
          return (
            <li key={phase.code} className="flex min-w-0 flex-col bg-paper">
              <span
                aria-hidden="true"
                className={`block h-[3px] shrink-0 ${tone.bar} ${estOuverte ? "" : "opacity-35"}`}
              />

              <button
                type="button"
                ref={(el) => {
                  boutons.current[i] = el;
                }}
                aria-expanded={estOuverte}
                aria-controls={`phase-${phase.code}`}
                onClick={() => setOuverte(i)}
                className={`group flex cursor-pointer flex-col items-start px-5 pt-5 text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ink md:px-4 ${
                  estOuverte ? "" : "flex-1 hover:bg-paper-deep"
                }`}
              >
                {/* En-tête horizontal : sur mobile toujours, sur desktop quand la phase est ouverte. */}
                <span
                  className={`mc-phase-entete w-full items-start justify-between gap-4 ${
                    estOuverte ? "flex" : "flex md:hidden"
                  }`}
                >
                  <span className="block">
                    <span className={`font-mono text-xs font-bold uppercase tracking-[0.16em] ${tone.text}`}>
                      {phase.code} · {phase.window}
                    </span>
                    <span className="mt-2 block text-xl font-bold text-ink md:text-2xl">{phase.name}</span>
                  </span>
                  {/* Sur mobile, la tranche repliée n'a pas de rail vertical : le
                      signe d'ouverture doit vivre dans l'en-tête. */}
                  {!estOuverte && (
                    <span
                      aria-hidden="true"
                      className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full border border-ink/25 text-sm leading-none text-ink-soft md:hidden"
                    >
                      +
                    </span>
                  )}
                </span>

                {/* Tranche repliée : code posé à plat, nom à la verticale. */}
                {!estOuverte && (
                  <span className="mc-phase-rail hidden flex-1 flex-col items-center gap-4 self-center pb-5 md:flex">
                    <span className={`font-mono text-xs font-bold tracking-[0.16em] ${tone.text}`}>{phase.code}</span>
                    <span
                      className="text-lg font-bold whitespace-nowrap text-ink-soft transition-colors group-hover:text-ink"
                      style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                    >
                      {phase.name}
                    </span>
                    {/* Signe d'ouverture : sans lui, rien ne dit que la tranche se déplie. */}
                    <span
                      aria-hidden="true"
                      className="mt-auto grid h-6 w-6 shrink-0 place-items-center rounded-full border border-ink/25 text-sm leading-none text-ink-soft transition-colors group-hover:border-ink/60 group-hover:text-ink"
                    >
                      +
                    </span>
                  </span>
                )}
              </button>

              {/* Le panneau se replie en hauteur nulle : le texte reste dans le HTML. */}
              <div
                id={`phase-${phase.code}`}
                className={`mc-phase-panneau grid px-5 transition-[grid-template-rows] duration-[520ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] motion-reduce:transition-none md:px-4 ${
                  estOuverte ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="pt-4 text-sm leading-relaxed text-ink-soft">{phase.objective}</p>
                  <ul className="mt-4 flex flex-col gap-2 border-t border-line pt-3 pb-5">
                    {phase.focus.map((f) => (
                      <li key={f} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
                        <span aria-hidden="true" className={`mt-2 block h-1 w-2.5 shrink-0 ${tone.bar}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </Reveal>
  );
}
