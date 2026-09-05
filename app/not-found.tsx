import Link from "next/link";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center bg-paper-raised">
      <Container className="py-24">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-ink-soft">Erreur 404</p>
        <h1 className="mt-4 font-display text-4xl md:text-6xl">Cette page n&apos;existe pas</h1>
        <p className="mt-5 max-w-lg text-lg text-ink-soft">
          La page que vous cherchez a peut-être été déplacée ou n&apos;a jamais existé. Voici où repartir :
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/">Retour à l&apos;accueil</Button>
          <Button href="/contact" variant="secondary">
            Nous contacter
          </Button>
        </div>
        <p className="mt-10 text-sm text-ink-faint">
          Vous cherchiez peut-être :{" "}
          <Link href="/solutions" className="underline decoration-accent decoration-2 underline-offset-4 hover:text-accent-hover">
            Solutions
          </Link>
          ,{" "}
          <Link href="/methodologie" className="underline decoration-accent decoration-2 underline-offset-4 hover:text-accent-hover">
            Méthodologie
          </Link>
          , ou{" "}
          <Link href="/etudes-de-cas" className="underline decoration-accent decoration-2 underline-offset-4 hover:text-accent-hover">
            Études de cas
          </Link>
          .
        </p>
      </Container>
    </div>
  );
}
