"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen bg-bio-dark flex items-center justify-center p-4">
      <div className="max-w-sm w-full text-center">
        <div className="text-7xl mb-6">🧬</div>
        <h1 className="text-2xl font-bold text-white mb-3">Algo salió mal</h1>
        <p className="text-slate-400 text-sm mb-8">
          {error.message || "Ocurrió un error inesperado. Intentá de nuevo."}
        </p>
        <button
          onClick={reset}
          className="px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl transition-colors text-sm"
        >
          Intentar de nuevo
        </button>
      </div>
    </div>
  );
}
