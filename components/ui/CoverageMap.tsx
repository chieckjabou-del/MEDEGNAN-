import { mapViewBox, landPaths, coveredCountries } from "@/lib/content/coverage-map";

export default function CoverageMap({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox={mapViewBox}
      className={`h-auto w-full ${className}`}
      role="img"
      aria-label={`Carte des ${coveredCountries.length} pays couverts par le réseau de consultants MEDEGNAN`}
    >
      <g fill="var(--color-paper-deep)">
        {landPaths.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
      <g fill="var(--color-deep)" stroke="var(--color-paper)" strokeWidth="1.5" strokeLinejoin="round">
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
              <circle
                cx={c.marker!.cx}
                cy={c.marker!.cy}
                r="14"
                fill="none"
                stroke="var(--color-deep)"
                strokeWidth="3"
              />
              <circle cx={c.marker!.cx} cy={c.marker!.cy} r="5" fill="var(--color-deep)">
                <title>{c.label}</title>
              </circle>
            </g>
          ))}
      </g>
    </svg>
  );
}
