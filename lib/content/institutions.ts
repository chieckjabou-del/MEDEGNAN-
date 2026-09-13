export type InstitutionSegment = {
  slug: string;
  name: string;
  summary: string;
  capabilities: string[];
  entryPoint: string;
};

export const institutionSegments: InstitutionSegment[] = [
  {
    slug: "etats",
    name: "États & collectivités",
    summary:
      "Diagnostic de filières, structuration de programmes de développement économique, et digitalisation de l'administration au service d'objectifs mesurables.",
    capabilities: [
      "Diagnostic de filière ou de secteur",
      "Structuration organisationnelle d'agences et de programmes",
      "Digitalisation et systèmes de pilotage de la performance publique",
    ],
    entryPoint: "Soumettre une mission institutionnelle",
  },
  {
    slug: "ministeres",
    name: "Ministères",
    summary:
      "Appui méthodologique aux directions techniques pour structurer une réforme, un programme sectoriel ou une transformation organisationnelle.",
    capabilities: [
      "Notes stratégiques et études de cadrage",
      "Structuration de programmes et de dispositifs de coordination",
      "Accompagnement de la transformation digitale des services",
    ],
    entryPoint: "Soumettre une mission institutionnelle",
  },
  {
    slug: "fonds-investisseurs",
    name: "Fonds & investisseurs",
    summary:
      "Diagnostic indépendant d'entreprises en portefeuille ou en cours d'instruction, et structuration pré-investissement pour sécuriser une décision de financement.",
    capabilities: [
      "Diagnostic financier et organisationnel indépendant d'une cible",
      "Structuration d'entreprises en vue d'une levée de fonds",
      "Suivi de la performance post-investissement",
    ],
    entryPoint: "Parler de votre organisation",
  },
  {
    slug: "banques",
    name: "Banques & institutions financières",
    summary:
      "Diagnostic de dossiers d'entreprises clientes, structuration de PME à accompagner, et outils de pilotage partagés avec les équipes de crédit.",
    capabilities: [
      "Diagnostic indépendant d'entreprises clientes",
      "Structuration de PME en vue d'un financement",
      "Outils de suivi partagés entre la banque et l'entreprise accompagnée",
    ],
    entryPoint: "Parler de votre organisation",
  },
];

export const institutionalNote =
  "MEDEGNAN CONSULTING présente ici une capacité d'intervention construite à partir de sa méthodologie appliquée aux entreprises. Toute collaboration avec une institution démarre par un diagnostic de cadrage, comme pour une entreprise.";
