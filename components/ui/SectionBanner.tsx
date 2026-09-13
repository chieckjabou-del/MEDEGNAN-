export type BannerTone = "navy" | "teal" | "violet" | "rouge" | "vert" | "acier";

const toneClasses: Record<BannerTone, string> = {
  navy: "bg-ink",
  teal: "bg-analyse",
  violet: "bg-offre",
  rouge: "bg-signal",
  vert: "bg-resultat",
  acier: "bg-processus",
};

// L'or du logo n'offre un contraste suffisant (WCAG AA) que sur le navy
// profond. Sur les autres couleurs de bandeau, le label reste blanc.
const labelClasses: Record<BannerTone, string> = {
  navy: "text-accent",
  teal: "text-paper",
  violet: "text-paper",
  rouge: "text-paper",
  vert: "text-paper",
  acier: "text-paper",
};

export default function SectionBanner({
  label,
  title,
  tone = "navy",
  className = "",
  sticky = false,
}: {
  label: string;
  title: string;
  tone?: BannerTone;
  className?: string;
  /**
   * Fixe le bandeau sous l'en-tête pendant la lecture de sa section, puis le
   * laisse partir quand la section se termine. Le bandeau suivant vient alors
   * le pousser vers le haut.
   *
   * L'en-tête mesure 4 rem plus sa bordure d'un pixel : le bandeau se cale donc
   * à 65 px, sans quoi il recouvre cette bordure. Il reste sous l'en-tête en
   * z-index, un bandeau ne doit jamais passer par-dessus.
   *
   * Deux garde-fous. L'effet ne s'active qu'à partir de 768 px : sur un
   * téléphone, en-tête et bandeau mangeraient ensemble près du quart de
   * l'écran. Et il ne s'active que sur une section assez longue pour qu'on ait
   * le temps de lire dessous, sinon le bandeau se fixe et repart aussitôt, ce
   * qui donne une secousse au lieu d'un repère.
   */
  sticky?: boolean;
}) {
  return (
    <div
      className={`${toneClasses[tone]} px-6 py-5 md:px-8 md:py-6 ${
        sticky ? "md:sticky md:top-[65px] md:z-30" : ""
      } ${className}`}
    >
      <p className={`font-mono text-xs font-bold uppercase tracking-[0.14em] ${labelClasses[tone]}`}>{label}</p>
      <h2 className="display-md mt-1 font-bold text-paper text-balance">{title}</h2>
    </div>
  );
}
