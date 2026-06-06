"use client";
import { useEffect } from "react";

export default function OrientationLock() {
  useEffect(() => {
    // Lock to portrait in PWA/fullscreen mode (Android Chrome).
    // In regular browser tabs and iOS this fails silently — the OS handles rotation normally.
    (screen.orientation as any)?.lock?.("portrait").catch(() => {});
  }, []);
  return null;
}
