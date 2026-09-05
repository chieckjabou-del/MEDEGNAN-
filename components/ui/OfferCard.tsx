import Link from "next/link";
import type { Offer } from "@/lib/content/offers";

export default function OfferCard({ offer }: { offer: Offer }) {
  return (
    <div className="flex flex-col border border-line bg-paper p-6 md:p-8">
      <span className="font-mono text-xs uppercase tracking-wide text-accent">{offer.category}</span>
      <h3 className="mt-2 font-display text-2xl">{offer.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-ink-soft">{offer.summary}</p>
      <p className="mt-4 text-xs font-medium uppercase tracking-wide text-ink-faint">Pour qui</p>
      <p className="text-sm text-ink-soft">{offer.forWhom}</p>
      <ul className="mt-4 flex flex-col gap-1.5 border-t border-line pt-3 text-sm text-ink-soft">
        {offer.includes.map((i) => (
          <li key={i} className="border-b border-line-soft py-1.5 last:border-b-0">
            {i}
          </li>
        ))}
      </ul>
      {offer.priceRange && (
        <p className="mt-4 font-mono text-sm tabular text-ink">
          {offer.priceRange}
          {offer.priceNote && <span className="block text-xs font-sans text-ink-faint">{offer.priceNote}</span>}
        </p>
      )}
      <Link
        href={offer.cta.href}
        className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-ink underline decoration-accent decoration-2 underline-offset-4 hover:text-accent"
      >
        {offer.cta.label}
      </Link>
    </div>
  );
}
