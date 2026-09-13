import { mapViewBox, landPaths, coveredCountries, networkNodes, networkLinks } from "@/lib/content/coverage-map";

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
    // Sur fond clair, les pays sont en navy : le rouge de la charte y suffit.
    reseau: "var(--color-signal)",
  },
  sombre: {
    terres: "rgba(255, 255, 255, 0.09)",
    pays: "var(--color-accent)",
    contour: "var(--color-ink)",
    repere: "var(--color-accent)",
    // Le rouge brique de la charte, posé sur l'or, vire au brun et les épingles
    // disparaissent. Il est donc monté en vermillon pour cette variante, et
    // seulement pour elle : la charte n'est pas modifiée, c'est une teinte de
    // repère sur un fond particulier.
    reseau: "#e8503a",
  },
} as const;

export default function CoverageMap({
  className = "",
  variant = "clair",
  reseau = false,
}: {
  className?: string;
  variant?: keyof typeof palettes;
  /**
   * Superpose le réseau : une épingle par pays, reliée aux autres par un fil,
   * à la manière d'un tableau d'enquête. Décoratif, et déclaré comme tel :
   * l'information est déjà portée par le remplissage des pays et par la
   * légende. À réserver aux grands formats, les épingles se chevauchent
   * lorsque la carte descend sous 300 px de large.
   */
  reseau?: boolean;
}) {
  const p = palettes[variant];
  const parPays = new Map(networkNodes.map((n) => [n.label, n]));
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

      {reseau && (
        <g className="mc-reseau" aria-hidden="true">
          <g fill="none" stroke={p.reseau} strokeLinecap="round">
            {networkLinks.map((l, i) => {
              const a = parPays.get(l.de);
              const b = parPays.get(l.vers);
              if (!a || !b) return null;
              return (
                <line
                  key={`${l.de}-${l.vers}`}
                  className="mc-fil"
                  // `pathLength` normalise la longueur de chaque fil à 1 : sans
                  // cela, un fil court et un fil long partageant le même
                  // pointillé ne se tracent pas à la même vitesse, et les
                  // courts restent invisibles presque jusqu'à la fin.
                  pathLength="1"
                  x1={a.x}
                  y1={a.y}
                  x2={b.x}
                  y2={b.y}
                  strokeWidth={l.lateral ? 1.6 : 2.4}
                  style={{ animationDelay: `${900 + i * 70}ms`, ["--mc-fil-opacite" as string]: l.lateral ? 0.5 : 0.8 }}
                />
              );
            })}
          </g>
          <g>
            {networkNodes.map((n, i) => (
              <g key={n.label} className="mc-epingle" style={{ animationDelay: `${120 + i * 70}ms` }}>
                {/* Le siège porte un halo, pour qu'on voie d'où partent les fils. */}
                {n.siege && <circle cx={n.x} cy={n.y} r="14" fill="none" stroke={p.reseau} strokeWidth="2" opacity="0.65" />}
                <circle cx={n.x} cy={n.y} r={n.siege ? 7.5 : 6} fill={p.reseau} stroke={p.contour} strokeWidth="2" />
              </g>
            ))}
          </g>
        </g>
      )}
    </svg>
  );
}
