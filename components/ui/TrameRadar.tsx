/**
 * Trame symbolique : anneaux concentriques, rayons et relevés.
 *
 * Aucune photographie, aucune illustration empruntée. La figure évoque le geste
 * du cabinet, balayer une situation depuis un centre pour en relever les
 * points, sans jamais prétendre représenter des données réelles : elle est
 * décorative et déclarée comme telle.
 *
 * La géométrie est calculée, pas dessinée à la main, mais elle est calculée de
 * façon déterministe. Le générateur pseudo-aléatoire porte une graine fixe :
 * le serveur et le navigateur produisent exactement la même figure, sinon React
 * signalerait une divergence d'hydratation et le rendu sauterait au chargement.
 */

const CENTRE = 500;
const VUE = 1000;

// Générateur congruentiel linéaire, graine fixe. Tient en trois lignes et suffit
// largement à disperser des points sans jamais varier d'un rendu à l'autre.
function suite(graine: number) {
  let etat = graine;
  return () => {
    etat = (etat * 1664525 + 1013904223) % 4294967296;
    return etat / 4294967296;
  };
}

const alea = suite(20260913);

const anneaux = [90, 165, 240, 315, 390, 465];
const rayons = Array.from({ length: 24 }, (_, i) => (i * Math.PI * 2) / 24);

const releves = Array.from({ length: 34 }, () => {
  const angle = alea() * Math.PI * 2;
  // Racine carrée du tirage : sans elle, les points s'agglutinent au centre,
  // parce que la surface d'une couronne croît avec le carré du rayon.
  const rayon = 90 + Math.sqrt(alea()) * 380;
  return {
    x: +(CENTRE + Math.cos(angle) * rayon).toFixed(1),
    y: +(CENTRE + Math.sin(angle) * rayon).toFixed(1),
    r: +(2.5 + alea() * 4).toFixed(1),
  };
});

export default function TrameRadar({ className = "" }: { className?: string }) {
  return (
    <svg viewBox={`0 0 ${VUE} ${VUE}`} className={className} aria-hidden="true" focusable="false">
      <g stroke="currentColor" fill="none" strokeWidth="1">
        {anneaux.map((r) => (
          <circle key={r} cx={CENTRE} cy={CENTRE} r={r} opacity={0.22} />
        ))}
        {rayons.map((a, i) => (
          <line
            key={i}
            x1={CENTRE + Math.cos(a) * 90}
            y1={CENTRE + Math.sin(a) * 90}
            x2={CENTRE + Math.cos(a) * 465}
            y2={CENTRE + Math.sin(a) * 465}
            opacity={i % 3 === 0 ? 0.2 : 0.09}
          />
        ))}
      </g>
      <g fill="currentColor">
        {releves.map((p, i) => (
          <circle key={i} cx={p.x} cy={p.y} r={p.r} opacity={0.3} />
        ))}
      </g>
    </svg>
  );
}
