"use client";
import { useState, useMemo } from "react";
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

async function exportPDF(filteredTerms: Term[], activeModule: string | null) {
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
  pdf.text(activeModule ? `Módulo: ${activeModule} · ${filteredTerms.length} términos` : `${filteredTerms.length} términos · Todos los módulos`, marginX, 17);
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
      const simpleLines = pdf.splitTextToSize(`Primaria: ${term.simple}`, contentW - 4);
      const fullLines = pdf.splitTextToSize(`Secundaria: ${term.full}`, contentW - 4);
      const blockH = 6 + simpleLines.length * 4.5 + fullLines.length * 4 + 5;
      checkPage(blockH);

      pdf.setFontSize(10);
      pdf.setFont("helvetica", "bold");
      pdf.setTextColor(15, 23, 42);
      pdf.text(`${term.emoji}  ${term.name}`, marginX + 2, y);
      y += 5;

      pdf.setFontSize(8.5);
      pdf.setFont("helvetica", "normal");
      pdf.setTextColor(30, 100, 60);
      pdf.text(simpleLines, marginX + 4, y);
      y += simpleLines.length * 4.5;

      pdf.setTextColor(30, 60, 140);
      pdf.text(fullLines, marginX + 4, y);
      y += fullLines.length * 4 + 3;

      pdf.setDrawColor(230, 230, 230);
      pdf.line(marginX + 4, y, marginX + contentW - 4, y);
      y += 3;
    });
  });

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

export default function GlosarioPage() {
  const [search, setSearch] = useState("");
  const [activeModule, setActiveModule] = useState<string | null>(null);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [pdfLoading, setPdfLoading] = useState(false);
  const [shared, setShared] = useState(false);

  const filtered = useMemo(() => terms.filter(t => {
    const q = search.toLowerCase();
    const matchSearch = q === "" || t.name.toLowerCase().includes(q) || t.simple.toLowerCase().includes(q) || t.full.toLowerCase().includes(q);
    return matchSearch && (!activeModule || t.module === activeModule);
  }), [search, activeModule]);

  const handleDownload = async () => {
    setPdfLoading(true);
    try {
      const pdf = await exportPDF(filtered, activeModule);
      const filename = activeModule ? `BioAula3D-Glosario-${activeModule.replace(/\s+/g, "-")}.pdf` : "BioAula3D-Glosario-Completo.pdf";
      pdf.save(filename);
    } finally { setPdfLoading(false); }
  };

  const handleShare = async () => {
    setPdfLoading(true);
    try {
      const pdf = await exportPDF(filtered, activeModule);
      const filename = activeModule ? `BioAula3D-Glosario-${activeModule.replace(/\s+/g, "-")}.pdf` : "BioAula3D-Glosario-Completo.pdf";
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
                  <div className="mx-3 mb-1 px-4 py-3 rounded-b-xl border-x border-b border-slate-700/50 text-xs text-slate-300 leading-relaxed bg-slate-800/40">
                    <span className="font-semibold text-white">Secundaria: </span>{t.full}
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
    </div>
  );
}
