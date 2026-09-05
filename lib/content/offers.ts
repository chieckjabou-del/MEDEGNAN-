export type Offer = {
  slug: string;
  category: "Diagnostiquer" | "Structurer" | "Transformer" | "Accélérer" | "Piloter" | "Accompagner";
  name: string;
  summary: string;
  forWhom: string;
  includes: string[];
  priceRange?: string;
  priceNote?: string;
  cta: { label: string; href: string };
};

export const offers: Offer[] = [
  {
    // Prix et positionnement "porte d'entrée obligatoire" confirmés par la
    // direction du cabinet (politique tarifaire interne, référence Audit Flash).
    slug: "audit-flash",
    category: "Diagnostiquer",
    name: "Audit Flash",
    summary:
      "Le point d'entrée de toute relation avec MEDEGNAN : une lecture rapide et ciblée de votre situation, pour objectiver ce qui mérite une attention immédiate avant d'aller plus loin.",
    forWhom: "Tout dirigeant ou organisation qui souhaite une première lecture fiable, rapide et peu engageante.",
    includes: [
      "Entretien de cadrage avec un consultant MEDEGNAN",
      "Lecture ciblée des points de vigilance immédiats",
      "Recommandation sur la suite à donner (ou non)",
    ],
    priceRange: "250 000 FCFA",
    cta: { label: "Réserver mon Audit Flash", href: "/demander-un-diagnostic" },
  },
  {
    slug: "diagnostic-strategique",
    category: "Diagnostiquer",
    name: "Diagnostic Stratégique",
    summary:
      "Une lecture complète de la situation réelle de l'entreprise — financière, organisationnelle et concurrentielle — pour faire apparaître ce que les tableaux de bord habituels ne montrent pas.",
    forWhom: "PME et entreprises en croissance qui veulent une base de décision fiable avant d'agir.",
    includes: [
      "Reconstruction financière indépendante (marge réelle, trésorerie, dépendances)",
      "Cartographie organisationnelle et des risques",
      "Positionnement concurrentiel",
      "Rapport de diagnostic et recommandations priorisées",
    ],
    priceRange: "250 000 – 450 000 FCFA",
    priceNote: "Mission de fond, généralement engagée après un Audit Flash. Le périmètre peut évoluer si le diagnostic révèle une réalité plus complexe.",
    cta: { label: "Demander un diagnostic", href: "/demander-un-diagnostic" },
  },
  {
    slug: "audit-documentaire",
    category: "Diagnostiquer",
    name: "Audit Documentaire Approfondi",
    summary:
      "Une revue rigoureuse de la gouvernance, des contrats, de la fiscalité et des process — pour sécuriser une entreprise avant une décision majeure.",
    forWhom: "Dirigeants confrontés à un doute sur la gouvernance, une exposition fiscale ou juridique, ou une opération à venir (cession, levée, partenariat).",
    includes: [
      "Cartographie des risques juridiques et fiscaux",
      "Score de maturité documentaire",
      "Plan de mise en conformité",
    ],
    priceRange: "250 000 – 600 000 FCFA",
    cta: { label: "Parler à un consultant", href: "/contact" },
  },
  {
    slug: "structuration-optimisation",
    category: "Structurer",
    name: "Structuration & Optimisation PME",
    summary:
      "La mise en place des systèmes permanents — organisation, delegation, tableaux de bord — qui transforment une entreprise dépendante de son dirigeant en entreprise pilotable.",
    forWhom: "Entreprises stabilisées qui veulent sortir du pilotage au ressenti.",
    includes: [
      "Organigramme fonctionnel et fiches de poste",
      "Procédures et standards par fonction",
      "Tableau de bord opérationnel",
      "Plan de délégation",
    ],
    priceRange: "800 000 – 1 200 000 FCFA",
    cta: { label: "Demander une proposition", href: "/demander-un-diagnostic" },
  },
  {
    slug: "restructuration-complexe",
    category: "Transformer",
    name: "Restructuration Complexe",
    summary:
      "Pour les situations de gouvernance en tension, de conflit entre associés ou de redressement — une intervention qui clarifie, arbitre et reconstruit.",
    forWhom: "Entreprises en difficulté structurelle ou en conflit de gouvernance.",
    includes: [
      "Clarification juridique et actionnariale",
      "Plan de redressement opérationnel et financier",
      "Accompagnement de la mise en œuvre",
    ],
    priceRange: "1 500 000 – 3 000 000 FCFA",
    cta: { label: "Parler à un consultant", href: "/contact" },
  },
  {
    slug: "strategie-commerciale",
    category: "Accélérer",
    name: "Stratégie Commerciale & Go-To-Market",
    summary:
      "Repositionnement commercial et reconstruction du cycle de vente B2B pour une entreprise dont l'offre est bonne mais dont la croissance commerciale plafonne.",
    forWhom: "Entreprises avec un produit ou service solide mais un moteur commercial sous-performant.",
    includes: [
      "Repositionnement de l'offre et du go-to-market",
      "Reconstruction du cycle de vente et des outils commerciaux",
      "Plan d'accélération à 90 jours",
    ],
    priceRange: "4 000 000 – 5 500 000 FCFA",
    cta: { label: "Demander une proposition", href: "/demander-un-diagnostic" },
  },
  {
    slug: "structuration-venture",
    category: "Accélérer",
    name: "Structuration Venture & Préparation Investisseurs",
    summary:
      "Une mission premium en plusieurs phases pour structurer une entreprise en vue d'une levée de fonds ou d'un partenariat capitalistique.",
    forWhom: "Entreprises à fort potentiel préparant une levée de fonds ou une entrée d'investisseur.",
    includes: [
      "Structuration juridique et financière",
      "Business plan et modèle financier à 3 ans",
      "Dossier et positionnement investisseurs",
    ],
    priceRange: "4 000 000 – 6 000 000 FCFA",
    priceNote: "Mission structurée en plusieurs phases, adaptée à la maturité du dossier.",
    cta: { label: "Parler à un consultant", href: "/contact" },
  },
  {
    slug: "systeme-pilotage",
    category: "Piloter",
    name: "Système de Pilotage Stratégique",
    summary:
      "L'installation d'un système de gouvernance et de tableaux de bord qui permet à la direction de suivre, décider et ajuster la trajectoire en continu.",
    forWhom: "Directions qui veulent un pilotage par les chiffres plutôt que par l'intuition.",
    includes: [
      "Tableaux de bord et indicateurs clés",
      "Rythme de gouvernance (comités, revues, alertes)",
      "Formation de l'équipe de direction au pilotage",
    ],
    priceRange: "1 000 000 – 1 500 000 FCFA",
    cta: { label: "Demander une proposition", href: "/demander-un-diagnostic" },
  },
  {
    slug: "accompagnement-continu",
    category: "Accompagner",
    name: "Operating Partner",
    summary:
      "Un suivi régulier aux côtés de la direction — animation des revues, aide à la décision, ajustement de trajectoire — au-delà de la mission ponctuelle.",
    forWhom: "Dirigeants qui veulent un partenaire de pilotage dans la durée, pas seulement un rapport.",
    includes: [
      "Revues de direction périodiques",
      "Suivi des indicateurs et des chantiers en cours",
      "Aide à la décision sur les arbitrages stratégiques",
    ],
    priceRange: "600 000 – 1 200 000 FCFA / trimestre",
    priceNote: "Formule évolutive selon l'intensité d'accompagnement souhaitée.",
    cta: { label: "Parler à un consultant", href: "/contact" },
  },
];

export const offerCategories: { name: Offer["category"]; description: string }[] = [
  { name: "Diagnostiquer", description: "Comprendre la situation réelle avant toute décision." },
  { name: "Structurer", description: "Construire les systèmes qui rendent l'entreprise pilotable." },
  { name: "Transformer", description: "Reconstruire une organisation en difficulté ou en tension." },
  { name: "Accélérer", description: "Débloquer la croissance commerciale ou préparer un financement." },
  { name: "Piloter", description: "Installer la gouvernance et les tableaux de bord de direction." },
  { name: "Accompagner", description: "Rester aux côtés du dirigeant dans la durée." },
];
