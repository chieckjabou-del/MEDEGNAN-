import Reveal from "@/components/ui/Reveal";

type Ligne = { code: string; libelle: string; total: number; critiques: number };

/**
 * Répartition des fuites par fonction, en barres horizontales.
 *
 * Barres horizontales et non verticales : les intitulés de fonction font
 * jusqu'à trente-quatre caractères, et sous une barre verticale ils seraient
 * inclinés ou tronqués.
 *
 * Deux séries seulement, dont l'une est un sous-ensemble de l'autre : les
 * fuites critiques et le reste. La couleur ne porte jamais seule
 * l'information, une légende la nomme et chaque barre porte son compte écrit.
 * Un filet de deux pixels sépare les deux segments, sinon la frontière entre
 * le rouge et le gris se lit mal à petite taille.
 */
export default function BarresFonctions({ lignes }: { lignes: Ligne[] }) {
  const max = Math.max(...lignes.map((l) => l.total));

  return (
    <figure className="m-0">
      <figcaption className="sr-only">
        Nombre de fuites répertoriées par fonction, dont les fuites de gravité critique
      </figcaption>

      <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm" aria-hidden="true">
        <li className="flex items-center gap-2">
          <span className="block h-3 w-3 shrink-0 rounded-[2px] bg-signal" />
          Gravité critique
        </li>
        <li className="flex items-center gap-2">
          <span className="block h-3 w-3 shrink-0 rounded-[2px] bg-ink/25" />
          Majeure ou secondaire
        </li>
      </ul>

      <ol className="mt-6 flex flex-col gap-3">
        {lignes.map((l, i) => (
          <Reveal
            as="li"
            key={l.code}
            delay={i * 45}
            className="grid items-center gap-x-4 gap-y-1 sm:grid-cols-[3rem_minmax(0,13rem)_1fr_auto]"
          >
            <span className="font-mono text-xs font-bold text-ink-faint">{l.code}</span>
            <span className="text-sm font-medium text-ink">{l.libelle}</span>

            <span className="flex h-3 w-full items-stretch gap-0.5" aria-hidden="true">
              {l.critiques > 0 && (
                <span
                  className="block rounded-l-[3px] bg-signal"
                  style={{ width: `${(l.critiques / max) * 100}%` }}
                />
              )}
              <span
                className={`block bg-ink/25 ${l.critiques > 0 ? "rounded-r-[3px]" : "rounded-[3px]"}`}
                style={{ width: `${((l.total - l.critiques) / max) * 100}%` }}
              />
            </span>

            <span className="text-sm text-ink-soft">
              <span className="font-mono font-bold text-signal-text">{l.critiques}</span>
              <span className="text-ink-faint"> / </span>
              <span className="font-mono font-bold text-ink">{l.total}</span>
            </span>
          </Reveal>
        ))}
      </ol>
    </figure>
  );
}
