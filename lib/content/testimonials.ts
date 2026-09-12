export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  organization: string;
  sector: string;
  location: string;
};

// Source : attestations de collaboration professionnelle signées, transmises par la
// direction du cabinet. Citations reprises telles quelles depuis les documents
// originaux (paragraphe "Appréciation" / "Recommandation"), sans reformulation.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Nous avons particulièrement apprécié la capacité d'analyse du cabinet, la pertinence des recommandations et une approche adaptée aux réalités du terrain.",
    name: "Diaby Assita",
    role: "Gérante",
    organization: "RAF Immobilier",
    sector: "Immobilier · gestion locative",
    location: "Paris, France",
  },
  {
    quote:
      "Nous avons particulièrement apprécié la rigueur méthodologique, la pertinence des analyses et la capacité d'adaptation du cabinet MEDEGNAN CONSULTING.",
    name: "Edaye Beaudouin Jean-de-Dieu",
    role: "Directeur",
    organization: "CaRESaP — Cabinet de Recherche en Épidémiologie et en Santé des Populations",
    sector: "Recherche en santé publique",
    location: "Parakou, Bénin",
  },
  {
    quote:
      "Je recommande le cabinet MEDEGNAN CONSULTING pour son approche structurée, sa capacité d'analyse et son accompagnement adapté aux réalités du terrain.",
    name: "Sy Ndella",
    role: "Gérante",
    organization: "Semsy Services",
    sector: "Restauration",
    location: "Sénégal",
  },
];
