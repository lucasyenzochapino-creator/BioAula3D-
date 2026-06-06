import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata = {
  title: "Política de Privacidad — BioAula3D",
  description: "Política de privacidad de BioAula3D. No recolectamos ningún dato personal.",
};

export default function Privacidad() {
  return (
    <div style={{ background: "#080d1b", minHeight: "100vh" }}>
      <div className="max-w-2xl mx-auto px-4 pt-10 pb-20">

        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-300 text-[13px] mb-8 transition-colors">
          <ArrowLeft size={14} />
          Volver al inicio
        </Link>

        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(34,197,94,0.1)" }}>
            <Shield size={18} style={{ color: "#4ade80" }} />
          </div>
          <div>
            <h1 className="text-[22px] font-bold text-white leading-tight">Política de Privacidad</h1>
            <p className="text-[12px] text-slate-500 mt-0.5">Última actualización: junio de 2026</p>
          </div>
        </div>

        {/* destacado */}
        <div className="mb-8 rounded-xl px-5 py-4 border" style={{ background: "rgba(34,197,94,0.06)", borderColor: "rgba(34,197,94,0.2)" }}>
          <p className="text-[14px] font-semibold text-green-400 mb-1">BioAula3D no recolecta ningún dato personal.</p>
          <p className="text-[13px] text-slate-400">No hay registro, no hay cuentas, no hay seguimiento. Nada de lo que hacés en la app sale de tu dispositivo.</p>
        </div>

        <div className="space-y-8 text-slate-300 text-[14px] leading-relaxed">

          <section>
            <h2 className="text-[15px] font-semibold text-white mb-2">1. Información general</h2>
            <p>
              BioAula3D es una aplicación educativa de biología para nivel primario y secundario, propiedad de{" "}
              <strong className="text-slate-200">Enzo Chapino</strong>, con domicilio en Valle María, Argentina. Esta Política describe cómo tratamos la información de los usuarios, en
              cumplimiento de la Ley N.° 25.326 de Protección de Datos Personales de la República Argentina.
            </p>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-white mb-2">2. Datos que recopilamos</h2>
            <p className="mb-3">
              <strong className="text-slate-200">No recopilamos ningún tipo de dato personal.</strong>{" "}
              BioAula3D no requiere registro, no tiene cuentas de usuario y no solicita nombre, correo electrónico,
              contraseña, número de teléfono, ubicación ni ningún otro dato identificable.
            </p>
            <p className="mb-2">La única información que existe se almacena de forma exclusivamente local en tu dispositivo:</p>
            <ul className="space-y-1.5 pl-4 list-disc list-outside marker:text-slate-600">
              <li><strong className="text-slate-200">Notas personales:</strong> guardadas en el almacenamiento local del navegador (localStorage). Nunca se envían a ningún servidor.</li>
              <li><strong className="text-slate-200">Preferencias de la app:</strong> ajustes guardados localmente para mejorar la experiencia.</li>
            </ul>
            <p className="mt-3 text-slate-500 text-[13px]">
              Al desinstalar la app o limpiar los datos del navegador, toda esta información se elimina de forma permanente.
            </p>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-white mb-2">3. Sin cookies ni rastreo</h2>
            <p>
              BioAula3D <strong className="text-slate-200">no utiliza cookies, herramientas de analítica, píxeles
              de seguimiento ni publicidad de ningún tipo.</strong> No existe perfilado de usuarios ni se comparte
              información con terceros.
            </p>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-white mb-2">4. Modelos 3D (Sketchfab)</h2>
            <p>
              Los modelos 3D interactivos son provistos por <strong className="text-slate-200">Sketchfab</strong>{" "}
              (sketchfab.com), un servicio externo. Al visualizar un modelo, tu navegador se conecta a los servidores
              de Sketchfab. Consultá la{" "}
              <a href="https://sketchfab.com/privacy" target="_blank" rel="noopener noreferrer" className="underline text-green-400/80 hover:text-green-400">
                política de privacidad de Sketchfab
              </a>{" "}
              para más información sobre cómo tratan esa conexión.
            </p>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-white mb-2">5. Menores de edad</h2>
            <p>
              BioAula3D está diseñada para uso educativo en todos los niveles, incluyendo alumnos menores de edad.
              Dado que no recopilamos ningún dato personal, no existe riesgo de exposición de información de menores.
              La app puede usarse con total tranquilidad en entornos escolares.
            </p>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-white mb-2">6. Cambios en esta política</h2>
            <p>
              Podemos actualizar esta política ocasionalmente. Los cambios se publicarán en esta página con una
              nueva fecha. El uso continuo de la app implica la aceptación de la versión vigente.
            </p>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-white mb-2">7. Contacto</h2>
            <p>
              Para consultas sobre esta política escribinos a:{" "}
              <strong className="text-slate-200">bioaula3d@gmail.com</strong>
            </p>
          </section>

        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.06] flex gap-4 text-[12px] text-slate-600">
          <Link href="/terminos" className="hover:text-slate-400 transition-colors">Términos y Condiciones</Link>
          <Link href="/" className="hover:text-slate-400 transition-colors">Inicio</Link>
        </div>

      </div>
    </div>
  );
}
