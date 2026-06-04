"use client";
import SketchfabViewer from "@/components/SketchfabViewer";

export default function OrganosSentidosViewer() {
  return (
    <SketchfabViewer
      slug="sentidos"
      moduleName="Órganos de los Sentidos"
      uid="4bf3236c8fe2407ea3f494a93b8f5aa2"
      title="Órganos de los Sentidos"
      subtitle="👁️ Los 5 Sentidos"
      accent="#22d3ee"
      intro="Explorá los 5 sentidos en 3D. Seleccioná cada órgano para ver su anatomía y entender cómo capta información del entorno y la envía al cerebro."
      structures={[]}
      models={[
        {
          id: "ojo",
          name: "Ojo",
          emoji: "👁️",
          uid: "4bf3236c8fe2407ea3f494a93b8f5aa2",
          structures: [
            {
              name: "Córnea",
              emoji: "🔵",
              color: "#e0f2fe",
              simple: "Es la capa transparente delantera del ojo que deja entrar la luz y la enfoca.",
              full: "Tejido avascular transparente de 5 capas (~0,5 mm de grosor). Proporciona ~2/3 del poder refractivo total del ojo (~43 dioptrías). Muy inervada por el nervio trigémino — extremadamente sensible al tacto. La queratitis puede opacarla.",
            },
            {
              name: "Iris y Pupila",
              emoji: "🟢",
              color: "#38bdf8",
              simple: "El iris es el anillo de color del ojo. La pupila es el hueco negro que se agranda en la oscuridad y se achica con la luz.",
              full: "Iris: diafragma muscular pigmentado (la melanina determina el color). Músculo esfínter pupilar (parasimpático): contrae la pupila (miosis) en luz brillante. Músculo dilatador pupilar (simpático): dilata (midriasis) en oscuridad. El reflejo pupilar evalúa la función del tronco encefálico.",
            },
            {
              name: "Cristalino",
              emoji: "🔍",
              color: "#7dd3fc",
              simple: "Es la lente del ojo que enfoca los objetos cercanos y lejanos cambiando su forma.",
              full: "Lente biconvexa avascular y transparente (~10 mm diámetro). La acomodación (cambio de curvatura por músculos ciliares y zónulas de Zinn) permite enfocar a distintas distancias. Con la edad pierde elasticidad (presbicia). Las cataratas lo opacan.",
            },
            {
              name: "Retina",
              emoji: "🟡",
              color: "#fbbf24",
              simple: "Es la 'pantalla' del ojo: tiene células sensibles a la luz que convierten la imagen en señales eléctricas.",
              full: "Capa neural de 10 estratos que tapiza el fondo del ojo. ~120 millones de bastones (visión blanco/negro, poca luz) y ~6 millones de conos (visión de color, alta agudeza). La fóvea central tiene densidad máxima de conos. El punto ciego carece de fotorreceptores.",
            },
            {
              name: "Nervio Óptico",
              emoji: "🟣",
              color: "#a855f7",
              simple: "Es el cable que lleva la imagen desde el ojo hasta el cerebro.",
              full: "Par craneal II. ~1,2 millones de axones de células ganglionares de la retina. Los nervios ópticos se cruzan en el quiasma óptico (fibras nasales se decusan). Las señales llegan al cuerpo geniculado lateral del tálamo y luego a la corteza visual occipital.",
            },
            {
              name: "Humor Vítreo y Acuoso",
              emoji: "💧",
              color: "#bae6fd",
              simple: "Son los líquidos que llenan el ojo y mantienen su forma esférica.",
              full: "Humor acuoso: líquido claro producido por el cuerpo ciliar que llena las cámaras anterior y posterior. Regula la presión intraocular. Humor vítreo: gel transparente (99% agua) que llena la cámara posterior. Mantiene la forma del globo ocular.",
            },
            {
              name: "Músculos Extraoculares",
              emoji: "⚙️",
              color: "#0ea5e9",
              simple: "Son los 6 músculos que mueven el ojo en todas las direcciones para que podamos mirar sin mover la cabeza.",
              full: "6 músculos por ojo: recto superior, inferior, medial y lateral; oblicuo superior e inferior. Inervados por los pares craneales III (motor ocular común), IV (troclear) y VI (abducens). Permiten movimientos conjugados precisos (sacádicos, de seguimiento, convergencia).",
            },
          ],
        },
        {
          id: "oido",
          name: "Oído",
          emoji: "👂",
          uid: "f80bda64666c4b8aaac8f63b7b82a0a0",
          structures: [
            {
              name: "Oído Externo",
              emoji: "👂",
              color: "#f97316",
              simple: "Es la parte visible: el pabellón auricular recoge las ondas de sonido y las guía hacia adentro.",
              full: "Pabellón auricular (cartílago elástico cubierto de piel) + conducto auditivo externo (~2,5 cm). El pabellón canaliza las ondas sonoras. El conducto tiene pelos y glándulas ceruminosas que protegen el oído externo de cuerpos extraños.",
            },
            {
              name: "Tímpano",
              emoji: "🔘",
              color: "#fb923c",
              simple: "Es la membrana que vibra cuando llegan las ondas de sonido, como el parche de un tambor.",
              full: "Membrana fibrosa translúcida de ~10 mm de diámetro con forma cónica. Las ondas sonoras la hacen vibrar. Las vibraciones se transmiten mecánicamente a los huesecillos del oído medio. La perforación timpánica produce hipoacusia de conducción.",
            },
            {
              name: "Huesecillos: Martillo, Yunque y Estribo",
              emoji: "🦴",
              color: "#ea580c",
              simple: "Son los 3 huesos más pequeños del cuerpo. Amplifican las vibraciones del tímpano para que puedan moverse los líquidos del oído interno.",
              full: "Cadena osicular: martillo (unido al tímpano) → yunque (intermediario) → estribo (transmite a la ventana oval). Esta palanca mecánica amplifica el sonido ~22 veces y adapta la impedancia aire/líquido. El músculo del estribo protege ante sonidos muy fuertes.",
            },
            {
              name: "Cóclea",
              emoji: "🐌",
              color: "#10b981",
              simple: "Es la 'caracola' del oído interno: convierte las vibraciones en señales eléctricas que van al cerebro.",
              full: "Estructura espiral con 2,5 vueltas llena de perilinfa y endolinfa. El órgano de Corti sobre la membrana basilar contiene ~16.000 células ciliadas. Tonotopía: frecuencias agudas en la base, graves en el ápex. Las señales van al nervio coclear (VIII par craneal).",
            },
            {
              name: "Sistema Vestibular",
              emoji: "⚖️",
              color: "#0ea5e9",
              simple: "Es el órgano del equilibrio: detecta si estamos en movimiento o inclinados.",
              full: "Utrículo y sáculo detectan aceleración lineal y gravedad (otoconias de carbonato cálcico). 3 canales semicirculares perpendiculares entre sí detectan aceleración angular en los 3 planos del espacio. Las señales van al nervio vestibular (VIII par) y luego al cerebelo.",
            },
            {
              name: "Trompa de Eustaquio",
              emoji: "〰️",
              color: "#f59e0b",
              simple: "Es el canal que conecta el oído con la garganta y equilibra la presión, como cuando bostezamos en un avión.",
              full: "Conducto que conecta el oído medio con la nasofaringe (~35 mm). Normalmente cerrada, se abre al bostezar o deglutir equilibrando la presión a ambos lados del tímpano. Su obstrucción (por resfríos) causa sensación de oído tapado y favorece otitis media.",
            },
          ],
        },
        {
          id: "nariz",
          name: "Nariz",
          emoji: "👃",
          uid: "1f0a6a13466941018f777e0370173c6c",
          structures: [
            {
              name: "Mucosa Olfatoria",
              emoji: "🟡",
              color: "#fbbf24",
              simple: "Es la zona del techo de la nariz donde están las células que detectan los olores.",
              full: "Localizada en el techo de la cavidad nasal (2-5 cm²). Contiene ~5-6 millones de neuronas olfatorias bipolares (células sensoriales primarias). Se regeneran continuamente (plasticidad única). Recubiertas de moco que atrapa las moléculas odoríferas.",
            },
            {
              name: "Neuronas Olfatorias",
              emoji: "🔵",
              color: "#3b82f6",
              simple: "Son las células que 'huelen': tienen cilios con receptores que detectan las moléculas del aire.",
              full: "Neuronas bipolares con ~20 cilios olfatorios en la superficie apical cargados de receptores odorantes (GPCRs). Los humanos tenemos ~400 tipos de receptores olfatorios. Cada neurona expresa un solo tipo de receptor. El axón cruza la lámina cribiforme hacia el bulbo olfatorio.",
            },
            {
              name: "Bulbo Olfatorio",
              emoji: "🟢",
              color: "#22c55e",
              simple: "Es la primera estación del cerebro que procesa los olores: recibe la señal directamente de la nariz.",
              full: "Estructura del prosencéfalo anterior. Los axones de las neuronas olfatorias sinaptan en los glomérulos del bulbo. Es la única vía sensorial que llega a la corteza sin pasar por el tálamo. Conecta directamente con la amígdala y el hipocampo, explicando la fuerte relación entre olfato y memoria/emoción.",
            },
            {
              name: "Cornetes Nasales",
              emoji: "🌀",
              color: "#a78bfa",
              simple: "Son las láminas óseas enrolladas dentro de la nariz que calientan y humedecen el aire antes de que llegue a los pulmones.",
              full: "3 cornetes (inferior, medio, superior) en cada fosa nasal. Aumentan la superficie de la mucosa nasal. Calientan y humedecen el aire inspirado, y atrapan partículas. El cornete superior está relacionado con el olfato. La obstrucción (por inflamación) impide el flujo de aire hacia la mucosa olfatoria.",
            },
            {
              name: "Los ~400 Receptores Olfatorios",
              emoji: "🧬",
              color: "#c084fc",
              simple: "Tenemos casi 400 tipos de 'detectores' de olores. Combinándolos podemos reconocer más de un billón de olores distintos.",
              full: "La familia de genes olfatorios es la más grande del genoma humano (~800 genes, ~400 funcionales). Cada receptor responde a múltiples odorantes y viceversa. El patrón de activación de los ~400 receptores codifica cada olor de manera única. Las enfermedades como el Parkinson pueden deteriorar el olfato tempranamente.",
            },
            {
              name: "Anosmia y Parosmia",
              emoji: "⚠️",
              color: "#f43f5e",
              simple: "La anosmia es la pérdida del olfato. Puede ocurrir por resfríos, COVID-19 o enfermedades neurológicas.",
              full: "Anosmia: pérdida total del olfato. Hiposmia: disminución. Parosmia: distorsión de los olores. Causas: obstrucción nasal, infecciones virales (el COVID-19 causó anosmia en millones), traumatismo craneoencefálico, enfermedades neurodegenerativas (Parkinson, Alzheimer). El olfato puede regenerarse gracias a la renovación de las neuronas olfatorias.",
            },
          ],
        },
        {
          id: "lengua",
          name: "Lengua",
          emoji: "👅",
          uid: "834e2dc8725d486f9f875a552d67ddd7",
          structures: [
            {
              name: "Papilas Gustativas",
              emoji: "🟤",
              color: "#a16207",
              simple: "Son las pequeñas protuberancias que cubren la lengua y contienen los botones gustativos que detectan sabores.",
              full: "4 tipos: caliciformes (en V posterior, más grandes, 7-12 en total), foliadas (pliegues laterales), fungiformes (en hongo, toda la lengua) y filiformes (textura, sin gusto). Cada papila contiene múltiples botones gustativos (caliciformes: hasta 300 botones por papila).",
            },
            {
              name: "Los 5 Sabores Básicos",
              emoji: "⭐",
              color: "#d97706",
              simple: "Los 5 sabores que detectamos son: dulce, amargo, ácido, salado y umami (sabroso). No existen 'zonas' separadas en la lengua.",
              full: "Dulce: glucosa, fructosa → receptores T1R2+T1R3. Amargo: compuestos tóxicos → receptores T2R (alertan de toxinas). Ácido: H⁺ (acidez). Salado: Na⁺ (canales iónicos). Umami: glutamato → receptores T1R1+T1R3 (indica proteínas). El 'mito' de las zonas específicas es falso: todos los sabores se detectan en toda la lengua.",
            },
            {
              name: "Células Gustativas",
              emoji: "🔬",
              color: "#b45309",
              simple: "Son las células dentro de los botones gustativos que detectan las moléculas del alimento y envían la señal al cerebro.",
              full: "Cada botón gustativo contiene ~50-100 células gustativas con microvellosidades (cilios gustativos) que sobresalen a través del poro gustativo. Se renuevan cada ~10-14 días. Las moléculas del alimento se unen a receptores en los cilios y generan potenciales de receptor.",
            },
            {
              name: "Nervios del Gusto",
              emoji: "⚡",
              color: "#78350f",
              simple: "El gusto de los 2/3 anteriores de la lengua va al cerebro por el nervio facial. El tercio posterior por el glosofaríngeo.",
              full: "2/3 anteriores de la lengua: cuerda del tímpano (rama del VII par, facial). 1/3 posterior: nervio glosofaríngeo (IX par). Paladar blando y epiglotis: nervio vago (X par). Las señales llegan al núcleo del tracto solitario en el bulbo raquídeo y ascienden al tálamo y corteza gustativa (ínsula).",
            },
            {
              name: "Músculos de la Lengua",
              emoji: "💪",
              color: "#92400e",
              simple: "La lengua es un músculo. Tiene 8 músculos que le permiten moverse en todas las direcciones para hablar y tragar.",
              full: "4 músculos intrínsecos (cambian forma: longitudinal superior/inferior, transverso, vertical) + 4 extrínsecos (cambian posición: geniogloso, hiogloso, estilogloso, palatogloso). Todos inervados por el nervio hipogloso (XII par) excepto el palatogloso (X par). La lengua es esencial para la articulación del habla, masticación y deglución.",
            },
          ],
        },
        {
          id: "piel",
          name: "Piel",
          emoji: "🤚",
          uid: "56c98c3710d94360a3481dc81aa4910f",
          structures: [
            {
              name: "Epidermis",
              emoji: "🟫",
              color: "#d97706",
              simple: "Es la capa más externa de la piel: una barrera resistente que nos protege del ambiente.",
              full: "Epitelio estratificado escamoso queratinizado. 5 estratos: basal (células madre), espinoso, granuloso, lúcido (solo palmas y plantas), córneo (células muertas queratinizadas). Se renueva cada ~28 días. Contiene melanocitos (pigmento, protección UV), células de Langerhans (inmunidad) y de Merkel (tacto fino).",
            },
            {
              name: "Dermis",
              emoji: "🔴",
              color: "#b45309",
              simple: "Es la capa media de la piel, con fibras resistentes, vasos sanguíneos y los receptores del tacto.",
              full: "Tejido conectivo denso con fibras de colágeno y elastina. Contiene vasos sanguíneos (nutren la piel y regulan la temperatura), nervios, folículos pilosos, glándulas sebáceas y sudoríparas. La dermis papilar (superficial) tiene papilas con receptores táctiles.",
            },
            {
              name: "Corpúsculos de Meissner",
              emoji: "✋",
              color: "#f59e0b",
              simple: "Son los receptores del tacto fino: detectan caricias y texturas. Están en yemas de los dedos y labios.",
              full: "Mecanorreceptores de adaptación rápida en las papilas dérmicas. Altamente concentrados en yemas de los dedos, palmas, labios y genitales. Detectan tacto ligero, textura y vibración de baja frecuencia (~30 Hz). Son la base de la lectura Braille.",
            },
            {
              name: "Corpúsculos de Pacini",
              emoji: "🫴",
              color: "#ea580c",
              simple: "Son los receptores de presión profunda y vibración: detectan cuando apretamos algo fuerte o vibraciones.",
              full: "Mecanorreceptores de adaptación muy rápida en la dermis profunda e hipodermis. Detectan presión intensa y vibración de alta frecuencia (200-300 Hz). Su estructura laminar en 'cebolla' amortigua las deformaciones lentas. También en tendones, articulaciones y órganos internos.",
            },
            {
              name: "Nociceptores (Dolor)",
              emoji: "⚠️",
              color: "#ef4444",
              simple: "Son los receptores del dolor: terminaciones nerviosas libres que alertan al cerebro cuando algo daña la piel.",
              full: "Terminaciones nerviosas libres sin cápsula especializada. Detectan estímulos mecánicos intensos, temperatura extrema (>45°C o <15°C), productos químicos nocivos y mediadores inflamatorios (prostaglandinas, bradiquinina). Fibras Aδ: dolor agudo rápido. Fibras C: dolor sordo lento. Fundamentales para la supervivencia.",
            },
            {
              name: "Glándulas Sudoríparas y Regulación Térmica",
              emoji: "💧",
              color: "#0ea5e9",
              simple: "Las glándulas sudoríparas producen sudor para enfriar el cuerpo. La piel también regula la temperatura abriendo o cerrando los vasos sanguíneos.",
              full: "~2-4 millones de glándulas sudoríparas ecrinas por cuerpo. El sudor (agua + sales + urea) enfría por evaporación. Las glándulas apocrinas (axilas, ingles) producen secreciones odoríferas. La vasoconstricción conserva calor y la vasodilatación lo disipa. La piel es el principal órgano de termorregulación.",
            },
          ],
        },
      ]}
    />
  );
}
