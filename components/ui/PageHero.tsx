import { ReactNode } from "react";
import Container from "./Container";

export default function PageHero({
  kicker,
  title,
  lead,
  children,
}: {
  kicker: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <div className="border-b border-line bg-paper-raised py-16 md:py-24">
      <Container>
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">{kicker}</p>
        <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] text-balance md:text-6xl">
          {title}
        </h1>
        {lead && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft text-pretty">{lead}</p>}
        {children}
      </Container>
    </div>
  );
}
