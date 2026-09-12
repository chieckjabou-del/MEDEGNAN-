import Reveal from "@/components/ui/Reveal";
import type { CorePhase } from "@/lib/content/methodology";

// Progression sémantique : on part du signal d'alerte pour arriver au résultat.
// Le texte utilise les variantes assombries, lisibles sur fond clair comme sur
// fond bleuté ; les pastilles et filets gardent la couleur de marque.
const phaseTone = [
  { dot: "border-signal", text: "text-signal-text", bar: "bg-signal" },
  { dot: "border-processus", text: "text-processus", bar: "bg-processus" },
  { dot: "border-analyse", text: "text-analyse-text", bar: "bg-analyse" },
  { dot: "border-resultat", text: "text-resultat-text", bar: "bg-resultat" },
];

export default function CoreProcess({ phases }: { phases: CorePhase[] }) {
  return (
    <Reveal as="div" className="relative">
      {/* Rail horizontal, tracé au défilement. Décoratif : la séquence est déjà
          portée par l'ordre de la liste et par les codes P1 à P4. */}
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 top-[0.6rem] hidden h-px bg-line md:block"
      >
        <div data-rail="" className="h-full origin-left bg-ink/30" />
      </div>

      <ol className="relative grid gap-10 md:grid-cols-4 md:gap-8">
        {phases.map((phase, i) => {
          const tone = phaseTone[i % phaseTone.length];
          return (
            <li key={phase.code} className="grid grid-cols-[1.5rem_1fr] gap-x-4 md:block">
              <div className="relative flex justify-center md:block md:justify-start">
                <span
                  className={`mt-1 block h-5 w-5 shrink-0 rounded-full border-[3px] bg-paper ${tone.dot} md:mt-0`}
                  aria-hidden="true"
                />
                {/* Rail vertical sur mobile */}
                <span
                  aria-hidden="true"
                  className="absolute left-1/2 top-7 h-[calc(100%-1rem)] w-px -translate-x-1/2 bg-line md:hidden"
                />
              </div>

              <div className="md:mt-5">
                <p className={`font-mono text-xs font-bold uppercase tracking-[0.16em] ${tone.text}`}>
                  {phase.code} · {phase.window}
                </p>
                <h3 className="mt-2 text-xl font-bold md:text-2xl">{phase.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{phase.objective}</p>
                <ul className="mt-4 flex flex-col gap-2 border-t border-line pt-3">
                  {phase.focus.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
                      <span aria-hidden="true" className={`mt-2 block h-1 w-2.5 shrink-0 ${tone.bar}`} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ol>
    </Reveal>
  );
}
