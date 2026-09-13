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
    <div className="bg-ink py-16 md:py-24">
      <Container>
        <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-accent">{kicker}</p>
        <div className="mt-4 h-px w-16 bg-accent" aria-hidden="true" />
        <h1 className="display-lg mt-6 max-w-[20ch] font-bold text-paper text-balance">
          {title}
        </h1>
        {lead && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/85 text-pretty">{lead}</p>}
        {children}
      </Container>
    </div>
  );
}
