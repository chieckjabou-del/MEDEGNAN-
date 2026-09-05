import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionBanner from "@/components/ui/SectionBanner";
import OfferCard from "@/components/ui/OfferCard";
import { Button } from "@/components/ui/Button";
import { offers } from "@/lib/content/offers";
import { maturityLevels } from "@/lib/content/methodology";

export const metadata: Metadata = {
  title: "Solutions pour les entreprises",
  description: "Diagnostic, structuration, croissance, transformation et pilotage pour PME et entreprises africaines.",
};

const stages = [
  { archetype: "Vous démarrez ou stabilisez", entry: "Diagnostic Stratégique", href: "/solutions/diagnostic-strategique" },
  { archetype: "Vous voulez sortir du pilotage au ressenti", entry: "Structuration", href: "/solutions/structuration" },
  { archetype: "Votre croissance plafonne", entry: "Croissance", href: "/solutions/croissance" },
  { archetype: "Votre gouvernance est en tension", entry: "Transformation", href: "/solutions/transformation" },
  { archetype: "Vous voulez un pilotage dans la durée", entry: "Pilotage & accompagnement", href: "/solutions/pilotage" },
];

export default function EntreprisesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Solutions", href: "/solutions" }, { label: "Entreprises" }]} />
      <PageHero
        kicker="Pour les entreprises"
        title="Un point d'entrée adapté à votre situation réelle, pas à votre budget supposé"
        lead="PME, groupe familial, entreprise en croissance : MEDEGNAN commence toujours par un diagnostic, puis oriente vers la mission adaptée à votre niveau de maturité."
      >
        <Button href="/demander-un-diagnostic" variant="accent" className="mt-8">
          Évaluer mon entreprise
        </Button>
      </PageHero>

      <Section tone="paper" className="!py-0">
        <SectionBanner label="Où en êtes-vous ?" title="Cinq situations, cinq points d'entrée" tone="navy" className="-mx-6 md:-mx-10" />
        <div className="flex flex-col divide-y divide-line border-y border-line py-10 pb-20 md:pb-28">
          {stages.map((s) => (
            <a key={s.href} href={s.href} className="group grid items-center gap-2 py-5 md:grid-cols-[1fr_auto_auto]">
              <span className="text-lg">{s.archetype}</span>
              <span className="text-xs font-bold uppercase tracking-wide text-accent-hover md:text-right">{s.entry}</span>
              <span className="text-sm underline decoration-accent decoration-2 underline-offset-4 group-hover:text-accent-hover md:justify-self-end">
                Découvrir
              </span>
            </a>
          ))}
        </div>
      </Section>

      <Section tone="raised" className="!py-0">
        <SectionBanner label="Catalogue" title="Nos offres pour entreprises" tone="violet" className="-mx-6 md:-mx-10" />
        <div className="grid gap-6 py-10 pb-20 md:grid-cols-2 md:pb-28 lg:grid-cols-3">
          {offers.map((o) => (
            <OfferCard key={o.slug} offer={o} />
          ))}
        </div>
      </Section>

      <Section tone="paper" className="!py-0">
        <SectionBanner label="Trajectoire" title="Une progression par niveau de maturité" tone="teal" className="-mx-6 md:-mx-10" />
        <ol className="flex flex-col divide-y divide-line border-y border-line py-10 pb-20 md:pb-28">
          {maturityLevels.map((m) => (
            <li key={m.level} className="flex items-center gap-4 py-3">
              <span className="text-xs font-bold text-accent-hover">N{m.level}</span>
              <span>{m.name}</span>
              <span className="ml-auto text-sm text-ink-faint">{m.duration}</span>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
