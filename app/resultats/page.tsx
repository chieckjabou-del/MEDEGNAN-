import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionBanner from "@/components/ui/SectionBanner";
import { Button } from "@/components/ui/Button";
import CoverageMap from "@/components/ui/CoverageMap";
import { proofStats, countriesServed } from "@/lib/content/proofs";
import { positionSectorielle, famillesSectorielles } from "@/lib/content/secteurs";
import { caseStudies } from "@/lib/content/case-studies";

export const metadata: Metadata = {
  title: "Résultats",
  description: "Les preuves mesurables de l'action de MEDEGNAN CONSULTING auprès de ses clients.",
};

export default function ResultatsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Résultats" }]} />
      <PageHero
        kicker="Résultats"
        title="Des preuves vérifiables, mission après mission"
        lead="Ce que MEDEGNAN peut démontrer aujourd'hui, chiffres à l'appui."
      />

      <Section tone="paper">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {proofStats.map((s) => (
            <div key={s.label} className="border-t-2 border-ink pt-4">
              <p className="text-4xl font-bold md:text-5xl">{s.value}</p>
              <p className="mt-1 text-sm font-medium">{s.label}</p>
              <p className="mt-1 text-xs text-ink-faint">{s.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="raised" className="!py-0">
        <SectionBanner
          label="Où nous intervenons"
          title="Onze pays, un même réseau de consultants"
          tone="navy"
          className="-mx-6 md:-mx-10"
        />
        <div className="grid gap-10 py-10 pb-20 md:pb-28 lg:grid-cols-[1fr_20rem] lg:gap-16">
          <CoverageMap className="max-w-xl lg:max-w-none" reseau />
          <div className="self-center">
            <p className="text-ink-soft">
              Le réseau couvre l&apos;Afrique de l&apos;Ouest, l&apos;Afrique centrale, l&apos;océan Indien et la
              diaspora européenne.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-1">
              {countriesServed.map((c) => (
                <li key={c} className="flex items-baseline gap-2 border-b border-line py-1.5 text-sm">
                  <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-deep" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="paper" className="!py-0">
        <SectionBanner
          label="Secteurs accompagnés"
          title="Tous secteurs, et ce n'est pas une formule"
          tone="teal"
          className="-mx-6 md:-mx-10"
        />
        <div className="py-10 pb-20 md:pb-28">
          <p className="max-w-3xl text-lg leading-relaxed text-ink">{positionSectorielle.phrase}</p>
          <p className="mt-5 max-w-3xl leading-relaxed text-ink-soft">{positionSectorielle.pourquoi}</p>

          <div className="mt-8 max-w-3xl border-l-2 border-analyse pl-6">
            <p className="leading-relaxed text-ink-soft">{positionSectorielle.epreuve}</p>
          </div>

          {/* La cartographie complète et le moteur qui la sous-tend vivent sur
              leur propre page : les répéter ici les affaiblirait toutes deux. */}
          <Button href="/secteurs" variant="secondary" className="mt-10">
            Voir les {famillesSectorielles.length} familles et la méthode
          </Button>
        </div>
      </Section>

      <Section tone="paper" className="!py-0">
        <SectionBanner label="Détail" title="Ce que ces chiffres recouvrent" tone="acier" className="-mx-6 md:-mx-10" />
        <div className="py-10 pb-20 md:pb-28">
          <div className="flex flex-col gap-6">
            {caseStudies.map((s) => (
              <div key={s.slug} className="grid gap-4 border-t border-line pt-6 md:grid-cols-[1fr_auto]">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-ink-faint">
                    {s.sector} · {s.region}
                  </p>
                  <h3 className="mt-1 text-xl font-bold">{s.headline}</h3>
                </div>
                {s.metric && <p className="text-2xl font-bold text-accent-hover md:text-right">{s.metric.value}</p>}
              </div>
            ))}
          </div>
          <Button href="/etudes-de-cas" variant="ghost" className="mt-8 px-0">
            Lire les études de cas complètes
          </Button>
        </div>
      </Section>
    </>
  );
}
