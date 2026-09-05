import type { Metadata } from "next";
import InstitutionSegmentPage from "@/components/ui/InstitutionSegmentPage";
import { institutionSegments } from "@/lib/content/institutions";

export const metadata: Metadata = {
  title: "Fonds & investisseurs",
  description: "Diagnostic indépendant d'entreprises en portefeuille et structuration pré-investissement.",
};

export default function Page() {
  return <InstitutionSegmentPage segment={institutionSegments.find((s) => s.slug === "fonds-investisseurs")!} />;
}
