import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { institutionSegments, institutionalNote } from "@/lib/content/institutions";

export const metadata: Metadata = {
  title: "Institutions",
  description: "Diagnostic de filière, structuration de programmes et digitalisation pour États, ministères, fonds et banques.",
};

export default function InstitutionsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Institutions" }]} />
      <PageHero
        kicker="Institutions & grands acteurs"
        title="La rigueur du diagnostic d'entreprise, appliquée à l'échelle publique et financière"
        lead="Architecture de filières, structuration de programmes, digitalisation de la performance publique, diagnostic pré-investissement : MEDEGNAN transpose sa méthodologie aux acteurs qui pilotent à grande échelle."
      >
        <Button href="/contact" className="mt-8">
          Soumettre une mission institutionnelle
        </Button>
      </PageHero>

      <Section tone="paper">
        <div className="grid gap-6 sm:grid-cols-2">
          {institutionSegments.map((seg) => (
            <Link key={seg.slug} href={`/institutions/${seg.slug}`} className="group border border-line bg-paper-raised p-8">
              <h2 className="font-display text-2xl">{seg.name}</h2>
              <p className="mt-3 text-ink-soft">{seg.summary}</p>
              <span className="mt-6 inline-block text-sm font-medium underline decoration-accent decoration-2 underline-offset-4 group-hover:text-accent">
                Découvrir
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="raised">
        <p className="max-w-2xl border-l-2 border-accent pl-6 text-ink-soft">{institutionalNote}</p>
      </Section>
    </>
  );
}
