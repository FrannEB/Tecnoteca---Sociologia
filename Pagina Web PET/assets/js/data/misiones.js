/* ==========================================================================
   TECNOLOGÍA EN MISIONES — Casos regionales para contextualizar
   --------------------------------------------------------------------------
   Imágenes: Wikimedia Commons (licencias libres, se citan autor y licencia).
   Para usar fotos propias: guardalas en assets/img/ y cambiá "src".
   ========================================================================== */
window.PET = window.PET || {};

const WM = "https://upload.wikimedia.org/wikipedia/commons/thumb/";
const wm = (path) => `${WM}${path}/960px-${path.split("/").pop()}`;
const wmPage = (path) => "https://commons.wikimedia.org/wiki/File:" + path.split("/").pop();

PET.imagenes = {
  "yerba-secado": { src: wm("0/07/Misiones_-_Secado_de_la_Yerba_Mate.jpg"), alt: "Hojas de yerba mate secándose en un secadero de Campo Ramón, Misiones", autor: "Leandro Kibisz", licencia: "CC BY-SA 4.0", pagina: wmPage("0/07/Misiones_-_Secado_de_la_Yerba_Mate.jpg") },
  "yerba-raido": { src: wm("e/ed/Misiones_-_Ra%C3%ADdo_de_Yerba_Mate.jpg"), alt: "Raídos de yerba mate: lienzos atados con hoja cosechada antes de ir al secadero", autor: "Leandro Kibisz", licencia: "CC BY-SA 4.0", pagina: wmPage("e/ed/Misiones_-_Ra%C3%ADdo_de_Yerba_Mate.jpg") },
  "yerba-canchada": { src: wm("b/b4/Misiones_-_Yerba_Mate_Canchada.jpg"), alt: "Yerba mate canchada en un secadero, antes de ir al molino", autor: "Leandro Kibisz", licencia: "CC BY-SA 4.0", pagina: wmPage("b/b4/Misiones_-_Yerba_Mate_Canchada.jpg") },
  "yerbal-pinos": { src: wm("c/cd/Misiones_1994_12.jpg"), alt: "Yerbal bajo cubierta de pinos en Misiones", autor: "LBM1948", licencia: "CC BY-SA 4.0", pagina: wmPage("c/cd/Misiones_1994_12.jpg") },
  "te": { src: wm("e/e7/Plantaci%C3%B3n_de_t%C3%A9_cerca_de_Guaran%C3%AD%2C_Misiones%2C_Argentina.jpg"), alt: "Plantación de té cerca de Guaraní, Misiones", autor: "Geogast", licencia: "CC BY 3.0", pagina: wmPage("e/e7/Plantaci%C3%B3n_de_t%C3%A9_cerca_de_Guaran%C3%AD%2C_Misiones%2C_Argentina.jpg") },
  "yacy-turbinas": { src: wm("7/7e/Turbine_hall_in_Yacyret%C3%A1_dam_105030.jpg"), alt: "Sala de máquinas de la central hidroeléctrica Yacyretá", autor: "Cmasi", licencia: "CC BY-SA 4.0", pagina: wmPage("7/7e/Turbine_hall_in_Yacyret%C3%A1_dam_105030.jpg") },
  "yacy-central": { src: wm("0/0b/La_central_desde_aguas_arriba.jpg"), alt: "La central Yacyretá vista desde aguas arriba del río Paraná", autor: "Germán Ramírez", licencia: "CC0", pagina: wmPage("0/0b/La_central_desde_aguas_arriba.jpg") },
  "robotica": { src: wm("2/20/Escuela_de_Rob%C3%B3tica_de_Puerto_Leoni.jpg"), alt: "Escuela de Robótica de Puerto Leoni, Misiones", autor: "Horacio Cambeiro", licencia: "CC BY 3.0", pagina: wmPage("2/20/Escuela_de_Rob%C3%B3tica_de_Puerto_Leoni.jpg") },
  "puente": { src: wm("c/ca/Puente_Internacional_San_Roque_Gonzalez_de_Santa_Cruz_%2842729%29.jpg"), alt: "Puente Internacional San Roque González de Santa Cruz entre Posadas y Encarnación", autor: "Horacio Cambeiro", licencia: "CC BY 4.0", pagina: wmPage("c/ca/Puente_Internacional_San_Roque_Gonzalez_de_Santa_Cruz_%2842729%29.jpg") },
  "arduino": { src: wm("d/de/Arduino_Uno_board.jpg"), alt: "Placa Arduino Uno", autor: "JrawX", licencia: "CC0", pagina: wmPage("d/de/Arduino_Uno_board.jpg") }
};

