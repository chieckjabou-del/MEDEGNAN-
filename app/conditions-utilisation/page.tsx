import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import { site } from "@/lib/content/site";

export const metadata: Metadata = { title: "Conditions d'utilisation" };

export default function ConditionsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Conditions d'utilisation" }]} />
      <PageHero kicker="Cadre d'usage" title="Conditions d'utilisation" />
      <Section tone="paper">
        <div className="max-w-2xl space-y-6 text-ink-soft">
          <div>
            <h2 className="font-display text-xl text-ink">Objet du site</h2>
            <p className="mt-2">
              Ce site présente les activités, la méthodologie et les offres de {site.name}. Les informations tarifaires
              indiquées sont des fourchettes indicatives ; toute mission fait l&apos;objet d&apos;une proposition
              commerciale spécifique.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-ink">Études de cas</h2>
            <p className="mt-2">
              Les études de cas publiées sont anonymisées et les données chiffrées sont arrondies par respect pour la
              confidentialité de nos clients. Elles ne constituent pas une garantie de résultat pour une autre
              organisation.
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-ink">Limitation de responsabilité</h2>
            <p className="mt-2">
              Le contenu de ce site est fourni à titre informatif et ne constitue pas un conseil contractuel. Toute
              collaboration formelle est encadrée par une lettre de mission ou un contrat spécifique.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
