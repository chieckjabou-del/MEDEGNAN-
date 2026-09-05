import Breadcrumbs from "./Breadcrumbs";
import PageHero from "./PageHero";
import Section, { Kicker } from "./Section";
import { Button } from "./Button";
import type { InstitutionSegment } from "@/lib/content/institutions";

export default function InstitutionSegmentPage({ segment }: { segment: InstitutionSegment }) {
  return (
    <>
      <Breadcrumbs items={[{ label: "Institutions", href: "/institutions" }, { label: segment.name }]} />
      <PageHero kicker="Institutions" title={segment.name} lead={segment.summary}>
        <Button href="/contact" className="mt-8">
          {segment.entryPoint}
        </Button>
      </PageHero>

      <Section tone="paper">
        <Kicker>Capacités</Kicker>
        <h2 className="mt-3 font-display text-3xl md:text-4xl text-balance">Ce que MEDEGNAN peut apporter</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {segment.capabilities.map((c) => (
            <div key={c} className="border-t-2 border-ink pt-4">
              <p className="text-ink-soft">{c}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="raised">
        <Kicker>Cadre de collaboration</Kicker>
        <p className="mt-4 max-w-2xl text-ink-soft">
          Comme pour une entreprise, toute collaboration démarre par une mission de cadrage : un diagnostic qui
          objective la situation avant toute recommandation. MEDEGNAN n&apos;a pas encore livré de mission
          institutionnelle publiable — nous préférons le dire clairement plutôt que de laisser entendre une expérience
          que nous n&apos;avons pas encore.
        </p>
      </Section>
    </>
  );
}
