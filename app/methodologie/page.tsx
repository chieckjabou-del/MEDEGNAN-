import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionBanner from "@/components/ui/SectionBanner";
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
  title: "Méthodologie · MEDEGNAN CORE",
  description:
    "MEDEGNAN CORE : la méthodologie propriétaire de MEDEGNAN CONSULTING pour diagnostiquer, structurer, transformer et piloter une organisation.",
};

export default function MethodologiePage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Méthodologie" }]} />
      <PageHero kicker={methodologyIntro.kicker} title={methodologyIntro.title} lead={methodologyIntro.lead} />

      <Section tone="paper">
        <blockquote className="border-l-4 border-accent pl-6 text-2xl font-bold leading-snug text-balance md:text-3xl">
          {methodologyIntro.principle}
        </blockquote>
      </Section>

      <Section tone="raised" className="!py-0">
        <SectionBanner label="Diagnostiquer avant de prescrire" title="Quatre outils pour lire une organisation avec précision" tone="teal" className="-mx-6 md:-mx-10" />
        <div className="py-10 pb-20 md:pb-28">
          <div className="grid gap-6 md:grid-cols-2">
            {diagnosticTools.map((t) => (
              <div key={t.name} className="border-t-2 border-analyse pt-4">
                <h3 className="text-lg font-bold">{t.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm text-ink-faint">
            Les grilles de score et les formules de calcul associées à ces outils sont propriétaires et restent
            internes au cabinet. Nous partageons ici leur logique, pas leur mécanique exacte.
          </p>
        </div>
      </Section>

      <Section tone="paper" className="!py-0">
        <SectionBanner label="Exécution" title="Le système MEDEGNAN CORE : quatre phases, un ordre non négociable" tone="navy" className="-mx-6 md:-mx-10" />
        <div className="py-10 pb-20 md:pb-28">
          <p className="max-w-2xl text-ink-soft">
            On ne peut pas structurer ce qui n&apos;est pas stabilisé. On ne peut pas accélérer ce qui n&apos;est pas
            structuré. Chaque phase conditionne l&apos;accès à la suivante.
          </p>
          <div className="mt-10">
            <PhaseTimeline phases={corePhases} />
          </div>
        </div>
      </Section>

      <Section tone="raised">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-accent-hover">Rythme de mission</p>
            <h2 className="mt-3 text-2xl font-bold">Un cycle constant, quel que soit le niveau</h2>
            <ol className="mt-6 flex flex-col gap-3">
              {executionRhythm.map((r, i) => (
                <li key={r.label} className="flex items-baseline gap-3 border-b border-line pb-3">
                  <span className="text-xs font-bold text-accent-hover">0{i + 1}</span>
                  <span className="font-medium">{r.label}</span>
                  <span className="ml-auto text-sm text-ink-faint">{r.detail}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-accent-hover">Gouvernance de mission</p>
            <h2 className="mt-3 text-2xl font-bold">Un rythme de pilotage partagé avec la direction</h2>
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

      <Section tone="paper" className="!py-0">
        <SectionBanner label="Trajectoire de maturité" title="Sept niveaux, du diagnostic initial à la gouvernance de scale" tone="acier" className="-mx-6 md:-mx-10" />
        <div className="py-10 pb-20 md:pb-28">
          <div className="overflow-x-auto border border-line">
            <table className="w-full min-w-[560px] border-collapse text-left text-sm">
              <thead>
                <tr className="bg-processus text-xs uppercase tracking-wide text-paper">
                  <th className="py-3 px-4 font-bold">Niveau</th>
                  <th className="py-3 px-4 font-bold">Objectif</th>
                  <th className="py-3 px-4 font-bold">Durée indicative</th>
                </tr>
              </thead>
              <tbody>
                {maturityLevels.map((m, i) => (
                  <tr key={m.level} className={i % 2 === 1 ? "bg-paper-raised" : "bg-paper"}>
                    <td className="py-3 px-4 font-bold tabular text-ink">N{m.level}</td>
                    <td className="py-3 px-4">{m.name}</td>
                    <td className="py-3 px-4 text-ink-faint">{m.duration}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 max-w-2xl text-sm text-ink-faint">
            Les niveaux 0 à 2 sont documentés en détail dans notre pratique. Les niveaux supérieurs s&apos;affinent
            mission après mission.
          </p>
        </div>
      </Section>

      <section className="bg-ink py-16 md:py-20">
        <div className="mx-auto grid w-full max-w-(--container-content) gap-8 px-6 md:grid-cols-2 md:px-10">
          {quotes.map((q) => (
            <blockquote key={q.text} className="border-l-4 border-accent pl-6 text-lg leading-relaxed text-paper/90">
              {q.text}
            </blockquote>
          ))}
        </div>
      </section>
    </>
  );
}
