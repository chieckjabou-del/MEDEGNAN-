import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import { site } from "@/lib/content/site";

export const metadata: Metadata = { title: "Confidentialité" };

export default function ConfidentialitePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Confidentialité" }]} />
      <PageHero kicker="Vos données" title="Politique de confidentialité" />
      <Section tone="paper">
        <div className="max-w-2xl space-y-6 text-ink-soft">
          <div>
            <h2 className="font-display text-xl text-ink">Ce que nous collectons</h2>
            <p className="mt-2">
              Le formulaire « Demander un diagnostic » compose un e-mail à destination de {site.contact.email} avec les
              informations que vous saisissez. Ce site ne stocke aucune donnée de formulaire sur un serveur : les
              informations transitent uniquement via votre propre messagerie.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-ink">Cookies et mesure d&apos;audience</h2>
            <p className="mt-2">
              Ce site n&apos;utilise pas de cookies de suivi publicitaire ni d&apos;outil de mesure d&apos;audience tiers à ce jour.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-ink">Vos droits</h2>
            <p className="mt-2">
              Pour toute question sur les données que vous nous transmettez par e-mail ou par téléphone, contactez-nous
              à {site.contact.email}. Nous ne partageons ni ne revendons vos informations à des tiers.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
