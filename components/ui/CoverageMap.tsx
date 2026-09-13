import { mapViewBox, landPaths, coveredCountries } from "@/lib/content/coverage-map";

// Deux jeux de couleurs, selon le fond qui porte la carte. Sur le navy profond
// du bandeau d'accueil, les continents s'effacent en un voile clair et les pays
// couverts prennent l'or du logo, qui est la seule couleur de la charte à
// ressortir franchement sur ce fond.
const palettes = {
  clair: {
    terres: "var(--color-paper-deep)",
    pays: "var(--color-deep)",
    contour: "var(--color-paper)",
    repere: "var(--color-deep)",
  },
  sombre: {
    terres: "rgba(255, 255, 255, 0.09)",
    pays: "var(--color-accent)",
    contour: "var(--color-ink)",
    repere: "var(--color-accent)",
  },
} as const;

export default function CoverageMap({
  className = "",
  variant = "clair",
}: {
  className?: string;
  variant?: keyof typeof palettes;
}) {
  const p = palettes[variant];
  return (
    <svg
      viewBox={mapViewBox}
      className={`h-auto w-full ${className}`}
      role="img"
      aria-label={`Carte des ${coveredCountries.length} pays couverts par le réseau de consultants MEDEGNAN`}
    >
      <g fill={p.terres}>
        {landPaths.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
      <g fill={p.pays} stroke={p.contour} strokeWidth="1.5" strokeLinejoin="round">
        {coveredCountries.map((c) => (
          <path key={c.label} d={c.d}>
            <title>{c.label}</title>
          </path>
        ))}
      </g>
      {/* Les pays trop petits pour être lisibles reçoivent un repère cerclé. */}
      <g>
        {coveredCountries
          .filter((c) => c.marker)
          .map((c) => (
            <g key={`marker-${c.label}`}>
              <circle cx={c.marker!.cx} cy={c.marker!.cy} r="14" fill="none" stroke={p.repere} strokeWidth="3" />
              <circle cx={c.marker!.cx} cy={c.marker!.cy} r="5" fill={p.repere}>
                <title>{c.label}</title>
              </circle>
            </g>
          ))}
      </g>
    </svg>
  );
}
