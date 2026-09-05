import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionBanner from "@/components/ui/SectionBanner";
import OfferDetail from "@/components/ui/OfferDetail";
import { offers } from "@/lib/content/offers";
import { diagnosticTools } from "@/lib/content/methodology";

export const metadata: Metadata = {
  title: "Diagnostic stratégique",
  description: "Une lecture complète et vérifiée de la situation réelle de votre entreprise, avant toute décision.",
};

export default function DiagnosticPage() {
  const auditFlash = offers.find((o) => o.slug === "audit-flash")!;
  const offer = offers.find((o) => o.slug === "diagnostic-strategique")!;
  const audit = offers.find((o) => o.slug === "audit-documentaire")!;

  return (
    <>
      <Breadcrumbs items={[{ label: "Solutions", href: "/solutions" }, { label: "Diagnostic stratégique" }]} />
      <PageHero
        kicker="Diagnostiquer"
        title="Voir la réalité avant de décider"
        lead="La plupart des décisions stratégiques ratées ne viennent pas d'un mauvais choix, mais d'un diagnostic incomplet. MEDEGNAN reconstruit la vérité financière, organisationnelle et concurrentielle avant toute recommandation."
      />

      <Section tone="paper">
        <div className="grid gap-8 md:grid-cols-3">
          <OfferDetail offer={auditFlash} />
          <OfferDetail offer={offer} />
          <OfferDetail offer={audit} />
        </div>
      </Section>

      <Section tone="raised" className="!py-0">
        <SectionBanner label="Comment nous diagnostiquons" title="Quatre outils, une seule vérité de départ" tone="teal" className="-mx-6 md:-mx-10" />
        <div className="grid gap-6 py-10 pb-20 md:grid-cols-2 md:pb-28">
          {diagnosticTools.map((t) => (
            <div key={t.name} className="border-t-2 border-analyse pt-4">
              <h3 className="text-lg font-bold">{t.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
