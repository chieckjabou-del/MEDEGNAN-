export const methodologyIntro = {
  title: "MEDEGNAN CORE",
  kicker: "Méthodologie",
  lead:
    "Un système, pas une opinion. Chaque mission suit une séquence de diagnostic, décision, intervention et pilotage — construite pour que la transformation ne dépende ni de l'humeur du moment, ni de la mémoire d'un seul consultant.",
  principle:
    "On ne peut pas accélérer ce qui n'est pas stable. On ne peut pas scaler ce qui n'est pas structuré.",
};

export const diagnosticTools = [
  {
    name: "Diagnostic 360°",
    description:
      "Une lecture croisée de l'attractivité du marché, de la puissance concurrentielle, de la solidité interne et de la capacité d'évolution de l'entreprise — pour situer objectivement où elle se trouve avant de décider où l'emmener.",
  },
  {
    name: "Indice de risque",
    description:
      "Un indicateur de vulnérabilité qui croise la dépendance client, la fragilité organisationnelle, la pression concurrentielle et l'obsolescence stratégique, pour hiérarchiser l'urgence des chantiers.",
  },
  {
    name: "Score de solidité organisationnelle",
    description:
      "Une évaluation de la structure, du système d'information de gestion, des contraintes dominantes, de la résilience et de la gouvernance — pour objectiver la maturité réelle de l'organisation, au-delà des impressions.",
  },
  {
    name: "Lecture du modèle économique",
    description:
      "Avant tout diagnostic, MEDEGNAN qualifie la nature réelle du modèle économique de l'entreprise (transformation, négoce, service, actif, plateforme, mission) et son contexte d'exercice (géographie, taille, formalité, dépendances). Une mine ne se diagnostique pas comme une boulangerie, une ONG comme un grossiste, une filiale de Ouagadougou comme une filiale de Kinshasa.",
  },
];

export type CorePhase = {
  code: string;
  name: string;
  window: string;
  objective: string;
  focus: string[];
};

export const corePhases: CorePhase[] = [
  {
    code: "P1",
    name: "Stabilisation",
    window: "Jours 1–30",
    objective: "Stopper les fuites de valeur et établir la vérité financière et opérationnelle.",
    focus: [
      "Vérité des chiffres (comptabilité, trésorerie, dettes réelles)",
      "Contrôle immédiat des fuites de cash identifiées",
      "Reprise du contrôle opérationnel de base",
    ],
  },
  {
    code: "P2",
    name: "Structuration",
    window: "Jours 31–60",
    objective: "Construire les systèmes permanents qui rendent l'entreprise pilotable sans dépendre d'une seule personne.",
    focus: [
      "Tableau de bord et rythme de gouvernance",
      "Organisation, délégation et clarté des rôles",
      "Séparation et fiabilisation des comptes",
    ],
  },
  {
    code: "P3",
    name: "Accélération",
    window: "Jours 61–90",
    objective: "Activer les leviers de croissance identifiés pendant le diagnostic et multiplier les gains stabilisés.",
    focus: [
      "Renégociation des conditions commerciales et fournisseurs",
      "Monétisation des actifs sous-exploités",
      "Activation des leviers de marge et de volume",
    ],
  },
  {
    code: "P4",
    name: "Domination",
    window: "Mois 4–18",
    objective: "Consolider la position, diversifier et transférer le pilotage à l'équipe de direction.",
    focus: [
      "Expansion géographique ou sectorielle maîtrisée",
      "Diversification des dépendances critiques",
      "Autonomisation du pilotage par la direction",
    ],
  },
];

export const executionRhythm = [
  { label: "Diagnostic", detail: "Semaines 1–2" },
  { label: "Conception", detail: "Semaines 3–4" },
  { label: "Implémentation", detail: "Semaines 5–10" },
  { label: "Transfert", detail: "Semaines 11–12" },
];

export const governanceCadence = [
  { label: "Point d'avancement", cadence: "Hebdomadaire" },
  { label: "Revue stratégique", cadence: "Bimensuelle" },
  { label: "Comité de pilotage", cadence: "Mensuel" },
];

export const maturityLevels = [
  { level: 0, name: "Diagnostic initial", duration: "1–2 semaines" },
  { level: 1, name: "Stabilisation", duration: "1–3 mois" },
  { level: 2, name: "Structuration interne", duration: "2–4 mois" },
  { level: 3, name: "Positionnement stratégique", duration: "3–6 mois" },
  { level: 4, name: "Croissance structurée", duration: "4–8 mois" },
  { level: 5, name: "Digitalisation & intelligence augmentée", duration: "6–12 mois" },
  { level: 6, name: "Scalabilité & gouvernance", duration: "9–18 mois" },
];

export const principles = [
  {
    name: "Diagnostic avant prescription",
    description: "Aucune recommandation n'est formulée avant d'avoir établi une lecture vérifiée de la situation réelle.",
  },
  {
    name: "Séquentialité obligatoire",
    description: "On ne digitalise pas une organisation en chaos. Chaque niveau de maturité conditionne l'accès au suivant.",
  },
  {
    name: "Co-construction",
    description: "Le dirigeant et son équipe restent acteurs de la transformation. MEDEGNAN forme, ne se substitue pas.",
  },
  {
    name: "Mesurabilité",
    description: "Chaque décision est reliée à un indicateur suivi ; chaque phase se clôture sur un résultat vérifiable, pas une impression.",
  },
];

export const quotes = [
  {
    text: "Une entreprise ne meurt pas d'un manque de bénéfice. Elle meurt d'un manque de cash un mardi matin. Le pilotage de trésorerie, c'est voir ce mardi arriver douze semaines à l'avance.",
  },
  {
    text: "Le cash sauve le trimestre ; il ne guérit pas l'entreprise.",
  },
];
