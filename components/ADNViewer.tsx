"use client";
export default function ADNViewer() {
  return (
    <iframe
      src="/viewers/adn.html"
      style={{ width: "100%", height: "calc(100vh - 3.5rem)", border: "none", display: "block" }}
      title="ADN Doble Hélice 3D"
    />
  );
}
