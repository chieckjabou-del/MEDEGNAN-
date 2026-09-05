import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/ui/PageHero";
import Section, { Kicker } from "@/components/ui/Section";
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
        lead="MEDEGNAN CONSULTING n'est pas construit autour d'un seul homme. C'est un système — diagnostic, structuration, transformation, pilotage — porté par une équipe qui grandit avec ses missions."
      />

      <Section tone="paper">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <Kicker>Vision</Kicker>
            <p className="mt-3 font-display text-2xl leading-snug text-balance">
              Devenir le cabinet de référence en Afrique francophone pour la transformation stratégique et
              opérationnelle des PME, en alliant méthodologies éprouvées et technologies émergentes.
            </p>
          </div>
          <div>
            <Kicker>Mission</Kicker>
            <p className="mt-3 text-lg leading-relaxed text-ink-soft text-pretty">
              Accompagner les entrepreneurs et dirigeants à structurer, développer et digitaliser leurs entreprises
              selon un système reproductible et mesurable, du chaos initial à la scalabilité.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="raised">
        <Kicker>Principes</Kicker>
        <h2 className="mt-3 font-display text-3xl md:text-4xl">Ce qui ne change pas d&apos;une mission à l&apos;autre</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {principles.map((p) => (
            <div key={p.name} className="border-t-2 border-ink pt-4">
              <h3 className="font-display text-lg">{p.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="paper">
        <Kicker>Équipe</Kicker>
        <h2 className="mt-3 font-display text-3xl md:text-4xl">Une équipe restreinte, structurée par niveau d&apos;expertise</h2>
        <p className="mt-5 max-w-2xl text-ink-soft">
          MEDEGNAN CONSULTING organise ses consultants selon un référentiel de progression à plusieurs niveaux, de
          l&apos;intégration à l&apos;association exécutive. Le cabinet reste volontairement resserré : chaque mission est
          suivie par un consultant référent et supervisée par la direction de mission.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          <div className="border border-line p-6">
            <p className="font-mono text-xs uppercase tracking-wide text-accent">Gérance & direction de mission</p>
            <h3 className="mt-2 font-display text-lg">Direction des opérations</h3>
            <p className="mt-2 text-sm text-ink-soft">
              Supervision des missions, structuration des partenariats, gouvernance du cabinet.
            </p>
          </div>
          <div className="border border-line p-6">
            <p className="font-mono text-xs uppercase tracking-wide text-accent">Associé exécutif</p>
            <h3 className="mt-2 font-display text-lg">Fondation & orientation stratégique</h3>
            <p className="mt-2 text-sm text-ink-soft">
              Orientation stratégique du cabinet et conception de la méthodologie MEDEGNAN CORE.
            </p>
          </div>
          <div className="border border-line p-6">
            <p className="font-mono text-xs uppercase tracking-wide text-accent">Consultants référents</p>
            <h3 className="mt-2 font-display text-lg">Diagnostic & structuration</h3>
            <p className="mt-2 text-sm text-ink-soft">
              Conduite des missions de diagnostic stratégique et de structuration industrielle sur le terrain.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="ink">
        <Kicker invert>Empreinte</Kicker>
        <h2 className="mt-3 max-w-2xl font-display text-3xl text-paper md:text-4xl">
          Une pratique de terrain, pas un cabinet de rapports
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
          {proofStats.map((s) => (
            <div key={s.label} className="border-t border-paper/25 pt-4">
              <p className="font-display text-4xl tabular text-paper md:text-5xl">{s.value}</p>
              <p className="mt-1 text-sm font-medium text-paper">{s.label}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
