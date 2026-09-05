export default function Stat({
  value,
  label,
  detail,
}: {
  value: string;
  label: string;
  detail?: string;
}) {
  return (
    <div className="border-t border-line pt-4">
      <p className="font-display text-4xl md:text-5xl tabular text-ink">{value}</p>
      <p className="mt-1 text-sm font-medium text-ink">{label}</p>
      {detail && <p className="mt-1 text-xs text-ink-faint">{detail}</p>}
    </div>
  );
}
