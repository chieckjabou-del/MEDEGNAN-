import { Button } from "./Button";
import { resourcesEmptyState } from "@/lib/content/resources";

export default function ResourceEmptyState() {
  return (
    <div className="border border-dashed border-ink/25 bg-paper-raised p-10 text-center md:p-16">
      <h2 className="font-display text-2xl">{resourcesEmptyState.title}</h2>
      <p className="mx-auto mt-3 max-w-md text-ink-soft">{resourcesEmptyState.body}</p>
      <Button href="/contact" variant="secondary" className="mt-6">
        Nous contacter
      </Button>
    </div>
  );
}
