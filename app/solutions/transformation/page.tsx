import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionBanner from "@/components/ui/SectionBanner";
import OfferDetail from "@/components/ui/OfferDetail";
import { offers } from "@/lib/content/offers";
import { corePhases } from "@/lib/content/methodology";
import PhaseTimeline from "@/components/ui/PhaseTimeline";

export const metadata: Metadata = {
  title: "Transformation",
  description: "Reconstruire une organisation en difficulté structurelle ou en tension de gouvernance.",
};

export default function TransformationPage() {
  const offer = offers.find((o) => o.slug === "restructuration-complexe")!;

  return (
    <>
      <Breadcrumbs items={[{ label: "Solutions", href: "/solutions" }, { label: "Transformation" }]} />
      <PageHero
        kicker="Transformer"
        title="Reconstruire, pas seulement réparer"
        lead="Conflit entre associés, gouvernance ambiguë, redressement nécessaire : ces situations demandent une intervention qui clarifie les responsabilités et reconstruit l'organisation, plutôt qu'un simple correctif."
      />

      <Section tone="paper">
        <OfferDetail offer={offer} />
      </Section>

      <Section tone="raised" className="!py-0">
        <SectionBanner label="Le rythme d'une transformation MEDEGNAN CORE" title="Quatre phases, un ordre non négociable" tone="rouge" className="-mx-6 md:-mx-10" />
        <div className="py-10 pb-20 md:pb-28">
          <PhaseTimeline phases={corePhases} />
        </div>
      </Section>
    </>
  );
}
