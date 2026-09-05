import type { Metadata } from "next";
import InstitutionSegmentPage from "@/components/ui/InstitutionSegmentPage";
import { institutionSegments } from "@/lib/content/institutions";

export const metadata: Metadata = {
  title: "États & collectivités",
  description: "Diagnostic de filière et structuration de programmes de développement économique pour États et collectivités.",
};

export default function Page() {
  return <InstitutionSegmentPage segment={institutionSegments.find((s) => s.slug === "etats")!} />;
}
