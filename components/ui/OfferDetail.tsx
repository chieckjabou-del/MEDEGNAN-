import { Button } from "./Button";
import { Kicker } from "./Section";
import type { Offer } from "@/lib/content/offers";

export default function OfferDetail({ offer }: { offer: Offer }) {
  return (
    <div className="border border-line bg-paper p-8 md:p-10">
      <Kicker>{offer.category}</Kicker>
      <h2 className="mt-3 font-display text-2xl md:text-3xl">{offer.name}</h2>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft text-pretty">{offer.summary}</p>
      <div className="mt-6 grid gap-8 md:grid-cols-2">
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-ink-faint">Pour qui</p>
          <p className="mt-2 text-ink-soft">{offer.forWhom}</p>
        </div>
        <div>
          <p className="text-xs font-medium uppercase tracking-wide text-ink-faint">Ce que comprend la mission</p>
          <ul className="mt-2 flex flex-col gap-1.5 text-ink-soft">
            {offer.includes.map((i) => (
              <li key={i} className="flex gap-2">
                <span aria-hidden="true" className="text-accent">
                  —
                </span>
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {offer.priceRange && (
        <p className="mt-6 border-t border-line pt-6 font-mono text-lg tabular">
          {offer.priceRange}
          {offer.priceNote && <span className="mt-1 block text-sm font-sans text-ink-faint">{offer.priceNote}</span>}
        </p>
      )}
      <Button href={offer.cta.href} className="mt-8">
        {offer.cta.label}
      </Button>
    </div>
  );
}
