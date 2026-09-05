"use client";

import { useEffect } from "react";
import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center bg-paper-raised">
      <Container className="py-24">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-signal">Erreur</p>
        <h1 className="mt-4 font-display text-4xl md:text-6xl">Une erreur est survenue</h1>
        <p className="mt-5 max-w-lg text-lg text-ink-soft">
          Quelque chose s&apos;est mal passé de notre côté. Vous pouvez réessayer, ou nous contacter directement si le
          problème persiste.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center rounded-sm bg-ink px-6 py-3 text-sm font-medium text-paper hover:bg-ink/85"
          >
            Réessayer
          </button>
          <Button href="/contact" variant="secondary">
            Nous contacter
          </Button>
        </div>
      </Container>
    </div>
  );
}
