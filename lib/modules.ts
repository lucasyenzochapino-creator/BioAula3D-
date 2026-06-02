export interface Structure {
  name: string;
  emoji?: string;
  simple: string;
  full: string;
  color: string;
}

export interface ModuleData {
  slug: string;
  uid: string;
  title: string;
  subtitle: string;
  accent: string;
  intro: string;
  structures: Structure[];
}

export const MODULES: ModuleData[] = [
  {
    slug: "celula",
    uid: "0d9f7f4257224975b2ef83a283709b2f",
    title: "Célula Animal",
    subtitle: "🔬 Biología celular",
    accent: "#4ade80",
    intro: "Explorá un modelo 3D real de una célula eucariota animal. Tocá los puntos ⓘ en el modelo o las estructuras de abajo.",
    structures: [
      { name: "Núcleo", emoji: "🔵", color: "#3b82f6", simple: "Es el 'cerebro' de la célula — guarda la información genética.", full: "Organela delimitada por la envoltura nuclear (doble membrana con poros). Contiene el ADN organizado en cromosomas y el nucléolo. Dirige la transcripción del ARNm y por ende toda la síntesis proteica." },
      { name: "Mitocondria", emoji: "🟠", color: "#f97316", simple: "Produce la energía que necesita la célula para vivir.", full: "Organela de doble membrana con crestas internas. Realiza la fosforilación oxidativa (cadena respiratoria) para sintetizar ATP. Posee su propio ADN circular, evidencia de origen endosimbiótico." },
      { name: "Retículo Endoplasmático", emoji: "🟣", color: "#a855f7", simple: "Es como una red de caminos que transporta proteínas por la célula.", full: "Sistema de membranas interconectadas. El RER (rugoso) tiene ribosomas adosados y sintetiza proteínas de secreción; el REL (liso) sintetiza lípidos y detoxifica sustancias." },
      { name: "Aparato de Golgi", emoji: "🟡", color: "#eab308", simple: "Empaqueta y envía proteínas a donde se necesitan, como un correo postal.", full: "Conjunto de cisternas membranosas apiladas (cis, medial, trans). Modifica proteínas con azúcares (glicosilación), las clasifica y envía en vesículas hacia la membrana plasmática o lisosomas." },
      { name: "Lisosoma", emoji: "🩷", color: "#ec4899", simple: "Digiere y recicla los desechos y partes viejas de la célula.", full: "Vesícula con enzimas hidrolíticas activas a pH ácido (~4,5). Realiza autofagia (recicla orgánulos dañados) y heterofagia (degrada material externo). Su ruptura puede desencadenar apoptosis." },
      { name: "Ribosoma", emoji: "🟢", color: "#22c55e", simple: "Fabrica las proteínas que la célula necesita para funcionar.", full: "Complejo ARN-proteínas formado por subunidad mayor (60S) y menor (40S). Lee el ARNm y sintetiza cadenas polipeptídicas mediante la traducción. Puede estar libre en citoplasma o unido al RER." },
      { name: "Membrana Plasmática", emoji: "🫧", color: "#14b8a6", simple: "Es la 'piel' de la célula: controla qué entra y qué sale.", full: "Bicapa fosfolipídica con proteínas integrales y periféricas (modelo mosaico fluido). Regula el transporte de iones y moléculas mediante canales, bombas y transporte activo/pasivo." },
      { name: "Centrosoma", emoji: "⭐", color: "#f43f5e", simple: "Organiza la división celular y ayuda a mover los cromosomas.", full: "Par de centríolos rodeados de material pericentriolar. Nuclea los microtúbulos del huso mitótico durante la división. Clave en la organización del citoesqueleto y la formación de cilios." },
      { name: "Vacuola", emoji: "🔷", color: "#06b6d4", simple: "Almacena agua, nutrientes o desechos como un depósito.", full: "Vesícula membranosa (tonoplasto). En células animales son pequeñas y temporales; participan en endocitosis/exocitosis. Regulan la osmosis y eliminan sustancias de desecho." },
      { name: "Citoesqueleto", emoji: "🕸️", color: "#94a3b8", simple: "Es como los huesos de la célula: le da forma y permite que se mueva.", full: "Red de filamentos proteicos: microtúbulos (tubulina), filamentos de actina y filamentos intermedios. Mantiene la forma celular, posiciona orgánulos, permite la migración y la división celular." },
    ],
  },
  {
    slug: "adn",
    uid: "212e5422645f4432a61dc2f3aac3c8c8",
    title: "ADN & Genética",
    subtitle: "🧬 Biología molecular",
    accent: "#60a5fa",
    intro: "Explorá la doble hélice del ADN en 3D. Tocá los puntos ⓘ en el modelo o las estructuras de abajo.",
    structures: [
      { name: "Doble Hélice", emoji: "🧬", color: "#3b82f6", simple: "La forma retorcida del ADN, como una escalera en espiral.", full: "Estructura propuesta por Watson y Crick (1953). Dos cadenas antiparalelas de nucleótidos unidas por puentes de hidrógeno entre bases complementarias. Un giro completo cada 10 pb (~3,4 nm)." },
      { name: "Nucleótido", emoji: "🔩", color: "#8b5cf6", simple: "Es la 'pieza' básica del ADN: una base, un azúcar y un fosfato.", full: "Monómero del ADN formado por: desoxirribosa (azúcar pentosa), grupo fosfato y una base nitrogenada (A, T, G o C). Se unen por enlaces fosfodiéster 3'-5' formando la columna del ADN." },
      { name: "Adenina (A)", emoji: "🔴", color: "#ef4444", simple: "Una de las 4 letras del ADN. Siempre se une con la Timina (T).", full: "Base púrica (doble anillo). Se empareja con Timina mediante 2 puentes de hidrógeno (A=T). En el ARN se empareja con Uracilo (U). Junto a la ribosa y fosfatos forma el ATP, moneda energética celular." },
      { name: "Guanina (G)", emoji: "🟡", color: "#eab308", simple: "Otra letra del ADN. Siempre se une con la Citosina (C).", full: "Base púrica (doble anillo). Se empareja con Citosina mediante 3 puentes de hidrógeno (G≡C). El par G-C es más estable que A-T por tener un puente de hidrógeno adicional." },
      { name: "Timina (T)", emoji: "🔵", color: "#60a5fa", simple: "Se empareja con la Adenina. Es exclusiva del ADN (no del ARN).", full: "Base pirimídica (anillo simple). Exclusiva del ADN; en el ARN es reemplazada por Uracilo. Se une a Adenina con 2 puentes de hidrógeno. Derivada de la uridina por metilación." },
      { name: "Citosina (C)", emoji: "🟢", color: "#22c55e", simple: "Se empareja con la Guanina. Es una de las 4 bases del ADN.", full: "Base pirimídica (anillo simple). Se une a Guanina con 3 puentes de hidrógeno. Puede sufrir deaminación espontánea a Uracilo (mutación frecuente). Presente tanto en ADN como en ARN." },
      { name: "Histona", emoji: "🎀", color: "#f472b6", simple: "Proteína que envuelve el ADN para que quepa comprimido en la célula.", full: "Proteínas básicas ricas en lisina y arginina. El ADN se enrolla dos veces alrededor de un octámero de histonas (H2A, H2B, H3, H4) formando el nucleosoma. La modificación de histonas regula la expresión génica (epigenética)." },
      { name: "Cromosoma", emoji: "🧵", color: "#a855f7", simple: "Es el ADN muy compactado que se ve durante la división celular.", full: "Estructura de ADN superenrollado con proteínas. El ser humano tiene 46 cromosomas (23 pares) en células somáticas. Cada cromosoma tiene centrómetro, telómeros y regiones específicas (genes y secuencias no codificantes)." },
    ],
  },
  {
    slug: "sistema-nervioso",
    uid: "03a5173f3d2e46958b6f8be81b1c88be",
    title: "Sistema Nervioso",
    subtitle: "🧠 Neurociencia",
    accent: "#a78bfa",
    intro: "Explorá una neurona real en 3D. Tocá los puntos ⓘ en el modelo o las estructuras de abajo.",
    structures: [
      { name: "Dendritas", emoji: "🌿", color: "#22c55e", simple: "Son las 'antenas' de la neurona que reciben señales de otras neuronas.", full: "Prolongaciones ramificadas que aumentan la superficie receptora. Contienen receptores para neurotransmisores. La densidad de espinas dendríticas (sitios sinápticos) se modifica con el aprendizaje (plasticidad sináptica)." },
      { name: "Soma (cuerpo celular)", emoji: "⚪", color: "#94a3b8", simple: "El cuerpo principal de la neurona donde está el núcleo.", full: "Contiene el núcleo, organelas y la maquinaria de síntesis proteica. Integra todas las señales recibidas en dendritas y decide si generar o no un potencial de acción (zona gatillo en el cono axónico)." },
      { name: "Axón", emoji: "➡️", color: "#3b82f6", simple: "El 'cable' largo que lleva la señal eléctrica hacia otras neuronas.", full: "Prolongación única (puede medir hasta 1 metro). Conduce el potencial de acción desde el cono axónico hasta los terminales. La dirección de conducción es siempre del soma hacia los terminales (ortodrómica)." },
      { name: "Vaina de Mielina", emoji: "⚡", color: "#f59e0b", simple: "Envoltura grasa que acelera la transmisión de señales eléctricas.", full: "Producida por células de Schwann (SNP) u oligodendrocitos (SNC). Aumenta la resistencia de la membrana axónica y reduce la capacitancia. Permite conducción saltatoria entre nódulos de Ranvier (hasta 120 m/s vs 0,5 m/s sin mielina)." },
      { name: "Nódulos de Ranvier", emoji: "🔘", color: "#06b6d4", simple: "Son pequeños 'saltos' en la mielina donde la señal se regenera.", full: "Espacios entre segmentos de mielina con alta densidad de canales de Na⁺ voltaje-dependientes. El potencial de acción 'salta' de nódulo en nódulo (conducción saltatoria), aumentando la velocidad y ahorrando energía." },
      { name: "Terminal Axónico", emoji: "🔵", color: "#8b5cf6", simple: "El extremo del axón que libera los mensajeros químicos (neurotransmisores).", full: "Botón sináptico: contiene vesículas con neurotransmisores. Al llegar el PA, canales de Ca²⁺ se abren, el Ca²⁺ dispara la exocitosis de vesículas y los neurotransmisores difunden hacia la hendidura sináptica." },
      { name: "Sinapsis", emoji: "💫", color: "#f43f5e", simple: "Es la conexión entre dos neuronas donde se comunican.", full: "Unión funcional entre neurona presináptica y postsináptica (o célula efectora). La hendidura sináptica mide ~20-40 nm. Los neurotransmisores difunden y se unen a receptores postsinápticos generando PPSE (excitatorios) o PPSI (inhibitorios)." },
      { name: "Neurotransmisor", emoji: "💊", color: "#10b981", simple: "Son los 'mensajes químicos' que las neuronas usan para comunicarse.", full: "Moléculas como glutamato (excitatorio), GABA (inhibitorio), dopamina, serotonina, acetilcolina. Se sintetizan en el soma, se empaquetan en vesículas y se liberan por exocitosis. Su recaptación o degradación termina la señal." },
      { name: "Célula Glial", emoji: "🛡️", color: "#64748b", simple: "Las células de soporte que protegen y alimentan a las neuronas.", full: "Representan el 90% de las células cerebrales. Tipos: astrocitos (soporte metabólico, barrera hematoencefálica), oligodendrocitos (mielina en SNC), microglía (inmunidad), células de Schwann (mielina en SNP)." },
    ],
  },
  {
    slug: "planta",
    uid: "0640c7a14f41400fbdac382c7de1d776",
    title: "Célula Vegetal",
    subtitle: "🌿 Botánica celular",
    accent: "#34d399",
    intro: "Explorá la célula vegetal y sus diferencias con la animal. Tocá los puntos ⓘ o las estructuras de abajo.",
    structures: [
      { name: "Pared Celular", emoji: "🧱", color: "#92400e", simple: "La capa rígida que rodea la célula vegetal y le da forma.", full: "Compuesta principalmente por celulosa (polímero de glucosa). Capa primaria (flexible, en células en crecimiento) y secundaria (lignificada, en células maduras). Da rigidez mecánica y protección. Las plantas la tienen; los animales, no." },
      { name: "Cloroplasto", emoji: "🟢", color: "#16a34a", simple: "Donde ocurre la fotosíntesis: convierte la luz solar en azúcar.", full: "Orgánulo de doble membrana con tilacoides apilados (grana) y estroma. La fase luminosa ocurre en tilacoides (fotosistemas I y II); el Ciclo de Calvin en el estroma. Contiene ADN propio (endosimbiosis con cianobacteria ancestral)." },
      { name: "Vacuola Central", emoji: "💧", color: "#0284c7", simple: "Un gran depósito de agua que mantiene firme a la célula.", full: "Puede ocupar hasta el 90% del volumen celular. Almacena agua, azúcares, iones, pigmentos (antocianinas) y toxinas. La presión de turgencia que genera contra la pared celular mantiene la firmeza de los tejidos. Su pérdida causa la marchitez." },
      { name: "Plasmodesmos", emoji: "🔗", color: "#f59e0b", simple: "Pequeños canales que conectan células vecinas y les permiten comunicarse.", full: "Canales citoplasmáticos que atraviesan la pared celular. Permiten el transporte simplástico de agua, iones, azúcares y señales entre células. Su diámetro (~30-60 nm) puede regularse. Fundamentales en el floema." },
      { name: "Amiloplasto", emoji: "⬜", color: "#d1d5db", simple: "Almacena el almidón (azúcar de reserva) que fabrica la planta.", full: "Tipo de plastidio no pigmentado. Sintetiza y almacena gránulos de almidón (amilosa + amilopectina). Abundantes en tubérculos (papa), semillas y raíces. En células de la raíz también detectan la gravedad (estatocitos)." },
      { name: "Núcleo", emoji: "🔵", color: "#6366f1", simple: "Guarda el ADN con las instrucciones para construir y controlar la planta.", full: "Similar al de células animales pero frecuentemente poliploide en plantas (diploides, tetraploides, etc.). Contiene múltiples cromosomas; los cereales pueden tener muchos más que los humanos (trigo: 42 cromosomas)." },
      { name: "Mitocondria", emoji: "🟠", color: "#f97316", simple: "Produce la energía ATP que la célula necesita para vivir y crecer.", full: "Presente también en células vegetales (además del cloroplasto). Realiza la respiración celular aeróbica. En plantas la relación entre fotosíntesis (cloroplasto) y respiración (mitocondria) determina el balance energético." },
      { name: "Retículo Endoplasmático", emoji: "🟣", color: "#9333ea", simple: "Red de transporte de proteínas y lípidos dentro de la célula.", full: "Sistema de membranas que conecta el núcleo con la periferia celular. El RER sintetiza proteínas de secreción (muchos para la pared celular). El REL produce los lípidos de membrana y metaboliza compuestos secundarios." },
      { name: "Membrana Plasmática", emoji: "🫧", color: "#14b8a6", simple: "La membrana que controla lo que entra y sale de la célula.", full: "Debajo de la pared celular. Regula la osmosis, el transporte de iones y nutrientes. Contiene canales de agua (acuaporinas) y transportadores específicos. Participa en la señalización hormonal (auxinas, citoquininas)." },
      { name: "Aparato de Golgi", emoji: "🟡", color: "#ca8a04", simple: "Empaqueta proteínas y fabrica materiales para la pared celular.", full: "En células vegetales es especialmente activo en la síntesis y secreción de polisacáridos para la pared celular (pectinas, hemicelulosas). Las vesículas de Golgi participan en la formación del fragmoplasto durante la citocinesis." },
      { name: "Ribosoma", emoji: "🟤", color: "#78350f", simple: "Fabrica las proteínas que la célula necesita para crecer y funcionar.", full: "Idénticos en función a los animales (ribosomas 80S en citoplasma). Además, los cloroplastos y mitocondrias tienen sus propios ribosomas 70S (de tipo procariota), evidencia de su origen endosimbiótico." },
    ],
  },
  {
    slug: "cuerpo-humano",
    uid: "035316622877438cb62de673b8f19217",
    title: "Cuerpo Humano",
    subtitle: "🫀 Anatomía Humana",
    accent: "#f87171",
    intro: "Explorá el cuerpo humano completo en 3D. Tocá los puntos ⓘ en el modelo o los sistemas de abajo.",
    structures: [
      { name: "Sistema Circulatorio", emoji: "🫀", color: "#ef4444", simple: "El corazón y los vasos sanguíneos llevan sangre y oxígeno a todo el cuerpo.", full: "Corazón + ~100.000 km de vasos (arterias, venas, capilares). Circulación mayor (corazón → cuerpo) y menor (corazón → pulmones). Bombea ~5 L/min en reposo, hasta 25 L/min en ejercicio intenso." },
      { name: "Sistema Respiratorio", emoji: "🫁", color: "#38bdf8", simple: "Los pulmones toman oxígeno del aire y eliminan el dióxido de carbono.", full: "Vías aéreas (nariz, laringe, tráquea, bronquios) + pulmones con ~300M alvéolos. Superficie de intercambio ~70 m². Respiramos ~20.000 veces/día. El diafragma es el principal músculo inspiratorio." },
      { name: "Sistema Digestivo", emoji: "🍽️", color: "#f97316", simple: "Transforma los alimentos en nutrientes que el cuerpo puede usar.", full: "Tubo digestivo de ~9 m (boca → ano) + glándulas accesorias (hígado, páncreas, vesícula). Divide los alimentos en nutrientes absorbibles: carbohidratos → glucosa, proteínas → aminoácidos, grasas → ácidos grasos." },
      { name: "Sistema Nervioso", emoji: "⚡", color: "#a855f7", simple: "El cerebro y los nervios controlan todo el cuerpo y procesan los sentidos.", full: "SNC (cerebro + cerebelo + tronco encefálico + médula espinal) + SNP (nervios craneales y espinales). ~86.000 millones de neuronas. Procesa información sensorial, coordina movimiento y regula funciones autónomas." },
      { name: "Sistema Esquelético", emoji: "🦴", color: "#94a3b8", simple: "Los 206 huesos dan estructura, protegen órganos y permiten el movimiento.", full: "206 huesos en adultos (305 en recién nacidos, se fusionan). Función: sostén mecánico, protección (cráneo → cerebro, costillas → pulmones/corazón), hematopoyesis (médula roja), reserva de calcio y fósforo." },
      { name: "Sistema Muscular", emoji: "💪", color: "#f59e0b", simple: "Los músculos permiten el movimiento del cuerpo y mantienen la postura.", full: "~600 músculos esqueléticos (~40% del peso corporal). Mecanismo: deslizamiento actina-miosina dependiente de ATP y Ca²⁺. Tipos: estriado esquelético (voluntario), liso (vísceras, involuntario) y cardíaco." },
      { name: "Sistema Endócrino", emoji: "🔬", color: "#10b981", simple: "Las glándulas producen hormonas que regulan el crecimiento y el metabolismo.", full: "Hipotálamo, hipófisis, tiroides, paratiroides, suprarrenales, páncreas endócrino, gónadas. Regula metabolismo, crecimiento, reproducción y respuesta al estrés. Las hormonas actúan en órganos diana a través de receptores específicos." },
      { name: "Sistema Inmune", emoji: "🛡️", color: "#22c55e", simple: "Protege al cuerpo de bacterias, virus y enfermedades.", full: "Inmunidad innata (barreras físicas, macrófagos, NK) y adaptativa (linfocitos T y B, anticuerpos). Los linfocitos B producen anticuerpos específicos; los T CD4⁺ coordinan la respuesta; los T CD8⁺ destruyen células infectadas." },
      { name: "Sistema Urinario", emoji: "💧", color: "#0ea5e9", simple: "Los riñones filtran la sangre y eliminan los desechos por la orina.", full: "Riñones (~1M nefronas cada uno) filtran 180 L de plasma/día → 1,5 L de orina. Regulan pH, concentración de electrolitos y presión arterial (sistema renina-angiotensina-aldosterona). Eliminan urea, creatinina y fármacos." },
      { name: "Sistema Reproductor", emoji: "🧬", color: "#f472b6", simple: "Permite la reproducción y la continuidad de la vida humana.", full: "Masculino: testículos (producen espermatozoides y testosterona), epidídimo, conductos deferentes, próstata. Femenino: ovarios (óvulos y estrógenos/progesterona), trompas, útero. La fertilización da origen a un zigoto diploide." },
      { name: "Piel (sistema tegumentario)", emoji: "🫂", color: "#a16207", simple: "La piel es el órgano más grande: protege, regula la temperatura y nos permite sentir.", full: "Órgano más grande (~2 m²). Capas: epidermis (queratina, melanocitos, células de Langerhans), dermis (colágeno, vasos, nervios) e hipodermis (grasa). Regula temperatura por sudoración y vasoconstricción/vasodilatación." },
    ],
  },
  {
    slug: "corazon",
    uid: "10472481071e4375b8233289c277d411",
    title: "Corazón Humano",
    subtitle: "🫀 Sistema Circulatorio",
    accent: "#f87171",
    intro: "Explorá la anatomía externa del corazón humano en 3D. Tocá los puntos ⓘ en el modelo o las estructuras de abajo.",
    structures: [
      { name: "Ventrículo Izquierdo", emoji: "🔴", color: "#ef4444", simple: "Bombea sangre con oxígeno a todo el cuerpo con mucha fuerza.", full: "Cámara de pared más gruesa (~12 mm) que genera presión sistólica (~120 mmHg). Expulsa sangre oxigenada a la aorta. Su hipertrofia indica hipertensión arterial crónica." },
      { name: "Ventrículo Derecho", emoji: "🩸", color: "#f97316", simple: "Envía sangre sin oxígeno a los pulmones para que se oxigene.", full: "Pared más delgada que el izquierdo (~3-4 mm). Genera presión pulmonar (~25 mmHg). Bombea sangre desoxigenada a los pulmones a través de la arteria pulmonar para el intercambio gaseoso." },
      { name: "Aurícula Izquierda", emoji: "🫀", color: "#ec4899", simple: "Recibe la sangre con oxígeno que viene de los pulmones.", full: "Recibe la sangre oxigenada de las 4 venas pulmonares. Pasa la sangre al ventrículo izquierdo a través de la válvula mitral (bicúspide). Sitio frecuente de fibrilación auricular." },
      { name: "Aurícula Derecha", emoji: "🩷", color: "#fb7185", simple: "Recibe la sangre usada del cuerpo antes de enviarla a los pulmones.", full: "Recibe sangre desoxigenada de la vena cava superior e inferior y el seno coronario. Comunica con el ventrículo derecho por la válvula tricúspide. Contiene el nódulo sinusal (marcapasos natural)." },
      { name: "Aorta", emoji: "🔴", color: "#dc2626", simple: "Es la arteria más grande: lleva sangre con oxígeno a todo el cuerpo.", full: "Arteria más grande del cuerpo (diámetro ~2,5 cm). Sale del ventrículo izquierdo. Tiene arco aórtico con ramas hacia cabeza y brazos, luego desciende dando ramas a órganos torácicos y abdominales." },
      { name: "Arteria Pulmonar", emoji: "🟣", color: "#a855f7", simple: "Lleva sangre sin oxígeno desde el corazón hasta los pulmones.", full: "Única arteria que transporta sangre desoxigenada. Sale del ventrículo derecho y se divide en arteria pulmonar derecha e izquierda. Es el inicio de la circulación menor o pulmonar." },
      { name: "Válvula Aórtica", emoji: "🔑", color: "#f59e0b", simple: "Es una 'puerta' que evita que la sangre vuelva al corazón después de salir.", full: "Válvula semilunar con 3 valvas (cúspides). Separa el ventrículo izquierdo de la aorta. Se abre en sístole y cierra en diástole. La estenosis aórtica es una de las valvulopatías más frecuentes." },
      { name: "Arterias Coronarias", emoji: "💛", color: "#eab308", simple: "Son los vasos que alimentan al propio corazón con sangre y oxígeno.", full: "Coronaria izquierda (descendente anterior y circunfleja) y derecha. Surgen de la raíz aórtica y riegan el miocardio. Su obstrucción causa infarto de miocardio. Objeto de bypass coronario y stents." },
      { name: "Pericardio", emoji: "🛡️", color: "#64748b", simple: "Es la bolsa protectora que envuelve y protege al corazón.", full: "Saco fibroso de doble capa (parietal y visceral) con líquido pericárdico (~20-50 mL) que reduce la fricción. Fija el corazón al mediastino. La pericarditis causa dolor torácico intenso." },
    ],
  },
  {
    slug: "cerebro",
    uid: "28c8971e11334e8b97a2a0d6235992e8",
    title: "Cerebro Humano",
    subtitle: "🧠 Sistema Nervioso Central",
    accent: "#c084fc",
    intro: "Explorá la anatomía del cerebro humano en 3D con sus partes etiquetadas. Tocá los puntos ⓘ o las estructuras de abajo.",
    structures: [
      { name: "Corteza Cerebral", emoji: "🧠", color: "#a855f7", simple: "Es la capa exterior del cerebro donde se procesa el pensamiento, la memoria y los sentidos.", full: "Capa de sustancia gris (~2-4 mm) con ~16.000 millones de neuronas. Organizada en lóbulos: frontal (razonamiento, movimiento), parietal (sensación), temporal (audición, memoria) y occipital (visión). Tiene circunvoluciones que aumentan la superficie." },
      { name: "Lóbulo Frontal", emoji: "💭", color: "#8b5cf6", simple: "Controla el movimiento, las decisiones, el lenguaje y la personalidad.", full: "Mayor lóbulo cerebral. Contiene la corteza motora primaria (control voluntario del movimiento), el área de Broca (producción del lenguaje) y la corteza prefrontal (razonamiento, planificación, control de impulsos)." },
      { name: "Lóbulo Parietal", emoji: "👋", color: "#7c3aed", simple: "Procesa las sensaciones del cuerpo: tacto, temperatura y dolor.", full: "Contiene la corteza somatosensorial primaria (procesa tacto, propiocepción, temperatura y dolor). Integra información sensorial para la percepción espacial. El área de Wernicke (comprensión del lenguaje) está en el límite parieto-temporal." },
      { name: "Cerebelo", emoji: "⚖️", color: "#6d28d9", simple: "Coordina el equilibrio y los movimientos precisos del cuerpo.", full: "Situado en la fosa craneal posterior. Contiene más neuronas que todo el resto del cerebro. Coordina la precisión, el tono muscular y el equilibrio. Recibe info del córtex motor y la integra con señales propioceptivas y vestibulares." },
      { name: "Tronco Encefálico", emoji: "🔌", color: "#5b21b6", simple: "Conecta el cerebro con la médula espinal y controla funciones vitales como respirar.", full: "Formado por mesencéfalo, protuberancia y bulbo raquídeo. Controla funciones autónomas vitales: frecuencia cardíaca, respiración, presión arterial. Contiene los núcleos de los pares craneales III-XII." },
      { name: "Tálamo", emoji: "📡", color: "#4c1d95", simple: "Es el 'relé' del cerebro: filtra y distribuye toda la información sensorial.", full: "Estructura diencefálica de doble núcleo. Es la puerta de entrada a la corteza cerebral para casi toda la información sensorial (excepto olfativa). Regula la conciencia, el sueño y la alerta. Sus núcleos se asocian a funciones específicas corticales." },
      { name: "Hipocampo", emoji: "🐎", color: "#7e22ce", simple: "Ayuda a guardar nuevos recuerdos y orientarse en el espacio.", full: "Estructura del sistema límbico (lóbulo temporal medial). Esencial para la formación de memoria declarativa (episódica y semántica) y la navegación espacial. En Alzheimer, es una de las primeras regiones afectadas por la neurodegeneración." },
      { name: "Cuerpo Calloso", emoji: "🔗", color: "#9333ea", simple: "Es el puente de fibras que conecta el hemisferio izquierdo con el derecho.", full: "Mayor comisura interhemisférica: ~200-250 millones de axones mielinizados. Permite la comunicación y coordinación entre los dos hemisferios. Su sección (callosotomía) se realiza en epilepsia refractaria severa." },
    ],
  },
  {
    slug: "pulmones",
    uid: "ce09f4099a68467880f46e61eb9a3531",
    title: "Sistema Respiratorio",
    subtitle: "💨 Pulmones y Vías Aéreas",
    accent: "#38bdf8",
    intro: "Explorá los pulmones y las vías respiratorias en 3D. Tocá los puntos ⓘ en el modelo o las estructuras de abajo.",
    structures: [
      { name: "Pulmón Derecho", emoji: "🫁", color: "#0ea5e9", simple: "El pulmón más grande, dividido en 3 partes (lóbulos). Toma el oxígeno del aire.", full: "Mayor que el izquierdo. Tiene 3 lóbulos (superior, medio e inferior) separados por las cisuras horizontal y oblicua. Contiene ~300 millones de alvéolos. Ocupa la mayor parte de la cavidad torácica derecha." },
      { name: "Pulmón Izquierdo", emoji: "🫁", color: "#38bdf8", simple: "El pulmón más pequeño, con 2 partes. Está al lado del corazón.", full: "Tiene 2 lóbulos (superior e inferior) separados por la cisura oblicua. Es más pequeño por la presencia del corazón (escotadura cardíaca). Contiene la língula, homóloga del lóbulo medio derecho." },
      { name: "Tráquea", emoji: "🎺", color: "#7dd3fc", simple: "Es el tubo principal por donde el aire entra y llega a los pulmones.", full: "Conducto cartilaginoso (18-20 anillos en C de cartílago hialino) de ~12 cm de longitud. Se bifurca en la carina en los dos bronquios principales. Revestida por epitelio ciliado pseudoestratificado que atrapa partículas." },
      { name: "Bronquios Principales", emoji: "🌿", color: "#22d3ee", simple: "Son las ramas del tubo principal que llevan el aire a cada pulmón.", full: "Bronquio derecho es más corto, ancho y vertical (mayor riesgo de aspiración). Cada bronquio se divide en bronquios lobares, segmentarios y luego en bronquiolos. El árbol bronquial tiene ~23 generaciones de ramificación." },
      { name: "Alvéolos", emoji: "🫧", color: "#06b6d4", simple: "Son pequeñas bolsitas donde el oxígeno pasa a la sangre y sale el dióxido de carbono.", full: "Unidades funcionales del intercambio gaseoso. Paredes formadas por neumocitos tipo I (intercambio) y tipo II (producen surfactante que evita el colapso). La membrana alvéolo-capilar tiene ~0,2 µm de grosor para difusión eficiente de O₂ y CO₂." },
      { name: "Pleura", emoji: "🛡️", color: "#0891b2", simple: "Es la doble envoltura que protege los pulmones y permite que se expandan.", full: "Membrana serosa de doble capa: visceral (adherida al pulmón) y parietal (adherida a la pared torácica). La cavidad pleural contiene ~10-20 mL de líquido lubricante. El neumotórax (entrada de aire) colapsa el pulmón." },
      { name: "Diafragma", emoji: "💪", color: "#0284c7", simple: "Es el músculo principal de la respiración: al bajar, hace entrar aire a los pulmones.", full: "Principal músculo inspiratorio. Al contraerse se aplana, aumentando el volumen torácico y generando presión negativa que infla los pulmones. Inervado por el nervio frénico (C3-C5). Separa cavidad torácica de la abdominal." },
      { name: "Capilares Pulmonares", emoji: "🩸", color: "#ef4444", simple: "Son los vasos sanguíneos tiny que rodean cada bolsita de aire para intercambiar gases.", full: "Red capilar densa (~280.000 millones de capilares) que rodea los alvéolos. Superficie total de intercambio ~70 m². La hemoglobina transporta O₂ y CO₂. La hematosis (intercambio gaseoso) ocurre en ~0,25 segundos." },
    ],
  },
  {
    slug: "digestivo",
    uid: "2d3771dd6b8940ffa2312bd97aca6fc3",
    title: "Sistema Digestivo",
    subtitle: "🍽️ Aparato Digestivo",
    accent: "#fb923c",
    intro: "Explorá el sistema digestivo humano en 3D. Tocá los puntos ⓘ en el modelo o las estructuras de abajo.",
    structures: [
      { name: "Boca y Esófago", emoji: "👄", color: "#f97316", simple: "La boca tritura los alimentos y el esófago los lleva al estómago.", full: "Boca: masticación mecánica y digestión química inicial (amilasa salival). Deglución involucra 30+ músculos. Esófago: tubo muscular de ~25 cm con peristalsis para transportar el bolo alimenticio. Esfínter esofágico inferior previene el reflujo." },
      { name: "Estómago", emoji: "💛", color: "#eab308", simple: "Mezcla los alimentos con jugos ácidos para descomponerlos.", full: "Órgano muscular en forma de J. Produce HCl (pH 1,5-2) y pepsina para la digestión proteica. Las células parietales secretan ácido; las principales, pepsinógeno. La mucosa produce mucus protector. Vacía su contenido (quimo) en 2-4 horas." },
      { name: "Intestino Delgado", emoji: "🌀", color: "#22c55e", simple: "Es el tubo más largo: absorbe los nutrientes de los alimentos.", full: "Mide ~6-7 m. Dividido en duodeno (digestión con enzimas pancreáticas y bilis), yeyuno (absorción principal) e íleon. Tiene vellosidades y microvellosidades que aumentan la superficie absortiva a ~250 m². Absorbe el 95% de los nutrientes." },
      { name: "Intestino Grueso", emoji: "🟤", color: "#92400e", simple: "Absorbe agua y forma las heces con lo que no se digirió.", full: "Mide ~1,5 m. Incluye ciego, colon (ascendente, transverso, descendente, sigmoide) y recto. Absorbe agua y electrolitos. Contiene la microbiota intestinal (~100 billones de bacterias). Fermenta fibra no digerible produciendo ácidos grasos de cadena corta." },
      { name: "Hígado", emoji: "🟫", color: "#b45309", simple: "Produce la bilis, filtra la sangre y procesa los nutrientes absorbidos.", full: "Mayor glándula del cuerpo (~1,5 kg). Produce bilis para emulsionar grasas. Metaboliza glucosa (glucogénesis/glucólisis), sintetiza proteínas plasmáticas (albúmina, factores de coagulación) y detoxifica fármacos y toxinas. Recibe sangre portal del intestino." },
      { name: "Vesícula Biliar", emoji: "💚", color: "#16a34a", simple: "Almacena la bilis del hígado y la libera cuando comés grasas.", full: "Saco de ~8 cm que concentra y almacena bilis (hasta 50 mL). Al ingerir grasas, la colecistoquinina (CCK) estimula su contracción y libera bilis por el conducto colédoco al duodeno. Los cálculos biliares son frecuentes (10-20% de adultos)." },
      { name: "Páncreas", emoji: "🩶", color: "#64748b", simple: "Produce jugos digestivos y la insulina que regula el azúcar en sangre.", full: "Glándula mixta: exocrina (jugo pancreático con lipasas, proteasas, amilasa para digestión en duodeno) y endocrina (islotes de Langerhans — células β producen insulina, células α glucagón). La diabetes tipo 1 destruye las células β." },
      { name: "Apéndice", emoji: "📍", color: "#f43f5e", simple: "Es una pequeña extensión del intestino grueso. Puede inflamarse (apendicitis).", full: "Divertículo ciego de ~8 cm unido al ciego. Tiene tejido linfoide (MALT) que forma parte del sistema inmune intestinal. Puede albergar bacterias beneficiosas. Su inflamación (apendicitis) requiere extirpación quirúrgica urgente." },
    ],
  },
];

export function getModule(slug: string): ModuleData | undefined {
  return MODULES.find(m => m.slug === slug);
}
