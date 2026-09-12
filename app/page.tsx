import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionBanner from "@/components/ui/SectionBanner";
import { Button } from "@/components/ui/Button";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import PhaseTimeline from "@/components/ui/PhaseTimeline";
import { site } from "@/lib/content/site";
import { proofStats } from "@/lib/content/proofs";
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
    body: "Aucun système ne survit à l'absence du dirigeant. Décisions, relations clients, mémoire opérationnelle : tout repose sur lui.",
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
      <section className="bg-ink">
        <Container className="py-20 md:py-32">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-accent">{site.name}</p>
          <div className="mt-4 h-px w-16 bg-accent" aria-hidden="true" />
          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-[1.1] text-paper text-balance md:text-7xl">
            Comprendre ce qui bloque une organisation. Construire sa trajectoire.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-paper/85 text-pretty md:text-xl">
            {site.baseline}. MEDEGNAN CONSULTING diagnostique la situation réelle d&apos;une entreprise ou d&apos;une
            institution, identifie ce qui freine sa performance, et accompagne l&apos;exécution jusqu&apos;au résultat mesuré.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href="/demander-un-diagnostic" variant="accent">
              Réserver mon Audit Flash
            </Button>
            <Button href="/methodologie" variant="onDark">
              Découvrir la méthode
            </Button>
          </div>
        </Container>
      </section>

      {/* Deux portes d'entrée */}
      <Section tone="paper" className="!py-0">
        <SectionBanner label="Deux publics, deux logiques" title="Vous dirigez une entreprise, ou une institution ?" tone="navy" className="-mx-6 md:-mx-10" />
        <div className="pb-20 pt-10 md:pb-28">
        <div className="grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2">
          <Link href="/solutions/entreprises" className="group flex flex-col justify-between bg-paper p-8 md:p-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wide text-ink-soft">Entreprises</span>
              <h3 className="mt-3 text-2xl font-bold md:text-3xl">PME, groupes, entrepreneurs</h3>
              <p className="mt-4 max-w-md text-ink-soft">
                Diagnostiquer, structurer, accélérer ou piloter une entreprise, du dirigeant qui sort du chaos initial
                au groupe qui prépare sa prochaine phase de croissance.
              </p>
            </div>
            <span className="mt-8 inline-flex items-center gap-1 text-sm font-medium underline decoration-accent decoration-2 underline-offset-4 group-hover:text-accent-hover">
              Cliquez ici : solutions entreprises →
            </span>
          </Link>
          <Link href="/solutions/institutions" className="group flex flex-col justify-between bg-paper p-8 md:p-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-wide text-ink-soft">Institutions</span>
              <h3 className="mt-3 text-2xl font-bold md:text-3xl">États, ministères, fonds, banques</h3>
              <p className="mt-4 max-w-md text-ink-soft">
                Diagnostic de filière, structuration de programmes, digitalisation de la performance publique et
                accompagnement des décisions d&apos;investissement.
              </p>
            </div>
            <span className="mt-8 inline-flex items-center gap-1 text-sm font-medium underline decoration-accent decoration-2 underline-offset-4 group-hover:text-accent-hover">
              Cliquez ici : solutions institutions →
            </span>
          </Link>
        </div>
        </div>
      </Section>

      {/* Problèmes traités */}
      <Section tone="raised" className="!py-0">
        <SectionBanner label="Ce que nous traitons" title="Les mêmes signaux reviennent, quel que soit le secteur" tone="rouge" className="-mx-6 md:-mx-10" />
        <div className="grid gap-6 py-10 pb-20 md:grid-cols-2 md:pb-28 lg:grid-cols-4">
          {problems.map((p) => (
            <div key={p.title} className="border-t-2 border-signal pt-4">
              <h3 className="text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Méthode */}
      <Section tone="paper" className="!py-0">
        <SectionBanner label={methodologyIntro.kicker} title={methodologyIntro.title} tone="teal" className="-mx-6 md:-mx-10" />
        <div className="pb-20 pt-10 md:pb-28">
          <p className="max-w-2xl text-lg leading-relaxed text-ink-soft">{methodologyIntro.lead}</p>
          <div className="mt-10">
            <PhaseTimeline phases={corePhases} />
          </div>
          <Button href="/methodologie" variant="ghost" className="mt-8 px-0">
            Voir la méthodologie complète
          </Button>
        </div>
      </Section>

      {/* Preuves / chiffres */}
      <Section tone="raised" className="!py-0">
        <SectionBanner label="Preuves" title="Une pratique réelle, mesurée" tone="vert" className="-mx-6 md:-mx-10" />
        <div className="grid grid-cols-2 gap-8 py-10 pb-20 md:grid-cols-4 md:pb-28">
          {proofStats.map((s) => (
            <div key={s.label} className="border-t-2 border-resultat pt-4">
              <p className="text-4xl font-bold text-ink md:text-5xl">{s.value}</p>
              <p className="mt-1 text-sm font-medium text-ink">{s.label}</p>
              <p className="mt-1 text-xs text-ink-faint">{s.detail}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Études de cas */}
      <Section tone="paper" className="!py-0">
        <SectionBanner label="Ce que nos missions produisent" title="Études de cas" tone="acier" className="-mx-6 md:-mx-10" />
        <div className="py-10 pb-20 md:pb-28">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <p className="max-w-xl text-ink-soft">Problème, diagnostic, décision, intervention, résultat.</p>
            <Link href="/etudes-de-cas" className="text-sm font-medium underline decoration-accent decoration-2 underline-offset-4 hover:text-accent-hover">
              Cliquez ici : toutes les études de cas →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {caseStudies.slice(0, 2).map((s) => (
              <CaseStudyCard key={s.slug} study={s} />
            ))}
          </div>
        </div>
      </Section>

      {/* Pilotage / Operating Partner */}
      <Section tone="raised" className="!py-0">
        <SectionBanner label="Au-delà de la mission" title="Un pilotage aux côtés du dirigeant, pas seulement un rapport" tone="violet" className="-mx-6 md:-mx-10" />
        <div className="py-10 pb-20 md:pb-28">
          <p className="max-w-2xl text-lg leading-relaxed text-ink-soft">
            MEDEGNAN peut rester engagé après le diagnostic. Animation des revues de direction, suivi des indicateurs,
            aide à la décision, coordination des chantiers en cours, ajustement de trajectoire : un accompagnement
            dans la durée, pas une offre forfaitaire figée.
          </p>
          <Button href="/solutions/pilotage" className="mt-8">
            Operating Partner
          </Button>
        </div>
      </Section>

      {/* Solutions */}
      <Section tone="paper" className="!py-0">
        <SectionBanner label="Nos offres" title="Organisées par problème, pas par jargon" tone="navy" className="-mx-6 md:-mx-10" />
        <div className="py-10 pb-20 md:pb-28">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offerCategories.map((c) => (
              <div key={c.name} className="border border-line p-6">
                <h3 className="text-xl font-bold">{c.name}</h3>
                <p className="mt-2 text-sm text-ink-soft">{c.description}</p>
              </div>
            ))}
          </div>
          <Button href="/solutions" variant="ghost" className="mt-8 px-0">
            Explorer toutes les solutions
          </Button>
        </div>
      </Section>

      {/* Institutions */}
      <Section tone="raised" className="!py-0">
        <SectionBanner label="Institutions & grands acteurs" title="Une capacité construite pour les acteurs publics et financiers" tone="acier" className="-mx-6 md:-mx-10" />
        <div className="grid gap-6 py-10 pb-20 sm:grid-cols-2 md:pb-28 lg:grid-cols-4">
          {institutionSegments.map((seg) => (
            <Link key={seg.slug} href={`/institutions/${seg.slug}`} className="group border border-line bg-paper p-6 hover:border-ink/40">
              <h3 className="text-lg font-bold">{seg.name}</h3>
              <p className="mt-2 text-sm text-ink-soft">{seg.summary}</p>
              <span className="mt-4 inline-block text-sm font-medium underline decoration-accent decoration-2 underline-offset-4 group-hover:text-accent-hover">
                Cliquez ici : en savoir plus →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Ressources */}
      <Section tone="paper" className="!py-0">
        <SectionBanner label="Intelligence économique" title="Ressources" tone="teal" className="-mx-6 md:-mx-10" />
        <div className="py-10 pb-20 md:pb-28">
          <p className="max-w-2xl text-ink-soft">
            Analyses, études et publications produites au fil des missions du cabinet : une base de connaissance en
            construction, pas un flux de contenu générique.
          </p>
          <Button href="/ressources" variant="ghost" className="mt-6 px-0">
            Explorer les ressources
          </Button>
        </div>
      </Section>

      {/* CTA final */}
      <section className="bg-ink py-20 md:py-28">
        <Container>
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="h-px w-16 bg-accent" aria-hidden="true" />
              <h2 className="mt-6 max-w-xl text-3xl font-bold text-paper text-balance md:text-4xl">
                Parlons de votre organisation.
              </h2>
              <p className="mt-4 max-w-lg text-paper/75">
                Diagnostic, structuration, transformation ou pilotage : commençons par comprendre où vous en êtes
                réellement.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button href="/demander-un-diagnostic" variant="accent">
                Réserver mon Audit Flash
              </Button>
              <Button href="/contact" variant="onDark">
                Parler à MEDEGNAN
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
