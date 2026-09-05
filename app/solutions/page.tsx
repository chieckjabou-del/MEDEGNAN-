import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/ui/PageHero";
import Section, { Kicker } from "@/components/ui/Section";
import OfferCard from "@/components/ui/OfferCard";
import { offers, offerCategories } from "@/lib/content/offers";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Les solutions MEDEGNAN CONSULTING, organisées par problème : diagnostiquer, structurer, transformer, accélérer, piloter, accompagner.",
};

export default function SolutionsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Solutions" }]} />
      <PageHero
        kicker="Solutions"
        title="Des offres organisées par problème, jamais par jargon interne"
        lead="Que vous dirigiez une entreprise ou une institution, chaque offre répond à une question précise : où en sommes-nous, que faut-il construire, comment accélérer, comment piloter durablement."
      />

      <Section tone="paper">
        <div className="grid gap-6 sm:grid-cols-2">
          <Link href="/solutions/entreprises" className="group border border-line bg-paper-raised p-8">
            <h2 className="font-display text-2xl">Entreprises</h2>
            <p className="mt-3 text-ink-soft">PME, groupes, entrepreneurs — du diagnostic à la croissance structurée.</p>
            <span className="mt-6 inline-block text-sm font-medium underline decoration-accent decoration-2 underline-offset-4 group-hover:text-accent">
              Découvrir →
            </span>
          </Link>
          <Link href="/solutions/institutions" className="group border border-line bg-paper-raised p-8">
            <h2 className="font-display text-2xl">Institutions</h2>
            <p className="mt-3 text-ink-soft">États, ministères, fonds et banques — diagnostic, structuration, digitalisation.</p>
            <span className="mt-6 inline-block text-sm font-medium underline decoration-accent decoration-2 underline-offset-4 group-hover:text-accent">
              Découvrir →
            </span>
          </Link>
        </div>
      </Section>

      {offerCategories.map((cat, i) => {
        const items = offers.filter((o) => o.category === cat.name);
        if (items.length === 0) return null;
        return (
          <Section key={cat.name} tone={i % 2 === 0 ? "raised" : "paper"}>
            <Kicker>{cat.name}</Kicker>
            <h2 className="mt-3 font-display text-3xl">{cat.description}</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {items.map((o) => (
                <OfferCard key={o.slug} offer={o} />
              ))}
            </div>
          </Section>
        );
      })}
    </>
  );
}
