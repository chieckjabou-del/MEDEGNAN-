import type { Testimonial } from "@/lib/content/testimonials";

export default function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <div className={`grid gap-6 ${items.length >= 3 ? "md:grid-cols-3" : "md:grid-cols-2"}`}>
      {items.map((t) => (
        <figure key={t.name} className="flex flex-col border border-line bg-paper p-6 md:p-8">
          <blockquote className="flex-1 text-[1.05rem] leading-relaxed text-ink-soft text-pretty">
            &laquo;&nbsp;{t.quote}&nbsp;&raquo;
          </blockquote>
          <figcaption className="mt-6 border-t border-line-soft pt-4">
            <p className="font-bold text-ink">{t.name}</p>
            <p className="text-sm text-ink-soft">
              {t.role}, {t.organization}
            </p>
            <p className="mt-1 font-mono text-xs uppercase tracking-wide text-ink-faint">
              {t.sector} · {t.location}
            </p>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
