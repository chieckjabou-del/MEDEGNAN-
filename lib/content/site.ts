export const site = {
  name: "MEDEGNAN CONSULTING",
  baseline: "Cabinet de Structuration · Transformation · Développement des Entreprises Africaines",
  shortBaseline: "Structuration · Transformation · Croissance",
  founded: "Cotonou, Bénin",
  description:
    "MEDEGNAN CONSULTING diagnostique la situation réelle d'une organisation, identifie les goulots qui bloquent sa performance, construit une trajectoire de transformation et accompagne son exécution jusqu'au résultat mesuré.",
  contact: {
    email: "contactmedegnan@gmail.com",
    phoneBenin: "+229 01 64 28 08 65",
    phoneFrance: "+33 7 66 58 29 22",
    city: "Cotonou, Bénin",
  },
  whatsapp: {
    // Numéro Bénin confirmé actif sur WhatsApp Business par le cabinet.
    digits: "2290164280865",
    display: "+229 01 64 28 08 65",
  },
  legal: {
    entityNote:
      "Informations d'immatriculation en cours de consolidation — mentions légales complètes à publier après validation par la direction du cabinet.",
  },
} as const;

export type NavItem = {
  label: string;
  href: string;
  description?: string;
  children?: NavItem[];
};

export const primaryNav: NavItem[] = [
  { label: "Cabinet", href: "/cabinet" },
  {
    label: "Solutions",
    href: "/solutions",
    children: [
      { label: "Pour les entreprises", href: "/solutions/entreprises", description: "PME, groupes, entrepreneurs" },
      { label: "Pour les institutions", href: "/solutions/institutions", description: "États, ministères, fonds, banques" },
      { label: "Diagnostic stratégique", href: "/solutions/diagnostic-strategique" },
      { label: "Structuration", href: "/solutions/structuration" },
      { label: "Croissance", href: "/solutions/croissance" },
      { label: "Transformation", href: "/solutions/transformation" },
      { label: "Pilotage & accompagnement", href: "/solutions/pilotage" },
    ],
  },
  {
    label: "Institutions",
    href: "/institutions",
    children: [
      { label: "États", href: "/institutions/etats" },
      { label: "Ministères", href: "/institutions/ministeres" },
      { label: "Fonds & investisseurs", href: "/institutions/fonds-investisseurs" },
      { label: "Banques", href: "/institutions/banques" },
    ],
  },
  { label: "Méthodologie", href: "/methodologie" },
  { label: "Résultats", href: "/resultats" },
  { label: "Études de cas", href: "/etudes-de-cas" },
  {
    label: "Ressources",
    href: "/ressources",
    children: [
      { label: "Analyses", href: "/ressources/analyses" },
      { label: "Études", href: "/ressources/etudes" },
      { label: "Publications", href: "/ressources/publications" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export const footerLinks = {
  cabinet: [
    { label: "Le cabinet", href: "/cabinet" },
    { label: "Méthodologie", href: "/methodologie" },
    { label: "Résultats", href: "/resultats" },
    { label: "Études de cas", href: "/etudes-de-cas" },
  ],
  solutions: [
    { label: "Entreprises", href: "/solutions/entreprises" },
    { label: "Institutions", href: "/solutions/institutions" },
    { label: "Diagnostic stratégique", href: "/solutions/diagnostic-strategique" },
    { label: "Pilotage & accompagnement", href: "/solutions/pilotage" },
  ],
  ressources: [
    { label: "Analyses", href: "/ressources/analyses" },
    { label: "Études", href: "/ressources/etudes" },
    { label: "Publications", href: "/ressources/publications" },
  ],
  legal: [
    { label: "Mentions légales", href: "/mentions-legales" },
    { label: "Confidentialité", href: "/confidentialite" },
    { label: "Conditions d'utilisation", href: "/conditions-utilisation" },
  ],
};