PET.casos = [
  {
    id: "yerba", titulo: "Yerba mate", bajada: "El proceso productivo emblema de Misiones: del yerbal al mate.",
    img: "yerba-secado", img2: "yerba-raido", color: "var(--gold-ink)",
    texto: [
      "Misiones y el nordeste de Corrientes concentran la producción de yerba mate del país. Es un sistema sociotécnico completo: plantas, chacras, tareferos, secaderos, molinos, cooperativas, el Instituto Nacional de la Yerba Mate (INYM) y una práctica cultural compartida.",
      "Permite trabajar los tres ejes: las operaciones del proceso, las máquinas y el control de temperatura y humedad, y los cambios en el trabajo cuando se mecaniza la cosecha o coexisten el barbacuá artesanal y el secadero industrial."
    ],
    proceso: ["Cosecha (tarefa) manual o mecanizada", "Transporte en raídos al secadero", "Zapecado: golpe de fuego que detiene la oxidación", "Secanza con aire caliente", "Canchado: triturado grueso", "Estacionamiento natural o acelerado", "Molienda y mezcla", "Envasado y distribución"],
    contenidos: [
      { g: "p3", t: "3° grado: del insumo al producto, contextos de trabajo" },
      { g: "p5", t: "5° grado: de la tarefa manual a la cosechadora" },
      { g: "sec1", t: "1° año: procesos, tipos de organización, rol de las personas" },
      { g: "sec2", t: "2° año: costos, escalas de producción, casos locales" }
    ],
    preguntas: ["¿Qué operaciones son de transformación, de transporte y de almacenamiento?", "¿Qué se controla en el secadero y cómo? ¿Quién lo controla?", "¿Cómo cambió el trabajo de los tareferos con la mecanización?", "¿Por qué conviven el barbacuá y el secadero industrial?"],
    videos: ["vid-yerba-inym", "vid-yerba-industrial"], sitio: "site-inym", secuencia: "yerba"
  },
  {
    id: "te", titulo: "Té", bajada: "Misiones produce la mayor parte del té argentino, en gran parte para exportación.",
    img: "te", color: "var(--gold-ink)",
    texto: [
      "El té se cultiva sobre todo en el centro de la provincia (Oberá, Campo Viera, Guaraní y alrededores). La cosecha está muy mecanizada y la elaboración se hace en secaderos industriales.",
      "Es ideal para analizar operaciones de cambio de propiedades (marchitado, oxidación, secado), procesos continuos, control de calidad y la relación entre producción regional y mercado internacional."
    ],
    proceso: ["Cosecha mecanizada de brotes", "Marchitado (pierde humedad)", "Enrollado o corte (CTC)", "Oxidación o «fermentación»", "Secado", "Clasificación por tamaño", "Envasado a granel o en saquitos"],
    contenidos: [
      { g: "p3", t: "3° grado: operaciones y analogías con otros procesos" },
      { g: "sec1", t: "1° año: biotecnología tradicional, procesos continuos" },
      { g: "sec2", t: "2° año: estaciones meteorológicas, datos para el productor" }
    ],
    preguntas: ["¿En qué se parece y en qué se diferencia del proceso de la yerba?", "¿Qué operación cambia el color de la hoja verde a negra?", "¿Qué implica para la región producir para exportar?"],
    videos: ["vid-te-caracteristicas", "vid-te-ruta"], sitio: "site-inta"
  },
  {
    id: "yacyreta", titulo: "Yacyretá y la energía", bajada: "La central hidroeléctrica binacional sobre el río Paraná.",
    img: "yacy-turbinas", img2: "yacy-central", color: "var(--gold-ink)",
    texto: [
      "Yacyretá es una central hidroeléctrica binacional (Argentina–Paraguay) ubicada sobre el Paraná, aguas abajo de Posadas. Con sus 20 turbinas es una de las mayores fuentes de energía eléctrica del país.",
      "Su embalse transformó la costa de Posadas y Encarnación: relocalización de familias, nuevas costaneras, cambios ambientales. Es un caso potente para el eje sociocultural y para comparar con otras fuentes presentes en Misiones: biomasa forestal, solar en escuelas rurales, pequeñas centrales."
    ],
    proceso: ["Embalse: el agua acumula energía potencial", "Compuertas y conducto forzado", "Turbinas: energía del agua → movimiento", "Generadores: movimiento → electricidad", "Transformadores elevan la tensión", "Líneas de transmisión al sistema interconectado"],
    contenidos: [
      { g: "p6", t: "6° grado: procesos de generación de energía" },
      { g: "sec1", t: "1° año: obtención y conversión de energía, eficiencia, impacto" },
      { g: "sec2", t: "2° año: producción hidroeléctrica como caso local" }
    ],
    preguntas: ["¿Qué transformaciones de energía ocurren desde el río hasta tu casa?", "¿Qué ventajas y desventajas tiene frente a una central térmica o un parque solar?", "¿Quiénes ganaron y quiénes perdieron con la obra?"],
    videos: ["vid-yacyreta-encuentro", "vid-yacyreta-energia"], sitio: "site-eby", secuencia: "yacyreta"
  },
  {
    id: "forestal", titulo: "Forestoindustria", bajada: "Pinos, eucaliptos, aserraderos y celulosa: la cadena de la madera.",
    img: "yerbal-pinos", color: "var(--gold-ink)",
    texto: [
      "Misiones es una de las provincias con mayor superficie de plantaciones forestales del país, sobre todo de pino. La cadena incluye viveros, plantaciones, aserraderos, fábricas de tableros, celulosa y papel, y carpinterías.",
      "Sirve para estudiar el conformado de materiales duros (aserrar, cepillar, tornear), el secado como cambio de propiedades, el aprovechamiento de residuos como biomasa para energía y el debate sobre monocultivos y sustentabilidad."
    ],
    proceso: ["Vivero y plantación", "Raleo y cosecha (apeo)", "Transporte de rollos", "Aserrado y cepillado", "Secado en horno", "Productos: tablas, tableros, pulpa", "Residuos: aserrín y chips para energía"],
    contenidos: [
      { g: "p4", t: "4° grado: conformado de materiales duros, aserraderos" },
      { g: "sec1", t: "1° año: monocultivos, biomasa, cadenas de valor sostenibles" },
      { g: "sec2", t: "2° año: casos de producción primaria local (pino)" }
    ],
    preguntas: ["¿Qué operaciones se hacen sobre la madera desde el árbol hasta la tabla?", "¿Por qué el aserrín puede ser un insumo y no un residuo?", "¿Qué efectos tienen los monocultivos forestales?"],
    videos: ["vid-forestacion", "vid-industria"], sitio: "site-inta"
  },
  {
    id: "biotecnologia", titulo: "Biotecnología misionera", bajada: "Micropropagación, bioinsumos y los colores de la biotecnología.",
    img: null, color: "var(--gold-ink)",
    texto: [
      "La Biofábrica Misiones es una empresa provincial de biotecnología vegetal: produce plantines por cultivo in vitro (micropropagación) y bioinsumos para la producción agropecuaria.",
      "El Diseño Curricular propone trabajar «los colores de la biotecnología misionera»: buscar ejemplos regionales para cada rama de la biotecnología y analizar beneficios, riesgos y debates éticos."
    ],
    proceso: ["Selección de la planta madre", "Desinfección e introducción in vitro", "Multiplicación en medios de cultivo", "Enraizamiento", "Aclimatación en invernadero", "Entrega de plantines al productor"],
    contenidos: [
      { g: "sec1", t: "1° año: biotecnología tradicional y moderna (esencial y emergente)" },
      { g: "sec-co", t: "Ciclo orientado: sistema de innovación, ética" }
    ],
    preguntas: ["¿Qué diferencia hay entre la fermentación del pan y la micropropagación?", "¿Qué ventajas tiene producir plantines iguales? ¿Qué riesgos?", "¿Qué color de la biotecnología corresponde a cada caso misionero?"],
    videos: ["vid-biofabrica", "vid-biofabrica-senasa"], sitio: "site-biofabrica"
  },
  {
    id: "innovacion", titulo: "Innovación, robótica y conocimiento", bajada: "Silicon Misiones, la Escuela de Robótica y el Parque Industrial y de la Innovación.",
    img: "robotica", color: "var(--gold-ink)",
    texto: [
      "Misiones impulsa un ecosistema de innovación en Posadas: Silicon Misiones (un proyecto asociativo de empresas de base tecnológica, universidades e institutos), el Polo TIC, el Parque Industrial y de la Innovación y la Escuela de Robótica, pública y gratuita, que funciona desde 2017 y forma a estudiantes y docentes.",
      "El DC 2022 incluye como contenidos emergentes el caso del Parque Industrial y de la Innovación y el Clúster SBC (servicios basados en el conocimiento), y los Digital Innovation Labs. Son casos para analizar cómo se adopta una tecnología, qué actores intervienen y qué nuevos perfiles laborales aparecen."
    ],
    proceso: ["Necesidad o problema", "Investigación y desarrollo", "Prototipo", "Incubación de empresas", "Producción y servicios", "Formación de recursos humanos"],
    contenidos: [
      { g: "sec1", t: "1° año: adopción de tecnologías, nuevos perfiles laborales, robótica" },
      { g: "sec2", t: "2° año: programación, sensores y actuadores" },
      { g: "sec-co", t: "Ciclo orientado: sistema nacional y provincial de innovación" }
    ],
    preguntas: ["¿Qué actores participan de un polo de innovación y qué intereses tienen?", "¿Qué trabajos nuevos aparecen y cuáles cambian?", "¿Cómo llega la robótica a las escuelas del interior de la provincia?"],
    videos: ["vid-escuela-robotica"], sitio: "site-silicon"
  }
];

