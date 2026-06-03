"use client";
import SketchfabViewer from "@/components/SketchfabViewer";

export default function SistemaInmunologicoViewer() {
  return (
    <SketchfabViewer
      slug="inmunologico"
      uid="557451d5e6ca496d8c691e14b42edd93"
      title="Sistema Inmunológico"
      subtitle="🛡️ Defensa del Organismo"
      accent="#ef4444"
      intro="El sistema inmune defiende al cuerpo de bacterias, virus y células cancerosas. Explorá las células y órganos que nos protegen en 3D."
      structures={[
        {
          name: "Linfocito B",
          emoji: "🔵",
          color: "#3b82f6",
          simple: "Es la célula que fabrica anticuerpos para atacar a los gérmenes.",
          full: "Linfocito de la inmunidad humoral. Al activarse (con ayuda del linfocito T helper), se diferencia en plasmocitos que secretan anticuerpos específicos. También forma células B de memoria para respuestas secundarias más rápidas e intensas.",
        },
        {
          name: "Linfocito T Helper",
          emoji: "🟢",
          color: "#22c55e",
          simple: "Es el 'director' del sistema inmune: activa a otras células de defensa.",
          full: "Linfocito CD4+. Reconoce antígenos presentados por CPAs (MHC-II). Secreta citoquinas (IL-2, IL-4, IFN-γ) que activan linfocitos B, T citotóxicos y macrófagos. El VIH destruye estas células, comprometiendo toda la inmunidad adaptativa.",
        },
        {
          name: "Linfocito T Citotóxico",
          emoji: "⚔️",
          color: "#ef4444",
          simple: "Es la célula 'asesina' que destruye directamente células infectadas o cancerosas.",
          full: "Linfocito CD8+. Reconoce péptidos antigénicos presentados en MHC-I. Destruye células diana liberando perforina (forma poros en la membrana) y granzimas (activan apoptosis). Produce células de memoria de larga duración.",
        },
        {
          name: "Macrófago",
          emoji: "😤",
          color: "#f97316",
          simple: "Es una célula grande que 'come' gérmenes, células muertas y restos del cuerpo.",
          full: "Monocito diferenciado en los tejidos. Realiza fagocitosis de patógenos, células apoptóticas y detritos. Presenta antígenos en MHC-II a linfocitos T. Secreta citoquinas proinflamatorias (TNF-α, IL-1, IL-6). Papel en inmunidad innata y adaptativa.",
        },
        {
          name: "Neutrófilo",
          emoji: "⚪",
          color: "#94a3b8",
          simple: "Es el glóbulo blanco más abundante: el primero en llegar cuando hay una infección.",
          full: "Leucocito más numeroso (60-70% de los leucocitos). Primera línea de defensa en la inflamación aguda. Emigra por diapédesis al tejido infectado. Destruye patógenos por fagocitosis, degranulación (enzimas) y trampas extracelulares de ADN (NETs).",
        },
        {
          name: "Anticuerpo (Inmunoglobulina)",
          emoji: "🛡️",
          color: "#a855f7",
          simple: "Es una proteína en forma de Y que se pega al germen y lo marca para destruir.",
          full: "Proteína en forma de Y con 2 cadenas pesadas y 2 ligeras. Las regiones variables (Fab) unen antígenos específicos. La región constante (Fc) activa el complemento o la fagocitosis. Clases: IgG (sistémica), IgA (mucosas), IgM (respuesta primaria), IgE (alergia), IgD.",
        },
        {
          name: "Célula NK (Natural Killer)",
          emoji: "⚡",
          color: "#f59e0b",
          simple: "Es la célula que mata células infectadas o tumorales sin necesitar que le avisen.",
          full: "Linfocito de inmunidad innata. No necesita activación previa ni reconocimiento específico de antígeno. Detecta células con MHC-I reducido (señal de estrés/infección). Mata por perforina y granzimas. Activada por IL-2, IL-12 e IFN tipo I.",
        },
        {
          name: "Timo",
          emoji: "🫀",
          color: "#ec4899",
          simple: "Es el órgano donde los linfocitos T 'aprenden' a distinguir lo propio de lo extraño.",
          full: "Órgano linfoide primario en el mediastino anterior. Linfocitos T inmaduros (timocitos) maduran bajo influencia de las células epiteliales tímicas. Selección positiva (reconocen MHC propio) y negativa (eliminan los autorreactivos). Involuciona después de la pubertad.",
        },
        {
          name: "Bazo",
          emoji: "🫘",
          color: "#64748b",
          simple: "Es el órgano que filtra la sangre y activa la respuesta inmune en el torrente sanguíneo.",
          full: "Mayor órgano linfoide secundario. Pulpa roja: filtra eritrocitos viejos y plaquetas. Pulpa blanca: contiene linfocitos T (vaina periarteriolar) y B (folículos). Produce anticuerpos frente a bacterias capsuladas. La esplenectomía aumenta el riesgo de infecciones graves.",
        },
      ]}
    />
  );
}
