"use client";
import { useEffect, useState } from "react";

export default function PWAUpdatePrompt() {
  const [pending, setPending] = useState(false);
  const [worker, setWorker] = useState<ServiceWorker | null>(null);

  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    const checkForUpdate = async () => {
      try {
        const reg = await navigator.serviceWorker.getRegistration();
        if (!reg) return;

        // Forzar chequeo inmediato al montar
        reg.update().catch(() => {});

        // Detectar nuevo worker esperando
        const handleWaiting = () => {
          if (reg.waiting) {
            setWorker(reg.waiting);
            setPending(true);
          }
        };

        if (reg.waiting) handleWaiting();
        reg.addEventListener("updatefound", () => {
          const installing = reg.installing;
          if (!installing) return;
          installing.addEventListener("statechange", () => {
            if (installing.state === "installed" && navigator.serviceWorker.controller) {
              setWorker(installing);
              setPending(true);
            }
          });
        });
      } catch {}
    };

    checkForUpdate();

    // También detectar cuando el controller cambia (activación del nuevo SW)
    const onControllerChange = () => {
      // Si hay un cambio de controller es porque ya se activó — recargar silencioso
      window.location.reload();
    };

    // Sólo recargar automáticamente si ya había un controller previo
    const prevController = navigator.serviceWorker.controller;
    if (prevController) {
      navigator.serviceWorker.addEventListener("controllerchange", onControllerChange);
    }

    // Chequear actualizaciones cada 60 segundos mientras la app está abierta
    const interval = setInterval(async () => {
      try {
        const reg = await navigator.serviceWorker.getRegistration();
        reg?.update().catch(() => {});
      } catch {}
    }, 60_000);

    return () => {
      navigator.serviceWorker.removeEventListener("controllerchange", onControllerChange);
      clearInterval(interval);
    };
  }, []);

  const applyUpdate = () => {
    if (worker) {
      // Decirle al SW en espera que tome el control ahora
      worker.postMessage({ type: "SKIP_WAITING" });
    }
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
