"use client";
import Link from "next/link";

/* ── Tipos ── */
type Mod  = { slug: string; title: string; desc: string; emoji: string; accent: string };
type Group = { label: string; mods: Mod[] };
type Tool = { slug: string; title: string; desc: string; emoji: string; label: string };

/* ── Datos ── */
const cellular: Mod[] = [
  { slug:"celula",   title:"Célula Animal",     desc:"Núcleo, mitocondrias y organelas en 3D", emoji:"🔬", accent:"#5B8A6F" },
  { slug:"planta",   title:"Célula Vegetal",    desc:"Cloroplastos, pared y vacuola",          emoji:"🌿", accent:"#7A8F5E" },
  { slug:"adn",      title:"ADN y Genética",    desc:"Doble hélice y replicación",             emoji:"🧬", accent:"#6B7FA8" },
  { slug:"herencia", title:"Herencia Genética", desc:"Leyes de Mendel y Punnett",              emoji:"🧩", accent:"#6B7FA8" },
  { slug:"mitosis",  title:"Mitosis y Meiosis", desc:"Fases de la división celular",           emoji:"⚙️", accent:"#6B7FA8" },
];

const ecology: Mod[] = [
  { slug:"microbiologia", title:"Microbiología",  desc:"Bacterias, virus y resistencia",  emoji:"🦠", accent:"#6A8A7A" },
  { slug:"ecosistemas",   title:"Ecosistemas",    desc:"Cuatro biomas en 3D",             emoji:"🌳", accent:"#7A8F5E" },
  { slug:"evolucion",     title:"Evolución",      desc:"Caminata de la evolución humana", emoji:"🦕", accent:"#8A7A5C" },
  { slug:"clasificacion", title:"Clasificación",  desc:"Reinos y árbol filogenético",     emoji:"🌿", accent:"#7A8F5E" },
  { slug:"tejidos",       title:"Tejidos",        desc:"Epitelial, conectivo y muscular", emoji:"🔬", accent:"#5B7A8A" },
];

const bodyFeatured: Mod = {
  slug:"cuerpo-humano", title:"Cuerpo Humano",
  desc:"Vista integrada de todos los sistemas del organismo",
  emoji:"🫀", accent:"#8A6B8A",
};

const bodyGroups: Group[] = [
  { label:"Estructura y movimiento", mods:[
    { slug:"oseo",     title:"Sistema Óseo",    desc:"206 huesos y articulaciones", emoji:"🦴", accent:"#8A6B8A" },
    { slug:"muscular", title:"Sistema Muscular",desc:"Sarcómero, actina y miosina", emoji:"💪", accent:"#8A6B8A" },
  ]},
  { label:"Sistemas vitales", mods:[
    { slug:"corazon",   title:"Corazón",              desc:"Ventrículos, aurículas y válvulas", emoji:"❤️",  accent:"#9A5C5C" },
    { slug:"pulmones",  title:"Sistema Respiratorio", desc:"Pulmones, bronquios y alvéolos",    emoji:"🫁",  accent:"#5C7A8A" },
    { slug:"digestivo", title:"Sistema Digestivo",    desc:"Boca, estómago e intestinos",       emoji:"🍽️", accent:"#8A7A5C" },
    { slug:"excretor",  title:"Sistema Excretor",     desc:"Riñones y nefrona",                 emoji:"🫘", accent:"#5C7A8A" },
  ]},
  { label:"Sistema nervioso", mods:[
    { slug:"sistema-nervioso", title:"Sistema Nervioso",    desc:"Neurona 3D con axón y sinapsis",   emoji:"⚡",  accent:"#7A6B9A" },
    { slug:"cerebro",          title:"Cerebro",             desc:"Lóbulos, cerebelo e hipocampo",    emoji:"🧠",  accent:"#7A6B9A" },
    { slug:"sentidos",         title:"Órganos Sensoriales", desc:"Ojo, oído, nariz, lengua y piel", emoji:"👁️", accent:"#7A8A9A" },
  ]},
  { label:"Regulación", mods:[
    { slug:"endocrino",    title:"Sistema Endócrino", desc:"Hipotálamo, hipófisis y tiroides", emoji:"⚗️",  accent:"#8A7A5C" },
    { slug:"inmunologico", title:"Inmunología",       desc:"Linfocitos y anticuerpos",          emoji:"🛡️", accent:"#5B7A8A" },
  ]},
  { label:"Reproducción", mods:[
    { slug:"reproductor",           title:"Reproductor Femenino",  desc:"Ovarios, útero y ciclo menstrual", emoji:"🌸", accent:"#8A7A8A" },
    { slug:"reproductor-masculino", title:"Reproductor Masculino", desc:"Testículos y espermatozoide",      emoji:"🔵", accent:"#8A7A8A" },
  ]},
];

