import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionBanner from "@/components/ui/SectionBanner";
import OfferDetail from "@/components/ui/OfferDetail";
import { offers } from "@/lib/content/offers";

export const metadata: Metadata = {
  title: "Croissance",
  description: "Débloquer la croissance commerciale et préparer une levée de fonds ou un partenariat capitalistique.",
};

export default function CroissancePage() {
  const commerciale = offers.find((o) => o.slug === "strategie-commerciale")!;
  const venture = offers.find((o) => o.slug === "structuration-venture")!;

  return (
    <>
      <Breadcrumbs items={[{ label: "Solutions", href: "/solutions" }, { label: "Croissance" }]} />
      <PageHero
        kicker="Accélérer"
        title="Quand l'offre est bonne mais que la croissance plafonne"
        lead="Une entreprise structurée peut encore stagner : cycle de vente inefficace, positionnement flou, ou dossier trop faible pour convaincre un investisseur. MEDEGNAN reconstruit le moteur de croissance et prépare, si nécessaire, la levée de fonds."
      />

      <Section tone="paper">
        <div className="grid gap-8 md:grid-cols-2">
          <OfferDetail offer={commerciale} />
          <OfferDetail offer={venture} />
        </div>
      </Section>

      <Section tone="raised" className="!py-0">
        <SectionBanner label="Financer" title="Préparer l'investissement" tone="rouge" className="-mx-6 md:-mx-10" />
        <p className="max-w-2xl py-10 pb-20 text-ink-soft md:pb-28">
          Pour les entreprises à fort potentiel, MEDEGNAN structure le dossier (juridique, financier, narratif) avant
          toute mise en relation avec un fonds ou une banque. Nous ne promettons pas de lever des fonds à votre place :
          nous construisons le dossier qui rend cette conversation possible.
        </p>
      </Section>
    </>
  );
}
