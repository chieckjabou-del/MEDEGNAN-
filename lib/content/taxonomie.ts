/**
 * La taxonomie sectorielle, telle que la base du portail la rend.
 *
 * GÉNÉRÉ DEPUIS LA BASE, PAS ÉCRIT À LA MAIN.
 * Source : projet Supabase `medegnan-portail`, vue `taxonomie_sectorielle`
 * et tables `logique_economique` et `modificateur`, lues le 13 septembre
 * 2026. Le script de régénération est `scripts/generer-taxonomie.mjs`.
 *
 * POURQUOI UN FICHIER GÉNÉRÉ PLUTÔT QU'UNE LECTURE DIRECTE.
 * Le site est entièrement prérendu à la compilation et ne dépend
 * aujourd'hui d'aucun service extérieur. Le faire interroger la base à la
 * compilation lui imposerait deux variables d'environnement sur Vercel :
 * si elles manquent ou expirent, ce n'est pas une section qui tombe,
 * c'est la construction du site entier qui échoue. Le fichier généré
 * garde le site autonome. La contrepartie est assumée : une mise à jour
 * de la base demande de relancer le script et de republier.
 *
 * ACCENTS. La base du portail stocke historiquement du texte sans
 * accents. Le script les rétablit à la génération, par une table de
 * correspondance explicite, pour qu'aucune reprise manuelle ne s'insère
 * entre la base et la page publiée.
 */

export type LogiqueEconomique = { code: string; libelle: string; valeurNaitDe: string };

/** Les six façons dont la valeur naît. Source : table `logique_economique`. */
export const logiquesEconomiques: LogiqueEconomique[] = [
  { code: "L1", libelle: "Transformation", valeurNaitDe: "une matière transformée" },
  { code: "L2", libelle: "Négoce", valeurNaitDe: "un écart de prix à l'achat-revente" },
  { code: "L3", libelle: "Service et temps", valeurNaitDe: "le temps et la compétence" },
  { code: "L4", libelle: "Actif et infrastructure", valeurNaitDe: "un actif exploité" },
  { code: "L5", libelle: "Plateforme et immatériel", valeurNaitDe: "un effet de réseau ou un actif immatériel" },
  { code: "L6", libelle: "Mission et subvention", valeurNaitDe: "elle ne se mesure pas en profit" },
];

/**
 * Les dix contraintes combinables. Source : table `modificateur`.
 * C'est par elles que la méthode absorbe un métier qu'elle n'a jamais vu :
 * on ne cherche pas la case du métier, on compose sa formule.
 */
export const modulateurs = [
  { code: "M1", libelle: "Prix administré" },
  { code: "M2", libelle: "Périssable" },
  { code: "M3", libelle: "Import et douane" },
  { code: "M4", libelle: "Réglementé ou sous licence" },
  { code: "M5", libelle: "Cycle long ou projet" },
  { code: "M6", libelle: "Investissement lourd" },
  { code: "M7", libelle: "Vivant ou biologique" },
  { code: "M8", libelle: "Non lucratif" },
  { code: "M9", libelle: "Saisonnier" },
  { code: "M10", libelle: "Multi-activités" },
];

export type MetierFormule = { metier: string; formule: string; logique: string };

/**
 * Les métiers déjà formulés, rattachés à leur famille.
 * Onze aujourd'hui : ce sont ceux dont la formule a été arrêtée et
 * vérifiée en mission. Les autres familles ne sont pas moins couvertes,
 * leur formule se compose au cas par cas.
 */
export const metiersFormules: Record<string, MetierFormule[]> = {
  S01: [{ metier: "Élevage", formule: "L1 + M7 + M5", logique: "Transformation" }],
  S02: [{ metier: "Savonnerie", formule: "L1", logique: "Transformation" }],
  S06: [{ metier: "BTP", formule: "L1 + M5 + M4", logique: "Transformation" }],
  S08: [{ metier: "Import-export", formule: "L2 + M3", logique: "Négoce" }],
  S09: [{ metier: "Transport et logistique", formule: "L4 + M6", logique: "Actif et infrastructure" }],
  S11: [{ metier: "Fintech", formule: "L5 + M4", logique: "Plateforme et immatériel" }],
  S14: [{ metier: "Officine pharmaceutique", formule: "L2 + M1 + M2 + M4", logique: "Négoce" }],
  S17: [{ metier: "École", formule: "L3 + M4 + M9", logique: "Service et temps" }],
  S18: [{ metier: "Restaurant", formule: "L1 + M2", logique: "Transformation" }],
  S24: [{ metier: "Blanchisserie", formule: "L3", logique: "Service et temps" }],
  S30: [{ metier: "ONG ou projet financé", formule: "L6 + M8 + M5", logique: "Mission et subvention" }],
};

export const chiffresTaxonomie = {
  familles: 35,
  logiques: 6,
  modulateurs: 10,
  metiersFormules: 11,
};
