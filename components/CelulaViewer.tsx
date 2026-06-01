"use client";
export default function CelulaViewer() {
  return (
    <iframe
      src="/viewers/celula.html"
      style={{ width: "100%", height: "calc(100vh - 3.5rem)", border: "none", display: "block" }}
      title="Célula Animal 3D"
    />
  );
}
