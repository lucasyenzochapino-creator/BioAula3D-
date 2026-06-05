"use client";
import { useEffect } from "react";

export default function OrientationLock() {
  useEffect(() => {
    // Lock to portrait in PWA/fullscreen mode (Android Chrome).
    // Fails silently in regular browser tabs and on iOS — that's expected.
    (screen.orientation as any)?.lock?.("portrait").catch(() => {});
  }, []);
  return null;
}
