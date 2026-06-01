"use client";
import dynamic from "next/dynamic";

const PlantaViewer = dynamic(() => import("@/components/PlantaViewer"), { ssr: false });

export default function PlantaPage() {
  return <PlantaViewer />;
}
