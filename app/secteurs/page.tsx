import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionBanner from "@/components/ui/SectionBanner";
import { Button } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import MotsReveles from "@/components/ui/MotsReveles";
import { positionSectorielle, famillesSectorielles } from "@/lib/content/secteurs";
import { logiquesEconomiques, modulateurs, metiersFormules, chiffresTaxonomie } from "@/lib/content/taxonomie";

export const metadata: Metadata = {
  title: "Secteurs couverts",
  description:
    "MEDEGNAN CONSULTING intervient dans tous les secteurs d'activité. Trente-cinq familles cartographiées, six logiques économiques et dix modulateurs qui permettent d'absorber un métier jamais rencontré.",
};

export default function SecteursPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Secteurs" }]} />
      <PageHero
        kicker="Périmètre"
        title="Tous secteurs, et ce n'est pas une facilité de langage"
        lead="Un cabinet qui publie la liste des métiers qu'il connaît annonce en creux ceux qu'il refuse. Nous publions l'inverse : la façon dont un métier jamais rencontré entre quand même dans la méthode."
      >
        <Button href="/demander-un-diagnostic" variant="accent" className="mt-8">
          Parler de votre activité
        </Button>
      </PageHero>

      {/* La position */}
      <Section tone="paper" className="!py-0">
        <SectionBanner
          label="La position"
          title="Notre catégorie n'est pas un secteur"
          tone="navy"
          className="-mx-6 md:-mx-10"
        />
        <div className="py-10 pb-20 md:pb-28">
          <p className="max-w-3xl text-lg leading-relaxed text-ink">{positionSectorielle.phrase}</p>
          <p className="mt-5 max-w-3xl leading-relaxed text-ink-soft">{positionSectorielle.pourquoi}</p>
          <div className="mt-8 max-w-3xl border-l-2 border-analyse pl-6">
            <p className="leading-relaxed text-ink-soft">{positionSectorielle.epreuve}</p>
          </div>
        </div>
      </Section>

      {/* Le moteur : six logiques */}
      <Section tone="raised" className="!py-0">
        <SectionBanner
          label="Le moteur, premier étage"
          title="Six façons dont la valeur naît"
          tone="teal"
          className="-mx-6 md:-mx-10"
        />
        <div className="py-10 pb-20 md:pb-28">
          <p className="max-w-2xl leading-relaxed text-ink-soft">
            Avant de regarder le métier, on établit d&apos;où vient l&apos;argent. Une mine et une boulangerie
            transforment toutes deux une matière : elles se diagnostiquent avec la même grille de départ, et ce sont
            leurs contraintes qui diffèrent, pas leur logique.
          </p>
          <ol className="mt-10 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
            {logiquesEconomiques.map((l, i) => (
              <Reveal as="li" key={l.code} delay={i * 70} className="bg-paper p-6">
                <span className="font-mono text-xs font-bold tracking-[0.16em] text-analyse-text">{l.code}</span>
                <h3 className="mt-3 text-xl font-bold">{l.libelle}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">
                  La valeur naît de {l.valeurNaitDe}.
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      {/* Le moteur : dix modulateurs */}
      <Section tone="paper" className="!py-0">
        <SectionBanner
          label="Le moteur, second étage"
          title="Dix contraintes qui se combinent"
          tone="violet"
          className="-mx-6 md:-mx-10"
        />
        <div className="py-10 pb-20 md:pb-28">
          <p className="max-w-2xl leading-relaxed text-ink-soft">
            C&apos;est par elles que la méthode absorbe un métier qu&apos;elle n&apos;a jamais vu. On ne cherche pas
            la case du métier dans un catalogue : on compose sa formule.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3">
            {modulateurs.map((m) => (
              <li key={m.code} className="flex items-center gap-3 border border-ink/20 px-4 py-2.5 text-sm">
                <span className="font-mono text-xs font-bold text-offre">{m.code}</span>
                {m.libelle}
              </li>
            ))}
          </ul>

          <div className="mt-12 max-w-3xl border-l-2 border-offre pl-6">
            <p className="font-bold text-ink">Une officine pharmaceutique s&apos;écrit L2 + M1 + M2 + M4.</p>
            <p className="mt-3 leading-relaxed text-ink-soft">
              Négoce, parce que sa valeur naît d&apos;un écart entre achat et revente. Prix administré, parce
              qu&apos;elle ne fixe pas ses marges. Périssable, parce que ses stocks ont une date. Réglementé, parce
              qu&apos;elle exerce sous licence. Quatre contraintes, et le diagnostic sait déjà où regarder avant
              d&apos;entrer.
            </p>
          </div>
        </div>
      </Section>

      {/* Les trente-cinq familles */}
      <Section tone="raised" className="!py-0">
        <SectionBanner
          label={`Cartographie indicative, ${chiffresTaxonomie.familles} familles`}
          title="Où se reconnaître, sans y être enfermé"
          tone="acier"
          className="-mx-6 md:-mx-10"
        />
        <div className="py-10 pb-20 md:pb-28">
          <ol className="grid gap-px overflow-hidden border border-line bg-line md:grid-cols-2 xl:grid-cols-3">
            {famillesSectorielles.map((f, i) => {
              const code = `S${String(i + 1).padStart(2, "0")}`;
              const metiers = metiersFormules[code];
              return (
                <Reveal as="li" key={f.nom} delay={Math.min(i, 12) * 30} className="flex flex-col bg-paper p-5">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs font-bold text-ink-faint">{code}</span>
                    <h3 className="font-bold text-ink text-balance">{f.nom}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{f.exemples}</p>
                  {metiers && (
                    <p className="mt-auto pt-4 text-xs leading-relaxed text-ink-faint">
                      Métier déjà formulé :{" "}
                      {metiers.map((m) => (
                        <span key={m.metier}>
                          <span className="font-medium text-ink-soft">{m.metier}</span>{" "}
                          <span className="font-mono">{m.formule}</span>
                        </span>
                      ))}
                    </p>
                  )}
                </Reveal>
              );
            })}
          </ol>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-ink-faint">
            Onze métiers portent aujourd&apos;hui une formule arrêtée et vérifiée en mission. Les autres familles ne
            sont pas moins couvertes : leur formule se compose au cas par cas, à partir des six logiques et des dix
            modulateurs. Cette cartographie est indicative, jamais limitative. Une activité qui n&apos;y figure pas
            n&apos;est pas une activité refusée : c&apos;est une activité que la cartographie n&apos;a pas encore
            nommée.
          </p>
        </div>
      </Section>

      <section className="border-t border-accent/20 bg-ink py-20 md:py-28">
        <div className="mx-auto w-full max-w-(--container-content) px-6 md:px-10">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="h-px w-16 bg-accent" aria-hidden="true" />
              <Reveal as="h2" className="display-md mt-6 max-w-xl font-bold text-paper text-balance">
                <MotsReveles texte="Dites-nous ce que vous faites. Nous saurons par où commencer." />
              </Reveal>
              <p className="mt-4 max-w-lg text-paper/75">
                Même si votre activité ne ressemble à aucune de ces familles. C&apos;est précisément le cas que la
                méthode est faite pour traiter.
              </p>
            </div>
            <Button href="/demander-un-diagnostic" variant="accent">
              Parler de votre activité
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
