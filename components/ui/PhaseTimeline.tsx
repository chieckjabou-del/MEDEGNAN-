import type { CorePhase } from "@/lib/content/methodology";

export default function PhaseTimeline({ phases }: { phases: CorePhase[] }) {
  return (
    <ol className="grid gap-px overflow-hidden border border-line bg-line md:grid-cols-4">
      {phases.map((phase) => (
        <li key={phase.code} className="flex flex-col bg-paper p-6">
          <span className="font-mono text-xs uppercase tracking-wide text-accent">
            {phase.code} · {phase.window}
          </span>
          <h3 className="mt-3 font-display text-xl">{phase.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{phase.objective}</p>
          <ul className="mt-4 flex flex-col gap-1.5 border-t border-line-soft text-sm text-ink-soft">
            {phase.focus.map((f) => (
              <li key={f} className="border-b border-line-soft py-1.5 last:border-b-0">
                {f}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ol>
  );
}
