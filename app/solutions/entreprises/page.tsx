import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/ui/PageHero";
import Section, { Kicker } from "@/components/ui/Section";
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
        <Button href="/demander-un-diagnostic" className="mt-8">
          Évaluer mon entreprise
        </Button>
      </PageHero>

      <Section tone="paper">
        <Kicker>Où en êtes-vous ?</Kicker>
        <h2 className="mt-3 font-display text-3xl md:text-4xl text-balance">Cinq situations, cinq points d&apos;entrée</h2>
        <div className="mt-10 flex flex-col divide-y divide-line border-y border-line">
          {stages.map((s) => (
            <a key={s.href} href={s.href} className="group grid items-center gap-2 py-5 md:grid-cols-[1fr_auto_auto]">
              <span className="text-lg">{s.archetype}</span>
              <span className="font-mono text-xs uppercase tracking-wide text-accent md:text-right">{s.entry}</span>
              <span className="text-sm underline decoration-accent decoration-2 underline-offset-4 group-hover:text-accent md:justify-self-end">
                Découvrir
              </span>
            </a>
          ))}
        </div>
      </Section>

      <Section tone="raised">
        <Kicker>Nos offres pour entreprises</Kicker>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((o) => (
            <OfferCard key={o.slug} offer={o} />
          ))}
        </div>
      </Section>

      <Section tone="paper">
        <Kicker>Trajectoire</Kicker>
        <h2 className="mt-3 font-display text-3xl">Une progression par niveau de maturité</h2>
        <ol className="mt-8 flex flex-col divide-y divide-line border-y border-line">
          {maturityLevels.map((m) => (
            <li key={m.level} className="flex items-center gap-4 py-3">
              <span className="font-mono text-xs text-accent">N{m.level}</span>
              <span>{m.name}</span>
              <span className="ml-auto text-sm text-ink-faint">{m.duration}</span>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
