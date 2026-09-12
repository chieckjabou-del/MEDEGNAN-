import type { IconName } from "@/components/ui/Icon";

// Correspondances entre les données du site et le jeu d'icônes.
// Centralisé ici pour qu'une icône ne soit jamais choisie au hasard dans une vue.

export const offerCategoryIcons: Record<string, IconName> = {
  Diagnostiquer: "diagnostiquer",
  Structurer: "structurer",
  Transformer: "transformer",
  Accélérer: "accelerer",
  Piloter: "piloter",
  Accompagner: "accompagner",
};

export const institutionIcons: Record<string, IconName> = {
  etats: "etat",
  ministeres: "ministere",
  "fonds-investisseurs": "fonds",
  banques: "banque",
};

export const problemIcons: IconName[] = ["ressenti", "dependance", "plafond", "sansPilotage"];
