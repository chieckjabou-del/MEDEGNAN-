export type BannerTone = "navy" | "teal" | "violet" | "rouge" | "vert" | "acier";

const toneClasses: Record<BannerTone, string> = {
  navy: "bg-ink",
  teal: "bg-analyse",
  violet: "bg-offre",
  rouge: "bg-signal",
  vert: "bg-resultat",
  acier: "bg-processus",
};

export default function SectionBanner({
  label,
  title,
  tone = "navy",
  className = "",
}: {
  label: string;
  title: string;
  tone?: BannerTone;
  className?: string;
}) {
  return (
    <div className={`${toneClasses[tone]} px-6 py-5 md:px-8 md:py-6 ${className}`}>
      <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-accent">{label}</p>
      <h2 className="mt-1 text-2xl font-bold text-paper md:text-3xl text-balance">{title}</h2>
    </div>
  );
}
