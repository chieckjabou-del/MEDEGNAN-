import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/ui/PageHero";
import Section, { Kicker } from "@/components/ui/Section";
import OfferDetail from "@/components/ui/OfferDetail";
import { offers } from "@/lib/content/offers";
import { diagnosticTools } from "@/lib/content/methodology";

export const metadata: Metadata = {
  title: "Diagnostic stratégique",
  description: "Une lecture complète et vérifiée de la situation réelle de votre entreprise, avant toute décision.",
};

export default function DiagnosticPage() {
  const offer = offers.find((o) => o.slug === "diagnostic-strategique")!;
  const audit = offers.find((o) => o.slug === "audit-documentaire")!;

  return (
    <>
      <Breadcrumbs items={[{ label: "Solutions", href: "/solutions" }, { label: "Diagnostic stratégique" }]} />
      <PageHero
        kicker="Diagnostiquer"
        title="Voir la réalité avant de décider"
        lead="La plupart des décisions stratégiques ratées ne viennent pas d'un mauvais choix — mais d'un diagnostic incomplet. MEDEGNAN reconstruit la vérité financière, organisationnelle et concurrentielle avant toute recommandation."
      />

      <Section tone="paper">
        <div className="grid gap-8 md:grid-cols-2">
          <OfferDetail offer={offer} />
          <OfferDetail offer={audit} />
        </div>
      </Section>

      <Section tone="raised">
        <Kicker>Comment nous diagnostiquons</Kicker>
        <h2 className="mt-3 font-display text-3xl md:text-4xl">Quatre outils, une seule vérité de départ</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {diagnosticTools.map((t) => (
            <div key={t.name} className="border-t-2 border-ink pt-4">
              <h3 className="font-display text-lg">{t.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
