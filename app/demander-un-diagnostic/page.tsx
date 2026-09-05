import type { Metadata } from "next";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/ui/PageHero";
import Section from "@/components/ui/Section";
import QualificationForm from "@/components/forms/QualificationForm";

export const metadata: Metadata = {
  title: "Demander un diagnostic",
  description: "Décrivez votre situation en quelques questions pour démarrer une conversation avec MEDEGNAN CONSULTING.",
};

export default function DemanderDiagnosticPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Demander un diagnostic" }]} />
      <PageHero
        kicker="Première étape"
        title="Commençons par comprendre votre situation"
        lead="Quelques questions rapides, puis quelques précisions si vous le souhaitez. Un consultant MEDEGNAN vous répond directement — aucun formulaire automatisé ne remplace la conversation qui suit."
      />
      <Section tone="paper">
        <div className="mx-auto max-w-2xl">
          <QualificationForm />
        </div>
      </Section>
    </>
  );
}
