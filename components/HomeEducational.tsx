"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Box, Brain, Dna, FlaskConical, GraduationCap, Heart, Leaf, Microscope, TreePine, User } from "lucide-react";

const modules = [
  { href: "/celula", title: "Célula animal", desc: "Núcleo, membrana, mitocondrias y organelas.", icon: FlaskConical, color: "#2f855a" },
  { href: "/planta", title: "Célula vegetal", desc: "Pared celular, cloroplastos y vacuola.", icon: Leaf, color: "#2f855a" },
  { href: "/adn", title: "ADN y genética", desc: "Doble hélice, bases y herencia.", icon: Dna, color: "#2563eb" },
  { href: "/microbiologia", title: "Microbiología", desc: "Bacterias, virus y organismos microscópicos.", icon: Microscope, color: "#0f766e" },
  { href: "/ecosistemas", title: "Ecosistemas", desc: "Biomas, cadenas tróficas y relaciones.", icon: TreePine, color: "#2f855a" },
  { href: "/cuerpo-humano", title: "Cuerpo humano", desc: "Vista general de sistemas y órganos.", icon: User, color: "#2563eb" },
  { href: "/corazon", title: "Corazón", desc: "Cavidades, válvulas y circulación.", icon: Heart, color: "#dc2626" },
  { href: "/cerebro", title: "Cerebro", desc: "Lóbulos, funciones y sistema nervioso.", icon: Brain, color: "#7c3aed" },
];

const tools = [
  { href: "/quiz", title: "Quiz de biología", desc: "Preguntas para repasar con explicación." },
  { href: "/glosario", title: "Glosario", desc: "Términos biológicos explicados simple." },
  { href: "/tareas", title: "Banco de tareas", desc: "Actividades listas para clase o estudio." },
  { href: "/evaluaciones", title: "Evaluaciones", desc: "Pruebas y claves para docentes." },
];

export default function HomeEducational() {
  return (
    <div className="min-h-screen bg-[#f8faf5] text-slate-900">
      <section className="border-b border-slate-200 bg-[linear-gradient(135deg,#f8faf5_0%,#eef8ee_55%,#eaf2ff_100%)]">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:py-20">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/85 px-3 py-1.5 text-[12px] font-bold text-emerald-800 shadow-sm">
              <GraduationCap size={14} />
              Biología interactiva para primaria y secundaria
            </div>

            <h1 className="max-w-2xl text-[40px] font-black leading-[1] tracking-tight text-slate-950 md:text-[62px]" style={{ fontFamily: "var(--font-display, inherit)" }}>
              Aprendé biología con modelos 3D claros y visuales
            </h1>

            <p className="mt-6 max-w-xl text-[16px] leading-7 text-slate-600 md:text-[17px]">
              Explorá células, ADN, órganos, sistemas del cuerpo y ambientes naturales con recursos pensados para estudiar, enseñar y repasar sin complicaciones.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#modulos" className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-5 py-3 text-[14px] font-bold text-white shadow-sm transition hover:bg-emerald-800">
                Ver módulos <ArrowRight size={15} />
              </a>
              <Link href="/quiz" className="inline-flex items-center rounded-full border border-slate-300 bg-white px-5 py-3 text-[14px] font-bold text-slate-800 shadow-sm transition hover:border-slate-400 hover:bg-slate-50">
                Comenzar quiz
              </Link>
            </div>

            <div className="mt-8 grid max-w-md grid-cols-3 gap-3">
              <Stat value="24" label="módulos" />
              <Stat value="80" label="preguntas" />
              <Stat value="65+" label="términos" />
            </div>
          </div>

          <div className="mx-auto w-full max-w-md rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/70">
            <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-emerald-700">Modelo destacado</p>
                <h2 className="mt-1 text-xl font-black text-slate-950">Célula en 3D</h2>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                <Box size={24} />
              </div>
            </div>

            <div className="relative h-64 overflow-hidden rounded-3xl bg-[#f1f7ee]">
              <div className="absolute inset-8 rounded-full border-2 border-emerald-300/70 bg-emerald-100/40" />
              <div className="absolute inset-16 rounded-full border border-blue-300 bg-blue-100/70" />
              <div className="absolute left-12 top-16 h-9 w-16 rounded-full border border-emerald-400 bg-white/70" />
              <div className="absolute bottom-16 right-12 h-8 w-14 rounded-full border border-amber-300 bg-amber-100" />
              <div className="absolute bottom-12 left-20 h-4 w-4 rounded-full bg-emerald-500/50" />
              <div className="absolute right-20 top-12 h-5 w-5 rounded-full bg-blue-500/40" />
              <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400 bg-white/80" />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <Info label="Enfoque" value="Visual y simple" />
              <Info label="Uso" value="Celular y PC" />
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <section id="modulos">
          <SectionTitle title="Módulos principales" desc="Fichas claras, rutas directas y estética de plataforma educativa real." />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {modules.map(item => <ModuleCard key={item.href} item={item} />)}
          </div>
        </section>

        <section className="mt-16">
          <SectionTitle title="Herramientas educativas" desc="Recursos para repasar, evaluar y acompañar el aprendizaje." />
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            {tools.map((item, index) => (
              <Link key={item.href} href={item.href} className={`group flex items-center gap-4 px-5 py-4 transition hover:bg-slate-50 ${index === tools.length - 1 ? "" : "border-b border-slate-100"}`}>
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-amber-700">
                  <BookOpen size={19} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[14px] font-black text-slate-950">{item.title}</div>
                  <div className="mt-0.5 text-[12px] leading-5 text-slate-600">{item.desc}</div>
                </div>
                <ArrowRight size={15} className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-slate-700" />
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/80 p-3 shadow-sm">
      <div className="text-[22px] font-black text-slate-950">{value}</div>
      <div className="text-[11px] font-semibold text-slate-500">{label}</div>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-3">
      <p className="text-[11px] font-bold text-slate-500">{label}</p>
      <p className="text-[13px] font-bold text-slate-900">{value}</p>
    </div>
  );
}

function SectionTitle({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="mb-5">
      <div className="flex items-center gap-3">
        <div className="h-2 w-2 rounded-full bg-emerald-700" />
        <h2 className="text-[22px] font-black tracking-tight text-slate-950" style={{ fontFamily: "var(--font-display, inherit)" }}>{title}</h2>
      </div>
      <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-600">{desc}</p>
    </div>
  );
}

function ModuleCard({ item }: { item: { href: string; title: string; desc: string; icon: any; color: string } }) {
  const Icon = item.icon;
  return (
    <Link href={item.href} className="group block">
      <div className="h-full rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-2xl" style={{ background: `${item.color}12`, color: item.color }}>
          <Icon size={18} />
        </div>
        <div className="mb-1 text-[14px] font-black leading-snug text-slate-950">{item.title}</div>
        <div className="text-[12px] leading-5 text-slate-600">{item.desc}</div>
      </div>
    </Link>
  );
}
