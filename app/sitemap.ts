import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/content/case-studies";

const base = "https://medegnan-consulting.vercel.app";

const staticRoutes = [
  "",
  "/cabinet",
  "/solutions",
  "/rejoindre-le-reseau",
  "/referentiel-des-fuites",
  "/secteurs",
  "/solutions/entreprises",
  "/solutions/institutions",
  "/solutions/structuration",
  "/solutions/croissance",
  "/solutions/transformation",
  "/solutions/pilotage",
  "/institutions",
  "/institutions/etats",
  "/institutions/ministeres",
  "/institutions/fonds-investisseurs",
  "/institutions/banques",
  "/methodologie",
  "/resultats",
  "/etudes-de-cas",
  "/ressources",
  "/ressources/analyses",
  "/ressources/etudes",
  "/ressources/publications",
  "/contact",
  "/demander-un-diagnostic",
  "/mentions-legales",
  "/confidentialite",
  "/conditions-utilisation",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticRoutes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));

  const caseStudyEntries = caseStudies.map((c) => ({
    url: `${base}/etudes-de-cas/${c.slug}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...caseStudyEntries];
}
