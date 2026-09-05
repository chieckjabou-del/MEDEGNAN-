import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/ui/PageHero";
import Section, { Kicker } from "@/components/ui/Section";
import PhaseTimeline from "@/components/ui/PhaseTimeline";
import {
  methodologyIntro,
  diagnosticTools,
  corePhases,
  executionRhythm,
  governanceCadence,
  maturityLevels,
  quotes,
} from "@/lib/content/methodology";

export const metadata: Metadata = {
  title: "Méthodologie — MEDEGNAN CORE",
  description:
    "MEDEGNAN CORE : la méthodologie propriétaire de MEDEGNAN CONSULTING pour diagnostiquer, structurer, transformer et piloter une organisation.",
};

export default function MethodologiePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Méthodologie" }]} />
      <PageHero kicker={methodologyIntro.kicker} title={methodologyIntro.title} lead={methodologyIntro.lead} />

      <Section tone="paper">
        <blockquote className="border-l-2 border-accent pl-6 font-display text-2xl leading-snug text-balance md:text-3xl">
          {methodologyIntro.principle}
        </blockquote>
      </Section>

      <Section tone="raised">
        <Kicker>Diagnostiquer avant de prescrire</Kicker>
        <h2 className="mt-3 max-w-2xl font-display text-3xl md:text-4xl text-balance">
          Quatre outils pour lire une organisation avec précision
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {diagnosticTools.map((t) => (
            <div key={t.name} className="border-t-2 border-ink pt-4">
              <h3 className="font-display text-lg">{t.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-sm text-ink-faint">
          Les grilles de score et les formules de calcul associées à ces outils sont propriétaires et restent internes
          au cabinet — nous partageons ici leur logique, pas leur mécanique exacte.
        </p>
      </Section>

      <Section tone="paper">
        <Kicker>Exécution</Kicker>
        <h2 className="mt-3 max-w-2xl font-display text-3xl md:text-4xl text-balance">
          Le système MEDEGNAN CORE : quatre phases, un ordre non négociable
        </h2>
        <p className="mt-5 max-w-2xl text-ink-soft">
          On ne peut pas structurer ce qui n&apos;est pas stabilisé. On ne peut pas accélérer ce qui n&apos;est pas structuré.
          Chaque phase conditionne l&apos;accès à la suivante.
        </p>
        <div className="mt-10">
          <PhaseTimeline phases={corePhases} />
        </div>
      </Section>

      <Section tone="raised">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <Kicker>Rythme de mission</Kicker>
            <h2 className="mt-3 font-display text-2xl">Un cycle constant, quel que soit le niveau</h2>
            <ol className="mt-6 flex flex-col gap-3">
              {executionRhythm.map((r, i) => (
                <li key={r.label} className="flex items-baseline gap-3 border-b border-line pb-3">
                  <span className="font-mono text-xs text-accent">0{i + 1}</span>
                  <span className="font-medium">{r.label}</span>
                  <span className="ml-auto text-sm text-ink-faint">{r.detail}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <Kicker>Gouvernance de mission</Kicker>
            <h2 className="mt-3 font-display text-2xl">Un rythme de pilotage partagé avec la direction</h2>
            <ol className="mt-6 flex flex-col gap-3">
              {governanceCadence.map((g) => (
                <li key={g.label} className="flex items-baseline gap-3 border-b border-line pb-3">
                  <span className="font-medium">{g.label}</span>
                  <span className="ml-auto text-sm text-ink-faint">{g.cadence}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <Section tone="paper">
        <Kicker>Trajectoire de maturité</Kicker>
        <h2 className="mt-3 max-w-2xl font-display text-3xl md:text-4xl text-balance">
          Sept niveaux, du diagnostic initial à la gouvernance de scale
        </h2>
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-ink/20 text-xs uppercase tracking-wide text-ink-faint">
                <th className="py-3 pr-4 font-medium">Niveau</th>
                <th className="py-3 pr-4 font-medium">Objectif</th>
                <th className="py-3 font-medium">Durée indicative</th>
              </tr>
            </thead>
            <tbody>
              {maturityLevels.map((m) => (
                <tr key={m.level} className="border-b border-line">
                  <td className="py-3 pr-4 font-mono tabular text-accent">N{m.level}</td>
                  <td className="py-3 pr-4">{m.name}</td>
                  <td className="py-3 text-ink-faint">{m.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 max-w-2xl text-sm text-ink-faint">
          Les niveaux 0 à 2 sont documentés en détail dans notre pratique. Les niveaux supérieurs s&apos;affinent mission
          après mission — nous préférons le dire plutôt que le maquiller.
        </p>
      </Section>

      <Section tone="ink">
        <div className="grid gap-8 md:grid-cols-2">
          {quotes.map((q) => (
            <blockquote key={q.text} className="border-l-2 border-accent pl-6 text-lg leading-relaxed text-paper/90">
              {q.text}
            </blockquote>
          ))}
        </div>
      </Section>
    </>
  );
}
