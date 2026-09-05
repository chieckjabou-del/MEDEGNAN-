import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import { caseStudies } from "@/lib/content/case-studies";

export const metadata: Metadata = {
  title: "Études de cas",
  description: "Missions réelles de MEDEGNAN CONSULTING, anonymisées : problème, diagnostic, décision, intervention, résultat.",
};

export default function EtudesDeCasPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Études de cas" }]} />
      <PageHero
        kicker="Études de cas"
        title="Des missions réelles, anonymisées par respect pour nos clients"
        lead="Chaque étude suit la même trame : problème, diagnostic, décision, intervention, résultat. Les noms et données permettant d'identifier un client sont volontairement retirés ou arrondis."
      />
      <Section tone="paper">
        <div className="grid gap-6 md:grid-cols-2">
          {caseStudies.map((s) => (
            <CaseStudyCard key={s.slug} study={s} />
          ))}
        </div>
      </Section>
    </>
  );
}
