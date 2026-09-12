import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionBanner from "@/components/ui/SectionBanner";
import CoreProcess from "@/components/ui/CoreProcess";
import MaturityLadder from "@/components/ui/MaturityLadder";
import {
  methodologyIntro,
  diagnosticTools,
  corePhases,
  executionRhythm,
  governanceCadence,
  maturityLevels,
  quotes,
  coreFunctions,
  proofLevels,
  firstVisitObjects,
} from "@/lib/content/methodology";
import Reveal from "@/components/ui/Reveal";

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
            <CoreProcess phases={corePhases} />
          </div>
        </div>
      </Section>

      <Section tone="raised">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-ink-soft">Rythme de mission</p>
            <h2 className="mt-3 text-2xl font-bold">Un cycle constant, quel que soit le niveau</h2>
            <ol className="mt-6 flex flex-col gap-3">
              {executionRhythm.map((r, i) => (
                <li key={r.label} className="flex items-baseline gap-3 border-b border-line pb-3">
                  <span className="text-xs font-bold text-ink-soft">0{i + 1}</span>
                  <span className="font-medium">{r.label}</span>
                  <span className="ml-auto text-sm text-ink-faint">{r.detail}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-ink-soft">Gouvernance de mission</p>
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
          <MaturityLadder levels={maturityLevels} />
          <p className="mt-4 max-w-2xl text-sm text-ink-faint">
            Les niveaux 0 à 2 sont documentés en détail dans notre pratique. Les niveaux supérieurs s&apos;affinent
            mission après mission.
          </p>
        </div>
      </Section>

      {/* Les douze fonctions : la grille de lecture appliquée à toute organisation */}
      <Section tone="raised" className="!py-0">
        <SectionBanner
          label="La grille de lecture"
          title="Douze fonctions, aucune laissée de côté"
          tone="teal"
          className="-mx-6 md:-mx-10"
        />
        <div className="py-10 pb-20 md:pb-28">
          <p className="max-w-2xl leading-relaxed text-ink-soft">
            Un diagnostic MEDEGNAN passe l&apos;organisation au crible des mêmes douze fonctions, quel que soit son
            secteur ou sa taille. C&apos;est ce qui permet de comparer une mine et une boulangerie sans les traiter
            de la même façon.
          </p>
          <ol className="mt-8 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {coreFunctions.map((f, i) => (
              <Reveal as="li" key={f.code} delay={i * 45} className="flex items-baseline gap-4 bg-paper p-5">
                <span className="font-mono text-sm font-bold text-analyse-text">{f.code}</span>
                <span className="font-medium text-ink">{f.label}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      {/* La première visite : huit objets dans un ordre imposé */}
      <Section tone="paper" className="!py-0">
        <SectionBanner
          label="La première visite"
          title="Huit objets, dans un ordre qui n'est pas indicatif"
          tone="navy"
          className="-mx-6 md:-mx-10"
        />
        <div className="py-10 pb-20 md:pb-28">
          <p className="max-w-2xl leading-relaxed text-ink-soft">
            Un diagnostic commence par ce que l&apos;on constate, pas par ce que l&apos;on nous raconte. Ces huit
            objets sont examinés dans cet ordre précis. Les quatre repérés ci-dessous sont tenus même lorsque la
            visite est écourtée : ce sont ceux qui ne dépendent de la disponibilité de personne.
          </p>
          <ol className="mt-8 divide-y divide-line border-y border-line">
            {firstVisitObjects.map((o, i) => (
              <Reveal
                as="li"
                key={o.rank}
                delay={i * 50}
                className="grid gap-2 py-5 md:grid-cols-[2.5rem_14rem_1fr] md:items-baseline md:gap-6"
              >
                <span className="font-mono text-sm font-bold text-ink-soft">0{o.rank}</span>
                <span className="flex items-baseline gap-2 font-bold text-ink">
                  {o.name}
                  {o.kept && (
                    <span className="shrink-0 rounded-sm bg-accent-soft px-1.5 py-0.5 font-mono text-[0.65rem] uppercase tracking-wide text-ink">
                      tenu
                    </span>
                  )}
                </span>
                <span className="text-sm leading-relaxed text-ink-soft">
                  {o.action}. <span className="text-ink">{o.detects}.</span>
                </span>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      {/* L'échelle de preuve */}
      <Section tone="raised" className="!py-0">
        <SectionBanner
          label="Ce qui est prouvé, ce qui est déclaré"
          title="Chaque constat porte son niveau de preuve"
          tone="vert"
          className="-mx-6 md:-mx-10"
        />
        <div className="py-10 pb-20 md:pb-28">
          <p className="max-w-2xl leading-relaxed text-ink-soft">
            Un diagnostic qui distingue ce qui est prouvé de ce qui est déclaré vaut infiniment plus qu&apos;un
            diagnostic qui affirme tout au même titre. Le niveau atteint s&apos;écrit toujours, du plus fort au plus
            faible.
          </p>
          <ol className="mt-8 flex flex-col gap-px overflow-hidden border border-line bg-line">
            {proofLevels.map((p, i) => (
              <Reveal
                as="li"
                key={p.rank}
                delay={i * 60}
                className="flex items-center gap-4 bg-paper px-5 py-4"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-resultat font-mono text-sm font-bold text-resultat-text">
                  {p.rank}
                </span>
                <span className="text-ink">{p.label}</span>
              </Reveal>
            ))}
          </ol>
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
