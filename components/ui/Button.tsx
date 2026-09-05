import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "accent" | "onDark";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-accent";

const variants: Record<Variant, string> = {
  primary: "bg-ink text-paper hover:bg-ink/85",
  secondary: "border border-ink/30 text-ink hover:border-ink hover:bg-ink/5",
  ghost: "text-ink underline decoration-accent decoration-2 underline-offset-4 hover:text-accent",
  // Pour un bouton posé sur un fond sombre (bandeau ou page de garde navy).
  accent: "bg-accent text-ink hover:bg-accent-hover",
  onDark: "border border-paper/40 text-paper hover:bg-paper/10",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
