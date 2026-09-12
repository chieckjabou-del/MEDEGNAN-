import Link from "next/link";
import type { CaseStudyRecord } from "@/lib/content/case-studies";

export default function CaseStudyCard({ study }: { study: CaseStudyRecord }) {
  return (
    <Link
      href={`/etudes-de-cas/${study.slug}`}
      className="group block border border-line bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:border-ink/40 hover:shadow-[0_10px_30px_-18px_rgba(13,33,55,0.55)] motion-reduce:hover:translate-y-0 md:p-8"
    >
      <div className="flex items-center justify-between gap-4 text-xs font-mono uppercase tracking-wide text-ink-faint">
        <span>{study.sector}</span>
        <span>{study.region}</span>
      </div>
      <h3 className="mt-4 font-display text-xl md:text-2xl text-balance">{study.headline}</h3>
      {study.metric && (
        <p className="mt-3 font-mono text-2xl text-accent-hover">{study.metric.value}</p>
      )}
      {study.metric && <p className="text-xs text-ink-faint">{study.metric.label}</p>}
      <p className="mt-4 text-sm leading-relaxed text-ink-soft">{study.problem}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink underline decoration-accent decoration-2 underline-offset-4 group-hover:text-accent-hover">
        Cliquez ici pour lire l&apos;étude de cas
        <span
          aria-hidden="true"
          className="inline-block transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
        >
          →
        </span>
      </span>
    </Link>
  );
}
