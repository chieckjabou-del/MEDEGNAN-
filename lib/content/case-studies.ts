export type CaseStudyRecord = {
  slug: string;
  sector: string;
  region: string;
  scale: string;
  status: "Mission conclue" | "Mission en cours";
  headline: string;
  metric?: { label: string; value: string };
  metricRange?: {
    axisMax: number;
    axisUnit: string;
    before: number;
    beforeLabel: string;
    targetMin: number;
    targetMax: number;
    targetLabel: string;
  };
  problem: string;
  diagnostic: string;
  decision: string;
  intervention: string;
  result: string;
};

export const caseStudies: CaseStudyRecord[] = [
  {
    slug: "distribution-alimentaire-afrique-ouest",
    sector: "Distribution alimentaire (import-export)",
    region: "Afrique de l'Ouest",
    scale: "CA de l'ordre de 350 à 400 M FCFA",
    status: "Mission en cours",
    headline: "Une entreprise convaincue d'être rentable, jusqu'à ce que le diagnostic parle",
    metric: { label: "Marge nette visée", value: "1,8 % devient 5–7 %" },
    metricRange: {
      axisMax: 10,
      axisUnit: "%",
      before: 1.8,
      beforeLabel: "1,8 %",
      targetMin: 5,
      targetMax: 7,
      targetLabel: "5–7 %",
    },
    problem:
      "Le dirigeant pilotait son entreprise à l'instinct depuis huit ans, convaincu d'opérer à marge confortable. Aucune comptabilité certifiée, aucune vision consolidée de la trésorerie.",
    diagnostic:
      "La reconstruction financière indépendante a fait apparaître une marge nette réelle de 1,8 %, une part très majoritaire du chiffre d'affaires vendue à crédit, une politique de livraison gratuite absorbant à elle seule plus d'un quart de la marge brute, et une dépendance critique à un client représentant près de la moitié du volume.",
    decision:
      "Un plan opérationnel en quatre phases a été arrêté avec la direction : stabiliser la trésorerie et la vérité financière, structurer le pilotage, accélérer par la renégociation commerciale, puis consolider la position.",
    intervention:
      "Recertification comptable, plafonnement des avances internes, inventaires physiques, discipline de recouvrement, monétisation de la politique de livraison, renégociation fournisseurs.",
    result:
      "Objectif de marge nette porté à 5–7 % (contre 1,8 % au diagnostic), pour un gain estimé de 13 à 21 M FCFA par an une fois le plan pleinement exécuté.",
  },
  {
    slug: "cosmetique-benin",
    sector: "Cosmétique / savonnerie artisanale",
    region: "Bénin",
    scale: "PME familiale, plusieurs associés statutaires",
    status: "Mission conclue",
    headline: "Un audit documentaire qui met au jour un risque fiscal dormant",
    metric: { label: "Redressement fiscal détecté", value: "> 3,4 M FCFA" },
    problem:
      "La gouvernance actionnariale de l'entreprise n'était pas clarifiée sur le terrain, et sa situation fiscale n'avait jamais fait l'objet d'une revue indépendante.",
    diagnostic:
      "L'audit documentaire a mis en évidence une ambiguïté de gouvernance à clarifier juridiquement, ainsi qu'une exposition fiscale non identifiée par l'entreprise elle-même.",
    decision:
      "Clarification formelle de la structure actionnariale et mise en place d'un plan de mise en conformité fiscale.",
    intervention:
      "Audit documentaire complet, restitution à la direction, plan de régularisation par étapes.",
    result:
      "Un risque fiscal de plus de 3,4 M FCFA sur la période auditée a été détecté et mis sous plan de contrôle. Une exposition que l'entreprise ignorait avant la mission.",
  },
  {
    slug: "industrie-cameroun",
    sector: "Production industrielle",
    region: "Cameroun",
    scale: "PME industrielle",
    status: "Mission en cours",
    headline: "Quand le diagnostic élargit son périmètre en cours de route",
    problem:
      "Une gouvernance à un seul niveau de contrôle sur les sorties de production, et une situation actionnariale antérieure jamais formalisée juridiquement.",
    diagnostic:
      "Le diagnostic stratégique initial a révélé une réalité de production industrielle plus complexe que prévu, nécessitant une reconstruction du périmètre de mission en cours d'exécution.",
    decision:
      "Instauration d'un comité de pilotage hebdomadaire et recommandation formelle de régulariser la situation actionnariale antérieure.",
    intervention:
      "Reconstruction du diagnostic, mise sous contrôle croisé des flux de production, comité de pilotage hebdomadaire.",
    result:
      "Mission en cours, classée en vigilance renforcée. Retenue ici comme illustration de la profondeur du diagnostic MEDEGNAN.",
  },
  {
    slug: "agro-distribution-cameroun",
    sector: "Agro-distribution",
    region: "Cameroun",
    scale: "PME régionale",
    status: "Mission conclue",
    headline: "Un client qui revient pour une deuxième mission",
    problem:
      "Après un premier diagnostic stratégique livré avec succès, l'entreprise a engagé une extension régionale nécessitant une structuration de partenariat.",
    diagnostic:
      "Le premier rapport stratégique avait clarifié la trajectoire de l'entreprise ; la structuration de la nouvelle extension a nécessité un cadrage du partenariat entrepreneurial associé.",
    decision: "Structuration du partenariat encadrant l'extension régionale.",
    intervention: "Mission de structuration partenariale, en cours de déploiement.",
    result:
      "Le premier mandat a été livré à 100 %, ce qui a conduit le client à engager une seconde mission avec MEDEGNAN. Un signal de confiance plus parlant qu'un chiffre isolé.",
  },
];
