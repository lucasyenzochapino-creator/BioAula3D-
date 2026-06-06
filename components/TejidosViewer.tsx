"use client";
import SketchfabViewer from "@/components/SketchfabViewer";

export default function TejidosViewer() {
  return (
    <SketchfabViewer
      slug="tejidos"
      moduleName="Tejidos"
      uid="ddc40bb0900544959f02d3ff83c32615"
      title="Tejidos"
      subtitle="🔬 Histología Básica"
      accent="5B7A8A"
      intro="Explorá los tipos de tejidos animales y vegetales: estructura, función y ejemplos en 3D."
      structures={[]}
      models={[
        {
          id: "celula-animal-tej",
          name: "Célula Animal",
          emoji: "🔬",
          uid: "ddc40bb0900544959f02d3ff83c32615",
          structures: [
            {
              name: "Tejido Epitelial",
              emoji: "🫧",
              color: "#a78bfa",
              simple: "Es el tejido que cubre la superficie del cuerpo (piel) y el interior de los órganos. Es como el 'revestimiento' de todo el cuerpo.",
              full: "El tejido epitelial está formado por células muy juntas con poca matriz extracelular, unidas por desmosomas y uniones estrechas. Puede ser simple (una capa) o estratificado (varias capas), y según la forma: plano, cúbico o cilíndrico. Funciones: protección, absorción, secreción y intercambio gaseoso.",
            },
            {
              name: "Tejido Conectivo",
              emoji: "🕸️",
              color: "#6A5A8A",
              simple: "Tejido que une, sostiene y rellena los espacios entre otros tejidos. Incluye el hueso, el cartílago y la sangre.",
              full: "El tejido conectivo tiene abundante matriz extracelular (fibras de colágeno, elastina y sustancia fundamental). Sus células incluyen fibroblastos, macrófagos, mastocitos y células adiposas. Subtipos: laxo (relleno), denso regular (tendones), denso irregular (dermis), reticular, adiposo, cartílago, hueso y sangre.",
            },
            {
              name: "Tejido Muscular Liso",
              emoji: "💫",
              color: "#7A6B9A",
              simple: "Forma las paredes de los órganos internos como el estómago, los intestinos y los vasos sanguíneos. Se mueve solo, sin que lo controlemos.",
              full: "El tejido muscular liso está formado por células fusiformes uninucleadas sin estrías transversales. Es involuntario, controlado por el sistema nervioso autónomo y hormonas. Presenta contracción lenta y sostenida. Se encuentra en las paredes del tubo digestivo, vasos sanguíneos, útero y vías respiratorias.",
            },
            {
              name: "Tejido Muscular Estriado",
              emoji: "💪",
              color: "#6d28d9",
              simple: "El músculo esquelético unido a los huesos. Lo controlamos voluntariamente para movernos.",
              full: "El tejido muscular estriado esquelético está formado por células largas multinucleadas con estrías transversales visibles al microscopio. Es de control voluntario. Las estrías reflejan la organización regular de sarcómeros con filamentos de actina y miosina. Se fatiga rápidamente en contracciones intensas.",
            },
            {
              name: "Tejido Muscular Cardíaco",
              emoji: "🫀",
              color: "#5b21b6",
              simple: "Es el músculo especial del corazón. Se contrae rítmicamente toda la vida sin descanso y sin que lo controlemos.",
              full: "El tejido muscular cardíaco tiene células (cardiomiocitos) uninucleadas o binucleadas, con estrías transversales y discos intercalares (uniones comunicantes y desmosomas). Es involuntario con automatismo intrínseco. Los discos intercalares permiten la propagación sincrónica del potencial de acción para el latido coordinado.",
            },
            {
              name: "Tejido Nervioso",
              emoji: "⚡",
              color: "#4c1d95",
              simple: "Forma el cerebro, la médula espinal y los nervios. Transmite señales eléctricas a través del cuerpo.",
              full: "El tejido nervioso está compuesto por neuronas (células excitables que generan y conducen impulsos eléctricos) y neuroglía (células de soporte: astrocitos, oligodendrocitos, células de Schwann, microglía). Las neuronas tienen soma, dendritas y axón. La vaina de mielina permite la conducción saltatoria rápida.",
            },
            {
              name: "Tejido Adiposo",
              emoji: "🟡",
              color: "#6A5A8A",
              simple: "Tejido que almacena grasa. Sirve como reserva de energía, aislante térmico y protección de órganos.",
              full: "El tejido adiposo es un tejido conectivo especializado formado por adipocitos, células esféricas con una gran vacuola lipídica que desplaza el núcleo a la periferia. El tejido adiposo blanco almacena energía y produce hormonas (leptina, adiponectina). El tejido adiposo pardo genera calor por termogénesis (importante en recién nacidos y mamíferos que hibernan).",
            },
            {
              name: "Tejido Óseo",
              emoji: "🦴",
              color: "#6d28d9",
              simple: "Forma los huesos del esqueleto. Es muy duro porque tiene sales de calcio, pero también tiene células vivas que lo renuevan constantemente.",
              full: "El tejido óseo es un tejido conectivo mineralizado compuesto por colágeno tipo I (~35%) e hidroxiapatita Ca₁₀(PO₄)₆(OH)₂ (~65%). Sus células son osteoblastos (forman hueso), osteocitos (mantenimiento) y osteoclastos (reabsorción). El hueso compacto tiene osteonas; el esponjoso tiene trabéculas. El remodelado óseo continuo permite adaptación mecánica.",
            },
          ],
        },
        {
          id: "celula-vegetal-tej",
          name: "Célula Vegetal",
          emoji: "🌿",
          uid: "0640c7a14f41400fbdac382c7de1d776",
          structures: [
            {
              name: "Tejido Meristemático",
              emoji: "🌱",
              color: "#a78bfa",
              simple: "Tejido vegetal con células que se dividen constantemente para que la planta pueda crecer. Está en las puntas de raíces y tallos.",
              full: "Los meristemas son tejidos de células indiferenciadas con alta capacidad de división mitótica. El meristema apical del tallo y la raíz produce el crecimiento primario (en longitud). El meristema lateral (cámbium vascular y cámbium suberoso) produce el crecimiento secundario (en grosor) en plantas leñosas. Los meristemas intercalares se ubican en las hojas de gramíneas.",
            },
            {
              name: "Tejido Parenquimático",
              emoji: "🍃",
              color: "#6A5A8A",
              simple: "El tejido más abundante de las plantas. Hace la fotosíntesis en las hojas y almacena nutrientes en raíces y frutos.",
              full: "El parénquima está formado por células vivas, isodiamétricas, con pared celular delgada y gran vacuola central. Subtipos: clorenquima (fotosíntesis, en hojas), parénquima de reserva (almacena almidón, aceites, raíces), parénquima acuífero (almacena agua) y parénquima aerífero (aerénquima, en plantas acuáticas). Es el tejido más plástico y puede desdiferenciarse.",
            },
            {
              name: "Tejido Vascular (Xilema)",
              emoji: "💧",
              color: "#7A6B9A",
              simple: "Tejido que conduce el agua y los minerales desde las raíces hasta las hojas. Es como los 'caños de agua' de la planta.",
              full: "El xilema conduce el agua y los solutos minerales desde la raíz hacia las partes aéreas (flujo ascendente). Está compuesto por traqueidas y elementos de vaso (muertos al madurar, con pared lignificada y perforaciones). La teoría de la cohesión-tensión explica el transporte: la evaporación en hojas crea tensión que 'tira' del agua desde la raíz.",
            },
            {
              name: "Tejido Vascular (Floema)",
              emoji: "🍬",
              color: "#6d28d9",
              simple: "Tejido que conduce los azúcares producidos en la fotosíntesis desde las hojas hacia toda la planta.",
              full: "El floema conduce los fotoasimilados (principalmente sacarosa) desde los órganos fuente (hojas) hacia los órganos sumidero (raíces, frutos, semillas). Sus elementos son los tubos cribosos (vivos al madurar pero sin núcleo) y las células acompañantes (con núcleo activo). El transporte es bidireccional y activo (hipótesis de flujo de presión de Münch).",
            },
            {
              name: "Tejido Dérmico (Epidermis)",
              emoji: "🛡️",
              color: "#5b21b6",
              simple: "La 'piel' de la planta. Cubre y protege hojas, tallos y raíces jóvenes. Tiene estomas para el intercambio de gases.",
              full: "La epidermis es la capa externa de las plantas herbáceas y jóvenes. Está cubierta por la cutícula (capa de cutina que impide la pérdida de agua). Contiene estomas (poros con células guarda que regulan la transpiración e intercambio gaseoso), tricomas (pelos) y células de absorción en raíces. En plantas leñosas es reemplazada por el peridermo (corcho).",
            },
            {
              name: "Tejido de Sostén (Colénquima)",
              emoji: "🏗️",
              color: "#4c1d95",
              simple: "Tejido de soporte en partes jóvenes de la planta que todavía crecen. Sus células tienen paredes engrosadas pero siguen vivas.",
              full: "El colénquima está formado por células vivas con pared celular reforzada irregularmente por celulosa y pectinas (sin lignina). Proporciona soporte flexible en órganos jóvenes en crecimiento: tallos herbáceos, pecíolos, bordes de hojas. Por ser flexible permite el crecimiento. Se observa en el apio (hebras del pecíolo).",
            },
            {
              name: "Tejido de Sostén (Esclerénquima)",
              emoji: "🪨",
              color: "#6A5A8A",
              simple: "Tejido de soporte con células de pared muy dura y lignificada. Muere al madurar pero sigue dando estructura a la planta.",
              full: "El esclerénquima tiene células muertas al madurar con pared secundaria gruesa impregnada de lignina. Subtipos: fibras (largas y fusiformes, en tejidos vasculares, corteza) y esclereidas (células pétreas, en cáscara de nueces, pepitas de pera). Proporciona soporte rígido y protección mecánica en partes maduras de la planta.",
            },
            {
              name: "Tejido Secretor",
              emoji: "💧",
              color: "#7A6B9A",
              simple: "Tejido vegetal especializado en producir y liberar sustancias como néctar, aceites esenciales, látex o resina.",
              full: "Los tejidos secretores producen y liberan diversas sustancias. Incluyen tricomas glandulares (pelos secretores de aceites en menta, cannabis), idioblastos (células aisladas con aceites, cristales o taninos), canales secretores (resina en pinos, látex en ficus) y nectarios (producen néctar para atraer polinizadores). Funcionan en defensa, atracción de polinizadores y comunicación química.",
            },
          ],
        },
      ]}
    />
  );
}
