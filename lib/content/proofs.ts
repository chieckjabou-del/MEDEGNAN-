/**
 * Chiffres affichés en preuve.
 *
 * Règle : chaque valeur est formulée exactement au périmètre qu'elle couvre.
 * Le compte des missions est un CUMUL DU RÉSEAU, pas le compte des missions
 * conduites par le seul cabinet : c'est écrit comme tel, parce qu'un chiffre
 * de réseau présenté comme un chiffre de cabinet ne résiste pas à une
 * vérification en diligence.
 *
 * Périmètres confirmés par la direction du cabinet (septembre 2026).
 */
export const proofStats = [
  { value: "11", label: "pays couverts par le réseau", detail: "Afrique de l'Ouest, Centrale, océan Indien et diaspora" },
  { value: "600+", label: "missions accompagnées par le réseau", detail: "Cumul des missions conduites par les consultants du réseau" },
  { value: "50+", label: "consultants dans le réseau", detail: "Répartis sur les onze pays couverts" },
  {
    value: "40 M",
    label: "vues sur une seule page, en 28 jours",
    detail: "9,2 millions de spectateurs distincts, du 15 août au 11 septembre 2026",
  },
];

export const sectorsServed = [
  "Distribution et agroalimentaire",
  "Industrie et production",
  "Cosmétique et transformation",
  "BTP et marchés publics",
  "Énergie et forage",
  "Santé et pharmacie",
  "Technologie et sûreté",
  "Commerce",
];

export const countriesServed = [
  "Bénin",
  "Burkina Faso",
  "Mali",
  "Côte d'Ivoire",
  "France",
  "République démocratique du Congo",
  "Guinée",
  "Tchad",
  "Sénégal",
  "Cameroun",
  "Comores",
];
