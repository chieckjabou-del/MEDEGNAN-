/**
 * Programme partenaire : devenir consultant sous licence MEDEGNAN.
 *
 * Source de la grille : MC-ANNEXES-CONTRAT-LICENCE-S3-V1, annexe 2, telle que
 * reprise dans le référentiel du portail consultant (table `licence_grille`,
 * migration 24_j3a). Parité fixe déclarée : 655,957 FCFA pour un euro.
 * Aucun montant n'est extrapolé.
 *
 * GRILLE NON PUBLIÉE POUR L'INSTANT. La note interne du cabinet dit : « la
 * souche tarifaire n'est pas tranchée, ne coder aucune grille avant arbitrage
 * du fondateur ». Les montants sont donc préparés et vérifiés, mais le bloc
 * tarifaire de la page reste masqué tant que ce drapeau vaut `false`.
 * Point en attente d'arbitrage : le droit d'entrée est identique pour une
 * fonction et pour trois, ce qui rend la formule à une fonction sans intérêt
 * pour un candidat.
 */
export const publierLaGrille: boolean = false;

export const licenceFormulas = [
  {
    name: "Spécialiste",
    scope: "1 fonction",
    entryFcfa: "350 000 FCFA",
    entryEur: "550 €",
    feeFcfa: "50 000 FCFA",
    feeEur: "80 €",
  },
  {
    name: "Spécialiste",
    scope: "2 à 3 fonctions",
    entryFcfa: "350 000 FCFA",
    entryEur: "550 €",
    feeFcfa: "90 000 FCFA",
    feeEur: "140 €",
  },
  {
    name: "Expert Global",
    scope: "Les 12 fonctions",
    entryFcfa: "750 000 FCFA",
    entryEur: "1 150 €",
    feeFcfa: "150 000 FCFA",
    feeEur: "230 €",
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
