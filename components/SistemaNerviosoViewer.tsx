"use client";
export default function SistemaNerviosoViewer() {
  return (
    <iframe
      src="/viewers/nervioso.html"
      style={{ width: "100%", height: "calc(100vh - 3.5rem)", border: "none", display: "block" }}
      title="Neurona 3D"
    />
  );
}
