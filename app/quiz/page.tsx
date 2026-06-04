"use client";
import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

type Level = "primaria" | "secundaria";

interface Question {
  id: number;
  question: string;
  options: string[];
  answer: number;
  module: string;
  level: Level;
  explanation: string;
}

const MODULE_STYLE: Record<string, { emoji: string; gradient: string; color: string }> = {
  "Célula Animal":        { emoji: "🔬", gradient: "from-green-600 to-teal-700",    color: "#4ade80" },
  "ADN":                  { emoji: "🧬", gradient: "from-blue-600 to-purple-700",   color: "#60a5fa" },
  "Neurona":              { emoji: "🧠", gradient: "from-purple-600 to-pink-700",   color: "#a78bfa" },
  "Célula Vegetal":       { emoji: "🌿", gradient: "from-emerald-600 to-green-700", color: "#34d399" },
  "Cuerpo Humano":        { emoji: "🫀", gradient: "from-red-600 to-orange-700",    color: "#f87171" },
  "Corazón":              { emoji: "🫀", gradient: "from-red-600 to-rose-700",      color: "#fb7185" },
  "Cerebro":              { emoji: "🧠", gradient: "from-purple-600 to-violet-700", color: "#c084fc" },
  "Sistema Respiratorio": { emoji: "🫁", gradient: "from-sky-600 to-cyan-700",      color: "#38bdf8" },
  "Sistema Digestivo":    { emoji: "🍽️", gradient: "from-orange-600 to-amber-700",  color: "#fb923c" },
  "Sistema Óseo":         { emoji: "🦴", gradient: "from-slate-500 to-zinc-600",    color: "#94a3b8" },
  "Sistema Muscular":     { emoji: "💪", gradient: "from-red-600 to-rose-700",      color: "#f87171" },
  "Ecosistemas":          { emoji: "🌳", gradient: "from-green-700 to-emerald-800", color: "#22c55e" },
  "Microbiología":        { emoji: "🦠", gradient: "from-lime-600 to-green-700",    color: "#4ade80" },
  "Mitosis":              { emoji: "🔬", gradient: "from-indigo-600 to-violet-700", color: "#818cf8" },
  "Inmunología":          { emoji: "🛡️", gradient: "from-red-700 to-rose-800",      color: "#ef4444" },
  "Herencia":             { emoji: "🧩", gradient: "from-amber-600 to-orange-700",  color: "#f59e0b" },
  "Sistema Excretor":     { emoji: "🫘", gradient: "from-yellow-600 to-amber-700",  color: "#facc15" },
  "Sistema Endócrino":    { emoji: "⚗️", gradient: "from-orange-600 to-red-700",    color: "#fb923c" },
  "Reproducción":         { emoji: "🌸", gradient: "from-pink-600 to-rose-700",     color: "#f472b6" },
};

const MODULE_UID: Record<string, string> = {
  "Célula Animal":        "0d9f7f4257224975b2ef83a283709b2f",
  "ADN":                  "212e5422645f4432a61dc2f3aac3c8c8",
  "Neurona":              "03a5173f3d2e46958b6f8be81b1c88be",
  "Célula Vegetal":       "0640c7a14f41400fbdac382c7de1d776",
  "Cuerpo Humano":        "035316622877438cb62de673b8f19217",
  "Corazón":              "10472481071e4375b8233289c277d411",
  "Cerebro":              "28c8971e11334e8b97a2a0d6235992e8",
  "Sistema Respiratorio": "ce09f4099a68467880f46e61eb9a3531",
  "Sistema Digestivo":    "2d3771dd6b8940ffa2312bd97aca6fc3",
  "Sistema Óseo":         "11b57ebfcf6c4e3b88d0cbe618ee70a7",
  "Sistema Muscular":     "31b40fd809b14665b93773936d67c52c",
  "Ecosistemas":          "3407138a2ed842079ad5dd5863b72c90",
  "Microbiología":        "4a310db79e834e07a69ee8d4892d46ee",
};

