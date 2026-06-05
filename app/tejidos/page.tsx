import dynamic from "next/dynamic";

export const metadata = { title: "Tejidos | BioAula3D" };

const TejidosViewer = dynamic(
  () => import("@/components/TejidosViewer"),
  { ssr: false }
);

export default function TejidosPage() {
  return <TejidosViewer />;
}
