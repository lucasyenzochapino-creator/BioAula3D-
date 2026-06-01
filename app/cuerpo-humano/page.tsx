"use client";
import dynamic from "next/dynamic";

const CuerpoHumanoViewer = dynamic(() => import("@/components/CuerpoHumanoViewer"), { ssr: false });

export default function CuerpoHumanoPage() {
  return <CuerpoHumanoViewer />;
}
