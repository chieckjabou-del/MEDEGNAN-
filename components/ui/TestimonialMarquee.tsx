import Icon from "@/components/ui/Icon";
import type { Testimonial } from "@/lib/content/testimonials";

function Card({ t }: { t: Testimonial }) {
  return (
    <figure className="flex w-[19rem] shrink-0 flex-col border border-line bg-paper p-6 md:w-[24rem] md:p-7">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-paper-raised text-deep">
          <Icon name={t.civilite === "femme" ? "dirigeante" : "dirigeant"} size={24} />
        </span>
        <div className="min-w-0">
          <p className="truncate font-bold text-ink">{t.name}</p>
          <p className="truncate text-sm text-ink-soft">{t.role}</p>
        </div>
      </div>
      <blockquote className="mt-5 flex-1 leading-relaxed text-ink-soft">
        &laquo;&nbsp;{t.quote}&nbsp;&raquo;
      </blockquote>
      <figcaption className="mt-5 border-t border-line-soft pt-3">
        <p className="text-sm font-medium text-ink">{t.organization}</p>
        <p className="mt-1 font-mono text-xs uppercase tracking-wide text-ink-faint">
          {t.sector} · {t.location}
        </p>
      </figcaption>
    </figure>
  );
}

/**
 * Bande de témoignages qui glisse de la droite vers la gauche, en continu.
 * Animation purement CSS, arrêtée au survol et au focus clavier, neutralisée
 * si l'utilisateur a demandé à réduire les animations.
 *
 * Le jeu est répété pour que la boucle soit sans couture sur les grands
 * écrans ; seules les copies sont masquées aux lecteurs d'écran, qui
 * entendent donc chaque témoignage une seule fois.
 */
export default function TestimonialMarquee({
  items,
  durationSeconds = 60,
}: {
  items: Testimonial[];
  durationSeconds?: number;
}) {
  const repeats = Math.max(2, Math.ceil(9 / Math.max(items.length, 1)));
  const half = Array.from({ length: repeats }, (_, r) =>
    items.map((t) => ({ t, key: `${r}-${t.name}`, silent: r > 0 }))
  ).flat();

  const track = (hidden: boolean) => (
    <div aria-hidden={hidden || undefined} className="flex shrink-0 gap-6 pr-6">
      {half.map(({ t, key, silent }) => (
        <div key={key} aria-hidden={silent || undefined}>
          <Card t={t} />
        </div>
      ))}
    </div>
  );

  return (
    <div className="group relative overflow-hidden">
      <div
        className="flex w-max animate-[mc-marquee_var(--mc-marquee-duration)_linear_infinite] group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:flex-wrap"
        style={{ "--mc-marquee-duration": `${durationSeconds}s` } as React.CSSProperties}
      >
        {track(false)}
        {track(true)}
      </div>
    </div>
  );
}
