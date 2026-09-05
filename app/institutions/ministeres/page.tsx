import type { Metadata } from "next";
import InstitutionSegmentPage from "@/components/ui/InstitutionSegmentPage";
import { institutionSegments } from "@/lib/content/institutions";

export const metadata: Metadata = {
  title: "Ministères",
  description: "Appui méthodologique aux directions techniques pour structurer une réforme ou un programme sectoriel.",
};

export default function Page() {
  return <InstitutionSegmentPage segment={institutionSegments.find((s) => s.slug === "ministeres")!} />;
}
