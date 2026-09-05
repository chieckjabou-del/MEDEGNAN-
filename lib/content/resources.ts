export type ResourceCategory = {
  slug: string;
  name: string;
  description: string;
};

export const resourceCategories: ResourceCategory[] = [
  {
    slug: "analyses",
    name: "Analyses",
    description: "Lectures courtes de tendances économiques et sectorielles africaines, produites au fil des missions du cabinet.",
  },
  {
    slug: "etudes",
    name: "Études",
    description: "Travaux plus approfondis sur une filière, un marché ou une problématique de transformation d'entreprise.",
  },
  {
    slug: "publications",
    name: "Publications",
    description: "Notes méthodologiques et prises de position du cabinet sur la structuration et la transformation des entreprises africaines.",
  },
];

export const resourcesEmptyState = {
  title: "Les premières publications sont en préparation",
  body: "MEDEGNAN CONSULTING construit sa collection d'analyses et d'études au fil de ses missions. Plutôt que publier du contenu générique, nous préférons attendre d'avoir des travaux réels à partager. Écrivez-nous si vous cherchez une analyse spécifique.",
};
