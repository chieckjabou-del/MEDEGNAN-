export default function MetricRange({
  label,
  axisMax,
  axisUnit,
  before,
  beforeLabel,
  targetMin,
  targetMax,
  targetLabel,
}: {
  label: string;
  axisMax: number;
  axisUnit: string;
  before: number;
  beforeLabel: string;
  targetMin: number;
  targetMax: number;
  targetLabel: string;
}) {
  const pct = (v: number) => (v / axisMax) * 100;

  return (
    <div className="mt-4 max-w-md">
      <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wide text-ink-faint">
        <span>{label}</span>
        <span>
          0–{axisMax} {axisUnit}
        </span>
      </div>
      <div className="relative mt-4 h-1.5 rounded-full bg-line" aria-hidden="true">
        <div
          className="absolute top-1/2 h-1.5 -translate-y-1/2 rounded-full bg-accent-hover"
          style={{ left: `${pct(targetMin)}%`, width: `${pct(targetMax) - pct(targetMin)}%` }}
        />
        <div
          className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-ink-faint bg-paper"
          style={{ left: `calc(${pct(before)}% - 6px)` }}
        />
      </div>
      <div className="mt-3 flex flex-wrap justify-between gap-x-6 gap-y-1 text-sm">
        <span className="text-ink-soft">
          Avant : <strong className="font-bold text-ink">{beforeLabel}</strong>
        </span>
        <span className="text-ink-soft">
          Objectif : <strong className="font-bold text-accent-hover">{targetLabel}</strong>
        </span>
      </div>
    </div>
  );
}
