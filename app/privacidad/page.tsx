import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata = {
  title: "Política de Privacidad — BioAula3D",
  description: "Política de privacidad de BioAula3D. Información sobre el tratamiento de datos personales.",
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

        <div className="space-y-8 text-slate-300 text-[14px] leading-relaxed">

          <section>
            <h2 className="text-[15px] font-semibold text-white mb-2">1. Información general</h2>
            <p>
              BioAula3D es una aplicación educativa de biología para nivel primario y secundario. Esta Política de
              Privacidad describe cómo tratamos la información de los usuarios, en cumplimiento de la{" "}
              <strong className="text-slate-200">Ley N.° 25.326 de Protección de Datos Personales</strong> de la
              República Argentina.
            </p>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-white mb-2">2. Datos que recopilamos</h2>
            <p className="mb-3">BioAula3D <strong className="text-slate-200">no requiere registro ni cuenta</strong> de usuario. No recolectamos nombre, correo electrónico, dirección ni ningún dato personal identificable.</p>
            <p>La información que se almacena lo hace de forma local en tu dispositivo:</p>
            <ul className="mt-2 space-y-1.5 pl-4 list-disc list-outside marker:text-slate-600">
              <li><strong className="text-slate-200">Notas personales:</strong> guardadas únicamente en el almacenamiento local del navegador (localStorage). No se envían a ningún servidor.</li>
              <li><strong className="text-slate-200">Preferencias de la app:</strong> configuraciones guardadas localmente para mejorar la experiencia.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-white mb-2">3. Modelos 3D y contenido externo</h2>
            <p>
              Los modelos 3D interactivos son provistos por{" "}
              <strong className="text-slate-200">Sketchfab</strong> (sketchfab.com), un servicio de terceros. Al
              visualizar un modelo, tu navegador establece conexión con los servidores de Sketchfab. Te recomendamos
              consultar la{" "}
              <a href="https://sketchfab.com/privacy" target="_blank" rel="noopener noreferrer" className="underline text-green-400/80 hover:text-green-400">
                política de privacidad de Sketchfab
              </a>{" "}
              para más información.
            </p>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-white mb-2">4. Menores de edad</h2>
            <p>
              BioAula3D está diseñada para uso educativo en todos los niveles escolares, incluyendo alumnos menores
              de edad. Dado que no recopilamos datos personales, no existe riesgo de exposición de información de
              menores. Los docentes y tutores pueden usar la app con total tranquilidad.
            </p>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-white mb-2">5. Cookies y tecnologías de seguimiento</h2>
            <p>
              BioAula3D <strong className="text-slate-200">no utiliza cookies de seguimiento ni herramientas de
              analítica de terceros</strong>. No existe publicidad segmentada ni perfilado de usuarios.
            </p>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-white mb-2">6. Seguridad</h2>
            <p>
              Toda la información almacenada localmente (notas, preferencias) reside exclusivamente en tu
              dispositivo. Al desinstalar la app o limpiar los datos del navegador, dicha información se elimina
              permanentemente.
            </p>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-white mb-2">7. Cambios en esta política</h2>
            <p>
              Podemos actualizar esta Política de Privacidad ocasionalmente. Los cambios se publicarán en esta
              página con una nueva fecha de actualización. El uso continuo de la app implica la aceptación de
              la versión vigente.
            </p>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-white mb-2">8. Contacto</h2>
            <p>
              Para consultas relacionadas con esta política o el tratamiento de datos, podés escribirnos a:{" "}
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
