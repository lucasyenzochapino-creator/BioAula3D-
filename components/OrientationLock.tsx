"use client";
import { useEffect } from "react";

export default function OrientationLock() {
  useEffect(() => {
    // Lock to portrait in PWA/standalone mode — overrides any cached manifest orientation.
    // Fails silently in regular browser tabs and on iOS; the OS handles rotation there.
    (screen.orientation as any)?.lock?.("portrait").catch(() => {});
  }, []);
  return null;
}
