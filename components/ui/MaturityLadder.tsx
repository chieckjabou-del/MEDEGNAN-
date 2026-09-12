import Reveal from "@/components/ui/Reveal";

type Level = { level: number; name: string; duration: string };

/**
 * Échelle de maturité : une progression ascendante où le dirigeant peut se
 * situer. La hauteur de chaque marche croît régulièrement ; elle illustre la
 * séquence, elle ne représente aucune grandeur mesurée.
 */
export default function MaturityLadder({ levels }: { levels: Level[] }) {
  const last = levels.length - 1;

  return (
    <div>
      {/* Lecture en marches, à partir de la tablette */}
      <ol className="hidden items-end gap-2 md:flex" aria-hidden="true">
        {levels.map((l, i) => (
          <Reveal
            as="li"
            key={l.level}
            delay={i * 90}
            className="flex flex-1 flex-col justify-end"
          >
            <span className="mb-2 font-mono text-xs font-bold text-ink-soft">N{l.level}</span>
            <span
              className="w-full rounded-t-sm bg-deep"
              style={{ height: `${40 + (i / last) * 110}px`, opacity: 0.45 + (i / last) * 0.55 }}
            />
          </Reveal>
        ))}
      </ol>

      <ol className="mt-0 divide-y divide-line border-t border-line md:mt-6">
        {levels.map((l, i) => (
          <Reveal
            as="li"
            key={l.level}
            delay={i * 70}
            className="flex flex-col gap-1 py-4 md:flex-row md:items-baseline md:gap-6"
          >
            <span className="font-mono text-sm font-bold text-deep md:w-10 md:shrink-0">N{l.level}</span>
            <span className="font-bold md:flex-1">{l.name}</span>
            <span className="font-mono text-xs uppercase tracking-wide text-ink-soft md:text-right">
              {l.duration}
            </span>
          </Reveal>
        ))}
      </ol>

      <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-soft">
        Chaque niveau conditionne l&apos;accès au suivant : on ne digitalise pas une organisation encore en chaos.
        Le diagnostic sert précisément à déterminer le niveau réel de départ, qui n&apos;est presque jamais celui
        que l&apos;on imagine.
      </p>
    </div>
  );
}
