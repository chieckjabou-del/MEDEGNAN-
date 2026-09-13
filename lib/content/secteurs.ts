/**
 * Cartographie sectorielle du cabinet.
 *
 * Source : arbitrage du fondateur, septembre 2026, appuyé sur le périmètre
 * « tous secteurs » du référentiel tarifaire et sur l'architecture du MTOS,
 * qui traite le secteur comme un modulateur combinable et non comme une case
 * d'un catalogue fermé.
 *
 * RÈGLE D'ÉDITION, ET C'EST LE POINT CENTRAL.
 *
 * Cette liste est INDICATIVE, jamais limitative, et le site doit le dire à
 * l'endroit même où il l'affiche. Le site portait auparavant huit secteurs,
 * présentés comme le périmètre du cabinet : un dirigeant dont le métier n'y
 * figurait pas en concluait qu'il n'était pas concerné, alors que la méthode
 * est précisément construite pour décomposer un modèle économique inconnu.
 *
 * Le risque à éviter en modifiant ce fichier est donc de retomber dans une
 * liste fermée. Une famille qui manque ne veut pas dire que le cabinet
 * n'intervient pas : elle veut dire que la cartographie n'a pas encore été
 * mise à jour.
 */

export const positionSectorielle = {
  phrase:
    "MEDEGNAN CONSULTING accompagne les entreprises, les groupes, les institutions, les investisseurs et les porteurs de projets dans tous les secteurs d'activité, avec une lecture adaptée aux règles économiques, réglementaires et opérationnelles propres à chaque métier.",
  pourquoi:
    "Notre catégorie n'est pas un secteur. C'est la transformation, la structuration, le pilotage, le redressement et la croissance des organisations. Le secteur n'est qu'une variable de la méthode, au même titre que la logique économique, le contexte d'exercice et la qualité de l'information disponible.",
  epreuve:
    "Une entreprise qui produirait des bioplastiques à partir d'algues et voudrait exporter dans trois pays n'entre dans aucun catalogue. Elle entre pourtant dans la méthode : on décompose son modèle économique, sa chaîne de valeur, ses flux financiers, ses dépendances et ses contraintes réglementaires, puis on construit la mission.",
};

export type FamilleSectorielle = { nom: string; exemples: string };

/**
 * Trente-cinq familles. La trente-cinquième n'est pas un secteur mais un
 * niveau d'intervention : la filière entière, de la production à l'expansion
 * régionale. Elle est gardée dans la liste parce qu'elle dit ce que les
 * trente-quatre autres ne disent pas.
 */
