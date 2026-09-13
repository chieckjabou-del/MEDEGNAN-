/**
 * Le référentiel des fuites de valeur, et le registre des causes d'échec.
 *
 * Source : base du portail consultant, projet `medegnan-portail`, tables
 * `fuite_referentiel`, `pont_fuite_protocole` et `fonction_core`, interrogées
 * le 13 septembre 2026. Les comptes publiés ici sont ceux que la base rend,
 * pas des ordres de grandeur : 94 fuites, 12 fonctions, 15 protocoles,
 * 104 liaisons, aucune fuite orpheline.
 *
 * DEUX RÈGLES D'ÉDITION, ET ELLES SONT DÉLIBÉRÉES.
 *
 * 1. La liste complète des 94 libellés n'est pas publiée. Elle constitue la
 *    grille de lecture du cabinet, c'est-à-dire précisément ce qu'un
 *    concurrent ne peut pas reconstituer. Le site publie la structure, la
 *    volumétrie et sept exemples nommés : de quoi établir la profondeur du
 *    travail sans livrer l'instrument. Ce choix se renverse en ajoutant des
 *    lignes ici, si la direction le décide.
 * 2. Les libellés d'origine portent des tirets cadratins et sont stockés sans
 *    accents. Ils sont repris ici accentués et reponctués, sans que le sens
 *    change d'un mot.
 */

export const chiffresReferentiel = {
  fuites: 94,
  fonctions: 12,
  protocoles: 15,
  liaisons: 104,
  sansProtocole: 0,
};

/** Répartition par fonction CORE. `critiques` est un sous-ensemble de `total`. */
export const fuitesParFonction = [
  { code: "F01", libelle: "Stratégie et gouvernance", total: 8, critiques: 5 },
  { code: "F02", libelle: "Marketing et communication", total: 8, critiques: 3 },
  { code: "F03", libelle: "Commercial et ventes", total: 8, critiques: 4 },
  { code: "F04", libelle: "Approvisionnement et achats", total: 8, critiques: 3 },
  { code: "F05", libelle: "Logistique et stock", total: 8, critiques: 3 },
  { code: "F06", libelle: "Production et services", total: 8, critiques: 2 },
  { code: "F07", libelle: "Ressources humaines et organisation", total: 8, critiques: 4 },
  { code: "F08", libelle: "Administration et finance", total: 8, critiques: 5 },
  { code: "F09", libelle: "Systèmes d'information", total: 8, critiques: 3 },
  { code: "F10", libelle: "Juridique et conformité", total: 8, critiques: 3 },
  { code: "F11", libelle: "RSE et durabilité", total: 6, critiques: 0 },
  { code: "F12", libelle: "Innovation et transformation", total: 8, critiques: 3 },
];

/**
 * Les six natures de fuite. Le mode de traitement ne se choisit pas à la main :
 * il se déduit de la nature, par une règle inscrite dans la base.
 */
export const fuitesParType = [
  { type: "Systémique", n: 22, traitement: "Traitement systémique" },
  { type: "Stratégique", n: 20, traitement: "Traitement stratégique" },
  { type: "Comportementale", n: 19, traitement: "Traitement comportemental" },
  { type: "Visible", n: 15, traitement: "Traitement technique" },
  { type: "Technologique", n: 10, traitement: "Traitement technique" },
  { type: "Invisible", n: 8, traitement: "À qualifier, revue humaine obligatoire" },
];

/** Sept fuites nommées, sur quatre-vingt-quatorze. Toutes de gravité critique. */
export const fuitesExemples = [
  { code: "F01-1", libelle: "Vision non formalisée, stratégies dans la tête du dirigeant", type: "Systémique" },
  { code: "F03-1", libelle: "Politique de crédit client sans critères ni plafonds", type: "Systémique" },
  { code: "F05-1", libelle: "Pertes de produits non chiffrées, réputées inestimables", type: "Invisible" },
  { code: "F07-1", libelle: "Fiches de poste absentes, chacun fait ce qu'il comprend", type: "Systémique" },
  { code: "F08-3", libelle: "Écarts de caisse récurrents non investigués", type: "Visible" },
  { code: "F08-6", libelle: "Dépenses personnelles mélangées aux dépenses professionnelles", type: "Comportementale" },
  { code: "F12-1", libelle: "Modèle commercial non diversifié, source unique de revenus", type: "Stratégique" },
];

/**
 * Les quatre règles de chiffrage. Source : corrections de CORE-DX v2.1 et
 * article 7 du contrat V5, telles qu'inscrites en contraintes de base de
 * données, pas en consignes d'écran.
 */
export const reglesDeChiffrage = [
  {
    titre: "Jamais un pourcentage du chiffre d'affaires",
    corps: "Chaque fuite se chiffre par sa propre formule, appliquée à une donnée lue dans une pièce. Quand aucune formule ne s'applique, la fuite est déclarée non chiffrable, et elle reste au dossier.",
  },
  {
    titre: "Deux fuites de même cause ne s'additionnent pas",
    corps: "Elles se consolident en une seule ligne. Un symptôme rattaché à une cause racine ne porte aucun montant propre, ce qui interdit de gonfler un total en comptant deux fois le même argent.",
  },
  {
    titre: "Perte déjà subie et manque à gagner restent séparés",
    corps: "Deux blocs distincts, jamais additionnés dans un total unique. Confondre les deux est la façon la plus courante d'annoncer un chiffre spectaculaire et indéfendable.",
  },
  {
    titre: "Le classement suit l'urgence de survie, pas le montant",
    corps: "Une menace sur l'existence passe avant une tension de trésorerie, qui passe avant une perte réalisée, qui passe avant un manque à gagner. Le plus gros montant n'est pas le premier chantier.",
  },
];

/**
 * Le registre des causes d'échec.
 * Source : annexe A de MC-FORMULE-FONDAMENTALE-V1, telle que décrite dans le
 * catalogue produit du portail (table `produit`, ligne P10).
 */
export const registreDesCauses = {
  cas: 1548,
  pays: 47,
  vagues: 14,
  regle:
    "Entreprise réelle et nommée, cause établie par une source indépendante, aucune invention. La règle de preuve n'a jamais été assouplie pour gonfler le corpus.",
  portee:
    "Aucun instrument équivalent n'existe pour l'Afrique subsaharienne. C'est le seul actif du cabinet qu'un concurrent ne peut pas reconstituer en moins de plusieurs années.",
};

/** Le canevas de projet, adossé au registre. Source : catalogue produit, ligne P09. */
export const canevasProjet = {
  composants: 7,
  causes: 31,
  corps:
    "Un projet démonté en sept composants, chacun confronté aux trente et une causes connues d'échec, et les conditions à remplir avant d'engager le premier franc.",
  limite:
    "Le canevas ne délivre ni label de viabilité ni probabilité de réussite. Il établit un constat d'exposition et pose des conditions. C'est une limite assumée : personne ne peut promettre qu'un projet réussira.",
};
