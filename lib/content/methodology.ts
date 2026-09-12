export const methodologyIntro = {
  title: "MEDEGNAN CORE",
  kicker: "Méthodologie",
  lead:
    "Un système, pas une opinion. Chaque mission suit une séquence de diagnostic, décision, intervention et pilotage, construite pour que la transformation ne dépende ni de l'humeur du moment, ni de la mémoire d'un seul consultant.",
  principle:
    "On ne peut pas accélérer ce qui n'est pas stable. On ne peut pas scaler ce qui n'est pas structuré.",
};

export const diagnosticTools = [
  {
    name: "Diagnostic 360°",
    description:
      "Une lecture croisée de l'attractivité du marché, de la puissance concurrentielle, de la solidité interne et de la capacité d'évolution de l'entreprise, pour situer objectivement où elle se trouve avant de décider où l'emmener.",
  },
  {
    name: "Indice de risque",
    description:
      "Un indicateur de vulnérabilité qui croise la dépendance client, la fragilité organisationnelle, la pression concurrentielle et l'obsolescence stratégique, pour hiérarchiser l'urgence des chantiers.",
  },
  {
    name: "Score de solidité organisationnelle",
    description:
      "Une évaluation de la structure, du système d'information de gestion, des contraintes dominantes, de la résilience et de la gouvernance, pour objectiver la maturité réelle de l'organisation, au-delà des impressions.",
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

/**
 * Les douze fonctions de la méthode CORE : la grille de lecture appliquée à
 * toute organisation diagnostiquée.
 * Source : référentiel interne du cabinet, table `fonction_core` du portail
 * consultant (migration 001_j1_socle). Accents rétablis pour l'affichage.
 */
export const coreFunctions = [
  { code: "F01", label: "Stratégie et gouvernance" },
  { code: "F02", label: "Marketing et communication" },
  { code: "F03", label: "Commercial et ventes" },
  { code: "F04", label: "Approvisionnement et achats" },
  { code: "F05", label: "Logistique et stock" },
  { code: "F06", label: "Production et services" },
  { code: "F07", label: "Ressources humaines et organisation" },
  { code: "F08", label: "Administration et finance" },
  { code: "F09", label: "Systèmes d'information" },
  { code: "F10", label: "Juridique et conformité" },
  { code: "F11", label: "RSE et durabilité" },
  { code: "F12", label: "Innovation et transformation" },
];

/**
 * Échelle de preuve, du plus fort au plus faible. Règle du cabinet : le niveau
 * atteint s'écrit toujours.
 * Source : table `niveau_de_preuve` du portail consultant (migration 46_j6g),
 * échelle issue du référentiel MC-OBJETS.
 */
export const proofLevels = [
  { rank: 1, label: "Source extérieure non contrôlée par le client" },
  { rank: 2, label: "Document interne daté et signé" },
  { rank: 3, label: "Constat physique direct" },
  { rank: 4, label: "Déclarations concordantes de plusieurs personnes" },
  { rank: 5, label: "Déclaration unique" },
];

/**
 * Les huit objets de la première visite, dans un ordre imposé.
 * Source : table `objet_sequence_courte` du portail consultant (migration
 * 46_j6g), issue de MC-OBJETS et du cahier Académie MC-ACAD-M2S2-CAND-V2.
 * `kept` marque les quatre objets tenus même lorsque la visite est écourtée.
 */
export const firstVisitObjects = [
  {
    rank: 1,
    name: "Le produit",
    action: "Vous le regardez avant de parler",
    detects: "Conformité, dangerosité, étiquetage, et souvent la nature réelle de l'activité",
    kept: true,
  },
  {
    rank: 2,
    name: "Le relevé bancaire",
    action: "Vous le demandez dès la première visite",
    detects:
      "La position réelle de trésorerie. La réaction du dirigeant à la demande est elle-même une information",
    kept: true,
  },
  {
    rank: 3,
    name: "Le titre et le registre des parts",
    action: "Vous demandez à les voir",
    detects: "Qui possède quoi, depuis quand, et les évictions informelles",
    kept: true,
  },
  {
    rank: 4,
    name: "La personne indispensable",
    action: "Vous demandez qui, en partant demain, arrêterait l'entreprise",
    detects: "La dépendance à une personne unique",
    kept: false,
  },
  {
    rank: 5,
    name: "Le point de sortie",
    action: "Vous allez voir par où sortent les marchandises",
    detects: "Le contrôle interne se voit en dix minutes à cet endroit",
    kept: false,
  },
  {
    rank: 6,
    name: "La dette",
    action: "Vous rapportez la dette à l'encaissement mensuel",
    detects: "Le rang de gravité, par un rapport et non par un montant",
    kept: false,
  },
  {
    rank: 7,
    name: "Le client qui pèse trop",
    action: "Quelle part du chiffre d'affaires fait votre premier client",
    detects: "La concentration, et l'absence de plan alternatif",
    kept: false,
  },
  {
    rank: 8,
    name: "Le site",
    action: "Vous le constatez en marchant",
    detects: "L'organisation réelle, indépendamment du discours",
    kept: true,
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
