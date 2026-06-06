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
  // EVOLUCIÓN — PRIMARIA
  {
    id: "evolucion-p",
    titulo: "Selección Natural y Adaptaciones",
    nivel: "Primaria",
    modulo: "Evolución",
    emoji: "🦕",
    color: "#f59e0b",
    objetivo: "Comprender el mecanismo de la selección natural y los tipos de adaptaciones.",
    consigna: "Explorá el módulo de Evolución en BioAula3D y completá las actividades.",
    actividades: [
      "Investigá y dibujá 3 animales con adaptaciones interesantes (ej: camaleón, cactus, pingüino). Explicá qué los ayuda a sobrevivir.",
      "Simulá la selección natural: usando papeles de colores como 'presas' en distintos fondos, contá cuáles son más difíciles de ver para un 'depredador'.",
      "Creá una línea de tiempo mostrando cómo evolucionó el caballo desde sus antepasados pequeños hasta el actual.",
    ],
    preguntas: [
      "¿Qué significa que un ser vivo esté 'adaptado' a su ambiente?",
      "¿Por qué las jirafas con cuello más largo sobrevivieron más que las de cuello corto?",
      "¿Cuál es la diferencia entre la evolución y los cambios que hace un individuo en su vida?",
      "¿Quién fue Charles Darwin y qué observó en las Islas Galápagos?",
      "Nombrá una adaptación de 3 animales diferentes y explicá qué problema resuelve cada una.",
      "¿Por qué los fósiles son importantes como evidencia de la evolución?",
      "¿Puede un camaleón cambiar de color en su vida? ¿Eso es una evolución? Justificá.",
      "Si un animal tiene muchos hijos pero ninguno llega a adulto, ¿qué le dirías de su 'éxito evolutivo'?",
    ],
  },
  // EVOLUCIÓN — SECUNDARIA
  {
    id: "evolucion-s",
    titulo: "Mecanismos Evolutivos y Especiación",
    nivel: "Secundaria",
    modulo: "Evolución",
    emoji: "🦕",
    color: "#f59e0b",
    objetivo: "Analizar los mecanismos evolutivos y el proceso de especiación.",
    consigna: "Investigá el módulo de Evolución en BioAula3D y respondé con precisión científica.",
    actividades: [
      "Calculá las frecuencias alélicas de una población aplicando el equilibrio de Hardy-Weinberg (p² + 2pq + q² = 1). Determiná si está en equilibrio.",
      "Comparé anatomía comparada: homología vs analogía. Buscá 3 ejemplos de estructuras homólogas y 3 de análogas.",
      "Construí un árbol filogenético de 5 especies usando una matriz de caracteres derivados (sinapomorfías).",
    ],
    preguntas: [
      "¿Qué condiciones deben cumplirse para que una población esté en equilibrio de Hardy-Weinberg?",
      "Diferenciá la selección estabilizadora, la direccional y la disruptiva con un ejemplo de cada una.",
      "¿Qué es la deriva génica y por qué es más importante en poblaciones pequeñas?",
      "Explicá la diferencia entre especiación alopátrica y simpátrica.",
      "¿Por qué los órganos análogos son evidencia de evolución convergente y no de ancestro común?",
      "¿Qué información proporciona el análisis de secuencias de ARNr para construir árboles filogenéticos?",
      "¿Cómo actúa el flujo génico sobre la diferenciación entre poblaciones?",
      "Describí el efecto cuello de botella y el efecto fundador como casos extremos de deriva génica.",
    ],
  },
  // CLASIFICACIÓN — PRIMARIA
  {
    id: "clasificacion-p",
    titulo: "Los 5 Reinos de los Seres Vivos",
    nivel: "Primaria",
    modulo: "Clasificación",
    emoji: "🌿",
    color: "#2dd4bf",
    objetivo: "Identificar y caracterizar los 5 reinos de los seres vivos.",
    consigna: "Explorá el módulo de Clasificación en BioAula3D y completá las actividades.",
    actividades: [
      "Creá una tabla comparativa de los 5 reinos indicando: ¿tiene núcleo?, ¿uni o pluricelular?, ¿autótrofo o heterótrofo?, ejemplo.",
      "Clasificá 10 organismos dados (hongo, alga, bacteria, perro, rosal...) en su reino correspondiente justificando tu respuesta.",
      "Diseñá una clave dicotómica simple para identificar si un organismo pertenece a Plantae, Animalia o Fungi.",
    ],
    preguntas: [
      "¿Cuáles son los 5 reinos de la clasificación clásica? Nombralos y dá un ejemplo de cada uno.",
      "¿Qué tienen en común los hongos y las plantas? ¿En qué se diferencian?",
      "¿Por qué las bacterias pertenecen al reino Monera y no a los otros reinos?",
      "Explicá qué significa que un organismo sea 'autótrofo'.",
      "¿Cómo se escribe el nombre científico del ser humano? ¿Qué significa cada parte?",
      "¿Qué es una clave dicotómica y para qué sirve en la clasificación?",
      "Si encontrás un organismo que hace fotosíntesis y tiene pared celular, ¿a qué reino podría pertenecer?",
      "¿Por qué es importante que los científicos del mundo entero usen el mismo sistema de nomenclatura?",
    ],
  },
  // CLASIFICACIÓN — SECUNDARIA
  {
    id: "clasificacion-s",
    titulo: "Taxonomía y Filogenia Molecular",
    nivel: "Secundaria",
    modulo: "Clasificación",
    emoji: "🌿",
    color: "#2dd4bf",
    objetivo: "Aplicar conceptos de sistemática filogenética y los 3 dominios de la vida.",
    consigna: "Investigá el módulo de Clasificación en BioAula3D y respondé con precisión científica.",
    actividades: [
      "Analizá una tabla de similitudes en secuencias de ARNr 16S entre bacterias, arqueas y eucariotas. Determiná cuáles están más relacionadas.",
      "Construí un cladograma de vertebrados usando caracteres derivados compartidos (mandíbula, amnios, pelo, etc.).",
      "Investigá una bacteria extremófila y una arquea extremófila. Comparalas en cuanto a hábitat, membrana y metabolismo.",
    ],
    preguntas: [
      "¿En qué se diferencia el sistema de 3 dominios (Woese) del sistema de 5 reinos (Whittaker)?",
      "¿Por qué las Archaea se separaron de las Bacteria como un dominio propio?",
      "Explicá qué es un clado y cuál es la diferencia entre un grupo monofilético y uno parafilético.",
      "¿Qué es una sinapomorfía y por qué es fundamental en la sistemática cladística?",
      "¿Qué diferencias hay en los lípidos de membrana entre Bacteria y Archaea?",
      "¿Por qué el análisis de ARN ribosomal 16S/18S se usa para estudiar relaciones evolutivas?",
      "¿Cómo se aplica el concepto biológico de especie y cuáles son sus limitaciones?",
      "Describí las características que comparten Archaea y Eukarya en el proceso de transcripción.",
    ],
  },
  // TEJIDOS — PRIMARIA
  {
    id: "tejidos-p",
    titulo: "Los Tejidos del Cuerpo",
    nivel: "Primaria",
    modulo: "Tejidos",
    emoji: "🔬",
    color: "#a78bfa",
    objetivo: "Reconocer los 4 tipos de tejido animal y sus funciones básicas.",
    consigna: "Explorá el módulo de Tejidos en BioAula3D y completá las actividades.",
    actividades: [
      "Dibujá y etiquetá un diagrama del cuerpo humano señalando dónde se encuentra cada tipo de tejido.",
      "Observá imágenes de microscopía de los 4 tejidos. Describí las diferencias que ves en la forma y organización de las células.",
      "Inventá una analogía creativa para cada tejido (ej: el tejido muscular es como un motor porque...).",
    ],
    preguntas: [
      "¿Cuáles son los 4 tipos de tejido animal? Nombralos y explicá brevemente cada uno.",
      "¿Qué diferencia hay entre el tejido muscular liso y el esquelético?",
      "¿Por qué la piel pertenece al tejido epitelial?",
      "¿En qué partes del cuerpo encontramos tejido conectivo?",
      "¿Qué función cumple el tejido nervioso?",
      "¿Por qué el corazón tiene un tipo especial de tejido muscular?",
      "¿Qué es la histología y para qué sirve?",
      "Si una persona rompe un hueso, ¿qué tipo de tejido se daña? ¿Puede regenerarse?",
    ],
  },
  // TEJIDOS — SECUNDARIA
  {
    id: "tejidos-s",
    titulo: "Histología: Estructura y Función Tisular",
    nivel: "Secundaria",
    modulo: "Tejidos",
    emoji: "🔬",
    color: "#a78bfa",
    objetivo: "Analizar la estructura histológica de los tejidos animales y vegetales.",
    consigna: "Investigá el módulo de Tejidos en BioAula3D y respondé con precisión científica.",
    actividades: [
      "Interpretá microfotografías de tejidos histológicos. Identificá el tipo de tejido y justificá con características celulares observadas.",
      "Comparé tejido muscular liso, esquelético y cardíaco en cuanto a: presencia de estrías, control voluntario/involuntario, localización y capacidad regenerativa.",
      "Investigá una patología relacionada con un tejido (ej: fibrosis del tejido conectivo, distrofia muscular, esclerosis múltiple del tejido nervioso). Explicá qué tejido afecta y cómo.",
    ],
    preguntas: [
      "¿Cuáles son las diferencias entre epitelio simple y estratificado? Dá ejemplos de dónde se encuentran.",
      "Describí la composición de la matriz extracelular del tejido conectivo y la función de cada componente.",
      "¿Por qué los cardiomiocitos tienen discos intercalares? ¿Qué función cumplen en la contracción cardíaca?",
      "¿Cuál es la diferencia funcional entre el xilema y el floema en los tejidos vegetales?",
      "¿Qué son los meristemas y por qué son importantes para el crecimiento vegetal?",
      "Explicá por qué las células de Schwann del SNP y los oligodendrocitos del SNC tienen diferente importancia en enfermedades desmielinizantes.",
      "¿Qué caracteriza histológicamente al tejido adiposo pardo y qué función cumple en mamíferos?",
      "¿Cómo se diferencia el colénquima del esclerénquima en plantas? ¿En qué órganos se encuentra cada uno?",
    ],
  },
  // HERENCIA GENÉTICA — PRIMARIA
  {
    id: "herencia-p",
    titulo: "Las Leyes de Mendel y la Herencia",
    nivel: "Primaria",
    modulo: "Herencia Genética",
    emoji: "🧩",
    color: "#f59e0b",
    objetivo: "Comprender cómo se transmiten los caracteres hereditarios usando las leyes de Mendel.",
    consigna: "Explorá el módulo de Herencia Genética en BioAula3D y resolvé las siguientes actividades.",
    actividades: [
      "Dibujá un cuadro de Punnett para el cruce Bb × Bb (flor morada/blanca). Indicá cuáles son moradas y cuáles blancas.",
      "Identificá en cada resultado del cuadro si el individuo es homocigoto dominante, heterocigoto u homocigoto recesivo.",
      "Listá al menos 3 características físicas tuyas (color de ojos, tipo de lóbulo de oreja, etc.) y pensá si podrían ser dominantes o recesivas.",
    ],
    preguntas: [
      "¿Qué es un gen? ¿Y un alelo?",
      "¿Cuál es la diferencia entre carácter dominante y carácter recesivo?",
      "¿Qué significa que un individuo sea homocigoto? ¿Y heterocigoto?",
      "En el cruce Bb × Bb, ¿qué porcentaje de descendientes tendrán fenotipo recesivo?",
      "¿Cuál es la diferencia entre genotipo y fenotipo? Dá un ejemplo.",
      "¿Por qué los hijos de dos personas de ojos marrones pueden tener ojos azules?",
      "¿Qué es la Primera Ley de Mendel (Ley de la Segregación)?",
    ],
  },
  // HERENCIA GENÉTICA — SECUNDARIA
  {
    id: "herencia-s",
    titulo: "Genética Mendeliana y No Mendeliana",
    nivel: "Secundaria",
    modulo: "Herencia Genética",
    emoji: "🧩",
    color: "#f59e0b",
    objetivo: "Resolver problemas de genética mendeliana y analizar patrones de herencia complejos.",
    consigna: "Analizá los conceptos del módulo de Herencia Genética y respondé con rigor científico.",
    actividades: [
      "Resolvé un cruce dihíbrido AaBb × AaBb. Determiná las proporciones fenotípicas y genotípicas esperadas usando un cuadro de Punnett 4×4.",
      "Investigá un caso de herencia ligada al sexo (ej.: hemofilia o daltonismo). Calculá la probabilidad de que un hijo varón sea afectado si la madre es portadora.",
      "Describí con un ejemplo la diferencia entre codominancia y dominancia incompleta.",
    ],
    preguntas: [
      "¿Qué establece la Segunda Ley de Mendel (Ley de la Distribución Independiente)? ¿Cuándo no se cumple?",
      "¿Qué es la codominancia? Dá un ejemplo con el grupo sanguíneo ABO.",
      "Explicá por qué la hemofilia afecta principalmente a varones. ¿Cuál es el genotipo de una mujer portadora?",
      "En un cruce dihíbrido AaBb × AaBb, ¿qué proporción de descendientes serán AABB?",
      "¿Qué es la epistasia? ¿Cómo modifica las proporciones mendelianas esperadas?",
      "¿Cuál es la diferencia entre herencia poligénica y pleiotrópica? Dá un ejemplo de cada una.",
      "¿Cómo se determina el sexo cromosómicamente en humanos? ¿Qué ocurre en el síndrome de Turner (45,X)?",
      "¿Por qué los gemelos idénticos tienen el mismo genotipo pero pueden tener fenotipos distintos?",
    ],
  },
  // MITOSIS Y MEIOSIS — PRIMARIA
  {
    id: "mitosis-p",
    titulo: "La División Celular: Mitosis",
    nivel: "Primaria",
    modulo: "Mitosis y Meiosis",
    emoji: "🔬",
    color: "#818cf8",
    objetivo: "Conocer las fases de la mitosis y comprender su importancia en el crecimiento y la reparación.",
    consigna: "Usá el módulo de Mitosis en BioAula3D para observar las fases y responder las actividades.",
    actividades: [
      "Dibujá y rotulá las 4 fases de la mitosis: profase, metafase, anafase y telofase. Indicá qué ocurre con los cromosomas en cada etapa.",
      "Ordená en una línea de tiempo las fases de la mitosis desde la interfase hasta la citocinesis.",
      "Buscá ejemplos del cuerpo humano donde ocurra mitosis (ej: piel, huesos) y explicá por qué es importante.",
    ],
    preguntas: [
      "¿Qué es la mitosis y para qué sirve en los organismos?",
      "¿En qué fase los cromosomas se alinean en el centro de la célula?",
      "¿Cuántas células hijas se obtienen al final de la mitosis? ¿Son iguales o diferentes a la célula madre?",
      "¿Qué ocurre en la interfase antes de que comience la división?",
      "¿Qué son los cromosomas y qué contienen?",
      "¿Por qué la mitosis es importante para la cicatrización de heridas?",
      "¿Qué diferencia hay entre la mitosis y la reproducción sexual?",
    ],
  },
  // MITOSIS Y MEIOSIS — SECUNDARIA
  {
    id: "mitosis-s",
    titulo: "Ciclo Celular, Mitosis y Meiosis",
    nivel: "Secundaria",
    modulo: "Mitosis y Meiosis",
    emoji: "🔬",
    color: "#818cf8",
    objetivo: "Comparar mitosis y meiosis en cuanto a mecanismos, función y resultado genético.",
    consigna: "Investigá el módulo de Mitosis y Meiosis en BioAula3D y respondé con precisión molecular.",
    actividades: [
      "Construí un cuadro comparativo entre mitosis y meiosis que incluya: número de divisiones, células resultantes, ploidía (n/2n), presencia de crossing-over y función biológica.",
      "Explicá las fases del ciclo celular (G1, S, G2, M) y describí qué checkpoints controlan el ingreso a cada fase.",
      "Analizá cómo el crossing-over durante la meiosis I contribuye a la variabilidad genética. Ilustrá con un diagrama.",
    ],
    preguntas: [
      "¿Qué ocurre en la fase S del ciclo celular? ¿Por qué es fundamental para la división?",
      "¿Cuáles son los checkpoints del ciclo celular y qué proteínas los regulan (ciclinas/CDK)?",
      "¿En qué se diferencia la meiosis I de la meiosis II? ¿Qué sucede con la ploidía en cada caso?",
      "¿Qué es el crossing-over y en qué subestagio de la profase I ocurre?",
      "¿Por qué las células germinales (gametos) deben ser haploides (n) y no diploides (2n)?",
      "¿Qué consecuencia tiene una no disyunción durante la meiosis? Mencioná un ejemplo de aneuploidía.",
      "¿Cómo se relaciona la mitosis descontrolada con el desarrollo de un tumor?",
      "Comparé el resultado de la mitosis (2n→2n) con el de la meiosis (2n→4 células n). ¿Por qué son procesos distintos?",
    ],
  },
  // MICROBIOLOGÍA — PRIMARIA
  {
    id: "microbiologia-p",
    titulo: "El Mundo de los Microorganismos",
    nivel: "Primaria",
    modulo: "Microbiología",
    emoji: "🦠",
    color: "#4ade80",
    objetivo: "Reconocer los principales tipos de microorganismos y su impacto en la salud.",
    consigna: "Explorá el módulo de Microbiología en BioAula3D y resolvé las siguientes actividades.",
    actividades: [
      "Dibujá una bacteria y un virus e identificá sus partes principales. ¿En qué se diferencian?",
      "Listá 3 microorganismos beneficiosos y 3 perjudiciales para el ser humano. Explicá brevemente qué hacen.",
      "Investigá cómo funciona una vacuna y explicalo con tus palabras usando un dibujo o esquema.",
    ],
    preguntas: [
      "¿Qué es un microorganismo? Dá 3 ejemplos.",
      "¿Cuál es la diferencia principal entre una bacteria y un virus?",
      "¿Qué es la fermentación y para qué se usa en la vida cotidiana?",
      "¿Por qué es importante lavarse las manos para prevenir enfermedades?",
      "¿Qué hace una vacuna en nuestro cuerpo?",
      "Mencioná una enfermedad causada por bacterias y una causada por virus.",
      "¿Los microorganismos son siempre dañinos? Justificá tu respuesta.",
    ],
  },
  // MICROBIOLOGÍA — SECUNDARIA
  {
    id: "microbiologia-s",
    titulo: "Microbiología: Estructura, Patogenicidad y Resistencia",
    nivel: "Secundaria",
    modulo: "Microbiología",
    emoji: "🦠",
    color: "#4ade80",
    objetivo: "Analizar la estructura bacteriana, el ciclo viral y los mecanismos de resistencia antibiótica.",
    consigna: "Investigá el módulo de Microbiología en BioAula3D y respondé con rigor científico.",
    actividades: [
      "Describí la estructura de una bacteria grampositiva vs. gramnegativa. Relacioná esta diferencia con la sensibilidad a antibióticos.",
      "Explicá el ciclo lítico y lisogénico de un bacteriófago. ¿En qué condiciones predomina cada uno?",
      "Investigá qué es el microbioma intestinal humano y cómo influye en la salud (inmunidad, digestión, salud mental).",
    ],
    preguntas: [
      "¿Qué estructuras tiene una bacteria que no tiene un virus? ¿Y el virus que no tiene la bacteria?",
      "¿Cuál es el mecanismo de acción de los antibióticos beta-lactámicos? ¿Por qué las bacterias desarrollan resistencia?",
      "Explicá el ciclo replicativo de un virus ARN (ej.: influenza). ¿Por qué mutan tan rápidamente?",
      "¿Qué es un plásmido y cómo contribuye a la diseminación de resistencia antibiótica?",
      "¿Cuál es la diferencia entre infección bacteriana y viral en cuanto a tratamiento?",
      "¿Qué rol cumple el microbioma en la modulación del sistema inmune?",
      "¿Qué es la selección clonal en bacterias y cómo contribuye a la resistencia?",
      "Describí cómo las vacunas de ARNm (como las del COVID-19) generan inmunidad sin usar el virus completo.",
    ],
  },
  // ECOSISTEMAS — PRIMARIA
  {
    id: "ecosistemas-p",
    titulo: "Cadenas Alimentarias y Ecosistemas",
    nivel: "Primaria",
    modulo: "Ecosistemas",
    emoji: "🌳",
    color: "#22c55e",
    objetivo: "Comprender qué es un ecosistema y cómo fluye la energía a través de las cadenas alimentarias.",
    consigna: "Explorá el módulo de Ecosistemas en BioAula3D y resolvé las actividades.",
    actividades: [
      "Construí una cadena alimentaria con al menos 4 eslabones e indicá qué rol cumple cada organismo (productor, consumidor primario/secundario, descomponedor).",
      "Elegí un bioma (selva, desierto, pradera, océano) y listá 5 organismos que vivan ahí. Explicá cómo están adaptados.",
      "Dibujá una red alimentaria simple con al menos 6 organismos y señalá quién come a quién.",
    ],
    preguntas: [
      "¿Qué es un ecosistema? ¿Cuáles son sus componentes bióticos y abióticos?",
      "¿Cuál es la diferencia entre un productor y un consumidor?",
      "¿Qué son los descomponedores y qué rol cumplen en el ecosistema?",
      "¿Por qué las plantas son la base de casi todas las cadenas alimentarias?",
      "¿Qué le ocurre al resto de la cadena alimentaria si desaparece una especie?",
      "Mencioná dos diferencias entre la selva tropical y el desierto como ecosistemas.",
      "¿Por qué es importante cuidar la biodiversidad de un ecosistema?",
    ],
  },
  // ECOSISTEMAS — SECUNDARIA
  {
    id: "ecosistemas-s",
    titulo: "Flujo de Energía y Ciclos Biogeoquímicos",
    nivel: "Secundaria",
    modulo: "Ecosistemas",
    emoji: "🌳",
    color: "#22c55e",
    objetivo: "Analizar el flujo de energía, los ciclos biogeoquímicos y la estructura de las pirámides ecológicas.",
    consigna: "Investigá el módulo de Ecosistemas en BioAula3D y respondé con precisión ecológica.",
    actividades: [
      "Dibujá una pirámide ecológica de energía con 4 niveles tróficos. Aplicá la regla del 10% para calcular la energía disponible en cada nivel partiendo de 10.000 kcal en los productores.",
      "Describí el ciclo del nitrógeno. Indicá qué microorganismos participan en cada etapa (fijación, nitrificación, desnitrificación).",
      "Analizá cómo la deforestación afecta al ciclo del carbono y contribuye al cambio climático.",
    ],
    preguntas: [
      "¿Qué establece la regla del 10% en ecología? ¿Por qué se pierde energía entre niveles tróficos?",
      "¿Cuál es la diferencia entre una pirámide de número, biomasa y energía?",
      "¿Cómo funciona el ciclo del carbono? ¿Cuáles son los reservorios principales?",
      "¿Qué es la eutrofización? ¿Qué ciclo biogeoquímico está implicado principalmente?",
      "¿Qué diferencia hay entre productividad primaria bruta y neta?",
      "¿Qué rol juegan las bacterias desnitrificantes en el ecosistema?",
      "¿Cómo afecta la introducción de una especie invasora a la red trófica de un ecosistema?",
      "¿Qué es el índice de biodiversidad de Shannon y para qué se usa?",
    ],
  },
  // SISTEMA ÓSEO — PRIMARIA
  {
    id: "oseo-p",
    titulo: "El Esqueleto Humano",
    nivel: "Primaria",
    modulo: "Sistema Óseo",
    emoji: "🦴",
    color: "#94a3b8",
    objetivo: "Conocer el esqueleto humano, los tipos de huesos y su función en el organismo.",
    consigna: "Usá el módulo de Sistema Óseo en BioAula3D para explorar el esqueleto y responder las actividades.",
    actividades: [
      "Dibujá el esqueleto humano y señalá al menos 10 huesos con su nombre correcto.",
      "Clasificá 6 huesos del cuerpo según su tipo: largo, corto, plano o irregular. Justificá la clasificación.",
      "Investigá qué es una articulación y dá 3 ejemplos con su tipo (fija, semimóvil, móvil).",
    ],
    preguntas: [
      "¿Cuántos huesos tiene el cuerpo humano adulto?",
      "¿Cuáles son las funciones principales del sistema óseo?",
      "¿Cuál es la diferencia entre hueso largo y hueso plano? Dá un ejemplo de cada uno.",
      "¿Qué es una articulación? Mencioná una articulación móvil del cuerpo.",
      "¿Por qué los niños tienen más cartílago que los adultos?",
      "¿Qué minerales son importantes para que los huesos sean fuertes?",
      "¿Qué le pasa a los huesos de una persona que no hace ejercicio? ¿Y a alguien que practica deporte?",
    ],
  },
  // SISTEMA ÓSEO — SECUNDARIA
  {
    id: "oseo-s",
    titulo: "Tejido Óseo: Histología y Remodelación",
    nivel: "Secundaria",
    modulo: "Sistema Óseo",
    emoji: "🦴",
    color: "#94a3b8",
    objetivo: "Analizar la composición histológica del tejido óseo, la osificación y los mecanismos de remodelación.",
    consigna: "Investigá el módulo de Sistema Óseo en BioAula3D y respondé con rigor científico.",
    actividades: [
      "Comparé el tejido óseo compacto y el tejido óseo esponjoso. Describí su estructura (osteona, trabéculas) y función.",
      "Explicá el proceso de osificación endocondral. ¿Qué rol cumplen los osteoblastos y osteoclastos en la remodelación ósea?",
      "Investigá cómo el calcio, la vitamina D y la hormona PTH regulan la homeostasis ósea.",
    ],
    preguntas: [
      "¿Cuáles son las células del tejido óseo y qué función cumple cada una (osteoblastos, osteoclastos, osteocitos)?",
      "¿Qué es la osteona (sistema de Havers) y cómo se organiza en el hueso compacto?",
      "¿Cuál es la diferencia entre osificación intramembranosa y endocondral?",
      "¿Cómo regula la PTH (hormona paratiroidea) los niveles de calcio en sangre?",
      "¿Qué es la osteoporosis y qué factores la predisponen?",
      "¿Cuáles son las fases de reparación de una fractura ósea?",
      "¿Qué rol cumple la vitamina D en la absorción de calcio y la mineralización ósea?",
      "¿Cómo la actividad física estimula la formación ósea a nivel celular?",
    ],
  },
  // SISTEMA MUSCULAR — PRIMARIA
  {
    id: "muscular-p",
    titulo: "Los Músculos del Cuerpo Humano",
    nivel: "Primaria",
    modulo: "Sistema Muscular",
    emoji: "💪",
    color: "#f87171",
    objetivo: "Conocer los tipos de músculos y comprender cómo permiten el movimiento del cuerpo.",
    consigna: "Explorá el módulo de Sistema Muscular en BioAula3D y resolvé las actividades.",
    actividades: [
      "Dibujá el cuerpo humano y señalá al menos 8 músculos con su nombre (bíceps, tríceps, cuádriceps, etc.).",
      "Clasificá los músculos en tres tipos (esquelético, liso, cardíaco) e indicá dónde se encuentran en el cuerpo.",
      "Diseñá una rutina de ejercicios saludable de 10 minutos e indicá qué músculos trabaja cada ejercicio.",
    ],
    preguntas: [
      "¿Cuántos tipos de músculos existen en el cuerpo? ¿En qué se diferencian?",
      "¿Cuál es la diferencia entre movimiento voluntario e involuntario? Dá un ejemplo de cada uno.",
      "¿Qué es un tendón y cuál es su función?",
      "¿Por qué el corazón nunca se cansa como un músculo esquelético?",
      "¿Qué ocurre con los músculos cuando hacemos ejercicio regularmente?",
      "¿Qué es el par muscular (agonista/antagonista)? Explicalo con el ejemplo del bíceps y el tríceps.",
      "¿Por qué los músculos necesitan oxígeno para funcionar?",
    ],
  },
  // SISTEMA MUSCULAR — SECUNDARIA
  {
    id: "muscular-s",
    titulo: "Mecanismo de Contracción Muscular",
    nivel: "Secundaria",
    modulo: "Sistema Muscular",
    emoji: "💪",
    color: "#f87171",
    objetivo: "Comprender el mecanismo molecular de deslizamiento de filamentos y la fisiología de la contracción.",
    consigna: "Investigá el módulo de Sistema Muscular en BioAula3D y respondé con profundidad molecular.",
    actividades: [
      "Describí la estructura del sarcómero indicando bandas A, I, H y líneas Z. Explicá qué cambios morfológicos ocurren durante la contracción.",
      "Explicá el mecanismo de deslizamiento de filamentos (teoría de Huxley). ¿Qué rol cumple el ATP en cada ciclo de puente cruzado?",
      "Investigá la fisiología de la fatiga muscular. ¿Qué mecanismos metabólicos entran en juego (vía aeróbica, glucólisis, fosfocreatina)?",
    ],
    preguntas: [
      "¿Qué proteínas forman los filamentos gruesos y delgados del sarcómero?",
      "¿Cuál es el papel del calcio en la activación de la contracción muscular? ¿Cómo actúa la troponina/tropomiosina?",
      "Describí la secuencia de eventos en la unión neuromuscular desde el potencial de acción hasta la contracción.",
      "¿Qué ocurre con las bandas del sarcómero durante la contracción isométrica vs. isotónica?",
      "¿Cómo se regenera el ATP durante el ejercicio de alta intensidad (sistema aláctico, glucolítico, oxidativo)?",
      "¿Qué es la tetania muscular y cómo se produce a nivel de potencial de acción?",
      "¿Cuál es la diferencia entre fibras musculares tipo I (lentas) y tipo II (rápidas)?",
      "¿Cómo actúa el retículo sarcoplásmico en la regulación del calcio intracelular?",
    ],
  },
  // SISTEMA EXCRETOR — PRIMARIA
  {
    id: "excretor-p",
    titulo: "El Sistema Excretor y los Riñones",
    nivel: "Primaria",
    modulo: "Sistema Excretor",
    emoji: "🫘",
    color: "#facc15",
    objetivo: "Comprender la función del sistema excretor y la importancia de los riñones en la filtración de la sangre.",
    consigna: "Usá el módulo de Sistema Excretor en BioAula3D para observar el riñón y responder las actividades.",
    actividades: [
      "Dibujá el sistema urinario e indicá sus partes: riñones, uréteres, vejiga y uretra.",
      "Describí el camino que hace la sangre desde que entra al riñón hasta que se forma la orina.",
      "Listá 3 sustancias de desecho que elimina el sistema excretor y explicá por qué es importante eliminarlas.",
    ],
    preguntas: [
      "¿Cuál es la función principal de los riñones?",
      "¿Qué es la orina y qué sustancias contiene?",
      "¿Por qué es importante tomar suficiente agua todos los días?",
      "¿Qué otros órganos participan en la excreción además de los riñones? (piel, pulmones)",
      "¿Qué es la nefrona? ¿Para qué sirve?",
      "¿Qué pasa con los riñones cuando una persona tiene diabetes o hipertensión?",
      "¿Por qué los astronautas en el espacio tienen problemas con los riñones?",
    ],
  },
  // SISTEMA EXCRETOR — SECUNDARIA
  {
    id: "excretor-s",
    titulo: "Fisiología Renal y Regulación Osmótica",
    nivel: "Secundaria",
    modulo: "Sistema Excretor",
    emoji: "🫘",
    color: "#facc15",
    objetivo: "Analizar los mecanismos de filtración glomerular, reabsorción tubular y regulación osmótica renal.",
    consigna: "Investigá el módulo de Sistema Excretor en BioAula3D y respondé con rigor fisiológico.",
    actividades: [
      "Describí las tres etapas de la formación de orina: filtración glomerular, reabsorción tubular y secreción. Indicá qué ocurre en cada segmento de la nefrona.",
      "Explicá el mecanismo del asa de Henle para concentrar la orina. ¿Qué rol cumple el gradiente de concentración medular?",
      "Investigá cómo la hormona ADH (vasopresina) regula la concentración de orina. ¿Qué ocurre en la diabetes insípida?",
    ],
    preguntas: [
      "¿Qué es la tasa de filtración glomerular (TFG) y qué factores la determinan?",
      "¿Qué sustancias son filtradas libremente en el glomérulo y cuáles no? ¿Por qué?",
      "¿Cuál es la diferencia entre reabsorción activa y pasiva en el túbulo renal?",
      "¿Qué rol cumple el asa de Henle descendente vs. ascendente en la concentración de la orina?",
      "¿Cómo regula la aldosterona la reabsorción de sodio y la excreción de potasio?",
      "¿Qué es la depuración renal (clearance)? ¿Cómo se mide con la creatinina?",
      "¿Qué cambios fisiopatológicos ocurren en el riñón en la nefropatía diabética?",
      "¿Cuál es el mecanismo de la hemodiálisis? ¿Qué principios fisicoquímicos aplica?",
    ],
  },
  // SISTEMA ENDÓCRINO — PRIMARIA
  {
    id: "endocrino-p",
    titulo: "Las Glándulas y las Hormonas",
    nivel: "Primaria",
    modulo: "Sistema Endócrino",
    emoji: "⚗️",
    color: "#fb923c",
    objetivo: "Reconocer las principales glándulas endócrinas y comprender el rol de las hormonas en el cuerpo.",
    consigna: "Explorá el módulo de Sistema Endócrino en BioAula3D y resolvé las actividades.",
    actividades: [
      "Dibujá el cuerpo humano y señalá las principales glándulas: hipófisis, tiroides, páncreas, suprarrenales y gónadas.",
      "Completá una tabla indicando glándula, hormona que produce y función principal para al menos 5 glándulas.",
      "Investigá qué es la diabetes y explicá qué hormona está involucrada y qué ocurre cuando falta.",
    ],
    preguntas: [
      "¿Qué es una hormona y cómo viaja por el cuerpo?",
      "¿Cuál es la diferencia entre el sistema nervioso y el sistema endócrino para comunicar mensajes?",
      "¿Qué hormona regula el crecimiento y cuál glándula la produce?",
      "¿Para qué sirve la insulina? ¿Qué pasa cuando el páncreas no la produce?",
      "¿Qué hace la hormona tiroidea en el cuerpo?",
      "¿Por qué durante la pubertad el cuerpo cambia tanto? ¿Qué hormonas están involucradas?",
      "¿Qué es el estrés y qué hormona lo acompaña?",
    ],
  },
  // SISTEMA ENDÓCRINO — SECUNDARIA
  {
    id: "endocrino-s",
    titulo: "Regulación Hormonal y Eje Hipotálamo-Hipófisis",
    nivel: "Secundaria",
    modulo: "Sistema Endócrino",
    emoji: "⚗️",
    color: "#fb923c",
    objetivo: "Analizar el eje hipotálamo-hipófisis, la retroalimentación negativa y los mecanismos de acción hormonal.",
    consigna: "Investigá el módulo de Sistema Endócrino en BioAula3D y respondé con profundidad endocrinológica.",
    actividades: [
      "Explicá el eje hipotálamo-hipófisis-tiroides. Dibujá un esquema de retroalimentación negativa indicando qué ocurre cuando los niveles de T3/T4 aumentan o disminuyen.",
      "Comparé las hormonas esteroideas y las hormonas proteicas en cuanto a síntesis, solubilidad, receptor y mecanismo de acción.",
      "Investigá la fisiopatología de la diabetes tipo 1 vs. tipo 2. ¿Qué diferencia hay en el rol de la insulina y el glucagón?",
    ],
    preguntas: [
      "¿Cuál es el mecanismo de retroalimentación negativa? Dá un ejemplo con el eje hipotálamo-hipófisis-tiroides.",
      "¿Cómo actúan las hormonas esteroideas a nivel intracelular? ¿Por qué pueden atravesar la membrana plasmática?",
      "¿Cuál es la diferencia entre hormona trópica y hormona efectora? Dá ejemplos.",
      "¿Cómo regula la insulina la glucemia? ¿Qué ocurre en una persona con resistencia a la insulina?",
      "¿Qué son los receptores de membrana acoplados a proteína G y cómo amplifican la señal hormonal?",
      "¿Qué diferencia hay entre hipotiroidismo e hipertiroidismo en cuanto a síntomas y niveles de TSH?",
      "¿Cómo actúan los corticosteroides (cortisol) durante el estrés? ¿Qué eje está involucrado?",
      "¿Qué es la regulación hacia arriba (up-regulation) y hacia abajo (down-regulation) de receptores hormonales?",
    ],
  },
  // INMUNOLOGÍA — PRIMARIA
  {
    id: "inmunologico-p",
    titulo: "El Sistema de Defensa del Cuerpo",
    nivel: "Primaria",
    modulo: "Inmunología",
    emoji: "🛡️",
    color: "#ef4444",
    objetivo: "Comprender cómo el sistema inmunológico defiende al cuerpo de patógenos.",
    consigna: "Explorá el módulo de Inmunología en BioAula3D y resolvé las actividades.",
    actividades: [
      "Dibujá un leucocito (glóbulo blanco) atacando a una bacteria e indicá qué ocurre en el proceso de fagocitosis.",
      "Listá las 3 líneas de defensa del organismo y dá un ejemplo de cada una (piel, fiebre, anticuerpos).",
      "Investigá cómo funciona una vacuna. Describí qué le pasa al sistema inmune la primera vez que ve el antígeno y la segunda vez.",
    ],
    preguntas: [
      "¿Qué es el sistema inmunológico y para qué sirve?",
      "¿Cuál es la diferencia entre glóbulos rojos y glóbulos blancos?",
      "¿Qué es un anticuerpo? ¿Cómo ayuda a defendernos?",
      "¿Por qué cuando tenemos fiebre el cuerpo está luchando contra una infección?",
      "¿Qué es la inflamación y para qué sirve?",
      "¿Por qué las vacunas protegen contra enfermedades?",
      "¿Qué ocurre cuando el sistema inmune ataca al propio cuerpo?",
    ],
  },
  // INMUNOLOGÍA — SECUNDARIA
  {
    id: "inmunologico-s",
    titulo: "Inmunidad Innata, Adaptativa y Memoria Inmunológica",
    nivel: "Secundaria",
    modulo: "Inmunología",
    emoji: "🛡️",
    color: "#ef4444",
    objetivo: "Distinguir la inmunidad innata de la adaptativa y analizar los mecanismos de memoria inmunológica.",
    consigna: "Investigá el módulo de Inmunología en BioAula3D y respondé con precisión inmunológica.",
    actividades: [
      "Comparé la inmunidad innata y la adaptativa en un cuadro que incluya: velocidad de respuesta, especificidad, células involucradas y memoria.",
      "Explicá cómo los linfocitos T citotóxicos eliminan células infectadas. ¿Qué rol cumple el complejo MHC-I?",
      "Investigá el mecanismo de una alergia (hipersensibilidad tipo I). ¿Qué células y mediadores están involucrados?",
    ],
    preguntas: [
      "¿Cuál es la diferencia entre linfocitos B y linfocitos T? ¿Dónde maduran cada uno?",
      "¿Qué es el complejo MHC (HLA en humanos)? ¿Cuál es la diferencia entre MHC-I y MHC-II?",
      "¿Cómo se genera la diversidad de anticuerpos mediante la recombinación V(D)J?",
      "¿Qué son las células dendríticas y qué rol cumplen en la presentación de antígenos?",
      "¿Cuál es la diferencia entre inmunidad humoral y celular?",
      "¿Qué son las células de memoria y por qué permiten una respuesta más rápida ante una segunda exposición?",
      "¿Cómo evade el VIH al sistema inmune? ¿A qué células ataca?",
      "¿Qué es la autoinmunidad? Mencioná una enfermedad autoinmune y explicá su mecanismo.",
    ],
  },
  // ÓRGANOS DE LOS SENTIDOS — PRIMARIA
  {
    id: "sentidos-p",
    titulo: "Los Cinco Sentidos",
    nivel: "Primaria",
    modulo: "Órganos de los Sentidos",
    emoji: "👁️",
    color: "#22d3ee",
    objetivo: "Reconocer los cinco sentidos, sus órganos y cómo nos conectan con el entorno.",
    consigna: "Explorá el módulo de Órganos de los Sentidos en BioAula3D y resolvé las actividades.",
    actividades: [
      "Completá una tabla con los 5 sentidos indicando: órgano, qué detecta y qué parte del cerebro lo procesa.",
      "Realizá un experimento simple de discriminación táctil: tocá objetos con los ojos cerrados e intentá identificarlos. Anotá resultados.",
      "Investigá qué es el daltonismo: cuál es su causa, cómo se detecta y cuántas personas lo tienen.",
    ],
    preguntas: [
      "¿Cuáles son los cinco sentidos y sus órganos?",
      "¿Cómo llega la información de los sentidos hasta el cerebro?",
      "¿Por qué cuando te tapás la nariz los alimentos tienen menos sabor?",
      "¿Qué es el daltonismo y por qué ocurre?",
      "¿Qué parte del ojo detecta la luz? ¿Cómo se llaman las células que lo hacen?",
      "¿Por qué los animales tienen sentidos más agudos que los humanos en algunos casos?",
      "¿Qué sentido usamos más conscientemente durante el día? ¿Y cuál de forma más automática?",
    ],
  },
  // ÓRGANOS DE LOS SENTIDOS — SECUNDARIA
  {
    id: "sentidos-s",
    titulo: "Transducción Sensorial y Vías Neurales",
    nivel: "Secundaria",
    modulo: "Órganos de los Sentidos",
    emoji: "👁️",
    color: "#22d3ee",
    objetivo: "Analizar los mecanismos de transducción sensorial en el ojo y el oído, y las vías neurales correspondientes.",
    consigna: "Investigá el módulo de Órganos de los Sentidos en BioAula3D y respondé con rigor neurosensorial.",
    actividades: [
      "Explicá el proceso de fototransducción en los fotorreceptores (bastones y conos). ¿Qué rol cumple la rodopsina y qué ocurre cuando absorbe fotones?",
      "Describí cómo la cóclea convierte las ondas sonoras en señales nerviosas. ¿Qué son las células ciliadas y cómo abren los canales de potasio?",
      "Trazá la vía visual desde la retina hasta la corteza visual primaria (V1). ¿Qué es el quiasma óptico y qué información cruza?",
    ],
    preguntas: [
      "¿Cuál es la diferencia funcional entre bastones y conos en la retina?",
      "¿Qué es la transducción sensorial? Describí los pasos generales del proceso.",
      "¿Cómo actúa la rodopsina cuando absorbe luz? ¿Qué cascada de señalización activa?",
      "¿Qué es la tonotopía en la cóclea y cómo permite discriminar frecuencias sonoras?",
      "¿Cuál es el papel del nervio óptico y qué información lleva desde cada ojo?",
      "¿Qué ocurre en la corteza somatosensorial? ¿Qué es el homúnculo de Penfield?",
      "¿Cómo se produce el dolor crónico a nivel de sensibilización central?",
      "¿Qué diferencia hay entre los sistemas magnocelular y parvocelular de la vía visual?",
    ],
  },
  // REPRODUCCIÓN FEMENINA — PRIMARIA
  {
    id: "reproductor-p",
    titulo: "El Sistema Reproductor Femenino",
    nivel: "Primaria",
    modulo: "Reproducción Femenina",
    emoji: "🌸",
    color: "#f472b6",
    objetivo: "Conocer los órganos del sistema reproductor femenino y comprender el ciclo menstrual básico.",
    consigna: "Explorá el módulo de Reproducción Femenina en BioAula3D y resolvé las actividades.",
    actividades: [
      "Dibujá el sistema reproductor femenino e identificá: ovarios, trompas de Falopio, útero, cérvix y vagina.",
      "Describí en tus palabras qué es la menstruación y por qué ocurre cada mes aproximadamente.",
      "Investigá qué ocurre durante el embarazo: ¿cómo se forma el bebé desde el óvulo fecundado hasta el nacimiento?",
    ],
    preguntas: [
      "¿Cuáles son los órganos del sistema reproductor femenino y qué función tiene cada uno?",
      "¿Qué es la ovulación y cuándo ocurre en el ciclo menstrual?",
      "¿Qué es el útero y cuál es su función durante el embarazo?",
      "¿Cómo se llama el proceso por el cual el óvulo y el espermatozoide se unen?",
      "¿Cuánto dura normalmente un embarazo humano?",
      "¿Qué son las hormonas y qué papel juegan en el ciclo menstrual?",
      "¿Qué es la placenta y para qué sirve durante el embarazo?",
    ],
  },
  // REPRODUCCIÓN FEMENINA — SECUNDARIA
  {
    id: "reproductor-s",
    titulo: "Ciclo Menstrual, Ovogénesis e Implantación",
    nivel: "Secundaria",
    modulo: "Reproducción Femenina",
    emoji: "🌸",
    color: "#f472b6",
    objetivo: "Analizar el control hormonal del ciclo menstrual, la ovogénesis y los eventos del embarazo temprano.",
    consigna: "Investigá el módulo de Reproducción Femenina en BioAula3D y respondé con rigor reproductivo.",
    actividades: [
      "Dibujá el ciclo menstrual de 28 días indicando los niveles de FSH, LH, estrógenos y progesterona en cada fase (folicular, ovulatoria, lútea y menstrual).",
      "Describí el proceso de ovogénesis desde las ovogonias hasta el oocito maduro. ¿En qué etapa se detiene y qué lo reactiva?",
      "Explicá los eventos de la implantación: ¿cómo llega el blastocisto al endometrio y qué señales hormonales evitan la menstruación?",
    ],
    preguntas: [
      "¿Qué hormona desencadena la ovulación y cómo se produce el pico de LH?",
      "¿Cuál es el rol del cuerpo lúteo? ¿Qué ocurre si no hay fecundación?",
      "¿En qué se diferencian la ovogénesis y la espermatogénesis en cuanto a células producidas y tiempo?",
      "¿Qué es la gonadotrofina coriónica humana (hCG) y por qué es la base de los test de embarazo?",
      "¿Cómo funciona la retroalimentación positiva de los estrógenos antes de la ovulación?",
      "¿Qué cambios endometriales ocurren durante la fase lútea del ciclo menstrual?",
      "¿Cuál es la función de la placenta como órgano endócrino durante el embarazo?",
      "¿Qué es el síndrome de ovario poliquístico (SOP) y cómo afecta al ciclo hormonal?",
    ],
  },
  // REPRODUCCIÓN MASCULINA — PRIMARIA
  {
    id: "reproductor-masculino-p",
    titulo: "El Sistema Reproductor Masculino",
    nivel: "Primaria",
    modulo: "Reproducción Masculina",
    emoji: "⚗️",
    color: "#60a5fa",
    objetivo: "Conocer los órganos del sistema reproductor masculino y comprender la formación de espermatozoides.",
    consigna: "Explorá el módulo de Reproducción Masculina en BioAula3D y resolvé las actividades.",
    actividades: [
      "Dibujá el sistema reproductor masculino e identificá: testículos, epidídimo, conducto deferente, próstata y pene.",
      "Dibujá un espermatozoide e identificá sus partes: cabeza (con núcleo y acrosoma), pieza intermedia y cola (flagelo).",
      "Investigá qué es la testosterona: qué la produce, qué hace y por qué es importante durante la pubertad.",
    ],
    preguntas: [
      "¿Cuáles son los órganos del sistema reproductor masculino y qué función tiene cada uno?",
      "¿Dónde se producen los espermatozoides?",
      "¿Qué es la testosterona y qué cambios produce en el cuerpo durante la pubertad?",
      "¿Cuánto tiempo tarda en formarse un espermatozoide?",
      "¿Por qué los testículos están fuera del cuerpo (en el escroto)?",
      "¿Qué función cumplen las vesículas seminales y la próstata?",
      "¿Cuántos espermatozoides puede producir el cuerpo masculino por día aproximadamente?",
    ],
  },
  // REPRODUCCIÓN MASCULINA — SECUNDARIA
  {
    id: "reproductor-masculino-s",
    titulo: "Espermatogénesis y Eje Hipotálamo-Hipófisis-Gónadas",
    nivel: "Secundaria",
    modulo: "Reproducción Masculina",
    emoji: "⚗️",
    color: "#60a5fa",
    objetivo: "Analizar la espermatogénesis, el rol de las células de Leydig y Sertoli, y la regulación del eje HPG.",
    consigna: "Investigá el módulo de Reproducción Masculina en BioAula3D y respondé con rigor reproductivo.",
    actividades: [
      "Describí las etapas de la espermatogénesis: proliferación (espermatogonias), meiosis (espermatocitos) y diferenciación (espermátidas/espermatozoides). ¿Cuánto dura el proceso?",
      "Explicá el rol de las células de Sertoli (barrera hematotesticular, nutrir espermátidas) y las células de Leydig (producción de testosterona).",
      "Dibujá el eje HPG masculino con retroalimentación negativa: GnRH (hipotálamo) -> FSH/LH (hipófisis) -> testosterona e inhibina (testículo).",
    ],
    preguntas: [
      "¿Cuáles son las fases de la espermatogénesis y qué célula produce cada fase?",
      "¿Cuál es la función de la FSH en el testículo? ¿Y la de la LH?",
      "¿Qué es la inhibina y cómo regula por retroalimentación la secreción de FSH?",
      "¿Cuál es la diferencia entre espermatogénesis y ovogénesis en cuanto a número de gametos y continuidad?",
      "¿Qué es la barrera hematotesticular y por qué es importante para el proceso de espermatogénesis?",
      "¿Cómo actúa la testosterona en los tejidos diana? ¿Qué enzima la convierte en dihidrotestosterona (DHT)?",
      "¿Qué ocurre en el hipogonadismo hipogonadotrófico vs. hipergonadotrófico?",
      "¿Qué efectos tiene el uso de esteroides anabolizantes en el eje HPG y en la fertilidad masculina?",
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
  "Evolución": "#f59e0b",
  "Clasificación": "#2dd4bf",
  "Tejidos": "#a78bfa",
  "Herencia Genética": "#f59e0b",
  "Mitosis y Meiosis": "#818cf8",
  "Microbiología": "#4ade80",
  "Ecosistemas": "#22c55e",
  "Sistema Óseo": "#94a3b8",
  "Sistema Muscular": "#f87171",
  "Sistema Excretor": "#facc15",
  "Sistema Endócrino": "#fb923c",
  "Inmunología": "#ef4444",
  "Órganos de los Sentidos": "#22d3ee",
  "Reproducción Femenina": "#f472b6",
  "Reproducción Masculina": "#60a5fa",
};

const MODULES = Array.from(new Set(tareas.map(t => t.modulo)));

const safeText = (s: string) => s.replace(/→/g, ">").replace(/←/g, "<").replace(/↔/g, "<>").replace(/[^\x00-\xFF]/g, "");

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
  const objLines = pdf.splitTextToSize(safeText(tarea.objetivo), contentW - 20);
  pdf.text(objLines, marginX + 20, y);
  y += objLines.length * 4.5 + 4;

  // Consigna
  pdf.setFont("helvetica", "italic");
  pdf.setTextColor(60, 60, 100);
  const consLines = pdf.splitTextToSize(safeText(tarea.consigna), contentW);
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
    const actLines = pdf.splitTextToSize(`${i + 1}. ${safeText(act)}`, contentW - 6);
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
    const qLines = pdf.splitTextToSize(`${i + 1}. ${safeText(q)}`, contentW - 6);
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
  const pageCount = pdf.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    pdf.setPage(i);
    pdf.setFontSize(7);
    pdf.setFont("helvetica", "normal");
    pdf.setTextColor(160, 160, 160);
    pdf.text("BioAula3D · bio-aula3-d.vercel.app", marginX, 293);
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

  const [notasOpen, setNotasOpen] = useState(false);
  const [notasDate, setNotasDate] = useState(() => new Date().toLocaleDateString("es-AR", { day: "2-digit", month: "2-digit", year: "numeric" }));
  const [notasText, setNotasText] = useState("");

  const handleExportNotas = async () => {
    const { default: jsPDF } = await import("jspdf");
    const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
    const W = 210; const mx = 15; const cW = W - mx * 2; let y = 15;
    pdf.setFillColor(15, 23, 42); pdf.rect(0, 0, W, 22, "F");
    pdf.setFontSize(13); pdf.setFont("helvetica", "bold"); pdf.setTextColor(255, 255, 255);
    pdf.text("Notas · Banco de Tareas", mx, 11);
    pdf.setFontSize(8); pdf.setFont("helvetica", "normal"); pdf.setTextColor(180, 180, 180);
    pdf.text(`BioAula3D · ${notasDate}`, mx, 18);
    y = 30;
    pdf.setFontSize(10); pdf.setFont("helvetica", "normal"); pdf.setTextColor(20, 20, 20);
    const lines = pdf.splitTextToSize(notasText || "(Sin contenido)", cW);
    pdf.text(lines, mx, y);
    pdf.save(`BioAula3D-Notas-Tareas-${notasDate.replace(/\//g, "-")}.pdf`);
  };

  const handleShareNotas = async () => {
    const text = `Notas Banco de Tareas - ${notasDate}\n\n${notasText}`;
    if (navigator.share) await navigator.share({ title: "Notas · Banco de Tareas", text });
    else await navigator.clipboard.writeText(text);
  };

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
          <button onClick={() => setNotasOpen(true)} className="mt-4 flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-sm font-semibold transition-all">
            📝 Notas docente
          </button>
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
      {notasOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-end justify-center p-0" onClick={() => setNotasOpen(false)}>
          <div className="notas-sheet bg-slate-900 border-t border-slate-700 rounded-t-2xl w-full max-w-lg p-5 pb-8 space-y-3" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <div><span className="text-base font-bold text-white">📝 Notas</span><span className="text-slate-500 text-xs ml-2">Banco de Tareas</span></div>
              <button onClick={() => setNotasOpen(false)} className="text-slate-500 hover:text-white text-lg leading-none transition-colors">✕</button>
            </div>
            <input type="text" value={notasDate} onChange={e => setNotasDate(e.target.value)} placeholder="Fecha (ej. 04/06/2026)" className="w-full bg-slate-800 text-white rounded-lg px-3 py-2 text-sm border border-slate-700 focus:outline-none focus:border-slate-500 transition-colors" />
            <textarea value={notasText} onChange={e => setNotasText(e.target.value)} placeholder="Anotá lo que necesités sobre las tareas..." rows={8} className="w-full bg-slate-800 text-white rounded-lg px-3 py-2 text-sm border border-slate-700 focus:outline-none focus:border-slate-500 resize-none transition-colors leading-relaxed" />
            <div className="flex gap-2 pt-1">
              <button onClick={handleShareNotas} className="flex-1 py-2.5 bg-slate-700 hover:bg-slate-600 text-white rounded-xl text-sm font-semibold transition-all">📤 Compartir</button>
              <button onClick={handleExportNotas} className="flex-1 py-2.5 bg-amber-500 hover:bg-amber-400 text-black rounded-xl text-sm font-semibold transition-all">📄 Guardar PDF</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
