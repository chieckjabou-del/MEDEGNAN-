/**
 * Jeu d'icônes propre au cabinet, dessiné en trait géométrique.
 * Grille 24x24, trait de 1.5, extrémités arrondies, aucune dépendance externe.
 * Les icônes sont décoratives : le sens est toujours porté par le texte voisin.
 */
export type IconName =
  | "diagnostiquer"
  | "structurer"
  | "transformer"
  | "accelerer"
  | "piloter"
  | "accompagner"
  | "ressenti"
  | "dependance"
  | "plafond"
  | "sansPilotage"
  | "etat"
  | "ministere"
  | "fonds"
  | "banque"
  | "mail"
  | "telephone"
  | "lieu"
  | "dirigeante"
  | "dirigeant";

const paths: Record<IconName, React.ReactNode> = {
  // Loupe sur un histogramme : lire la situation réelle
  diagnostiquer: (
    <>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="M15.5 15.5 21 21" />
      <path d="M8 12.5v-2M10.5 12.5v-4M13 12.5v-3" />
    </>
  ),
  // Blocs reliés : donner une ossature
  structurer: (
    <>
      <rect x="9" y="3" width="6" height="5" rx="0.5" />
      <rect x="3" y="16" width="6" height="5" rx="0.5" />
      <rect x="15" y="16" width="6" height="5" rx="0.5" />
      <path d="M12 8v4M6 16v-2h12v2" />
    </>
  ),
  // Deux flèches en cycle : reconstruire
  transformer: (
    <>
      <path d="M4 9a8 8 0 0 1 13.5-4.5L20 7" />
      <path d="M20 15a8 8 0 0 1-13.5 4.5L4 17" />
      <path d="M20 3v4h-4M4 21v-4h4" />
    </>
  ),
  // Courbe ascendante : débloquer la croissance
  accelerer: (
    <>
      <path d="M3 20V4" />
      <path d="M3 20h18" />
      <path d="m6 16 4-4 3 2.5L20 7" />
      <path d="M15.5 7H20v4.5" />
    </>
  ),
  // Cadran : installer le pilotage
  piloter: (
    <>
      <path d="M3.5 17a9 9 0 1 1 17 0" />
      <path d="M12 17l4-5" />
      <circle cx="12" cy="17" r="1.2" />
      <path d="M3.5 17h2M18.5 17h2M12 6v2" />
    </>
  ),
  // Deux jalons reliés dans la durée : rester aux côtés du dirigeant
  accompagner: (
    <>
      <circle cx="7" cy="8" r="3" />
      <circle cx="17" cy="8" r="3" />
      <path d="M2.5 20c0-3 2-5 4.5-5s4.5 2 4.5 5" />
      <path d="M12.5 20c0-3 2-5 4.5-5s4.5 2 4.5 5" />
    </>
  ),
  // Cadran dont l'aiguille est incertaine : piloter au ressenti
  ressenti: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 12 8 7.5" strokeDasharray="2.5 2" />
      <path d="M12 12l5 2.5" strokeDasharray="2.5 2" />
      <circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />
    </>
  ),
  // Une charge portée par une seule colonne, là où il en faudrait plusieurs
  dependance: (
    <>
      <path d="M3 5h18" />
      <path d="M12 5.5v13" />
      <path d="M6 8v10.5M18 8v10.5" strokeDasharray="2.5 2.5" />
      <path d="M3 19h18" />
    </>
  ),
  // Une courbe qui monte puis bute sur un plafond
  plafond: (
    <>
      <path d="M3 20V4" />
      <path d="M3 20h18" />
      <path d="M3 9.5h18" strokeDasharray="3 2.5" />
      <path d="m5 18 4-4.5 3.5-3H21" />
    </>
  ),
  // Tableau de bord vide : aucun système de pilotage
  sansPilotage: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="1" />
      <path d="M3 9h18" />
      <path d="M7 13h4M7 16.5h7" strokeDasharray="2 2" />
    </>
  ),
  // Édifice à colonnes : États et collectivités
  etat: (
    <>
      <path d="M3 9.5 12 4l9 5.5" />
      <path d="M5 9.5V18M9.5 9.5V18M14.5 9.5V18M19 9.5V18" />
      <path d="M3 21h18" />
    </>
  ),
  // Document officiel : ministères
  ministere: (
    <>
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v4h4" />
      <path d="M9 12h6M9 15.5h6" />
    </>
  ),
  // Capital en progression : fonds et investisseurs
  fonds: (
    <>
      <ellipse cx="12" cy="6" rx="7" ry="2.5" />
      <path d="M5 6v5c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6" />
      <path d="M5 11v5c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-5" />
    </>
  ),
  // Coffre : banques et institutions financières
  banque: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 8.5v-1M12 16.5v1M15.5 12h1M7.5 12h-1" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="1" />
      <path d="m3.5 6 8.5 6.5L20.5 6" />
    </>
  ),
  telephone: (
    <>
      <path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 12l5 2v4a2 2 0 0 1-2.2 2A16 16 0 0 1 3 5.2 2 2 0 0 1 5 3z" />
    </>
  ),
  lieu: (
    <>
      <path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  // Bustes sobres, de même poids graphique : ils signalent seulement la
  // fonction telle qu'elle est signée sur l'attestation (gérante / directeur).
  dirigeante: (
    <>
      <circle cx="12" cy="8.4" r="3.4" />
      {/* Chevelure encadrant le visage : c'est elle qui différencie la
          silhouette, y compris à 24 px. */}
      <path d="M7.8 9.6C7.2 4.9 9.3 3.4 12 3.4s4.8 1.5 4.2 6.2" />
      <path d="M7.9 8.6v3.4M16.1 8.6v3.4" />
      <path d="M4.5 20.6c0-3.6 3.4-6 7.5-6s7.5 2.4 7.5 6" />
    </>
  ),
  dirigeant: (
    <>
      <circle cx="12" cy="8" r="3.6" />
      <path d="M4.5 20.5c0-3.6 3.4-6 7.5-6s7.5 2.4 7.5 6" />
    </>
  ),
};

export default function Icon({
  name,
  className = "",
  size = 24,
}: {
  name: IconName;
  className?: string;
  size?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}
