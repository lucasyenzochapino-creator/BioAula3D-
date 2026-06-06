import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata = {
  title: "Términos y Condiciones — BioAula3D",
  description: "Términos y condiciones de uso de BioAula3D.",
};

export default function Terminos() {
  return (
    <div style={{ background: "#080d1b", minHeight: "100vh" }}>
      <div className="max-w-2xl mx-auto px-4 pt-10 pb-20">

        <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-300 text-[13px] mb-8 transition-colors">
          <ArrowLeft size={14} />
          Volver al inicio
        </Link>

        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "rgba(34,197,94,0.1)" }}>
            <FileText size={18} style={{ color: "#4ade80" }} />
          </div>
          <div>
            <h1 className="text-[22px] font-bold text-white leading-tight">Términos y Condiciones</h1>
            <p className="text-[12px] text-slate-500 mt-0.5">Última actualización: junio de 2026</p>
          </div>
        </div>

        <div className="space-y-8 text-slate-300 text-[14px] leading-relaxed">

          <section>
            <h2 className="text-[15px] font-semibold text-white mb-2">1. Aceptación de los términos</h2>
            <p>
              Al acceder y utilizar BioAula3D, aceptás los presentes Términos y Condiciones. Si no estás de acuerdo
              con alguno de ellos, te pedimos que no uses la aplicación.
            </p>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-white mb-2">2. Titular</h2>
            <p>
              BioAula3D es propiedad de <strong className="text-slate-200">Enzo Chapino</strong>, con domicilio en
              Valle María, Entre Ríos, República Argentina. Para consultas:{" "}
              <strong className="text-slate-200">bioaula3d@gmail.com</strong>
            </p>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-white mb-2">3. Descripción del servicio</h2>
            <p>
              BioAula3D es una aplicación web progresiva (PWA) de carácter educativo que ofrece modelos 3D
              interactivos, quizzes, glosario, banco de tareas y evaluaciones sobre biología, orientada a estudiantes
              de nivel primario y secundario y a docentes de la República Argentina.
            </p>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-white mb-2">4. Privacidad y datos</h2>
            <p>
              BioAula3D <strong className="text-slate-200">no recopila ningún dato personal</strong>. No hay registro
              de usuarios, no hay cuentas, no hay seguimiento ni analítica. Toda la información generada en la app
              (notas, preferencias) se almacena únicamente en el dispositivo del usuario. Consultá nuestra{" "}
              <Link href="/privacidad" className="underline text-green-400/80 hover:text-green-400">
                Política de Privacidad
              </Link>{" "}
              para más detalle.
            </p>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-white mb-2">5. Uso permitido</h2>
            <p className="mb-2">Podés usar BioAula3D para:</p>
            <ul className="space-y-1.5 pl-4 list-disc list-outside marker:text-slate-600">
              <li>Aprendizaje personal y estudio académico.</li>
              <li>Uso en el aula por parte de docentes, de forma gratuita y sin fines de lucro.</li>
              <li>Compartir el acceso con estudiantes dentro de un contexto educativo.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-white mb-2">6. Uso no permitido</h2>
            <p className="mb-2">Queda <strong className="text-slate-200">expresamente prohibido</strong>:</p>
            <ul className="space-y-1.5 pl-4 list-disc list-outside marker:text-slate-600">
              <li>Reproducir, redistribuir o comercializar el contenido sin autorización expresa del titular.</li>
              <li>Descompilar, realizar ingeniería inversa o modificar el código fuente de la aplicación.</li>
              <li>Usar la app con fines comerciales o publicitarios sin acuerdo previo por escrito.</li>
              <li>Hacerse pasar por BioAula3D o utilizar su nombre, logo o contenido de forma engañosa.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-white mb-2">7. Propiedad intelectual</h2>
            <p>
              Todo el contenido de BioAula3D — incluyendo textos, diseños, íconos, evaluaciones, quizzes, glosario y
              código — es propiedad de <strong className="text-slate-200">Enzo Chapino</strong> y está protegido
              por la Ley N.° 11.723 de Propiedad Intelectual y legislación internacional aplicable. Los modelos 3D
              visualizados pertenecen a sus respectivos autores en Sketchfab.
            </p>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-white mb-2">8. Contenido educativo</h2>
            <p>
              El contenido tiene fines exclusivamente educativos y didácticos. No reemplaza la orientación de un
              docente ni constituye asesoramiento científico o médico profesional.
            </p>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-white mb-2">9. Disponibilidad del servicio</h2>
            <p>
              BioAula3D se ofrece "tal cual". Podemos realizar modificaciones o discontinuar funciones en cualquier
              momento sin previo aviso. No garantizamos disponibilidad ininterrumpida del servicio.
            </p>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-white mb-2">10. Limitación de responsabilidad</h2>
            <p>
              En ningún caso el titular será responsable por daños directos o indirectos derivados del uso o la
              imposibilidad de uso de la aplicación.
            </p>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-white mb-2">11. Ley aplicable</h2>
            <p>
              Estos términos se rigen por las leyes de la República Argentina. Cualquier conflicto será resuelto ante
              los tribunales competentes de la provincia de Entre Ríos.
            </p>
          </section>

          <section>
            <h2 className="text-[15px] font-semibold text-white mb-2">12. Contacto</h2>
            <p>
              Para consultas sobre estos términos escribinos a:{" "}
              <strong className="text-slate-200">bioaula3d@gmail.com</strong>
            </p>
          </section>

        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.06] flex gap-4 text-[12px] text-slate-600">
          <Link href="/privacidad" className="hover:text-slate-400 transition-colors">Política de Privacidad</Link>
          <Link href="/" className="hover:text-slate-400 transition-colors">Inicio</Link>
        </div>

      </div>
    </div>
  );
}
