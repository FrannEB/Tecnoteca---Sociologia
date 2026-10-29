/* ==========================================================================
   PROYECTO SOCIOEDUCATIVO — Plantilla de Ander-Egg y Aguilar
   (Trabajo Integrador Obligatorio N° 3 · Eje 3)
   --------------------------------------------------------------------------
   ESTA SECCIÓN LA COMPLETA EL GRUPO.
   - Escribí el texto dentro de las comillas de "v".
   - Si "v" queda vacío (""), la página muestra la pregunta guía como
     recordatorio de que falta completarlo.
   - Para listas (objetivos, metas, actividades), usá corchetes:
       v: ["Primer ítem", "Segundo ítem"]
   - Para el cronograma, cada fila es { tarea, responsable, recursos, tiempo }.
   ========================================================================== */
window.PET = window.PET || {};

PET.proyecto = {
  titulo: "Biblioteca Virtual para Futuros Docentes",
  lema: "Un espacio solidario y socioeducativo para compartir saberes y recursos para nuestra formación.",
  secciones: [
    {
      id: "denominacion", n: "1", titulo: "Denominación del proyecto",
      campos: [
        { k: "Título del proyecto", v: "Biblioteca Virtual para Futuros Docentes",
          guia: "Un nombre breve y representativo de la propuesta socioeducativa." },
        { k: "Institución ejecutora", v: "",
          guia: "¿Qué institución podría llevar adelante el proyecto? (una escuela, un organismo municipal, un centro comunitario o una institución educativa)." },
        { k: "Organismo patrocinante y responsables", v: "",
          guia: "¿Qué organismo estatal, programa o institución podría acompañar o financiar la propuesta? ¿Quiénes serían responsables de implementarla?" }
      ]
    },
    {
      id: "naturaleza", n: "2", titulo: "Naturaleza del proyecto",
      campos: [
        { k: "a. Descripción", p: "¿Qué se quiere hacer?", v: "",
          guia: "Presenten la propuesta: en qué consiste, qué acciones contempla y qué necesidad busca atender en Posadas." },
        { k: "b. Fundamentación", p: "¿Por qué se hace?", v: "",
          guia: "Describan la problemática social y educativa, sus causas y consecuencias. Incorporen datos, fuentes confiables y conceptos de los autores de la materia (Bourdieu, Brígido…). Expliquen por qué es necesaria la intervención del Estado." },
        { k: "c. Marco institucional", p: "¿Quiénes lo llevarán adelante?", v: "",
          guia: "Describan la institución responsable, sus funciones y su relación con la problemática. ¿Con qué otros organismos podría articular?" },
        { k: "d. Finalidad", p: "¿Qué impacto se espera lograr?", v: "",
          guia: "¿Qué transformación social o educativa se busca favorecer a largo plazo?" },
        { k: "e. Objetivo general", p: "¿Para qué se hace?", v: "",
          guia: "El cambio principal que se busca lograr." },
        { k: "e. Objetivos específicos", v: [],
          guia: "Entre dos y cuatro logros concretos que permitan alcanzar el objetivo general." },
        { k: "f. Metas", p: "¿Cuánto se quiere hacer?", v: [],
          guia: "Resultados concretos y verificables: cantidad de destinatarios, talleres, instituciones o actividades, con sus plazos." },
        { k: "g. Beneficiarios directos", p: "¿A quién va dirigido?", v: "",
          guia: "La población destinataria principal." },
        { k: "g. Beneficiarios indirectos", v: "",
          guia: "Quiénes se benefician de forma indirecta." },
        { k: "h. Localización y cobertura", p: "¿Dónde se hará?", v: "",
          guia: "Posadas, un barrio, una escuela o un espacio comunitario. Justifiquen la elección a partir del diagnóstico." }
      ]
    },
    {
      id: "actividades", n: "3", titulo: "Actividades, tareas y cronograma",
      campos: [
        { k: "Actividades y tareas", v: [],
          guia: "Las acciones necesarias para alcanzar los objetivos, en secuencia: qué se hará, quiénes serán responsables, qué recursos se usarán y cuánto tiempo demandará cada una." }
      ],
      cronograma: []
    },
    {
      id: "recursos", n: "4", titulo: "Recursos necesarios",
      campos: [
        { k: "Recursos humanos", v: [],
          guia: "Docentes, talleristas, profesionales, referentes comunitarios, personal técnico." },
        { k: "Recursos materiales", v: [],
          guia: "Espacios físicos, mobiliario, materiales didácticos, equipamiento e insumos." }
      ]
    }
  ]
};
