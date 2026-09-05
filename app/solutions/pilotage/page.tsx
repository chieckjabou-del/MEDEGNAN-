import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/ui/PageHero";
import Section, { Kicker } from "@/components/ui/Section";
import OfferDetail from "@/components/ui/OfferDetail";
import { offers } from "@/lib/content/offers";
import { governanceCadence } from "@/lib/content/methodology";

export const metadata: Metadata = {
  title: "Pilotage & accompagnement continu",
  description: "MEDEGNAN reste engagé aux côtés du dirigeant après le diagnostic : pilotage, revues de direction, aide à la décision.",
};

const capabilities = [
  { title: "Suivi des indicateurs clés", body: "Les tableaux de bord installés en structuration sont revus et actualisés à un rythme régulier." },
  { title: "Animation des revues de direction", body: "MEDEGNAN prépare et anime les comités de pilotage, pour que les décisions s'appuient sur des faits, pas des impressions." },
  { title: "Aide à la décision", body: "Face à un arbitrage difficile — investissement, recrutement, réorientation — MEDEGNAN apporte une lecture indépendante." },
  { title: "Coordination des chantiers", body: "Les actions issues du diagnostic sont suivies jusqu'à leur exécution, pas seulement listées dans un rapport." },
];

export default function PilotagePage() {
  const systeme = offers.find((o) => o.slug === "systeme-pilotage")!;
  const continu = offers.find((o) => o.slug === "accompagnement-continu")!;

  return (
    <>
      <Breadcrumbs items={[{ label: "Solutions", href: "/solutions" }, { label: "Pilotage & accompagnement" }]} />
      <PageHero
        kicker="Piloter & accompagner"
        title="Un partenaire de pilotage dans la durée, pas seulement un rapport"
        lead="Beaucoup de missions de conseil s'arrêtent à la remise d'un rapport. MEDEGNAN peut rester engagé aux côtés de la direction pour piloter l'exécution, suivre les résultats et ajuster la trajectoire — sans devenir une offre forfaitaire figée : chaque accompagnement est calibré à l'intensité réellement nécessaire."
      />

      <Section tone="paper">
        <Kicker>Ce que cela recouvre concrètement</Kicker>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {capabilities.map((c) => (
            <div key={c.title} className="border-t-2 border-ink pt-4">
              <h3 className="font-display text-lg">{c.title}</h3>
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

      <Section tone="paper">
        <Kicker>Rythme</Kicker>
        <h2 className="mt-3 font-display text-3xl">Un cadre de gouvernance, pas une disponibilité illimitée</h2>
        <ol className="mt-8 flex flex-col divide-y divide-line border-y border-line">
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
