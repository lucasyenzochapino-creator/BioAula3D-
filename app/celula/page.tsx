"use client";
import dynamic from "next/dynamic";

const CelulaViewer = dynamic(() => import("@/components/CelulaViewer"), { ssr: false });

export default function CelulaPage() {
  return <CelulaViewer />;
}