const tools: Tool[] = [
  { slug:"quiz",         title:"Quiz de Biología", desc:"80 preguntas con explicación detallada",      emoji:"🧬", label:"80 preguntas" },
  { slug:"glosario",     title:"Glosario",          desc:"178 términos biológicos con exportación PDF", emoji:"📖", label:"178 términos" },
  { slug:"tareas",       title:"Banco de Tareas",   desc:"24 tareas organizadas por nivel educativo",   emoji:"📋", label:"24 tareas" },
  { slug:"evaluaciones", title:"Evaluaciones",      desc:"48 evaluaciones con clave docente incluida",  emoji:"📝", label:"48 eval." },
  { slug:"notas",        title:"Notas",             desc:"Anotaciones personales con exportación PDF",  emoji:"✏️", label:"PDF" },
];

/* ── Tokens de color ── */
const BG0 = "#111214";
const BG1 = "#17191C";
const BG2 = "#1D2025";
const BG3 = "#23272E";
const T1  = "#E8EAF0";
const T2  = "#9BA3B2";
const T3  = "#5C6472";
const B1  = "#2A2F38";

/* ═══════════════════════════════════ PAGE ═══════════════════════════════════ */
export default function Home() {
  return (
    <div style={{ background: BG1, minHeight: "100vh" }}>

      {/* ── HERO ── */}
      <div style={{ background: BG0, borderBottom: `1px solid ${B1}` }}>
        <div style={{ maxWidth: 1024, margin: "0 auto", padding: "56px 20px 48px" }}>
          <p style={{ color: T3, fontSize: 10, fontFamily: "monospace", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: 18 }}>
            Biología · Modelos 3D · Interactivo
          </p>
          <h1 style={{ fontSize: "clamp(36px,7vw,64px)", fontWeight: 800, color: T1, lineHeight: 1.0, letterSpacing: "-0.02em", marginBottom: 16, fontFamily: "var(--font-display, inherit)" }}>
            Explorá la vida<br />
            <span style={{ color: "#4A7FA5" }}>desde adentro</span>
          </h1>
          <p style={{ color: T2, fontSize: 15, lineHeight: 1.7, maxWidth: 400, marginBottom: 28 }}>
            24 módulos 3D de células, órganos y sistemas del cuerpo humano. Para primaria y secundaria.
          </p>

          {/* Stats */}
          <div style={{ display: "flex", gap: 24, marginBottom: 28, paddingBottom: 28, borderBottom: `1px solid ${B1}`, flexWrap: "wrap" }}>
            {[["24","Módulos 3D"],["178","Términos"],["80","Preguntas"],["48","Evaluaciones"]].map(([n,l]) => (
              <div key={l}>
                <div style={{ fontFamily: "var(--font-display, inherit)", fontSize: 26, fontWeight: 700, color: "#4A7FA5", lineHeight: 1 }}>{n}</div>
                <div style={{ fontSize: 10, color: T3, textTransform: "uppercase", letterSpacing: "0.1em", marginTop: 3 }}>{l}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            <button
              onClick={() => document.getElementById("celular")?.scrollIntoView({ behavior: "smooth" })}
              style={{ background: "#4A7FA5", color: "#fff", border: "none", padding: "11px 22px", borderRadius: 10, fontSize: 13, fontWeight: 600, cursor: "pointer" }}
            >
              Explorar módulos →
            </button>
            <Link
              href="/quiz"
              style={{ background: "transparent", color: T2, border: `1px solid ${B1}`, padding: "10px 20px", borderRadius: 10, fontSize: 13, fontWeight: 500, textDecoration: "none", display: "inline-block" }}
            >
              Comenzar quiz →
            </Link>
          </div>
        </div>
      </div>

      {/* ── PARADE ── */}
      <BiologyParade />

      {/* ── MÓDULOS ── */}
      <div style={{ maxWidth: 1024, margin: "0 auto", padding: "40px 20px 16px", display: "flex", flexDirection: "column", gap: 56 }}>

        <section id="celular">
          <SectionLabel label="Célula y Genética" />
          <BentoGrid mods={cellular} />
        </section>

        <section id="ecologia">
          <SectionLabel label="Microbiología y Ecología" />
          <BentoGrid mods={ecology} />
        </section>

        <section id="cuerpo">
          <SectionLabel label="Cuerpo Humano" />

          {/* Card destacada */}
          <Link href={`/${bodyFeatured.slug}`} style={{ textDecoration: "none", display: "block", marginBottom: 10 }}>
            <div
              style={{ background: BG2, border: `1px solid ${B1}`, borderRadius: 16, padding: "22px 24px", display: "flex", alignItems: "center", gap: 18, transition: "background 0.15s" }}
              onMouseEnter={e => (e.currentTarget.style.background = BG3)}
              onMouseLeave={e => (e.currentTarget.style.background = BG2)}
            >
              <span style={{ fontSize: 40 }}>{bodyFeatured.emoji}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 16, fontWeight: 700, color: T1 }}>{bodyFeatured.title}</div>
                <div style={{ fontSize: 13, color: T2, marginTop: 3 }}>{bodyFeatured.desc}</div>
              </div>
              <span style={{ color: T3, fontSize: 16 }}>→</span>
            </div>
          </Link>

          {/* Grupos */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {bodyGroups.map(group => (
              <div key={group.label}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <span style={{ fontSize: 10, fontWeight: 600, color: T3, textTransform: "uppercase", letterSpacing: "0.12em", whiteSpace: "nowrap" }}>{group.label}</span>
                  <div style={{ flex: 1, height: 1, background: B1 }} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(group.mods.length, 4)}, 1fr)`, gap: 6 }}>
                  {group.mods.map(m => <CompactCard key={m.slug} m={m} />)}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* ── HERRAMIENTAS ── */}
      <section style={{ maxWidth: 1024, margin: "0 auto", padding: "16px 20px 40px" }}>
        <SectionLabel label="Herramientas educativas" />
        <div style={{ border: `1px solid ${B1}`, borderRadius: 14, overflow: "hidden" }}>
          {tools.map((t, i) => <ToolRow key={t.slug} t={t} last={i === tools.length - 1} />)}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: `1px solid ${B1}`, padding: "20px", maxWidth: 1024, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontSize: 12, color: T3 }}>© {new Date().getFullYear()} BioAula3D — Biología Interactiva</span>
          <div style={{ display: "flex", gap: 18 }}>
            <Link href="/terminos"   style={{ fontSize: 12, color: T3, textDecoration: "none" }}>Términos de uso</Link>
            <Link href="/privacidad" style={{ fontSize: 12, color: T3, textDecoration: "none" }}>Privacidad</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ── SECTION LABEL ── */
function SectionLabel({ label }: { label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
      <div style={{ width: 5, height: 5, borderRadius: "50%", background: T3, flexShrink: 0 }} />
      <span style={{ fontSize: 12, fontWeight: 600, color: T2, letterSpacing: "-0.01em" }}>{label}</span>
    </div>
  );
}

/* ── BENTO GRID (5 módulos en 2 columnas) ── */
function BentoGrid({ mods }: { mods: Mod[] }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 8 }}>
      {mods.map(m => <ModCard key={m.slug} m={m} />)}
    </div>
  );
}

/* ── MOD CARD ── */
function ModCard({ m }: { m: Mod }) {
  return (
    <Link href={`/${m.slug}`} style={{ textDecoration: "none" }}>
      <div
        style={{ background: BG2, border: `1px solid ${B1}`, borderRadius: 14, padding: "18px 16px", height: "100%", cursor: "pointer", transition: "background 0.15s" }}
        onMouseEnter={e => (e.currentTarget.style.background = BG3)}
        onMouseLeave={e => (e.currentTarget.style.background = BG2)}
      >
        <span style={{ fontSize: 30, display: "block", marginBottom: 12 }}>{m.emoji}</span>
        <div style={{ fontSize: 14, fontWeight: 700, color: T1, marginBottom: 5 }}>{m.title}</div>
        <div style={{ fontSize: 12, color: T2, lineHeight: 1.5, marginBottom: 12 }}>{m.desc}</div>
        <div style={{ fontSize: 12, color: m.accent }}>Ver modelo 3D →</div>
      </div>
    </Link>
  );
}

/* ── COMPACT CARD (para subsistemas del cuerpo) ── */
function CompactCard({ m }: { m: Mod }) {
  return (
    <Link href={`/${m.slug}`} style={{ textDecoration: "none" }}>
      <div
        style={{ background: BG2, border: `1px solid ${B1}`, borderRadius: 10, padding: "12px 10px", cursor: "pointer", transition: "background 0.15s" }}
        onMouseEnter={e => (e.currentTarget.style.background = BG3)}
        onMouseLeave={e => (e.currentTarget.style.background = BG2)}
      >
        <span style={{ fontSize: 20, display: "block", marginBottom: 6 }}>{m.emoji}</span>
        <div style={{ fontSize: 11, fontWeight: 600, color: T1 }}>{m.title}</div>
        <div style={{ fontSize: 10, color: T3, marginTop: 2, lineHeight: 1.4 }}>{m.desc}</div>
      </div>
    </Link>
  );
}

/* ── BIOLOGY PARADE — SVG CHARACTERS ── */

function VirusChar() {
  return (
    <svg width="54" height="54" viewBox="0 0 54 54" fill="none">
      <line x1="27" y1="13" x2="27" y2="3"  stroke="#5E7D6E" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="27" y1="41" x2="27" y2="51" stroke="#5E7D6E" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="13" y1="27" x2="3"  y2="27" stroke="#5E7D6E" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="41" y1="27" x2="51" y2="27" stroke="#5E7D6E" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="17" y1="17" x2="10" y2="10" stroke="#5E7D6E" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="37" y1="37" x2="44" y2="44" stroke="#5E7D6E" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="37" y1="17" x2="44" y2="10" stroke="#5E7D6E" strokeWidth="3.5" strokeLinecap="round"/>
      <line x1="17" y1="37" x2="10" y2="44" stroke="#5E7D6E" strokeWidth="3.5" strokeLinecap="round"/>
      <circle cx="27" cy="27" r="13" fill="#5E7D6E"/>
      <circle cx="22" cy="25" r="3.5" fill="white"/>
      <circle cx="32" cy="25" r="3.5" fill="white"/>
      <circle cx="23" cy="25" r="1.8" fill="#111214"/>
      <circle cx="33" cy="25" r="1.8" fill="#111214"/>
      <path d="M21 32 Q27 37 33 32" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

function BacteriaChar() {
  return (
    <svg width="44" height="70" viewBox="0 0 44 70" fill="none">
      <path d="M36 16 Q50 10 43 26 Q50 38 36 42" stroke="#7A8F5E" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <rect x="4" y="7" width="32" height="54" rx="16" fill="#7A8F5E"/>
      <circle cx="16" cy="31" r="4.5" fill="white"/>
      <circle cx="28" cy="31" r="4.5" fill="white"/>
      <circle cx="17" cy="31" r="2.2" fill="#111214"/>
      <circle cx="29" cy="31" r="2.2" fill="#111214"/>
      <path d="M13 24 Q16 21 19 24" stroke="#5C6E40" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M25 24 Q28 21 31 24" stroke="#5C6E40" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M14 42 Q22 48 30 42" stroke="white" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

function CavernChar() {
  return (
    <svg width="58" height="80" viewBox="0 0 58 80" fill="none">
      <line x1="42" y1="31" x2="54" y2="13" stroke="#6B5840" strokeWidth="5" strokeLinecap="round"/>
      <ellipse cx="53" cy="10" rx="6" ry="8" fill="#6B5840" transform="rotate(-25 53 10)"/>
      <rect x="16" y="39" width="24" height="26" rx="8" fill="#8A7A5C"/>
      <circle cx="22" cy="47" r="3.5" fill="#6B5840" opacity="0.55"/>
      <circle cx="34" cy="55" r="3"   fill="#6B5840" opacity="0.55"/>
      <circle cx="28" cy="50" r="2.5" fill="#6B5840" opacity="0.4"/>
      <rect x="23" y="34" width="12" height="9" rx="5" fill="#C49A6C"/>
      <circle cx="29" cy="25" r="14" fill="#C49A6C"/>
      <path d="M15 21 Q18 8 22 14 Q25 6 29 11 Q33 5 36 13 Q40 8 43 21" fill="#4A3828"/>
      <path d="M17 20 Q29 14 41 20" stroke="#4A3828" strokeWidth="4" fill="none" strokeLinecap="round"/>
      <circle cx="23" cy="25" r="3.5" fill="white"/>
      <circle cx="35" cy="25" r="3.5" fill="white"/>
      <circle cx="24" cy="25" r="1.8" fill="#111214"/>
      <circle cx="36" cy="25" r="1.8" fill="#111214"/>
      <ellipse cx="29" cy="30" rx="2.5" ry="2" fill="#A07850"/>
      <path d="M23 35 Q29 39 35 35" stroke="#4A3828" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <rect x="16" y="62" width="11" height="16" rx="5" fill="#C49A6C" transform="rotate(-8 21 62)"/>
      <rect x="31" y="64" width="11" height="14" rx="5" fill="#C49A6C" transform="rotate(6 36 64)"/>
    </svg>
  );
}

function CelulaChar() {
  return (
    <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
      <path d="M32 4 Q48 6 56 20 Q64 32 56 46 Q48 60 32 60 Q16 60 8 46 Q0 32 8 20 Q16 6 32 4Z" fill="#4A7060" opacity="0.22"/>
      <path d="M32 4 Q48 6 56 20 Q64 32 56 46 Q48 60 32 60 Q16 60 8 46 Q0 32 8 20 Q16 6 32 4Z" stroke="#5B8A6F" strokeWidth="2.2" fill="none"/>
      <ellipse cx="12" cy="24" rx="5.5" ry="3" fill="#5B8A6F" opacity="0.6" transform="rotate(-30 12 24)"/>
      <ellipse cx="52" cy="44" rx="5.5" ry="3" fill="#5B8A6F" opacity="0.6" transform="rotate(20 52 44)"/>
      <circle cx="50" cy="18" r="3.5" fill="#5B8A6F" opacity="0.5"/>
      <circle cx="32" cy="32" r="16" fill="#5B8A6F"/>
      <circle cx="29" cy="29" r="5.5" fill="#4A7060" opacity="0.5"/>
      <circle cx="26" cy="30" r="4.5" fill="white"/>
      <circle cx="38" cy="30" r="4.5" fill="white"/>
      <circle cx="27" cy="30" r="2.2" fill="#111214"/>
      <circle cx="39" cy="30" r="2.2" fill="#111214"/>
      <path d="M25 39 Q32 44 39 39" stroke="white" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

function ADNChar() {
  return (
    <svg width="44" height="76" viewBox="0 0 44 76" fill="none">
      <path d="M10 4 Q34 14 10 28 Q34 42 10 56 Q34 66 10 76" stroke="#6B7FA8" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M34 4 Q10 14 34 28 Q10 42 34 56 Q10 66 34 76" stroke="#6B7FA8" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <line x1="10" y1="9"  x2="34" y2="9"  stroke="#6B7FA8" strokeWidth="2" opacity="0.45"/>
      <line x1="10" y1="70" x2="34" y2="70" stroke="#6B7FA8" strokeWidth="2" opacity="0.45"/>
      <circle cx="22" cy="38" r="11" fill="#6B7FA8"/>
      <circle cx="17" cy="36" r="3.2" fill="white"/>
      <circle cx="27" cy="36" r="3.2" fill="white"/>
      <circle cx="18" cy="36" r="1.6" fill="#111214"/>
      <circle cx="28" cy="36" r="1.6" fill="#111214"/>
      <path d="M17 43 Q22 47 27 43" stroke="white" strokeWidth="1.3" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

function CerebroChar() {
  return (
    <svg width="68" height="58" viewBox="0 0 68 58" fill="none">
      <path d="M34 7 Q48 3 54 13 Q63 13 65 24 Q69 36 61 44 Q54 52 42 52 L26 52 Q14 52 7 44 Q-1 36 3 24 Q5 13 14 13 Q20 3 34 7Z" fill="#7A6B9A"/>
      <line x1="34" y1="9" x2="34" y2="50" stroke="#5C5078" strokeWidth="2.5" opacity="0.4"/>
      <path d="M14 22 Q8 30 14 38"  stroke="#5C5078" strokeWidth="2.2" fill="none" strokeLinecap="round" opacity="0.55"/>
      <path d="M20 16 Q15 27 20 38" stroke="#5C5078" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity="0.35"/>
      <path d="M54 22 Q60 30 54 38"  stroke="#5C5078" strokeWidth="2.2" fill="none" strokeLinecap="round" opacity="0.55"/>
      <path d="M48 16 Q53 27 48 38" stroke="#5C5078" strokeWidth="1.6" fill="none" strokeLinecap="round" opacity="0.35"/>
      <circle cx="24" cy="31" r="6" fill="white"/>
      <circle cx="44" cy="31" r="6" fill="white"/>
      <circle cx="25" cy="31" r="3" fill="#111214"/>
      <circle cx="45" cy="31" r="3" fill="#111214"/>
      <path d="M22 42 Q34 49 46 42" stroke="white" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

function BiologyParade() {
  const chars = [VirusChar, BacteriaChar, CavernChar, CelulaChar, ADNChar, CerebroChar];
  const doubled = [...chars, ...chars];
  return (
    <div style={{ background: BG0, borderBottom: `1px solid ${B1}`, overflow: "hidden", position: "relative", height: 106 }}>
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 64, zIndex: 1, background: `linear-gradient(to right, ${BG0}, transparent)`, pointerEvents: "none" }} />
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 64, zIndex: 1, background: `linear-gradient(to left, ${BG0}, transparent)`, pointerEvents: "none" }} />
      <div className="parade-track" style={{ alignItems: "flex-end", paddingBottom: 8, height: "100%" }}>
        {doubled.map((Char, i) => (
          <div key={i} className={`parade-char-${i % 5}`} style={{ flexShrink: 0, padding: "0 22px" }}>
            <Char />
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── TOOL ROW ── */
function ToolRow({ t, last }: { t: Tool; last: boolean }) {
  return (
    <Link href={`/${t.slug}`} style={{ textDecoration: "none" }}>
      <div
        style={{
          display: "flex", alignItems: "center", gap: 14, padding: "14px 18px",
          borderBottom: last ? "none" : `1px solid ${B1}`,
          background: BG2, cursor: "pointer", transition: "background 0.15s",
        }}
        onMouseEnter={e => (e.currentTarget.style.background = BG3)}
        onMouseLeave={e => (e.currentTarget.style.background = BG2)}
      >
        <span style={{ fontSize: 22, flexShrink: 0 }}>{t.emoji}</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: T1 }}>{t.title}</div>
          <div style={{ fontSize: 12, color: T2, marginTop: 2 }}>{t.desc}</div>
        </div>
        <span style={{ fontSize: 10, color: T3, background: BG3, border: `1px solid ${B1}`, padding: "3px 8px", borderRadius: 6, flexShrink: 0, whiteSpace: "nowrap" }}>{t.label}</span>
        <span style={{ color: T3, flexShrink: 0, fontSize: 14 }}>→</span>
      </div>
    </Link>
  );
}
