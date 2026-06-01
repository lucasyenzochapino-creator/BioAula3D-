"use client";
export default function PlantaViewer() {
  return (
    <iframe
      src="/viewers/planta.html"
      style={{ width: "100%", height: "calc(100vh - 3.5rem)", border: "none", display: "block" }}
      title="Célula Vegetal 3D"
    />
  );
}
