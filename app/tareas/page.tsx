"use client";
import { useState, useMemo, useCallback } from "react";
import Link from "next/link";

type Nivel = "Primaria" | "Secundaria";

interface Tarea {
  id: string;
  titulo: string;
  nivel: Nivel;
  modulo: string;
  emoji: string;
  color: string;
  objetivo: string;
  consigna: string;
  actividades: string[];
  preguntas: string[];
}

const tareas: Tarea[] = [
  // CÉLULA ANIMAL — PRIMARIA
  {
    id: "celula-p",
    titulo: "Explorando la Célula Animal",
    nivel: "Primaria",
    modulo: "Célula Animal",
    emoji: "🔬",
    color: "#4ade80",
    objetivo: "Identificar las principales partes de la célula animal y comprender su función básica.",
    consigna: "Usá el modelo 3D de BioAula3D para observar la célula y responder las siguientes actividades.",
    actividades: [
      "Dibujá una célula animal en tu carpeta y señalá: núcleo, mitocondria, membrana plasmática, ribosoma y aparato de Golgi.",
      "Pintá cada parte con un color diferente y hacé una referencia (cuadrito de color = nombre).",
      "Completá la tabla de la parte de abajo.",
    ],
    preguntas: [
      "¿Qué parte de la célula guarda la información genética?",
      "¿Para qué sirven las mitocondrias? Explicá con tus palabras.",
      "¿Qué hace la membrana plasmática?",
      "¿Cómo se llama la 'fábrica de proteínas' de la célula?",
      "Mencioná una diferencia entre la célula animal y un ladrillo de una pared.",
      "¿Cuál es la diferencia entre la célula animal y una planta?",
      "¿Por qué los organismos pluricelulares necesitan muchos tipos de células distintas?",
      "Si una célula pierde su membrana plasmática, ¿qué le pasaría? Justificá.",
    ],
  },
  // CÉLULA ANIMAL — SECUNDARIA
  {
    id: "celula-s",
    titulo: "Organelas: Estructura y Función",
    nivel: "Secundaria",
    modulo: "Célula Animal",
    emoji: "🔬",
    color: "#4ade80",
    objetivo: "Analizar la relación estructura-función de las organelas celulares y sus interacciones metabólicas.",
    consigna: "Investigá en el modelo 3D y respondé con precisión científica.",
    actividades: [
      "Construí un cuadro comparativo con columnas: Organela / Membrana / Función / Producto generado.",
      "Incluí: núcleo, mitocondria, RER, REL, Golgi, lisosoma, ribosoma, centrosoma.",
      "Dibujá el flujo de síntesis proteica: ribosoma → RER → Golgi → membrana.",
    ],
    preguntas: [
      "Explicá por qué la mitocondria se considera de origen endosimbiótico. ¿Qué evidencias sustentan esta teoría?",
      "¿Cómo se relacionan el RER, el aparato de Golgi y los lisosomas en la digestión intracelular?",
      "Describí el proceso de autofagia. ¿Por qué es importante para la célula?",
      "¿Qué diferencia hay entre transporte activo y pasivo a través de la membrana? Dá un ejemplo de cada uno.",
      "Una célula que tiene muchas más mitocondrias que otra, ¿qué tipo de célula puede ser? Justificá.",
      "Explicá el mecanismo de endocitosis por receptor. ¿Qué ocurre con el receptor después de la internalización?",
      "¿Qué evidencias moleculares sustentan la teoría endosimbiótica del origen de mitocondrias y cloroplastos?",
      "Describí cómo una proteína secretada llega desde su síntesis en el RER hasta su secreción al exterior celular.",
    ],
  },
  // ADN — PRIMARIA
  {
    id: "adn-p",
    titulo: "El Código de la Vida",
    nivel: "Primaria",
    modulo: "ADN & Genética",
    emoji: "🧬",
    color: "#60a5fa",
    objetivo: "Comprender qué es el ADN y cómo sus 'letras' forman la información genética.",
    consigna: "Usá el modelo 3D del ADN para observar su estructura y completar las actividades.",
    actividades: [
      "Dibujá una escalera retorcida (doble hélice) con al menos 6 peldaños. Pintá los pares: A-T en rojo y azul, G-C en verde y amarillo.",
      "Recortá y armá los 'pares de bases' con papelitos de colores según el código: A=rojo, T=azul, G=verde, C=amarillo. Pegá en tu carpeta.",
      "Completá los pares que faltan: A se une con ___, G se une con ___.",
    ],
    preguntas: [
      "¿Qué significa las siglas ADN?",
      "¿Cuántas 'letras' (bases) tiene el ADN? Nombralas.",
      "¿Por qué decimos que el ADN tiene forma de 'escalera retorcida'?",
      "¿En qué parte de la célula se encuentra el ADN?",
      "Si un lado del ADN dice A-G-T-C, ¿cómo sería el otro lado? Escribilo.",
      "¿Por qué decimos que el ADN tiene información 'hereditaria'? ¿Qué significa eso?",
      "Si el ADN de todas las personas es básicamente igual, ¿por qué cada persona es diferente?",
      "¿Qué pasaría si hubiera un error al copiar el ADN antes de la división celular?",
    ],
  },
  // ADN — SECUNDARIA
  {
    id: "adn-s",
    titulo: "De ADN a Proteína",
    nivel: "Secundaria",
    modulo: "ADN & Genética",
    emoji: "🧬",
    color: "#60a5fa",
    objetivo: "Comprender y explicar el dogma central de la biología molecular: replicación, transcripción y traducción.",
    consigna: "Analizá el modelo 3D del ADN y respondé con fundamento molecular.",
    actividades: [
      "Esquematizá el dogma central: ADN → ARNm → Proteína. Indicá el nombre del proceso y el lugar celular donde ocurre cada etapa.",
      "Dada la cadena molde de ADN: 3'-TACGCAATG-5', escribí: la cadena codificante, el ARNm resultante y los tripletes de codones.",
      "Usá la tabla del código genético (buscala) para determinar qué aminoácidos codifica la secuencia anterior.",
    ],
    preguntas: [
      "¿Por qué la replicación del ADN se dice 'semiconservativa'? ¿Qué experimento lo demostró?",
      "¿Cuál es la diferencia entre ARNm, ARNt y ARNr? Explicá el rol de cada uno en la traducción.",
      "¿Qué es una mutación silenciosa? ¿Por qué no siempre genera un cambio en la proteína?",
      "Explicá qué son las histonas y cómo regulan la expresión génica (epigenética básica).",
      "¿Por qué el código genético se considera 'universal' y 'degenerado'?",
      "Explicá el mecanismo de la transcripción: ¿qué enzima participa, qué produce y en qué dirección avanza?",
      "¿Qué son los intrones y exones? ¿Qué ocurre con ellos durante el procesamiento del ARNm?",
      "¿Por qué el código genético se dice que es 'degenerado'? Dá dos ejemplos.",
    ],
  },
  // SISTEMA NERVIOSO — PRIMARIA
  {
    id: "nervioso-p",
    titulo: "El Viaje del Mensaje Nervioso",
    nivel: "Primaria",
    modulo: "Sistema Nervioso",
    emoji: "🧠",
    color: "#a78bfa",
    objetivo: "Identificar las partes de una neurona y entender cómo viajan los mensajes en el cuerpo.",
    consigna: "Observá la neurona en 3D y completá las actividades.",
    actividades: [
      "Dibujá una neurona grande en tu hoja. Señalá: soma, dendritas, axón, vaina de mielina y terminal del axón.",
      "Trazá con una flecha el camino que recorre un mensaje nervioso desde las dendritas hasta la terminal.",
      "Recortá y pegá imágenes (o dibujá) situaciones cotidianas donde el sistema nervioso actúa: tocar algo caliente, ver un objeto, escuchar música.",
    ],
    preguntas: [
      "¿Cómo se llama la célula del sistema nervioso?",
      "¿Qué parte de la neurona recibe los mensajes?",
      "¿Para qué sirve la vaina de mielina?",
      "¿Cómo se llama el espacio entre dos neuronas?",
      "Describí con tus palabras qué pasa cuando tocás algo muy frío.",
      "¿Qué diferencia hay entre el sistema nervioso central y el periférico?",
      "Describí con tus palabras qué pasa en tu sistema nervioso cuando escuchás un ruido fuerte.",
      "¿Por qué la velocidad de conducción es más rápida en los nervios con vaina de mielina?",
    ],
  },
  // SISTEMA NERVIOSO — SECUNDARIA
  {
    id: "nervioso-s",
    titulo: "Potencial de Acción y Sinapsis",
    nivel: "Secundaria",
    modulo: "Sistema Nervioso",
    emoji: "🧠",
    color: "#a78bfa",
    objetivo: "Explicar el mecanismo iónico del potencial de acción y la transmisión sináptica.",
    consigna: "Analizá el modelo 3D de la neurona y respondé con fundamento electrofisiológico.",
    actividades: [
      "Graficá un potencial de acción: eje X = tiempo (ms), eje Y = voltaje (mV). Marcá: potencial de reposo, umbral de disparo, despolarización, repolarización, hiperpolarización.",
      "Esquematizá una sinapsis química: identificá vesículas, neurotransmisor, receptor postsináptico y hendidura sináptica.",
      "Investigá y completá: ¿Qué neurotransmisores se liberan en el sistema nervioso central? ¿Cuáles son excitadores y cuáles inhibidores?",
    ],
    preguntas: [
      "Explicá el rol de los canales de Na⁺ y K⁺ en el potencial de acción. ¿Por qué es 'todo o nada'?",
      "¿Qué es el período refractario absoluto y por qué impide que el impulso vuelva hacia atrás?",
      "Compará la conducción continua (sin mielina) con la conducción saltatoria. ¿Cuál es más rápida y por qué?",
      "¿Cómo actúa un anestésico local a nivel molecular sobre la membrana neuronal?",
      "¿Qué ocurre con el sistema nervioso en la esclerosis múltiple? Relacionalo con la vaina de mielina.",
      "¿Cómo se diferencia una sinapsis excitatoria de una inhibitoria? ¿Qué neurotransmisores están involucrados?",
      "Describí el rol de los astrocitos y la microglía en el sistema nervioso central.",
      "¿Qué es la plasticidad sináptica y cómo se relaciona con el aprendizaje y la memoria?",
      "¿Qué diferencias hay entre el sistema nervioso somático y el autónomo? Dá un ejemplo de cada uno.",
      "Explicá cómo funciona el arco reflejo medular y por qué es más rápido que una respuesta voluntaria.",
      "¿Qué rol cumple el hipotálamo en la integración del sistema nervioso y el endócrino?",
    ],
  },
  // CÉLULA VEGETAL — PRIMARIA
  {
    id: "planta-p",
    titulo: "Célula Animal vs. Célula Vegetal",
    nivel: "Primaria",
    modulo: "Célula Vegetal",
    emoji: "🌿",
    color: "#34d399",
    objetivo: "Comparar las células animal y vegetal e identificar las estructuras exclusivas de las plantas.",
    consigna: "Usá los modelos 3D de ambas células en BioAula3D para comparar.",
    actividades: [
      "Dibujá lado a lado una célula animal y una célula vegetal. Pintá y señalá sus partes.",
      "Hacé un cuadro de doble entrada: ¿Qué tiene solo la animal? ¿Qué tiene solo la vegetal? ¿Qué tienen las dos?",
      "Buscá 3 plantas en tu casa o colegio y pensá: ¿qué parte de la célula vegetal les permite ser verdes?",
    ],
    preguntas: [
      "¿Qué estructura tienen las células vegetales pero no las animales? Nombrá 3.",
      "¿Para qué sirve la pared celular?",
      "¿Qué hace el cloroplasto?",
      "¿Por qué las plantas son verdes?",
      "¿Qué es la fotosíntesis? Explicá con tus palabras qué necesita la planta para hacerla.",
      "¿Qué es la vacuola central y por qué es tan grande en las células vegetales?",
      "Si una planta no recibe luz solar, ¿qué le pasa? ¿Por qué?",
      "¿Cómo le llega el agua desde las raíces hasta las hojas de un árbol muy alto?",
      "¿Qué parte de la célula vegetal le da rigidez a la planta para mantenerse de pie?",
      "¿Podría vivir una célula vegetal sin cloroplastos? ¿Por qué?",
      "¿Qué tienen en común y en qué se diferencian una célula vegetal y una célula animal?",
    ],
  },
  // CÉLULA VEGETAL — SECUNDARIA
  {
    id: "planta-s",
    titulo: "Fotosíntesis: Fases y Mecanismos",
    nivel: "Secundaria",
    modulo: "Célula Vegetal",
    emoji: "🌿",
    color: "#34d399",
    objetivo: "Analizar las dos fases de la fotosíntesis y su base bioquímica en el cloroplasto.",
    consigna: "Investigá el modelo 3D de la célula vegetal y respondé con rigor bioquímico.",
    actividades: [
      "Dibujá un cloroplasto y señalá: membrana externa, membrana interna, tilacoide, grana, estroma. Indicá dónde ocurre cada fase.",
      "Escribí la ecuación general de la fotosíntesis balanceada. Indicá de dónde proviene cada reactivo y hacia dónde va cada producto.",
      "Compará fotosíntesis C3, C4 y CAM: ventajas adaptativas, ejemplos de plantas, eficiencia hídrica.",
    ],
    preguntas: [
      "¿Qué son los fotosistemas I y II? ¿Qué longitud de onda absorbe cada uno preferentemente?",
      "Explicá la cadena de transporte de electrones en la fase luminosa. ¿Cómo se genera ATP?",
      "¿Qué es la fotolisis del agua? ¿Qué importancia tiene para la vida en la Tierra?",
      "Describí el ciclo de Calvin: ¿qué entra, qué sale y qué enzima es clave?",
      "¿Por qué las hojas cambian de color en otoño? Relacionalo con los pigmentos fotosintéticos.",
      "¿Qué es la fotorrespiración y en qué condiciones ambientales se produce?",
      "Compará la eficiencia fotosintética de plantas C3 y C4 en climas cálidos y secos.",
      "¿Por qué la clorofila absorbe luz roja y azul pero refleja la verde?",
      "¿Qué rol cumple el NADPH generado en la fase luminosa durante el ciclo de Calvin?",
      "Explicá cómo la temperatura afecta la tasa fotosintética a nivel enzimático.",
      "¿Qué ocurriría con la fotosíntesis si se bloqueara el transporte de electrones en el fotosistema II?",
    ],
  },
  // CORAZÓN — PRIMARIA
  {
    id: "corazon-p",
    titulo: "El Viaje de la Sangre",
    nivel: "Primaria",
    modulo: "Corazón Humano",
    emoji: "🫀",
    color: "#f87171",
    objetivo: "Comprender el recorrido de la sangre por el corazón y el cuerpo.",
    consigna: "Observá el modelo 3D del corazón en BioAula3D y completá las actividades.",
    actividades: [
      "Dibujá el corazón con sus 4 cámaras y pintá: aurículas en rosa claro, ventrículos en rojo oscuro.",
      "Trazá con flechas el camino de la sangre: venas cavas → aurícula derecha → ventrículo derecho → pulmones → aurícula izquierda → ventrículo izquierdo → aorta → cuerpo.",
      "Hacé un cuadro: diferencia entre arteria y vena (color de sangre, presión, dirección).",
    ],
    preguntas: [
      "¿Cuántas cámaras tiene el corazón? ¿Cómo se llaman?",
      "¿Qué lleva la sangre que sale del corazón hacia el cuerpo?",
      "¿Para qué sirven las válvulas cardíacas?",
      "¿Qué diferencia hay entre la sangre arterial y la venosa?",
      "Poné la mano en tu pecho y contá cuántas veces late tu corazón en 15 segundos. Multiplicalo por 4. ¿Cuántas veces late por minuto?",
      "¿Por qué el corazón late solo, sin que tengamos que pensarlo?",
      "¿Qué le pasaría al cuerpo si el corazón dejara de latir durante un minuto?",
      "¿Qué es la presión arterial y qué significa que alguien tenga la presión 'alta'?",
      "¿Por qué los deportistas tienen el corazón más grande que las personas sedentarias?",
      "¿Qué diferencia hay entre una arteria y una vena además del color de la sangre?",
      "Si el corazón tiene cuatro cámaras, ¿por qué la sangre no se mezcla entre el lado derecho e izquierdo?",
    ],
  },
  // CORAZÓN — SECUNDARIA
  {
    id: "corazon-s",
    titulo: "Ciclo Cardíaco y Sistema de Conducción",
    nivel: "Secundaria",
    modulo: "Corazón Humano",
    emoji: "🫀",
    color: "#f87171",
    objetivo: "Analizar el ciclo cardíaco, el sistema de conducción eléctrica y el control de la frecuencia cardíaca.",
    consigna: "Usá el modelo 3D del corazón para responder con precisión fisiológica.",
    actividades: [
      "Graficá el ciclo cardíaco (eje X = tiempo, 0 a 0,8 s): marcá sístole auricular, sístole ventricular, diástole. Indicá qué válvulas se abren y cierran en cada momento.",
      "Dibujá el sistema de conducción eléctrica: nódulo sinoauricular → nódulo auriculoventricular → haz de His → fibras de Purkinje.",
      "Calculá el gasto cardíaco si la frecuencia cardíaca es 70 lat/min y el volumen sistólico es 70 mL. Convertí a L/min.",
    ],
    preguntas: [
      "¿Cómo regula el sistema nervioso autónomo la frecuencia cardíaca? ¿Qué hace el simpático y el parasimpático?",
      "Explicá qué es la presión arterial sistólica y diastólica. ¿Qué factores la aumentan?",
      "¿Qué es un infarto de miocardio? ¿Qué arteria suele verse afectada y por qué?",
      "Describí la diferencia entre circulación pulmonar (menor) y circulación sistémica (mayor).",
      "¿Por qué el ventrículo izquierdo tiene la pared más gruesa que el derecho?",
      "¿Qué es la insuficiencia cardíaca congestiva y cómo afecta el gasto cardíaco?",
      "Describí el mecanismo de Frank-Starling y su importancia en la regulación del volumen sistólico.",
      "¿Qué rol cumplen el K⁺ y el Ca²⁺ en la contracción del músculo cardíaco?",
      "Explicá el mecanismo de acción de los betabloqueantes y su efecto sobre la frecuencia cardíaca.",
      "¿Qué es la aterosclerosis? Describí su desarrollo y consecuencias hemodinámicas.",
      "¿Por qué un ECG de 12 derivaciones permite detectar un infarto agudo de miocardio?",
    ],
  },
  // CEREBRO — PRIMARIA
  {
    id: "cerebro-p",
    titulo: "Partes del Cerebro y sus Funciones",
    nivel: "Primaria",
    modulo: "Cerebro Humano",
    emoji: "🧠",
    color: "#c084fc",
    objetivo: "Identificar las principales partes del cerebro y asociarlas con funciones cotidianas.",
    consigna: "Explorá el modelo 3D del cerebro en BioAula3D y respondé.",
    actividades: [
      "Dibujá el cerebro visto desde arriba. Señalá y pintá los 4 lóbulos: frontal (amarillo), parietal (azul), temporal (verde), occipital (rojo).",
      "Completá el cuadro: Lóbulo → Función principal → Ejemplo cotidiano.",
      "Recortá o dibujá acciones humanas (leer, bailar, ver una película, recordar un cumpleaños) y ubicalas en el lóbulo correcto.",
    ],
    preguntas: [
      "¿Cuántas partes principales tiene el encéfalo? Nombralas.",
      "¿Qué hace el cerebelo?",
      "¿Qué parte del cerebro procesa lo que vemos?",
      "¿Por qué el cerebro es tan importante para el cuerpo?",
      "Si alguien tiene un accidente y se daña el lóbulo frontal, ¿qué problemas puede tener?",
      "¿Qué diferencia hay entre el hemisferio derecho e izquierdo del cerebro?",
      "¿Por qué necesitamos dormir? ¿Qué le pasa al cerebro mientras dormimos?",
      "Describí con tus palabras qué es un recuerdo y cómo crees que lo guarda el cerebro.",
    ],
  },
  // CEREBRO — SECUNDARIA
  {
    id: "cerebro-s",
    titulo: "Neuroplasticidad y Lóbulos Cerebrales",
    nivel: "Secundaria",
    modulo: "Cerebro Humano",
    emoji: "🧠",
    color: "#c084fc",
    objetivo: "Analizar la organización funcional de la corteza cerebral y el concepto de neuroplasticidad.",
    consigna: "Investigá el modelo 3D del cerebro humano y respondé con rigor neurocientífico.",
    actividades: [
      "Dibujá la corteza cerebral con sus 4 lóbulos. En cada uno señalá áreas funcionales específicas (área motora, sensitiva, Broca, Wernicke, visual, auditiva).",
      "Leé el siguiente caso: 'Un paciente sufrió daño en el área de Wernicke'. Describí qué síntomas tendría y por qué.",
      "Investigá qué es la neuroplasticidad y dá dos ejemplos concretos de cómo el cerebro se modifica con el aprendizaje.",
    ],
    preguntas: [
      "¿Qué diferencia existe entre sustancia gris y sustancia blanca? ¿Dónde se encuentra cada una?",
      "Explicá el rol del hipocampo en la consolidación de la memoria. ¿Qué ocurre en el Alzheimer?",
      "¿Qué función cumple la amígdala en el procesamiento emocional? ¿Cómo se relaciona con el estrés postraumático?",
      "Describí la organización del sistema límbico y su relación con las emociones y la motivación.",
      "¿Por qué el cerebro humano consume un 20% de la energía corporal si representa solo el 2% del peso?",
      "Explicá el concepto de dominancia hemisférica. ¿Es cierto que las personas son 'del lado derecho' o 'del izquierdo'?",
      "¿Qué es el sueño REM y qué función cumple en la consolidación de la memoria?",
      "Describí los cambios estructurales que ocurren en el cerebro durante el aprendizaje a nivel sináptico.",
    ],
  },
  // SISTEMA RESPIRATORIO — PRIMARIA
  {
    id: "respiratorio-p",
    titulo: "¿Cómo Respiramos?",
    nivel: "Primaria",
    modulo: "Sistema Respiratorio",
    emoji: "🫁",
    color: "#38bdf8",
    objetivo: "Comprender el recorrido del aire por el sistema respiratorio y el intercambio de gases.",
    consigna: "Usá el modelo 3D del sistema respiratorio y completá las actividades.",
    actividades: [
      "Dibujá el recorrido del aire desde la nariz hasta los alvéolos: nariz → faringe → laringe → tráquea → bronquios → bronquíolos → alvéolos.",
      "Hacé una demostración: inflá un globo (=pulmón), tapá el extremo y soltalo. ¿Qué pasa? Relacionalo con la espiración.",
      "Completá: 'Cuando inspiro, entra ______ al cuerpo. Cuando expiro, sale ______.'",
    ],
    preguntas: [
      "¿Cuántos pulmones tiene el ser humano?",
      "¿Qué músculo ayuda a los pulmones a inflarse y desinflarse?",
      "¿Qué pasa con el O₂ que entra a los pulmones?",
      "¿Qué son los alvéolos y para qué sirven?",
      "¿Por qué en el invierno se ve el vapor de la respiración? ¿Qué sale realmente?",
      "¿Qué le pasa a tu respiración cuando hacés ejercicio fuerte? ¿Por qué respirás más rápido?",
      "¿Qué es el asma y cómo afecta el paso del aire por las vías respiratorias?",
      "¿Por qué es peligroso respirar en un ambiente cerrado con mucho dióxido de carbono?",
    ],
  },
  // SISTEMA RESPIRATORIO — SECUNDARIA
  {
    id: "respiratorio-s",
    titulo: "Mecánica Respiratoria e Intercambio Gaseoso",
    nivel: "Secundaria",
    modulo: "Sistema Respiratorio",
    emoji: "🫁",
    color: "#38bdf8",
    objetivo: "Analizar la mecánica respiratoria, los volúmenes pulmonares y el intercambio gaseoso a nivel alveolar.",
    consigna: "Investigá el modelo 3D del sistema respiratorio y respondé con rigor fisiológico.",
    actividades: [
      "Dibujá un espirómetro con sus curvas y etiquetá: volumen tidal, volumen de reserva inspiratoria, volumen de reserva espiratoria, volumen residual, capacidad pulmonar total.",
      "Calculá: Si la presión parcial de O₂ en el alvéolo es 104 mmHg y en el capilar es 40 mmHg, ¿en qué dirección difunde? ¿Por qué?",
      "Investigá qué es la enfermedad EPOC (enfisema pulmonar). ¿Cómo afecta la superficie de intercambio gaseoso?",
    ],
    preguntas: [
      "Explicá la inspiración y espiración en términos de cambios de presión (ley de Boyle).",
      "¿Cómo transporta la hemoglobina el O₂? ¿Qué factores desplazan la curva de disociación de la oxihemoglobina?",
      "¿Qué es el surfactante pulmonar y qué ocurre cuando falta (síndrome de distrés respiratorio neonatal)?",
      "Describí la regulación química de la respiración: ¿cómo detectan los quimiorreceptores el CO₂?",
      "¿Por qué un alpinista de alta montaña tiene más glóbulos rojos que una persona a nivel del mar?",
      "¿Qué es la enfermedad pulmonar obstructiva crónica (EPOC) y cómo altera los volúmenes pulmonares?",
      "Explicá el efecto Bohr: ¿cómo influye el pH en la afinidad de la hemoglobina por el O₂?",
      "¿Qué diferencias estructurales entre los alvéolos y los capilares pulmonares favorecen el intercambio gaseoso eficiente?",
    ],
  },
  // SISTEMA DIGESTIVO — PRIMARIA
  {
    id: "digestivo-p",
    titulo: "El Viaje del Alimento",
    nivel: "Primaria",
    modulo: "Sistema Digestivo",
    emoji: "🍽️",
    color: "#fb923c",
    objetivo: "Seguir el recorrido del alimento por el sistema digestivo e identificar cada órgano.",
    consigna: "Explorá el modelo 3D del sistema digestivo en BioAula3D.",
    actividades: [
      "Dibujá el sistema digestivo completo: boca → esófago → estómago → intestino delgado → intestino grueso → recto → ano.",
      "Señalá también: hígado y páncreas. Explicá con flechas para qué sirve cada uno.",
      "Armá una 'historia del sándwich': escribí qué le pasa a un sándwich desde que lo mordés hasta que se absorbe.",
    ],
    preguntas: [
      "¿Cuántos metros mide el intestino delgado aproximadamente?",
      "¿Qué hace el estómago con el alimento?",
      "¿Para qué sirve el hígado en la digestión?",
      "¿Dónde se absorben los nutrientes al cuerpo?",
      "¿Qué parte del sistema digestivo absorbe el agua y forma las heces?",
      "¿Por qué masticar bien la comida ayuda a hacer mejor la digestión?",
      "¿Qué función cumple el hígado además de ayudar a digerir las grasas?",
      "¿Qué le pasaría al cuerpo si el intestino delgado dejara de funcionar?",
    ],
  },
  // SISTEMA DIGESTIVO — SECUNDARIA
  {
    id: "digestivo-s",
    titulo: "Enzimas Digestivas y Absorción de Nutrientes",
    nivel: "Secundaria",
    modulo: "Sistema Digestivo",
    emoji: "🍽️",
    color: "#fb923c",
    objetivo: "Analizar los mecanismos enzimáticos de digestión y la absorción selectiva en el intestino delgado.",
    consigna: "Investigá el modelo 3D del sistema digestivo y respondé con rigor bioquímico.",
    actividades: [
      "Construí un cuadro: Macromolécula (proteína/lípido/carbohidrato) → Enzima → Producto final → Lugar de absorción.",
      "Dibujá una vellosidad intestinal y señalá: epitelio, capilar sanguíneo, vaso quilífero, microvellosidades (orla en cepillo). Indicá qué absorbe cada vía.",
      "Investigá el rol del microbioma intestinal: ¿qué bacterias predominan? ¿Qué producen? ¿Cómo afecta su composición a la salud?",
    ],
    preguntas: [
      "Explicá el rol del HCl en la digestión gástrica. ¿Por qué el estómago no se digiere a sí mismo?",
      "¿Cómo funciona la emulsificación de grasas por la bilis? ¿Qué relación tiene con la lipasa pancreática?",
      "Describí cómo se absorbe la glucosa en el intestino delgado (transporte activo secundario cotransporte Na⁺).",
      "¿Qué son las enfermedades inflamatorias intestinales (Crohn, colitis ulcerosa)? ¿Qué parte del intestino afectan?",
      "¿Por qué la fructosa del azúcar de mesa se metaboliza diferente a la glucosa? ¿Qué órgano está implicado?",
      "Describí el proceso de gluconeogénesis hepática: ¿cuándo ocurre y qué sustratos utiliza?",
      "¿Cómo actúan los inhibidores de la bomba de protones en el tratamiento de la gastritis?",
      "¿Qué relación existe entre la permeabilidad intestinal aumentada ('leaky gut') y las enfermedades autoinmunes?",
    ],
  },
  // CUERPO HUMANO — PRIMARIA
  {
    id: "cuerpo-p",
    titulo: "Sistemas del Cuerpo Humano",
    nivel: "Primaria",
    modulo: "Cuerpo Humano",
    emoji: "🧬",
    color: "#f87171",
    objetivo: "Identificar los principales sistemas del cuerpo humano y comprender cómo trabajan juntos.",
    consigna: "Explorá el modelo 3D del cuerpo humano en BioAula3D y completá las actividades.",
    actividades: [
      "Hacé un esquema del cuerpo humano y señalá dónde están: corazón, pulmones, estómago, cerebro, riñones, hígado.",
      "Completá el cuadro: Sistema → Órganos principales → Función → Una curiosidad.",
      "Dibujá la relación entre el sistema respiratorio y el circulatorio: ¿cómo llega el O₂ de los pulmones a todo el cuerpo?",
    ],
    preguntas: [
      "¿Cuántos sistemas tiene el cuerpo humano? Nombrá 5.",
      "¿Qué sistema controla y coordina todos los demás?",
      "¿Qué órgano filtra la sangre y produce orina?",
      "¿Cómo trabajan juntos el sistema digestivo y el circulatorio?",
      "¿Por qué es importante mantener una alimentación saludable para el correcto funcionamiento del cuerpo?",
      "¿Qué sistema del cuerpo humano se encarga de defendernos de enfermedades? ¿Cómo lo hace?",
      "¿Por qué cuando tenemos fiebre el cuerpo sube su temperatura? ¿Es algo malo o bueno?",
      "Elegí dos sistemas del cuerpo y explicá cómo trabajan juntos para realizar una actividad cotidiana.",
    ],
  },
  // CUERPO HUMANO — SECUNDARIA
  {
    id: "cuerpo-s",
    titulo: "Homeostasis e Integración de Sistemas",
    nivel: "Secundaria",
    modulo: "Cuerpo Humano",
    emoji: "🧬",
    color: "#f87171",
    objetivo: "Comprender el concepto de homeostasis y analizar cómo los sistemas corporales se integran para mantenerla.",
    consigna: "Investigá el modelo 3D del cuerpo humano y respondé con precisión fisiológica.",
    actividades: [
      "Elaborá un esquema de retroalimentación negativa para la regulación de la glucemia: incluí páncreas, insulina, glucagón, hígado, células y el estímulo/respuesta.",
      "Analizá qué ocurre en el cuerpo durante el ejercicio físico intenso: ¿cómo responden los sistemas cardiovascular, respiratorio, muscular y endócrino?",
      "Investigá qué es la diabetes tipo 1 y tipo 2. ¿Cuál es la diferencia molecular? ¿Qué tratamientos existen?",
    ],
    preguntas: [
      "¿Qué es la homeostasis? Dá tres ejemplos de variables que el cuerpo regula constantemente.",
      "Explicá cómo los riñones regulan la presión arterial a través del sistema renina-angiotensina-aldosterona.",
      "¿Cómo interactúan el sistema nervioso y el endócrino para responder al estrés (eje hipotálamo-hipófisis-suprarrenal)?",
      "Describí el rol del hígado como órgano integrador del metabolismo energético.",
      "¿Por qué una persona con insuficiencia renal retiene líquidos? ¿Qué implicancias tiene para el sistema cardiovascular?",
      "Explicá cómo el sistema inmune distingue entre células propias y agentes patógenos. ¿Qué ocurre en las enfermedades autoinmunes?",
      "¿Qué es la retroalimentación positiva? Dá un ejemplo fisiológico y explicá por qué no puede ser sostenida indefinidamente.",
      "¿Cómo regula el cuerpo la temperatura corporal ante el ejercicio intenso? Describí los mecanismos involucrados.",
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

const MODULES = Array.from(new Set(tareas.map(t => t.modulo)));

async function exportTareaPDF(tarea: Tarea) {
  const { default: jsPDF } = await import("jspdf");
  const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const W = 210;
  const marginX = 15;
  const contentW = W - marginX * 2;
  let y = 15;

  const checkPage = (needed: number) => {
    if (y + needed > 282) { pdf.addPage(); y = 15; }
  };

  const BLANK_LINES = tarea.nivel === "Primaria" ? 4 : 5;

  // Header
  pdf.setFillColor(15, 23, 42);
  pdf.rect(0, 0, W, 26, "F");
  pdf.setFontSize(9);
  pdf.setFont("helvetica", "normal");
  pdf.setTextColor(180, 180, 180);
  pdf.text(`BioAula3D · Nivel ${tarea.nivel} · ${tarea.modulo}`, marginX, 9);
  pdf.setFontSize(14);
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(255, 255, 255);
  const titleLines = pdf.splitTextToSize(tarea.titulo, contentW - 40);
  pdf.text(titleLines, marginX, 18);
  y = 33;

  // Meta row
  pdf.setFontSize(9);
  pdf.setFont("helvetica", "normal");
  pdf.setTextColor(80, 80, 80);
  pdf.text(`Nombre: ___________________________________   Fecha: ________________   Curso: ________`, marginX, y);
  y += 8;
  pdf.setDrawColor(200, 200, 200);
  pdf.line(marginX, y, marginX + contentW, y);
  y += 6;

  // Objetivo
  pdf.setFontSize(9);
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(30, 90, 60);
  pdf.text("Objetivo:", marginX, y);
  pdf.setFont("helvetica", "normal");
  pdf.setTextColor(50, 50, 50);
  const objLines = pdf.splitTextToSize(tarea.objetivo, contentW - 20);
  pdf.text(objLines, marginX + 20, y);
  y += objLines.length * 4.5 + 4;

  // Consigna
  pdf.setFont("helvetica", "italic");
  pdf.setTextColor(60, 60, 100);
  const consLines = pdf.splitTextToSize(tarea.consigna, contentW);
  pdf.text(consLines, marginX, y);
  y += consLines.length * 4.5 + 5;
  pdf.line(marginX, y, marginX + contentW, y);
  y += 6;

  // Actividades
  checkPage(10);
  pdf.setFontSize(10);
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(15, 23, 42);
  pdf.text("Parte 1: Actividades", marginX, y);
  y += 7;

  tarea.actividades.forEach((act, i) => {
    const actLines = pdf.splitTextToSize(`${i + 1}. ${act}`, contentW - 6);
    checkPage(actLines.length * 4.5 + BLANK_LINES * 6 + 10);
    pdf.setFontSize(9);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(30, 30, 30);
    pdf.text(actLines, marginX + 2, y);
    y += actLines.length * 4.5 + 3;
    for (let l = 0; l < BLANK_LINES; l++) {
      pdf.setDrawColor(180, 180, 180);
      pdf.line(marginX + 4, y, marginX + contentW - 4, y);
      y += 6;
    }
    y += 3;
  });

  // Preguntas
  y += 2;
  checkPage(10);
  pdf.setDrawColor(200, 200, 200);
  pdf.line(marginX, y, marginX + contentW, y);
  y += 6;
  pdf.setFontSize(10);
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(15, 23, 42);
  pdf.text("Parte 2: Preguntas", marginX, y);
  y += 7;

  tarea.preguntas.forEach((q, i) => {
    const qLines = pdf.splitTextToSize(`${i + 1}. ${q}`, contentW - 6);
    checkPage(qLines.length * 4.5 + BLANK_LINES * 6 + 8);
    pdf.setFontSize(9);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(30, 30, 30);
    pdf.text(qLines, marginX + 2, y);
    y += qLines.length * 4.5 + 3;
    for (let l = 0; l < BLANK_LINES; l++) {
      pdf.setDrawColor(180, 180, 180);
      pdf.line(marginX + 4, y, marginX + contentW - 4, y);
      y += 6;
    }
    y += 3;
  });

  // Footer
  const pageCount = (pdf as any).internal.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    pdf.setPage(i);
    pdf.setFontSize(7);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(160, 160, 160);
    pdf.text("BioAula3D · bio-aula3-d-git-main-maxwebs.vercel.app", marginX, 293);
    pdf.text(`Página ${i} de ${pageCount}`, W - marginX, 293, { align: "right" });
  }

  return pdf;
}

function TareaCard({ tarea }: { tarea: Tarea }) {
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [shared, setShared] = useState(false);
  const [checkedPreguntas, setCheckedPreguntas] = useState<boolean[]>(() => tarea.preguntas.map(() => true));
  const [checkedActividades, setCheckedActividades] = useState<boolean[]>(() => tarea.actividades.map(() => true));

  const togglePregunta = useCallback((i: number) => {
    setCheckedPreguntas(c => c.map((v, j) => j === i ? !v : v));
  }, []);

  const toggleActividad = useCallback((i: number) => {
    setCheckedActividades(c => c.map((v, j) => j === i ? !v : v));
  }, []);

  const activePreguntas = checkedPreguntas.filter(Boolean).length;
  const activeActividades = checkedActividades.filter(Boolean).length;

  const getFilteredTarea = (): Tarea => ({
    ...tarea,
    preguntas: tarea.preguntas.filter((_, i) => checkedPreguntas[i]),
    actividades: tarea.actividades.filter((_, i) => checkedActividades[i]),
  });

  const handleDownload = async () => {
    setLoading(true);
    try {
      const pdf = await exportTareaPDF(getFilteredTarea());
      pdf.save(`BioAula3D-Tarea-${tarea.id}.pdf`);
    } finally { setLoading(false); }
  };

  const handleShare = async () => {
    setLoading(true);
    try {
      const pdf = await exportTareaPDF(getFilteredTarea());
      const blob = pdf.output("blob");
      const filename = `BioAula3D-Tarea-${tarea.id}.pdf`;
      const file = new File([blob], filename, { type: "application/pdf" });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({ files: [file], title: `${tarea.titulo} — BioAula3D` });
      } else {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url; a.download = filename; a.click();
        URL.revokeObjectURL(url);
        setShared(true); setTimeout(() => setShared(false), 2000);
      }
    } finally { setLoading(false); }
  };

  return (
    <div className="border border-slate-800 rounded-2xl overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left px-5 py-4 flex items-start gap-4 hover:bg-slate-800/30 transition-all"
      >
        <span className="text-2xl flex-shrink-0 mt-0.5">{tarea.emoji}</span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${tarea.nivel === "Primaria" ? "bg-emerald-500/20 text-emerald-400" : "bg-blue-500/20 text-blue-400"}`}>
              {tarea.nivel === "Primaria" ? "🌱 Primaria" : "🔬 Secundaria"}
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ background: (moduleColors[tarea.modulo] ?? "#888") + "20", color: moduleColors[tarea.modulo] ?? "#888" }}>
              {tarea.modulo}
            </span>
          </div>
          <h3 className="text-white font-bold text-base leading-tight">{tarea.titulo}</h3>
          <p className="text-slate-500 text-xs mt-1 leading-snug">{tarea.objetivo}</p>
        </div>
        <span className="text-slate-600 text-xs mt-2 flex-shrink-0">{expanded ? "▲" : "▼"}</span>
      </button>

      {expanded && (
        <div className="border-t border-slate-800 px-5 py-4 bg-slate-900/30 space-y-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Consigna</p>
            <p className="text-slate-300 text-sm leading-relaxed italic">{tarea.consigna}</p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <p className="text-xs font-bold uppercase tracking-wider text-emerald-500">Parte 1 · Actividades</p>
              <span className="text-xs text-slate-500">{activeActividades}/{tarea.actividades.length} incluidas</span>
            </div>
            <ol className="space-y-2">
              {tarea.actividades.map((act, i) => (
                <li key={i} className="text-sm leading-relaxed flex gap-2 items-start">
                  <button
                    onClick={() => toggleActividad(i)}
                    className={`flex-shrink-0 w-5 h-5 rounded flex items-center justify-center text-xs border transition-all mt-0.5 ${
                      checkedActividades[i] ? "bg-emerald-500 border-emerald-500 text-white" : "border-slate-600 text-slate-600"
                    }`}
                  >
                    {checkedActividades[i] ? "✓" : ""}
                  </button>
                  <span className={`flex gap-2 ${checkedActividades[i] ? "text-slate-300" : "text-slate-600 line-through"}`}>
                    <span className="text-emerald-500 font-bold flex-shrink-0 no-underline" style={{ textDecoration: "none" }}>{i + 1}.</span>
                    <span>{act}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-2">
              <p className="text-xs font-bold uppercase tracking-wider text-blue-400">Parte 2 · Preguntas</p>
              <span className="text-xs text-slate-500">{activePreguntas}/{tarea.preguntas.length} incluidas</span>
            </div>
            <ol className="space-y-2">
              {tarea.preguntas.map((q, i) => (
                <li key={i} className="text-sm leading-relaxed flex gap-2 items-start">
                  <button
                    onClick={() => togglePregunta(i)}
                    className={`flex-shrink-0 w-5 h-5 rounded flex items-center justify-center text-xs border transition-all mt-0.5 ${
                      checkedPreguntas[i] ? "bg-emerald-500 border-emerald-500 text-white" : "border-slate-600 text-slate-600"
                    }`}
                  >
                    {checkedPreguntas[i] ? "✓" : ""}
                  </button>
                  <span className={`flex gap-2 ${checkedPreguntas[i] ? "text-slate-300" : "text-slate-600 line-through"}`}>
                    <span className="text-blue-400 font-bold flex-shrink-0" style={{ textDecoration: "none" }}>{i + 1}.</span>
                    <span>{q}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <p className="text-xs text-slate-500">
              PDF incluirá: <span className="text-slate-300 font-medium">{activePreguntas}/{tarea.preguntas.length} preguntas · {activeActividades}/{tarea.actividades.length} actividades</span>
            </p>
            <div className="flex gap-2">
              <button
                onClick={handleDownload}
                disabled={loading}
                className="flex items-center gap-1.5 px-4 py-2 bg-white text-slate-900 rounded-lg text-sm font-semibold hover:bg-slate-100 transition-all disabled:opacity-60"
              >
                {loading ? "⏳" : "📥"} {loading ? "Generando…" : "Descargar PDF"}
              </button>
              <button
                onClick={handleShare}
                disabled={loading}
                className="flex items-center gap-1.5 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm font-semibold transition-all disabled:opacity-60"
              >
                {loading ? "⏳" : shared ? "✓" : "📤"} {shared ? "Copiado" : "Compartir PDF"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function TareasPage() {
  const [nivel, setNivel] = useState<Nivel | "Todas">("Todas");
  const [modulo, setModulo] = useState<string | null>(null);

  const filtered = useMemo(() => tareas.filter(t =>
    (nivel === "Todas" || t.nivel === nivel) &&
    (!modulo || t.modulo === modulo)
  ), [nivel, modulo]);

  const primCount = tareas.filter(t => t.nivel === "Primaria").length;
  const secCount = tareas.filter(t => t.nivel === "Secundaria").length;

  return (
    <div className="min-h-screen bg-bio-dark">
      <div className="max-w-3xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-4 py-1.5 text-blue-400 text-xs font-medium mb-4">
            📋 Herramienta para docentes
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Banco de Tareas</h1>
          <p className="text-slate-400 text-sm leading-relaxed">
            {tareas.length} tareas listas para imprimir o enviar · {primCount} para Primaria · {secCount} para Secundaria<br />
            Cada tarea incluye actividades + preguntas con espacio para responder. Descargá el PDF de cada una.
          </p>
        </div>

        {/* Filtro nivel */}
        <div className="flex gap-2 mb-4 flex-wrap">
          {(["Todas", "Primaria", "Secundaria"] as const).map(n => (
            <button
              key={n}
              onClick={() => setNivel(n)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all border ${
                nivel === n
                  ? n === "Primaria" ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400"
                    : n === "Secundaria" ? "bg-blue-500/20 border-blue-500/50 text-blue-400"
                    : "bg-slate-700 border-white/20 text-white"
                  : "border-slate-800 text-slate-500 hover:text-slate-300"
              }`}
            >
              {n === "Primaria" ? "🌱 Primaria" : n === "Secundaria" ? "🔬 Secundaria" : "📚 Todas"}
            </button>
          ))}
        </div>

        {/* Filtro módulo */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setModulo(null)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${!modulo ? "border-white/20 text-white bg-slate-700" : "border-slate-800 text-slate-500 hover:text-slate-300"}`}
          >
            Todos los módulos
          </button>
          {MODULES.map(m => (
            <button
              key={m}
              onClick={() => setModulo(modulo === m ? null : m)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${modulo === m ? "text-black" : "border-slate-800 text-slate-500 hover:text-slate-300"}`}
              style={modulo === m ? { background: moduleColors[m] ?? "#888", borderColor: moduleColors[m] ?? "#888" } : {}}
            >
              {m}
            </button>
          ))}
        </div>

        {/* Contador */}
        <p className="text-slate-500 text-xs mb-4">
          Mostrando {filtered.length} tarea{filtered.length !== 1 ? "s" : ""}
        </p>

        {/* Lista */}
        {filtered.length === 0 ? (
          <div className="text-center py-12 text-slate-500">
            <div className="text-4xl mb-3">📋</div>
            <p>No hay tareas para los filtros seleccionados.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map(t => <TareaCard key={t.id} tarea={t} />)}
          </div>
        )}

        <div className="mt-10 text-center">
          <Link href="/" className="text-slate-500 hover:text-slate-300 text-sm transition-all">← Volver al inicio</Link>
        </div>
      </div>
    </div>
  );
}
