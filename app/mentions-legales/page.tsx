import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import { site } from "@/lib/content/site";

export const metadata: Metadata = { title: "Mentions légales" };

export default function MentionsLegalesPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Mentions légales" }]} />
      <PageHero kicker="Informations légales" title="Mentions légales" />
      <Section tone="paper">
        <div className="prose-content max-w-2xl space-y-6 text-ink-soft">
          <div>
            <h2 className="font-display text-xl text-ink">Éditeur du site</h2>
            <p className="mt-2">
              {site.name}, cabinet de conseil en stratégie, structuration et transformation d&apos;entreprises, basé à{" "}
              {site.contact.city}.
            </p>
            <p className="mt-2 text-sm italic">{site.legal.entityNote}</p>
          </div>
          <div>
            <h2 className="font-display text-xl text-ink">Contact</h2>
            <p className="mt-2">
              {site.contact.email} — {site.contact.phoneBenin}
            </p>
          </div>
          <div>
            <h2 className="font-display text-xl text-ink">Hébergement</h2>
            <p className="mt-2">Ce site est hébergé par Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis.</p>
          </div>
          <div>
            <h2 className="font-display text-xl text-ink">Propriété intellectuelle</h2>
            <p className="mt-2">
              L&apos;ensemble des contenus de ce site (textes, méthodologie, identité visuelle) est la propriété de{" "}
              {site.name}, sauf mention contraire. Toute reproduction sans autorisation est interdite.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
