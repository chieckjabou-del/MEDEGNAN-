import Breadcrumbs from "./Breadcrumbs";
import PageHero from "./PageHero";
import Section from "./Section";
import SectionBanner from "./SectionBanner";
import { Button } from "./Button";
import type { InstitutionSegment } from "@/lib/content/institutions";

export default function InstitutionSegmentPage({ segment }: { segment: InstitutionSegment }) {
  return (
    <>
      <Breadcrumbs items={[{ label: "Institutions", href: "/institutions" }, { label: segment.name }]} />
      <PageHero kicker="Institutions" title={segment.name} lead={segment.summary}>
        <Button href="/contact" variant="accent" className="mt-8">
          {segment.entryPoint}
        </Button>
      </PageHero>

      <Section tone="paper" className="!py-0">
        <SectionBanner label="Capacités" title="Ce que MEDEGNAN peut apporter" tone="acier" className="-mx-6 md:-mx-10" />
        <div className="grid gap-6 py-10 pb-20 md:grid-cols-3 md:pb-28">
          {segment.capabilities.map((c) => (
            <div key={c} className="border-t-2 border-processus pt-4">
              <p className="text-ink-soft">{c}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="raised">
        <p className="max-w-2xl text-ink-soft">
          Comme pour une entreprise, toute collaboration démarre par une mission de cadrage : un diagnostic qui
          objective la situation avant toute recommandation.
        </p>
      </Section>
    </>
  );
}
