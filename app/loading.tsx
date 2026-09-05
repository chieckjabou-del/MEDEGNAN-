export default function Loading() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center" role="status" aria-live="polite">
      <span className="font-mono text-xs uppercase tracking-[0.18em] text-ink-faint">Chargement…</span>
    </div>
  );
}
