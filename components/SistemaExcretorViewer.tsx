"use client";
import SketchfabViewer from "@/components/SketchfabViewer";

export default function SistemaExcretorViewer() {
  return (
    <SketchfabViewer
      slug="excretor"
      moduleName="Sistema Excretor"
      uid="4258252eb7c04e748ab7501eb5f1abb1"
      title="Sistema Excretor"
      subtitle="💧 Riñones y Vías Urinarias"
      accent="#facc15"
      intro="Los riñones filtran toda la sangre unas 60 veces por día, eliminan desechos y regulan el equilibrio del agua. Explorá el sistema urinario en 3D."
      structures={[
        {
          name: "Riñón",
          emoji: "🫘",
          color: "#ca8a04",
          simple: "Es el órgano que limpia la sangre y produce la orina.",
          full: "Órgano par retroperitoneal con forma de frijol (~12 cm). Cada riñón contiene ~1 millón de nefronas. Recibe el 20-25% del gasto cardíaco. Filtra ~180 L de plasma/día y produce ~1,5 L de orina. Regula presión arterial (SRAA) y eritropoyesis.",
        },
        {
          name: "Corteza Renal",
          emoji: "🔴",
          color: "#b45309",
          simple: "Es la capa exterior del riñón donde se filtra la sangre.",
          full: "Zona externa del riñón. Contiene los corpúsculos renales (glomérulo + cápsula de Bowman) y la mayoría de los túbulos contorneados. Aquí ocurre la filtración glomerular y gran parte de la reabsorción tubular.",
        },
        {
          name: "Médula Renal",
          emoji: "🟡",
          color: "#d97706",
          simple: "Es la parte interna del riñón con los tubos que concentran la orina.",
          full: "Zona interna formada por pirámides de Malpighi. Contiene las asas de Henle y los túbulos colectores. El gradiente osmótico medular (hasta 1200 mOsm/L) permite concentrar la orina. La ADH controla la reabsorción de agua en los colectores.",
        },
        {
          name: "Glomérulo",
          emoji: "🔵",
          color: "#0284c7",
          simple: "Es un ovillo de vasos pequeños en el riñón donde la sangre se filtra.",
          full: "Red de capilares fenestrados dentro de la cápsula de Bowman. La presión hidrostática impulsa el ultrafiltrado. La membrana de filtración (podocitos, membrana basal, endotelio fenestrado) impide el paso de proteínas grandes. Filtrado: ~125 mL/min (TFG normal).",
        },
        {
          name: "Cápsula de Bowman",
          emoji: "🫧",
          color: "#38bdf8",
          simple: "Es la 'taza' que rodea al glomérulo y recoge el líquido filtrado.",
          full: "Doble pared en forma de copa que rodea al glomérulo. La capa visceral tiene podocitos con procesos filtrantes (pedicelos). El espacio urinario recoge el ultrafiltrado que pasará al túbulo contorneado proximal. Es el inicio de la formación de orina.",
        },
        {
          name: "Asa de Henle",
          emoji: "🔄",
          color: "#a78bfa",
          simple: "Es un tubo en forma de U que concentra la orina recuperando agua y sales.",
          full: "Segmento tubular en forma de U que desciende a la médula y regresa. La rama descendente es permeable al agua (reabsorción pasiva). La rama ascendente es impermeable al agua pero reabsorbe activamente Na⁺, K⁺ y Cl⁻. Establece el gradiente osmótico medular.",
        },
        {
          name: "Uréter",
          emoji: "〰️",
          color: "#f97316",
          simple: "Es el tubo que lleva la orina desde el riñón hasta la vejiga.",
          full: "Conducto muscular (~25-30 cm) con 3 capas: mucosa (urotelio), muscular (peristaltismo) y adventicia. Transporta orina por contracciones peristálticas (~1-5 cm/s). Tiene zonas de estrechez anatómica (unión ureteropélvica, cruce ilíaco, unión ureterovesical).",
        },
        {
          name: "Vejiga Urinaria",
          emoji: "🫙",
          color: "#84cc16",
          simple: "Es la bolsa que almacena la orina hasta que la eliminamos.",
          full: "Órgano muscular hueco (músculo detrusor) que almacena 300-500 mL de orina. El urotelio de transición se estira. El reflejo miccional (arco reflejo sacro + control cortical) coordina el vaciado. El esfínter interno (liso, involuntario) y externo (estriado, voluntario) controlan la micción.",
        },
      ]}
    />
  );
}
