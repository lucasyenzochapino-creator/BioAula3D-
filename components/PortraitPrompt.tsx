"use client";

export default function PortraitPrompt() {
  return (
    <div
      style={{
        display: "none",
        position: "fixed",
        inset: 0,
        background: "#0b1120",
        zIndex: 99999,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "1.25rem",
        padding: "2rem",
        textAlign: "center",
      }}
      className="portrait-prompt"
    >
      <span style={{ fontSize: "3.5rem", lineHeight: 1 }}>📱</span>
      <p style={{ color: "#e2e8f0", fontSize: "1.1rem", fontWeight: 700, maxWidth: "260px" }}>
        Girá tu teléfono a modo vertical
      </p>
      <p style={{ color: "#4A5260", fontSize: "0.85rem", maxWidth: "240px" }}>
        BioAula3D funciona en modo vertical (portrait)
      </p>
    </div>
  );
}
