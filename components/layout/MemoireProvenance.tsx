"use client";

import { useEffect } from "react";
import { memoriserProvenance } from "@/lib/provenance";

/** Garde, à la première page vue, d'où vient la visite (voir lib/provenance.ts). */
export default function MemoireProvenance() {
  useEffect(() => {
    memoriserProvenance();
  }, []);
  return null;
}
