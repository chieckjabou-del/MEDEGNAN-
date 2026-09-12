import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import SectionBanner from "@/components/ui/SectionBanner";
import { Button } from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import { licenceFormulas, networkAxes, licenceStates } from "@/lib/content/network";
import { coreFunctions } from "@/lib/content/methodology";
import { countriesServed } from "@/lib/content/proofs";

export const metadata: Metadata = {
  title: "Rejoindre le réseau",
  description:
    "Devenir consultant sous licence MEDEGNAN : formules Spécialiste et Expert Global, statuts contractuels, grades et parcours de certification.",
};

export default function RejoindreLeReseauPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Rejoindre le réseau" }]} />
      <PageHero
        kicker="Programme partenaire"
        title="Conduire des missions sous licence MEDEGNAN"
        lead="Le réseau compte plus de cinquante consultants répartis sur onze pays. On n'y entre pas en signant : on y entre en se formant, puis en se certifiant."
      >
        <Button href="/contact" variant="accent" className="mt-8">
          Candidater au programme
        </Button>
      </PageHero>

      {/* Ce que le réseau attend */}
      <Section tone="paper" className="!py-0">
        <SectionBanner
          label="Avant les formules"
          title="Trois axes, à ne jamais confondre"
          tone="navy"
          className="-mx-6 md:-mx-10"
        />
        <div className="py-10 pb-20 md:pb-28">
          <p className="max-w-2xl leading-relaxed text-ink-soft">
            Un réseau de conseil se disloque quand le titre commercial, le niveau réel d&apos;autorité et la fonction
            exercée se confondent. Chez MEDEGNAN, ces trois choses sont tenues séparées, et cette séparation est
            opposable.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {networkAxes.map((a, i) => (
              <Reveal key={a.title} delay={i * 100} className="border-t-2 border-processus pt-4">
                <h3 className="text-lg font-bold">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{a.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Les formules de licence */}
      <Section tone="raised" className="!py-0">
        <SectionBanner
          label="Les formules"
          title="Une fonction, trois fonctions, ou les douze"
          tone="violet"
          className="-mx-6 md:-mx-10"
        />
        <div className="py-10 pb-20 md:pb-28">
          <p className="max-w-2xl leading-relaxed text-ink-soft">
            La licence porte sur un périmètre de fonctions, choisi parmi les douze de la méthode CORE. Vous n&apos;êtes
            pas obligé de les couvrir toutes : vous vous engagez sur celles que vous conduisez réellement.
          </p>

          <div className="mt-8 grid gap-px overflow-hidden border border-line bg-line md:grid-cols-3">
            {licenceFormulas.map((f, i) => (
              <Reveal key={f.scope} delay={i * 90} className="flex flex-col bg-paper p-6">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-offre">{f.scope}</p>
                <h3 className="mt-3 text-xl font-bold">{f.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{f.detail}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 max-w-2xl border-l-2 border-offre p-6 pl-6">
            <p className="leading-relaxed text-ink">
              Les conditions financières se traitent en entretien, une fois le périmètre arrêté avec vous. Nous ne les
              affichons pas ici : une licence ne s&apos;achète pas sur une page, elle se décide après un échange.
            </p>
            <Button href="/contact" variant="secondary" className="mt-5">
              Demander les conditions
            </Button>
          </div>

          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-faint">
            Le contrat prévoit également un état dormant, pour un consultant qui suspend temporairement son activité.
          </p>
        </div>
      </Section>

      {/* Le périmètre : les douze fonctions */}
      <Section tone="paper" className="!py-0">
        <SectionBanner
          label="Le périmètre de licence"
          title="Sur quelles fonctions vous engagez-vous"
          tone="teal"
          className="-mx-6 md:-mx-10"
        />
        <div className="py-10 pb-20 md:pb-28">
          <p className="max-w-2xl leading-relaxed text-ink-soft">
            La formule Spécialiste couvre une à trois de ces fonctions. La formule Expert Global les couvre toutes.
          </p>
          <ol className="mt-8 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {coreFunctions.map((f, i) => (
              <Reveal as="li" key={f.code} delay={i * 40} className="flex items-baseline gap-4 bg-paper p-5">
                <span className="font-mono text-sm font-bold text-analyse-text">{f.code}</span>
                <span className="font-medium text-ink">{f.label}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      {/* Le cycle de vie de la licence */}
      <Section tone="raised" className="!py-0">
        <SectionBanner
          label="Le parcours"
          title="De la formation à la licence active"
          tone="acier"
          className="-mx-6 md:-mx-10"
        />
        <div className="py-10 pb-20 md:pb-28">
          <ol className="divide-y divide-line border-y border-line">
            {licenceStates.map((s, i) => (
              <Reveal
                as="li"
                key={s.label}
                delay={i * 60}
                className="grid gap-2 py-5 md:grid-cols-[2.5rem_12rem_1fr] md:items-baseline md:gap-6"
              >
                <span className="font-mono text-sm font-bold text-ink-soft">0{i + 1}</span>
                <span className="font-bold text-ink">{s.label}</span>
                <span className="text-sm leading-relaxed text-ink-soft">{s.detail}</span>
              </Reveal>
            ))}
          </ol>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-faint">
            La certification n&apos;est pas une formalité d&apos;entrée : elle conditionne le droit de conduire une
            mission au nom du cabinet, et elle porte sur la méthode, pas sur l&apos;ancienneté.
          </p>
        </div>
      </Section>

      {/* Où */}
      <Section tone="paper" className="!py-0">
        <SectionBanner
          label="Où le réseau est présent"
          title="Onze pays, et la porte reste ouverte"
          tone="vert"
          className="-mx-6 md:-mx-10"
        />
        <div className="py-10 pb-20 md:pb-28">
          <ul className="flex flex-wrap gap-3">
            {countriesServed.map((c) => (
              <li key={c} className="flex items-center gap-2 border border-ink/20 px-4 py-2 text-sm">
                <Icon name="lieu" size={16} className="shrink-0 text-deep" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <section className="border-t border-accent/20 bg-ink py-20 md:py-28">
        <div className="mx-auto w-full max-w-(--container-content) px-6 md:px-10">
          <div className="flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="h-px w-16 bg-accent" aria-hidden="true" />
              <h2 className="mt-6 max-w-xl text-3xl font-bold text-paper text-balance md:text-4xl">
                Vous conduisez déjà des missions. Conduisez-les sous méthode.
              </h2>
              <p className="mt-4 max-w-lg text-paper/75">
                Dites-nous sur quelles fonctions vous intervenez aujourd&apos;hui, et dans quel pays. Nous vous
                indiquerons la formule adaptée et le parcours de certification correspondant.
              </p>
            </div>
            <Button href="/contact" variant="accent">
              Candidater au programme
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
