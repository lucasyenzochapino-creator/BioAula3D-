"use client";
import { useState, useMemo, useEffect } from "react";
import Link from "next/link";

interface Term {
  name: string;
  module: string;
  emoji: string;
  color: string;
  simple: string;
  full: string;
}

const terms: Term[] = [
  // Célula Animal
  { name: "Núcleo", module: "Célula Animal", emoji: "🔵", color: "#3b82f6", simple: "El 'cerebro' de la célula — guarda la información genética.", full: "Organela delimitada por la envoltura nuclear con poros. Contiene el ADN organizado en cromosomas y el nucléolo. Dirige la transcripción del ARNm y toda la síntesis proteica." },
  { name: "Mitocondria", module: "Célula Animal", emoji: "🟠", color: "#f97316", simple: "Produce la energía (ATP) que necesita la célula para vivir.", full: "Organela de doble membrana con crestas internas. Realiza la fosforilación oxidativa (cadena respiratoria). Posee su propio ADN circular (origen endosimbiótico)." },
  { name: "Retículo Endoplasmático", module: "Célula Animal", emoji: "🟣", color: "#a855f7", simple: "Red de 'caminos' que transporta proteínas por la célula.", full: "El RER (rugoso) con ribosomas adosados sintetiza proteínas de secreción. El REL (liso) sintetiza lípidos y detoxifica sustancias." },
  { name: "Aparato de Golgi", module: "Célula Animal", emoji: "🟡", color: "#eab308", simple: "Empaqueta y envía proteínas a donde se necesitan, como un correo postal.", full: "Cisternas membranosas apiladas (cis, medial, trans). Modifica proteínas con azúcares (glicosilación) y las distribuye en vesículas hacia la membrana o lisosomas." },
  { name: "Lisosoma", module: "Célula Animal", emoji: "🩷", color: "#ec4899", simple: "Digiere y recicla los desechos y partes viejas de la célula.", full: "Vesícula con enzimas hidrolíticas activas a pH ácido (~4,5). Realiza autofagia (recicla orgánulos dañados) y heterofagia (degrada material externo)." },
  { name: "Ribosoma", module: "Célula Animal", emoji: "🟢", color: "#22c55e", simple: "Fabrica las proteínas que la célula necesita para funcionar.", full: "Complejo ARN-proteínas (subunidades 60S + 40S). Lee el ARNm y sintetiza cadenas polipeptídicas mediante traducción." },
  { name: "Membrana Plasmática", module: "Célula Animal", emoji: "🫧", color: "#14b8a6", simple: "La 'piel' de la célula: controla qué entra y qué sale.", full: "Bicapa fosfolipídica con proteínas integrales y periféricas (modelo mosaico fluido). Regula el transporte mediante canales, bombas y vesículas." },
  { name: "Centrosoma", module: "Célula Animal", emoji: "⭐", color: "#f43f5e", simple: "Organiza la división celular y ayuda a mover los cromosomas.", full: "Par de centríolos rodeados de material pericentriolar. Nuclea los microtúbulos del huso mitótico durante la división celular." },
  { name: "Vacuola", module: "Célula Animal", emoji: "🔷", color: "#06b6d4", simple: "Bolsa que almacena agua, nutrientes o desechos temporalmente.", full: "Vesícula membranosa pequeña y temporal en células animales. Participa en endocitosis y exocitosis. Regula la osmosis y elimina sustancias de desecho." },
  { name: "Citoesqueleto", module: "Célula Animal", emoji: "🕸️", color: "#94a3b8", simple: "Los 'huesos' de la célula: le da forma y permite el movimiento.", full: "Red de microtúbulos (tubulina), filamentos de actina y filamentos intermedios. Mantiene la forma celular, posiciona orgánulos y permite la migración." },
  // ADN & Genética
  { name: "Doble Hélice", module: "ADN & Genética", emoji: "🧬", color: "#60a5fa", simple: "La forma retorcida del ADN, como una escalera en espiral.", full: "Descrita por Watson y Crick (1953). Dos hebras antiparalelas de polinucleótidos enrolladas sobre un eje. Un giro completo cada ~3,4 nm (10 pares de bases)." },
  { name: "Nucleótido", module: "ADN & Genética", emoji: "🔩", color: "#8b5cf6", simple: "La 'pieza' básica del ADN: base + azúcar + fosfato unidos.", full: "Monómero del ADN formado por desoxirribosa, un grupo fosfato y una base nitrogenada (A, T, G o C). Se unen por enlaces fosfodiéster 3'-5' formando la columna del ADN." },
  { name: "Adenina (A)", module: "ADN & Genética", emoji: "🔴", color: "#ef4444", simple: "Una de las 4 'letras' del ADN. Siempre se une con la Timina.", full: "Base púrica (doble anillo). Se empareja con Timina mediante 2 puentes de hidrógeno (A=T). También componente del ATP, la moneda energética celular." },
  { name: "Timina (T)", module: "ADN & Genética", emoji: "🔵", color: "#3b82f6", simple: "Letra del ADN que siempre se une con la Adenina.", full: "Base pirimidínica exclusiva del ADN (el ARN usa Uracilo). Se empareja con Adenina mediante 2 puentes de hidrógeno. Derivada de la uridina por metilación." },
  { name: "Guanina (G)", module: "ADN & Genética", emoji: "🟢", color: "#22c55e", simple: "Letra del ADN que siempre se une con la Citosina. Lazo muy fuerte.", full: "Base púrica (bicíclica). Se empareja con Citosina a través de 3 puentes de hidrógeno (G≡C). Mayor proporción G-C eleva la temperatura de fusión del ADN." },
  { name: "Citosina (C)", module: "ADN & Genética", emoji: "🟡", color: "#f59e0b", simple: "Siempre va con la Guanina. Juntas forman un lazo muy resistente.", full: "Base pirimidínica monocíclica. Se empareja con Guanina mediante 3 puentes de hidrógeno. Su metilación (5-metilcitosina) es una modificación epigenética clave." },
  { name: "Puentes de Hidrógeno", module: "ADN & Genética", emoji: "🔗", color: "#e879f9", simple: "Las 'conexiones' que mantienen unidas las dos hebras del ADN.", full: "Interacciones no covalentes entre pares de bases complementarias. Débiles individualmente pero numerosas, permiten abrir las hebras en replicación y transcripción." },
  { name: "Gen", module: "ADN & Genética", emoji: "📌", color: "#f472b6", simple: "Segmento de ADN que lleva la información para fabricar una proteína.", full: "Unidad funcional de herencia. En humanos hay ~20.000–25.000 genes que representan ~2% del genoma total. El resto son regiones reguladoras, intrones y secuencias repetitivas." },
  { name: "Cromosoma", module: "ADN & Genética", emoji: "🧵", color: "#a855f7", simple: "ADN muy compactado, visible durante la división celular.", full: "Estructura de ADN superenrollado con histonas y otras proteínas. Los humanos tienen 46 cromosomas (23 pares) en células somáticas y 23 en gametos." },
  { name: "Replicación del ADN", module: "ADN & Genética", emoji: "♻️", color: "#2dd4bf", simple: "El proceso por el que el ADN se copia a sí mismo antes de la división.", full: "Semiconservativa: cada hebra sirve de molde para sintetizar una complementaria. La ADN polimerasa añade nucleótidos en dirección 5'→3'. Ocurre en la fase S del ciclo celular." },
  // Sistema Nervioso
  { name: "Soma (Cuerpo Celular)", module: "Sistema Nervioso", emoji: "🟣", color: "#a855f7", simple: "El centro de la neurona: donde vive el núcleo y se produce energía.", full: "Contiene el núcleo, cuerpos de Nissl (RER), mitocondrias y Golgi. Centro metabólico que sostiene toda la actividad neuronal." },
  { name: "Dendrita", module: "Sistema Nervioso", emoji: "🌿", color: "#f59e0b", simple: "Las 'antenas' que reciben señales de otras neuronas.", full: "Prolongaciones cortas ramificadas con espinas dendríticas. Reciben potenciales postsinápticos excitadores (EPSP) e inhibidores (IPSP) y los integran en el soma." },
  { name: "Axón", module: "Sistema Nervioso", emoji: "🟢", color: "#22c55e", simple: "El 'cable' largo que lleva el mensaje eléctrico desde la neurona.", full: "Prolongación única que conduce el potencial de acción desde el cono axónico hasta la terminal. Puede medir desde micrómetros hasta más de un metro de longitud." },
  { name: "Vaina de Mielina", module: "Sistema Nervioso", emoji: "⚪", color: "#e2e8f0", simple: "Cubre el axón como un abrigo, haciendo que los mensajes viajen más rápido.", full: "Envuelta lipoproteica formada por células de Schwann (SNP) u oligodendrocitos (SNC). Permite la conducción saltatoria de hasta 120 m/s." },
  { name: "Nódulos de Ranvier", module: "Sistema Nervioso", emoji: "⭕", color: "#fb923c", simple: "Pequeños 'saltos' sin mielina por donde el impulso viaja más rápido.", full: "Interrupciones periódicas (~1 µm) de la vaina de mielina. El potencial de acción 'salta' de nódulo en nódulo (conducción saltatoria), aumentando la velocidad y ahorrando energía." },
  { name: "Sinapsis", module: "Sistema Nervioso", emoji: "⚡", color: "#facc15", simple: "El espacio entre dos neuronas donde se pasan los mensajes químicos.", full: "Unión funcional entre neuronas. La sinapsis química implica exocitosis de neurotransmisores en la hendidura (~20–40 nm) y unión a receptores postsinápticos." },
  { name: "Potencial de Acción", module: "Sistema Nervioso", emoji: "📡", color: "#fb923c", simple: "El impulso eléctrico que viaja a lo largo del axón llevando el mensaje.", full: "Cambio repentino de voltaje (~-70 mV a +40 mV) por entrada masiva de Na⁺. Todo-o-nada: si supera el umbral (-55 mV), se dispara completamente." },
  { name: "Neurotransmisor", module: "Sistema Nervioso", emoji: "💊", color: "#c084fc", simple: "Molécula química que lleva el mensaje entre dos neuronas.", full: "Sustancias liberadas por exocitosis en la terminal presináptica. Ejemplos: glutamato (excitador), GABA (inhibidor), dopamina, serotonina, acetilcolina. Se unen a receptores postsinápticos." },
  { name: "Neuroglía", module: "Sistema Nervioso", emoji: "🫧", color: "#67e8f9", simple: "Células de soporte que alimentan, protegen y aíslan las neuronas.", full: "Incluye astrocitos (soporte metabólico), oligodendrocitos (mielina en SNC), células de Schwann (mielina en SNP) y microglía (inmunidad del SNC)." },
  // Célula Vegetal
  { name: "Pared Celular", module: "Célula Vegetal", emoji: "🟫", color: "#15803d", simple: "Capa dura que rodea la célula vegetal y le da su forma cuadrada.", full: "Compuesta de celulosa, hemicelulosa y pectinas. Proporciona soporte mecánico y evita la lisis osmótica. Puede lignificarse en células de soporte (xilema)." },
  { name: "Cloroplasto", module: "Célula Vegetal", emoji: "🌱", color: "#16a34a", simple: "Hace la fotosíntesis: convierte la luz del sol en azúcar.", full: "Plastidio con doble membrana, tilacoides apilados en grana y estroma. Fase luminosa en tilacoides; ciclo de Calvin en estroma. Posee ADN propio (origen endosimbiótico)." },
  { name: "Vacuola Central", module: "Célula Vegetal", emoji: "🔷", color: "#06b6d4", simple: "Gran bolsa de agua que mantiene la planta erguida y almacena nutrientes.", full: "Puede ocupar hasta el 90% del volumen celular. Delimitada por el tonoplasto. Mantiene turgencia y almacena pigmentos, azúcares, iones y productos de desecho." },
  { name: "Plasmodesmos", module: "Célula Vegetal", emoji: "🔗", color: "#fbbf24", simple: "Canales que conectan células vecinas para compartir nutrientes.", full: "Canales citoplasmáticos que atraviesan la pared celular. Permiten el transporte simplástico de agua, fotoasimilados, hormonas y señales de defensa." },
  { name: "Clorofila", module: "Célula Vegetal", emoji: "☘️", color: "#4ade80", simple: "El pigmento verde que captura la luz solar para la fotosíntesis.", full: "Pigmento con anillo porfirínico y magnesio central. Absorbe principalmente luz roja (670 nm) y azul (430 nm). La clorofila a es la principal; la b actúa como accesoria." },
  { name: "Fotosíntesis", module: "Célula Vegetal", emoji: "☀️", color: "#22c55e", simple: "Proceso por el que las plantas convierten luz + CO₂ + agua en azúcar y O₂.", full: "Fase luminosa (fotosistemas I y II, cadena de e⁻) genera ATP y NADPH. Ciclo de Calvin usa esa energía para fijar CO₂ en glucosa (C3, C4 o CAM según la planta)." },
  { name: "Estoma", module: "Célula Vegetal", emoji: "💧", color: "#86efac", simple: "Pequeño poro de la hoja que deja entrar CO₂ y salir el vapor de agua.", full: "Abertura epidérmica flanqueada por dos células guarda. Se abre en el día (por turgencia dependiente de K⁺) para intercambio gaseoso y se cierra de noche o en sequía." },
  // Cuerpo Humano
  { name: "Corazón", module: "Cuerpo Humano", emoji: "🫀", color: "#ef4444", simple: "El motor del cuerpo: bombea sangre con oxígeno a todos los órganos.", full: "Músculo cardíaco con 4 cámaras: 2 aurículas y 2 ventrículos. El nódulo sinoauricular genera el ritmo sinusal (~70 lat/min). Bombea ~5 L de sangre por minuto en reposo." },
  { name: "Pulmones", module: "Cuerpo Humano", emoji: "🫁", color: "#3b82f6", simple: "Toman el oxígeno del aire y expulsan el dióxido de carbono.", full: "~300 millones de alvéolos para intercambio gaseoso por difusión. La hemoglobina transporta O₂ (oxihemoglobina) y CO₂ se elimina como bicarbonato plasmático." },
  { name: "Cerebro", module: "Cuerpo Humano", emoji: "🧠", color: "#a855f7", simple: "El órgano más complejo: controla todo lo que hacés, pensás y sentís.", full: "~86 mil millones de neuronas. Corteza cerebral (pensamiento y voluntad), cerebelo (coordinación motora), tronco encefálico (funciones vitales). Consume ~20% de la energía corporal." },
  { name: "Hígado", module: "Cuerpo Humano", emoji: "🟤", color: "#92400e", simple: "El laboratorio del cuerpo: filtra la sangre y fabrica muchas sustancias.", full: "Más de 500 funciones: metabolismo de macromoléculas, síntesis de proteínas plasmáticas, detoxificación, producción de bilis y almacén de glucógeno." },
  { name: "Nefrona", module: "Cuerpo Humano", emoji: "🩷", color: "#ec4899", simple: "Unidad de filtración del riñón — limpia la sangre.", full: "Cada riñón tiene ~1 millón de nefronas. Filtran ~180 L de plasma/día y reabsorben el 99%, produciendo ~1,5 L de orina. Regulan presión arterial y pH sanguíneo." },
  { name: "Médula Ósea", module: "Cuerpo Humano", emoji: "🦴", color: "#cbd5e1", simple: "Fabrica todas las células de la sangre: glóbulos rojos, blancos y plaquetas.", full: "Médula roja en huesos planos: hematopoyesis (eritrocitos, leucocitos, plaquetas). Médula amarilla (adiposa) en diáfisis de huesos largos de adultos." },
  // Corazón Humano
  { name: "Ventrículo", module: "Corazón Humano", emoji: "❤️", color: "#dc2626", simple: "Cámara inferior del corazón que bombea la sangre hacia el cuerpo o los pulmones.", full: "El ventrículo izquierdo bombea sangre oxigenada a la circulación sistémica con alta presión. El ventrículo derecho la envía a los pulmones con baja presión." },
  { name: "Aurícula", module: "Corazón Humano", emoji: "🩸", color: "#f87171", simple: "Cámara superior del corazón que recibe la sangre que llega.", full: "La aurícula derecha recibe sangre venosa de las venas cavas. La aurícula izquierda recibe sangre oxigenada de las venas pulmonares. Tienen paredes más delgadas que los ventrículos." },
  { name: "Válvula Cardíaca", module: "Corazón Humano", emoji: "🚪", color: "#fca5a5", simple: "Compuerta que evita que la sangre retroceda dentro del corazón.", full: "Válvulas auriculoventriculares (mitral y tricúspide) y semilunares (aórtica y pulmonar). Se abren y cierran por diferencias de presión. Su disfunción produce soplos cardíacos." },
  { name: "Nódulo Sinoauricular", module: "Corazón Humano", emoji: "⚡", color: "#ef4444", simple: "El marcapasos natural del corazón: genera el ritmo de los latidos.", full: "Grupo de células en la pared de la aurícula derecha. Genera impulsos eléctricos espontáneos (~70/min). La señal se propaga al nódulo auriculoventricular y al haz de His." },
  { name: "Arteria", module: "Corazón Humano", emoji: "🔴", color: "#b91c1c", simple: "Vaso sanguíneo que lleva sangre desde el corazón hacia el cuerpo.", full: "Paredes gruesas y elásticas para soportar alta presión. La aorta es la arteria más grande (~3 cm de diámetro). Las arterias se ramifican en arteriolas y capilares." },
  { name: "Vena", module: "Corazón Humano", emoji: "🔵", color: "#1d4ed8", simple: "Vaso sanguíneo que devuelve la sangre al corazón.", full: "Paredes más delgadas que las arterias. Poseen válvulas semilunares que impiden el reflujo. Las venas cavas superior e inferior desembocan en la aurícula derecha." },
  { name: "Capilar", module: "Corazón Humano", emoji: "🩺", color: "#fca5a5", simple: "El vaso sanguíneo más pequeño: donde ocurre el intercambio de nutrientes.", full: "Pared de una sola capa de células endoteliales. Permite el intercambio de O₂, CO₂, glucosa y desechos entre sangre y tejidos por difusión. Superficie total ~6000 m²." },
  { name: "Ciclo Cardíaco", module: "Corazón Humano", emoji: "🔄", color: "#f87171", simple: "La secuencia completa de un latido: contracción + relajación del corazón.", full: "Sístole: contracción ventricular (~0,3 s). Diástole: relajación y llenado (~0,5 s). En reposo el ciclo dura ~0,8 s. El gasto cardíaco = volumen sistólico × frecuencia cardíaca." },
  // Cerebro Humano
  { name: "Corteza Cerebral", module: "Cerebro Humano", emoji: "🧠", color: "#9333ea", simple: "La capa externa del cerebro donde se producen el pensamiento y la consciencia.", full: "Capa de ~2–4 mm de sustancia gris con ~16 mil millones de neuronas. Organizada en 6 capas y 4 lóbulos (frontal, parietal, temporal, occipital)." },
  { name: "Lóbulo Frontal", module: "Cerebro Humano", emoji: "🎯", color: "#7c3aed", simple: "La parte delantera del cerebro: controla el movimiento y la toma de decisiones.", full: "Contiene la corteza motora primaria y la corteza prefrontal. Gestiona funciones ejecutivas (planificación, inhibición de impulsos), personalidad y el área de Broca (lenguaje)." },
  { name: "Hipocampo", module: "Cerebro Humano", emoji: "🐴", color: "#a855f7", simple: "La 'agenda' del cerebro: guarda los recuerdos a largo plazo.", full: "Estructura del sistema límbico con forma de caballito de mar. Fundamental para la consolidación de la memoria declarativa y la navegación espacial. Muy afectado en el Alzheimer." },
  { name: "Amígdala Cerebral", module: "Cerebro Humano", emoji: "😨", color: "#c026d3", simple: "El 'centro del miedo': procesa las emociones fuertes.", full: "Complejo de núcleos en el lóbulo temporal medial. Detecta amenazas y activa respuestas de lucha-huida. Regula la respuesta emocional y el condicionamiento del miedo." },
  { name: "Cerebelo", module: "Cerebro Humano", emoji: "🎮", color: "#8b5cf6", simple: "Coordina los movimientos y el equilibrio del cuerpo.", full: "Ubicado en la fosa posterior. Contiene ~70% de las neuronas del cerebro. Ajusta y coordina movimientos voluntarios, mantiene el equilibrio y optimiza el aprendizaje motor." },
  { name: "Hipotálamo", module: "Cerebro Humano", emoji: "🌡️", color: "#c084fc", simple: "Regula la temperatura, el hambre, la sed y el sueño del cuerpo.", full: "Región del diencéfalo que controla el sistema nervioso autónomo y la hipófisis. Regula temperatura corporal, ciclo sueño-vigilia, apetito, sed y respuesta al estrés." },
  { name: "Tronco Encefálico", module: "Cerebro Humano", emoji: "🏚️", color: "#6d28d9", simple: "Conecta el cerebro con la médula espinal y controla funciones vitales automáticas.", full: "Compuesto por mesencéfalo, protuberancia y bulbo raquídeo. Controla respiración, frecuencia cardíaca, deglución, reflejos y ciclo sueño-vigilia." },
  // Sistema Respiratorio
  { name: "Tráquea", module: "Sistema Respiratorio", emoji: "🌬️", color: "#38bdf8", simple: "El tubo principal por el que entra el aire a los pulmones.", full: "Tubo cartilaginoso de ~12 cm de longitud. El epitelio ciliado mucociliar atrapa partículas. Se bifurca en los bronquios principales derecho e izquierdo (carina)." },
  { name: "Bronquio", module: "Sistema Respiratorio", emoji: "🌿", color: "#0ea5e9", simple: "Ramificaciones de la tráquea que llevan el aire a cada pulmón.", full: "Bronquios primarios → secundarios (lobulares) → terciarios (segmentarios) → bronquíolos. A medida que se ramifican, disminuye el cartílago y aumenta el músculo liso." },
  { name: "Alvéolo", module: "Sistema Respiratorio", emoji: "🫧", color: "#7dd3fc", simple: "Pequeñas bolsitas de aire donde se intercambia O₂ y CO₂ con la sangre.", full: "~300 millones de alvéolos con superficie total ~70 m². La membrana alvéolo-capilar de ~0,5 µm permite difusión eficiente de gases. Los neumocitos tipo II secretan surfactante." },
  { name: "Diafragma", module: "Sistema Respiratorio", emoji: "💪", color: "#0284c7", simple: "El músculo que hace que los pulmones se expandan y contraigan al respirar.", full: "Músculo esquelético en forma de cúpula que separa tórax y abdomen. En inspiración se contrae y aplana, aumentando el volumen torácico. Inervado por el nervio frénico (C3-C5)." },
  { name: "Pleura", module: "Sistema Respiratorio", emoji: "🛡️", color: "#38bdf8", simple: "Membrana doble que recubre los pulmones y facilita su movimiento.", full: "Doble membrana serosa: pleura visceral (adherida al pulmón) y parietal (adherida a la pared torácica). El espacio pleural con líquido reduce la fricción durante la respiración." },
  { name: "Surfactante Pulmonar", module: "Sistema Respiratorio", emoji: "💧", color: "#bae6fd", simple: "Líquido en los alvéolos que evita que se colapsen al exhalar.", full: "Mezcla de fosfolípidos (principalmente DPPC) y proteínas secretada por neumocitos tipo II. Reduce la tensión superficial alveolar, previene el colapso y facilita la inspiración." },
  { name: "Intercambio Gaseoso", module: "Sistema Respiratorio", emoji: "↔️", color: "#0369a1", simple: "El paso de O₂ de los alvéolos a la sangre y de CO₂ de la sangre al aire.", full: "Ocurre por difusión pasiva según gradientes de presión parcial. O₂ pasa de alvéolo (104 mmHg) a capilar (40 mmHg). CO₂ pasa en sentido contrario. Distancia de difusión: ~0,5 µm." },
  // Sistema Digestivo
  { name: "Esófago", module: "Sistema Digestivo", emoji: "〰️", color: "#f97316", simple: "Tubo muscular que lleva el alimento de la boca al estómago.", full: "Mide ~25 cm. El peristaltismo propulsa el bolo alimenticio. El esfínter esofágico inferior evita el reflujo gástrico. Sin función digestiva propia, solo de transporte." },
  { name: "Estómago", module: "Sistema Digestivo", emoji: "🫙", color: "#fb923c", simple: "Bolsa muscular que mezcla el alimento con ácido y lo digiere parcialmente.", full: "Secreta HCl (pH 1,5–3,5) y pepsina para digestión proteica. Las células parietales producen ácido; las células principales, pepsinógeno. El quimo resultante pasa al intestino delgado." },
  { name: "Intestino Delgado", module: "Sistema Digestivo", emoji: "🔄", color: "#fdba74", simple: "El principal lugar de digestión y absorción de nutrientes.", full: "~6–7 m de largo dividido en duodeno, yeyuno e íleon. Las vellosidades y microvellosidades amplifican la superficie de absorción (~250 m²). Recibe bilis (hígado) y enzimas (páncreas)." },
  { name: "Vellosidades Intestinales", module: "Sistema Digestivo", emoji: "🌾", color: "#fbbf24", simple: "Pliegues minúsculos del intestino que aumentan la superficie para absorber nutrientes.", full: "Proyecciones de ~1 mm de mucosa con microvellosidades (orla en cepillo). Cada vellosidad tiene capilares sanguíneos (absorben glucosa, aminoácidos) y vasos quilíferos (absorben lípidos)." },
  { name: "Intestino Grueso", module: "Sistema Digestivo", emoji: "💩", color: "#a16207", simple: "Absorbe el agua restante y forma las heces para ser eliminadas.", full: "~1,5 m de largo: ciego, colon (ascendente, transverso, descendente, sigmoide) y recto. Contiene ~100 billones de bacterias (microbioma). Absorbe agua, electrolitos y vitaminas K y B12." },
  { name: "Páncreas", module: "Sistema Digestivo", emoji: "🟩", color: "#65a30d", simple: "Glándula que produce jugos digestivos y regula el azúcar en sangre.", full: "Función exocrina: secreta lipasa, amilasa, proteasas al duodeno para digerir macromoléculas. Función endocrina: los islotes de Langerhans producen insulina y glucagón para regular la glucemia." },
  { name: "Vesícula Biliar", module: "Sistema Digestivo", emoji: "💚", color: "#84cc16", simple: "Almacena la bilis que usa el intestino para digerir las grasas.", full: "Almacena y concentra la bilis producida por el hígado. Se contrae ante el CCK (hormona) liberando bilis al duodeno para emulsionar grasas y facilitar la acción de la lipasa." },
  { name: "Hígado (digestivo)", module: "Sistema Digestivo", emoji: "🟤", color: "#d97706", simple: "Produce la bilis y procesa los nutrientes absorbidos en el intestino.", full: "Produce ~500–1000 mL de bilis/día. Recibe sangre portal rica en nutrientes absorbidos. Metaboliza glucosa, lípidos y aminoácidos. Detoxifica tóxicos y fármacos." },
  // Sistema Óseo
  { name: "Hueso", module: "Sistema Óseo", emoji: "🦴", color: "#e2e8f0", simple: "Tejido duro que forma el esqueleto, protege órganos y permite el movimiento.", full: "Tejido conectivo mineralizado compuesto por colágeno tipo I (~35%) e hidroxiapatita (Ca₁₀(PO₄)₆(OH)₂, ~65%). Las células óseas incluyen osteoblastos (forman hueso), osteoclastos (reabsorben) y osteocitos (mantienen). El hueso compacto y esponjoso tienen distintas microestructuras." },
  { name: "Cartílago", module: "Sistema Óseo", emoji: "🌊", color: "#93c5fd", simple: "Tejido elástico que cubre los extremos de los huesos y amortigua los golpes.", full: "Tejido conectivo avascular con condrocitos en lagunas dentro de la matriz de colágeno y proteoglucanos. Tipos: hialino (articulaciones, costillas), elástico (oreja, epiglotis) y fibrocartílago (meniscos, discos intervertebrales). Se nutre por difusión desde el líquido sinovial o pericondrio." },
  { name: "Articulación Sinovial", module: "Sistema Óseo", emoji: "⚙️", color: "#cbd5e1", simple: "Unión entre dos huesos que permite el movimiento libre.", full: "Las diartrosis tienen 5 elementos: cartílago articular, cápsula fibrosa, membrana sinovial (produce el líquido sinovial lubrificante), ligamentos y meniscos en algunas. Tipos según forma: esféricas (hombro, cadera), bisagra (rodilla, codo), pivote (cúbito-radio), silla de montar (pulgar)." },
  { name: "Osteoblasto y Osteoclasto", module: "Sistema Óseo", emoji: "🔨", color: "#94a3b8", simple: "Los osteoblastos construyen hueso nuevo y los osteoclastos disuelven el viejo.", full: "Osteoblastos: células que secretan la matriz osteoide (colágeno + proteínas). Cuando quedan atrapados se convierten en osteocitos. Osteoclastos: células multinucleadas derivadas de monocitos que reabsorben hueso mediante acidificación (HCl) y enzimas. El remodelado óseo continuo permite adaptar la resistencia a las cargas." },
  { name: "Periostio", module: "Sistema Óseo", emoji: "🔵", color: "#6366f1", simple: "Membrana que recubre el exterior del hueso y permite su crecimiento y reparación.", full: "Membrana fibrosa bilaminar: capa externa fibrosa (fibras de Sharpey anclan al hueso) y capa interna osteogénica (osteoblastos y células precursoras). Muy inervada y vascularizada. Esencial para la reparación de fracturas. El periostio es responsable del crecimiento en anchura del hueso." },
  { name: "Médula Ósea Roja", module: "Sistema Óseo", emoji: "🩸", color: "#ef4444", simple: "Es el tejido esponjoso dentro de los huesos donde se producen todas las células de la sangre.", full: "Tejido hematopoyético en huesos planos (esternón, ilíaco, vértebras, costillas) y epífisis de huesos largos en adultos. Las células madre hematopoyéticas (HSC) producen eritrocitos, leucocitos y plaquetas. La médula amarilla (en diáfisis de adultos) es adiposa pero puede convertirse a roja en estrés hematopoyético." },
  { name: "Columna Vertebral", module: "Sistema Óseo", emoji: "🔗", color: "#64748b", simple: "Es la columna de 33 huesos (vértebras) que sostiene el cuerpo y protege la médula espinal.", full: "33 vértebras: 7 cervicales (C1-C7), 12 torácicas (T1-T12), 5 lumbares (L1-L5), 5 sacras fusionadas y 4 coccígeas. Los discos intervertebrales (núcleo pulposo + anillo fibroso) absorben impactos. Las 4 curvas fisiológicas (lordosis cervical y lumbar, cifosis torácica y sacra) equilibran el centro de gravedad." },
  { name: "Fractura y Reparación Ósea", module: "Sistema Óseo", emoji: "🩹", color: "#fbbf24", simple: "Cuando un hueso se rompe, el cuerpo lo repara formando hueso nuevo en pocas semanas.", full: "Fases: hematoma (coágulo de sangre), callo blando (cartílago temporal, 2-3 semanas), callo duro (hueso inmaduro, 6-8 semanas) y remodelado (hueso laminado definitivo, meses-años). Los osteoblastos del periostio y endostio dirigen la osificación. La inmovilización y la nutrición (Ca²⁺, vitamina D) son clave." },
  // Sistema Muscular
  { name: "Músculo Esquelético", module: "Sistema Muscular", emoji: "💪", color: "#ef4444", simple: "Músculo que controlamos voluntariamente, permite caminar, correr y mover los brazos.", full: "Tejido estriado bajo control voluntario. Cada fibra muscular es una célula multinucleada con miofibrillas de sarcómeros. La contracción sigue el principio del deslizamiento de filamentos: las cabezas de miosina usan ATP para jalarse sobre los filamentos de actina, acortando el sarcómero." },
  { name: "Sarcómero", module: "Sistema Muscular", emoji: "🔬", color: "#fbbf24", simple: "Es la unidad más pequeña del músculo que produce la contracción.", full: "Unidad estructural entre dos líneas Z. Zona A (filamentos gruesos de miosina + extremos de actina), zona I (solo actina), zona H (solo miosina) y línea M (centro). Durante la contracción las bandas I y H se acortan; la A permanece igual. El sarcolema transmite el potencial de acción al retículo sarcoplasmático." },
  { name: "Actina y Miosina", module: "Sistema Muscular", emoji: "🔗", color: "#fb923c", simple: "Son las proteínas dentro del músculo que se enganchan y tiran para producir la contracción.", full: "Actina (filamento delgado, 7 nm): polímero de actina G en doble hélice con tropomiosina y troponina. Miosina II (filamento grueso, 15 nm): 2 cadenas pesadas con dominio globular (cabeza) que une actina + hidroliza ATP. El ciclo de puentes cruzados (unión→giro de fuerza→liberación) es el motor molecular de la contracción." },
  { name: "Unión Neuromuscular", module: "Sistema Muscular", emoji: "⚡", color: "#f59e0b", simple: "Es el punto de contacto entre el nervio y el músculo donde se pasa la orden de contraerse.", full: "Sinapsis química entre motoneurona alfa y fibra muscular. El potencial de acción libera acetilcolina (ACh) de vesículas presinápticas. La ACh se une a receptores nicotínicos de la placa motora, genera un potencial de acción muscular que libera Ca²⁺ del retículo sarcoplasmático. La acetilcolinesterasa degrada la ACh en la hendidura." },
  { name: "Tendón y Ligamento", module: "Sistema Muscular", emoji: "🔴", color: "#b91c1c", simple: "El tendón une el músculo al hueso; el ligamento une un hueso con otro.", full: "Tendón: tejido conectivo denso ordenado de colágeno tipo I paralelo. Une músculo al hueso transmitiendo la fuerza. Poco vascularizado (cicatrización lenta). Ligamento: similar pero une hueso-hueso estabilizando articulaciones. Ambas estructuras contienen mecanorreceptores (órganos de Golgi tendinosos) para la propiocepción." },
  { name: "Tipos de Contracción Muscular", module: "Sistema Muscular", emoji: "📐", color: "#c026d3", simple: "Los músculos se pueden contraer manteniendo la longitud o acortándose según el movimiento.", full: "Contracción isotónica concéntrica: el músculo se acorta mientras genera tensión (ej. curl de bíceps). Isotónica excéntrica: se alarga controlando la carga (bajar la pesa). Isométrica: genera tensión sin cambiar de longitud (mantener una carga estática). La contracción excéntrica genera más fuerza pero más daño muscular." },
  { name: "Fibras Musculares Tipo I y II", module: "Sistema Muscular", emoji: "🏃", color: "#e11d48", simple: "Hay fibras musculares lentas (resistencia) y rápidas (velocidad y fuerza).", full: "Tipo I (lentas, rojas): muchas mitocondrias, alta vascularización, metabolismo oxidativo. Resistentes a la fatiga. Dominan en actividades de resistencia. Tipo IIa (rápidas, intermedias): metabolismo mixto. Tipo IIx (rápidas blancas): pocas mitocondrias, glucolíticas, gran fuerza pero se fatigan rápido. La proporción varía con la genética y el entrenamiento." },
  // Sistema Excretor
  { name: "Riñón", module: "Sistema Excretor", emoji: "🫘", color: "#ca8a04", simple: "Órgano par que filtra la sangre, elimina desechos y regula el agua y las sales del cuerpo.", full: "Órgano retroperitoneal de ~12×6×3 cm. La arteria renal suministra el 20-25% del gasto cardíaco. Cada riñón tiene ~1 millón de nefronas. Funciones: excreción de urea, creatinina y ácido úrico; regulación del volumen extracelular (SRAA y ADH); regulación del pH; secreción de eritropoyetina y activación de vitamina D." },
  { name: "Filtración Glomerular", module: "Sistema Excretor", emoji: "🔵", color: "#0284c7", simple: "Es el proceso en que la sangre pasa por el riñón y se filtra para eliminar los desechos.", full: "Ocurre en el corpúsculo renal. La tasa de filtración glomerular (TFG) normal es ~125 mL/min (~180 L/día). La membrana de filtración (endotelio fenestrado + membrana basal + podocitos) impide el paso de proteínas >70 kDa y hematíes. El ultrafiltrado resultante pasa al espacio de Bowman." },
  { name: "Reabsorción Tubular", module: "Sistema Excretor", emoji: "🔄", color: "#0891b2", simple: "Es el proceso por el que el riñón recupera el agua y las sustancias útiles del filtrado.", full: "El túbulo contorneado proximal reabsorbe ~65% del filtrado: glucosa (transporte activo), aminoácidos, Na⁺, K⁺, Cl⁻, HCO₃⁻ y agua. El asa de Henle concentra la orina. El túbulo distal y colector regulan el balance final de Na⁺ (aldosterona) y agua (ADH). Solo ~1% del filtrado se excreta como orina." },
  { name: "Sistema Renina-Angiotensina", module: "Sistema Excretor", emoji: "⚡", color: "#16a34a", simple: "Es el sistema hormonal que usan los riñones para controlar la presión arterial.", full: "Ante caída de presión arterial o volemia: las células yuxtaglomerulares liberan renina → convierte angiotensinógeno en angiotensina I → la ECA (pulmón) la convierte en angiotensina II → vasoconstricción + secreción de aldosterona (retiene Na⁺ y agua) + liberación de ADH. Resultado: sube la presión arterial." },
  { name: "Homeostasis Hídrica", module: "Sistema Excretor", emoji: "💧", color: "#38bdf8", simple: "Es el equilibrio del agua en el cuerpo, regulado principalmente por los riñones.", full: "La ADH (vasopresina, liberada por la hipófisis posterior) aumenta la permeabilidad de los túbulos colectores al agua (inserción de acuaporinas-2), promoviendo la reabsorción y concentrando la orina. La diabetes insípida (déficit de ADH) causa poliuria de hasta 20 L/día. El volumen de agua corporal total es ~60% del peso." },
  { name: "Urea y Excreción de Nitrógeno", module: "Sistema Excretor", emoji: "🧪", color: "#a3e635", simple: "La urea es el principal desecho del cuerpo: se forma en el hígado y la eliminan los riñones.", full: "El ciclo de la urea ocurre en el hígado: convierte el amonio (tóxico, producto de la degradación de aminoácidos) en urea (soluble, menos tóxica). La urea pasa a la sangre y es filtrada/excretada por los riñones. En insuficiencia renal, la urea se acumula (uremia) causando náuseas, encefalopatía y pericarditis." },
  // Sistema Endócrino
  { name: "Hormona", module: "Sistema Endócrino", emoji: "⚗️", color: "#fb923c", simple: "Es una sustancia química que produce una glándula y viaja por la sangre para dar órdenes a otros órganos.", full: "Mensajero químico secretado por glándulas endócrinas hacia la sangre. Tipos: peptídicas/proteicas (insulina, GH — actúan en receptores de membrana, vía AMPc/PLC), esteroideas (cortisol, estrógenos — derivan del colesterol, atraviesan la membrana, actúan en receptores nucleares) y aminadas (adrenalina, T3/T4). Actúan en células diana específicas." },
  { name: "Hipófisis", module: "Sistema Endócrino", emoji: "🔵", color: "#3b82f6", simple: "Es la 'glándula maestra': controla a casi todas las demás glándulas con sus hormonas.", full: "Adenohipófisis (anterior, 80%): produce GH (crecimiento), TSH (tiroides), ACTH (suprarrenales), FSH y LH (gónadas), prolactina (lactancia). Su secreción la controlan las hormonas liberadoras/inhibidoras del hipotálamo. Neurohipófisis (posterior): almacena y libera ADH (agua) y oxitocina (parto, lactancia)." },
  { name: "Retroalimentación Hormonal", module: "Sistema Endócrino", emoji: "🔄", color: "#22d3ee", simple: "Es el mecanismo por el que el cuerpo regula cuánta hormona produce: cuando hay mucha, la producción baja.", full: "El eje hipotálamo-hipófisis-órgano blanco funciona por retroalimentación negativa: el hipotálamo libera hormona liberadora → hipófisis libera hormona trófica → glándula blanca produce hormona → niveles elevados inhiben hipotálamo e hipófisis. Ej.: TSH-T4/T3; ACTH-cortisol; GnRH-FSH/LH-estrógenos." },
  { name: "Insulina y Glucagón", module: "Sistema Endócrino", emoji: "🩸", color: "#4ade80", simple: "La insulina baja el azúcar en sangre; el glucagón lo sube. Ambas las produce el páncreas.", full: "Insulina (células beta del islote): secretada cuando sube la glucemia postprandial. Estimula la captación de glucosa en músculo e hígado (GLUT4), glucogénesis, lipogénesis e inhibe gluconeogénesis. Glucagón (células alfa): secretado en ayuno/hipoglucemia. Estimula glucogenólisis y gluconeogénesis hepática. La diabetes mellitus tipo 2 implica resistencia a la insulina." },
  { name: "Cortisol", module: "Sistema Endócrino", emoji: "🔴", color: "#ef4444", simple: "Es la hormona del estrés: nos ayuda a enfrentar situaciones difíciles pero en exceso es dañina.", full: "Glucocorticoide producido por la corteza suprarrenal (fasciculada) bajo control de ACTH. En estrés: aumenta la glucemia (catabolismo proteico, gluconeogénesis, lipolisis), inhibe el sistema inmune y la inflamación, retiene Na⁺. En exceso crónico (síndrome de Cushing): obesidad central, hiperglucemia, osteoporosis, inmunosupresión." },
  { name: "Tiroxina (T4) y T3", module: "Sistema Endócrino", emoji: "🦋", color: "#a78bfa", simple: "Son las hormonas del tiroides que regulan la velocidad del metabolismo en todas las células del cuerpo.", full: "Producidas por células foliculares del tiroides a partir de tiroglobulina yodada. T4 es la forma predominante en sangre pero T3 (conversión periférica por desyodasas) es ~4× más activa. Actúan en receptores nucleares aumentando la transcripción de genes metabólicos, consumo de O₂, termogénesis y frecuencia cardíaca." },
  // Sistema Reproductor
  { name: "Gameto", module: "Sistema Reproductor Femenino", emoji: "🌸", color: "#f472b6", simple: "Es la célula reproductora: óvulo (femenino) o espermatozoide (masculino).", full: "Célula haploide (n=23 en humanos) producida por meiosis en las gónadas. Espermatozoides: 60 millones/mL en semen, cola flagelada, acrosoma con enzimas para penetrar la zona pelúcida. Oocito II: ~120 µm de diámetro, liberado en ovulación, completa la meiosis II solo si es fecundado." },
  { name: "Ciclo Menstrual", module: "Sistema Reproductor Femenino", emoji: "🔄", color: "#ec4899", simple: "Es el proceso mensual del cuerpo femenino que prepara al útero para un posible embarazo.", full: "~28 días con 4 fases: menstrual (días 1-5: descamación endometrial por caída de estrógenos y progesterona), folicular/proliferativa (días 6-13: FSH estimula folículos, estrógenos regeneran el endometrio), ovulatoria (día 14: pico de LH desencadena ovulación) y lútea/secretora (días 15-28: cuerpo lúteo secreta progesterona)." },
  { name: "Fecundación e Implantación", module: "Sistema Reproductor Femenino", emoji: "✨", color: "#a855f7", simple: "La fecundación es la unión del óvulo con el espermatozoide; la implantación es cuando el embrión se instala en el útero.", full: "Fecundación en la ampolla tubárica: el espermatozoide supera la zona pelúcida (reacción acrosómica), se funden membranas, se completa la meiosis II del oocito y se forman 2 pronúcleos → cigoto. El embrión se divide mientras viaja al útero. El blastocisto se implanta en el endometrio ~6-10 días post-fecundación." },
  { name: "Hormonas Reproductoras", module: "Sistema Reproductor Femenino", emoji: "⚗️", color: "#e879f9", simple: "Son las hormonas que regulan el ciclo menstrual, el embarazo y los caracteres sexuales.", full: "FSH (hipófisis): estimula el desarrollo folicular y la espermatogénesis. LH (hipófisis): desencadena la ovulación y mantiene el cuerpo lúteo. Estrógenos (ovario): desarrollo de caracteres femeninos, proliferación endometrial. Progesterona (cuerpo lúteo/placenta): prepara el endometrio para la implantación, mantiene el embarazo. hCG (embrión): detectada en el test de embarazo." },
  { name: "Embarazo y Placenta", module: "Sistema Reproductor Femenino", emoji: "🤰", color: "#c084fc", simple: "Durante el embarazo el embrión crece en el útero, nutrido por la placenta durante 9 meses.", full: "Gestación: ~38 semanas desde fecundación (~40 semanas desde última menstruación). La placenta se forma de tejido fetal (trofoblasto) y materno. Intercambia O₂, nutrientes y desechos entre madre y feto sin que se mezclen las sangres. Produce hCG, progesterona y estrógenos para mantener el embarazo. El parto es desencadenado por prostaglandinas y oxitocina." },
  // Sistema Reproductor Masculino
  { name: "Testículos", module: "Sistema Reproductor Masculino", emoji: "🔵", color: "#3b82f6", simple: "Son los órganos que producen los espermatozoides y la testosterona.", full: "Par de glándulas ovoides dentro del escroto. Los túbulos seminíferos contienen células de Sertoli (nutren espermatozoides) y células de Leydig (producen testosterona). Producen ~300 millones de espermatozoides/día." },
  { name: "Espermatozoide", module: "Sistema Reproductor Masculino", emoji: "🏊", color: "#60a5fa", simple: "Es la célula sexual masculina: muy pequeña, con cola para nadar hasta el óvulo.", full: "Célula haploide (23 cromosomas) de ~55 µm. Cabeza: núcleo + acrosoma (enzimas para penetrar la zona pelúcida). Cola (flagelo): propulsión. Sobreviven 3-5 días en el tracto femenino." },
  { name: "Testosterona", module: "Sistema Reproductor Masculino", emoji: "⚗️", color: "#818cf8", simple: "Es la hormona sexual masculina principal que regula la producción de espermatozoides y los caracteres masculinos.", full: "Producida por las células de Leydig de los testículos bajo control de LH hipofisaria. Regula la espermatogénesis, el desarrollo de caracteres sexuales secundarios (vello, masa muscular, voz grave) y la libido." },
  { name: "Próstata", module: "Sistema Reproductor Masculino", emoji: "⚙️", color: "#4f46e5", simple: "Es una glándula que produce líquido que protege a los espermatozoides y les ayuda a moverse.", full: "Glándula de ~20 g que rodea la uretra. Secreta ~30% del volumen del semen: PSA, zinc y citrato que licúan el semen y nutren los espermatozoides. La hiperplasia benigna es frecuente en adultos mayores." },
  { name: "Espermatogénesis", module: "Sistema Reproductor Masculino", emoji: "🔬", color: "#2563eb", simple: "Es el proceso de formación de espermatozoides en los testículos.", full: "Proceso continuo en los túbulos seminíferos desde la pubertad. Las espermátidas (haploides) se transforman en espermatozoides maduros (espermiogénesis). Requiere temperatura 2-3°C menor que la corporal (escroto). Dura ~64-74 días." },
  // Órganos de los Sentidos
  { name: "Ojo y Visión", module: "Órganos de los Sentidos", emoji: "👁️", color: "#38bdf8", simple: "El ojo capta la luz y envía imágenes al cerebro para que las interprete.", full: "El ojo tiene 3 túnicas: esclera/córnea (protección y refracción), úvea (coroides, cuerpo ciliar e iris — nutrición y control de luz) y retina (neuronas fotosensibles). El sistema óptico (córnea + cristalino) forma una imagen invertida en la retina. El cerebro (corteza visual occipital) la reinterpreta." },
  { name: "Retina y Fotorreceptores", module: "Órganos de los Sentidos", emoji: "🟡", color: "#fbbf24", simple: "La retina tiene células especiales que detectan la luz y el color.", full: "La retina tiene 10 capas. Bastones (~120 millones): detectan luz tenue, blanco/negro; rodopsina (opsina + retinal) se activa con fotones. Conos (~6 millones, agrupados en la fóvea): 3 tipos (S, M, L sensibles a azul, verde, rojo). Las señales pasan por células bipolares → ganglionares → nervio óptico." },
  { name: "Oído y Audición", module: "Órganos de los Sentidos", emoji: "👂", color: "#f97316", simple: "El oído capta las vibraciones del aire (sonidos) y las convierte en señales que el cerebro entiende.", full: "El oído tiene 3 partes: externo (pabellón + conducto auditivo → tímpano), medio (martillo, yunque, estribo amplifican ~22× la vibración), interno (cóclea: convierte vibración en impulso nervioso; vestíbulo: equilibrio). El nervio auditivo (VIII par craneal) lleva la señal a la corteza auditiva (lóbulo temporal)." },
  { name: "Cóclea y Transducción Sonora", module: "Órganos de los Sentidos", emoji: "🐌", color: "#10b981", simple: "La cóclea es la parte del oído interno que convierte el sonido en señal eléctrica.", full: "Espiral de 2,5 vueltas con 3 conductos llenos de linfa. El movimiento del estribo en la ventana oval genera ondas en la perilinfa que desplazan la membrana basilar. Las células ciliadas del órgano de Corti convierten el desplazamiento mecánico en potencial receptor (tonotopía: agudos en base, graves en ápex)." },
  { name: "Gusto y Olfato", module: "Órganos de los Sentidos", emoji: "👅", color: "#a78bfa", simple: "El gusto capta sabores en la lengua; el olfato capta aromas en la nariz. Ambos trabajan juntos.", full: "Gusto: papilas gustativas (fungiformes, caliciformes, foliadas) con células receptoras para 5 modalidades (dulce, salado, ácido, amargo, umami). Olfato: neuroreceptores olfatorios en el epitelio de la mucosa nasal (~350 tipos de receptores en humanos); señales van por el nervio olfatorio (I par) al bulbo olfatorio y sistema límbico." },
  { name: "Tacto y Propiocepción", module: "Órganos de los Sentidos", emoji: "🤚", color: "#f472b6", simple: "El tacto detecta presión, temperatura y dolor; la propiocepción nos dice la posición del cuerpo.", full: "Receptores táctiles cutáneos: Meissner (tacto fino, labios), Pacini (vibración), Merkel (presión sostenida), Ruffini (estiramiento). Termorrecepción: canales TRP. Nocicepción (dolor): fibras Aδ (dolor agudo) y C (dolor crónico, quemante). Propiocepción: husos musculares (longitud) y órganos de Golgi tendinosos (tensión)." },
  // Microbiología
  { name: "Bacteria", module: "Microbiología", emoji: "🦠", color: "#4ade80", simple: "Son seres vivos microscópicos sin núcleo. Pueden ser útiles o causar enfermedades.", full: "Procariotas unicelulares de 0,5-5 µm. Sin núcleo ni organelas membranosas. Pared de peptidoglucano. ADN circular en el nucleoide + plásmidos opcionales. Se reproducen por fisión binaria (~20 min en E. coli a 37°C). Gram positivas (pared gruesa, teñidas en púrpura) vs. Gram negativas (doble membrana, mayor resistencia antibiótica)." },
  { name: "Virus", module: "Microbiología", emoji: "😷", color: "#f87171", simple: "Los virus no son células: son partículas de material genético que necesitan infectar células para reproducirse.", full: "Partículas acelulares de 20-300 nm. Componentes: ácido nucleico (ADN o ARN, simple o doble cadena), cápside proteica y en algunos casos envoltura lipídica (derivada de la célula huésped). No tienen metabolismo propio; usan la maquinaria de la célula huésped. La vacunación estimula anticuerpos y linfocitos de memoria." },
  { name: "Célula Procariota", module: "Microbiología", emoji: "🔵", color: "#60a5fa", simple: "Las células procariotas son las más simples: no tienen núcleo ni organelas como las animales.", full: "Dominio: Bacteria y Archaea. Sin compartimentos membranosos. El ADN circular (+ plásmidos) está en el nucleoide. Ribosomas 70S. Pared de peptidoglucano (Bacteria). La reproducción es por fisión binaria. El tiempo de generación puede ser de 20 min (E. coli) a horas/días (Mycobacterium tuberculosis)." },
  { name: "Antibiótico", module: "Microbiología", emoji: "💊", color: "#a3e635", simple: "Los antibióticos son medicamentos que matan bacterias o las detienen. No sirven para los virus.", full: "Sustancias que inhiben el crecimiento bacteriano (bacteriostáticos) o las matan (bactericidas). Mecanismos: inhibición de síntesis de pared (penicilinas, cefalosporinas — bloquean enzimas PBP), de proteínas (aminoglucósidos → 30S; macrólidos/cloranfenicol → 50S), de ADN (quinolonas) o de membrana (polimixinas). La resistencia antibiótica es una emergencia global." },
  { name: "Patógeno y Virulencia", module: "Microbiología", emoji: "⚠️", color: "#fb923c", simple: "Un patógeno es un microorganismo que puede causar enfermedad; la virulencia es qué tan peligroso es.", full: "Factores de virulencia: adhesinas (adherencia al huésped), invasinas (penetración celular), toxinas (exotoxinas proteicas liberadas; endotoxinas = LPS de Gram negativas), cápsulas (evasión fagocítica) y sistemas de secreción tipo III-VII (inyectan proteínas en células huésped). La virulencia depende del patógeno y del estado inmune del huésped." },
  { name: "Microbioma Humano", module: "Microbiología", emoji: "🌿", color: "#22c55e", simple: "Es el conjunto de billones de microbios que viven en nuestro cuerpo y nos ayudan a estar sanos.", full: "El cuerpo humano alberga ~38 billones de bacterias (similar al número de células humanas), principalmente en el colon (Firmicutes, Bacteroidetes). El microbioma intestinal participa en la digestión de fibra, síntesis de vitamina K y B12, educación del sistema inmune y protección frente a patógenos. Su alteración (disbiosis) se asocia a obesidad, alergias e infecciones." },
  { name: "Hongos y Protozoos", module: "Microbiología", emoji: "🍄", color: "#86efac", simple: "Los hongos y los protozoos son microorganismos eucariotas que pueden causar algunas enfermedades.", full: "Hongos: eucariotas con pared de quitina. Levaduras (unicelulares, ej. Candida albicans), mohos y macromicetos. Causan micosis superficiales (tiña), sistémicas (aspergilosis en inmunocomprometidos) y oportunistas. Protozoos: eucariotas unicelulares heterótrofos. Parásitos como Plasmodium (malaria), Trypanosoma (enfermedad de Chagas) y Giardia (giardiasis)." },
  // Ecosistemas
  { name: "Ecosistema", module: "Ecosistemas", emoji: "🌳", color: "#16a34a", simple: "Conjunto de seres vivos y su ambiente físico que interactúan entre sí.", full: "Unidad ecológica formada por la biocenosis (organismos) y el biotopo (ambiente abiótico: suelo, agua, clima). Los ecosistemas intercambian energía y materia." },
  { name: "Cadena Alimentaria", module: "Ecosistemas", emoji: "🔗", color: "#22c55e", simple: "Secuencia de quién come a quién en un ecosistema.", full: "Representa el flujo de energía y materia: Productor → Consumidor primario → Consumidor secundario → Consumidor terciario → Descomponedor. La energía se pierde (~90%) en cada nivel trófico." },
  { name: "Productor", module: "Ecosistemas", emoji: "🌿", color: "#4ade80", simple: "Ser vivo que fabrica su propio alimento (plantas, algas).", full: "Organismos autótrofos que convierten energía solar o química en materia orgánica mediante fotosíntesis o quimiosíntesis. Son la base de todas las cadenas alimentarias." },
  { name: "Consumidor", module: "Ecosistemas", emoji: "🐰", color: "#86efac", simple: "Ser vivo que come a otros organismos para obtener energía.", full: "Organismos heterótrofos: primarios (herbívoros), secundarios (carnívoros que comen herbívoros), terciarios (superdepredadores). También existen omnívoros en varios niveles." },
  { name: "Descomponedor", module: "Ecosistemas", emoji: "🍄", color: "#bbf7d0", simple: "Transforma la materia muerta en minerales que vuelven al suelo.", full: "Hongos, bacterias y otros detritívoros descomponen materia orgánica muerta liberando CO₂, agua y minerales al suelo (ciclo de la materia). Sin ellos, la materia orgánica se acumularía." },
  { name: "Biodiversidad", module: "Ecosistemas", emoji: "🦋", color: "#15803d", simple: "Variedad de seres vivos que existe en un lugar o en el planeta.", full: "Incluye diversidad genética (variación dentro de una especie), específica (número de especies) y ecosistémica (variedad de hábitats). A mayor biodiversidad, mayor estabilidad del ecosistema." },
  { name: "Bioma", module: "Ecosistemas", emoji: "🗺️", color: "#166534", simple: "Gran región del planeta con clima, suelo y seres vivos característicos.", full: "Grandes unidades ecológicas determinadas principalmente por el clima: selva tropical, sabana, desierto, tundra, bosque templado, pradera. Cada bioma tiene flora y fauna adaptadas." },
  // Mitosis y Meiosis
  { name: "Mitosis", module: "Mitosis y Meiosis", emoji: "🔬", color: "#6366f1", simple: "División celular que produce dos células hijas idénticas a la madre.", full: "Proceso de división del núcleo con 4 fases: profase (condensación cromosómica), metafase (alineación en ecuador), anafase (separación de cromátidas), telofase (nuevos núcleos). Seguida de citocinesis." },
  { name: "Meiosis", module: "Mitosis y Meiosis", emoji: "🧬", color: "#818cf8", simple: "División celular que produce 4 gametos con la mitad de los cromosomas.", full: "Dos divisiones sucesivas (meiosis I y II) en células germinales. Produce 4 células haploides (n). La meiosis I es reduccional (separa homólogos), la II es ecuacional (separa cromátidas). Genera variabilidad genética." },
  { name: "Cromátida", module: "Mitosis y Meiosis", emoji: "🧵", color: "#a5b4fc", simple: "Cada una de las dos copias unidas de un cromosoma duplicado.", full: "Tras la replicación del ADN, cada cromosoma consiste en 2 cromátidas hermanas unidas por el centrómero. En anafase, las cromátidas se separan para formar cromosomas hijos." },
  { name: "Crossing-over", module: "Mitosis y Meiosis", emoji: "✂️", color: "#4f46e5", simple: "Intercambio de segmentos entre cromosomas homólogos durante la meiosis.", full: "Ocurre en profase I (etapa de paquiteno). Los cromosomas homólogos forman quiasmas e intercambian segmentos de ADN. Genera nuevas combinaciones alélicas (recombinación genética) aumentando la diversidad." },
  { name: "Haploide y Diploide", module: "Mitosis y Meiosis", emoji: "🔢", color: "#7c3aed", simple: "Haploide (n): una copia de cada cromosoma. Diploide (2n): dos copias.", full: "Las células somáticas humanas son diploides (2n=46). Los gametos son haploides (n=23). La fecundación une dos gametos haploides restaurando la diploidía. Simbolizado: 2n (diploide), n (haploide)." },
  { name: "Ciclo Celular", module: "Mitosis y Meiosis", emoji: "🔄", color: "#6d28d9", simple: "Las etapas que sigue una célula desde que nace hasta que se divide.", full: "Interfase (G1: crecimiento, S: replicación de ADN, G2: preparación) + Fase M (mitosis + citocinesis). Los puntos de control (checkpoints) verifican que cada fase se complete correctamente antes de avanzar." },
  // Sistema Inmunológico
  { name: "Antígeno", module: "Sistema Inmunológico", emoji: "🦠", color: "#dc2626", simple: "Sustancia extraña que activa las defensas del cuerpo.", full: "Molécula (proteína, polisacárido, lípido) reconocida como extraña por el sistema inmune. Los patógenos tienen antígenos de superficie. Los anticuerpos y linfocitos T reconocen epítopos específicos del antígeno." },
  { name: "Anticuerpo", module: "Sistema Inmunológico", emoji: "🛡️", color: "#ef4444", simple: "Proteína en forma de Y que neutraliza antígenos específicos.", full: "Inmunoglobulinas (IgG, IgM, IgA, IgE, IgD) producidas por plasmocitos. Se unen a antígenos específicos y los neutralizan, aglutinan o marcan para fagocitosis. La memoria inmunológica permite respuesta rápida al reencuentro." },
  { name: "Linfocito", module: "Sistema Inmunológico", emoji: "⚪", color: "#fca5a5", simple: "Glóbulo blanco especializado en la defensa específica del cuerpo.", full: "Linfocitos B: producen anticuerpos (inmunidad humoral). Linfocitos T: helper (CD4+, coordinan respuesta), citotóxicos (CD8+, destruyen células infectadas), reguladores. Linfocitos NK: matan células tumorales sin activación previa." },
  { name: "Fagocitosis", module: "Sistema Inmunológico", emoji: "😤", color: "#b91c1c", simple: "Proceso por el que células del sistema inmune 'comen' a los patógenos.", full: "Mecanismo de defensa inespecífico (inmunidad innata). Neutrófilos y macrófagos engloban patógenos en fagosome que se funde con lisosoma, destruyendo el intruso con enzimas hidrolíticas y radicales libres." },
  { name: "Vacuna", module: "Sistema Inmunológico", emoji: "💉", color: "#f87171", simple: "Preparado que entrena al sistema inmune para reconocer un patógeno.", full: "Introduce antígenos atenuados, inactivados o fragmentos (subunidades, ARNm) para generar memoria inmunológica sin causar enfermedad. Produce linfocitos B y T de memoria para respuesta secundaria más rápida e intensa." },
  { name: "Inflamación", module: "Sistema Inmunológico", emoji: "🔥", color: "#fbbf24", simple: "Respuesta de defensa del cuerpo ante lesiones o infecciones.", full: "Respuesta innata caracterizada por rubor (eritema), calor, edema y dolor. Mediada por histamina, prostaglandinas y citoquinas. Facilita el acceso de leucocitos al tejido afectado y elimina patógenos." },
  // Herencia Genética
  { name: "Alelo", module: "Herencia Genética", emoji: "🧩", color: "#f59e0b", simple: "Versión alternativa de un gen para una misma característica.", full: "Los diploides tienen 2 alelos de cada gen (uno por cromosoma homólogo). Si son iguales: homocigoto. Si son diferentes: heterocigoto. Los alelos dominantes se expresan sobre los recesivos." },
  { name: "Genotipo", module: "Herencia Genética", emoji: "🔤", color: "#d97706", simple: "La combinación de alelos que posee un organismo para un carácter.", full: "Composición alélica real de un individuo (p.ej. Aa, AA, aa). Puede no coincidir con el fenotipo si un alelo es recesivo. El genotipo más el ambiente determinan el fenotipo." },
  { name: "Fenotipo", module: "Herencia Genética", emoji: "👁️", color: "#b45309", simple: "La característica observable que resulta del genotipo.", full: "Expresión visible del genotipo (color de ojos, tipo de sangre, altura). Resultado de la interacción entre genotipo y ambiente. Dos individuos con igual fenotipo pueden tener diferente genotipo." },
  { name: "Dominante y Recesivo", module: "Herencia Genética", emoji: "⬆️", color: "#92400e", simple: "Dominante: el alelo que se expresa siempre. Recesivo: solo se expresa sin dominante.", full: "Alelo dominante (A) se expresa en genotipo AA y Aa. Alelo recesivo (a) solo se expresa en genotipo aa. La dominancia es relativa al locus y organismo (no hay alelos 'buenos' o 'malos')." },
  { name: "Cuadro de Punnett", module: "Herencia Genética", emoji: "🔲", color: "#78350f", simple: "Tabla que predice las combinaciones genéticas posibles en la descendencia.", full: "Herramienta creada por Reginald Punnett. Cruza los gametos posibles del padre (columnas) y la madre (filas) para obtener los genotipos y proporciones fenotípicas esperadas en la descendencia." },
  { name: "Herencia Ligada al Sexo", module: "Herencia Genética", emoji: "🔀", color: "#d97706", simple: "Herencia de caracteres cuyos genes están en los cromosomas sexuales X o Y.", full: "Los genes del cromosoma X se expresan sin contraparte en varones (XY), por eso enfermedades recesivas ligadas al X (daltonismo, hemofilia) son más frecuentes en hombres. Las mujeres (XX) pueden ser portadoras." },
];

