"use client";
import { useState, useMemo } from "react";

type Nivel = "Primaria" | "Secundaria";
type TipoPregunta = "multiple" | "vf" | "completar" | "desarrollo";

interface PreguntaMultiple {
  tipo: "multiple";
  enunciado: string;
  opciones: [string, string, string, string];
  correcta: 0 | 1 | 2 | 3;
  puntos: number;
}
interface PreguntaVF {
  tipo: "vf";
  enunciado: string;
  correcta: boolean;
  puntos: number;
}
interface PreguntaCompletar {
  tipo: "completar";
  enunciado: string;
  respuesta: string;
  puntos: number;
}
interface PreguntaDesarrollo {
  tipo: "desarrollo";
  enunciado: string;
  guia: string;
  puntos: number;
}
type Pregunta = PreguntaMultiple | PreguntaVF | PreguntaCompletar | PreguntaDesarrollo;

interface Evaluacion {
  id: string;
  titulo: string;
  nivel: Nivel;
  modulo: string;
  emoji: string;
  color: string;
  duracion: string;
  preguntas: Pregunta[];
}

const evaluaciones: Evaluacion[] = [
  // ──────────────────────────────────────────────
  // PRIMARIA
  // ──────────────────────────────────────────────
  {
    id: "celula-animal-p",
    titulo: "La Célula Animal",
    nivel: "Primaria",
    modulo: "Célula Animal",
    emoji: "🔬",
    color: "#4ade80",
    duracion: "40 min",
    preguntas: [
      { tipo: "multiple", enunciado: "¿Qué parte de la célula controla todas sus actividades?", opciones: ["Membrana plasmática", "Núcleo", "Citoplasma", "Ribosoma"], correcta: 1, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Cuál es la 'central energética' de la célula?", opciones: ["Núcleo", "Aparato de Golgi", "Mitocondria", "Vacuola"], correcta: 2, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Dónde se fabrican las proteínas?", opciones: ["Lisosoma", "Ribosoma", "Mitocondria", "Núcleo"], correcta: 1, puntos: 1 },
      { tipo: "vf", enunciado: "La membrana plasmática deja pasar todo lo que quiere entrar a la célula.", correcta: false, puntos: 1 },
      { tipo: "vf", enunciado: "El núcleo contiene el ADN con la información genética.", correcta: true, puntos: 1 },
      { tipo: "vf", enunciado: "El aparato de Golgi produce energía para la célula.", correcta: false, puntos: 1 },
      { tipo: "completar", enunciado: "La célula está delimitada por una estructura llamada ___.", respuesta: "membrana plasmática", puntos: 1 },
      { tipo: "completar", enunciado: "Los lisosomas digieren sustancias no deseadas mediante ___ digestivas.", respuesta: "enzimas", puntos: 1 },
      { tipo: "desarrollo", enunciado: "Elegí 3 partes de la célula animal, dibujalas y explicá la función de cada una.", guia: "Núcleo (guarda ADN), mitocondria (produce energía ATP), membrana (protege y regula entrada/salida).", puntos: 3 },
    ],
  },
  {
    id: "celula-vegetal-p",
    titulo: "La Célula Vegetal",
    nivel: "Primaria",
    modulo: "Célula Vegetal",
    emoji: "🌿",
    color: "#34d399",
    duracion: "40 min",
    preguntas: [
      { tipo: "multiple", enunciado: "¿Qué estructura tienen las células vegetales pero NO las animales?", opciones: ["Núcleo", "Membrana plasmática", "Pared celular", "Mitocondria"], correcta: 2, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Dónde ocurre la fotosíntesis?", opciones: ["Núcleo", "Mitocondria", "Cloroplasto", "Vacuola"], correcta: 2, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Para qué sirve la vacuola central en las plantas?", opciones: ["Producir energía", "Guardar agua y nutrientes", "Hacer fotosíntesis", "Dividir la célula"], correcta: 1, puntos: 1 },
      { tipo: "vf", enunciado: "El cloroplasto le da el color verde a las plantas.", correcta: true, puntos: 1 },
      { tipo: "vf", enunciado: "La célula vegetal no tiene núcleo.", correcta: false, puntos: 1 },
      { tipo: "vf", enunciado: "La pared celular vegetal está hecha de celulosa.", correcta: true, puntos: 1 },
      { tipo: "completar", enunciado: "La fotosíntesis necesita luz solar, agua y ___ para producir glucosa.", respuesta: "dióxido de carbono (CO₂)", puntos: 1 },
      { tipo: "completar", enunciado: "La vacuola central ocupa gran parte del ___ de la célula vegetal.", respuesta: "volumen", puntos: 1 },
      { tipo: "desarrollo", enunciado: "Hacé un cuadro con al menos 3 diferencias entre la célula animal y la célula vegetal.", guia: "Pared celular (vegetal sí / animal no), cloroplastos (vegetal sí / animal no), vacuola central grande (vegetal sí / animal pequeña o ausente).", puntos: 3 },
    ],
  },
  {
    id: "digestivo-p",
    titulo: "El Sistema Digestivo",
    nivel: "Primaria",
    modulo: "Sistema Digestivo",
    emoji: "🍽️",
    color: "#fb923c",
    duracion: "40 min",
    preguntas: [
      { tipo: "multiple", enunciado: "¿Dónde comienza la digestión?", opciones: ["Estómago", "Intestino delgado", "Boca", "Esófago"], correcta: 2, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Dónde se absorben los nutrientes hacia la sangre?", opciones: ["Estómago", "Intestino delgado", "Intestino grueso", "Boca"], correcta: 1, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Cuál es la función del estómago?", opciones: ["Absorber nutrientes", "Triturar y mezclar el alimento con jugos", "Eliminar desechos", "Producir saliva"], correcta: 1, puntos: 1 },
      { tipo: "vf", enunciado: "El intestino grueso absorbe la mayor parte de los nutrientes.", correcta: false, puntos: 1 },
      { tipo: "vf", enunciado: "El hígado produce bilis para ayudar a digerir las grasas.", correcta: true, puntos: 1 },
      { tipo: "vf", enunciado: "El esófago es el tubo que conecta la boca con el estómago.", correcta: true, puntos: 1 },
      { tipo: "completar", enunciado: "El recorrido del alimento es: boca → ___ → estómago → intestino delgado → intestino grueso → ano.", respuesta: "esófago", puntos: 1 },
      { tipo: "completar", enunciado: "El intestino grueso absorbe el ___ y forma las heces.", respuesta: "agua", puntos: 1 },
      { tipo: "desarrollo", enunciado: "Describí el 'viaje de un sándwich' desde que lo mordés hasta que los nutrientes llegan a la sangre.", guia: "Boca (masticación y saliva), esófago (transporte), estómago (jugos gástricos), intestino delgado (absorción de nutrientes), intestino grueso (agua), ano (eliminación).", puntos: 3 },
    ],
  },
  {
    id: "circulatorio-p",
    titulo: "El Sistema Circulatorio",
    nivel: "Primaria",
    modulo: "Corazón Humano",
    emoji: "🫀",
    color: "#f87171",
    duracion: "40 min",
    preguntas: [
      { tipo: "multiple", enunciado: "¿Cuántas cámaras tiene el corazón humano?", opciones: ["2", "3", "4", "5"], correcta: 2, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué vasos sanguíneos llevan sangre DESDE el corazón hacia el cuerpo?", opciones: ["Venas", "Arterias", "Capilares", "Linfáticos"], correcta: 1, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué lleva la sangre a todas las células del cuerpo?", opciones: ["Solo agua", "Oxígeno y nutrientes", "Solo dióxido de carbono", "Solo glóbulos blancos"], correcta: 1, puntos: 1 },
      { tipo: "vf", enunciado: "Las venas llevan sangre desde el corazón hacia los órganos.", correcta: false, puntos: 1 },
      { tipo: "vf", enunciado: "Los pulmones oxigenan la sangre.", correcta: true, puntos: 1 },
      { tipo: "vf", enunciado: "El corazón es un músculo que bombea sangre.", correcta: true, puntos: 1 },
      { tipo: "completar", enunciado: "Las cámaras superiores del corazón se llaman ___ y las inferiores se llaman ___.", respuesta: "aurículas / ventrículos", puntos: 2 },
      { tipo: "desarrollo", enunciado: "Dibujá el recorrido de la sangre: indicá cómo va del corazón a los pulmones, vuelve al corazón y luego va al cuerpo.", guia: "Ventrículo derecho → pulmones (oxigenación) → aurícula izquierda → ventrículo izquierdo → aorta → cuerpo → venas cavas → aurícula derecha.", puntos: 3 },
    ],
  },
  {
    id: "respiratorio-p",
    titulo: "El Sistema Respiratorio",
    nivel: "Primaria",
    modulo: "Sistema Respiratorio",
    emoji: "🫁",
    color: "#38bdf8",
    duracion: "40 min",
    preguntas: [
      { tipo: "multiple", enunciado: "¿Por qué órgano entra el aire al cuerpo?", opciones: ["Tráquea", "Nariz y boca", "Pulmones", "Bronquios"], correcta: 1, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Dónde se produce el intercambio de gases en los pulmones?", opciones: ["Bronquios", "Tráquea", "Alvéolos", "Laringe"], correcta: 2, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué músculo ayuda a inflar y desinflar los pulmones?", opciones: ["Corazón", "Diafragma", "Hígado", "Esófago"], correcta: 1, puntos: 1 },
      { tipo: "vf", enunciado: "Cuando inspiramos, el oxígeno entra a los pulmones.", correcta: true, puntos: 1 },
      { tipo: "vf", enunciado: "El CO₂ es el gas que el cuerpo necesita inhalar para vivir.", correcta: false, puntos: 1 },
      { tipo: "vf", enunciado: "La tráquea lleva el aire desde la laringe hasta los bronquios.", correcta: true, puntos: 1 },
      { tipo: "completar", enunciado: "El recorrido del aire es: nariz → ___ → laringe → tráquea → bronquios → alvéolos.", respuesta: "faringe", puntos: 1 },
      { tipo: "completar", enunciado: "En los alvéolos, el ___ pasa al la sangre y el ___ sale hacia los pulmones.", respuesta: "O₂ / CO₂", puntos: 1 },
      { tipo: "desarrollo", enunciado: "Explicá qué pasa en el cuerpo cuando hacés una inspiración profunda. ¿Qué entra, adónde va y para qué sirve?", guia: "El aire entra por nariz, pasa por faringe, laringe, tráquea, bronquios hasta los alvéolos. Allí el O₂ pasa a la sangre (para las células) y el CO₂ sale.", puntos: 3 },
    ],
  },
  {
    id: "nervioso-p",
    titulo: "El Sistema Nervioso",
    nivel: "Primaria",
    modulo: "Sistema Nervioso",
    emoji: "🧠",
    color: "#a78bfa",
    duracion: "40 min",
    preguntas: [
      { tipo: "multiple", enunciado: "¿Cómo se llama la célula del sistema nervioso?", opciones: ["Glóbulo rojo", "Neurona", "Epitelio", "Fibra muscular"], correcta: 1, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué parte de la neurona recibe los mensajes?", opciones: ["Axón", "Vaina de mielina", "Dendritas", "Terminal del axón"], correcta: 2, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Cómo se llama el espacio entre dos neuronas?", opciones: ["Axón", "Sinapsis", "Dendrita", "Núcleo"], correcta: 1, puntos: 1 },
      { tipo: "vf", enunciado: "La vaina de mielina acelera la transmisión del impulso nervioso.", correcta: true, puntos: 1 },
      { tipo: "vf", enunciado: "El cerebro forma parte del sistema nervioso periférico.", correcta: false, puntos: 1 },
      { tipo: "vf", enunciado: "El mensaje nervioso viaja desde las dendritas hacia el axón.", correcta: true, puntos: 1 },
      { tipo: "completar", enunciado: "El sistema nervioso central está formado por el ___ y la médula espinal.", respuesta: "encéfalo (cerebro)", puntos: 1 },
      { tipo: "completar", enunciado: "La reacción rápida ante un peligro sin que pensemos se llama acto ___.", respuesta: "reflejo", puntos: 1 },
      { tipo: "desarrollo", enunciado: "Dibujá una neurona y señalá sus partes. Explicá cómo viaja un mensaje nervioso.", guia: "Dendritas (reciben), soma (procesa), axón (transmite), terminal (libera neurotransmisor en la sinapsis).", puntos: 3 },
    ],
  },
  {
    id: "adn-p",
    titulo: "ADN y Herencia Básica",
    nivel: "Primaria",
    modulo: "ADN & Genética",
    emoji: "🧬",
    color: "#60a5fa",
    duracion: "40 min",
    preguntas: [
      { tipo: "multiple", enunciado: "¿Qué significan las siglas ADN?", opciones: ["Ácido Desoxirribonucleico", "Ácido Deoxi Nucleico", "Aminoácido Nucleico", "Ácido De Nitrógeno"], correcta: 0, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Dónde se encuentra el ADN en la célula?", opciones: ["Mitocondria", "Membrana", "Núcleo", "Ribosoma"], correcta: 2, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Con qué base se empareja la Adenina (A)?", opciones: ["Guanina (G)", "Citosina (C)", "Timina (T)", "Uracilo (U)"], correcta: 2, puntos: 1 },
      { tipo: "vf", enunciado: "El ADN tiene forma de doble hélice (escalera retorcida).", correcta: true, puntos: 1 },
      { tipo: "vf", enunciado: "Todos los seres vivos tienen el mismo ADN.", correcta: false, puntos: 1 },
      { tipo: "vf", enunciado: "Los genes son segmentos de ADN que dan instrucciones para fabricar proteínas.", correcta: true, puntos: 1 },
      { tipo: "completar", enunciado: "Si un lado del ADN tiene la secuencia A-T-G-C, el otro lado tiene: ___ - ___ - ___ - ___.", respuesta: "T-A-C-G", puntos: 2 },
      { tipo: "desarrollo", enunciado: "Explicá con tus palabras qué es el ADN, dónde está y para qué sirve.", guia: "El ADN es la molécula que contiene la información genética de un organismo. Está en el núcleo celular. Sirve para fabricar proteínas y transmitir características de padres a hijos.", puntos: 3 },
    ],
  },
  {
    id: "cerebro-p",
    titulo: "El Cerebro Humano",
    nivel: "Primaria",
    modulo: "Cerebro Humano",
    emoji: "🧠",
    color: "#c084fc",
    duracion: "40 min",
    preguntas: [
      { tipo: "multiple", enunciado: "¿Cuántos lóbulos tiene el cerebro?", opciones: ["2", "3", "4", "6"], correcta: 2, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué lóbulo procesa lo que vemos?", opciones: ["Frontal", "Parietal", "Temporal", "Occipital"], correcta: 3, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Cuál es la función del cerebelo?", opciones: ["Controlar emociones", "Coordinar movimientos y equilibrio", "Ver imágenes", "Producir hormonas"], correcta: 1, puntos: 1 },
      { tipo: "vf", enunciado: "El lóbulo frontal está relacionado con la toma de decisiones y el pensamiento.", correcta: true, puntos: 1 },
      { tipo: "vf", enunciado: "El tronco encefálico controla funciones automáticas como la respiración.", correcta: true, puntos: 1 },
      { tipo: "vf", enunciado: "El cerebro humano pesa aproximadamente 10 kilos.", correcta: false, puntos: 1 },
      { tipo: "completar", enunciado: "El lóbulo ___ procesa el lenguaje y la audición.", respuesta: "temporal", puntos: 1 },
      { tipo: "completar", enunciado: "El cerebro y la médula espinal forman el sistema nervioso ___.", respuesta: "central", puntos: 1 },
      { tipo: "desarrollo", enunciado: "Dibujá el cerebro visto desde arriba, señalá los 4 lóbulos y escribí una función de cada uno.", guia: "Frontal (pensamiento, movimiento voluntario), parietal (tacto, orientación), temporal (audición, lenguaje), occipital (visión).", puntos: 3 },
    ],
  },
  {
    id: "cuerpo-p",
    titulo: "El Cuerpo Humano — Sistemas",
    nivel: "Primaria",
    modulo: "Cuerpo Humano",
    emoji: "🫀",
    color: "#f87171",
    duracion: "45 min",
    preguntas: [
      { tipo: "multiple", enunciado: "¿Cuántos sistemas tiene el cuerpo humano?", opciones: ["5", "8", "11", "20"], correcta: 2, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué sistema controla y coordina a todos los demás?", opciones: ["Digestivo", "Respiratorio", "Nervioso", "Circulatorio"], correcta: 2, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué órgano filtra la sangre y produce orina?", opciones: ["Hígado", "Pulmón", "Riñón", "Bazo"], correcta: 2, puntos: 1 },
      { tipo: "vf", enunciado: "Los sistemas del cuerpo trabajan de manera independiente, sin relacionarse.", correcta: false, puntos: 1 },
      { tipo: "vf", enunciado: "El sistema circulatorio lleva los nutrientes del sistema digestivo a todas las células.", correcta: true, puntos: 1 },
      { tipo: "vf", enunciado: "El esqueleto solo sirve para dar forma al cuerpo.", correcta: false, puntos: 1 },
      { tipo: "completar", enunciado: "El sistema ___ transforma los alimentos en nutrientes que el cuerpo puede usar.", respuesta: "digestivo", puntos: 1 },
      { tipo: "completar", enunciado: "El sistema ___ y el ___ trabajan juntos para llevar oxígeno a las células.", respuesta: "respiratorio / circulatorio", puntos: 2 },
      { tipo: "desarrollo", enunciado: "Elegí 3 sistemas del cuerpo humano y explicá cómo se relacionan entre sí.", guia: "Por ejemplo: digestivo (absorbe nutrientes) → circulatorio (los transporta) → células (los usan para producir energía con el O₂ del sistema respiratorio).", puntos: 3 },
    ],
  },
  {
    id: "ecosistemas-p",
    titulo: "Seres Vivos y Ecosistemas",
    nivel: "Primaria",
    modulo: "Cuerpo Humano",
    emoji: "🌳",
    color: "#22c55e",
    duracion: "40 min",
    preguntas: [
      { tipo: "multiple", enunciado: "¿Cómo se llama la relación de alimentación entre seres vivos?", opciones: ["Fotosíntesis", "Cadena alimentaria", "Respiración", "Digestión"], correcta: 1, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Cómo se llaman los organismos que fabrican su propio alimento?", opciones: ["Consumidores", "Descomponedores", "Productores", "Predadores"], correcta: 2, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué hace un descomponedor?", opciones: ["Caza animales", "Produce oxígeno", "Descompone materia muerta y la devuelve al suelo", "Come plantas"], correcta: 2, puntos: 1 },
      { tipo: "vf", enunciado: "Las plantas son productoras porque fabrican su alimento con la fotosíntesis.", correcta: true, puntos: 1 },
      { tipo: "vf", enunciado: "Un ecosistema incluye solo a los seres vivos, no al ambiente.", correcta: false, puntos: 1 },
      { tipo: "vf", enunciado: "Si desaparecen los productores de un ecosistema, toda la cadena se ve afectada.", correcta: true, puntos: 1 },
      { tipo: "completar", enunciado: "Una cadena alimentaria siempre comienza con un/una ___ (ser que fabrica su alimento).", respuesta: "productor / planta", puntos: 1 },
      { tipo: "completar", enunciado: "La energía en una cadena alimentaria fluye desde los ___ hacia los consumidores.", respuesta: "productores", puntos: 1 },
      { tipo: "desarrollo", enunciado: "Escribí una cadena alimentaria de 4 eslabones. Indicá qué rol cumple cada ser vivo (productor, consumidor primario, secundario, terciario).", guia: "Ejemplo: pasto (productor) → conejo (consumidor primario) → zorro (consumidor secundario) → águila (consumidor terciario).", puntos: 3 },
    ],
  },

  // ──────────────────────────────────────────────
  // SECUNDARIA
  // ──────────────────────────────────────────────
  {
    id: "celula-animal-s",
    titulo: "Biología Celular — Organelas",
    nivel: "Secundaria",
    modulo: "Célula Animal",
    emoji: "🔬",
    color: "#4ade80",
    duracion: "60 min",
    preguntas: [
      { tipo: "multiple", enunciado: "¿Qué teoría explica el origen mitocondrial de la célula eucariota?", opciones: ["Teoría de la evolución", "Teoría endosimbiótica", "Teoría celular", "Teoría del RNA"], correcta: 1, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Cuál es la función del retículo endoplasmático rugoso (RER)?", opciones: ["Producir energía", "Sintetizar y procesar proteínas con ribosomas", "Digerir organelas dañadas", "Producir lípidos"], correcta: 1, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué organela clasifica, modifica y envía proteínas?", opciones: ["Lisosoma", "Mitocondria", "Aparato de Golgi", "Nucleolo"], correcta: 2, puntos: 1 },
      { tipo: "vf", enunciado: "La autofagia es el proceso por el cual la célula digiere sus propias organelas dañadas.", correcta: true, puntos: 1 },
      { tipo: "vf", enunciado: "El transporte activo no requiere energía (ATP).", correcta: false, puntos: 1 },
      { tipo: "vf", enunciado: "Las células con alta demanda energética tienen más mitocondrias.", correcta: true, puntos: 1 },
      { tipo: "completar", enunciado: "El flujo de síntesis de proteínas secretadas es: ribosoma → ___ → ___ → membrana/exterior.", respuesta: "RER / aparato de Golgi", puntos: 2 },
      { tipo: "completar", enunciado: "El transporte que va a favor del gradiente de concentración se llama transporte ___.", respuesta: "pasivo", puntos: 1 },
      { tipo: "desarrollo", enunciado: "Explicá la teoría endosimbiótica. ¿Qué evidencias la sustentan? ¿Qué organela se originó así?", guia: "La mitocondria (y cloroplasto en vegetales) fue originalmente una bacteria que fue incorporada por una célula mayor. Evidencias: ADN propio circular, ribosomas 70S, doble membrana, se divide por fisión binaria.", puntos: 4 },
    ],
  },
  {
    id: "adn-s",
    titulo: "ADN, Transcripción y Traducción",
    nivel: "Secundaria",
    modulo: "ADN & Genética",
    emoji: "🧬",
    color: "#60a5fa",
    duracion: "60 min",
    preguntas: [
      { tipo: "multiple", enunciado: "¿Cómo se llama el proceso de síntesis de ARNm a partir de ADN?", opciones: ["Traducción", "Replicación", "Transcripción", "Mutación"], correcta: 2, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué tipo de ARN transporta aminoácidos al ribosoma?", opciones: ["ARNm", "ARNr", "ARNt", "ARNmi"], correcta: 2, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué es una mutación silenciosa?", opciones: ["Una mutación que mata la célula", "Un cambio que no altera el aminoácido producido", "Una mutación que duplica genes", "Una mutación en el ARN"], correcta: 1, puntos: 1 },
      { tipo: "vf", enunciado: "La replicación del ADN es semiconservativa: cada nueva cadena retiene una hebra parental.", correcta: true, puntos: 1 },
      { tipo: "vf", enunciado: "El código genético es diferente en cada especie de ser vivo.", correcta: false, puntos: 1 },
      { tipo: "vf", enunciado: "Las histonas son proteínas que regulan la expresión génica compactando el ADN.", correcta: true, puntos: 1 },
      { tipo: "completar", enunciado: "Dada la cadena molde 3'-TACGCA-5', la cadena de ARNm resultante es: ___.", respuesta: "5'-AUGCGU-3'", puntos: 2 },
      { tipo: "completar", enunciado: "El experimento de ___ y ___ demostró que la replicación del ADN es semiconservativa.", respuesta: "Meselson y Stahl", puntos: 1 },
      { tipo: "desarrollo", enunciado: "Describí el dogma central de la biología molecular (ADN → ARN → Proteína), indicando el nombre de cada proceso, dónde ocurre y qué enzimas intervienen.", guia: "Replicación (núcleo, ADN polimerasa), Transcripción (núcleo, ARN polimerasa), Traducción (ribosoma en citoplasma, aminoacil-ARNt sintetasa). ARNm sale del núcleo al citoplasma.", puntos: 4 },
    ],
  },
  {
    id: "nervioso-s",
    titulo: "Potencial de Acción y Sinapsis",
    nivel: "Secundaria",
    modulo: "Sistema Nervioso",
    emoji: "🧠",
    color: "#a78bfa",
    duracion: "60 min",
    preguntas: [
      { tipo: "multiple", enunciado: "¿Cuál es el potencial de reposo típico de una neurona?", opciones: ["+70 mV", "-70 mV", "0 mV", "+35 mV"], correcta: 1, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué ion entra masivamente durante la despolarización?", opciones: ["K⁺", "Ca²⁺", "Na⁺", "Cl⁻"], correcta: 2, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué es el período refractario absoluto?", opciones: ["Tiempo en que la neurona dispara dos veces", "Período en que no puede generarse un nuevo potencial de acción", "Fase de repolarización", "Tiempo de sinapsis"], correcta: 1, puntos: 1 },
      { tipo: "vf", enunciado: "La conducción saltatoria es más rápida que la conducción continua.", correcta: true, puntos: 1 },
      { tipo: "vf", enunciado: "Un potencial de acción sigue la ley 'todo o nada': o se dispara completo o no.", correcta: true, puntos: 1 },
      { tipo: "vf", enunciado: "En la esclerosis múltiple se destruye la vaina de mielina, acelerando la conducción.", correcta: false, puntos: 1 },
      { tipo: "completar", enunciado: "La acetilcolina es un ejemplo de ___: molécula que transmite la señal entre neuronas.", respuesta: "neurotransmisor", puntos: 1 },
      { tipo: "completar", enunciado: "La ___ garantiza que el impulso solo viaje en una dirección (dendrita → axón → terminal).", respuesta: "sinapsis química (liberación de neurotransmisor solo en una dirección)", puntos: 1 },
      { tipo: "desarrollo", enunciado: "Graficá un potencial de acción (eje X = tiempo, eje Y = voltaje). Señalá todas las fases e indicá qué canales iónicos se abren/cierran en cada una.", guia: "Reposo (-70 mV, canales cerrados), umbral (-55 mV), despolarización (canales Na⁺ abiertos → +30 mV), repolarización (Na⁺ se cierran, K⁺ se abren), hiperpolarización (-80 mV, K⁺ se cierran lento), vuelta al reposo.", puntos: 4 },
    ],
  },
  {
    id: "cardiovascular-s",
    titulo: "Sistema Cardiovascular — Fisiología",
    nivel: "Secundaria",
    modulo: "Corazón Humano",
    emoji: "🫀",
    color: "#f87171",
    duracion: "60 min",
    preguntas: [
      { tipo: "multiple", enunciado: "¿Qué estructura inicia el ciclo cardíaco generando el impulso eléctrico?", opciones: ["Nódulo auriculoventricular", "Nódulo sinoauricular (marcapasos)", "Haz de His", "Fibras de Purkinje"], correcta: 1, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Cómo se calcula el gasto cardíaco?", opciones: ["FC × presión arterial", "FC × volumen sistólico", "Volumen sistólico / FC", "FC + volumen sistólico"], correcta: 1, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué es la presión sistólica?", opciones: ["Presión mínima entre latidos", "Presión máxima durante la contracción ventricular", "Presión en las venas", "Presión en los capilares"], correcta: 1, puntos: 1 },
      { tipo: "vf", enunciado: "El ventrículo izquierdo tiene la pared más gruesa porque bombea sangre a todo el cuerpo.", correcta: true, puntos: 1 },
      { tipo: "vf", enunciado: "En la circulación pulmonar, la sangre va del corazón a los riñones.", correcta: false, puntos: 1 },
      { tipo: "vf", enunciado: "El sistema nervioso simpático aumenta la frecuencia cardíaca.", correcta: true, puntos: 1 },
      { tipo: "completar", enunciado: "Si FC = 72 lat/min y volumen sistólico = 70 mL, el gasto cardíaco es ___ L/min.", respuesta: "5,04 L/min", puntos: 2 },
      { tipo: "completar", enunciado: "Un infarto de miocardio ocurre cuando se obstruye una ___ coronaria, privando al músculo cardíaco de oxígeno.", respuesta: "arteria", puntos: 1 },
      { tipo: "desarrollo", enunciado: "Explicá el ciclo cardíaco completo (0,8 s): fases, válvulas que se abren/cierran y presiones involucradas.", guia: "Sístole auricular (0,1 s, se abren válvulas AV), sístole ventricular (0,3 s, se cierran AV, se abren semilunares), diástole general (0,4 s, se cierran semilunares). Mencionar ruidos cardíacos S1 y S2.", puntos: 4 },
    ],
  },
  {
    id: "respiratorio-s",
    titulo: "Sistema Respiratorio — Fisiología",
    nivel: "Secundaria",
    modulo: "Sistema Respiratorio",
    emoji: "🫁",
    color: "#38bdf8",
    duracion: "60 min",
    preguntas: [
      { tipo: "multiple", enunciado: "¿Qué ley física explica que al aumentar el volumen pulmonar baje la presión y entre aire?", opciones: ["Ley de Fick", "Ley de Henry", "Ley de Boyle", "Ley de Charles"], correcta: 2, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué es el surfactante pulmonar?", opciones: ["Músculo que mueve los pulmones", "Sustancia que reduce la tensión superficial alveolar", "Tipo de glóbulo rojo", "Hormona respiratoria"], correcta: 1, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Dónde están los quimiorreceptores que detectan el CO₂ y regulan la respiración?", opciones: ["Pulmones", "Corazón", "Bulbo raquídeo y aorta", "Riñones"], correcta: 2, puntos: 1 },
      { tipo: "vf", enunciado: "El O₂ difunde del alvéolo al capilar porque su presión parcial es mayor en el alvéolo.", correcta: true, puntos: 1 },
      { tipo: "vf", enunciado: "La hemoglobina transporta O₂ de forma directamente proporcional a la temperatura.", correcta: false, puntos: 1 },
      { tipo: "vf", enunciado: "Los alpinistas de altura tienen mayor cantidad de glóbulos rojos por adaptación a la hipoxia.", correcta: true, puntos: 1 },
      { tipo: "completar", enunciado: "La falta de surfactante en bebés prematuros causa el ___, enfermedad que dificulta respirar.", respuesta: "síndrome de distrés respiratorio neonatal", puntos: 1 },
      { tipo: "completar", enunciado: "La presión parcial de O₂ en el alvéolo es ~___ mmHg y en el capilar venoso ~___ mmHg.", respuesta: "104 / 40", puntos: 1 },
      { tipo: "desarrollo", enunciado: "Describí el transporte de O₂ en la sangre. ¿Qué factores desplazan la curva de disociación de la hemoglobina y qué significa fisiológicamente?", guia: "O₂ se une a la hemoglobina (HbO₂). La curva se desplaza a la derecha (↓O₂ liberado) por: ↑Temperatura, ↑CO₂, ↑H⁺ (efecto Bohr), ↑2,3-DPG → favorece liberación de O₂ en tejidos activos.", puntos: 4 },
    ],
  },
  {
    id: "digestivo-s",
    titulo: "Sistema Digestivo — Enzimas y Absorción",
    nivel: "Secundaria",
    modulo: "Sistema Digestivo",
    emoji: "🍽️",
    color: "#fb923c",
    duracion: "60 min",
    preguntas: [
      { tipo: "multiple", enunciado: "¿Qué enzima salival comienza la digestión del almidón?", opciones: ["Pepsina", "Lipasa", "Amilasa salival", "Tripsina"], correcta: 2, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué función tiene la bilis en la digestión?", opciones: ["Digerir proteínas", "Emulsificar grasas para facilitar la acción de la lipasa", "Neutralizar ácidos en el intestino", "Producir enzimas digestivas"], correcta: 1, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Cómo se absorbe la glucosa en el intestino delgado?", opciones: ["Difusión simple", "Cotransporte activo secundario con Na⁺", "Osmosis", "Endocitosis"], correcta: 1, puntos: 1 },
      { tipo: "vf", enunciado: "El HCl del estómago activa el pepsinógeno y crea un pH ácido necesario para la digestión proteica.", correcta: true, puntos: 1 },
      { tipo: "vf", enunciado: "Los lípidos absorbidos pasan directamente a los capilares sanguíneos.", correcta: false, puntos: 1 },
      { tipo: "vf", enunciado: "El microbioma intestinal produce vitaminas y contribuye a la inmunidad.", correcta: true, puntos: 1 },
      { tipo: "completar", enunciado: "Las microvellosidades del intestino delgado forman la 'orla en cepillo' que aumenta la ___ de absorción.", respuesta: "superficie", puntos: 1 },
      { tipo: "completar", enunciado: "Las grasas absorbidas se transportan por el vaso ___ de la vellosidad intestinal, no por los capilares sanguíneos.", respuesta: "quilífero (linfático)", puntos: 1 },
      { tipo: "desarrollo", enunciado: "Construí una tabla: Macromolécula → Enzima principal → Producto final → Lugar de absorción. Incluí carbohidratos, proteínas y lípidos.", guia: "Carbohidratos: amilasa/maltasa → glucosa → capilares sanguíneos. Proteínas: pepsina/tripsina → aminoácidos → capilares sanguíneos. Lípidos: lipasa pancreática → ácidos grasos+glicerol → vasos quilíferos.", puntos: 4 },
    ],
  },
  {
    id: "cerebro-s",
    titulo: "Cerebro — Corteza y Neuroplasticidad",
    nivel: "Secundaria",
    modulo: "Cerebro Humano",
    emoji: "🧠",
    color: "#c084fc",
    duracion: "60 min",
    preguntas: [
      { tipo: "multiple", enunciado: "¿Qué área cortical es responsable del lenguaje expresivo (producción)?", opciones: ["Área de Wernicke", "Área motora primaria", "Área de Broca", "Área de asociación parietal"], correcta: 2, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué es la neuroplasticidad?", opciones: ["La capacidad del cerebro de producir nuevas neuronas ilimitadas", "La capacidad del cerebro de reorganizar sus conexiones", "La rigidez de los circuitos neurales", "La mielinización del axón"], correcta: 1, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué región está relacionada con el procesamiento emocional y el miedo?", opciones: ["Hipocampo", "Hipotálamo", "Amígdala", "Cerebelo"], correcta: 2, puntos: 1 },
      { tipo: "vf", enunciado: "El hipocampo es fundamental para la consolidación de la memoria a largo plazo.", correcta: true, puntos: 1 },
      { tipo: "vf", enunciado: "La sustancia gris está formada principalmente por axones mielinizados.", correcta: false, puntos: 1 },
      { tipo: "vf", enunciado: "El Alzheimer afecta primero el hipocampo, causando pérdida de memoria reciente.", correcta: true, puntos: 1 },
      { tipo: "completar", enunciado: "Un paciente con daño en el área de Wernicke puede ___ pero no ___ el lenguaje.", respuesta: "hablar / comprender", puntos: 2 },
      { tipo: "completar", enunciado: "El cerebro humano consume el ___ % de la energía corporal, aunque solo representa el 2% del peso.", respuesta: "20", puntos: 1 },
      { tipo: "desarrollo", enunciado: "Describí el sistema límbico: estructuras que lo componen, funciones y su relación con el estrés postraumático (TEPT).", guia: "Estructuras: amígdala (emociones/miedo), hipocampo (memoria), hipotálamo (homeostasis/emociones), giro cingulado. En TEPT: la amígdala queda hiperactiva, el hipocampo no consolida el contexto correctamente, causando flashbacks.", puntos: 4 },
    ],
  },
  {
    id: "fotosintesis-s",
    titulo: "Fotosíntesis — Fases y Mecanismos",
    nivel: "Secundaria",
    modulo: "Célula Vegetal",
    emoji: "🌿",
    color: "#34d399",
    duracion: "60 min",
    preguntas: [
      { tipo: "multiple", enunciado: "¿Dónde ocurre la fase luminosa de la fotosíntesis?", opciones: ["Estroma del cloroplasto", "Membrana tilacoidal", "Citoplasma", "Mitocondria"], correcta: 1, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué enzima es clave en el ciclo de Calvin?", opciones: ["ATP sintetasa", "RuBisCO", "ARN polimerasa", "Fosfolipasa"], correcta: 1, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué produce la fotólisis del agua?", opciones: ["CO₂ + H₂O", "O₂ + H⁺ + electrones", "Glucosa + O₂", "NADPH + ATP"], correcta: 1, puntos: 1 },
      { tipo: "vf", enunciado: "El fotosistema II absorbe luz y oxida el agua, liberando O₂.", correcta: true, puntos: 1 },
      { tipo: "vf", enunciado: "El ciclo de Calvin ocurre en la membrana tilacoidal.", correcta: false, puntos: 1 },
      { tipo: "vf", enunciado: "Las plantas C4 evitan la fotorrespiración concentrando CO₂ en células del mesófilo.", correcta: true, puntos: 1 },
      { tipo: "completar", enunciado: "La ecuación general de la fotosíntesis es: 6CO₂ + 6H₂O + energía lumínica → ___ + 6O₂.", respuesta: "C₆H₁₂O₆ (glucosa)", puntos: 1 },
      { tipo: "completar", enunciado: "En la cadena de transporte de electrones tilacoidal se genera ___ y ___ usados en el ciclo de Calvin.", respuesta: "ATP y NADPH", puntos: 1 },
      { tipo: "desarrollo", enunciado: "Explicá la cadena de transporte de electrones de la fase luminosa: ¿cómo se genera ATP y NADPH? ¿Qué rol tiene el fotosistema I y II?", guia: "FSII: absorbe luz (680 nm), oxida agua (O₂), los e⁻ pasan por plastoquinona, citocromo b6f, plastocianina → FSI (700 nm) → ferredoxina → NADP reductasa → NADPH. El gradiente de H⁺ por el citocromo b6f impulsa la ATP sintasa.", puntos: 4 },
    ],
  },
  {
    id: "homeostasis-s",
    titulo: "Homeostasis e Integración de Sistemas",
    nivel: "Secundaria",
    modulo: "Cuerpo Humano",
    emoji: "🧬",
    color: "#f87171",
    duracion: "60 min",
    preguntas: [
      { tipo: "multiple", enunciado: "¿Qué es la homeostasis?", opciones: ["El crecimiento del organismo", "El mantenimiento del equilibrio interno del cuerpo", "La respuesta inmune", "La regulación hormonal exclusivamente"], correcta: 1, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué hormona reduce la glucemia al promover la entrada de glucosa a las células?", opciones: ["Glucagón", "Adrenalina", "Insulina", "Cortisol"], correcta: 2, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué sistema regula la presión arterial mediante el eje renina-angiotensina-aldosterona?", opciones: ["Sistema nervioso", "Sistema digestivo", "Sistema renal / urinario", "Sistema respiratorio"], correcta: 2, puntos: 1 },
      { tipo: "vf", enunciado: "En la diabetes tipo 1, el páncreas no produce insulina por destrucción autoinmune.", correcta: true, puntos: 1 },
      { tipo: "vf", enunciado: "En la retroalimentación negativa, la respuesta amplifica el estímulo original.", correcta: false, puntos: 1 },
      { tipo: "vf", enunciado: "Durante el ejercicio intenso, el sistema simpático aumenta la frecuencia cardíaca y respiratoria.", correcta: true, puntos: 1 },
      { tipo: "completar", enunciado: "El eje ___ - ___ - suprarrenal regula la respuesta al estrés liberando cortisol.", respuesta: "hipotálamo / hipófisis", puntos: 2 },
      { tipo: "completar", enunciado: "La insuficiencia renal causa retención de ___ y edemas, sobrecargando el sistema cardiovascular.", respuesta: "líquidos", puntos: 1 },
      { tipo: "desarrollo", enunciado: "Explicá cómo el cuerpo regula la glucemia mediante retroalimentación negativa. Incluí el papel del páncreas, insulina, glucagón e hígado.", guia: "Glucemia alta → células beta del páncreas → insulina → células toman glucosa → glucemia baja. Glucemia baja → células alfa → glucagón → hígado hace glucogenólisis → glucosa → glucemia sube. Es retroalimentación negativa.", puntos: 4 },
    ],
  },
  {
    id: "mitosis-s",
    titulo: "Mitosis y Meiosis",
    nivel: "Secundaria",
    modulo: "ADN & Genética",
    emoji: "🔬",
    color: "#60a5fa",
    duracion: "60 min",
    preguntas: [
      { tipo: "multiple", enunciado: "¿En qué fase de la mitosis los cromosomas se alinean en el ecuador celular?", opciones: ["Profase", "Anafase", "Metafase", "Telofase"], correcta: 2, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Cuántas células haploides produce la meiosis?", opciones: ["2 diploides", "4 haploides", "2 haploides", "4 diploides"], correcta: 1, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué proceso en la meiosis I genera diversidad genética al intercambiar segmentos entre cromosomas homólogos?", opciones: ["Segregación", "Entrecruzamiento (crossing-over)", "Citocinesis", "Replicación"], correcta: 1, puntos: 1 },
      { tipo: "vf", enunciado: "La mitosis produce células genéticamente idénticas a la célula madre.", correcta: true, puntos: 1 },
      { tipo: "vf", enunciado: "La meiosis se usa para la reproducción asexual.", correcta: false, puntos: 1 },
      { tipo: "vf", enunciado: "En la anafase mitótica, las cromátidas hermanas se separan y van a polos opuestos.", correcta: true, puntos: 1 },
      { tipo: "completar", enunciado: "Una célula con 46 cromosomas (2n=46) produce gametos con ___ cromosomas.", respuesta: "23", puntos: 1 },
      { tipo: "completar", enunciado: "Las fases de la mitosis en orden son: pro-, ___, meta-, ana-, telo- y citocinesis.", respuesta: "prometafase", puntos: 1 },
      { tipo: "desarrollo", enunciado: "Compará mitosis y meiosis en una tabla: número de divisiones, células resultantes, ploidía, función biológica y dónde ocurre en el cuerpo.", guia: "Mitosis: 1 división, 2 células diploides (2n), crecimiento/reparación, en células somáticas. Meiosis: 2 divisiones, 4 células haploides (n), reproducción sexual, en gónadas.", puntos: 4 },
    ],
  },
  {
    id: "inmuno-s",
    titulo: "Sistema Inmunológico",
    nivel: "Secundaria",
    modulo: "Cuerpo Humano",
    emoji: "🦠",
    color: "#f59e0b",
    duracion: "60 min",
    preguntas: [
      { tipo: "multiple", enunciado: "¿Qué célula presenta antígenos a los linfocitos T?", opciones: ["Neutrófilos", "Células dendríticas (presentadoras de antígeno)", "Eritrocitos", "Plaquetas"], correcta: 1, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué tipo de inmunidad provee la vacunación?", opciones: ["Innata pasiva", "Adaptativa activa", "Innata activa", "Adaptativa pasiva"], correcta: 1, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Cuál es la función de los anticuerpos (inmunoglobulinas)?", opciones: ["Fagocitar bacterias directamente", "Neutralizar antígenos y marcarlos para destrucción", "Producir fiebre", "Activar el complemento exclusivamente"], correcta: 1, puntos: 1 },
      { tipo: "vf", enunciado: "Los linfocitos B producen anticuerpos específicos contra un antígeno.", correcta: true, puntos: 1 },
      { tipo: "vf", enunciado: "La inflamación es siempre perjudicial para el organismo.", correcta: false, puntos: 1 },
      { tipo: "vf", enunciado: "Las enfermedades autoinmunes ocurren cuando el sistema inmune ataca tejidos propios.", correcta: true, puntos: 1 },
      { tipo: "completar", enunciado: "La primera línea de defensa del sistema inmune innato incluye la ___, el ___ y las mucosas.", respuesta: "piel / pH ácido (o cílios)", puntos: 1 },
      { tipo: "completar", enunciado: "Los linfocitos ___ matan directamente células infectadas por virus o células tumorales.", respuesta: "T citotóxicos (CD8+)", puntos: 1 },
      { tipo: "desarrollo", enunciado: "Explicá cómo funciona la inmunidad adaptativa humoral ante la primera exposición a un patógeno y ante una segunda exposición (memoria inmunológica).", guia: "1ª exposición: APC presenta antígeno → linfocito Th activa linfocito B → plasmocitos producen IgM → algunos B se convierten en células de memoria. 2ª exposición: células de memoria responden rápido, producen IgG en mayor cantidad → respuesta secundaria más intensa.", puntos: 4 },
    ],
  },
  {
    id: "genetica-s",
    titulo: "Genética Mendeliana y Herencia",
    nivel: "Secundaria",
    modulo: "ADN & Genética",
    emoji: "🧬",
    color: "#60a5fa",
    duracion: "60 min",
    preguntas: [
      { tipo: "multiple", enunciado: "En un cruce Aa × Aa, ¿qué proporción fenotípica se espera?", opciones: ["1:1", "3:1 (dominante:recesivo)", "1:2:1", "Todos dominantes"], correcta: 1, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué ley de Mendel establece que los alelos de diferentes genes se heredan independientemente?", opciones: ["Ley de la dominancia", "Ley de la segregación", "Ley de la segregación independiente", "Ley de la codominancia"], correcta: 2, puntos: 1 },
      { tipo: "multiple", enunciado: "Un individuo con genotipo Aa se llama:", opciones: ["Homocigoto dominante", "Homocigoto recesivo", "Heterocigoto", "Hemicigoto"], correcta: 2, puntos: 1 },
      { tipo: "vf", enunciado: "En la codominancia, ambos alelos se expresan simultáneamente en el fenotipo.", correcta: true, puntos: 1 },
      { tipo: "vf", enunciado: "La herencia ligada al sexo ocurre en genes del cromosoma X o Y.", correcta: true, puntos: 1 },
      { tipo: "vf", enunciado: "Si un carácter es recesivo, nunca puede expresarse en presencia de un alelo dominante.", correcta: true, puntos: 1 },
      { tipo: "completar", enunciado: "En un cruce AaBb × AaBb, la proporción fenotípica esperada es ___ : ___ : ___ : ___ (AABB:AABb:AaBb:aabb).", respuesta: "9:3:3:1", puntos: 2 },
      { tipo: "completar", enunciado: "La hemofilia es un ejemplo de herencia ___ al sexo (cromosoma X).", respuesta: "ligada", puntos: 1 },
      { tipo: "desarrollo", enunciado: "Resolvé: si un hombre daltónico (XᵈY) se cruza con una mujer portadora (X^Xᵈ), ¿cuál es la probabilidad de tener una hija daltónica? ¿Y un hijo daltónico? Mostrá el cuadro de Punnett.", guia: "Gametos: Xᵈ, Y (padre) × X, Xᵈ (madre). Hijas: XX (normal) y XᵈX (portadora) y XX (normal) y XᵈXᵈ (daltónica). 50% hijas daltónicas. Hijos: XY (normal) y XᵈY (daltónico). 50% hijos daltónicos.", puntos: 4 },
    ],
  },
];

const moduleColors: Record<string, string> = {
  "Célula Animal": "#4ade80",
  "ADN & Genética": "#60a5fa",
  "Sistema Nervioso": "#a78bfa",
  "Célula Vegetal": "#34d399",
  "Cuerpo Humano": "#f87171",
  "Corazón Humano": "#f87171",
  "Cerebro Humano": "#c084fc",
  "Sistema Respiratorio": "#38bdf8",
  "Sistema Digestivo": "#fb923c",
};

const MODULOS = Array.from(new Set(evaluaciones.map(e => e.modulo)));

async function exportEvalPDF(ev: Evaluacion, showAnswers: boolean) {
  const { default: jsPDF } = await import("jspdf");
  const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const W = 210;
  const mx = 15;
  const cW = W - mx * 2;
  let y = 15;

  const checkPage = (needed: number) => {
    if (y + needed > 282) { pdf.addPage(); y = 15; }
  };

  const BLANK_LINES = ev.nivel === "Primaria" ? 3 : 4;

  // Header
  pdf.setFillColor(15, 23, 42);
  pdf.rect(0, 0, W, 28, "F");
  pdf.setFontSize(8); pdf.setFont("helvetica", "normal"); pdf.setTextColor(160, 160, 160);
  pdf.text(`BioAula3D · ${ev.nivel} · ${ev.modulo}${showAnswers ? " · CLAVE DE RESPUESTAS" : ""}`, mx, 9);
  pdf.setFontSize(13); pdf.setFont("helvetica", "bold"); pdf.setTextColor(255, 255, 255);
  pdf.text(ev.titulo, mx, 20);
  if (showAnswers) {
    pdf.setFontSize(9); pdf.setFont("helvetica", "bold"); pdf.setTextColor(251, 191, 36);
    pdf.text("CLAVE DE RESPUESTAS — USO DOCENTE", W - mx, 20, { align: "right" });
  }
  y = 34;

  if (!showAnswers) {
    pdf.setFontSize(9); pdf.setFont("helvetica", "normal"); pdf.setTextColor(60, 60, 60);
    pdf.text(`Nombre: _________________________________   Fecha: _______________   Curso: _________   Nota: _______`, mx, y);
    y += 5;
    pdf.setDrawColor(180, 180, 180);
    pdf.line(mx, y, mx + cW, y);
    y += 5;
  }

  const puntajeTotal = ev.preguntas.reduce((s, p) => s + p.puntos, 0);
  pdf.setFontSize(8); pdf.setFont("helvetica", "normal"); pdf.setTextColor(80, 80, 80);
  pdf.text(`Duración: ${ev.duracion}   ·   Puntaje total: ${puntajeTotal} pts`, mx, y);
  y += 7;

  const multiples = ev.preguntas.filter(p => p.tipo === "multiple") as PreguntaMultiple[];
  const vfs = ev.preguntas.filter(p => p.tipo === "vf") as PreguntaVF[];
  const completar = ev.preguntas.filter(p => p.tipo === "completar") as PreguntaCompletar[];
  const desarrollo = ev.preguntas.filter(p => p.tipo === "desarrollo") as PreguntaDesarrollo[];

  const renderSection = (titulo: string, pts: number) => {
    checkPage(12);
    pdf.setDrawColor(200, 200, 200);
    pdf.line(mx, y, mx + cW, y);
    y += 5;
    pdf.setFontSize(10); pdf.setFont("helvetica", "bold"); pdf.setTextColor(15, 23, 42);
    pdf.text(titulo, mx, y);
    pdf.setFontSize(8); pdf.setFont("helvetica", "normal"); pdf.setTextColor(100, 100, 100);
    pdf.text(`(${pts} pts)`, W - mx, y, { align: "right" });
    y += 7;
  };

  // Multiple choice
  if (multiples.length) {
    const ptsMC = multiples.reduce((s, p) => s + p.puntos, 0);
    renderSection("Sección A — Opción múltiple: marcá con un círculo la letra correcta.", ptsMC);
    multiples.forEach((p, i) => {
      const qLines = pdf.splitTextToSize(`${i + 1}. ${p.enunciado}`, cW);
      checkPage(qLines.length * 4.5 + 30);
      pdf.setFontSize(9); pdf.setFont("helvetica", "normal"); pdf.setTextColor(20, 20, 20);
      pdf.text(qLines, mx, y);
      y += qLines.length * 4.5 + 2;
      const letters = ["a", "b", "c", "d"];
      const colW = cW / 2;
      p.opciones.forEach((op, oi) => {
        const col = oi % 2 === 0 ? mx + 4 : mx + 4 + colW;
        const row = y + Math.floor(oi / 2) * 6;
        const isCorrect = oi === p.correcta;
        if (showAnswers && isCorrect) {
          pdf.setFont("helvetica", "bold"); pdf.setTextColor(34, 197, 94);
        } else {
          pdf.setFont("helvetica", "normal"); pdf.setTextColor(50, 50, 50);
        }
        const opLines = pdf.splitTextToSize(`${letters[oi]}) ${op}`, colW - 6);
        pdf.text(opLines, col, row);
      });
      y += Math.ceil(p.opciones.length / 2) * 6 + 4;
    });
  }

  // Verdadero/Falso
  if (vfs.length) {
    const ptsVF = vfs.reduce((s, p) => s + p.puntos, 0);
    renderSection("Sección B — Verdadero (V) o Falso (F): circulá la opción correcta.", ptsVF);
    vfs.forEach((p, i) => {
      const qLines = pdf.splitTextToSize(`${i + 1}. ${p.enunciado}`, cW - 25);
      checkPage(qLines.length * 4.5 + 6);
      pdf.setFontSize(9); pdf.setFont("helvetica", "normal"); pdf.setTextColor(20, 20, 20);
      pdf.text(qLines, mx, y);
      if (showAnswers) {
        pdf.setFont("helvetica", "bold"); pdf.setTextColor(34, 197, 94);
        pdf.text(p.correcta ? "V" : "F", W - mx, y, { align: "right" });
      } else {
        pdf.setTextColor(80, 80, 80);
        pdf.text("V  /  F", W - mx, y, { align: "right" });
      }
      y += qLines.length * 4.5 + 3;
    });
  }

  // Completar
  if (completar.length) {
    const ptsCo = completar.reduce((s, p) => s + p.puntos, 0);
    renderSection("Sección C — Completá los espacios en blanco.", ptsCo);
    completar.forEach((p, i) => {
      const qLines = pdf.splitTextToSize(`${i + 1}. ${p.enunciado}`, cW);
      checkPage(qLines.length * 4.5 + BLANK_LINES * 5 + 6);
      pdf.setFontSize(9); pdf.setFont("helvetica", "normal"); pdf.setTextColor(20, 20, 20);
      pdf.text(qLines, mx, y);
      y += qLines.length * 4.5 + 2;
      if (showAnswers) {
        pdf.setFont("helvetica", "bold"); pdf.setTextColor(34, 197, 94);
        pdf.text(`→ ${p.respuesta}`, mx + 4, y);
        y += 6;
      } else {
        pdf.setDrawColor(160, 160, 160);
        pdf.line(mx + 4, y, mx + cW - 4, y);
        y += 6;
      }
      y += 2;
    });
  }

  // Desarrollo
  if (desarrollo.length) {
    const ptsDe = desarrollo.reduce((s, p) => s + p.puntos, 0);
    renderSection("Sección D — Preguntas de desarrollo.", ptsDe);
    desarrollo.forEach((p, i) => {
      const qLines = pdf.splitTextToSize(`${i + 1}. ${p.enunciado}`, cW);
      checkPage(qLines.length * 4.5 + BLANK_LINES * 6 + 12);
      pdf.setFontSize(9); pdf.setFont("helvetica", "normal"); pdf.setTextColor(20, 20, 20);
      pdf.text(qLines, mx, y);
      y += qLines.length * 4.5 + 2;
      pdf.setFontSize(7.5); pdf.setTextColor(120, 120, 120);
      pdf.text(`(${p.puntos} pts)`, mx + 2, y);
      y += 5;
      if (showAnswers) {
        const guiaLines = pdf.splitTextToSize(`Guía de corrección: ${p.guia}`, cW - 4);
        checkPage(guiaLines.length * 4.5 + 4);
        pdf.setFont("helvetica", "bolditalic"); pdf.setTextColor(34, 197, 94); pdf.setFontSize(8);
        pdf.text(guiaLines, mx + 4, y);
        y += guiaLines.length * 4.5 + 4;
      } else {
        for (let l = 0; l < BLANK_LINES; l++) {
          pdf.setDrawColor(180, 180, 180);
          pdf.line(mx + 2, y, mx + cW - 2, y);
          y += 6;
        }
        y += 3;
      }
    });
  }

  // Footer
  const pageCount = (pdf as any).internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    pdf.setPage(i);
    pdf.setFontSize(7); pdf.setFont("helvetica", "normal"); pdf.setTextColor(160, 160, 160);
    pdf.text("BioAula3D · bio-aula3-d-git-main-maxwebs.vercel.app", mx, 293);
    pdf.text(`Página ${i} de ${pageCount}`, W - mx, 293, { align: "right" });
  }
  return pdf;
}

