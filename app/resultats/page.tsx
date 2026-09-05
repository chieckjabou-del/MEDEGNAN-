import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/ui/PageHero";
import Section, { Kicker } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { proofStats, sectorsServed, proofNote } from "@/lib/content/proofs";
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
        title="Une preuve modeste et vérifiable plutôt qu'une promesse gonflée"
        lead="MEDEGNAN CONSULTING est un cabinet en développement actif. Voici ce que nous pouvons démontrer aujourd'hui — sans enjoliver, sans inventer."
      />

      <Section tone="paper">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {proofStats.map((s) => (
            <div key={s.label} className="border-t-2 border-ink pt-4">
              <p className="font-display text-4xl tabular md:text-5xl">{s.value}</p>
              <p className="mt-1 text-sm font-medium">{s.label}</p>
              <p className="mt-1 text-xs text-ink-faint">{s.detail}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-sm text-ink-faint">{proofNote}</p>
      </Section>

      <Section tone="raised">
        <Kicker>Secteurs accompagnés</Kicker>
        <h2 className="mt-3 font-display text-3xl md:text-4xl">Une pratique transversale</h2>
        <ul className="mt-8 flex flex-wrap gap-3">
          {sectorsServed.map((s) => (
            <li key={s} className="border border-ink/25 px-4 py-2 text-sm">
              {s}
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="paper">
        <Kicker>Détail</Kicker>
        <h2 className="mt-3 font-display text-3xl md:text-4xl">Ce que ces chiffres recouvrent</h2>
        <div className="mt-10 flex flex-col gap-6">
          {caseStudies.map((s) => (
            <div key={s.slug} className="grid gap-4 border-t border-line pt-6 md:grid-cols-[1fr_auto]">
              <div>
                <p className="font-mono text-xs uppercase tracking-wide text-ink-faint">
                  {s.sector} — {s.region}
                </p>
                <h3 className="mt-1 font-display text-xl">{s.headline}</h3>
              </div>
              {s.metric && (
                <p className="font-mono text-2xl tabular text-accent md:text-right">{s.metric.value}</p>
              )}
            </div>
          ))}
        </div>
        <Button href="/etudes-de-cas" variant="ghost" className="mt-8 px-0">
          Lire les études de cas complètes
        </Button>
      </Section>
    </>
  );
}
