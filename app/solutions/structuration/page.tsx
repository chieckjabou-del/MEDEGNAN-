import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/ui/PageHero";
import Section, { Kicker } from "@/components/ui/Section";
import OfferDetail from "@/components/ui/OfferDetail";
import { offers } from "@/lib/content/offers";

export const metadata: Metadata = {
  title: "Structuration",
  description: "Construire les systèmes permanents qui rendent une entreprise pilotable, sans dépendre d'une seule personne.",
};

export default function StructurationPage() {
  const offer = offers.find((o) => o.slug === "structuration-optimisation")!;

  return (
    <>
      <Breadcrumbs items={[{ label: "Solutions", href: "/solutions" }, { label: "Structuration" }]} />
      <PageHero
        kicker="Structurer"
        title="Sortir de la dépendance à une seule personne"
        lead="Une entreprise stabilisée qui repose encore entièrement sur son dirigeant reste fragile. La structuration installe l'organisation, les procédures et les tableaux de bord qui permettent de déléguer sans perdre le contrôle."
      />

      <Section tone="paper">
        <OfferDetail offer={offer} />
      </Section>

      <Section tone="raised">
        <Kicker>Ce que la phase de structuration installe</Kicker>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="border-t-2 border-ink pt-4">
            <h3 className="font-display text-lg">Organisation</h3>
            <p className="mt-2 text-sm text-ink-soft">Organigramme fonctionnel, fiches de poste, clarté des rôles.</p>
          </div>
          <div className="border-t-2 border-ink pt-4">
            <h3 className="font-display text-lg">Procédures</h3>
            <p className="mt-2 text-sm text-ink-soft">Standards écrits par fonction, remplaçant la mémoire orale du dirigeant.</p>
          </div>
          <div className="border-t-2 border-ink pt-4">
            <h3 className="font-display text-lg">Pilotage</h3>
            <p className="mt-2 text-sm text-ink-soft">Tableau de bord opérationnel et rythme de gouvernance partagé.</p>
          </div>
        </div>
      </Section>
    </>
  );
}
