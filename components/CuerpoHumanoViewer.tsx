"use client";
export default function CuerpoHumanoViewer() {
  return (
    <iframe
      src="/viewers/cuerpo.html"
      style={{ width: "100%", height: "calc(100vh - 3.5rem)", border: "none", display: "block" }}
      title="Cuerpo Humano 3D"
    />
  );
}
