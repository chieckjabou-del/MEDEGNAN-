/**
 * Bande défilante continue. Le défilement est purement CSS : aucun JavaScript,
 * aucun saut de mise en page. La liste est dupliquée une fois pour que la
 * boucle soit invisible ; la copie est masquée aux lecteurs d'écran.
 * Le défilement s'arrête au survol et au focus clavier, et l'animation est
 * neutralisée si l'utilisateur a demandé à réduire les animations.
 */
export default function Marquee({
  items,
  className = "",
  durationSeconds = 48,
}: {
  items: string[];
  className?: string;
  durationSeconds?: number;
}) {
  const row = (ariaHidden: boolean) => (
    <ul
      aria-hidden={ariaHidden || undefined}
      className="flex shrink-0 items-center gap-10 pr-10 md:gap-14 md:pr-14"
    >
      {items.map((item) => (
        <li key={item} className="flex shrink-0 items-center gap-10 md:gap-14">
          <span className="font-mono text-sm uppercase tracking-[0.18em] whitespace-nowrap">{item}</span>
          <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-40" />
        </li>
      ))}
    </ul>
  );

  return (
    <div className={`group relative overflow-hidden ${className}`}>
      <div
        className="flex w-max animate-[mc-marquee_var(--mc-marquee-duration)_linear_infinite] group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:flex-wrap"
        style={{ "--mc-marquee-duration": `${durationSeconds}s` } as React.CSSProperties}
      >
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
