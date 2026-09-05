import Link from "next/link";
import type { CaseStudyRecord } from "@/lib/content/case-studies";

export default function CaseStudyCard({ study }: { study: CaseStudyRecord }) {
  return (
    <Link
      href={`/etudes-de-cas/${study.slug}`}
      className="group block border border-line bg-paper p-6 transition-colors hover:border-ink/40 md:p-8"
    >
      <div className="flex items-center justify-between gap-4 text-xs font-mono uppercase tracking-wide text-ink-faint">
        <span>{study.sector}</span>
        <span>{study.region}</span>
      </div>
      <h3 className="mt-4 font-display text-xl md:text-2xl text-balance">{study.headline}</h3>
      {study.metric && (
        <p className="mt-3 font-mono text-2xl tabular text-accent">{study.metric.value}</p>
      )}
      {study.metric && <p className="text-xs text-ink-faint">{study.metric.label}</p>}
      <p className="mt-4 text-sm leading-relaxed text-ink-soft">{study.problem}</p>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-ink underline decoration-accent decoration-2 underline-offset-4 group-hover:text-accent">
        Lire l&apos;étude de cas →
      </span>
    </Link>
  );
}
