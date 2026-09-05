import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/ui/PageHero";
import Section, { Kicker } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import { site } from "@/lib/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contacter MEDEGNAN CONSULTING — Cotonou, Bénin.",
};

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <PageHero
        kicker="Contact"
        title="Parlons de votre organisation"
        lead="Que vous dirigiez une entreprise ou une institution, la première conversation ne coûte rien et n'engage à rien."
      />

      <Section tone="paper">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <Kicker>Coordonnées</Kicker>
            <ul className="mt-4 flex flex-col gap-3 text-lg">
              <li>
                <a href={`mailto:${site.contact.email}`} className="underline decoration-accent decoration-2 underline-offset-4 hover:text-accent">
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.contact.phoneBenin.replace(/\s/g, "")}`} className="underline decoration-accent decoration-2 underline-offset-4 hover:text-accent">
                  {site.contact.phoneBenin}
                </a>{" "}
                <span className="text-sm text-ink-faint">(Bénin, WhatsApp)</span>
              </li>
              <li>
                <a href={`tel:${site.contact.phoneFrance.replace(/\s/g, "")}`} className="underline decoration-accent decoration-2 underline-offset-4 hover:text-accent">
                  {site.contact.phoneFrance}
                </a>{" "}
                <span className="text-sm text-ink-faint">(France)</span>
              </li>
              <li className="text-ink-soft">{site.contact.city}</li>
            </ul>
            <div className="mt-6">
              <WhatsAppButton message="Bonjour, je souhaite échanger avec MEDEGNAN CONSULTING." />
            </div>
          </div>
          <div>
            <Kicker>Selon votre profil</Kicker>
            <div className="mt-4 flex flex-col gap-3">
              <Button href="/demander-un-diagnostic">Réserver mon Audit Flash</Button>
              <Button href="/demander-un-diagnostic" variant="secondary">
                Évaluer mon entreprise
              </Button>
              <Button href="/demander-un-diagnostic" variant="secondary">
                Soumettre une mission institutionnelle
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