const questions: Question[] = [
  // --- PRIMARIA ---
  { id: 1, level: "primaria", module: "Célula Animal", question: "¿Cuál es la función principal de la mitocondria?", options: ["Producir energía (ATP)", "Guardar el ADN", "Fabricar proteínas", "Digerir bacterias"], answer: 0, explanation: "La mitocondria es la 'central energética' — convierte los nutrientes en ATP, que es la energía que usa la célula para todo." },
  { id: 2, level: "primaria", module: "ADN", question: "¿Qué forma tiene la molécula de ADN?", options: ["Esfera", "Doble hélice (escalera retorcida)", "Cubo", "Triángulo"], answer: 1, explanation: "El ADN tiene forma de doble hélice, como una escalera en espiral. Fue descubierta por Watson y Crick en 1953." },
  { id: 3, level: "primaria", module: "Célula Vegetal", question: "¿Qué orgánulo hace la fotosíntesis?", options: ["Mitocondria", "Ribosoma", "Cloroplasto", "Núcleo"], answer: 2, explanation: "El cloroplasto capta la luz del sol y la convierte en azúcar (glucosa). Por eso las plantas no necesitan comer." },
  { id: 4, level: "primaria", module: "Neurona", question: "¿Cómo se llaman las 'antenas' de la neurona que reciben señales?", options: ["Axón", "Mielina", "Dendritas", "Núcleo"], answer: 2, explanation: "Las dendritas son las ramificaciones cortas de la neurona que reciben mensajes de otras neuronas." },
  { id: 5, level: "primaria", module: "Cuerpo Humano", question: "¿Qué órgano bombea la sangre por todo el cuerpo?", options: ["Pulmón", "Hígado", "Estómago", "Corazón"], answer: 3, explanation: "El corazón late unas 70 veces por minuto y bombea sangre con oxígeno a todos los órganos del cuerpo." },
  { id: 6, level: "primaria", module: "Célula Animal", question: "¿Dónde está guardado el ADN de la célula?", options: ["Mitocondria", "Núcleo", "Membrana", "Lisosoma"], answer: 1, explanation: "El núcleo es como la 'caja fuerte' de la célula — dentro está el ADN con todas las instrucciones de la vida." },
  { id: 7, level: "primaria", module: "ADN", question: "¿Cuántas letras (bases) tiene el código del ADN?", options: ["2", "4", "6", "26"], answer: 1, explanation: "El ADN usa solo 4 'letras': A (Adenina), T (Timina), G (Guanina) y C (Citosina). ¡Con solo 4 letras se escribe toda la vida!" },
  { id: 8, level: "primaria", module: "Célula Vegetal", question: "¿Qué tiene la célula vegetal que la célula animal NO tiene?", options: ["Núcleo", "Ribosomas", "Pared celular", "Membrana"], answer: 2, explanation: "La pared celular es una capa dura de celulosa que rodea a las células vegetales. Le da la forma cuadrada y las protege." },
  { id: 9, level: "primaria", module: "Cuerpo Humano", question: "¿Para qué sirven los pulmones?", options: ["Digerir la comida", "Tomar oxígeno y expulsar CO₂", "Bombear sangre", "Enviar mensajes al cerebro"], answer: 1, explanation: "Los pulmones intercambian gases: toman oxígeno del aire que respiramos y eliminan el dióxido de carbono que producen las células." },
  { id: 10, level: "primaria", module: "Célula Animal", question: "¿Qué hace el aparato de Golgi?", options: ["Produce energía", "Empaqueta y envía proteínas", "Realiza fotosíntesis", "Guarda el ADN"], answer: 1, explanation: "El aparato de Golgi es como un sistema postal: recibe, empaqueta y envía proteínas a donde se necesitan dentro y fuera de la célula." },

  // --- SECUNDARIA ---
  { id: 11, level: "secundaria", module: "ADN", question: "¿Qué base nitrogenada del ADN se empareja con la Adenina (A)?", options: ["Guanina (G)", "Citosina (C)", "Timina (T)", "Uracilo (U)"], answer: 2, explanation: "A-T se unen con 2 puentes de hidrógeno (regla de Chargaff). En el ARN, el Uracilo reemplaza a la Timina." },
  { id: 12, level: "secundaria", module: "ADN", question: "¿Cuántos puentes de hidrógeno unen el par G-C?", options: ["1", "2", "3", "4"], answer: 2, explanation: "G-C tienen 3 puentes de hidrógeno, por eso son más estables que A-T (2 puentes). Mayor proporción G-C = mayor temperatura de fusión del ADN." },
  { id: 13, level: "secundaria", module: "Célula Animal", question: "¿En qué orgánulo ocurre la fosforilación oxidativa?", options: ["Ribosoma", "Aparato de Golgi", "Mitocondria", "Retículo endoplásmico"], answer: 2, explanation: "La fosforilación oxidativa ocurre en la membrana interna de la mitocondria (cadena respiratoria), generando la mayor parte del ATP celular." },
  { id: 14, level: "secundaria", module: "Célula Animal", question: "¿Cuál es la diferencia entre el retículo endoplásmico rugoso y el liso?", options: ["El rugoso produce energía", "El rugoso tiene ribosomas adosados", "El liso contiene ADN", "El liso realiza la fotosíntesis"], answer: 1, explanation: "El RER (rugoso) tiene ribosomas que sintetizan proteínas de secreción. El REL (liso) sintetiza lípidos y detoxifica sustancias." },
  { id: 15, level: "secundaria", module: "Neurona", question: "¿Qué permite la vaina de mielina en la conducción nerviosa?", options: ["Bloquea el impulso", "Permite conducción saltatoria más rápida", "Produce neurotransmisores", "Recibe señales dendríticas"], answer: 1, explanation: "La mielina permite la conducción saltatoria: el potencial de acción 'salta' entre nódulos de Ranvier, aumentando la velocidad hasta 120 m/s. Su pérdida causa esclerosis múltiple." },
  { id: 16, level: "secundaria", module: "Neurona", question: "¿Qué ion dispara el potencial de acción en la neurona?", options: ["K⁺ saliendo", "Na⁺ entrando", "Ca²⁺ saliendo", "Cl⁻ entrando"], answer: 1, explanation: "La apertura de canales de Na⁺ voltaje-dependientes permite la entrada masiva de sodio, despolarizando la membrana hasta +40 mV y desencadenando el potencial de acción." },
  { id: 17, level: "secundaria", module: "Célula Vegetal", question: "¿Qué fase de la fotosíntesis ocurre en el estroma del cloroplasto?", options: ["Fase luminosa", "Fotosistema I", "Ciclo de Calvin (fase oscura)", "Fotosistema II"], answer: 2, explanation: "El ciclo de Calvin (o fase oscura) ocurre en el estroma usando CO₂, ATP y NADPH de la fase luminosa para sintetizar glucosa." },
  { id: 18, level: "secundaria", module: "Célula Vegetal", question: "¿Cuál es la función principal de los plasmodesmos?", options: ["Realizar fotosíntesis", "Conectar células vecinas para transporte simplástico", "Almacenar agua", "Sintetizar proteínas"], answer: 1, explanation: "Los plasmodesmos son canales entre células vegetales que permiten el transporte simplástico de agua, nutrientes y señales sin cruzar membranas." },
  { id: 19, level: "secundaria", module: "Cuerpo Humano", question: "¿Qué estructura del riñón realiza la filtración de la sangre?", options: ["Uréter", "Pelvis renal", "Nefrona", "Médula renal"], answer: 2, explanation: "Cada riñón contiene ~1 millón de nefronas. Filtran ~180 L de plasma/día y reabsorben el 99%, produciendo ~1,5 L de orina final." },
  { id: 20, level: "secundaria", module: "Cuerpo Humano", question: "¿Qué proceso genera la contracción muscular?", options: ["Ciclo A-T de bases", "Deslizamiento de filamentos actina-miosina", "Fosforilación oxidativa", "Ciclo de Calvin"], answer: 1, explanation: "Las cabezas de miosina se unen a actina y avanzan usando ATP, acortando el sarcómero. El Ca²⁺ libera el sitio de unión controlado por tropomiosina." },

  // --- PRIMARIA: nuevos módulos ---
  { id: 21, level: "primaria", module: "Corazón", question: "¿Cuántas cámaras tiene el corazón humano?", options: ["2", "3", "4", "6"], answer: 2, explanation: "El corazón tiene 4 cámaras: 2 aurículas (reciben sangre) y 2 ventrículos (bombean sangre). Las del lado izquierdo manejan sangre con oxígeno y las del derecho sangre sin oxígeno." },
  { id: 22, level: "primaria", module: "Corazón", question: "¿Qué vaso sanguíneo lleva sangre con oxígeno a todo el cuerpo?", options: ["Vena cava", "Arteria pulmonar", "Aorta", "Vena pulmonar"], answer: 2, explanation: "La aorta es la arteria más grande del cuerpo y lleva la sangre oxigenada desde el ventrículo izquierdo hacia todos los órganos." },
  { id: 23, level: "primaria", module: "Cerebro", question: "¿Qué parte del cerebro controla el equilibrio y la coordinación?", options: ["Lóbulo frontal", "Tálamo", "Cerebelo", "Hipocampo"], answer: 2, explanation: "El cerebelo coordina los movimientos precisos y el equilibrio. Cuando aprendemos a andar en bici, el cerebelo va 'automatizando' el movimiento." },
  { id: 24, level: "primaria", module: "Cerebro", question: "¿Qué parte del cerebro guarda los recuerdos nuevos?", options: ["Cerebelo", "Hipocampo", "Tronco encefálico", "Aorta"], answer: 1, explanation: "El hipocampo está en el interior del cerebro y es fundamental para crear nuevos recuerdos. El Alzheimer afecta primero al hipocampo." },
  { id: 25, level: "primaria", module: "Sistema Respiratorio", question: "¿Qué pequeñas bolsitas en los pulmones intercambian el oxígeno con la sangre?", options: ["Bronquios", "Alvéolos", "Tráquea", "Pleura"], answer: 1, explanation: "Los alvéolos son diminutas bolsitas al final de los bronquios. Están rodeados de capilares y es ahí donde el oxígeno pasa al a sangre y el CO₂ sale." },
  { id: 26, level: "primaria", module: "Sistema Respiratorio", question: "¿Qué músculo baja para que entre aire a los pulmones?", options: ["Bíceps", "Pectoral", "Diafragma", "Trapecio"], answer: 2, explanation: "El diafragma es el músculo principal de la respiración. Cuando se contrae y baja, aumenta el espacio del pecho y el aire entra solo por la presión." },
  { id: 27, level: "primaria", module: "Sistema Digestivo", question: "¿Qué órgano produce los jugos ácidos que deshacen los alimentos?", options: ["Intestino delgado", "Hígado", "Estómago", "Páncreas"], answer: 2, explanation: "El estómago produce ácido clorhídrico (muy fuerte) y enzimas que deshacen las proteínas. Es tan ácido que podría disolver un clavo." },
  { id: 28, level: "primaria", module: "Sistema Digestivo", question: "¿Qué órgano absorbe la mayoría de los nutrientes de los alimentos?", options: ["Estómago", "Intestino delgado", "Intestino grueso", "Hígado"], answer: 1, explanation: "El intestino delgado mide unos 6-7 metros y tiene millones de pequeñas vellosidades que absorben los nutrientes para que pasen a la sangre." },

  // --- SECUNDARIA: nuevos módulos ---
  { id: 29, level: "secundaria", module: "Corazón", question: "¿Qué estructura del corazón actúa como marcapasos natural?", options: ["Válvula mitral", "Nódulo sinusal", "Haz de His", "Válvula aórtica"], answer: 1, explanation: "El nódulo sinusal (o nódulo SA) en la aurícula derecha genera el impulso eléctrico rítmico que inicia cada latido. Descarga a ~60-100 veces/min en reposo." },
  { id: 30, level: "secundaria", module: "Corazón", question: "¿Qué válvula separa el ventrículo izquierdo de la aorta?", options: ["Válvula tricúspide", "Válvula mitral", "Válvula pulmonar", "Válvula aórtica"], answer: 3, explanation: "La válvula aórtica (semilunar) tiene 3 valvas y se abre en sístole para dejar pasar sangre a la aorta y se cierra en diástole para evitar el reflujo." },
  { id: 31, level: "secundaria", module: "Cerebro", question: "¿En qué lóbulo cerebral se encuentra el área de Broca?", options: ["Occipital", "Parietal", "Temporal", "Frontal"], answer: 3, explanation: "El área de Broca (lóbulo frontal izquierdo) controla la producción del lenguaje hablado. Su lesión causa afasia de Broca: el paciente entiende pero no puede hablar fluidamente." },
  { id: 32, level: "secundaria", module: "Cerebro", question: "¿Qué neurotransmisor es el principal en la vía dopaminérgica de recompensa?", options: ["Serotonina", "Acetilcolina", "Dopamina", "GABA"], answer: 2, explanation: "La dopamina es el principal neurotransmisor del sistema de recompensa (área tegmental ventral → núcleo accumbens). Regula la motivación y el placer. Su déficit causa Parkinson; su exceso se asocia a esquizofrenia." },
  { id: 33, level: "secundaria", module: "Sistema Respiratorio", question: "¿Qué tipo de células producen el surfactante pulmonar?", options: ["Neumocitos tipo I", "Neumocitos tipo II", "Células caliciformes", "Macrófagos alveolares"], answer: 1, explanation: "Los neumocitos tipo II producen surfactante (mezcla de fosfolípidos y proteínas). Reduce la tensión superficial alveolar y evita el colapso pulmonar. Su déficit en prematuros causa síndrome de distress respiratorio neonatal." },
  { id: 34, level: "secundaria", module: "Sistema Respiratorio", question: "¿Qué ecuación describe el intercambio gaseoso en los alvéolos?", options: ["O₂ entra a la sangre / CO₂ sale a los alvéolos", "CO₂ entra a la sangre / O₂ sale", "Solo O₂ se intercambia", "N₂ y O₂ se intercambian"], answer: 0, explanation: "La hematosis alveolar: O₂ difunde desde los alvéolos (pO₂ ~100 mmHg) a la sangre capilar (pO₂ ~40 mmHg). El CO₂ difunde en sentido contrario. La diferencia de presiones parciales impulsa la difusión." },
  { id: 35, level: "secundaria", module: "Sistema Digestivo", question: "¿Qué hormona estimula la contracción de la vesícula biliar?", options: ["Insulina", "Glucagón", "Colecistoquinina (CCK)", "Secretina"], answer: 2, explanation: "La CCK (colecistoquinina) es secretada por las células I del duodeno ante la presencia de grasas y proteínas. Estimula la contracción de la vesícula biliar y la secreción pancreática." },
  { id: 36, level: "secundaria", module: "Sistema Digestivo", question: "¿En qué parte del intestino delgado se absorben la vitamina B12 y las sales biliares?", options: ["Duodeno", "Yeyuno", "Íleon", "Colon"], answer: 2, explanation: "El íleon (segmento final del intestino delgado) tiene receptores específicos para la absorción de vitamina B12 (factor intrínseco) y sales biliares. Su resección causa malabsorción grave." },

  // ── NUEVAS: PRIMARIA ──
  { id: 37, level: "primaria", module: "Sistema Óseo", question: "¿Cuántos huesos tiene el cuerpo humano adulto aproximadamente?", options: ["100", "206", "350", "500"], answer: 1, explanation: "El esqueleto adulto tiene 206 huesos. Al nacer tenemos más (~300) porque muchos se van fusionando durante el crecimiento." },
  { id: 38, level: "primaria", module: "Sistema Óseo", question: "¿Para qué sirven los cartílagos en nuestro cuerpo?", options: ["Producir energía", "Fabricar proteínas", "Cubrir y proteger los extremos de los huesos", "Bombear sangre"], answer: 2, explanation: "El cartílago es un tejido elástico y resistente que cubre los extremos de los huesos en las articulaciones, evitando la fricción y amortiguando los golpes." },
  { id: 39, level: "primaria", module: "Sistema Muscular", question: "¿Qué necesita el músculo para contraerse?", options: ["Bilis", "ATP (energía)", "Bióxido de carbono", "Agua solamente"], answer: 1, explanation: "Los músculos necesitan ATP (la energía celular) para contraerse. Por eso cuando hacemos ejercicio intenso, respiramos más rápido: necesitamos más oxígeno para producir más ATP." },
  { id: 40, level: "primaria", module: "Sistema Muscular", question: "¿Cómo se llama la estructura que une el músculo al hueso?", options: ["Ligamento", "Tendón", "Cartílago", "Articulación"], answer: 1, explanation: "El tendón es una banda fuerte de tejido conectivo que une el músculo al hueso. El ligamento, en cambio, une dos huesos entre sí." },
  { id: 41, level: "primaria", module: "Ecosistemas", question: "¿Cómo se llama la secuencia de quién come a quién en un ecosistema?", options: ["Red alimentaria", "Cadena alimentaria", "Pirámide de energía", "Ciclo del carbono"], answer: 1, explanation: "La cadena alimentaria muestra quién come a quién: plantas (productores) → herbívoros (consumidores primarios) → carnívoros (secundarios) → etc." },
  { id: 42, level: "primaria", module: "Ecosistemas", question: "¿Qué son los descomponedores en un ecosistema?", options: ["Animales que cazan", "Plantas que producen alimento", "Organismos que reciclan la materia muerta", "Animales herbívoros"], answer: 2, explanation: "Los descomponedores (hongos y bacterias) descomponen la materia muerta y devuelven nutrientes al suelo. Sin ellos, la materia orgánica se acumularía sin reciclarse." },
  { id: 43, level: "primaria", module: "Microbiología", question: "¿Cuál de estos seres vivos es una bacteria?", options: ["Hongo", "E. coli", "Ameba", "Virus"], answer: 1, explanation: "Escherichia coli (E. coli) es una bacteria que vive en nuestro intestino. La mayoría de las E. coli son inofensivas y nos ayudan a digerir." },
  { id: 44, level: "primaria", module: "Microbiología", question: "¿Los antibióticos sirven para combatir infecciones por virus?", options: ["Sí, siempre", "Solo a veces", "No, solo funcionan contra bacterias", "Depende del antibiótico"], answer: 2, explanation: "Los antibióticos solo matan bacterias. Los virus tienen una estructura completamente diferente y no son afectados por los antibióticos. Para los virus se usan antivirales o vacunas." },
  { id: 45, level: "primaria", module: "Mitosis", question: "¿Para qué sirve la mitosis?", options: ["Para producir gametos", "Para dividir una célula en dos idénticas", "Para mezclar genes", "Para producir hormonas"], answer: 1, explanation: "La mitosis produce dos células hijas idénticas a la célula madre. Es la forma en que el cuerpo crece y repara los tejidos dañados." },
  { id: 46, level: "primaria", module: "Inmunología", question: "¿Qué producen las células del sistema inmune para combatir un virus?", options: ["Hormonas", "Anticuerpos", "Enzimas digestivas", "Adrenalina"], answer: 1, explanation: "Los linfocitos B producen anticuerpos, proteínas especializadas que reconocen y neutralizan a los virus e invasores extraños." },
  { id: 47, level: "primaria", module: "Herencia", question: "¿Cómo se llama el cuadro que se usa para predecir qué genes hereda un hijo?", options: ["Tabla periódica", "Cuadro de Punnett", "Diagrama de Venn", "Árbol genealógico"], answer: 1, explanation: "El cuadro de Punnett fue creado por el genetista Reginald Punnett. Cruza los genes posibles del padre y la madre para predecir qué combinaciones puede tener el hijo." },
  { id: 48, level: "primaria", module: "Sistema Excretor", question: "¿Qué órgano produce la orina filtrando la sangre?", options: ["Hígado", "Pulmones", "Riñón", "Páncreas"], answer: 2, explanation: "Los riñones filtran toda la sangre varias veces al día eliminando el exceso de agua, sales y sustancias de desecho (como la urea) en forma de orina." },
  { id: 49, level: "primaria", module: "Sistema Endócrino", question: "¿Qué hormona produce el páncreas para bajar el azúcar en sangre?", options: ["Adrenalina", "Insulina", "Testosterona", "Cortisol"], answer: 1, explanation: "La insulina es producida por las células beta del páncreas. Cuando comemos y sube la glucosa en sangre, la insulina ayuda a que las células la absorban. En la diabetes esta función falla." },
  { id: 50, level: "primaria", module: "Reproducción", question: "¿Cómo se llama la unión del óvulo con el espermatozoide?", options: ["Gestación", "Implantación", "Fecundación", "Ovulación"], answer: 2, explanation: "La fecundación es la fusión del óvulo (célula sexual femenina) con el espermatozoide (célula sexual masculina). Ocurre en las trompas de Falopio y da origen a un nuevo ser." },

  // ── NUEVAS: SECUNDARIA ──
  { id: 51, level: "secundaria", module: "Sistema Óseo", question: "¿Qué tipo de células reabsorben el tejido óseo viejo para permitir la remodelación?", options: ["Osteoblastos", "Osteocitos", "Osteoclastos", "Condrocitos"], answer: 2, explanation: "Los osteoclastos son células multinucleadas que secretan HCl y enzimas para disolver la hidroxiapatita y el colágeno del hueso. Trabajan en equilibrio con los osteoblastos (que forman hueso nuevo)." },
  { id: 52, level: "secundaria", module: "Sistema Muscular", question: "¿Qué ion desencadena la contracción muscular al liberarse del retículo sarcoplasmático?", options: ["Na⁺", "K⁺", "Ca²⁺", "Mg²⁺"], answer: 2, explanation: "El Ca²⁺ liberado del retículo sarcoplasmático se une a la troponina C, desplazando la tropomiosina de los sitios de unión actina-miosina y permitiendo el ciclo de puentes cruzados." },
  { id: 53, level: "secundaria", module: "Ecosistemas", question: "¿Qué porcentaje de energía se transfiere de un nivel trófico al siguiente?", options: ["~90%", "~50%", "~10%", "~1%"], answer: 2, explanation: "Solo el ~10% de la energía de un nivel trófico pasa al siguiente (regla del 10%). El 90% restante se pierde como calor en la respiración y metabolismo, lo que limita las cadenas alimentarias a 4-5 eslabones." },
  { id: 54, level: "secundaria", module: "Microbiología", question: "¿Cuál es la diferencia fundamental entre bacterias Gram positivas y Gram negativas?", options: ["Forma celular", "Presencia o ausencia de membrana interna", "Grosor de la pared de peptidoglucano y presencia de membrana externa", "Tamaño del ADN"], answer: 2, explanation: "Gram positivas: pared gruesa de peptidoglucano sin membrana externa (se tiñen de púrpura). Gram negativas: pared delgada con membrana externa que contiene LPS (lipopolisacárido), más resistentes a antibióticos (se tiñen de rosado)." },
  { id: 55, level: "secundaria", module: "Mitosis", question: "¿En qué fase de la mitosis los cromosomas se alinean en el ecuador celular?", options: ["Profase", "Metafase", "Anafase", "Telofase"], answer: 1, explanation: "En la metafase, los cromosomas condensados se alinean en el plano ecuatorial de la célula (placa metafásica). Es la fase en que los cromosomas son más visibles y se usan para hacer cariotipo." },
  { id: 56, level: "secundaria", module: "Inmunología", question: "¿Qué linfocitos reconocen células infectadas y las destruyen directamente?", options: ["Linfocitos B", "Linfocitos T helper (CD4+)", "Linfocitos T citotóxicos (CD8+)", "Células NK"], answer: 2, explanation: "Los linfocitos T citotóxicos (CD8+) reconocen antígenos presentados en el MHC clase I de células infectadas y les inducen apoptosis. Las células NK matan sin reconocimiento específico previo." },
  { id: 57, level: "secundaria", module: "Herencia", question: "¿Por qué el daltonismo es más frecuente en hombres que en mujeres?", options: ["El gen está en el cromosoma Y", "Los hombres tienen más receptores de color", "El gen está en el cromosoma X y los hombres solo tienen un X", "Es una mutación espontánea más frecuente en hombres"], answer: 2, explanation: "El gen del daltonismo está en el cromosoma X. Los hombres (XY) solo tienen un X: si ese X lleva el alelo recesivo, lo expresan. Las mujeres (XX) necesitan dos alelos recesivos para expresarlo." },
  { id: 58, level: "secundaria", module: "Sistema Excretor", question: "¿Qué hormona regula la reabsorción de agua en los túbulos colectores del riñón?", options: ["Aldosterona", "ADH (vasopresina)", "Angiotensina II", "Eritropoyetina"], answer: 1, explanation: "La ADH (hormona antidiurética o vasopresina) es liberada por la hipófisis posterior cuando sube la osmolaridad plasmática. Inserta acuaporinas-2 en los túbulos colectores, aumentando la reabsorción de agua y concentrando la orina." },
  { id: 59, level: "secundaria", module: "Sistema Endócrino", question: "¿Cómo actúan las hormonas esteroideas a diferencia de las peptídicas?", options: ["Actúan en receptores de membrana vía AMPc", "Atraviesan la membrana y actúan en receptores nucleares", "Solo actúan en el sistema nervioso", "Se degradan inmediatamente en sangre"], answer: 1, explanation: "Las hormonas esteroideas (cortisol, estrógenos, testosterona) son liposolubles: atraviesan la membrana plasmática y actúan en receptores intracelulares o nucleares, regulando directamente la transcripción génica." },
  { id: 60, level: "secundaria", module: "Reproducción", question: "¿Qué hormona producida por el embrión es la que detectan los tests de embarazo?", options: ["Progesterona", "Estrógeno", "hCG (gonadotropina coriónica)", "LH"], answer: 2, explanation: "La hCG (gonadotropina coriónica humana) es producida por el trofoblasto del embrión desde la implantación. Mantiene el cuerpo lúteo y su producción. Los tests de embarazo detectan hCG en orina desde ~10 días después de la fecundación." },
];

