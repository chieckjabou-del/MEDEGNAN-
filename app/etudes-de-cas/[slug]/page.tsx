import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Section, { Kicker } from "@/components/ui/Section";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { caseStudies } from "@/lib/content/case-studies";

export function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/etudes-de-cas/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return {};
  return {
    title: study.headline,
    description: study.problem,
  };
}

const steps: { key: keyof typeof caseStudies[number]; label: string }[] = [
  { key: "problem", label: "Problème" },
  { key: "diagnostic", label: "Diagnostic" },
  { key: "decision", label: "Décision" },
  { key: "intervention", label: "Intervention" },
  { key: "result", label: "Résultat" },
];

export default async function CaseStudyPage({ params }: PageProps<"/etudes-de-cas/[slug]">) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  return (
    <>
      <Breadcrumbs items={[{ label: "Études de cas", href: "/etudes-de-cas" }, { label: study.sector }]} />

      <div className="border-b border-line bg-paper-raised py-16 md:py-24">
        <Container>
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-wide text-ink-faint">
            <span>{study.sector}</span>
            <span aria-hidden="true">·</span>
            <span>{study.region}</span>
            <span aria-hidden="true">·</span>
            <span>{study.status}</span>
          </div>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] text-balance md:text-5xl">
            {study.headline}
          </h1>
          <p className="mt-4 max-w-2xl text-ink-soft">{study.scale}</p>
          {study.metric && (
            <p className="mt-6 font-mono text-3xl tabular text-accent">{study.metric.value}</p>
          )}
          {study.metric && <p className="text-sm text-ink-faint">{study.metric.label}</p>}
        </Container>
      </div>

      <Section tone="paper">
        <div className="flex flex-col gap-10">
          {steps.map((step, i) => (
            <div key={step.key} className="grid gap-4 md:grid-cols-[10rem_1fr] md:gap-10">
              <div className="flex items-baseline gap-3 md:flex-col md:items-start md:gap-1">
                <span className="font-mono text-xs text-accent">0{i + 1}</span>
                <Kicker>{step.label}</Kicker>
              </div>
              <p className="max-w-2xl text-lg leading-relaxed text-ink-soft text-pretty">
                {study[step.key] as string}
              </p>
            </div>
          ))}
        </div>

        {study.resultCaveat && (
          <p className="mt-10 max-w-2xl border-l-2 border-accent bg-paper-raised p-4 text-sm text-ink-soft">
            {study.resultCaveat}
          </p>
        )}

        <div className="mt-14 flex flex-wrap gap-4 border-t border-line pt-10">
          <Button href="/demander-un-diagnostic">Demander un diagnostic similaire</Button>
          <Button href="/etudes-de-cas" variant="secondary">
            Voir les autres études de cas
          </Button>
        </div>
      </Section>
    </>
  );
}