PET.coloresBio = [
  { color: "Roja", hex: "#c0392b", campo: "Salud humana y medicina", ej: "Vacunas, diagnóstico, medicamentos" },
  { color: "Verde", hex: "#2f8f5f", campo: "Agricultura y plantas", ej: "Plantines in vitro de la Biofábrica, biofertilizantes" },
  { color: "Blanca", hex: "#7f8c8d", campo: "Procesos industriales y bioenergía", ej: "Enzimas industriales, biocombustibles" },
  { color: "Azul", hex: "#2c5ba5", campo: "Mares, ríos y organismos acuáticos", ej: "Acuicultura en represas y estanques" },
  { color: "Amarilla", hex: "#d4a017", campo: "Alimentos y nutrición", ej: "Fermentaciones: té, quesos, panificados" },
  { color: "Gris", hex: "#555f63", campo: "Ambiente", ej: "Biorremediación, tratamiento de efluentes" },
  { color: "Dorada", hex: "#b8860b", campo: "Bioinformática y nanobiotecnología", ej: "Análisis de genomas con computadoras" },
  { color: "Morada", hex: "#7d3c98", campo: "Ética, legislación y patentes", ej: "Debates sobre OGM y propiedad intelectual" },
  { color: "Naranja", hex: "#e67e22", campo: "Divulgación y comunicación científica", ej: "Ferias de ciencia, museos, esta biblioteca" }
];
