import dynamic from "next/dynamic";

export const metadata = { title: "Evolución | BioAula3D" };

const EvolucionViewer = dynamic(
  () => import("@/components/EvolucionViewer"),
  { ssr: false }
);

export default function EvolucionPage() {
  return <EvolucionViewer />;
}
