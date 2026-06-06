"use client";
import { useEffect } from "react";

export default function PWAUpdatePrompt() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    // Cuando el nuevo SW toma control, recargar inmediatamente para
    // obtener el HTML más reciente desde la red.
    const handleControllerChange = () => window.location.reload();
    navigator.serviceWorker.addEventListener("controllerchange", handleControllerChange);

    // Forzar chequeo de actualización al cargar la página
    navigator.serviceWorker.getRegistration().then(reg => {
      reg?.update().catch(() => {});
    });

    return () => {
      navigator.serviceWorker.removeEventListener("controllerchange", handleControllerChange);
    };
  }, []);

  return null;
}
