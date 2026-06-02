"use client";
import { useEffect } from "react";

export default function PWAUpdatePrompt() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;

    // Capturamos el SW anterior en el momento del montaje
    const prevController = navigator.serviceWorker.controller;

    const onControllerChange = () => {
      // Solo recargamos si había un SW previo (= actualización real, no primera instalación)
      if (prevController) {
        window.location.reload();
      }
    };

    navigator.serviceWorker.addEventListener("controllerchange", onControllerChange);
    return () => navigator.serviceWorker.removeEventListener("controllerchange", onControllerChange);
  }, []);

  return null;
}
