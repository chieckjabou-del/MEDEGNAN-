import type { Metadata } from "next";
import InstitutionSegmentPage from "@/components/ui/InstitutionSegmentPage";
import { institutionSegments } from "@/lib/content/institutions";

export const metadata: Metadata = {
  title: "Banques & institutions financières",
  description: "Diagnostic de dossiers clients et structuration de PME en vue d'un financement.",
};

export default function Page() {
  return <InstitutionSegmentPage segment={institutionSegments.find((s) => s.slug === "banques")!} />;
}
