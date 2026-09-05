import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import ResourceEmptyState from "@/components/ui/ResourceEmptyState";
import { resourceCategories } from "@/lib/content/resources";

const category = resourceCategories.find((c) => c.slug === "etudes")!;

export const metadata: Metadata = { title: category.name, description: category.description };

export default function Page() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Ressources", href: "/ressources" }, { label: category.name }]} />
      <PageHero kicker="Ressources" title={category.name} lead={category.description} />
      <Section tone="paper">
        <ResourceEmptyState />
      </Section>
    </>
  );
}
