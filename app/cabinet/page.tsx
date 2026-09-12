import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionBanner from "@/components/ui/SectionBanner";
import { principles } from "@/lib/content/methodology";
import { proofStats } from "@/lib/content/proofs";

export const metadata: Metadata = {
  title: "Le cabinet",
  description:
    "MEDEGNAN CONSULTING est un cabinet panafricain de structuration, transformation et développement des entreprises, basé à Cotonou, Bénin.",
};

export default function CabinetPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Cabinet" }]} />
      <PageHero
        kicker="Le cabinet"
        title="Une méthode, une équipe, une capacité d'exécution"
        lead="MEDEGNAN CONSULTING n'est pas construit autour d'un seul homme. C'est un système : diagnostic, structuration, transformation, pilotage, porté par une équipe qui grandit avec ses missions."
      />

      <Section tone="paper" className="!py-0">
        <SectionBanner label="Positionnement" title="Vision et mission" tone="navy" className="-mx-6 md:-mx-10" />
        <div className="grid gap-10 py-10 pb-20 md:grid-cols-2 md:pb-28">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-ink-soft">Vision</p>
            <p className="mt-3 text-2xl font-bold leading-snug text-balance">
              Devenir le cabinet de référence en Afrique francophone pour la transformation stratégique et
              opérationnelle des PME, en alliant méthodologies éprouvées et technologies émergentes.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-ink-soft">Mission</p>
            <p className="mt-3 text-lg leading-relaxed text-ink-soft text-pretty">
              Accompagner les entrepreneurs et dirigeants à structurer, développer et digitaliser leurs entreprises
              selon un système reproductible et mesurable, du chaos initial à la scalabilité.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="raised" className="!py-0">
        <SectionBanner label="Principes" title="Ce qui ne change pas d'une mission à l'autre" tone="teal" className="-mx-6 md:-mx-10" />
        <div className="grid gap-6 py-10 pb-20 md:grid-cols-2 md:pb-28">
          {principles.map((p) => (
            <div key={p.name} className="border-t-2 border-analyse pt-4">
              <h3 className="text-lg font-bold">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="paper" className="!py-0">
        <SectionBanner label="Équipe" title="Une équipe restreinte, structurée par niveau d'expertise" tone="violet" className="-mx-6 md:-mx-10" />
        <div className="py-10 pb-20 md:pb-28">
          <p className="max-w-2xl text-ink-soft">
            MEDEGNAN CONSULTING organise ses consultants selon un référentiel de progression à plusieurs niveaux, de
            l&apos;intégration à l&apos;association exécutive. Le cabinet reste volontairement resserré : chaque mission est
            suivie par un consultant référent et supervisée par la direction de mission.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div className="border border-line p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-ink-soft">Gérance et direction de mission</p>
              <h3 className="mt-2 text-lg font-bold">Direction des opérations</h3>
              <p className="mt-2 text-sm text-ink-soft">
                Supervision des missions, structuration des partenariats, gouvernance du cabinet.
              </p>
            </div>
            <div className="border border-line p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-ink-soft">Associé exécutif</p>
              <h3 className="mt-2 text-lg font-bold">Fondation et orientation stratégique</h3>
              <p className="mt-2 text-sm text-ink-soft">
                Orientation stratégique du cabinet et conception de la méthodologie MEDEGNAN CORE.
              </p>
            </div>
            <div className="border border-line p-6">
              <p className="text-xs font-bold uppercase tracking-wide text-ink-soft">Consultants référents</p>
              <h3 className="mt-2 text-lg font-bold">Diagnostic et structuration</h3>
              <p className="mt-2 text-sm text-ink-soft">
                Conduite des missions de diagnostic stratégique et de structuration industrielle sur le terrain.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="raised" className="!py-0">
        <SectionBanner label="Empreinte" title="Une pratique de terrain, pas un cabinet de rapports" tone="vert" className="-mx-6 md:-mx-10" />
        <div className="grid grid-cols-2 gap-8 py-10 pb-20 md:grid-cols-4 md:pb-28">
          {proofStats.map((s) => (
            <div key={s.label} className="border-t-2 border-resultat pt-4">
              <p className="text-4xl font-bold text-ink md:text-5xl">{s.value}</p>
              <p className="mt-1 text-sm font-medium text-ink">{s.label}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
