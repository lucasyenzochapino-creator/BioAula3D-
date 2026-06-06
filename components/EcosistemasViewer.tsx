"use client";
import SketchfabViewer from "@/components/SketchfabViewer";

export default function EcosistemasViewer() {
  return (
    <SketchfabViewer
      slug="ecosistemas"
      moduleName="Ecosistemas"
      uid="f9d960844a2d49b7a4b06d843f92eadf"
      title="Ecosistemas y Biomas"
      subtitle="🌳 Ecología y Biodiversidad"
      accent="7A8F5E"
      intro="Un ecosistema es la red de relaciones entre los seres vivos y su ambiente. Explorá 4 biomas del planeta: selva tropical, arrecife de coral, desierto y ártico."
      structures={[]}
      models={[
        {
          id: "selva",
          name: "Selva",
          emoji: "🌿",
          uid: "f9d960844a2d49b7a4b06d843f92eadf",
          structures: [
            {
              name: "Productores (Plantas y Algas)",
              emoji: "🌿",
              color: "#6B9A7F",
              simple: "Son los seres vivos que fabrican su propio alimento con la luz solar.",
              full: "Organismos autótrofos fotosintetizadores que convierten CO₂ + H₂O + energía solar en glucosa y O₂. Son la base de todas las cadenas alimentarias. La selva tropical tiene la mayor densidad de productores del planeta: árboles emergentes, dosel, sotobosque y epífitas forman hasta 5 estratos verticales.",
            },
            {
              name: "Consumidores Primarios (Herbívoros)",
              emoji: "🦋",
              color: "#86efac",
              simple: "Son los animales que comen directamente las plantas.",
              full: "Primer nivel de consumidores heterótrofos. En la selva incluyen insectos (hormigas, mariposas), aves frugívoras, tapires, monos y perezosos. Solo el ~10% de la energía del nivel anterior se transfiere. La altísima biodiversidad vegetal sustenta una enorme diversidad de herbívoros especializados.",
            },
            {
              name: "Consumidores Secundarios y Terciarios",
              emoji: "🐆",
              color: "#5B8A6F",
              simple: "Son los carnívoros que cazan a los herbívoros. El jaguar es el superdepredador de la selva americana.",
              full: "En la selva tropical los depredadores incluyen jaguar (Panthera onca), anaconda, águila harpía y caimán. Regulan las poblaciones de herbívoros. La red trófica es extremadamente compleja: una especie puede alimentarse de decenas de presas distintas.",
            },
            {
              name: "Descomponedores",
              emoji: "🍄",
              color: "#bbf7d0",
              simple: "Son hongos y bacterias que reciclan la materia de los seres muertos.",
              full: "En la selva tropical la descomposición es muy rápida por el calor y la humedad. Los hongos micorrícicos dominan el suelo y conectan a los árboles entre sí. Las bacterias descomponen la materia orgánica en pocas semanas, liberando CO₂, agua y minerales al suelo.",
            },
            {
              name: "Biodiversidad de la Selva Tropical",
              emoji: "🌺",
              color: "#166534",
              simple: "La selva tropical tiene más del 50% de todas las especies del planeta en solo el 7% de la superficie terrestre.",
              full: "La selva ecuatorial (Amazonas, Congo, Borneo) posee la mayor biodiversidad del planeta. Por hectárea puede haber 300 especies de árboles distintos vs. 10-20 en un bosque templado. Esta biodiversidad se debe al clima estable, alta lluvia (>2000 mm/año) y ausencia de estaciones extremas.",
            },
            {
              name: "Deforestación y Cambio Climático",
              emoji: "⚠️",
              color: "#9A8A6C",
              simple: "La selva regula el clima global. Su destrucción libera enormes cantidades de CO₂.",
              full: "El Amazonas almacena ~120 mil millones de toneladas de carbono. Su deforestación libera CO₂ y reduce la lluvia regional. El punto de no retorno se estima cuando se pierda el 20-25% de la selva amazónica (hoy ya perdida un ~17%). Las selvas también generan 'ríos aéreos' que llevan lluvia a regiones distantes.",
            },
          ],
        },
        {
          id: "coral",
          name: "Arrecife",
          emoji: "🪸",
          uid: "8bbfe22f29094e009fb0133f95c4b7f5",
          structures: [
            {
              name: "Corales — Constructores del Arrecife",
              emoji: "🪸",
              color: "#8A7A5C",
              simple: "Los corales son animales (pólipos) que viven en simbiosis con algas y construyen el arrecife con sus esqueletos de carbonato de calcio.",
              full: "Los corales son cnidarios coloniales. Sus células contienen zooxantelas (algas simbióticas) que realizan fotosíntesis y aportan hasta el 90% de la energía del coral. El esqueleto de CaCO₃ acumula el arrecife durante miles de años. El blanqueamiento coralino ocurre cuando el estrés térmico expulsa las zooxantelas.",
            },
            {
              name: "Peces de Arrecife — Red Trófica",
              emoji: "🐠",
              color: "#9A8A6C",
              simple: "El arrecife alberga miles de especies de peces con roles distintos en la cadena alimentaria.",
              full: "Los peces herbívoros (cirujanos, pargos) controlan el algas y permiten que los corales sobrevivan. Los peces carnívoros (meros, barracudas) regulan las poblaciones de peces menores. Los tiburones de arrecife son superdepredadores clave. La sobreexplotación de cualquier nivel trófico colapsa el ecosistema.",
            },
            {
              name: "Importancia Ecológica",
              emoji: "🌊",
              color: "#0ea5e9",
              simple: "Los arrecifes cubren el 0,1% del fondo marino pero albergan más del 25% de todas las especies marinas.",
              full: "Los arrecifes de coral son el ecosistema más biodiverso del océano. Proveen alimento a >500 millones de personas, protegen costas de la erosión, generan turismo y tienen un valor económico estimado en 375 mil millones de dólares/año. El arrecife de la Gran Barrera australiana tiene >1500 especies de peces y >350 de corales.",
            },
            {
              name: "Blanqueamiento y Acidificación",
              emoji: "⚠️",
              color: "#ef4444",
              simple: "El calentamiento del mar hace que los corales expulsen sus algas simbióticas y se blanqueen. Si dura mucho, el coral muere.",
              full: "El blanqueamiento coralino ocurre cuando la temperatura supera 1°C la media estival. El CO₂ disuelto acidifica el océano (pH bajó de 8,2 a 8,1 desde la Revolución Industrial), dificultando que los corales formen sus esqueletos (CaCO₃). En 2016 y 2017 el 50% de la Gran Barrera australiana se blanqueó.",
            },
            {
              name: "Ciclo de Nutrientes en el Arrecife",
              emoji: "🔄",
              color: "#7dd3fc",
              simple: "En el arrecife el reciclaje de nutrientes es muy eficiente porque el agua tropical es pobre en nutrientes.",
              full: "A diferencia de otros ecosistemas, el arrecife existe en aguas oligotróficas (pobres en nutrientes). La simbiosis coral-zooxantela permite retener y reciclar nutrientes dentro del sistema casi sin pérdidas. Las bacterias descomponen la materia orgánica rápidamente, cerrando el ciclo. Esta eficiencia explica por qué hay tanta vida en aguas tan 'pobres'.",
            },
          ],
        },
        {
          id: "desierto",
          name: "Desierto",
          emoji: "🌵",
          uid: "99865b3ea39040b18786b8654921a75d",
          structures: [
            {
              name: "Adaptaciones de las Plantas",
              emoji: "🌵",
              color: "#f59e0b",
              simple: "Las plantas del desierto tienen adaptaciones especiales para sobrevivir sin agua: espinas, tallos gruesos y raíces largas.",
              full: "Las suculentas (cactus, agaves) almacenan agua en tejidos esponjosos. Usan el metabolismo CAM (ácido crasuláceo): abren estomas de noche para reducir la pérdida de agua. Las raíces son muy extensas (hasta 50 m horizontales) para capturar agua de lluvia rápidamente. Las espinas reducen la evaporación y ahuyentan herbívoros.",
            },
            {
              name: "Fauna del Desierto",
              emoji: "🦎",
              color: "#d97706",
              simple: "Los animales del desierto son activos de noche (nocturnos) para evitar el calor del día.",
              full: "Reptiles (lagartijas, serpientes) son poiquilotermos: regulan su temperatura con el ambiente. Concentran la orina para conservar agua. Los camellos almacenan grasa (no agua) en su joroba para metabolizarla en agua metabólica. Los fennecs tienen orejas grandes para disipar calor. Muchos pequeños mamíferos estivan durante la temporada seca.",
            },
            {
              name: "Ciclo del Agua en el Desierto",
              emoji: "💧",
              color: "#bae6fd",
              simple: "El agua es el recurso más escaso y valioso. Llueve menos de 250 mm al año.",
              full: "Los desiertos cálidos (Sahara, Atacama) reciben <250 mm/año. La poca lluvia se evapora rápidamente (la tasa de evapotranspiración supera ampliamente la precipitación). Las neblinas costeras (como en Atacama) aportan agua que los organismos capturan directamente. El suelo arenoso o rocoso impide la retención de agua.",
            },
            {
              name: "Cadena Alimentaria del Desierto",
              emoji: "🦅",
              color: "#ef4444",
              simple: "Las cadenas alimentarias son cortas y los organismos tienen pocas presas: productores (cactus/arbustos) → herbívoros (roedores, insectos) → carnívoros (serpientes, rapaces).",
              full: "La cadena es simple: plantas → herbívoros nocturnos (roedores, conejos, insectos) → carnívoros (serpientes de cascabel, zorros del desierto, lechuzas, halcones). Los descomponedores actúan muy lentamente por la poca humedad: un cactus muerto puede tardar años en descomponerse. Esto puede generar acumulación de materia orgánica.",
            },
            {
              name: "Biomas Áridos del Mundo",
              emoji: "🗺️",
              color: "#a78bfa",
              simple: "Los desiertos cubren el 33% de la superficie terrestre y se encuentran en todos los continentes.",
              full: "Tipos de desierto: cálido (Sahara, Arábigo, Kalahari), frío (Gobi, Patagónico), costero (Atacama — el más seco, <1 mm/año) y polar (Antártida). Los desiertos no son solo arena (erg): hay desiertos rocosos (reg), pedregosos y con sal (playa). El cambio climático está desertificando nuevas áreas por avance de los cinturones subtropicales.",
            },
          ],
        },
        {
          id: "artico",
          name: "Ártico",
          emoji: "🧊",
          uid: "20adef85a85b48de9c3a9faeb9976979",
          structures: [
            {
              name: "Adaptaciones al Frío",
              emoji: "🐻‍❄️",
              color: "#bae6fd",
              simple: "Los animales polares tienen capas gruesas de grasa, pelaje blanco y otros mecanismos para sobrevivir temperaturas de -50°C.",
              full: "El oso polar (Ursus maritimus) tiene pelos huecos que capturan calor, piel negra que absorbe radiación solar y 10 cm de grasa subcutánea. Las focas tienen blubber (grasa) de hasta 30 cm. La contracorriente circulatoria en las aletas y patas evita la pérdida de calor. El pelaje blanco aporta camuflaje.",
            },
            {
              name: "Cadena Trófica Polar",
              emoji: "🐋",
              color: "#7dd3fc",
              simple: "El fitoplancton es la base de toda la vida polar: es comido por el krill, que alimenta a peces, focas, pingüinos y ballenas.",
              full: "Fitoplancton → zooplancton (krill, copépodos) → peces (arenque, bacalao ártico) → focas/pingüinos → ballenas (jorobada, azul) → orca (superdepredador). El krill antártico (Euphausia superba) es la especie más abundante del planeta y sostiene toda la biomasa del ecosistema polar. Las ballenas azules consumen hasta 4 toneladas de krill por día.",
            },
            {
              name: "Permafrost y Suelo Helado",
              emoji: "🌍",
              color: "#e0f2fe",
              simple: "El permafrost es el suelo congelado permanentemente. Almacena enormes cantidades de carbono que, al derretirse, libera CO₂ y metano.",
              full: "El permafrost (suelo perennemente congelado) cubre ~25% del suelo del hemisferio norte. Almacena ~1.700 Gt de carbono (el doble que en toda la atmósfera). Su deshielo por el calentamiento global libera CO₂ y CH₄ (metano, 25x más potente como gas de efecto invernadero), creando un feedback positivo que acelera el cambio climático.",
            },
            {
              name: "Derretimiento del Hielo Polar",
              emoji: "⚠️",
              color: "#ef4444",
              simple: "El Ártico se calienta 4 veces más rápido que el resto del planeta. El hielo marino veraniego podría desaparecer antes de 2050.",
              full: "El albedo (reflectividad) del hielo blanco es ~90% vs. 6% del océano oscuro. Al derretirse el hielo, el océano absorbe más calor (amplificación ártica). El hielo marino ártico en verano disminuyó un 40% desde 1980. El deshielo del hielo terrestre de Groenlandia contribuye al aumento del nivel del mar. Los ecosistemas polares son indicadores clave del cambio climático global.",
            },
            {
              name: "Tundra — El Bioma Ártico Terrestre",
              emoji: "🌾",
              color: "#5C6472",
              simple: "La tundra es el ecosistema ártico terrestre: sin árboles, con musgos, líquenes y arbustos enanos que soportan el frío extremo.",
              full: "La tundra ártica tiene temperaturas medias de -30°C en invierno y +10°C en verano. La vegetación es baja (musgos, líquenes, gramíneas, arbustos enanos) para evitar el viento. Las migraciones estacionales son fundamentales: caribúes, gansos y otras aves viajan miles de km. La temporada de crecimiento dura apenas 60 días/año.",
            },
          ],
        },
      ]}
    />
  );
}
