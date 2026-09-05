import { ReactNode } from "react";
import Container from "./Container";

type Tone = "paper" | "raised" | "ink" | "deep";

const toneClasses: Record<Tone, string> = {
  paper: "bg-paper text-ink",
  raised: "bg-paper-raised text-ink",
  ink: "bg-ink text-paper",
  deep: "bg-deep text-paper",
};

export default function Section({
  children,
  className = "",
  tone = "paper",
  as: As = "section",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: Tone;
  as?: "section" | "div";
  id?: string;
}) {
  return (
    <As id={id} className={`${toneClasses[tone]} py-20 md:py-28 ${className}`}>
      <Container>{children}</Container>
    </As>
  );
}

export function Kicker({ children, invert = false }: { children: ReactNode; invert?: boolean }) {
  return (
    <p className={`font-mono text-xs font-bold uppercase tracking-[0.18em] ${invert ? "text-accent-loud" : "text-ink-soft"}`}>
      {children}
    </p>
  );
}
