"use client";
import { useState, useMemo, useEffect } from "react";

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
      { tipo: "multiple", enunciado: "¿Qué orgánulo digiere y recicla materiales viejos de la célula?", opciones: ["Ribosoma", "Lisosoma", "Vacuola", "Núcleo"], correcta: 1, puntos: 1 },
      { tipo: "vf", enunciado: "Los ribosomas se encuentran solo en el núcleo de la célula.", correcta: false, puntos: 1 },
      { tipo: "completar", enunciado: "El retículo endoplasmático ___ tiene ribosomas adosados y fabrica proteínas.", respuesta: "rugoso (RER)", puntos: 1 },
      { tipo: "multiple", enunciado: "¿Cuál de estas NO es función de la membrana plasmática?", opciones: ["Proteger la célula", "Controlar qué entra y sale", "Producir energía", "Comunicarse con otras células"], correcta: 2, puntos: 1 },
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
      { tipo: "multiple", enunciado: "¿Qué pigmento le da el color verde a los cloroplastos?", opciones: ["Hemoglobina", "Melanina", "Clorofila", "Caroteno"], correcta: 2, puntos: 1 },
      { tipo: "vf", enunciado: "Los plasmodesmos conectan células vegetales vecinas para compartir nutrientes.", correcta: true, puntos: 1 },
      { tipo: "completar", enunciado: "La fotosíntesis convierte energía ___ en energía química (azúcar).", respuesta: "solar (luz)", puntos: 1 },
      { tipo: "multiple", enunciado: "¿Cuál es la función principal de los estomas en las hojas?", opciones: ["Hacer fotosíntesis", "Permitir el intercambio de gases", "Producir agua", "Guardar el ADN"], correcta: 1, puntos: 1 },
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
      { tipo: "multiple", enunciado: "¿Cuál es la función del páncreas en la digestión?", opciones: ["Almacenar bilis", "Producir enzimas digestivas", "Absorber agua", "Triturar alimentos"], correcta: 1, puntos: 1 },
      { tipo: "vf", enunciado: "La boca es el primer lugar donde comienza la digestión.", correcta: true, puntos: 1 },
      { tipo: "completar", enunciado: "Las pequeñas protuberancias del intestino delgado que absorben nutrientes se llaman ___.", respuesta: "vellosidades intestinales", puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué hace el intestino grueso?", opciones: ["Digiere proteínas", "Absorbe la mayor parte de los nutrientes", "Absorbe el agua restante y forma heces", "Produce bilis"], correcta: 2, puntos: 1 },
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
      { tipo: "multiple", enunciado: "¿Cómo se llama el vaso sanguíneo más pequeño donde ocurre el intercambio de nutrientes?", opciones: ["Arteria", "Vena", "Capilar", "Aorta"], correcta: 2, puntos: 1 },
      { tipo: "vf", enunciado: "La sangre que va a los pulmones lleva oxígeno.", correcta: false, puntos: 1 },
      { tipo: "completar", enunciado: "El corazón tiene ___ cámaras: 2 aurículas y 2 ventrículos.", respuesta: "cuatro (4)", puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué son los glóbulos rojos?", opciones: ["Células que defienden el cuerpo", "Células que transportan oxígeno", "Células que forman coágulos", "Células que producen energía"], correcta: 1, puntos: 1 },
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
      { tipo: "multiple", enunciado: "¿Cuántos pulmones tiene el ser humano?", opciones: ["Uno", "Dos", "Tres", "Cuatro"], correcta: 1, puntos: 1 },
      { tipo: "vf", enunciado: "El surfactante pulmonar evita que los alvéolos se colapsen.", correcta: true, puntos: 1 },
      { tipo: "completar", enunciado: "La laringe contiene las cuerdas ___ que producen el sonido de nuestra voz.", respuesta: "vocales", puntos: 1 },
      { tipo: "multiple", enunciado: "¿Cuál es el gas que el cuerpo elimina al exhalar?", opciones: ["Oxígeno", "Nitrógeno", "Dióxido de carbono (CO₂)", "Vapor de agua solamente"], correcta: 2, puntos: 1 },
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
    modulo: "Ecosistemas",
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
  {
    id: "herencia-p",
    titulo: "Herencia Genética",
    nivel: "Primaria",
    modulo: "Herencia Genética",
    emoji: "🧬",
    color: "#f59e0b",
    duracion: "35 min",
    preguntas: [
      { tipo: "multiple", enunciado: "¿Cómo se llaman las diferentes formas de un mismo gen?", opciones: ["Cromosomas", "Alelos", "Gametos", "Nucleótidos"], correcta: 1, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué científico descubrió las leyes básicas de la herencia trabajando con plantas de arvejas?", opciones: ["Darwin", "Mendel", "Watson", "Crick"], correcta: 1, puntos: 1 },
      { tipo: "multiple", enunciado: "Si una característica no se ve en el organismo pero puede aparecer en sus hijos, se dice que el alelo es:", opciones: ["Dominante", "Codominante", "Recesivo", "Mutante"], correcta: 2, puntos: 1 },
      { tipo: "vf", enunciado: "El genotipo es la combinación de alelos que tiene un organismo, aunque no siempre se vea.", correcta: true, puntos: 1 },
      { tipo: "vf", enunciado: "Un alelo dominante siempre es el alelo 'bueno' o más saludable.", correcta: false, puntos: 1 },
      { tipo: "vf", enunciado: "En un cruce Aa × Aa, el 25% de los hijos serán homocigotos recesivos (aa).", correcta: true, puntos: 1 },
      { tipo: "completar", enunciado: "Un individuo que tiene dos alelos iguales para un carácter (AA o aa) se llama ___.", respuesta: "homocigoto", puntos: 1 },
      { tipo: "completar", enunciado: "El ___ de Punnett es una tabla que permite predecir los genotipos posibles de la descendencia.", respuesta: "cuadro", puntos: 1 },
      { tipo: "desarrollo", enunciado: "Explicá con tus palabras qué es la herencia genética y por qué los hermanos no son idénticos aunque tienen los mismos padres.", guia: "La herencia es la transmisión de características de padres a hijos mediante los genes. Cada hijo recibe una combinación aleatoria de alelos de cada progenitor, por lo que las combinaciones son distintas en cada hijo (excepto gemelos idénticos).", puntos: 3 },
    ],
  },
  // ── NUEVOS MÓDULOS ──────────────────────────────────────
  {
    id: "oseo-p",
    titulo: "El Sistema Óseo",
    nivel: "Primaria",
    modulo: "Sistema Óseo",
    emoji: "🦴",
    color: "#94a3b8",
    duracion: "40 min",
    preguntas: [
      { tipo: "multiple", enunciado: "¿Cuántos huesos tiene el esqueleto de un adulto?", opciones: ["100", "206", "350", "52"], correcta: 1, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Cuál es el hueso más largo del cuerpo?", opciones: ["Húmero", "Tibia", "Fémur", "Radio"], correcta: 2, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué tejido suave recubre los extremos de los huesos en las articulaciones?", opciones: ["Tendón", "Ligamento", "Cartílago", "Periostio"], correcta: 2, puntos: 1 },
      { tipo: "vf", enunciado: "Los huesos son tejidos vivos que se renuevan constantemente.", correcta: true, puntos: 1 },
      { tipo: "vf", enunciado: "Los tendones unen un hueso con otro hueso.", correcta: false, puntos: 1 },
      { tipo: "vf", enunciado: "La médula ósea roja produce células de la sangre.", correcta: true, puntos: 1 },
      { tipo: "completar", enunciado: "La columna vertebral protege a la ___ espinal.", respuesta: "médula", puntos: 1 },
      { tipo: "completar", enunciado: "El cráneo protege al ___ de golpes.", respuesta: "cerebro", puntos: 1 },
      { tipo: "desarrollo", enunciado: "Nombrá 4 funciones del sistema óseo y un ejemplo de cada una.", guia: "Soporte/sostén (nos mantiene parados), protección (cráneo-cerebro, costillas-pulmones), movimiento (con músculos), producción de sangre (médula roja), almacenamiento de calcio.", puntos: 4 },
    ],
  },
  {
    id: "oseo-s",
    titulo: "Sistema Óseo — Estructura y Remodelado",
    nivel: "Secundaria",
    modulo: "Sistema Óseo",
    emoji: "🦴",
    color: "#94a3b8",
    duracion: "60 min",
    preguntas: [
      { tipo: "multiple", enunciado: "¿Qué células forman el hueso secretando la matriz osteoide?", opciones: ["Osteoclastos", "Osteocitos", "Osteoblastos", "Condrocitos"], correcta: 2, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Cuál es el principal componente inorgánico del hueso que le da dureza?", opciones: ["Colágeno tipo I", "Hidroxiapatita (fosfato de calcio)", "Queratina", "Elastina"], correcta: 1, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué hormona liberada por las paratiroides aumenta el calcio en sangre activando los osteoclastos?", opciones: ["Calcitonina", "Insulina", "Hormona paratiroidea (PTH)", "Cortisol"], correcta: 2, puntos: 1 },
      { tipo: "vf", enunciado: "La osificación endocondral reemplaza el cartílago hialino por tejido óseo durante el desarrollo.", correcta: true, puntos: 1 },
      { tipo: "vf", enunciado: "Los osteoclastos construyen hueso nuevo.", correcta: false, puntos: 1 },
      { tipo: "vf", enunciado: "El periostio contiene células capaces de reparar el hueso tras una fractura.", correcta: true, puntos: 1 },
      { tipo: "completar", enunciado: "Los ___ son los canales del hueso compacto que contienen vasos y nervios.", respuesta: "conductos de Havers", puntos: 2 },
      { tipo: "completar", enunciado: "La vitamina ___ es esencial para la absorción intestinal de calcio y la mineralización ósea.", respuesta: "D", puntos: 1 },
      { tipo: "desarrollo", enunciado: "Describí el proceso de reparación ósea tras una fractura. Nombrá las 4 fases e indicá qué células participan en cada una.", guia: "1) Hematoma (coágulo de sangre). 2) Callo blando: condrocitos forman cartílago temporal. 3) Callo duro: osteoblastos del periostio producen hueso inmaduro (esponjoso). 4) Remodelado: osteoclastos y osteoblastos reemplazan el hueso inmaduro por hueso laminado compacto.", puntos: 4 },
    ],
  },
  {
    id: "muscular-s",
    titulo: "Sistema Muscular — Contracción y Fisiología",
    nivel: "Secundaria",
    modulo: "Sistema Muscular",
    emoji: "💪",
    color: "#f87171",
    duracion: "60 min",
    preguntas: [
      { tipo: "multiple", enunciado: "¿Cuál es la unidad estructural y funcional del músculo esquelético?", opciones: ["Miofibrilla", "Sarcómero", "Fibra muscular", "Fascículo"], correcta: 1, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué iones liberados del retículo sarcoplasmático activan la contracción muscular?", opciones: ["Na⁺", "K⁺", "Ca²⁺", "Mg²⁺"], correcta: 2, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué neurotransmisor se libera en la unión neuromuscular?", opciones: ["Dopamina", "Serotonina", "Acetilcolina", "GABA"], correcta: 2, puntos: 1 },
      { tipo: "vf", enunciado: "Durante la contracción muscular, los filamentos de actina y miosina se deslizan entre sí sin cambiar de longitud.", correcta: true, puntos: 1 },
      { tipo: "vf", enunciado: "El músculo liso está bajo control voluntario del sistema nervioso somático.", correcta: false, puntos: 1 },
      { tipo: "vf", enunciado: "El ATP es necesario tanto para la contracción como para la relajación muscular.", correcta: true, puntos: 1 },
      { tipo: "completar", enunciado: "Las fibras musculares tipo I (lentas) usan metabolismo ___ y son resistentes a la fatiga.", respuesta: "oxidativo (aeróbico)", puntos: 2 },
      { tipo: "completar", enunciado: "El tendón de ___ es el tendón más grueso del cuerpo, une el tríceps sural al calcáneo.", respuesta: "Aquiles", puntos: 1 },
      { tipo: "desarrollo", enunciado: "Explicá el ciclo de puentes cruzados entre actina y miosina que produce la contracción. Incluí el rol del ATP y el calcio.", guia: "Ca²⁺ se une a troponina → troponina mueve tropomiosina → expone sitios activos de actina. Cabeza de miosina unida a ADP+Pi se une a actina (puente cruzado) → giro de fuerza (powerstroke) → avanza el filamento. ATP se une → rompe el puente → ATP se hidroliza → cabeza lista para nuevo ciclo. Sin ATP: rigor mortis.", puntos: 4 },
    ],
  },
  {
    id: "excretor-s",
    titulo: "Sistema Excretor — Riñones y Homeostasis",
    nivel: "Secundaria",
    modulo: "Sistema Excretor",
    emoji: "💧",
    color: "#facc15",
    duracion: "60 min",
    preguntas: [
      { tipo: "multiple", enunciado: "¿Cuál es la unidad funcional del riñón?", opciones: ["Glomérulo", "Nefrona", "Túbulo colector", "Cápsula de Bowman"], correcta: 1, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué hormona aumenta la reabsorción de Na⁺ en el túbulo distal?", opciones: ["ADH", "PTH", "Aldosterona", "Insulina"], correcta: 2, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Dónde ocurre la filtración del plasma para producir el ultrafiltrado?", opciones: ["Túbulo proximal", "Asa de Henle", "Glomérulo y cápsula de Bowman", "Túbulo colector"], correcta: 2, puntos: 1 },
      { tipo: "vf", enunciado: "El riñón recibe aproximadamente el 20-25% del gasto cardíaco.", correcta: true, puntos: 1 },
      { tipo: "vf", enunciado: "La ADH disminuye la reabsorción de agua en los túbulos colectores.", correcta: false, puntos: 1 },
      { tipo: "vf", enunciado: "La urea es el principal producto de desecho del metabolismo de proteínas en mamíferos.", correcta: true, puntos: 1 },
      { tipo: "completar", enunciado: "La tasa de filtración glomerular (TFG) normal es de aproximadamente ___ mL/min.", respuesta: "125", puntos: 1 },
      { tipo: "completar", enunciado: "El sistema ___ - angiotensina - aldosterona regula la presión arterial mediante el riñón.", respuesta: "renina", puntos: 1 },
      { tipo: "desarrollo", enunciado: "Describí las 3 etapas de la formación de orina en la nefrona: filtración, reabsorción y secreción.", guia: "Filtración (glomérulo): ~125 mL/min de plasma se filtran al espacio de Bowman. Reabsorción (túbulo proximal, asa de Henle, distal): recuperación de glucosa, aminoácidos, Na⁺, agua (~99% del filtrado). Secreción (túbulo distal): eliminación activa de K⁺, H⁺, NH₄⁺. Resultado: ~1,5 L de orina/día concentrada en desechos.", puntos: 4 },
    ],
  },
  {
    id: "endocrino-s",
    titulo: "Sistema Endócrino — Hormonas y Regulación",
    nivel: "Secundaria",
    modulo: "Sistema Endócrino",
    emoji: "⚗️",
    color: "#fb923c",
    duracion: "60 min",
    preguntas: [
      { tipo: "multiple", enunciado: "¿Qué glándula regula el metabolismo basal secretando T3 y T4?", opciones: ["Suprarrenal", "Páncreas", "Tiroides", "Hipófisis"], correcta: 2, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Cuál es la hormona del estrés secretada por la corteza suprarrenal?", opciones: ["Adrenalina", "Cortisol", "Glucagón", "PTH"], correcta: 1, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué glándula se considera la 'maestra' del sistema endócrino?", opciones: ["Tiroides", "Suprarrenal", "Hipófisis", "Hipotálamo"], correcta: 2, puntos: 1 },
      { tipo: "vf", enunciado: "Las hormonas esteroideas atraviesan la membrana plasmática y actúan en receptores nucleares.", correcta: true, puntos: 1 },
      { tipo: "vf", enunciado: "La melatonina es producida por la tiroides y regula el metabolismo.", correcta: false, puntos: 1 },
      { tipo: "vf", enunciado: "En la retroalimentación negativa, el exceso de hormona blanco inhibe la secreción de la hormona trófica.", correcta: true, puntos: 1 },
      { tipo: "completar", enunciado: "La ___ producida por el páncreas permite que la glucosa entre a las células musculares y adiposas.", respuesta: "insulina", puntos: 1 },
      { tipo: "completar", enunciado: "Las glándulas ___ se ubican sobre los riñones y producen adrenalina (médula) y cortisol (corteza).", respuesta: "suprarrenales", puntos: 1 },
      { tipo: "desarrollo", enunciado: "Explicá el eje hipotálamo-hipófisis-tiroides como ejemplo de retroalimentación hormonal negativa.", guia: "Hipotálamo libera TRH → adenohipófisis libera TSH → tiroides produce T3 y T4 → niveles altos de T3/T4 inhiben tanto al hipotálamo (menos TRH) como a la hipófisis (menos TSH). Cuando bajan T3/T4, se levanta la inhibición y el ciclo comienza de nuevo.", puntos: 4 },
    ],
  },
  {
    id: "reproductor-s",
    titulo: "Sistema Reproductor y Ciclo Menstrual",
    nivel: "Secundaria",
    modulo: "Sistema Reproductor Femenino",
    emoji: "🌸",
    color: "#f472b6",
    duracion: "60 min",
    preguntas: [
      { tipo: "multiple", enunciado: "¿Dónde ocurre normalmente la fecundación del óvulo?", opciones: ["En el útero", "En los ovarios", "En la ampolla de la trompa de Falopio", "En el endometrio"], correcta: 2, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué hormona desencadena la ovulación con su pico a mitad del ciclo?", opciones: ["FSH", "LH", "Progesterona", "Estrógeno"], correcta: 1, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué estructura se forma tras la ovulación y produce progesterona?", opciones: ["Folículo de Graaf", "Cuerpo lúteo", "Cuerpo albicans", "Folículo primordial"], correcta: 1, puntos: 1 },
      { tipo: "vf", enunciado: "La menstruación ocurre cuando el cuerpo lúteo degenera y caen los niveles de progesterona y estrógenos.", correcta: true, puntos: 1 },
      { tipo: "vf", enunciado: "El test de embarazo detecta la hormona LH en orina.", correcta: false, puntos: 1 },
      { tipo: "vf", enunciado: "El endometrio es la capa muscular del útero que se contrae durante el parto.", correcta: false, puntos: 1 },
      { tipo: "completar", enunciado: "El cigoto se forma cuando los pronúcleos del óvulo y el espermatozoide se fusionan, restaurando la ploidía ___.", respuesta: "diploide (2n)", puntos: 2 },
      { tipo: "completar", enunciado: "La progesterona es producida por el ___ lúteo en la fase lútea del ciclo.", respuesta: "cuerpo", puntos: 1 },
      { tipo: "desarrollo", enunciado: "Describí las 4 fases del ciclo menstrual (menstrual, folicular, ovulatoria y lútea). Indicá qué hormonas predominan en cada fase y qué ocurre en el ovario y el endometrio.", guia: "Menstrual: caída de estrógenos y progesterona → endometrio se desprende. Folicular: FSH → folículos crecen → estrógenos aumentan → endometrio prolifera. Ovulatoria: pico de LH → ovulación. Lútea: cuerpo lúteo → progesterona → endometrio secretor. Sin embarazo: cuerpo lúteo degenera → bajan hormonas → nuevo ciclo.", puntos: 4 },
    ],
  },
  {
    id: "reproductor-masculino-p",
    titulo: "El Sistema Reproductor Masculino",
    nivel: "Primaria",
    modulo: "Sistema Reproductor Masculino",
    emoji: "⚗️",
    color: "#60a5fa",
    duracion: "35 min",
    preguntas: [
      { tipo: "multiple", enunciado: "¿Qué órganos producen los espermatozoides?", opciones: ["Riñones", "Testículos", "Próstata", "Páncreas"], correcta: 1, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Cuál es la hormona sexual principal del sistema reproductor masculino?", opciones: ["Estrógeno", "Progesterona", "Insulina", "Testosterona"], correcta: 3, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué es el espermatozoide?", opciones: ["Un órgano reproductor", "Una hormona", "La célula sexual masculina", "Un tipo de glóbulo blanco"], correcta: 2, puntos: 1 },
      { tipo: "vf", enunciado: "Los testículos están dentro del abdomen, a la misma temperatura que los demás órganos.", correcta: false, puntos: 1 },
      { tipo: "vf", enunciado: "La próstata produce líquido que protege y nutre a los espermatozoides en el semen.", correcta: true, puntos: 1 },
      { tipo: "vf", enunciado: "La vasectomía es un método anticonceptivo que corta el conducto deferente.", correcta: true, puntos: 1 },
      { tipo: "completar", enunciado: "El ___ es el tubo enroscado donde los espermatozoides maduran y adquieren movilidad.", respuesta: "epidídimo", puntos: 1 },
      { tipo: "completar", enunciado: "La testosterona es producida por los ___ y regula los caracteres sexuales masculinos.", respuesta: "testículos", puntos: 1 },
      { tipo: "desarrollo", enunciado: "Describí el camino del espermatozoide desde su producción hasta la fecundación. Nombra cada estructura que recorre.", guia: "Formación en testículos (túbulos seminíferos) → maduración en epidídimo → conducto deferente → uretra → eyaculación → trompa de Falopio (oviducto) → fecundación del óvulo.", puntos: 3 },
    ],
  },
  {
    id: "reproductor-masculino-s",
    titulo: "Sistema Reproductor Masculino — Fisiología",
    nivel: "Secundaria",
    modulo: "Sistema Reproductor Masculino",
    emoji: "⚗️",
    color: "#60a5fa",
    duracion: "50 min",
    preguntas: [
      { tipo: "multiple", enunciado: "¿Qué células del testículo producen testosterona?", opciones: ["Células de Sertoli", "Espermatogonias", "Células de Leydig", "Espermatocitos primarios"], correcta: 2, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué hormona hipofisaria estimula directamente a las células de Leydig?", opciones: ["FSH", "LH", "GnRH", "Prolactina"], correcta: 1, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Cuál es la función del acrosoma en el espermatozoide?", opciones: ["Producir ATP para el movimiento flagelar", "Contener enzimas que penetran la zona pelúcida del óvulo", "Almacenar el ADN haploide", "Generar la propulsión por mitocondrias"], correcta: 1, puntos: 1 },
      { tipo: "vf", enunciado: "Las células de Sertoli nutren los espermatozoides y forman la barrera hematotesticular.", correcta: true, puntos: 1 },
      { tipo: "vf", enunciado: "La vesícula seminal produce la mayor parte del volumen del semen (~65%), con fructosa como fuente de energía para los espermatozoides.", correcta: true, puntos: 1 },
      { tipo: "vf", enunciado: "Un espermatozoide maduro es una célula diploide (2n=46 cromosomas).", correcta: false, puntos: 1 },
      { tipo: "completar", enunciado: "La maduración de espermatozoides en el epidídimo dura aproximadamente ___.", respuesta: "12-21 días", puntos: 1 },
      { tipo: "completar", enunciado: "La testosterona inhibe por retroalimentación negativa la secreción de ___ (hipotálamo) y ___ (hipófisis).", respuesta: "GnRH / LH y FSH", puntos: 2 },
      { tipo: "desarrollo", enunciado: "Explicá el eje hipotálamo-hipófisis-testículos y su regulación por retroalimentación negativa.", guia: "Hipotálamo libera GnRH → adenohipófisis secreta LH (→ células de Leydig → testosterona) y FSH (→ células de Sertoli → espermatogénesis). La testosterona y la inhibina (producida por Sertoli) inhiben por retroalimentación negativa al hipotálamo y la hipófisis.", puntos: 4 },
    ],
  },
  {
    id: "sentidos-p",
    titulo: "Los Órganos de los Sentidos",
    nivel: "Primaria",
    modulo: "Órganos de los Sentidos",
    emoji: "👁️",
    color: "#22d3ee",
    duracion: "35 min",
    preguntas: [
      { tipo: "multiple", enunciado: "¿Qué órgano usamos para ver?", opciones: ["La nariz", "Los oídos", "Los ojos", "La lengua"], correcta: 2, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué parte del ojo controla la cantidad de luz que entra?", opciones: ["La retina", "La córnea", "La pupila (controlada por el iris)", "El cristalino"], correcta: 2, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué parte del oído interno convierte las vibraciones de sonido en señales nerviosas?", opciones: ["El tímpano", "El martillo", "La cóclea", "El oído externo"], correcta: 2, puntos: 1 },
      { tipo: "vf", enunciado: "La retina es la parte del ojo donde se forman las imágenes.", correcta: true, puntos: 1 },
      { tipo: "vf", enunciado: "El sentido del gusto y el olfato no están relacionados entre sí.", correcta: false, puntos: 1 },
      { tipo: "vf", enunciado: "Los huesecillos del oído (martillo, yunque, estribo) amplifican el sonido.", correcta: true, puntos: 1 },
      { tipo: "completar", enunciado: "El ___ es el nervio que lleva las imágenes desde la retina hasta el cerebro.", respuesta: "nervio óptico", puntos: 1 },
      { tipo: "completar", enunciado: "La lengua detecta 5 sabores: dulce, salado, amargo, ácido y ___.", respuesta: "umami", puntos: 1 },
      { tipo: "desarrollo", enunciado: "Nombrá los 5 sentidos, el órgano que los capta y un ejemplo de estímulo para cada uno.", guia: "Vista (ojos, luz), oído (oídos, sonidos/vibraciones), olfato (nariz, aromas), gusto (lengua, sabores), tacto (piel, presión/temperatura/dolor).", puntos: 5 },
    ],
  },
  {
    id: "sentidos-s",
    titulo: "Fisiología Sensorial",
    nivel: "Secundaria",
    modulo: "Órganos de los Sentidos",
    emoji: "👁️",
    color: "#22d3ee",
    duracion: "45 min",
    preguntas: [
      { tipo: "multiple", enunciado: "¿Qué tipo de fotorreceptores permiten la visión en baja luminosidad?", opciones: ["Conos", "Bastones", "Células ganglionares", "Células bipolares"], correcta: 1, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué par craneal conduce las señales visuales de la retina al cerebro?", opciones: ["Par I (olfatorio)", "Par II (óptico)", "Par III (oculomotor)", "Par VIII (auditivo)"], correcta: 1, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Dónde se transforman las vibraciones sonoras en impulsos nerviosos en el oído interno?", opciones: ["Tímpano", "Huesecillos", "Cóclea (órgano de Corti)", "Canales semicirculares"], correcta: 2, puntos: 1 },
      { tipo: "vf", enunciado: "Los canales semicirculares del oído interno detectan la rotación y aceleración del cuerpo.", correcta: true, puntos: 1 },
      { tipo: "vf", enunciado: "El cristalino cambia su curvatura (acomodación) para enfocar objetos a distintas distancias.", correcta: true, puntos: 1 },
      { tipo: "vf", enunciado: "En la presbicia el cristalino gana elasticidad con la edad.", correcta: false, puntos: 1 },
      { tipo: "completar", enunciado: "El punto de mayor agudeza visual en la retina, donde se concentran los conos, se llama ___.", respuesta: "fóvea (central)", puntos: 1 },
      { tipo: "completar", enunciado: "El órgano de ___ en la cóclea contiene las células ciliadas que generan los impulsos auditivos.", respuesta: "Corti", puntos: 1 },
      { tipo: "desarrollo", enunciado: "Describí el recorrido de la señal visual desde que la luz entra al ojo hasta que se percibe en el cerebro.", guia: "Luz → córnea (refracción) → pupila → cristalino (acomodación) → humor vítreo → retina → bastones/conos → células bipolares → células ganglionares → nervio óptico → quiasma óptico → cuerpo geniculado lateral del tálamo → corteza visual primaria (área V1, lóbulo occipital).", puntos: 3 },
    ],
  },
  {
    id: "micro-s",
    titulo: "Microbiología — Bacterias, Virus e Inmunidad",
    nivel: "Secundaria",
    modulo: "Microbiología",
    emoji: "🦠",
    color: "#4ade80",
    duracion: "60 min",
    preguntas: [
      { tipo: "multiple", enunciado: "¿Cuál es la principal diferencia entre bacterias y virus?", opciones: ["Las bacterias son más pequeñas", "Las bacterias son células procariotas; los virus no son células", "Los virus tienen pared de peptidoglucano", "Las bacterias no tienen ADN"], correcta: 1, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué tinción diferencia bacterias Gram positivas de Gram negativas?", opciones: ["Tinción de Ziehl-Neelsen", "Tinción de Wright", "Tinción de Gram", "Tinción de PAS"], correcta: 2, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Por qué los antibióticos como la penicilina no funcionan contra los virus?", opciones: ["Porque los virus son resistentes a todos los fármacos", "Porque los antibióticos atacan estructuras bacterianas (pared de peptidoglucano) ausentes en los virus", "Porque los virus crecen más rápido que las bacterias", "Porque los antibióticos son tóxicos para las células humanas"], correcta: 1, puntos: 1 },
      { tipo: "vf", enunciado: "Los plásmidos bacterianos pueden transferir genes de resistencia a antibióticos entre bacterias.", correcta: true, puntos: 1 },
      { tipo: "vf", enunciado: "El microbioma intestinal perjudica la salud humana.", correcta: false, puntos: 1 },
      { tipo: "vf", enunciado: "Las bacterias Gram negativas tienen una membrana externa con LPS que las hace más resistentes.", correcta: true, puntos: 1 },
      { tipo: "completar", enunciado: "Los ribosomas bacterianos son de tipo ___ (coeficiente de sedimentación), diferente a los eucarióticos (80S).", respuesta: "70S", puntos: 1 },
      { tipo: "completar", enunciado: "La ___ es la capa de polisacáridos que rodea algunas bacterias y las protege de la fagocitosis.", respuesta: "cápsula", puntos: 1 },
      { tipo: "desarrollo", enunciado: "Describí los mecanismos de resistencia bacteriana a los antibióticos. ¿Por qué es un problema de salud pública global?", guia: "Mecanismos: producción de enzimas que degradan el antibiótico (ej. beta-lactamasas), modificación del sitio diana (mutaciones en PBP → resistencia a penicilina), bombas de eflujo (expulsan el antibiótico), impermeabilidad de membrana. Transferencia horizontal por plásmidos (conjugación) disemina la resistencia. Problema global: infecciones sin tratamiento, mayor mortalidad, costos sanitarios. OMS declara la resistencia bacteriana emergencia global.", puntos: 4 },
    ],
  },
  // ──────────────────────────────────────────────
  // EVOLUCIÓN
  // ──────────────────────────────────────────────
  {
    id: "evolucion-p",
    titulo: "Evolución y Adaptación",
    nivel: "Primaria",
    modulo: "Evolución",
    emoji: "🦕",
    color: "#f59e0b",
    duracion: "30 min",
    preguntas: [
      { tipo: "multiple", enunciado: "¿Quién propuso la teoría de la selección natural?", opciones: ["Isaac Newton", "Charles Darwin", "Gregor Mendel", "Louis Pasteur"], correcta: 1, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué son las adaptaciones?", opciones: ["Cambios en un día", "Características que ayudan a sobrevivir", "Enfermedades hereditarias", "Partes del ADN"], correcta: 1, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué evidencia prueba que los seres vivos evolucionaron?", opciones: ["El color del cielo", "Los fósiles y la anatomía comparada", "El clima", "Los ríos"], correcta: 1, puntos: 1 },
      { tipo: "vf", enunciado: "La evolución ocurre en el individuo durante su vida.", correcta: false, puntos: 1 },
      { tipo: "vf", enunciado: "Los seres mejor adaptados tienen más probabilidad de sobrevivir y reproducirse.", correcta: true, puntos: 1 },
      { tipo: "completar", enunciado: "Darwin observó diferencias en los ___ de los pinzones de las Islas Galápagos, lo que lo llevó a proponer la selección natural.", respuesta: "picos", puntos: 2 },
      { tipo: "completar", enunciado: "La teoría de Darwin se llama ___.", respuesta: "selección natural", puntos: 2 },
      { tipo: "desarrollo", enunciado: "Explicá con tus palabras qué es la selección natural y dá un ejemplo de adaptación.", guia: "Mencioná: variación entre individuos, presión del ambiente, supervivencia del más apto, reproducción diferencial.", puntos: 3 },
    ],
  },
  {
    id: "evolucion-s",
    titulo: "Evolución y Mecanismos Evolutivos",
    nivel: "Secundaria",
    modulo: "Evolución",
    emoji: "🦕",
    color: "#f59e0b",
    duracion: "45 min",
    preguntas: [
      { tipo: "multiple", enunciado: "¿Qué condiciones debe cumplir una población para estar en equilibrio de Hardy-Weinberg?", opciones: ["Tamaño pequeño y aislamiento", "Ausencia de mutación, selección, deriva, flujo génico y apareamiento aleatorio", "Alta tasa de reproducción", "Ambiente estable"], correcta: 1, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué tipo de selección favorece a los individuos con valores fenotípicos extremos?", opciones: ["Selección estabilizadora", "Selección direccional", "Selección disruptiva", "Selección sexual"], correcta: 2, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué es la deriva génica?", opciones: ["Migración de individuos entre poblaciones", "Cambio aleatorio en las frecuencias alélicas en poblaciones pequeñas", "Selección a favor de heterocigotos", "Flujo de ADN entre especies"], correcta: 1, puntos: 1 },
      { tipo: "vf", enunciado: "La selección natural actúa directamente sobre el genotipo.", correcta: false, puntos: 1 },
      { tipo: "vf", enunciado: "La especiación alopátrica requiere aislamiento geográfico.", correcta: true, puntos: 1 },
      { tipo: "completar", enunciado: "El aislamiento ___ impide el intercambio genético entre poblaciones y puede llevar a la especiación.", respuesta: "reproductivo", puntos: 2 },
      { tipo: "completar", enunciado: "Los órganos análogos son resultado de la ___ convergente.", respuesta: "evolución", puntos: 2 },
      { tipo: "desarrollo", enunciado: "Comparó la selección estabilizadora, direccional y disruptiva con un ejemplo para cada una.", guia: "Estabilizadora: peso al nacer. Direccional: resistencia a antibióticos. Disruptiva: tamaño de picos en aves.", puntos: 3 },
    ],
  },
  // ──────────────────────────────────────────────
  // CLASIFICACIÓN
  // ──────────────────────────────────────────────
  {
    id: "clasificacion-p",
    titulo: "Clasificación de Seres Vivos",
    nivel: "Primaria",
    modulo: "Clasificación",
    emoji: "🌿",
    color: "#2dd4bf",
    duracion: "30 min",
    preguntas: [
      { tipo: "multiple", enunciado: "¿A qué reino pertenecen los hongos?", opciones: ["Plantae", "Animalia", "Fungi", "Monera"], correcta: 2, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Cuál es la unidad básica de clasificación de los seres vivos?", opciones: ["Familia", "Especie", "Género", "Orden"], correcta: 1, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Cómo se escribe correctamente el nombre científico del ser humano?", opciones: ["HOMO SAPIENS", "homo sapiens", "Homo sapiens", "Homo Sapiens"], correcta: 2, puntos: 1 },
      { tipo: "vf", enunciado: "Las bacterias pertenecen al reino Plantae.", correcta: false, puntos: 1 },
      { tipo: "vf", enunciado: "Los organismos de una misma especie pueden reproducirse entre sí y tener descendencia fértil.", correcta: true, puntos: 1 },
      { tipo: "completar", enunciado: "El científico que creó el sistema de clasificación binomial fue Carlos ___.", respuesta: "Linneo", puntos: 2 },
      { tipo: "completar", enunciado: "Las plantas pertenecen al reino ___.", respuesta: "Plantae", puntos: 2 },
      { tipo: "desarrollo", enunciado: "Describí las características de 3 reinos diferentes de seres vivos.", guia: "Mencioná si son unicelulares o pluricelulares, autótrofos o heterótrofos, con o sin núcleo, ejemplos.", puntos: 3 },
    ],
  },
  {
    id: "clasificacion-s",
    titulo: "Taxonomía y Filogenia",
    nivel: "Secundaria",
    modulo: "Clasificación",
    emoji: "🌿",
    color: "#2dd4bf",
    duracion: "45 min",
    preguntas: [
      { tipo: "multiple", enunciado: "¿En cuál de los 3 dominios se ubican los organismos con ARN polimerasa similar a la eucariota pero sin núcleo?", opciones: ["Bacteria", "Archaea", "Eukarya", "Protista"], correcta: 1, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué es un clado en sistemática filogenética?", opciones: ["Un grupo de especies similares morfológicamente", "Un ancestro común y todos sus descendientes", "Una población reproductivamente aislada", "Un taxón sin descendientes actuales"], correcta: 1, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué característica comparten Bacteria y Archaea?", opciones: ["Presencia de histonas", "Pared de peptidoglucano", "Ausencia de núcleo delimitado por membrana", "Ribosomas 80S"], correcta: 2, puntos: 1 },
      { tipo: "vf", enunciado: "Los grupos parafiléticos incluyen al ancestro común y TODOS sus descendientes.", correcta: false, puntos: 1 },
      { tipo: "vf", enunciado: "El concepto biológico de especie se basa en el aislamiento reproductivo.", correcta: true, puntos: 1 },
      { tipo: "completar", enunciado: "La clasificación jerárquica de mayor a menor es: Reino, Filo, Clase, ___, Familia, Género, Especie.", respuesta: "Orden", puntos: 2 },
      { tipo: "completar", enunciado: "Las Archaea se diferencian de las Bacterias en que tienen lípidos de membrana con enlaces ___ en lugar de éster.", respuesta: "éter", puntos: 2 },
      { tipo: "desarrollo", enunciado: "Explicá las diferencias entre los 3 dominios de la vida según el sistema de Woese.", guia: "Bacteria: procariota, peptidoglucano, ARN pol simple. Archaea: procariota, lípidos éter, ARN pol compleja. Eukarya: eucariota, núcleo, compartimentalización.", puntos: 3 },
    ],
  },
  // ──────────────────────────────────────────────
  // TEJIDOS
  // ──────────────────────────────────────────────
  {
    id: "tejidos-p",
    titulo: "Tejidos del Cuerpo Humano",
    nivel: "Primaria",
    modulo: "Tejidos",
    emoji: "🔬",
    color: "#a78bfa",
    duracion: "30 min",
    preguntas: [
      { tipo: "multiple", enunciado: "¿Qué tejido forma la piel y recubre los órganos?", opciones: ["Tejido muscular", "Tejido nervioso", "Tejido epitelial", "Tejido conectivo"], correcta: 2, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Cuál es la función del tejido conectivo?", opciones: ["Producir movimiento", "Transmitir señales", "Unir y sostener otros tejidos", "Cubrir superficies"], correcta: 2, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué tipo de tejido forma los músculos del esqueleto?", opciones: ["Tejido liso", "Tejido muscular estriado", "Tejido nervioso", "Tejido epitelial"], correcta: 1, puntos: 1 },
      { tipo: "vf", enunciado: "El tejido nervioso puede contraerse para producir movimiento.", correcta: false, puntos: 1 },
      { tipo: "vf", enunciado: "El corazón está formado por tejido muscular cardíaco.", correcta: true, puntos: 1 },
      { tipo: "completar", enunciado: "La ___ es la célula del tejido nervioso que transmite los impulsos eléctricos.", respuesta: "neurona", puntos: 2 },
      { tipo: "completar", enunciado: "El hueso y el cartílago son tipos de tejido ___.", respuesta: "conectivo", puntos: 2 },
      { tipo: "desarrollo", enunciado: "Describí los 4 tipos de tejido animal y dá un ejemplo de dónde se encuentra cada uno.", guia: "Epitelial: piel, mucosas. Conectivo: hueso, sangre, cartílago. Muscular: músculos, corazón. Nervioso: cerebro, médula.", puntos: 3 },
    ],
  },
  {
    id: "tejidos-s",
    titulo: "Histología: Tejidos Animal y Vegetal",
    nivel: "Secundaria",
    modulo: "Tejidos",
    emoji: "🔬",
    color: "#a78bfa",
    duracion: "45 min",
    preguntas: [
      { tipo: "multiple", enunciado: "¿Qué tipo de epitelio recubre los vasos sanguíneos (endotelio)?", opciones: ["Epitelio cilíndrico pseudoestratificado", "Epitelio cúbico simple", "Epitelio plano simple", "Epitelio estratificado queratinizado"], correcta: 2, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Cuál es la principal proteína estructural del tejido conectivo denso?", opciones: ["Queratina", "Actina", "Colágeno", "Elastina"], correcta: 2, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué tejido vegetal conduce el agua desde las raíces hacia las hojas?", opciones: ["Floema", "Parénquima", "Xilema", "Esclerénquima"], correcta: 2, puntos: 1 },
      { tipo: "vf", enunciado: "El tejido muscular liso es voluntario y está bajo control consciente.", correcta: false, puntos: 1 },
      { tipo: "vf", enunciado: "Los meristemas son tejidos vegetales con capacidad de división celular.", correcta: true, puntos: 1 },
      { tipo: "completar", enunciado: "Las células que producen la mielina en el sistema nervioso periférico son las células de ___.", respuesta: "Schwann", puntos: 2 },
      { tipo: "completar", enunciado: "El tejido ___ vegetal conduce los azúcares producidos en la fotosíntesis hacia el resto de la planta.", respuesta: "floema", puntos: 2 },
      { tipo: "desarrollo", enunciado: "Comparó el tejido muscular liso, estriado esquelético y cardíaco en cuanto a control voluntario/involuntario, presencia de estrías y localización.", guia: "Liso: involuntario, sin estrías, vísceras. Esquelético: voluntario, con estrías, músculos. Cardíaco: involuntario, con estrías, corazón.", puntos: 3 },
    ],
  },
  // ──────────────────────────────────────────────
  // ECOSISTEMAS (original)
  // ──────────────────────────────────────────────
  {
    id: "ecosistemas-s",
    titulo: "Ecosistemas y Biodiversidad",
    nivel: "Secundaria",
    modulo: "Ecosistemas",
    emoji: "🌳",
    color: "#22c55e",
    duracion: "50 min",
    preguntas: [
      { tipo: "multiple", enunciado: "¿Qué porcentaje de energía se transfiere (en promedio) de un nivel trófico al siguiente?", opciones: ["50%", "10%", "90%", "25%"], correcta: 1, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Cuál de las siguientes es una función de los descomponedores en el ecosistema?", opciones: ["Fijar dióxido de carbono", "Reciclar nutrientes devolviendo minerales al suelo", "Producir oxígeno por fotosíntesis", "Depredar consumidores primarios"], correcta: 1, puntos: 1 },
      { tipo: "multiple", enunciado: "¿Qué tipo de relación existe entre dos especies cuando una se beneficia y la otra no se ve afectada?", opciones: ["Mutualismo", "Parasitismo", "Comensalismo", "Competencia"], correcta: 2, puntos: 1 },
      { tipo: "vf", enunciado: "A mayor biodiversidad, mayor es la estabilidad y resiliencia de un ecosistema.", correcta: true, puntos: 1 },
      { tipo: "vf", enunciado: "Los productores son organismos heterótrofos que dependen de otros para obtener energía.", correcta: false, puntos: 1 },
      { tipo: "vf", enunciado: "El ciclo del carbono involucra fotosíntesis, respiración y descomposición.", correcta: true, puntos: 1 },
      { tipo: "completar", enunciado: "La ___ es la pérdida de especies a una tasa mayor que la tasa natural de extinción, causada principalmente por actividades humanas.", respuesta: "extinción en masa (o crisis de biodiversidad)", puntos: 2 },
      { tipo: "completar", enunciado: "Una red trófica muestra las interacciones de alimentación entre las especies de un ___.", respuesta: "ecosistema", puntos: 1 },
      { tipo: "desarrollo", enunciado: "Explicá cómo el calentamiento global afecta la biodiversidad y los ecosistemas. Incluí al menos 3 consecuencias concretas.", guia: "Aumento de temperatura → desplazamiento de rangos geográficos de especies → extinción de las que no pueden adaptarse. Acidificación del mar (absorción de CO₂) → blanqueamiento de corales. Fenología alterada → desincronización entre polinizadores y plantas. Eventos extremos → pérdida de hábitats. Deshielo de glaciares → pérdida de ecosistemas polares.", puntos: 4 },
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
  "Evolución": "#f59e0b",
  "Clasificación": "#2dd4bf",
  "Tejidos": "#a78bfa",
};

const MODULOS = Array.from(new Set(evaluaciones.map(e => e.modulo)));

const safeText = (s: string) => s.replace(/→/g, ">").replace(/←/g, "<").replace(/↔/g, "<>").replace(/[^\x00-\xFF]/g, "");

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
      const qLines = pdf.splitTextToSize(`${i + 1}. ${safeText(p.enunciado)}`, cW);
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
        const opLines = pdf.splitTextToSize(`${letters[oi]}) ${safeText(op)}`, colW - 6);
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
      const qLines = pdf.splitTextToSize(`${i + 1}. ${safeText(p.enunciado)}`, cW - 25);
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
      const qLines = pdf.splitTextToSize(`${i + 1}. ${safeText(p.enunciado)}`, cW);
      checkPage(qLines.length * 4.5 + BLANK_LINES * 5 + 6);
      pdf.setFontSize(9); pdf.setFont("helvetica", "normal"); pdf.setTextColor(20, 20, 20);
      pdf.text(qLines, mx, y);
      y += qLines.length * 4.5 + 2;
      if (showAnswers) {
        pdf.setFont("helvetica", "bold"); pdf.setTextColor(34, 197, 94);
        pdf.text(`Resp.: ${safeText(p.respuesta)}`, mx + 4, y);
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
      const qLines = pdf.splitTextToSize(`${i + 1}. ${safeText(p.enunciado)}`, cW);
      checkPage(qLines.length * 4.5 + BLANK_LINES * 6 + 12);
      pdf.setFontSize(9); pdf.setFont("helvetica", "normal"); pdf.setTextColor(20, 20, 20);
      pdf.text(qLines, mx, y);
      y += qLines.length * 4.5 + 2;
      pdf.setFontSize(7.5); pdf.setTextColor(120, 120, 120);
      pdf.text(`(${p.puntos} pts)`, mx + 2, y);
      y += 5;
      if (showAnswers) {
        const guiaLines = pdf.splitTextToSize(`Guia de corrección: ${safeText(p.guia)}`, cW - 4);
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
  const pageCount = pdf.getNumberOfPages();
  for (let i = 1; i <= pageCount; i++) {
    pdf.setPage(i);
    pdf.setFontSize(7); pdf.setFont("helvetica", "normal"); pdf.setTextColor(160, 160, 160);
    pdf.text("BioAula3D · bio-aula3-d.vercel.app", mx, 293);
    pdf.text(`Página ${i} de ${pageCount}`, W - mx, 293, { align: "right" });
  }
  return pdf;
}

function EvalCard({ ev }: { ev: Evaluacion }) {
  const [expanded, setExpanded] = useState(false);
  const [loading, setLoading] = useState<"" | "alumno" | "docente" | "share-alumno" | "share-docente">("");
  const [checked, setChecked] = useState<boolean[]>(() => ev.preguntas.map(() => true));

  const puntajeTotal = ev.preguntas.reduce((s, p) => s + p.puntos, 0);
  const checkedCount = checked.filter(Boolean).length;

  const handleExport = async (showAnswers: boolean) => {
    setLoading(showAnswers ? "docente" : "alumno");
    try {
      const filteredEv = { ...ev, preguntas: ev.preguntas.filter((_, i) => checked[i]) };
      const pdf = await exportEvalPDF(filteredEv, showAnswers);
      pdf.save(`BioAula3D-Eval-${ev.id}${showAnswers ? "-respuestas" : ""}.pdf`);
    } finally { setLoading(""); }
  };

  const handleShare = async (showAnswers: boolean) => {
    setLoading(showAnswers ? "share-docente" : "share-alumno");
    try {
      const filteredEv = { ...ev, preguntas: ev.preguntas.filter((_, i) => checked[i]) };
      const pdf = await exportEvalPDF(filteredEv, showAnswers);
      const blob = pdf.output("blob");
      const fileName = `BioAula3D-Eval-${ev.id}${showAnswers ? "-respuestas" : ""}.pdf`;
      const file = new File([blob], fileName, { type: "application/pdf" });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: `${ev.titulo}${showAnswers ? " — Respuestas" : ""}`,
          text: `BioAula3D · ${ev.nivel} · ${ev.modulo}`,
        });
      } else {
        pdf.save(fileName);
      }
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
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-slate-400">Seleccioná las preguntas a incluir en el PDF:</span>
            <span className="text-xs font-semibold text-emerald-400">{checkedCount}/{ev.preguntas.length} preguntas</span>
          </div>
          <div className="grid grid-cols-1 gap-2">
            {ev.preguntas.map((p, i) => (
              <div key={i} className="flex gap-3 text-sm items-start">
                <button
                  onClick={() => setChecked(c => c.map((v, j) => j === i ? !v : v))}
                  className={`flex-shrink-0 w-5 h-5 rounded flex items-center justify-center text-xs border transition-all mt-0.5 ${
                    checked[i] ? "bg-emerald-500 border-emerald-500 text-white" : "border-slate-600 text-slate-600"
                  }`}>
                  {checked[i] ? "✓" : ""}
                </button>
                <span className="text-slate-600 flex-shrink-0 w-5">{i + 1}.</span>
                <div className={`flex-1 transition-opacity ${checked[i] ? "opacity-100" : "opacity-40"}`}>
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

          <div className="flex gap-2 pt-2 flex-wrap items-center">
            <button onClick={() => handleExport(false)} disabled={loading !== "" || checkedCount === 0}
              className="flex items-center gap-1.5 px-4 py-2 bg-white text-slate-900 rounded-lg text-sm font-semibold hover:bg-slate-100 transition-all disabled:opacity-60">
              {loading === "alumno" ? "⏳ Generando…" : "📄 PDF alumno"}
            </button>
            <button onClick={() => handleShare(false)} disabled={loading !== "" || checkedCount === 0}
              className="flex items-center gap-1.5 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm font-semibold transition-all disabled:opacity-60">
              {loading === "share-alumno" ? "⏳ Generando…" : "📤 Enviar alumno"}
            </button>
            <button onClick={() => handleExport(true)} disabled={loading !== "" || checkedCount === 0}
              className="flex items-center gap-1.5 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-black rounded-lg text-sm font-semibold transition-all disabled:opacity-60">
              {loading === "docente" ? "⏳ Generando…" : "🔑 PDF con respuestas"}
            </button>
            <button onClick={() => handleShare(true)} disabled={loading !== "" || checkedCount === 0}
              className="flex items-center gap-1.5 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-sm font-semibold transition-all disabled:opacity-60">
              {loading === "share-docente" ? "⏳ Generando…" : "📤 Enviar respuestas"}
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

  useEffect(() => {
    const m = new URLSearchParams(window.location.search).get("modulo");
    if (m) setModulo(m);
  }, []);

  const filtered = useMemo(() => evaluaciones.filter(e =>
    (nivel === "Todas" || e.nivel === nivel) &&
    (!modulo || e.modulo === modulo)
  ), [nivel, modulo]);

  const primCount = evaluaciones.filter(e => e.nivel === "Primaria").length;
  const secCount = evaluaciones.filter(e => e.nivel === "Secundaria").length;

  const [notasOpen, setNotasOpen] = useState(false);
  const [notasDate, setNotasDate] = useState(() => new Date().toLocaleDateString("es-AR", { day: "2-digit", month: "2-digit", year: "numeric" }));
  const [notasText, setNotasText] = useState("");

  const handleExportNotas = async () => {
    const { default: jsPDF } = await import("jspdf");
    const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
    const W = 210; const mx = 15; const cW = W - mx * 2; let y = 15;
    pdf.setFillColor(15, 23, 42); pdf.rect(0, 0, W, 22, "F");
    pdf.setFontSize(13); pdf.setFont("helvetica", "bold"); pdf.setTextColor(255, 255, 255);
    pdf.text("Notas · Banco de Evaluaciones", mx, 11);
    pdf.setFontSize(8); pdf.setFont("helvetica", "normal"); pdf.setTextColor(180, 180, 180);
    pdf.text(`BioAula3D · ${notasDate}`, mx, 18);
    y = 30;
    pdf.setFontSize(10); pdf.setFont("helvetica", "normal"); pdf.setTextColor(20, 20, 20);
    const lines = pdf.splitTextToSize(notasText || "(Sin contenido)", cW);
    pdf.text(lines, mx, y);
    pdf.save(`BioAula3D-Notas-Evaluaciones-${notasDate.replace(/\//g, "-")}.pdf`);
  };

  const handleShareNotas = async () => {
    const text = `Notas Banco de Evaluaciones - ${notasDate}\n\n${notasText}`;
    if (navigator.share) await navigator.share({ title: "Notas · Evaluaciones", text });
    else await navigator.clipboard.writeText(text);
  };

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
          <button onClick={() => setNotasOpen(true)} className="mt-4 flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-sm font-semibold transition-all">
            📝 Notas docente
          </button>
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

      {notasOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-end justify-center p-0" onClick={() => setNotasOpen(false)}>
          <div className="notas-sheet bg-slate-900 border-t border-slate-700 rounded-t-2xl w-full max-w-lg p-5 pb-8 space-y-3" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <div><span className="text-base font-bold text-white">📝 Notas</span><span className="text-slate-500 text-xs ml-2">Banco de Evaluaciones</span></div>
              <button onClick={() => setNotasOpen(false)} className="text-slate-500 hover:text-white text-lg leading-none transition-colors">✕</button>
            </div>
            <input type="text" value={notasDate} onChange={e => setNotasDate(e.target.value)} placeholder="Fecha (ej. 04/06/2026)" className="w-full bg-slate-800 text-white rounded-lg px-3 py-2 text-sm border border-slate-700 focus:outline-none focus:border-slate-500 transition-colors" />
            <textarea value={notasText} onChange={e => setNotasText(e.target.value)} placeholder="Anotá lo que necesités sobre evaluaciones..." rows={8} className="w-full bg-slate-800 text-white rounded-lg px-3 py-2 text-sm border border-slate-700 focus:outline-none focus:border-slate-500 resize-none transition-colors leading-relaxed" />
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