const MODULE_ORDER = [
  "Célula Animal",
  "ADN & Genética",
  "Sistema Nervioso",
  "Célula Vegetal",
  "Cuerpo Humano",
  "Corazón Humano",
  "Cerebro Humano",
  "Sistema Respiratorio",
  "Sistema Digestivo",
  "Sistema Óseo",
  "Sistema Muscular",
  "Sistema Excretor",
  "Sistema Endócrino",
  "Sistema Reproductor Femenino",
  "Sistema Reproductor Masculino",
  "Órganos de los Sentidos",
  "Microbiología",
  "Ecosistemas",
  "Mitosis y Meiosis",
  "Sistema Inmunológico",
  "Herencia Genética",
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
  "Sistema Óseo": "#94a3b8",
  "Sistema Muscular": "#f87171",
  "Sistema Excretor": "#facc15",
  "Sistema Endócrino": "#fb923c",
  "Sistema Reproductor Femenino": "#f472b6",
  "Sistema Reproductor Masculino": "#60a5fa",
  "Órganos de los Sentidos": "#22d3ee",
  "Microbiología": "#4ade80",
  "Ecosistemas": "#22c55e",
  "Mitosis y Meiosis": "#818cf8",
  "Sistema Inmunológico": "#ef4444",
  "Herencia Genética": "#f59e0b",
};