function EvalCard({ ev }: { ev: Evaluacion }) {
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState<"" | "alumno" | "docente">("");

  const puntajeTotal = ev.preguntas.reduce((s, p) => s + p.puntos, 0);

  const handleExport = async (showAnswers: boolean) => {
    setLoading(showAnswers ? "docente" : "alumno");
    try {
      const pdf = await exportEvalPDF(ev, showAnswers);
      pdf.save(`BioAula3D-Eval-${ev.id}${showAnswers ? "-respuestas" : ""}.pdf`);
    } finally { setLoading(""); }
  };

  const tipos = Array.from(new Set(ev.preguntas.map(p => p.tipo)));
  const tipoLabel: Record<string, string> = { multiple: "Opción múltiple", vf: "V/F", completar: "Completar", desarrollo: "Desarrollo" };

  return (
    <div className="border border-slate-800 rounded-2xl overflow-hidden">
      <button onClick={() => setExpanded(!expanded)}
        className="w-full text-left px-5 py-4 flex items-start gap-4 hover:bg-slate-800/30 transition-all">
        <span className="text-2xl flex-shrink-0 mt-0.5">{ev.emoji}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${ev.nivel === "Primaria" ? "bg-emerald-500/20 text-emerald-400" : "bg-blue-500/20 text-blue-400"}`}>
              {ev.nivel === "Primaria" ? "🌱 Primaria" : "🔬 Secundaria"}
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full font-medium"
              style={{ background: (moduleColors[ev.modulo] ?? "#888") + "20", color: moduleColors[ev.modulo] ?? "#888" }}>
              {ev.modulo}
            </span>
            <span className="text-xs text-slate-500">⏱ {ev.duracion}</span>
          </div>
          <h3 className="text-white font-bold text-base leading-tight">{ev.titulo}</h3>
          <div className="flex gap-2 flex-wrap mt-1">
            {tipos.map(t => (
              <span key={t} className="text-[10px] text-slate-500 border border-slate-700 px-1.5 py-0.5 rounded">{tipoLabel[t]}</span>
            ))}
            <span className="text-[10px] text-slate-500 border border-slate-700 px-1.5 py-0.5 rounded">{ev.preguntas.length} preguntas · {puntajeTotal} pts</span>
          </div>
        </div>
        <span className="text-slate-600 text-xs mt-2 flex-shrink-0">{expanded ? "▲" : "▼"}</span>
      </button>

      {expanded && (
        <div className="border-t border-slate-800 px-5 py-4 bg-slate-900/30 space-y-4">
          <div className="grid grid-cols-1 gap-2">
            {ev.preguntas.map((p, i) => (
              <div key={i} className="flex gap-3 text-sm">
                <span className="text-slate-600 flex-shrink-0 w-5">{i + 1}.</span>
                <div className="flex-1">
                  <span className={`text-[10px] mr-2 px-1.5 py-0.5 rounded font-medium ${
                    p.tipo === "multiple" ? "bg-blue-500/20 text-blue-400" :
                    p.tipo === "vf" ? "bg-yellow-500/20 text-yellow-400" :
                    p.tipo === "completar" ? "bg-purple-500/20 text-purple-400" :
                    "bg-orange-500/20 text-orange-400"
                  }`}>{tipoLabel[p.tipo]}</span>
                  <span className="text-slate-300">{p.enunciado}</span>
                </div>
                <span className="text-slate-600 text-xs flex-shrink-0">{p.puntos}pt</span>
              </div>
            ))}
          </div>

          <div className="flex gap-2 pt-2 flex-wrap">
            <button onClick={() => handleExport(false)} disabled={loading !== ""}
              className="flex items-center gap-1.5 px-4 py-2 bg-white text-slate-900 rounded-lg text-sm font-semibold hover:bg-slate-100 transition-all disabled:opacity-60">
              {loading === "alumno" ? "⏳ Generando…" : "📄 PDF alumno"}
            </button>
            <button onClick={() => handleExport(true)} disabled={loading !== ""}
              className="flex items-center gap-1.5 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black rounded-lg text-sm font-semibold transition-all disabled:opacity-60">
              {loading === "docente" ? "⏳ Generando…" : "🔑 PDF con respuestas"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function EvaluacionesPage() {
  const [nivel, setNivel] = useState<Nivel | "Todas">("Todas");
  const [modulo, setModulo] = useState<string | null>(null);

  const filtered = useMemo(() => evaluaciones.filter(e =>
    (nivel === "Todas" || e.nivel === nivel) &&
    (!modulo || e.modulo === modulo)
  ), [nivel, modulo]);

  const primCount = evaluaciones.filter(e => e.nivel === "Primaria").length;
  const secCount = evaluaciones.filter(e => e.nivel === "Secundaria").length;

  return (
    <div className="min-h-screen bg-bio-dark">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 rounded-full px-4 py-1.5 text-amber-400 text-xs font-medium mb-4">
            📝 Herramienta para docentes
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Banco de Evaluaciones</h1>
          <p className="text-slate-400 text-sm leading-relaxed">
            {evaluaciones.length} evaluaciones listas · {primCount} Primaria · {secCount} Secundaria<br />
            Cada una incluye opción múltiple, V/F, completar y desarrollo. Descargá el PDF para el alumno o con clave de respuestas.
          </p>
        </div>

        <div className="flex gap-2 mb-4 flex-wrap">
          {(["Todas", "Primaria", "Secundaria"] as const).map(n => (
            <button key={n} onClick={() => setNivel(n)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all border ${
                nivel === n
                  ? n === "Primaria" ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400"
                    : n === "Secundaria" ? "bg-blue-500/20 border-blue-500/50 text-blue-400"
                    : "bg-slate-700 border-white/20 text-white"
                  : "border-slate-800 text-slate-500 hover:text-slate-300"
              }`}>
              {n === "Primaria" ? "🌱 Primaria" : n === "Secundaria" ? "🔬 Secundaria" : "📚 Todas"}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          <button onClick={() => setModulo(null)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${!modulo ? "border-white/20 text-white bg-slate-700" : "border-slate-800 text-slate-500 hover:text-slate-300"}`}>
            Todos los módulos
          </button>
          {MODULOS.map(m => (
            <button key={m} onClick={() => setModulo(modulo === m ? null : m)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${modulo === m ? "text-black" : "border-slate-800 text-slate-500 hover:text-slate-300"}`}
              style={modulo === m ? { background: moduleColors[m] ?? "#888", borderColor: moduleColors[m] ?? "#888" } : {}}>
              {m}
            </button>
          ))}
        </div>

        <p className="text-slate-500 text-xs mb-4">Mostrando {filtered.length} evaluación{filtered.length !== 1 ? "es" : ""}</p>

        <div className="space-y-3">
          {filtered.map(e => <EvalCard key={e.id} ev={e} />)}
        </div>
      </div>
    </div>
  );
}
