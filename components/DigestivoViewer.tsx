"use client";
import SketchfabViewer from "@/components/SketchfabViewer";

export default function DigestivoViewer() {
  return (
    <SketchfabViewer
      slug="digestivo"
      moduleName="Sistema Digestivo"
      uid="2d3771dd6b8940ffa2312bd97aca6fc3"
      title="Sistema Digestivo"
      subtitle="🍽️ Aparato Digestivo"
      accent="8A7A5C"
      intro="Explorá el sistema digestivo humano en 3D. Tocá los puntos ⓘ en el modelo o las estructuras de abajo."
      structures={[
        {
          name: "Boca y Esófago",
          emoji: "👄",
          color: "#8A7A5C",
          simple: "La boca tritura los alimentos y el esófago los lleva al estómago.",
          full: "Boca: masticación mecánica y digestión química inicial (amilasa salival). Deglución involucra 30+ músculos. Esófago: tubo muscular de ~25 cm con peristalsis para transportar el bolo alimenticio. Esfínter esofágico inferior previene el reflujo.",
        },
        {
          name: "Estómago",
          emoji: "💛",
          color: "#8A7A5C",
          simple: "Mezcla los alimentos con jugos ácidos para descomponerlos.",
          full: "Órgano muscular en forma de J. Produce HCl (pH 1,5-2) y pepsina para la digestión proteica. Las células parietales secretan ácido; las principales, pepsinógeno. La mucosa produce mucus protector. Vacía su contenido (quimo) en 2-4 horas.",
        },
        {
          name: "Intestino Delgado",
          emoji: "🌀",
          color: "#5B8A6F",
          simple: "Es el tubo más largo: absorbe los nutrientes de los alimentos.",
          full: "Mide ~6-7 m. Dividido en duodeno (digestión con enzimas pancreáticas y bilis), yeyuno (absorción principal) e íleon. Tiene vellosidades y microvellosidades que aumentan la superficie absortiva a ~250 m². Absorbe el 95% de los nutrientes.",
        },
        {
          name: "Intestino Grueso",
          emoji: "🟤",
          color: "#92400e",
          simple: "Absorbe agua y forma las heces con lo que no se digirió.",
          full: "Mide ~1,5 m. Incluye ciego, colon (ascendente, transverso, descendente, sigmoide) y recto. Absorbe agua y electrolitos. Contiene la microbiota intestinal (~100 billones de bacterias). Fermenta fibra no digerible produciendo ácidos grasos de cadena corta.",
        },
        {
          name: "Hígado",
          emoji: "🟫",
          color: "#b45309",
          simple: "Produce la bilis, filtra la sangre y procesa los nutrientes absorbidos.",
          full: "Mayor glándula del cuerpo (~1,5 kg). Produce bilis para emulsionar grasas. Metaboliza glucosa (glucogénesis/glucólisis), sintetiza proteínas plasmáticas (albúmina, factores de coagulación) y detoxifica fármacos y toxinas. Recibe sangre portal del intestino.",
        },
        {
          name: "Vesícula Biliar",
          emoji: "💚",
          color: "#4A7A5F",
          simple: "Almacena la bilis del hígado y la libera cuando comés grasas.",
          full: "Saco de ~8 cm que concentra y almacena bilis (hasta 50 mL). Al ingerir grasas, la colecistoquinina (CCK) estimula su contracción y libera bilis por el conducto colédoco al duodeno. Los cálculos biliares son frecuentes (10-20% de adultos).",
        },
        {
          name: "Páncreas",
          emoji: "🩶",
          color: "#4A5260",
          simple: "Produce jugos digestivos y la insulina que regula el azúcar en sangre.",
          full: "Glándula mixta: exocrina (jugo pancreático con lipasas, proteasas, amilasa para digestión en duodeno) y endocrina (islotes de Langerhans — células β producen insulina, células α glucagón). La diabetes tipo 1 destruye las células β.",
        },
        {
          name: "Apéndice",
          emoji: "📍",
          color: "#9A5C5C",
          simple: "Es una pequeña extensión del intestino grueso. Puede inflamarse (apendicitis).",
          full: "Divertículo ciego de ~8 cm unido al ciego. Tiene tejido linfoide (MALT) que forma parte del sistema inmune intestinal. Puede albergar bacterias beneficiosas. Su inflamación (apendicitis) requiere extirpación quirúrgica urgente.",
        },
      ]}
    />
  );
}
