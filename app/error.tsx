"use client";
import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-bio-dark text-slate-100 flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-sm">
        <div className="text-7xl font-bold text-slate-700 mb-2">!</div>
        <h1 className="text-xl font-semibold text-slate-200 mb-2">Algo salió mal</h1>
        <p className="text-sm text-slate-500 mb-8">
          Ocurrió un error inesperado. Podés intentar de nuevo o volver al inicio.
        </p>
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={reset}
            className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium rounded-xl transition-colors"
          >
            Intentar de nuevo
          </button>
          <Link
            href="/"
            className="px-5 py-2.5 bg-slate-700 hover:bg-slate-600 text-slate-200 text-sm font-medium rounded-xl transition-colors"
          >
            Inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
