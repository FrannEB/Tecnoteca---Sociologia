/* ==========================================================================
   LOS 4 ESTANTES DE LA BIBLIOTECA (según el boceto del grupo)
   --------------------------------------------------------------------------
   Cada estante tiene:
   - materias: id de las materias del profesorado (profesorado.js)
   - temas: { t: título, d: descripción }
   - autores (opcional): { n: nombre, idea: idea central }
   - glosario (opcional): { t: término, d: definición }
   - conceptos (opcional): id del glosario general (conceptos.js)
   - recursos: id de recursos.js
   - enlaces: atajos a otras secciones { t, d, h }
   - biblio (opcional): bibliografía de cátedra
   ========================================================================== */
window.PET = window.PET || {};

PET.areas = [
  {
    id: "ambiental", num: 1, color: "sky", icon: "leaf",
    titulo: "Educación Ambiental & CTSA",
    desc: "Contenidos de Ciencia, Tecnología, Sociedad y Ambiente. Cuidado del planeta y Educación Ambiental Integral (EAI).",
    intro: "El enfoque CTSA propone analizar la ciencia y la tecnología como actividades humanas, atravesadas por intereses, valores y consecuencias sociales y ambientales. La Ley 27.621 establece la Educación Ambiental Integral como política pública en todo el sistema educativo argentino.",
    materias: ["biotec-ctsa", "quimica", "fisica", "prod-agro", "politicas-economicas", "etica"],
    temas: [
      { t: "Enfoque CTSA", d: "Estudiar la ciencia y la tecnología en su contexto: quién decide, quién se beneficia, qué riesgos hay y qué alternativas existen." },
      { t: "Educación Ambiental Integral", d: "El ambiente como contenido transversal, con perspectiva de derechos, participación ciudadana y cuidado de los bienes comunes." },
      { t: "Selva Paranaense y territorio", d: "Misiones conserva uno de los remanentes más extensos de Selva Paranaense (Bosque Atlántico): biodiversidad, deforestación, monocultivos y áreas protegidas." },
      { t: "Energía y ambiente", d: "Fuentes renovables y no renovables, eficiencia, impactos de las grandes obras como Yacyretá y aprovechamiento de la biomasa forestal." },
      { t: "Consumo, residuos y ciclo de vida", d: "Reciclabilidad, reutilización, obsolescencia programada y consumo responsable de productos tecnológicos." },
      { t: "Biotecnología y bioética", d: "Micropropagación, bioinsumos y organismos genéticamente modificados: beneficios, riesgos y debates éticos." }
    ],
    conceptos: ["sustentabilidad", "ciclo-vida", "obsolescencia", "biotecnologia", "colores-biotecnologia", "sistema-sociotecnico", "coexistencia", "transformacion-energia", "determinismo"],
    recursos: ["doc-ley-27621", "vid-eai-ministerio", "vid-eai-presentacion", "vid-biofabrica", "vid-forestacion", "vid-yacyreta-encuentro", "site-inta", "site-biofabrica"],
    enlaces: [
      { t: "Tecnología en Misiones", d: "Yerba, té, Yacyretá, forestoindustria y biotecnología como casos de aula.", h: "misiones.html" },
      { t: "Los colores de la biotecnología", d: "Infografía y casos misioneros para cada rama.", h: "misiones.html#biotecnologia" },
      { t: "Secuencia: energía que viene del río", d: "Yacyretá: transformaciones de energía e impactos.", h: "secuencias.html#yacyreta" },
      { t: "Secundaria 1° año", d: "Biotecnología, energías renovables y sustentabilidad en el DC Misiones.", h: "niveles.html#secundaria-sec1" }
    ]
  },
  {
    id: "tecnologica", num: 2, color: "brand", icon: "robot",
    titulo: "Educación Tecnológica y Robótica",
    desc: "Didáctica de la Tecnología. Robótica educativa y programación. Prototipado y proyectos.",
    intro: "El estante más completo de la biblioteca: los contenidos curriculares del área para cada sala, grado y año según los NAP y el Diseño Curricular de Misiones, con conceptos, secuencias didácticas y herramientas para el aula.",
    materias: ["et1", "et2", "didactica-et1", "didactica-et2", "prog-robotica", "sist-rep", "historia-tec", "investigacion", "aula-taller", "prod-industrial", "gestion"],
    temas: [
      { t: "Los tres ejes del área", d: "Procesos tecnológicos, medios técnicos y reflexión sobre la tecnología como proceso sociocultural." },
      { t: "Didáctica de la Tecnología", d: "Análisis de producto, resolución de problemas de diseño, proyecto tecnológico y enfoque sistémico." },
      { t: "Robótica educativa y programación", d: "Pensamiento computacional, algoritmos, sensores, actuadores y control automático (NAP de Educación Digital, Programación y Robótica)." },
      { t: "Prototipado y proyectos", d: "Del boceto al prototipo: materiales, mecanismos, circuitos, diseño 3D e impresión 3D." },
      { t: "Contenidos esenciales y emergentes", d: "La propuesta del Diseño Curricular de Misiones 2022 para el Ciclo Básico de secundaria." },
      { t: "Ecosistema misionero", d: "Escuela de Robótica, Silicon Misiones y el Parque Industrial y de la Innovación como casos de estudio." }
    ],
    conceptos: ["proceso", "enfoque-sistemico", "analisis-producto", "diseno", "proyecto-tecnologico", "algoritmo", "pensamiento-computacional", "robot", "sensor", "lazo-cerrado"],
    recursos: ["doc-dc-misiones-2022", "doc-nap-secundaria", "doc-nap-primaria-2", "doc-cuadernos-tec-1", "doc-nap-edpr", "tool-tinkercad", "tool-pilas-bloques", "vid-escuela-robotica", "vid-semaforo-tinkercad"],
    enlaces: [
      { t: "Contenidos por nivel", d: "Sala por sala, grado por grado y año por año.", h: "niveles.html" },
      { t: "Conceptos y diagramas", d: "Glosario del área y simuladores interactivos.", h: "conceptos.html" },
      { t: "Secuencias didácticas", d: "Propuestas completas listas para imprimir.", h: "secuencias.html" },
      { t: "Planificador", d: "Armá el esqueleto de tu planificación.", h: "planificador.html" }
    ]
  },
  {
    id: "social", num: 3, color: "gold", icon: "people",
    titulo: "Educación Social & Sociología",
    desc: "Sociología de la Educación. Comprensión del ser humano en sociedad y contexto.",
    intro: "Herramientas para pensar la escuela como institución social: sus funciones, sus desigualdades y las políticas que buscan garantizar el derecho a la educación. En este estante también vive el proyecto socioeducativo que dio origen a la biblioteca.",
    materias: ["sociologia", "historia-politica", "etica", "filosofia", "pedagogia"],
    temas: [
      { t: "Funciones sociales de la escuela", d: "Orígenes y mandatos fundacionales de la escuela moderna, nuevas demandas y nuevas funciones." },
      { t: "Transmisión cultural y socialización", d: "La escuela como espacio donde se transmite la cultura y se forman sujetos sociales." },
      { t: "Igualdad de oportunidades y movilidad social", d: "¿La escuela iguala o reproduce las desigualdades? Origen social, mérito y trayectorias escolares." },
      { t: "Sistema educativo nacional y provincial", d: "Ley de Educación Nacional 26.206 y Ley General de Educación de Misiones: niveles, modalidades y obligatoriedad." },
      { t: "Programas y proyectos socioeducativos", d: "Políticas públicas que acompañan las trayectorias y cómo diseñar un proyecto según Ander-Egg y Aguilar." },
      { t: "Acceso a la tecnología y a los bienes culturales", d: "Brechas digitales y desigualdad en el acceso a recursos para aprender." }
    ],
    autores: [
      { n: "Émile Durkheim", idea: "La educación como socialización metódica de las nuevas generaciones." },
      { n: "Pierre Bourdieu", idea: "Habitus, capital cultural y reproducción: cómo la escuela puede legitimar desigualdades de origen." },
      { n: "Ana María Brígido", idea: "Sociología de la Educación (2006): la escuela como objeto de la sociología y sus funciones sociales." },
      { n: "Emilio Tenti Fanfani", idea: "Estudios sobre la escuela, los docentes y la cuestión social en la Argentina." },
      { n: "Ezequiel Ander-Egg y María José Aguilar", idea: "Metodología para diseñar proyectos sociales y culturales: del diagnóstico a la acción." }
    ],
    glosario: [
      { t: "Socialización", d: "Proceso por el cual las personas incorporan normas, valores y saberes de su sociedad. La escuela es una agencia de socialización secundaria; la familia, de la primaria." },
      { t: "Habitus", d: "Para Bourdieu, sistema de disposiciones duraderas, incorporadas según la posición social, que orientan cómo percibimos, pensamos y actuamos." },
      { t: "Capital cultural", d: "Saberes, títulos, hábitos y bienes culturales. La escuela tiende a premiar el capital cultural de quienes ya lo traen de su hogar." },
      { t: "Movilidad social", d: "Cambio de posición social de una persona o grupo respecto de su origen. Históricamente se pensó a la educación como su motor." },
      { t: "Proyecto socioeducativo", d: "Intervención planificada que articula escuela, comunidad y Estado para garantizar el derecho a la educación." }
    ],
    biblio: [
      "Ander-Egg, E. y Aguilar, M. J. (s. f.). Cómo elaborar un proyecto: Guía para diseñar proyectos sociales y culturales. Instituto de Ciencias Sociales Aplicadas (ICSA).",
      "Bourdieu, P. (1980). «Estructura, habitus y prácticas». En El sentido práctico. Buenos Aires: Siglo Veintiuno, 2007, pp. 85-105.",
      "Brígido, A. M. (2006). «Capítulo II. Sociología de la escuela». En Sociología de la Educación. Editorial Brujas."
    ],
    recursos: ["doc-ley-26206", "doc-ley-misiones", "vid-bourdieu-reproduccion", "vid-bourdieu-campo", "vid-triptico", "vid-triptico-canva", "site-cge"],
    enlaces: [
      { t: "Nuestro proyecto socioeducativo", d: "Diseño del proyecto según Ander-Egg y Aguilar.", h: "proyecto.html#psc" },
      { t: "Profesorado: 3° año", d: "Sociología de la Educación e Historia y Política de la Educación Argentina.", h: "profesorado.html#anio-3" },
      { t: "Reflexión sociocultural", d: "El eje del área de Tecnología que dialoga con la sociología.", h: "conceptos.html#sistema-sociotecnico" }
    ]
  },
  {
    id: "pedagogia", num: 4, color: "sun", icon: "bulb",
    titulo: "Pedagogía, Sujeto y Psicología Educacional",
    desc: "Pedagogía y práctica educativa. Sujeto de la Educación. Psicología Educacional y procesos de aprendizaje.",
    intro: "Los fundamentos para enseñar: cómo aprenden las personas, quiénes son nuestros estudiantes y cómo planificar, enseñar y evaluar en la práctica y la residencia.",
    materias: ["pedagogia", "didactica-general", "psico-educacional", "sujeto", "tolye", "esi", "practica1", "practica2", "practica3", "residencia"],
    temas: [
      { t: "Teorías del aprendizaje", d: "Constructivismo (Piaget), enfoque sociocultural (Vigotsky), aprendizaje significativo (Ausubel) y por descubrimiento (Bruner)." },
      { t: "Sujeto de la educación", d: "Infancias, adolescencias y juventudes: contextos, culturas y consumos tecnológicos." },
      { t: "Didáctica y planificación", d: "Propósitos, objetivos, contenidos, actividades y evaluación: de la secuencia a la planificación." },
      { t: "Evaluación formativa", d: "Evaluar para aprender: criterios claros, retroalimentación e instrumentos como rúbricas y listas de cotejo." },
      { t: "Educación Sexual Integral", d: "Ley 26.150: derecho de niñas, niños y adolescentes a recibir ESI en todos los niveles, con enfoque transversal." },
      { t: "Práctica y residencia", d: "Observar, planificar, enseñar y reflexionar sobre la propia práctica docente." }
    ],
    autores: [
      { n: "Jean Piaget", idea: "El sujeto construye el conocimiento en interacción con el objeto; desarrollo cognitivo por estadios." },
      { n: "Lev Vigotsky", idea: "El aprendizaje es social y mediado; zona de desarrollo próximo." },
      { n: "David Ausubel", idea: "Aprendizaje significativo: lo nuevo se ancla en lo que ya se sabe." },
      { n: "Jerome Bruner", idea: "Aprendizaje por descubrimiento y andamiaje." },
      { n: "Paulo Freire", idea: "Crítica a la «educación bancaria»; educación dialógica y problematizadora." }
    ],
    glosario: [
      { t: "Zona de desarrollo próximo", d: "Distancia entre lo que un estudiante logra hacer solo y lo que logra con la guía de alguien más experto." },
      { t: "Andamiaje", d: "Ayudas temporales que el docente ofrece y retira a medida que el estudiante gana autonomía." },
      { t: "Aprendizaje significativo", d: "Aprendizaje en el que los nuevos contenidos se relacionan de modo sustantivo con saberes previos." },
      { t: "Transposición didáctica", d: "Transformación del saber académico en saber enseñable en el aula." },
      { t: "Evaluación formativa", d: "Evaluación durante el proceso, orientada a mejorar el aprendizaje y la enseñanza." }
    ],
    recursos: ["doc-ley-26150", "vid-vigotsky", "vid-piaget", "vid-freire", "vid-esi"],
    enlaces: [
      { t: "Planificador", d: "Pasá de los contenidos a una planificación completa.", h: "planificador.html" },
      { t: "Secuencias didácticas", d: "Ejemplos con momentos, materiales y evaluación.", h: "secuencias.html" },
      { t: "Nivel Inicial por sala", d: "Cómo cambia la enseñanza según la edad.", h: "niveles.html#inicial-s3" }
    ]
  }
];
