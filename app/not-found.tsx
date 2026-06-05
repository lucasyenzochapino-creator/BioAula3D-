import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bio-dark flex items-center justify-center p-4">
      <div className="max-w-sm w-full text-center">
        <div className="text-7xl mb-6">🔬</div>
        <h1 className="text-6xl font-bold text-white mb-3">404</h1>
        <p className="text-slate-400 mb-2 text-lg">Página no encontrada</p>
        <p className="text-slate-500 text-sm mb-8">
          El recurso que buscás no existe o fue movido.
        </p>
        <Link
          href="/"
          className="inline-block px-6 py-3 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-xl transition-colors text-sm"
        >
          ← Volver al inicio
        </Link>
      </div>
    </div>
  );
}
