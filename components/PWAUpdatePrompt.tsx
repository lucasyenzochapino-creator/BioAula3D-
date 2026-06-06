"use client";
import { useEffect, useState } from "react";

export default function PWAUpdatePrompt() {
  const [pending, setPending] = useState(false);

  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    const register = async () => {
      try {
        const reg = await navigator.serviceWorker.getRegistration();
        if (!reg) return;

        // Forzar chequeo al montar
        reg.update().catch(() => {});

        // SW ya esperando al cargar la página
        if (reg.waiting) {
          setPending(true);
          return;
        }

        // Nuevo SW encontrado durante la sesión
        reg.addEventListener("updatefound", () => {
          const sw = reg.installing;
          if (!sw) return;
          sw.addEventListener("statechange", () => {
            if (sw.state === "installed") {
              setPending(true);
            }
          });
        });

        // SW activado en background (skipWaiting automático) → mostrar cartel igual
        navigator.serviceWorker.addEventListener("controllerchange", () => {
          setPending(true);
        });

      } catch {}
    };

    register();

    const interval = setInterval(async () => {
      try {
        const reg = await navigator.serviceWorker.getRegistration();
        reg?.update().catch(() => {});
      } catch {}
    }, 60_000);

    return () => clearInterval(interval);
  }, []);

  const applyUpdate = () => {
    window.location.reload();
  };

  if (!pending) return null;

  return (
    <div
      className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-4 py-3 rounded-xl shadow-2xl text-sm w-[calc(100%-32px)] max-w-sm"
      style={{
        background: "#1D2025",
        border: "1px solid #2A2F38",
        color: "#E8EAF0",
      }}
    >
      <span className="text-base">🔄</span>
      <div className="flex-1 min-w-0">
        <div className="font-semibold text-[13px] text-[#E8EAF0]">Nueva versión disponible</div>
        <div className="text-[11px] text-[#5C6472] mt-0.5">Actualizá para ver los cambios</div>
      </div>
      <button
        onClick={applyUpdate}
        className="flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-semibold text-white transition-all"
        style={{ background: "#4A7FA5" }}
      >
        Actualizar
      </button>
      <button
        onClick={() => setPending(false)}
        className="flex-shrink-0 text-[#5C6472] hover:text-[#9BA3B2] transition-colors text-base leading-none"
      >
        ✕
      </button>
    </div>
  );
}
