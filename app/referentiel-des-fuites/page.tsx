import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionBanner from "@/components/ui/SectionBanner";
import { Button } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import MotsReveles from "@/components/ui/MotsReveles";
import BarresFonctions from "@/components/ui/BarresFonctions";
import {
  chiffresReferentiel,
  fuitesParFonction,
  fuitesParType,
  fuitesExemples,
  reglesDeChiffrage,
  registreDesCauses,
  canevasProjet,
} from "@/lib/content/referentiel";

export const metadata: Metadata = {
  title: "Le référentiel des fuites de valeur",
  description:
    "Quatre-vingt-quatorze fuites de valeur répertoriées sur douze fonctions, chacune reliée à un protocole de traitement, et un registre de 1 548 cas réels d'échec d'entreprises africaines.",
};

export default function ReferentielPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Référentiel des fuites" }]} />
      <PageHero
        kicker="L'instrument"
        title="Quatre-vingt-quatorze façons de perdre de l'argent sans le voir"
        lead="Une entreprise ne perd presque jamais son argent d'un seul coup. Elle le perd par des fuites répétées, dont la plupart ne se voient dans aucun document comptable. Le cabinet en tient le relevé."
      >
        <Button href="/demander-un-diagnostic" variant="accent" className="mt-8">
          Faire chercher les vôtres
        </Button>
      </PageHero>

      {/* La volumétrie */}
      <Section tone="paper" className="!py-0">
        <SectionBanner
          label="Ce que contient le référentiel"
          title="Rien n'y est laissé sans issue"
          tone="navy"
          className="-mx-6 md:-mx-10"
        />
        <div className="py-10 pb-20 md:pb-28">
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { v: chiffresReferentiel.fuites, l: "fuites répertoriées", d: "Chacune porte un code, une nature et une gravité" },
              { v: chiffresReferentiel.fonctions, l: "fonctions passées au crible", d: "De la stratégie à la conformité, aucune n'est sautée" },
              { v: chiffresReferentiel.liaisons, l: "liaisons vers un protocole", d: "Quinze protocoles exécutables, rattachés un par un" },
              { v: chiffresReferentiel.sansProtocole, l: "fuite sans traitement prévu", d: "Le référentiel ne nomme pas un problème qu'il ne sait pas traiter" },
            ].map((s, i) => (
              <Reveal key={s.l} delay={i * 90} className="border-l-2 border-accent pl-5">
                <p className="font-mono text-5xl font-bold text-deep md:text-6xl">{s.v}</p>
                <p className="mt-3 font-bold text-ink">{s.l}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Répartition par fonction */}
      <Section tone="raised" className="!py-0">
        <SectionBanner
          label="Où ça casse le plus"
          title="Toutes les fonctions fuient, pas toutes avec la même gravité"
          tone="rouge"
          className="-mx-6 md:-mx-10"
        />
        <div className="py-10 pb-20 md:pb-28">
          <p className="max-w-2xl leading-relaxed text-ink-soft">
            Le relevé est réparti presque également : huit fuites par fonction. Ce qui change d&apos;une fonction à
            l&apos;autre, c&apos;est la part de celles qui menacent la survie. La gouvernance et la finance en
            concentrent cinq chacune ; la durabilité, aucune.
          </p>
          <div className="mt-10">
            <BarresFonctions lignes={fuitesParFonction} />
          </div>
        </div>
      </Section>

      {/* Les six natures */}
      <Section tone="paper" className="!py-0">
        <SectionBanner
          label="Six natures, six traitements"
          title="Le remède se déduit de la nature, il ne se choisit pas"
          tone="teal"
          className="-mx-6 md:-mx-10"
        />
        <div className="py-10 pb-20 md:pb-28">
          <p className="max-w-2xl leading-relaxed text-ink-soft">
            Une fuite comportementale ne se corrige pas par un outil, et une fuite systémique ne se corrige pas par
            une note de service. Dans le référentiel, le mode de traitement n&apos;est pas saisi par le consultant :
            il découle de la nature de la fuite, par une règle inscrite dans la base.
          </p>
          <ol className="mt-10 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {fuitesParType.map((t, i) => (
              <Reveal as="li" key={t.type} delay={i * 70} className="bg-paper p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-lg font-bold">{t.type}</h3>
                  <span className="font-mono text-2xl font-bold text-analyse-text">{t.n}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{t.traitement}</p>
              </Reveal>
            ))}
          </ol>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-faint">
            Les huit fuites invisibles sont les seules à ne recevoir aucun mode automatique : elles déclenchent une
            revue humaine obligatoire, parce qu&apos;une perte que personne ne voit ne se traite pas par réflexe.
          </p>
        </div>
      </Section>

      {/* Exemples */}
      <Section tone="raised" className="!py-0">
        <SectionBanner
          label="Sept exemples sur quatre-vingt-quatorze"
          title="Reconnaissez-vous quelque chose ?"
          tone="acier"
          className="-mx-6 md:-mx-10"
        />
        <div className="py-10 pb-20 md:pb-28">
          <ol className="divide-y divide-line border-y border-line">
            {fuitesExemples.map((f, i) => (
              <Reveal
                as="li"
                key={f.code}
                delay={i * 55}
                className="grid gap-1 py-5 md:grid-cols-[4.5rem_1fr_10rem] md:items-baseline md:gap-6"
              >
                <span className="font-mono text-sm font-bold text-signal-text">{f.code}</span>
                <span className="font-medium text-ink">{f.libelle}</span>
                <span className="text-sm text-ink-faint">{f.type}</span>
              </Reveal>
            ))}
          </ol>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-faint">
            Ces sept fuites sont toutes de gravité critique. Les quatre-vingt-sept autres ne sont pas publiées : le
            relevé complet est l&apos;instrument de travail du cabinet, et il se déploie en mission.
          </p>
        </div>
      </Section>

      {/* Les règles de chiffrage */}
      <Section tone="ink" className="!py-0">
        <div className="py-20 md:py-28">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-accent">
            Ce qui sépare un chiffrage d&apos;une estimation
          </p>
          <Reveal as="h2" className="display-md mt-3 max-w-3xl font-bold text-paper text-balance">
            <MotsReveles texte="Aucun montant n'est jamais un pourcentage du chiffre d'affaires." />
          </Reveal>
          <p className="mt-6 max-w-2xl leading-relaxed text-paper/80">
            C&apos;est la règle qui coûte le plus cher à tenir, et c&apos;est celle qui rend un rapport opposable. Un
            cabinet qui annonce que telle fuite représente quinze pour cent de votre chiffre d&apos;affaires n&apos;a
            rien mesuré : il a appliqué une moyenne. Ces quatre règles ne sont pas des consignes affichées dans un
            écran, ce sont des contraintes inscrites dans la base : un montant sans formule et sans pièce ne peut
            physiquement pas être enregistré.
          </p>
          <ol className="mt-12 grid gap-px overflow-hidden bg-paper/15 md:grid-cols-2">
            {reglesDeChiffrage.map((r, i) => (
              <Reveal as="li" key={r.titre} delay={i * 90} className="bg-ink p-6 md:p-8">
                <span className="font-mono text-xs font-bold text-accent">0{i + 1}</span>
                <h3 className="mt-3 text-xl font-bold text-paper text-balance">{r.titre}</h3>
                <p className="mt-3 leading-relaxed text-paper/75">{r.corps}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      {/* Le registre des causes */}
      <Section tone="paper" className="!py-0">
        <SectionBanner
          label="L'autre corpus"
          title="Ce qui a réellement tué les entreprises comme la vôtre"
          tone="violet"
          className="-mx-6 md:-mx-10"
        />
        <div className="py-10 pb-20 md:pb-28">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-16">
            <div className="grid grid-cols-3 gap-6 self-start">
              {[
                { v: registreDesCauses.cas.toLocaleString("fr-FR"), l: "cas réels" },
                { v: registreDesCauses.pays, l: "pays" },
                { v: registreDesCauses.vagues, l: "vagues de collecte" },
              ].map((s, i) => (
                <Reveal key={s.l} delay={i * 90} className="border-t-2 border-offre pt-4">
                  <p className="font-mono text-3xl font-bold text-offre md:text-4xl">{s.v}</p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.l}</p>
                </Reveal>
              ))}
            </div>
            <div>
              <p className="leading-relaxed text-ink">{registreDesCauses.regle}</p>
              <p className="mt-5 leading-relaxed text-ink-soft">{registreDesCauses.portee}</p>
              <div className="mt-8 border-l-2 border-offre pl-6">
                <h3 className="text-lg font-bold">Le canevas de projet</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{canevasProjet.corps}</p>
                <p className="mt-4 text-sm leading-relaxed text-ink-faint">{canevasProjet.limite}</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <section className="border-t border-accent/20 bg-ink py-20 md:py-28">
        <div className="mx-auto w-full max-w-(--container-content) px-6 md:px-10">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="h-px w-16 bg-accent" aria-hidden="true" />
              <Reveal as="h2" className="display-md mt-6 max-w-xl font-bold text-paper text-balance">
                <MotsReveles texte="Vos fuites existent déjà. La question est de savoir lesquelles." />
              </Reveal>
              <p className="mt-4 max-w-lg text-paper/75">
                Le relevé se conduit fonction par fonction, sur pièces. Chaque montant retenu porte sa formule et sa
                source, et ce qui ne peut pas être chiffré est écrit comme tel.
              </p>
            </div>
            <Button href="/demander-un-diagnostic" variant="accent">
              Demander un diagnostic
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
