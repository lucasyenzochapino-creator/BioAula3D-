import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bio-dark text-slate-100 flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-sm">
        <div className="text-7xl font-bold text-slate-700 mb-2">404</div>
        <h1 className="text-xl font-semibold text-slate-200 mb-2">Página no encontrada</h1>
        <p className="text-sm text-slate-500 mb-8">
          El recurso que buscás no existe o fue movido.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium rounded-xl transition-colors"
        >
          ← Volver al inicio
        </Link>
      </div>
    </div>
  );
}