async function exportPDF(filteredTerms: Term[], activeModule: string | null, level: "Primaria" | "Secundaria" | "Ambas" = "Ambas") {
  const { default: jsPDF } = await import("jspdf");
  const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
  const W = 210;
  const marginX = 15;
  const contentW = W - marginX * 2;
  let y = 15;

  const checkPage = (needed: number) => {
    if (y + needed > 282) { pdf.addPage(); y = 15; }
  };

  // Header bar
  pdf.setFillColor(15, 23, 42);
  pdf.rect(0, 0, W, 22, "F");
  pdf.setFontSize(14);
  pdf.setFont("helvetica", "bold");
  pdf.setTextColor(255, 255, 255);
  pdf.text("BioAula3D · Glosario de Biología", marginX, 10);
  pdf.setFontSize(8);
  pdf.setFont("helvetica", "normal");
  const levelLabel = level === "Ambas" ? "Primaria + Secundaria" : `Nivel ${level}`;
  pdf.text(activeModule ? `Módulo: ${activeModule} · ${filteredTerms.length} términos · ${levelLabel}` : `${filteredTerms.length} términos · Todos los módulos · ${levelLabel}`, marginX, 17);
  y = 28;

  const byModule: Record<string, Term[]> = {};
  filteredTerms.forEach(t => { if (!byModule[t.module]) byModule[t.module] = []; byModule[t.module].push(t); });
  const modulesToRender = MODULE_ORDER.filter(m => byModule[m]);

  modulesToRender.forEach((mod, mi) => {
    const modTerms = byModule[mod];
    if (!modTerms) return;
    checkPage(12);
    if (mi > 0) y += 4;
    pdf.setFontSize(11);
    pdf.setFont("helvetica", "bold");
    pdf.setTextColor(30, 30, 30);
    pdf.text(mod, marginX, y);
    y += 1.5;
    pdf.setDrawColor(180, 180, 180);
    pdf.line(marginX, y, marginX + contentW, y);
    y += 5;

    modTerms.forEach(term => {
      const simpleLines = level !== "Secundaria" ? pdf.splitTextToSize(term.simple, contentW - 4) : [];
      const fullLines = level !== "Primaria" ? pdf.splitTextToSize(term.full, contentW - 4) : [];
      const blockH = 6 + simpleLines.length * 4.5 + fullLines.length * 4 + 5;
      checkPage(blockH);

      pdf.setFontSize(10);
      pdf.setFont("helvetica", "bold");
      pdf.setTextColor(15, 23, 42);
      pdf.text(term.name, marginX + 2, y);
      y += 5;

      pdf.setFontSize(8.5);
      pdf.setFont("helvetica", "normal");
      if (simpleLines.length) {
        pdf.setTextColor(30, 100, 60);
        pdf.text(simpleLines, marginX + 4, y);
        y += simpleLines.length * 4.5;
      }
      if (fullLines.length) {
        pdf.setTextColor(30, 60, 140);
        pdf.text(fullLines, marginX + 4, y);
        y += fullLines.length * 4 + 3;
      }

      pdf.setDrawColor(230, 230, 230);
      pdf.line(marginX + 4, y, marginX + contentW - 4, y);
      y += 3;
    });
  });

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

export default function GlosarioPage() {
  const [search, setSearch] = useState("");
  const [activeModule, setActiveModule] = useState<string | null>(null);

  useEffect(() => {
    const m = new URLSearchParams(window.location.search).get("modulo");
    if (m) setActiveModule(m);
  }, []);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [pdfLoading, setPdfLoading] = useState(false);
  const [shared, setShared] = useState(false);
  const [pdfLevel, setPdfLevel] = useState<"Primaria" | "Secundaria" | "Ambas">("Ambas");
  const [notasOpen, setNotasOpen] = useState(false);
  const [notasDate, setNotasDate] = useState(() => new Date().toLocaleDateString("es-AR", { day: "2-digit", month: "2-digit", year: "numeric" }));
  const [notasText, setNotasText] = useState("");

  const filtered = useMemo(() => terms.filter(t => {
    const q = search.toLowerCase();
    const matchSearch = q === "" || t.name.toLowerCase().includes(q) || t.simple.toLowerCase().includes(q) || t.full.toLowerCase().includes(q);
    return matchSearch && (!activeModule || t.module === activeModule);
  }), [search, activeModule]);

  const handleDownload = async () => {
    setPdfLoading(true);
    try {
      const pdf = await exportPDF(filtered, activeModule, pdfLevel);
      const lvlSuffix = pdfLevel !== "Ambas" ? `-${pdfLevel}` : "";
      const filename = activeModule ? `BioAula3D-Glosario-${activeModule.replace(/\s+/g, "-")}${lvlSuffix}.pdf` : `BioAula3D-Glosario-Completo${lvlSuffix}.pdf`;
      pdf.save(filename);
    } finally { setPdfLoading(false); }
  };

  const handleShare = async () => {
    setPdfLoading(true);
    try {
      const pdf = await exportPDF(filtered, activeModule, pdfLevel);
      const lvlSuffix = pdfLevel !== "Ambas" ? `-${pdfLevel}` : "";
      const filename = activeModule ? `BioAula3D-Glosario-${activeModule.replace(/\s+/g, "-")}${lvlSuffix}.pdf` : `BioAula3D-Glosario-Completo${lvlSuffix}.pdf`;
      const blob = pdf.output("blob");
      const file = new File([blob], filename, { type: "application/pdf" });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({ files: [file], title: "Glosario de Biología — BioAula3D" });
      } else {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url; a.download = filename; a.click();
        URL.revokeObjectURL(url);
        setShared(true); setTimeout(() => setShared(false), 2000);
      }
    } finally { setPdfLoading(false); }
  };

  const handleExportNotas = async () => {
    const { default: jsPDF } = await import("jspdf");
    const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
    const W = 210; const mx = 15; const cW = W - mx * 2; let y = 15;
    pdf.setFillColor(15, 23, 42); pdf.rect(0, 0, W, 22, "F");
    pdf.setFontSize(13); pdf.setFont("helvetica", "bold"); pdf.setTextColor(255, 255, 255);
    pdf.text("Notas · Glosario de Biologia", mx, 11);
    pdf.setFontSize(8); pdf.setFont("helvetica", "normal"); pdf.setTextColor(180, 180, 180);
    pdf.text(`BioAula3D · ${notasDate}`, mx, 18);
    y = 30;
    pdf.setFontSize(10); pdf.setFont("helvetica", "normal"); pdf.setTextColor(20, 20, 20);
    const lines = pdf.splitTextToSize(notasText || "(Sin contenido)", cW);
    pdf.text(lines, mx, y);
    pdf.save(`BioAula3D-Notas-Glosario-${notasDate.replace(/\//g, "-")}.pdf`);
  };

  const handleShareNotas = async () => {
    const text = `Notas Glosario de Biologia - ${notasDate}\n\n${notasText}`;
    if (navigator.share) await navigator.share({ title: "Notas · Glosario", text });
    else await navigator.clipboard.writeText(text);
  };

  return (
    <div className="min-h-screen bg-bio-dark">
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-white mb-1">Glosario de Biología</h1>
          <p className="text-slate-400 text-sm">{terms.length} términos · {MODULE_ORDER.length} módulos · Tocá un término para ver la explicación completa</p>
        </div>

        {/* Buscador */}
        <div className="relative mb-4">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-lg select-none">🔍</span>
          <input
            type="text"
            placeholder="Buscar término…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-11 pr-4 py-3 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-slate-500 transition-all"
          />
        </div>

        {/* Filtros de módulo */}
        <div className="flex flex-wrap gap-2 mb-4">
          <button
            onClick={() => setActiveModule(null)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${!activeModule ? "border-white/20 text-white bg-slate-700" : "border-slate-800 text-slate-500 hover:text-slate-300"}`}
          >
            Todos
          </button>
          {MODULE_ORDER.map(m => (
            <button
              key={m}
              onClick={() => setActiveModule(activeModule === m ? null : m)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all border ${activeModule === m ? "text-black" : "border-slate-800 text-slate-500 hover:text-slate-300"}`}
              style={activeModule === m ? { background: moduleColors[m], borderColor: moduleColors[m] } : {}}
            >
              {m}
            </button>
          ))}
        </div>

        {/* Nivel PDF */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs text-slate-500 flex-shrink-0">PDF para:</span>
          {(["Ambas", "Primaria", "Secundaria"] as const).map(l => (
            <button key={l} onClick={() => setPdfLevel(l)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all border ${
                pdfLevel === l
                  ? l === "Primaria" ? "bg-emerald-500/20 border-emerald-500/50 text-emerald-400"
                    : l === "Secundaria" ? "bg-blue-500/20 border-blue-500/50 text-blue-400"
                    : "bg-slate-700 border-white/20 text-white"
                  : "border-slate-800 text-slate-500 hover:text-slate-300"
              }`}>
              {l === "Primaria" ? "🌱 Primaria" : l === "Secundaria" ? "🔬 Secundaria" : "📚 Ambas"}
            </button>
          ))}
        </div>

        {/* Botones PDF */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={handleDownload}
            disabled={pdfLoading || filtered.length === 0}
            className="flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg text-xs font-semibold transition-all disabled:opacity-50"
          >
            {pdfLoading ? "⏳" : "📥"} {pdfLoading ? "Generando…" : `Descargar PDF (${filtered.length})`}
          </button>
          <button
            onClick={handleShare}
            disabled={pdfLoading || filtered.length === 0}
            className="flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg text-xs font-semibold transition-all disabled:opacity-50"
          >
            {pdfLoading ? "⏳" : shared ? "✓" : "📤"} {shared ? "Copiado" : "Compartir PDF"}
          </button>
        </div>
        <div className="flex gap-2 mb-6">
          <button onClick={() => setNotasOpen(true)} className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-sm font-semibold transition-all">
            📝 Notas
          </button>
        </div>

        {/* Lista de términos */}
        {filtered.length === 0 ? (
          <div className="text-center py-12 text-slate-500">
            <div className="text-4xl mb-3">🔍</div>
            <p>No se encontraron términos para &quot;{search}&quot;</p>
          </div>
        ) : (
          <div className="space-y-2">
            {filtered.map(t => (
              <div key={t.name + t.module}>
                <button
                  onClick={() => setExpanded(expanded === t.name + t.module ? null : t.name + t.module)}
                  className="w-full text-left rounded-xl border border-slate-800 hover:border-slate-600 transition-all px-4 py-3 flex items-start gap-3"
                  style={{ minHeight: "58px" }}
                >
                  <span className="text-lg leading-none mt-0.5 flex-shrink-0">{t.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-bold text-white">{t.name}</span>
                      <span className="text-xs px-2 py-0.5 rounded-md font-medium" style={{ background: moduleColors[t.module] + "20", color: moduleColors[t.module] }}>{t.module}</span>
                    </div>
                    <p className="text-slate-400 text-xs mt-0.5 leading-snug">{t.simple}</p>
                  </div>
                  <span className="text-slate-600 text-xs mt-1 flex-shrink-0">{expanded === t.name + t.module ? "▲" : "▼"}</span>
                </button>
                {expanded === t.name + t.module && (
                  <div className="mx-3 mb-1 px-4 py-3 rounded-b-xl border-x border-b border-slate-700/50 bg-slate-800/40 space-y-2.5">
                    <div className="text-xs leading-relaxed">
                      <span className="inline-block font-bold text-emerald-400 mb-0.5">🌱 Primaria</span>
                      <p className="text-slate-200">{t.simple}</p>
                    </div>
                    <div className="border-t border-slate-700/60 pt-2 text-xs leading-relaxed">
                      <span className="inline-block font-bold text-blue-400 mb-0.5">🔬 Secundaria</span>
                      <p className="text-slate-300">{t.full}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <Link href="/" className="text-slate-500 hover:text-slate-300 text-sm transition-all">← Volver al inicio</Link>
        </div>
      </div>

      {notasOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-end justify-center p-0" onClick={() => setNotasOpen(false)}>
          <div className="bg-slate-900 border-t border-slate-700 rounded-t-2xl w-full max-w-lg p-5 pb-8 space-y-3" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <div><span className="text-base font-bold text-white">📝 Notas</span><span className="text-slate-500 text-xs ml-2">Glosario de Biología</span></div>
              <button onClick={() => setNotasOpen(false)} className="text-slate-500 hover:text-white text-lg leading-none transition-colors">✕</button>
            </div>
            <input type="text" value={notasDate} onChange={e => setNotasDate(e.target.value)} placeholder="Fecha (ej. 04/06/2026)" className="w-full bg-slate-800 text-white rounded-lg px-3 py-2 text-sm border border-slate-700 focus:outline-none focus:border-slate-500 transition-colors" />
            <textarea value={notasText} onChange={e => setNotasText(e.target.value)} placeholder="Anotá lo que necesités sobre el glosario..." rows={8} className="w-full bg-slate-800 text-white rounded-lg px-3 py-2 text-sm border border-slate-700 focus:outline-none focus:border-slate-500 resize-none transition-colors leading-relaxed" />
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

