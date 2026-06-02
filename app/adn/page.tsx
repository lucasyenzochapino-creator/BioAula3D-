"use client";
import dynamic from "next/dynamic";

const ADNViewer = dynamic(() => import("@/components/ADNViewer"), { ssr: false });

export default function ADNPage() {
  return <ADNViewer />;
}
