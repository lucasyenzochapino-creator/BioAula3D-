"use client";
import dynamic from "next/dynamic";

const SistemaNerviosoViewer = dynamic(() => import("@/components/SistemaNerviosoViewer"), { ssr: false });

export default function SistemaNerviosoPage() {
  return <SistemaNerviosoViewer />;
}
