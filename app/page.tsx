import Link from "next/link";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionBanner from "@/components/ui/SectionBanner";
import { Button } from "@/components/ui/Button";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import CoverageMap from "@/components/ui/CoverageMap";
import CoreProcess from "@/components/ui/CoreProcess";
import TestimonialMarquee from "@/components/ui/TestimonialMarquee";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import CountUp from "@/components/ui/CountUp";
import Marquee from "@/components/ui/Marquee";
import { offerCategoryIcons, institutionIcons, problemIcons } from "@/lib/content/icon-map";
import { site } from "@/lib/content/site";
import { proofStats, countriesServed } from "@/lib/content/proofs";
import { caseStudies } from "@/lib/content/case-studies";
import { testimonials } from "@/lib/content/testimonials";
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

// Témoignage mis en avant : celui du client institutionnel, dont l'attestation est
// vérifiable en ligne. Les deux autres suivent en rang compact.
const featuredTestimonial = testimonials[1];

export default function HomePage() {
  return (
    <>
      {/* Le bandeau d'accueil tient sur deux colonnes à partir de 1024 px. La
          carte occupe la droite, qui restait vide : c'est le seul visuel du
          cabinet qui soit à la fois réel, vérifiable et propre à lui. */}
      <section className="bg-ink">
        <Container className="py-16 md:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
            <div>
              {/* Le surtitre porte la baseline plutôt que le nom du cabinet :
                  le nom est déjà dans l'en-tête, deux lignes plus haut. */}
              <p className="max-w-[46ch] font-mono text-xs font-bold uppercase tracking-[0.18em] text-accent">
                {site.baseline}
              </p>
              <div className="mt-4 h-px w-16 bg-accent" aria-hidden="true" />
              <h1 className="display-xl mt-6 max-w-[17ch] font-bold text-paper text-balance">
                La plupart des organisations savent qu&apos;elles bloquent. Peu savent où.
              </h1>
              <p className="mt-7 max-w-[56ch] text-lg leading-relaxed text-paper/85 text-pretty md:text-xl">
                Nous établissons la situation réelle d&apos;une entreprise ou d&apos;une institution, isolons ce qui
                freine sa performance, puis accompagnons l&apos;exécution jusqu&apos;au résultat mesuré, pas
                jusqu&apos;à la remise du rapport.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <Button href="/demander-un-diagnostic" variant="accent">
                  Réserver mon Audit Flash
                </Button>
                <Button href="/methodologie" variant="onDark">
                  Découvrir la méthode
                </Button>
              </div>
            </div>

            {/* La carte est bornée en largeur : au delà, le bandeau devient plus
                haut qu'un écran et les deux boutons d'appel passent sous la
                ligne de flottaison. */}
            <figure className="m-0 w-full max-w-[27rem] lg:justify-self-end">
              <CoverageMap variant="sombre" reseau />
              <figcaption className="mt-5 border-t border-paper/15 pt-4 font-mono text-xs font-bold uppercase tracking-[0.16em] text-accent">
                Onze pays couverts par le réseau
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      {/* Deux portes d'entrée : diptyque sombre / clair, pas deux cartes identiques */}
      <Section tone="paper" className="!py-0">
        <SectionBanner
          label="Le point de départ change"
          title="Une entreprise et un ministère ne se diagnostiquent pas de la même façon"
          tone="navy"
          className="-mx-6 md:-mx-10"
        />
        <div className="-mx-6 grid md:-mx-10 md:grid-cols-2">
          <Link
            href="/solutions/entreprises"
            className="group relative flex flex-col justify-between overflow-hidden bg-deep px-6 py-14 text-paper md:px-12 md:py-20"
          >
            {/* Cartouche encadré : le chiffre seul se perdait dans l'angle.
                L'icône porte le sens, le chiffre garde l'ordre de lecture, et
                le cadre vitré les rend visibles sur le fond profond. */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-6 top-6 flex select-none items-center gap-3 rounded-sm border border-accent/40 bg-paper/5 px-3 py-2 backdrop-blur-[2px] transition-colors group-hover:border-accent/80 md:right-10"
            >
              <Icon name="entreprise" size={22} className="text-accent" />
              <span className="font-mono text-sm font-bold tracking-widest text-accent">01</span>
            </span>
            <div className="relative">
              <span className="text-xs font-bold uppercase tracking-wide text-accent">Entreprises</span>
              <h3 className="mt-3 max-w-sm text-2xl font-bold text-paper md:text-3xl">
                PME, groupes, entrepreneurs
              </h3>
              <p className="mt-4 max-w-md text-paper/80">
                Du dirigeant qui sort du chaos initial au groupe qui prépare sa prochaine croissance : diagnostiquer,
                structurer, accélérer, piloter.
              </p>
            </div>
            <span className="relative mt-10 inline-flex items-center gap-1 text-sm font-medium text-paper underline decoration-accent decoration-2 underline-offset-4">
              Cliquez ici : solutions entreprises →
            </span>
          </Link>
          <Link
            href="/solutions/institutions"
            className="group relative flex flex-col justify-between overflow-hidden bg-paper-raised px-6 py-14 md:px-12 md:py-20"
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute right-6 top-6 flex select-none items-center gap-3 rounded-sm border border-ink/25 bg-paper/50 px-3 py-2 backdrop-blur-[2px] transition-colors group-hover:border-ink/55 md:right-10"
            >
              <Icon name="etat" size={22} className="text-deep" />
              <span className="font-mono text-sm font-bold tracking-widest text-ink-soft">02</span>
            </span>
            <div className="relative">
              <span className="text-xs font-bold uppercase tracking-wide text-ink-soft">Institutions</span>
              <h3 className="mt-3 max-w-sm text-2xl font-bold md:text-3xl">États, ministères, fonds, banques</h3>
              <p className="mt-4 max-w-md text-ink-soft">
                Diagnostic de filière, structuration de programmes, digitalisation de la performance publique,
                accompagnement des décisions d&apos;investissement.
              </p>
            </div>
            <span className="relative mt-10 inline-flex items-center gap-1 text-sm font-medium underline decoration-accent decoration-2 underline-offset-4 group-hover:text-accent-hover">
              Cliquez ici : solutions institutions →
            </span>
          </Link>
        </div>
      </Section>

      {/* Problèmes traités : liste de dossier numérotée, pas une grille de cartes */}
      <Section tone="raised" className="!py-0">
        <SectionBanner
          label="Tous secteurs, les mêmes signaux"
          title="Les mêmes signaux reviennent, quel que soit le secteur"
          tone="rouge"
          sticky
          className="-mx-6 md:-mx-10"
        />
        <div className="max-w-3xl py-10 pb-20 md:pb-28">
          {problems.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 90}
              className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-line py-6 first:border-t-2 first:border-signal md:grid-cols-[4rem_1fr] md:gap-8"
            >
              <span className="flex items-start gap-3 font-mono text-2xl font-bold text-signal md:text-3xl">
                <span aria-hidden="true">0{i + 1}</span>
              </span>
              <div>
                <div className="flex items-start gap-3">
                  <Icon name={problemIcons[i]} size={26} className="mt-0.5 shrink-0 text-signal" />
                  <h3 className="text-lg font-bold md:text-xl">{p.title}</h3>
                </div>
                <p className="mt-2 leading-relaxed text-ink-soft">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Méthode : chapeau asymétrique, puis la frise */}
      <Section tone="paper" className="!py-0">
        <SectionBanner
          label="Pas d'improvisation"
          title={methodologyIntro.title}
          tone="teal"
          className="-mx-6 md:-mx-10"
        />
        <div className="pb-20 pt-10 md:pb-28">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
            <p className="max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">{methodologyIntro.lead}</p>
            <Button href="/methodologie" variant="ghost" className="px-0 lg:mb-1">
              Voir la méthodologie complète
            </Button>
          </div>
          <div className="mt-12">
            <CoreProcess phases={corePhases} />
          </div>
        </div>
      </Section>

      {/* Preuves : le bandeau devient la section entière, mur de chiffres sur fond sombre */}
      <section className="bg-ink py-20 md:py-28">
        <Container>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-accent">
            Pas un discours, des chiffres
          </p>
          <h2 className="mt-2 max-w-2xl text-2xl font-bold text-paper text-balance md:text-4xl">
            Onze pays. Cinquante consultants. Un seul système.
          </h2>
          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 md:grid-cols-4 md:gap-x-8">
            {proofStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 110} className="border-l-2 border-accent pl-4 md:pl-6">
                <p className="font-mono text-4xl font-bold text-accent md:text-5xl">
                  <CountUp value={s.value} />
                </p>
                <p className="mt-2 text-sm font-medium text-paper">{s.label}</p>
                <p className="mt-1 text-xs leading-relaxed text-paper/70">{s.detail}</p>
              </Reveal>
            ))}
          </div>
        </Container>
        <div className="mt-14 border-y border-paper/15 py-4 text-paper/75">
          <Marquee items={countriesServed} />
        </div>
      </section>

      {/* Études de cas : un cas mis en avant, un second en appui */}
      <Section tone="paper" className="!py-0">
        <SectionBanner
          label="Ce que nos missions produisent"
          title="D'une marge cachée à un risque fiscal dormant"
          tone="acier"
          sticky
          className="-mx-6 md:-mx-10"
        />
        <div className="py-10 pb-20 md:pb-28">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <p className="max-w-xl text-ink-soft">Problème, diagnostic, décision, intervention, résultat.</p>
            <Link
              href="/etudes-de-cas"
              className="text-sm font-medium underline decoration-accent decoration-2 underline-offset-4 hover:text-accent-hover"
            >
              Cliquez ici : toutes les études de cas →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-5">
            <Reveal className="lg:col-span-3">
              <CaseStudyCard study={caseStudies[0]} />
            </Reveal>
            <Reveal delay={130} className="lg:col-span-2">
              <CaseStudyCard study={caseStudies[1]} />
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Témoignages : une citation dominante, puis les deux autres en rang */}
      <Section tone="raised" className="!py-0">
        <SectionBanner
          label="Trois pays, trois secteurs"
          title="Ce qui revient : la capacité d'analyse et l'ancrage terrain"
          tone="vert"
          className="-mx-6 md:-mx-10"
        />
        <div className="py-10 pb-20 md:pb-28">
          <Reveal as="div" className="mx-auto max-w-3xl">
          <figure className="relative border-y border-line py-10 text-center md:py-14">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-0 top-2 select-none font-display text-7xl leading-none text-accent/25 md:text-8xl"
            >
              &laquo;
            </span>
            <blockquote className="relative text-xl font-medium leading-snug text-ink text-balance md:text-3xl">
              {featuredTestimonial.quote}
            </blockquote>
            <figcaption className="mt-6 text-sm">
              <span className="font-bold text-ink">{featuredTestimonial.name}</span>
              <span className="text-ink-soft">
                , {featuredTestimonial.role}, {featuredTestimonial.organization}
              </span>
              <span className="mt-1 block font-mono text-xs uppercase tracking-wide text-ink-faint">
                {featuredTestimonial.sector} · {featuredTestimonial.location}
              </span>
            </figcaption>
          </figure>
          </Reveal>
          <div className="-mx-6 mt-12 md:-mx-10">
            <TestimonialMarquee items={testimonials} />
          </div>
        </div>
      </Section>

      {/* Pilotage : aplat violet plein, une affirmation centrale */}
      <section className="bg-offre py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.14em] text-paper/80">
              Un rapport ne pilote rien tout seul
            </p>
            <h2 className="mt-4 text-2xl font-bold leading-tight text-paper text-balance md:text-4xl">
              Un pilotage aux côtés du dirigeant, pas seulement un rapport
            </h2>
            <p className="mt-6 leading-relaxed text-paper/85">
              MEDEGNAN peut rester engagé après le diagnostic. Animation des revues de direction, suivi des
              indicateurs, aide à la décision, coordination des chantiers en cours, ajustement de trajectoire : un
              accompagnement dans la durée, pas une offre forfaitaire figée.
            </p>
            <div className="mt-8 flex justify-center">
              <Button href="/solutions/pilotage" variant="onDark">
                Operating Partner
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Solutions : titre collant à gauche, offres en liste à droite */}
      <Section tone="paper" className="!py-0">
        <SectionBanner
          label="Six façons de traiter un problème réel"
          title="Organisées par problème, pas par jargon"
          tone="navy"
          className="-mx-6 md:-mx-10"
        />
        <div className="grid gap-8 py-10 pb-20 md:grid-cols-[15rem_1fr] md:gap-12 md:pb-28">
          <div className="self-start md:sticky md:top-24">
            <p className="text-ink-soft">
              Chaque catégorie répond à une situation précise, pas à une ligne de catalogue.
            </p>
            <Button href="/solutions" variant="ghost" className="mt-6 px-0">
              Explorer toutes les solutions
            </Button>
          </div>
          <div className="divide-y divide-line border-t border-line">
            {offerCategories.map((c) => (
              <div key={c.name} className="flex flex-col gap-1 py-5 md:flex-row md:items-baseline md:justify-between md:gap-8">
                <h3 className="flex items-center gap-3 text-xl font-bold">
                  <Icon name={offerCategoryIcons[c.name]} size={24} className="shrink-0 text-deep" />
                  {c.name}
                </h3>
                <p className="text-sm text-ink-soft md:max-w-sm md:text-right">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Institutions : rangées pleine largeur alternées, pas une grille de cartes */}
      <Section tone="raised" className="!py-0">
        <SectionBanner
          label="États, ministères, fonds, banques"
          title="La même méthode, à l'échelle publique et financière"
          tone="acier"
          sticky
          className="-mx-6 md:-mx-10"
        />
        <div className="-mx-6 py-10 pb-20 md:-mx-10 md:pb-28">
          {institutionSegments.map((seg, i) => (
            <Link
              key={seg.slug}
              href={`/institutions/${seg.slug}`}
              className={`flex flex-col gap-3 px-6 py-7 md:flex-row md:items-center md:justify-between md:gap-10 md:px-10 ${
                i % 2 === 1 ? "bg-paper-deep" : "bg-paper"
              }`}
            >
              <div className="md:flex md:items-baseline md:gap-6">
                <h3 className="flex items-center gap-3 text-lg font-bold md:w-64 md:shrink-0">
                  <Icon name={institutionIcons[seg.slug]} size={24} className="shrink-0 text-processus" />
                  {seg.name}
                </h3>
                <p className="mt-1 text-sm text-ink-soft md:mt-0">{seg.summary}</p>
              </div>
              <span className="shrink-0 text-sm font-medium underline decoration-accent decoration-2 underline-offset-4">
                Cliquez ici : en savoir plus →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* Ressources : respiration volontaire avant l'appel final */}
      <section className="bg-paper py-24 md:py-32">
        <Container>
          <div className="max-w-xl">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-ink-soft">
              Publié seulement quand il y a quelque chose à dire
            </p>
            <h2 className="mt-4 text-2xl font-bold text-balance md:text-3xl">
              Une base de connaissance qui se construit avec les missions
            </h2>
            <p className="mt-5 leading-relaxed text-ink-soft">
              Analyses, études et publications produites au fil des missions du cabinet, plutôt qu&apos;un flux de
              contenu générique destiné à occuper l&apos;espace.
            </p>
            <Button href="/ressources" variant="ghost" className="mt-6 px-0">
              Explorer les ressources
            </Button>
          </div>
        </Container>
      </section>

      {/* CTA final */}
      <section className="border-t border-accent/20 bg-ink py-20 md:py-28">
        <Container>
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="h-px w-16 bg-accent" aria-hidden="true" />
              <h2 className="mt-6 max-w-xl text-3xl font-bold text-paper text-balance md:text-4xl">
                Avant de décider, sachez où vous en êtes vraiment.
              </h2>
              <p className="mt-4 max-w-lg text-paper/75">
                Diagnostic, structuration, transformation, pilotage : le point de départ est toujours le même,
                comprendre la réalité avant d&apos;agir.
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
