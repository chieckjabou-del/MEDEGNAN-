import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionBanner from "@/components/ui/SectionBanner";
import { Button } from "@/components/ui/Button";
import { institutionSegments, institutionalNote } from "@/lib/content/institutions";

export const metadata: Metadata = {
  title: "Solutions pour les institutions",
  description: "Diagnostic, structuration et digitalisation au service des États, ministères, fonds et banques.",
};

export default function InstitutionsSolutionsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Solutions", href: "/solutions" }, { label: "Institutions" }]} />
      <PageHero
        kicker="Pour les institutions"
        title="La même rigueur de diagnostic, appliquée à l'échelle d'une filière ou d'un programme"
        lead="MEDEGNAN transpose sa méthodologie de structuration d'entreprise à l'échelle des architectures de filières, des programmes publics et des décisions d'investissement."
      >
        <Button href="/contact" variant="accent" className="mt-8">
          Soumettre une mission institutionnelle
        </Button>
      </PageHero>

      <Section tone="paper">
        <div className="grid gap-6 sm:grid-cols-2">
          {institutionSegments.map((seg) => (
            <Link key={seg.slug} href={`/institutions/${seg.slug}`} className="group border border-line bg-paper-raised p-8">
              <h2 className="text-2xl font-bold">{seg.name}</h2>
              <p className="mt-3 text-ink-soft">{seg.summary}</p>
              <span className="mt-6 inline-block text-sm font-medium underline decoration-accent decoration-2 underline-offset-4 group-hover:text-accent-hover">
                Découvrir
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="raised" className="!py-0">
        <SectionBanner label="Cadre" title="Comment nous engageons une collaboration institutionnelle" tone="acier" className="-mx-6 md:-mx-10" />
        <p className="max-w-2xl py-10 pb-20 text-ink-soft md:pb-28">{institutionalNote}</p>
      </Section>
    </>
  );
}
