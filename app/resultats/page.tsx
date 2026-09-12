import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionBanner from "@/components/ui/SectionBanner";
import { Button } from "@/components/ui/Button";
import { proofStats, sectorsServed } from "@/lib/content/proofs";
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
        <SectionBanner label="Secteurs accompagnés" title="Une pratique transversale" tone="teal" className="-mx-6 md:-mx-10" />
        <ul className="flex flex-wrap gap-3 py-10 pb-20 md:pb-28">
          {sectorsServed.map((s) => (
            <li key={s} className="border border-ink/25 px-4 py-2 text-sm">
              {s}
            </li>
          ))}
        </ul>
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
