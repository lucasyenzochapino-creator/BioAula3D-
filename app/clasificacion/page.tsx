import dynamic from "next/dynamic";

export const metadata = { title: "Clasificación de Seres Vivos | BioAula3D" };

const ClasificacionViewer = dynamic(
  () => import("@/components/ClasificacionViewer"),
  { ssr: false }
);

export default function ClasificacionPage() {
  return <ClasificacionViewer />;
}
