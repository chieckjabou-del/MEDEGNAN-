import Link from "next/link";
import Container from "@/components/ui/Container";
import Section, { Kicker } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import PhaseTimeline from "@/components/ui/PhaseTimeline";
import { site } from "@/lib/content/site";
import { proofStats, proofNote } from "@/lib/content/proofs";
import { caseStudies } from "@/lib/content/case-studies";
import { corePhases, methodologyIntro } from "@/lib/content/methodology";
import { offerCategories } from "@/lib/content/offers";
import { institutionSegments } from "@/lib/content/institutions";

const problems = [
  {
    title: "Le dirigeant pilote au ressenti",
    body: "Pas de vision fiable de la marge réelle, de la trésorerie ou des dépendances critiques.",
  },
  {
    title: "L'entreprise dépend d'une seule personne",
    body: "Aucun système ne survit à l'absence du dirigeant : décisions, relations clients, mémoire opérationnelle.",
  },
  {
    title: "La croissance plafonne sans explication",
    body: "L'offre est bonne, mais le moteur commercial ou organisationnel ne suit plus.",
  },
  {
    title: "Aucun système de pilotage réel",
    body: "Les décisions se prennent en réunion, sans indicateurs partagés ni rythme de gouvernance.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="border-b border-line bg-paper-raised">
        <Container className="py-20 md:py-32">
          <Kicker>{site.name}</Kicker>
          <h1 className="mt-5 max-w-4xl font-display text-4xl leading-[1.05] text-balance md:text-7xl">
            Comprendre ce qui bloque une organisation. Construire sa trajectoire.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft text-pretty md:text-xl">
            {site.baseline}. MEDEGNAN CONSULTING diagnostique la situation réelle d&apos;une entreprise ou d&apos;une
            institution, identifie ce qui freine sa performance, et accompagne l&apos;exécution jusqu&apos;au résultat mesuré.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/demander-un-diagnostic">Demander un diagnostic</Button>
            <Button href="/methodologie" variant="secondary">
              Découvrir la méthode
            </Button>
          </div>
        </Container>
      </section>

      {/* Deux portes d'entrée */}
      <Section tone="paper">
        <Kicker>Deux publics, deux logiques</Kicker>
        <h2 className="mt-3 font-display text-3xl md:text-4xl">Vous dirigez une entreprise, ou une institution ?</h2>
        <div className="mt-10 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
          <Link href="/solutions/entreprises" className="group flex flex-col justify-between bg-paper p-8 md:p-12">
            <div>
              <span className="font-mono text-xs uppercase tracking-wide text-accent">Entreprises</span>
              <h3 className="mt-3 font-display text-2xl md:text-3xl">PME, groupes, entrepreneurs</h3>
              <p className="mt-4 max-w-md text-ink-soft">
                Diagnostiquer, structurer, accélérer ou piloter une entreprise — du dirigeant qui sort du chaos initial
                au groupe qui prépare sa prochaine phase de croissance.
              </p>
            </div>
            <span className="mt-8 inline-flex items-center gap-1 text-sm font-medium underline decoration-accent decoration-2 underline-offset-4 group-hover:text-accent">
              Solutions entreprises
            </span>
          </Link>
          <Link href="/solutions/institutions" className="group flex flex-col justify-between bg-paper p-8 md:p-12">
            <div>
              <span className="font-mono text-xs uppercase tracking-wide text-accent">Institutions</span>
              <h3 className="mt-3 font-display text-2xl md:text-3xl">États, ministères, fonds, banques</h3>
              <p className="mt-4 max-w-md text-ink-soft">
                Diagnostic de filière, structuration de programmes, digitalisation de la performance publique et
                accompagnement des décisions d&apos;investissement.
              </p>
            </div>
            <span className="mt-8 inline-flex items-center gap-1 text-sm font-medium underline decoration-accent decoration-2 underline-offset-4 group-hover:text-accent">
              Solutions institutions
            </span>
          </Link>
        </div>
      </Section>

      {/* Problèmes traités */}
      <Section tone="raised">
        <Kicker>Ce que nous traitons</Kicker>
        <h2 className="mt-3 max-w-2xl font-display text-3xl md:text-4xl text-balance">
          Les mêmes signaux reviennent, quel que soit le secteur
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((p) => (
            <div key={p.title} className="border-t-2 border-ink pt-4">
              <h3 className="font-display text-lg">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Méthode */}
      <Section tone="paper">
        <Kicker>{methodologyIntro.kicker}</Kicker>
        <h2 className="mt-3 max-w-2xl font-display text-3xl md:text-4xl text-balance">{methodologyIntro.title}</h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">{methodologyIntro.lead}</p>
        <div className="mt-10">
          <PhaseTimeline phases={corePhases} />
        </div>
        <Button href="/methodologie" variant="ghost" className="mt-8 px-0">
          Voir la méthodologie complète
        </Button>
      </Section>

      {/* Preuves / chiffres */}
      <Section tone="ink">
        <Kicker invert>Preuves</Kicker>
        <h2 className="mt-3 max-w-2xl font-display text-3xl text-paper md:text-4xl">Une pratique réelle, mesurée</h2>
        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
          {proofStats.map((s) => (
            <div key={s.label} className="border-t border-paper/25 pt-4">
              <p className="font-display text-4xl tabular text-paper md:text-5xl">{s.value}</p>
              <p className="mt-1 text-sm font-medium text-paper">{s.label}</p>
              <p className="mt-1 text-xs text-paper/60">{s.detail}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-xl text-sm text-paper/70">{proofNote}</p>
      </Section>

      {/* Études de cas */}
      <Section tone="paper">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Kicker>Ce que nos missions produisent</Kicker>
            <h2 className="mt-3 font-display text-3xl md:text-4xl">Études de cas</h2>
          </div>
          <Link href="/etudes-de-cas" className="text-sm font-medium underline decoration-accent decoration-2 underline-offset-4">
            Toutes les études de cas
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {caseStudies.slice(0, 2).map((s) => (
            <CaseStudyCard key={s.slug} study={s} />
          ))}
        </div>
      </Section>

      {/* Pilotage / accompagnement continu */}
      <Section tone="deep">
        <Kicker invert>Au-delà de la mission</Kicker>
        <h2 className="mt-3 max-w-2xl font-display text-3xl text-paper md:text-4xl text-balance">
          Un pilotage aux côtés du dirigeant, pas seulement un rapport
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-paper/85">
          MEDEGNAN peut rester engagé après le diagnostic : animation des revues de direction, suivi des indicateurs,
          aide à la décision, coordination des chantiers en cours et ajustement de trajectoire — un accompagnement
          dans la durée, pas une offre forfaitaire figée.
        </p>
        <Button href="/solutions/pilotage" className="mt-8 bg-paper text-ink hover:bg-paper/90">
          Pilotage & accompagnement continu
        </Button>
      </Section>

      {/* Solutions */}
      <Section tone="paper">
        <Kicker>Nos offres</Kicker>
        <h2 className="mt-3 font-display text-3xl md:text-4xl">Organisées par problème, pas par jargon</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offerCategories.map((c) => (
            <div key={c.name} className="border border-line p-6">
              <h3 className="font-display text-xl">{c.name}</h3>
              <p className="mt-2 text-sm text-ink-soft">{c.description}</p>
            </div>
          ))}
        </div>
        <Button href="/solutions" variant="ghost" className="mt-8 px-0">
          Explorer toutes les solutions
        </Button>
      </Section>

      {/* Institutions */}
      <Section tone="raised">
        <Kicker>Institutions & grands acteurs</Kicker>
        <h2 className="mt-3 max-w-2xl font-display text-3xl md:text-4xl text-balance">
          Une capacité construite pour les acteurs publics et financiers
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {institutionSegments.map((seg) => (
            <Link key={seg.slug} href={`/institutions/${seg.slug}`} className="group border border-line bg-paper p-6 hover:border-ink/40">
              <h3 className="font-display text-lg">{seg.name}</h3>
              <p className="mt-2 text-sm text-ink-soft">{seg.summary}</p>
              <span className="mt-4 inline-block text-sm font-medium underline decoration-accent decoration-2 underline-offset-4 group-hover:text-accent">
                En savoir plus
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Ressources */}
      <Section tone="paper">
        <Kicker>Intelligence économique</Kicker>
        <h2 className="mt-3 font-display text-3xl md:text-4xl">Ressources</h2>
        <p className="mt-4 max-w-2xl text-ink-soft">
          Analyses, études et publications produites au fil des missions du cabinet — une base de connaissance en
          construction, pas un flux de contenu générique.
        </p>
        <Button href="/ressources" variant="ghost" className="mt-6 px-0">
          Explorer les ressources
        </Button>
      </Section>

      {/* CTA final */}
      <Section tone="ink">
        <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="max-w-xl font-display text-3xl text-paper md:text-4xl text-balance">
              Parlons de votre organisation.
            </h2>
            <p className="mt-4 max-w-lg text-paper/75">
              Diagnostic, structuration, transformation ou pilotage — commençons par comprendre où vous en êtes
              réellement.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button href="/demander-un-diagnostic" className="bg-paper text-ink hover:bg-paper/90">
              Demander un diagnostic
            </Button>
            <Button href="/contact" variant="secondary" className="border-paper/40 text-paper hover:bg-paper/10">
              Parler à MEDEGNAN
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
