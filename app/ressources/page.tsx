import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import ResourceEmptyState from "@/components/ui/ResourceEmptyState";
import { resourceCategories } from "@/lib/content/resources";

export const metadata: Metadata = {
  title: "Ressources",
  description: "Analyses, études et publications de MEDEGNAN CONSULTING sur la structuration et la transformation des entreprises africaines.",
};

export default function RessourcesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Ressources" }]} />
      <PageHero
        kicker="Intelligence économique"
        title="Une base de connaissance en construction"
        lead="MEDEGNAN documente ses analyses au fil de ses missions plutôt que de publier du contenu générique pour occuper l'espace."
      />
      <Section tone="paper">
        <div className="grid gap-6 sm:grid-cols-3">
          {resourceCategories.map((c) => (
            <Link key={c.slug} href={`/ressources/${c.slug}`} className="border border-line bg-paper-raised p-6 hover:border-ink/40">
              <h2 className="font-display text-xl">{c.name}</h2>
              <p className="mt-2 text-sm text-ink-soft">{c.description}</p>
            </Link>
          ))}
        </div>
        <div className="mt-10">
          <ResourceEmptyState />
        </div>
      </Section>
    </>
  );
}