const emojis: Record<Level, string> = { primaria: "🌱", secundaria: "🔬" };
const levelLabels: Record<Level, string> = { primaria: "Primaria (6°-7°)", secundaria: "Secundaria (1°-5°)" };
const levelColors: Record<Level, string> = { primaria: "#22c55e", secundaria: "#60a5fa" };

export default function QuizPage() {
  const [level, setLevel] = useState<Level | null>(null);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [finished, setFinished] = useState(false);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [shared, setShared] = useState(false);
  const [thumbs, setThumbs] = useState<Record<string, string>>({});
  const [presenting, setPresenting] = useState(false);
  const [pdfLoading, setPdfLoading] = useState(false);
  const [notasOpen, setNotasOpen] = useState(false);
  const [notasDate, setNotasDate] = useState(() => new Date().toLocaleDateString("es-AR", { day: "2-digit", month: "2-digit", year: "numeric" }));
  const [notasText, setNotasText] = useState("");

  useEffect(() => {
    const modules = Object.keys(MODULE_UID);
    modules.forEach(async (mod) => {
      const uid = MODULE_UID[mod];
      try {
        const res = await fetch(`/api/thumb?uid=${uid}`);
        const data = await res.json();
        if (data.thumbnailUrl) {
          setThumbs(prev => ({ ...prev, [mod]: data.thumbnailUrl }));
        }
      } catch { /* fallback to gradient */ }
    });
  }, []);

  const filtered = level ? questions.filter(q => q.level === level) : [];
  const q = filtered[current];

  const handleSelect = useCallback((idx: number) => {
    if (answered) return;
    setSelected(idx);
    setAnswered(true);
    const correct = idx === (q?.answer ?? -1);
    if (correct) setScore(s => s + 1);
    setAnswers(a => [...a, correct]);
  }, [answered, q]);

  const handleNext = () => {
    if (current + 1 >= filtered.length) {
      setFinished(true);
    } else {
      setCurrent(c => c + 1);
      setSelected(null);
      setAnswered(false);
    }
  };

  const handleBack = () => {
    if (current === 0) {
      setLevel(null);
      setCurrent(0); setScore(0); setSelected(null);
      setAnswered(false); setFinished(false); setAnswers([]);
      return;
    }
    const wasCorrect = answers[answers.length - 1];
    if (wasCorrect) setScore(s => s - 1);
    setAnswers(a => a.slice(0, -1));
    setCurrent(c => c - 1);
    setSelected(null);
    setAnswered(false);
  };

  const handleRestart = () => {
    setCurrent(0); setScore(0); setSelected(null);
    setAnswered(false); setFinished(false); setAnswers([]);
    setShared(false);
  };

  const handleExportNotas = async () => {
    const { default: jsPDF } = await import("jspdf");
    const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
    const W = 210; const mx = 15; const cW = W - mx * 2; let y = 15;
    pdf.setFillColor(15, 23, 42); pdf.rect(0, 0, W, 22, "F");
    pdf.setFontSize(13); pdf.setFont("helvetica", "bold"); pdf.setTextColor(255, 255, 255);
    pdf.text("Notas · Quiz de Biologia", mx, 11);
    pdf.setFontSize(8); pdf.setFont("helvetica", "normal"); pdf.setTextColor(180, 180, 180);
    pdf.text(`BioAula3D · ${notasDate}`, mx, 18);
    y = 30;
    pdf.setFontSize(10); pdf.setFont("helvetica", "normal"); pdf.setTextColor(20, 20, 20);
    const lines = pdf.splitTextToSize(notasText || "(Sin contenido)", cW);
    pdf.text(lines, mx, y);
    pdf.save(`BioAula3D-Notas-Quiz-${notasDate.replace(/\//g, "-")}.pdf`);
  };

  const handleShareNotas = async () => {
    const text = `Notas Quiz de Biologia - ${notasDate}\n\n${notasText}`;
    if (navigator.share) await navigator.share({ title: "Notas · Quiz", text });
    else await navigator.clipboard.writeText(text);
  };

  const safeText = (s: string) => s.replace(/→/g, ">").replace(/←/g, "<").replace(/[^\x00-\xFF]/g, "");

  const handleExportResultsPDF = async () => {
    if (!level) return;
    setPdfLoading(true);
    try {
      const { default: jsPDF } = await import("jspdf");
      const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
      const W = 210; const mx = 15; const cW = W - mx * 2; let y = 15;
      const pct = Math.round((score / filtered.length) * 100);
      pdf.setFillColor(15, 23, 42); pdf.rect(0, 0, W, 26, "F");
      pdf.setFontSize(14); pdf.setFont("helvetica", "bold"); pdf.setTextColor(255, 255, 255);
      pdf.text("BioAula3D · Quiz de Biología", mx, 11);
      pdf.setFontSize(8); pdf.setFont("helvetica", "normal"); pdf.setTextColor(180, 180, 180);
      pdf.text(`${levelLabels[level]} · ${score}/${filtered.length} correctas · ${pct}%`, mx, 19);
      y = 33;
      filtered.forEach((q, i) => {
        const correct = answers[i] ?? false;
        const qLines = pdf.splitTextToSize(`${i + 1}. ${safeText(q.question)}`, cW - 8);
        if (y + qLines.length * 5 + 14 > 282) { pdf.addPage(); y = 15; }
        pdf.setFontSize(9); pdf.setFont("helvetica", "bold");
        pdf.setTextColor(correct ? 22 : 185, correct ? 163 : 28, correct ? 74 : 26);
        pdf.text(correct ? "OK" : "X", mx, y);
        pdf.setTextColor(20, 20, 20);
        pdf.text(qLines, mx + 6, y);
        y += qLines.length * 5;
        pdf.setFontSize(7.5); pdf.setFont("helvetica", "normal"); pdf.setTextColor(80, 80, 80);
        const ansLines = pdf.splitTextToSize(`R: ${safeText(q.options[q.answer])}`, cW - 10);
        pdf.text(ansLines, mx + 8, y);
        y += ansLines.length * 4 + 3;
        pdf.setDrawColor(220, 220, 220); pdf.line(mx, y, mx + cW, y); y += 3;
      });
      pdf.save(`BioAula3D-Quiz-${levelLabels[level].replace(/\s/g, "")}-${pct}pct.pdf`);
    } finally { setPdfLoading(false); }
  };

  const handleShare = async () => {
    const pct = Math.round((score / filtered.length) * 100);
    const text = `¡Hice el quiz de BioAula3D y obtuve ${score}/${filtered.length} (${pct}%)! 🧬`;
    if (navigator.share) {
      await navigator.share({ title: "BioAula3D Quiz", text });
    } else {
      await navigator.clipboard.writeText(text);
      setShared(true);
    }
  };

  const handleShareQuiz = async () => {
    const url = typeof window !== "undefined" ? window.location.href : "https://bio-aula3-d.vercel.app/quiz";
    if (navigator.share) {
      await navigator.share({ title: "Quiz de Biología · BioAula3D", url });
    } else {
      await navigator.clipboard.writeText(url);
    }
  };

  // Level selector
  if (!level) {
    return (
      <div className="min-h-screen bg-bio-dark flex items-center justify-center p-4">
        <div className="max-w-sm w-full">
          <div className="text-center mb-8">
            <div className="text-5xl mb-3">🧬</div>
            <h1 className="text-2xl font-bold text-white mb-2">Quiz de Biología</h1>
            <p className="text-slate-400 text-sm">Elegí tu nivel para comenzar</p>
          </div>
          <div className="space-y-3">
            {(["primaria", "secundaria"] as Level[]).map(l => (
              <button key={l} onClick={() => setLevel(l)}
                className="w-full p-5 bg-bio-card border border-slate-700 hover:border-slate-500 rounded-2xl text-left transition-all group"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{emojis[l]}</span>
                  <div>
                    <div className="text-white font-semibold">{levelLabels[l]}</div>
                    <div className="text-slate-400 text-sm mt-0.5">{questions.filter(q => q.level === l).length} preguntas · conceptos {l === "primaria" ? "básicos" : "avanzados"}</div>
                  </div>
                  <span className="ml-auto text-slate-600 group-hover:text-slate-400 transition-colors">→</span>
                </div>
              </button>
            ))}
          </div>
          <div className="mt-6 text-center">
            <Link href="/" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">← Volver al inicio</Link>
            <button onClick={() => setNotasOpen(true)} className="mt-3 text-slate-500 hover:text-slate-300 text-sm transition-colors">📝 Notas</button>
          </div>
          {notasOpen && (
            <div className="fixed inset-0 bg-black/70 z-50 flex items-end justify-center p-0" onClick={() => setNotasOpen(false)}>
              <div className="bg-slate-900 border-t border-slate-700 rounded-t-2xl w-full max-w-lg p-5 pb-8 space-y-3" onClick={e => e.stopPropagation()}>
                <div className="flex items-center justify-between">
                  <div><span className="text-base font-bold text-white">📝 Notas</span><span className="text-slate-500 text-xs ml-2">Quiz de Biología</span></div>
                  <button onClick={() => setNotasOpen(false)} className="text-slate-500 hover:text-white text-lg leading-none transition-colors">✕</button>
                </div>
                <input type="text" value={notasDate} onChange={e => setNotasDate(e.target.value)} placeholder="Fecha (ej. 04/06/2026)" className="w-full bg-slate-800 text-white rounded-lg px-3 py-2 text-sm border border-slate-700 focus:outline-none focus:border-slate-500 transition-colors" />
                <textarea value={notasText} onChange={e => setNotasText(e.target.value)} placeholder="Anotá lo que necesités sobre el quiz..." rows={8} className="w-full bg-slate-800 text-white rounded-lg px-3 py-2 text-sm border border-slate-700 focus:outline-none focus:border-slate-500 resize-none transition-colors leading-relaxed" />
                <div className="flex gap-2 pt-1">
                  <button onClick={handleShareNotas} className="flex-1 py-2.5 bg-slate-700 hover:bg-slate-600 text-white rounded-xl text-sm font-semibold transition-all">📤 Compartir</button>
                  <button onClick={handleExportNotas} className="flex-1 py-2.5 bg-amber-500 hover:bg-amber-400 text-black rounded-xl text-sm font-semibold transition-all">📄 Guardar PDF</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  const accent = levelColors[level];

  if (finished) {
    const pct = Math.round((score / filtered.length) * 100);
    const moduleLinks: Record<string, string> = {
      "Célula Animal": "/celula", "ADN": "/adn", "Neurona": "/sistema-nervioso",
      "Célula Vegetal": "/planta", "Cuerpo Humano": "/cuerpo-humano",
      "Corazón": "/corazon", "Cerebro": "/cerebro",
      "Sistema Respiratorio": "/pulmones", "Sistema Digestivo": "/digestivo",
    };
    return (
      <div className="min-h-screen bg-bio-dark flex items-center justify-center p-4">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
          className="max-w-md w-full bg-bio-card border border-slate-700 rounded-2xl p-8 text-center">
          <div className="text-6xl mb-4">{pct >= 80 ? "🏆" : pct >= 60 ? "👍" : "📚"}</div>
          <h2 className="text-3xl font-bold text-white mb-2">{score}/{filtered.length}</h2>
          <p className="text-slate-400 mb-2 capitalize">{levelLabels[level]}</p>
          <p className="text-2xl font-bold mb-1" style={{ color: accent }}>{pct}%</p>
          <p className="text-sm text-slate-400 mb-6">
            {pct >= 80 ? "¡Excelente! Dominás los conceptos." : pct >= 60 ? "Buen trabajo. Seguí repasando." : "Revisá los módulos 3D para mejorar."}
          </p>
          <div className="flex gap-1 mb-6">
            {answers.map((correct, i) => (
              <div key={i} className={`flex-1 h-2 rounded-full ${correct ? "bg-green-500" : "bg-red-500"}`} />
            ))}
          </div>
          <div className="space-y-2 mb-6">
            <button onClick={handleShare} className="w-full py-2.5 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white rounded-xl transition-all text-sm">
              {shared ? "¡Copiado!" : "Compartir resultado 🔗"}
            </button>
            <button onClick={handleExportResultsPDF} disabled={pdfLoading}
              className="w-full py-2.5 border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white rounded-xl transition-all text-sm disabled:opacity-60">
              {pdfLoading ? "⏳ Generando…" : "📄 Exportar resultados PDF"}
            </button>
            <button onClick={handleRestart} className="w-full py-2.5 rounded-xl font-semibold transition-all text-sm text-black"
              style={{ background: accent }}>
              Intentar de nuevo
            </button>
            <button onClick={() => { setLevel(null); handleRestart(); }} className="w-full py-2.5 border border-slate-700 text-slate-400 hover:text-white rounded-xl transition-all text-sm">
              Cambiar nivel
            </button>
          </div>
          <button onClick={() => setNotasOpen(true)} className="w-full mt-2 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-sm font-semibold transition-all">
            📝 Notas
          </button>
          <div className="border-t border-slate-700 pt-4">
            <p className="text-slate-500 text-xs mb-3">Repasar módulos 3D</p>
            <div className="flex flex-wrap gap-2 justify-center">
              {Object.entries(moduleLinks).map(([name, href]) => (
                <Link key={name} href={href}
                  className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-400 hover:text-white text-xs transition-all">
                  {name}
                </Link>
              ))}
            </div>
          </div>
          {notasOpen && (
            <div className="fixed inset-0 bg-black/70 z-50 flex items-end justify-center p-0" onClick={() => setNotasOpen(false)}>
              <div className="bg-slate-900 border-t border-slate-700 rounded-t-2xl w-full max-w-lg p-5 pb-8 space-y-3" onClick={e => e.stopPropagation()}>
                <div className="flex items-center justify-between">
                  <div><span className="text-base font-bold text-white">📝 Notas</span><span className="text-slate-500 text-xs ml-2">Quiz de Biología</span></div>
                  <button onClick={() => setNotasOpen(false)} className="text-slate-500 hover:text-white text-lg leading-none transition-colors">✕</button>
                </div>
                <input type="text" value={notasDate} onChange={e => setNotasDate(e.target.value)} placeholder="Fecha (ej. 04/06/2026)" className="w-full bg-slate-800 text-white rounded-lg px-3 py-2 text-sm border border-slate-700 focus:outline-none focus:border-slate-500 transition-colors" />
                <textarea value={notasText} onChange={e => setNotasText(e.target.value)} placeholder="Anotá lo que necesités sobre el quiz..." rows={8} className="w-full bg-slate-800 text-white rounded-lg px-3 py-2 text-sm border border-slate-700 focus:outline-none focus:border-slate-500 resize-none transition-colors leading-relaxed" />
                <div className="flex gap-2 pt-1">
                  <button onClick={handleShareNotas} className="flex-1 py-2.5 bg-slate-700 hover:bg-slate-600 text-white rounded-xl text-sm font-semibold transition-all">📤 Compartir</button>
                  <button onClick={handleExportNotas} className="flex-1 py-2.5 bg-amber-500 hover:bg-amber-400 text-black rounded-xl text-sm font-semibold transition-all">📄 Guardar PDF</button>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-bio-dark flex items-center justify-center p-4">
      <div className="max-w-lg w-full">
        {/* Projector overlay */}
        {presenting && q && (
          <div className="fixed inset-0 z-50 bg-slate-950 flex flex-col items-center justify-center p-8" onClick={() => setPresenting(false)}>
            <div className="max-w-3xl w-full space-y-8" onClick={e => e.stopPropagation()}>
              <div className="flex items-center justify-between">
                <span className="text-slate-400 text-lg">{q.module} · {current + 1}/{filtered.length}</span>
                <button onClick={() => setPresenting(false)} className="text-slate-500 hover:text-white text-2xl transition-colors">✕</button>
              </div>
              {(() => {
                const style = MODULE_STYLE[q.module] ?? { emoji: "🔬", gradient: "from-slate-600 to-slate-700", color: "#94a3b8" };
                const thumb = thumbs[q.module];
                return thumb ? (
                  <div className="w-full h-48 relative overflow-hidden rounded-2xl">
                    <Image src={thumb} alt={q.module} fill className="object-cover" unoptimized />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                  </div>
                ) : (
                  <div className={`w-full h-48 rounded-2xl bg-gradient-to-br ${style.gradient} flex items-center justify-center`}>
                    <span className="text-7xl">{style.emoji}</span>
                  </div>
                );
              })()}
              <h2 className="text-3xl font-bold text-white leading-tight">{q.question}</h2>
              <div className="grid grid-cols-2 gap-4">
                {q.options.map((opt, i) => {
                  let cls = "border-slate-700 bg-slate-800 text-white";
                  if (answered) {
                    if (i === q.answer) cls = "border-green-500 bg-green-500/20 text-green-300";
                    else if (i === selected) cls = "border-red-500 bg-red-500/20 text-red-300";
                    else cls = "border-slate-800 bg-slate-900 text-slate-500";
                  }
                  return (
                    <button key={i} onClick={() => handleSelect(i)}
                      className={`px-6 py-5 rounded-2xl border-2 text-left text-lg font-medium transition-all ${cls}`}>
                      <span className="font-bold mr-3 opacity-50">{["A","B","C","D"][i]}.</span>{opt}
                    </button>
                  );
                })}
              </div>
              {answered && (
                <div className="space-y-3">
                  <p className={`text-xl font-semibold ${selected === q.answer ? "text-green-400" : "text-red-400"}`}>
                    {selected === q.answer ? "✓ ¡Correcto!" : `✗ Respuesta correcta: ${q.options[q.answer]}`}
                  </p>
                  <p className="text-slate-300 text-base leading-relaxed">{q.explanation}</p>
                  <button onClick={() => { handleNext(); }} className="px-8 py-3 rounded-xl font-semibold text-lg text-black transition-all"
                    style={{ background: accent }}>
                    {current + 1 >= filtered.length ? "Ver resultado →" : "Siguiente →"}
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <button onClick={handleBack} className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors text-sm">
            ← Atrás
          </button>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium" style={{ color: accent }}>
              {emojis[level]} {levelLabels[level]}
            </span>
            <button onClick={() => setPresenting(true)} title="Modo proyector"
              className="text-slate-600 hover:text-slate-300 text-sm transition-colors px-1.5 py-0.5 rounded border border-slate-800 hover:border-slate-600">
              📽️
            </button>
            <button onClick={handleShareQuiz} title="Compartir quiz"
              className="text-slate-600 hover:text-slate-300 text-sm transition-colors px-1.5 py-0.5 rounded border border-slate-800 hover:border-slate-600">
              🔗
            </button>
          </div>
          <span className="text-slate-400 text-sm">{current + 1}/{filtered.length}</span>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-slate-800 rounded-full h-1.5 mb-5">
          <div className="h-1.5 rounded-full transition-all" style={{ width: `${(current / filtered.length) * 100}%`, background: accent }} />
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={current} initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -40, opacity: 0 }}
            className="bg-bio-card border border-slate-700 rounded-2xl overflow-hidden">
            {/* Module visual header */}
            {(() => {
              const style = MODULE_STYLE[q.module] ?? { emoji: "🔬", gradient: "from-slate-600 to-slate-700", color: "#94a3b8" };
              const thumb = thumbs[q.module];
              return (
                <div className="w-full h-36 relative overflow-hidden">
                  {thumb ? (
                    <Image
                      src={thumb}
                      alt={q.module}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${style.gradient} flex flex-col items-center justify-center gap-1`}>
                      <span className="text-5xl leading-none select-none">{style.emoji}</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent pointer-events-none" />
                  <span className="absolute bottom-2 left-3 text-white/90 text-xs font-semibold tracking-wide drop-shadow">{q.module}</span>
                </div>
              );
            })()}

            <div className="p-6">
              <h2 className="text-lg font-semibold text-white mb-5">{q.question}</h2>
              <div className="space-y-2.5">
                {q.options.map((opt, i) => {
                  let cls = "border-slate-700 bg-slate-800/50 text-slate-300 hover:border-slate-500 hover:text-white";
                  if (answered) {
                    if (i === q.answer) cls = "border-green-500 bg-green-500/10 text-green-400";
                    else if (i === selected) cls = "border-red-500 bg-red-500/10 text-red-400";
                    else cls = "border-slate-800 bg-slate-800/30 text-slate-500";
                  }
                  return (
                    <button key={i} onClick={() => handleSelect(i)}
                      className={`w-full text-left px-4 py-3 rounded-xl border transition-all text-sm ${cls}`}
                      style={{ minHeight: "52px" }}>
                      <span className="font-bold mr-2 text-slate-500">{["A","B","C","D"][i]}.</span>
                      {opt}
                    </button>
                  );
                })}
              </div>

              {answered && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-5">
                  <div className={`text-sm mb-2 font-medium ${selected === q.answer ? "text-green-400" : "text-red-400"}`}>
                    {selected === q.answer ? "✓ ¡Correcto!" : `✗ Incorrecto. La respuesta era: ${q.options[q.answer]}`}
                  </div>
                  <p className="text-slate-400 text-xs mb-4 leading-relaxed">{q.explanation}</p>
                  <button onClick={handleNext} className="w-full py-2.5 font-semibold rounded-xl transition-all text-sm text-black"
                    style={{ background: accent }}>
                    {current + 1 >= filtered.length ? "Ver resultado →" : "Siguiente →"}
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-4 text-center">
          <span className="text-slate-600 text-sm">⭐ {score} correctas de {current} respondidas</span>
        </div>
      </div>
    </div>
  );
}
