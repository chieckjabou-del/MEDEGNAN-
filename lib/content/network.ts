/**
 * Programme partenaire : devenir consultant sous licence MEDEGNAN.
 *
 * DÉCISION DU FONDATEUR (septembre 2026) : aucun prix n'est affiché sur le
 * site. Les conditions financières se traitent en entretien de qualification,
 * une fois le périmètre de fonctions arrêté avec le candidat. Aucun montant
 * n'est donc stocké dans ce fichier : ni affiché, ni commenté, ni gardé « au
 * cas où ». Le périmètre des formules, lui, est public.
 *
 * Source du périmètre : MC-ANNEXES-CONTRAT-LICENCE-S3-V1, annexe 2.
 */
export const licenceFormulas = [
  {
    name: "Spécialiste",
    scope: "1 fonction",
    detail: "Vous intervenez sur un domaine unique, celui que vous maîtrisez déjà en mission.",
  },
  {
    name: "Spécialiste",
    scope: "2 à 3 fonctions",
    detail: "Vous couvrez un bloc cohérent, par exemple la finance avec les systèmes d'information.",
  },
  {
    name: "Expert Global",
    scope: "Les 12 fonctions",
    detail: "Vous conduisez un diagnostic complet et pilotez une transformation de bout en bout.",
  },
];

/**
 * Les trois axes du réseau, à ne jamais confondre.
 * Source : arbitrage du fondateur du 5 septembre 2026, référentiel du portail.
 */
export const networkAxes = [
  {
    title: "Le statut contractuel",
    body: "S1 intégré, S2 partenaire, S3 licencié, S4 franchisé. Il décrit une progression d'autonomie dans la conduite des missions, et il est réservé aux consultants.",
  },
  {
    title: "Le grade",
    body: "De N0 à N7. Il mesure un niveau d'autorité, et il est indépendant du statut contractuel : on peut être licencié sans être au sommet de l'échelle, et inversement.",
  },
  {
    title: "Le rôle",
    body: "Consultant, candidat, apporteur, formateur. Une même personne peut en porter plusieurs ; chaque rôle est daté et porte son propre périmètre.",
  },
];

/**
 * États d'une licence. Source : type `etat_licence`, migration 24_j3a.
 * L'état dormant est prévu au contrat de licence V5, à redevance réduite.
 */
export const licenceStates = [
  { label: "En formation", detail: "Le parcours de certification est engagé." },
  { label: "Certifiée", detail: "La certification est obtenue, l'activité peut démarrer." },
  { label: "Active", detail: "Le consultant conduit des missions sous licence." },
  { label: "Dormante", detail: "Activité suspendue par le consultant, à redevance réduite." },
  { label: "Suspendue", detail: "Suspension à l'initiative du cabinet." },
  { label: "Résiliée", detail: "Fin de la licence." },
];