export const famillesSectorielles: FamilleSectorielle[] = [
  { nom: "Agriculture et agro-industrie", exemples: "Cultures vivrières et industrielles, maraîchage, arboriculture, semences, élevage, aviculture, pisciculture, pêche, transformation agroalimentaire, stockage, coopératives et centrales d'achat" },
  { nom: "Industrie et manufacture", exemples: "Transformation de matières premières, textile, habillement, cuir, savonnerie, cosmétique, chimie, plasturgie, emballage, papier, imprimerie, métallurgie, mécanique, assemblage, boissons" },
  { nom: "Mines, carrières et ressources naturelles", exemples: "Or, minerais, pierres, carrières, sable et gravier, transformation minière, exploitation forestière" },
  { nom: "Pétrole, gaz et industries extractives", exemples: "Exploration, exploitation, distribution, services pétroliers, hydrocarbures, sous-traitance énergétique et industrielle" },
  { nom: "Énergie et services essentiels", exemples: "Électricité, solaire, renouvelables, énergie hors réseau, distribution, eau, assainissement, déchets, recyclage" },
  { nom: "BTP, construction et ingénierie", exemples: "Génie civil, travaux publics, architecture, bureaux d'études, infrastructures, routes et ouvrages, matériaux, préfabrication" },
  { nom: "Immobilier", exemples: "Promotion, gestion locative, agences, gestion d'actifs, immobilier commercial, industriel et logistique" },
  { nom: "Commerce et distribution", exemples: "Détail, gros, import-export, centrales d'achat, supermarchés, franchises, places de marché, réseaux de distributeurs" },
  { nom: "Transport et logistique", exemples: "Routier, maritime, aérien, ferroviaire, messagerie, livraison, entreposage, transit et douane, chaîne d'approvisionnement" },
  { nom: "Automobile et mobilité", exemples: "Concessionnaires, garages, pièces détachées, maintenance, transport urbain, mobilité électrique, location et gestion de flottes" },
  { nom: "Finance et services financiers", exemples: "Banques, microfinance, fintech, paiement, monnaie électronique, crédit, épargne, gestion d'actifs, financement des PME" },
  { nom: "Assurance", exemples: "Vie, santé, automobile, entreprise, courtage, mutuelles, assurtech" },
  { nom: "Santé", exemples: "Cliniques, cabinets, hôpitaux, laboratoires, centres de diagnostic, télémédecine, établissements spécialisés" },
  { nom: "Pharmacie et industrie pharmaceutique", exemples: "Officines, grossistes-répartiteurs, laboratoires, distribution de médicaments, dispositifs médicaux, parapharmacie" },
  { nom: "Technologie et numérique", exemples: "Logiciels et services, applications, intelligence artificielle, cybersécurité, données, commerce en ligne, infonuagique, intégrateurs" },
  { nom: "Télécommunications", exemples: "Téléphonie, accès à Internet, infrastructures, centres de données, réseaux, services numériques" },
  { nom: "Éducation et formation", exemples: "Écoles, universités, instituts, centres de formation, formation professionnelle, organismes de certification" },
  { nom: "Hôtellerie, restauration et tourisme", exemples: "Hôtels, restaurants, traiteurs, chaînes, résidences touristiques, agences de voyage, loisirs, tourisme d'affaires" },
  { nom: "Médias, communication et création", exemples: "Agences de communication, publicité, presse, télévision, radio, production audiovisuelle, événementiel, édition" },
  { nom: "Culture et industries créatives", exemples: "Musique, cinéma, mode, arts, design, photographie, spectacle vivant, artisanat culturel" },
  { nom: "Mode, beauté et bien-être", exemples: "Marques et boutiques, salons de coiffure, instituts, cosmétique, parfumerie, spa, remise en forme" },
  { nom: "Sport", exemples: "Clubs, salles, académies, infrastructures, événements, équipementiers, gestion de carrière" },
  { nom: "Services professionnels", exemples: "Conseil, comptabilité, audit, juridique, ressources humaines, recrutement, ingénierie, bureaux d'études" },
  { nom: "Services aux particuliers", exemples: "Nettoyage, sécurité privée, maintenance, assistance, services à domicile, conciergerie, réparation" },
  { nom: "Sécurité et sûreté", exemples: "Sécurité privée, surveillance, technologies de sécurité, protection des infrastructures critiques" },
  { nom: "Environnement et économie circulaire", exemples: "Gestion des déchets, recyclage, traitement de l'eau, dépollution, valorisation, technologies vertes" },
  { nom: "Maritime, portuaire et naval", exemples: "Ports, manutention, transport maritime, consignation, logistique portuaire, pêche industrielle, réparation navale" },
  { nom: "Aviation et aéronautique", exemples: "Compagnies aériennes, aviation d'affaires, services aéroportuaires, maintenance, fret aérien" },
  { nom: "Institutions publiques et parapubliques", exemples: "Ministères, agences, établissements publics, collectivités, sociétés d'État, programmes publics" },
  { nom: "ONG et organisations de développement", exemples: "Organisations non gouvernementales, associations, fondations, organisations communautaires, programmes humanitaires" },
  { nom: "Coopératives et mutuelles", exemples: "Coopératives agricoles et commerciales, mutuelles, organisations professionnelles, associations économiques" },
  { nom: "Jeunes pousses et entreprises innovantes", exemples: "Innovation technologique ou industrielle, nouveaux modèles économiques, plateformes, entreprises à forte croissance" },
  { nom: "Investissement et capital", exemples: "Fonds, sociétés d'investissement, holdings, bureaux de famille, véhicules d'investissement, projets d'investissement" },
  { nom: "Diaspora et entrepreneuriat transnational", exemples: "Investissement de la diaspora, projets de retour, transfert de capitaux, implantation panafricaine" },
  { nom: "Filières et écosystèmes économiques", exemples: "Chaîne de valeur complète, de la production à la transformation, la distribution, le financement, la certification et l'expansion régionale" },
];
