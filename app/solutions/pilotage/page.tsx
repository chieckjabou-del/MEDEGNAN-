import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionBanner from "@/components/ui/SectionBanner";
import OfferDetail from "@/components/ui/OfferDetail";
import { offers } from "@/lib/content/offers";
import { governanceCadence } from "@/lib/content/methodology";

export const metadata: Metadata = {
  title: "Operating Partner · Pilotage & accompagnement continu",
  description: "MEDEGNAN reste engagé aux côtés du dirigeant après le diagnostic : pilotage, revues de direction, aide à la décision.",
};

const capabilities = [
  { title: "Suivi des indicateurs clés", body: "Les tableaux de bord installés en structuration sont revus et actualisés à un rythme régulier." },
  { title: "Animation des revues de direction", body: "MEDEGNAN prépare et anime les comités de pilotage, pour que les décisions s'appuient sur des faits, pas des impressions." },
  { title: "Aide à la décision", body: "Face à un arbitrage difficile (investissement, recrutement, réorientation), MEDEGNAN apporte une lecture indépendante." },
  { title: "Coordination des chantiers", body: "Les actions issues du diagnostic sont suivies jusqu'à leur exécution, pas seulement listées dans un rapport." },
];

export default function PilotagePage() {
  const systeme = offers.find((o) => o.slug === "systeme-pilotage")!;
  const continu = offers.find((o) => o.slug === "accompagnement-continu")!;

  return (
    <>
      <Breadcrumbs items={[{ label: "Solutions", href: "/solutions" }, { label: "Pilotage & accompagnement" }]} />
      <PageHero
        kicker="Operating Partner"
        title="Un partenaire de pilotage dans la durée, pas seulement un rapport"
        lead="Beaucoup de missions de conseil s'arrêtent à la remise d'un rapport. MEDEGNAN peut rester engagé aux côtés de la direction pour piloter l'exécution, suivre les résultats et ajuster la trajectoire, sans devenir une offre forfaitaire figée : chaque accompagnement est calibré à l'intensité réellement nécessaire."
      />

      <Section tone="paper" className="!py-0">
        <SectionBanner label="Concrètement" title="Ce que recouvre l'Operating Partner" tone="violet" className="-mx-6 md:-mx-10" />
        <div className="grid gap-6 py-10 pb-20 md:grid-cols-2 md:pb-28">
          {capabilities.map((c) => (
            <div key={c.title} className="border-t-2 border-offre pt-4">
              <h3 className="text-lg font-bold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="raised">
        <div className="grid gap-8 md:grid-cols-2">
          <OfferDetail offer={systeme} />
          <OfferDetail offer={continu} />
        </div>
      </Section>

      <Section tone="paper" className="!py-0">
        <SectionBanner label="Rythme" title="Un cadre de gouvernance, pas une disponibilité illimitée" tone="acier" className="-mx-6 md:-mx-10" />
        <ol className="flex flex-col divide-y divide-line border-y border-line py-10 pb-20 md:pb-28">
          {governanceCadence.map((g) => (
            <li key={g.label} className="flex items-center gap-4 py-3">
              <span>{g.label}</span>
              <span className="ml-auto text-sm text-ink-faint">{g.cadence}</span>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
