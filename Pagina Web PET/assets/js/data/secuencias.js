/* ==========================================================================
   SECUENCIAS DIDÁCTICAS — Propuestas listas para adaptar
   --------------------------------------------------------------------------
   Son propuestas de la biblioteca basadas en los NAP, el DC Misiones y los
   Cuadernos para el aula. Adaptalas a tu grupo, tu escuela y tus recursos.
   Campos: nivel (inicial|primaria|secundaria), grado (id de curriculo.js),
   ejes, duracion, momentos (inicio/desarrollo/cierre), evaluacion...
   ========================================================================== */
window.PET = window.PET || {};

PET.secuencias = [
  {
    id: "chipa", nivel: "inicial", grado: "s4", gradoTxt: "Sala de 4 y 5",
    titulo: "La panadería de la sala: hacemos chipá",
    resumen: "Un proceso de producción completo y regional: de los insumos al producto, con herramientas, pasos ordenados y una receta en pictogramas.",
    ejes: ["procesos", "medios", "reflexion"], duracion: "4 encuentros de 40 min",
    propositos: [
      "Ofrecer situaciones para reconocer que un producto se obtiene siguiendo pasos en un orden.",
      "Propiciar la exploración de herramientas y la relación entre su forma y su función.",
      "Valorar saberes y comidas de la región y el trabajo de las personas que las producen."
    ],
    contenidos: [
      "Insumos, acciones (medir, mezclar, amasar, dar forma, hornear) y producto.",
      "Herramientas de cocina: para qué sirve cada una.",
      "Instructivo con pictogramas.",
      "Producir en casa y en una panadería: semejanzas y diferencias."
    ],
    materiales: ["Almidón de mandioca, queso, huevo, leche, manteca, sal", "Bols, cucharas, jarras medidoras, bandejas", "Horno de la cocina escolar (lo maneja un adulto)", "Tarjetas con dibujos de cada paso", "Delantales y cofias"],
    momentos: [
      { nombre: "Inicio — ¿Qué es el chipá?", tiempo: "Encuentro 1", actividades: [
        "Ronda: ¿quién comió chipá? ¿Quién lo hace en casa? ¿Con qué se hace?",
        "Explorar los ingredientes con los sentidos: el almidón «cruje», el queso es blando…",
        "Video corto o fotos de una panadería del barrio: ¿qué máquinas y herramientas ven?"
      ]},
      { nombre: "Desarrollo — Ordenamos la receta y producimos", tiempo: "Encuentros 2 y 3", actividades: [
        "Con tarjetas-dibujo desordenadas, los grupos arman la secuencia de pasos y la comparan.",
        "Producción: cada grupo mide, mezcla y amasa. La docente pregunta: ¿qué pasó con el almidón al agregar la leche?",
        "Damos forma: probamos con las manos, con un molde y con una cuchara. ¿Con cuál salen todos iguales?",
        "Horneado (a cargo de un adulto) y observación del antes y el después."
      ]},
      { nombre: "Cierre — Compartimos y comunicamos", tiempo: "Encuentro 4", actividades: [
        "Merienda compartida con las familias.",
        "Armamos entre todos la receta con pictogramas para llevar a casa.",
        "Conversación: ¿en qué se parece nuestra panadería a una de verdad? ¿Qué cambia cuando hay que hacer muchísimos?"
      ]}
    ],
    evaluacion: [
      "Ordena los pasos del proceso con apoyo de imágenes.",
      "Nombra insumos y producto.",
      "Elige una herramienta adecuada para cada acción y explica por qué.",
      "Participa en la producción grupal respetando turnos y cuidados."
    ],
    variantes: ["Sala de 3: centrarse en la exploración de ingredientes y en amasar y dar forma.", "Sala de 5: producir 30 chipás iguales para vender en la feria y organizar quién hace cada parte."],
    recursos: ["doc-nap-inicial"]
  },
  {
    id: "candado", nivel: "primaria", grado: "p1", gradoTxt: "1° grado",
    titulo: "¡Rescatemos el candado! Diseñamos una herramienta",
    resumen: "Un problema concreto (sacar un objeto del fondo de un frasco sin tocarlo) para analizar, anticipar con dibujos, construir y evaluar una herramienta.",
    ejes: ["medios", "procesos"], duracion: "3 clases de 80 min",
    propositos: [
      "Promover la resolución de problemas de diseño anticipando con dibujos.",
      "Reconocer las herramientas como intermediarias que prolongan el cuerpo.",
      "Favorecer el trabajo en equipo y la reflexión sobre lo realizado."
    ],
    contenidos: ["Herramientas: forma y función.", "Gestos técnicos.", "Etapas de un problema de diseño: analizar, imaginar, dibujar, construir, probar.", "Comunicación de ideas técnicas con dibujos."],
    materiales: ["Frascos de boca angosta", "Un candado pequeño (o uno simulado con madera y alambre)", "Palitos, alambre forrado, broches, cinta, imanes, hilo, cartón", "Hojas para bocetar"],
    momentos: [
      { nombre: "Inicio — El problema", tiempo: "Clase 1", actividades: [
        "Presentar el frasco con el candado en el fondo: «se cayó y no podemos meter la mano».",
        "Conversar las restricciones: no se puede romper el frasco, ni darlo vuelta, ni meter la mano.",
        "Mostrar imágenes de herramientas para agarrar (pinzas, tenazas, ganchos) y jugar a adivinar para qué sirven."
      ]},
      { nombre: "Desarrollo — Imaginar, dibujar, construir", tiempo: "Clases 1 y 2", actividades: [
        "Cada grupo dibuja su herramienta y le pone nombre a las partes (con ayuda de la docente para escribir).",
        "Construcción con los materiales disponibles.",
        "Prueba: ¿la herramienta llega al fondo? ¿Agarra el candado? ¿Se suelta al subir?",
        "Mejoras: volver al dibujo y cambiar lo que no funcionó."
      ]},
      { nombre: "Cierre — Reflexionar y generalizar", tiempo: "Clase 3", actividades: [
        "Muestra de herramientas: cada grupo cuenta qué problemas tuvo y cómo los resolvió.",
        "Clasificar las soluciones: las que «pinzan», las que «enganchan», las que «pegan» (imán, cinta).",
        "Relacionar con herramientas reales y oficios: ¿quién usa pinzas en su trabajo?"
      ]}
    ],
    evaluacion: ["Identifica el problema y sus restricciones.", "Anticipa con un dibujo la herramienta.", "Construye y prueba, y propone mejoras.", "Relaciona la forma de la herramienta con la función."],
    variantes: ["Para 2°: agregar la restricción de que la herramienta sirva también para un objeto más pesado."],
    recursos: ["doc-cuadernos-tec-1", "doc-nap-primaria-1"]
  },
  {
    id: "sellos", nivel: "primaria", grado: "p2", gradoTxt: "2° grado",
    titulo: "Muchos iguales: sellos, moldes y plantillas",
    resumen: "Un comerciante necesita muchos carteles iguales. Los chicos diseñan y comparan técnicas de copiado y organizan una pequeña producción en serie.",
    ejes: ["procesos", "medios", "reflexion"], duracion: "4 clases de 80 min",
    propositos: ["Reconocer técnicas que controlan la forma para producir muchos productos iguales.", "Comparar ventajas y desventajas de distintas herramientas.", "Experimentar la división del trabajo."],
    contenidos: ["Producción unitaria y en serie.", "Herramientas que controlan el contorno: sellos, moldes, plantillas.", "Organización del trabajo y división de tareas.", "Representación de procedimientos."],
    materiales: ["Papas o goma eva para sellos", "Cartulina para plantillas y moldes", "Témperas, esponjas, almohadillas", "Hojas para los carteles", "Reloj o cronómetro"],
    momentos: [
      { nombre: "Inicio — El encargo", tiempo: "Clase 1", actividades: [
        "Relato: Miguel tiene un almacén y necesita 30 carteles iguales con una estrella y su nombre.",
        "¿Cómo podemos hacer que salgan todos iguales y rápido? Se registran las ideas."
      ]},
      { nombre: "Desarrollo — Ensayamos técnicas", tiempo: "Clases 2 y 3", actividades: [
        "Estaciones: sello de papa, molde para marcar el contorno, plantilla calada para pintar adentro.",
        "Cada grupo produce 5 copias con cada técnica y registra el tiempo y cómo salieron.",
        "Tabla comparativa: rapidez, cantidad de pasos, calidad, facilidad.",
        "Producción en cadena: uno pinta el fondo, otro estampa, otro escribe, otro controla."
      ]},
      { nombre: "Cierre — ¿Qué aprendimos?", tiempo: "Clase 4", actividades: [
        "Comparar trabajo individual vs. en cadena: ¿qué cambió? ¿Todos aprendieron todo?",
        "Mirar imágenes de una imprenta antigua y una impresora: ¿qué técnica usan?",
        "Escribir un instructivo para que otro grado pueda hacer sellos."
      ]}
    ],
    evaluacion: ["Explica por qué una técnica permite copias iguales.", "Compara técnicas con criterios.", "Participa de la producción en cadena cumpliendo su rol."],
    variantes: ["3°: calcular cuántos carteles se hacen por minuto con cada técnica."],
    recursos: ["doc-cuadernos-tec-1"]
  },
  {
    id: "jugo", nivel: "primaria", grado: "p3", gradoTxt: "3° grado",
    titulo: "Del naranjal al jugo: una fábrica en el aula",
    resumen: "Producir jugo de naranja como en una fábrica: operaciones, medición para controlar, roles, etiquetado y comparación con el proceso industrial.",
    ejes: ["procesos", "medios", "reflexion"], duracion: "4 clases de 80 min",
    propositos: ["Analizar un proceso desde el insumo al producto.", "Reconocer la importancia de medir para controlar.", "Comparar la producción artesanal e industrial."],
    contenidos: ["Operaciones: lavar, cortar, exprimir, filtrar, endulzar, envasar.", "Instrumentos de medida y control.", "Herramientas con mecanismos: exprimidor manual y a palanca.", "Contextos de trabajo y roles."],
    materiales: ["Naranjas (Misiones produce cítricos)", "Exprimidores manuales y uno a palanca o eléctrico", "Coladores, jarras graduadas, balanza de cocina", "Botellas o vasos, etiquetas", "Planilla de control"],
    momentos: [
      { nombre: "Inicio — ¿Cómo llega el jugo a la botella?", tiempo: "Clase 1", actividades: [
        "Observar una botella de jugo comercial y su etiqueta: ingredientes, fecha, lote.",
        "Hipótesis en grupos: dibujar los pasos para fabricarlo.",
        "Visita virtual (fotos o video) a una planta de jugos cítricos."
      ]},
      { nombre: "Desarrollo — Nuestra fábrica", tiempo: "Clases 2 y 3", actividades: [
        "Planificar: lista de insumos, herramientas, pasos y roles (lavadores, exprimidores, controladores, envasadores).",
        "Producción y control: medir cuánto jugo sale por naranja; controlar que cada vaso tenga 200 ml.",
        "Comparar exprimidor manual vs. a palanca: tiempo, esfuerzo, cantidad de jugo.",
        "Registrar residuos: cáscaras y semillas. ¿Qué se puede hacer con ellas?"
      ]},
      { nombre: "Cierre — Instructivo y etiqueta", tiempo: "Clase 4", actividades: [
        "Escribir el texto instructivo con cantidades.",
        "Diseñar la etiqueta con nombre, ingredientes y fecha.",
        "Comparar con la fábrica: ¿qué hace una máquina que hacíamos nosotros? ¿Qué sigue haciendo una persona?"
      ]}
    ],
    evaluacion: ["Identifica operaciones e insumos.", "Usa instrumentos de medida para controlar.", "Escribe un instructivo completo.", "Compara la producción escolar con la industrial."],
    variantes: ["Con mandioca: elaborar almidón casero (rallar, filtrar, decantar, secar) y compararlo con el industrial."],
    recursos: ["doc-cuadernos-tec-1", "vid-industria"]
  },
  {
    id: "maquinas", nivel: "primaria", grado: "p5", gradoTxt: "4° y 5° grado",
    titulo: "Máquinas que mueven: poleas y engranajes",
    resumen: "Construir un guinche con manivela y poleas, descubrir la relación de transmisión y analizar máquinas reales de la región.",
    ejes: ["medios", "reflexion"], duracion: "5 clases de 80 min",
    propositos: ["Analizar las partes de una máquina: motor, transmisión y efector.", "Explorar cómo los mecanismos cambian velocidad, fuerza y sentido.", "Reconocer el paso de herramientas a máquinas."],
    contenidos: ["Mecanismos de transmisión: poleas, correas, engranajes.", "Relación entre tamaño de las ruedas y velocidad.", "Estructuras estables.", "Bocetos y dibujos de funcionamiento."],
    materiales: ["Carreteles, tapitas, CDs viejos, palitos de brochette", "Bandas elásticas como correas", "Cajas de cartón, cola, cinta, hilo", "Engranajes de juguete o impresos en cartón"],
    momentos: [
      { nombre: "Inicio — Levantar sin esfuerzo", tiempo: "Clase 1", actividades: [
        "Desafío: subir una cartuchera 50 cm sin tocarla con la mano.",
        "Ver fotos de guinches de obra, aljibes y del montacargas de un aserradero.",
        "Identificar en un video de mecanismos: qué gira, qué transmite, qué actúa."
      ]},
      { nombre: "Desarrollo — Construimos el guinche", tiempo: "Clases 2 a 4", actividades: [
        "Diseñar en boceto la estructura y el mecanismo.",
        "Construir: estructura estable, eje con manivela, carretel, polea.",
        "Experimentar: cambiar el tamaño de la polea conducida y contar vueltas. Cruzar la correa: ¿qué pasa con el sentido?",
        "Agregar engranajes de cartón y registrar la relación de vueltas en una tabla."
      ]},
      { nombre: "Cierre — De la herramienta a la máquina", tiempo: "Clase 5", actividades: [
        "Comparar: subir la carga con la mano, con una soga y polea, con el guinche.",
        "Discusión: ¿qué pasaría si le ponemos un motor? ¿Qué tareas dejaría de hacer la persona?",
        "Dibujo final del guinche con sus partes y flechas de movimiento."
      ]}
    ],
    evaluacion: ["Identifica motor/accionamiento, transmisión y efector.", "Relaciona el tamaño de las poleas con la velocidad.", "Construye una estructura estable.", "Representa el funcionamiento con un dibujo."],
    variantes: ["6°: agregar un motor eléctrico con pila y un interruptor; analizar el control manual."],
    recursos: ["vid-mecanismos-transmision", "vid-engranajes", "doc-nap-primaria-2"]
  },
  {
    id: "telegrafo", nivel: "primaria", grado: "p7", gradoTxt: "6° y 7° grado",
    titulo: "Mensajes a distancia: del telégrafo al WhatsApp",
    resumen: "Construir un telégrafo con pila, pulsador y lamparita, crear códigos y protocolos, y comparar con el Morse y las comunicaciones actuales.",
    ejes: ["procesos", "medios", "reflexion"], duracion: "5 clases de 80 min",
    propositos: ["Reconocer las operaciones de la comunicación a distancia: codificar, transmitir, recibir, decodificar.", "Diseñar un circuito simple de transmisión.", "Analizar cambios y continuidades en las comunicaciones."],
    contenidos: ["Codificación y decodificación; códigos y protocolos.", "Emisor, medio, receptor; uni y bidireccional.", "Circuito eléctrico simple.", "Retransmisión y conmutación: de la telefonista a la central automática."],
    materiales: ["Pilas de 4,5 V, portapilas", "Lamparitas LED o de linterna, zumbadores", "Pulsadores o «llaves» hechas con clips y chinches", "Cable", "Tabla del código Morse"],
    momentos: [
      { nombre: "Inicio — ¿Cómo mandar un mensaje sin hablar?", tiempo: "Clase 1", actividades: [
        "Juego: comunicar una palabra al otro lado del patio solo con señales. ¿Qué tuvimos que acordar?",
        "Línea de tiempo: humo, banderas, telégrafo óptico, telégrafo eléctrico, teléfono, celular.",
        "Video corto sobre el código Morse."
      ]},
      { nombre: "Desarrollo — Nuestro telégrafo", tiempo: "Clases 2 a 4", actividades: [
        "Armar el circuito: pila, pulsador, lamparita. Dibujarlo con símbolos.",
        "Crear un código propio y luego probar el Morse. Medir cuánto se tarda en enviar una palabra.",
        "Protocolo: ¿cómo avisamos que empieza y termina un mensaje? ¿Cómo pedimos que repitan?",
        "Bidireccional: ¿qué agregamos para que el receptor pueda responder?",
        "Retransmisión: pasar el mensaje por tres «estaciones» y analizar errores."
      ]},
      { nombre: "Cierre — Del telégrafo al WhatsApp", tiempo: "Clase 5", actividades: [
        "Comparar emisor, código, medio y receptor en el telégrafo y en un mensaje de WhatsApp.",
        "Entrevista a familiares: ¿cómo se comunicaban a distancia cuando eran chicos?",
        "Debate: ¿qué cambió en la vida de las personas con las comunicaciones instantáneas?"
      ]}
    ],
    evaluacion: ["Explica las operaciones de la comunicación a distancia.", "Arma y representa el circuito.", "Diseña y respeta un protocolo.", "Compara tecnologías de distintas épocas."],
    variantes: ["Secundaria 2° año: digitalizar el mensaje en binario y transmitirlo con LED; leerlo con un sensor de luz en Arduino."],
    recursos: ["vid-morse-ticmas", "vid-morse-historia", "vid-convergencia", "doc-nap-primaria-2"]
  },
  {
    id: "yerba", nivel: "secundaria", grado: "sec1", gradoTxt: "1° año",
    titulo: "La yerba mate como proceso tecnológico",
    resumen: "Analizar el proceso yerbatero completo con enfoque sistémico: operaciones, flujos, tipos de organización, roles de las personas y sistema sociotécnico.",
    ejes: ["procesos", "reflexion", "medios"], duracion: "6 clases de 80 min",
    propositos: ["Analizar un proceso productivo regional como secuencia de operaciones.", "Identificar el rol de las personas según el grado de automatización.", "Comprender la yerba como sistema sociotécnico."],
    contenidos: ["Procesos como secuencias de operaciones; tipos de organización.", "Operaciones de transformación, transporte, almacenamiento y control.", "Rol de las personas y automatización.", "Sistema sociotécnico; coexistencia de tecnologías (barbacuá y secaderos industriales).", "Diagramas de flujo de procesos."],
    materiales: ["Videos del INYM y de Misiones Tiene Historia", "Paquetes de yerba (con y sin palo, distintas marcas)", "Afiches o herramienta digital para diagramas", "Guía de análisis"],
    momentos: [
      { nombre: "Inicio — Del paquete al yerbal", tiempo: "Clase 1", actividades: [
        "Analizar paquetes: ¿qué dice la etiqueta? ¿Qué es «estacionamiento»? ¿Por qué hay yerba con y sin palo?",
        "Preguntas disparadoras: ¿qué pasa entre la planta y el paquete? ¿Quiénes trabajan?",
        "Mapa: zonas yerbateras de Misiones y Corrientes."
      ]},
      { nombre: "Desarrollo — Analizamos el proceso", tiempo: "Clases 2 a 4", actividades: [
        "Ver los videos y registrar las operaciones: cosecha (tarefa), transporte, zapecado, secanza, canchado, estacionamiento, molienda, mezcla, envasado.",
        "Clasificar cada operación: transformación, transporte, almacenamiento, control.",
        "Construir el diagrama de flujo del proceso con símbolos normalizados.",
        "Analizar los flujos de materia (hoja → yerba canchada → yerba molida), energía (leña, electricidad) e información (control de humedad y temperatura).",
        "Comparar secado en barbacuá y en secadero industrial: tiempos, energía, control, cantidad de trabajadores."
      ]},
      { nombre: "Cierre — La yerba como sistema sociotécnico", tiempo: "Clases 5 y 6", actividades: [
        "Mapa de actores: tareferos, productores, cooperativas, secaderos, molinos, INYM, consumidores.",
        "Debate: la mecanización de la cosecha, ¿mejora o empeora la vida de los tareferos? ¿Para quién?",
        "Producción final: infografía o video corto «La yerba de la planta al mate»."
      ]}
    ],
    evaluacion: ["Identifica y clasifica operaciones.", "Construye un diagrama de flujo correcto.", "Explica el rol de las personas y los cambios por automatización.", "Argumenta desde una mirada sociotécnica."],
    variantes: ["2° año: calcular costos y tiempos del proceso y modelizar con planilla de cálculo.", "Mismo esquema con el té, la mandioca o la forestoindustria."],
    recursos: ["vid-yerba-inym", "vid-yerba-industrial", "site-inym", "doc-dc-misiones-2022"]
  },
  {
    id: "yacyreta", nivel: "secundaria", grado: "sec1", gradoTxt: "6° grado y 1° año",
    titulo: "Energía que viene del río: Yacyretá",
    resumen: "Estudiar la central hidroeléctrica como sistema: transformaciones de energía, componentes, eficiencia e impactos ambientales y sociales.",
    ejes: ["procesos", "medios", "reflexion"], duracion: "5 clases de 80 min",
    propositos: ["Analizar procesos de obtención y conversión de energía.", "Reconocer dispositivos de generación y transporte eléctrico.", "Evaluar ventajas, desventajas e impactos de distintas fuentes."],
    contenidos: ["Transformaciones de energía; eficiencia y rendimiento.", "Generador, turbina, transformador, líneas de transmisión.", "Coexistencia de energías renovables y no renovables.", "Impacto ambiental y social de las grandes obras."],
    materiales: ["Video «Aguas: Yacyretá» (Canal Encuentro)", "Imágenes de la central", "Dínamo de bicicleta o motorcito y LED", "Rueda hidráulica con tapitas y una botella"],
    momentos: [
      { nombre: "Inicio — ¿De dónde viene la luz del aula?", tiempo: "Clase 1", actividades: [
        "Seguir el cable: tomacorriente → tablero → medidor → poste → ¿y después?",
        "Video de Yacyretá y registro de palabras clave."
      ]},
      { nombre: "Desarrollo — La central como sistema", tiempo: "Clases 2 a 4", actividades: [
        "Diagrama de bloques: embalse → compuertas → turbina → generador → transformador → líneas → ciudades.",
        "Experiencia: rueda hidráulica con botella que mueve un motorcito y enciende un LED. ¿Qué energía entra y cuál sale? ¿Dónde se pierde?",
        "Investigación en grupos: biomasa (aserrín de aserraderos), solar en escuelas rurales, eólica, térmica.",
        "Tabla comparativa: recurso, escala, costo, impacto, disponibilidad en Misiones."
      ]},
      { nombre: "Cierre — Debate de impactos", tiempo: "Clase 5", actividades: [
        "Juego de roles: ingenieros, familias relocalizadas, pescadores, ambientalistas, municipio.",
        "Conclusión escrita: ¿qué criterios usarías para elegir una fuente de energía para un pueblo misionero?"
      ]}
    ],
    evaluacion: ["Representa la central con un diagrama de bloques.", "Explica las transformaciones de energía.", "Compara fuentes con criterios técnicos, ambientales y sociales.", "Argumenta en el debate."],
    variantes: ["6° grado: centrarse en la rueda hidráulica y el diagrama de bloques simple."],
    recursos: ["vid-yacyreta-encuentro", "vid-yacyreta-energia", "site-eby", "tool-phet"]
  },
  {
    id: "semaforo", nivel: "secundaria", grado: "sec2", gradoTxt: "2° año",
    titulo: "Semáforo inteligente: control automático con Arduino",
    resumen: "Del semáforo por tiempo (lazo abierto) a un semáforo con pulsador peatonal y sensor de luz: algoritmos, estructuras de programación, sensores y actuadores.",
    ejes: ["medios", "procesos", "reflexion"], duracion: "6 clases de 80 min",
    propositos: ["Diferenciar control por tiempo y con sensores.", "Transformar algoritmos en programas con estructuras secuenciales, repetitivas y condicionales.", "Analizar la delegación de decisiones humanas en sistemas automáticos."],
    contenidos: ["Sensado, temporización, control y actuación.", "Lazo abierto y lazo cerrado.", "Estructuras de programación; lectura de entradas y activación de salidas.", "Simuladores; depuración de errores."],
    materiales: ["Computadoras con Tinkercad Circuits o Wokwi (gratis, sin instalar)", "Opcional: Arduino, LEDs, resistencias, pulsador, LDR, protoboard"],
    momentos: [
      { nombre: "Inicio — ¿Quién decide cuándo cambia el semáforo?", tiempo: "Clase 1", actividades: [
        "Observar un semáforo real (o video) y cronometrar cada luz.",
        "Escribir el algoritmo en lenguaje natural y en diagrama de flujo.",
        "Conversación: antes había agentes de tránsito. ¿Qué decisiones se delegaron?"
      ]},
      { nombre: "Desarrollo — Programar y mejorar", tiempo: "Clases 2 a 5", actividades: [
        "Versión 1 (lazo abierto): tres LEDs con tiempos fijos (secuencia + repetición).",
        "Versión 2: pulsador peatonal (condicional): si alguien pide cruzar, se acorta el verde.",
        "Versión 3: sensor de luz (LDR) que activa la luz amarilla intermitente de noche.",
        "Depuración: encontrar y corregir errores intencionales en un programa dado.",
        "Diagrama de bloques del sistema: sensores → controlador → actuadores."
      ]},
      { nombre: "Cierre — Ciudades inteligentes", tiempo: "Clase 6", actividades: [
        "Presentación de cada versión y explicación del código.",
        "Debate: semáforos con cámaras e IA. ¿Qué datos se recolectan? ¿Quién los usa?"
      ]}
    ],
    evaluacion: ["Representa el algoritmo con diagrama de flujo.", "Programa las tres versiones usando las estructuras básicas.", "Distingue lazo abierto y control con sensores.", "Reflexiona sobre la delegación y el uso de datos."],
    variantes: ["Sin computadoras: programación desenchufada con tarjetas y un compañero-semáforo.", "Con robótica: un robot seguidor de línea que se detiene en rojo."],
    recursos: ["vid-semaforo-tinkercad", "tool-tinkercad", "tool-wokwi", "vid-lazo-control", "doc-dc-misiones-2022"]
  },
  {
    id: "feria", nivel: "secundaria", grado: "sec2", gradoTxt: "2° año",
    titulo: "Planificar la feria: redes de tareas y ruta crítica",
    resumen: "Gestionar un proyecto escolar real: listar tareas, establecer precedencias, calcular la ruta crítica y armar el diagrama de Gantt con software.",
    ejes: ["procesos"], duracion: "4 clases de 80 min",
    propositos: ["Analizar la producción por proyecto y la organización de tareas en el tiempo.", "Identificar rutas críticas y su efecto en la duración total.", "Diferenciar los roles de planificación y de ejecución."],
    contenidos: ["Producción por proyecto; redes de precedencias; ruta crítica.", "Diagramas de Gantt; software de gestión de proyectos y planillas de cálculo.", "Costos y tiempos de un proyecto."],
    materiales: ["Post-it o tarjetas", "Planilla de cálculo o GanttProject", "Calendario escolar"],
    momentos: [
      { nombre: "Inicio — ¿Qué hay que hacer?", tiempo: "Clase 1", actividades: [
        "Lluvia de ideas de todas las tareas para organizar la feria de ciencias.",
        "Estimar duraciones y responsables."
      ]},
      { nombre: "Desarrollo — Red de tareas y ruta crítica", tiempo: "Clases 2 y 3", actividades: [
        "Ordenar tarjetas: ¿qué tarea no puede empezar hasta que termine otra?",
        "Dibujar la red y calcular el camino más largo (ruta crítica).",
        "Simular un imprevisto: una tarea crítica se atrasa 3 días. ¿Qué pasa con la fecha final? ¿Y si se atrasa una no crítica?",
        "Pasar todo al diagrama de Gantt en GanttProject o planilla de cálculo; agregar costos."
      ]},
      { nombre: "Cierre — Ejecutar y evaluar", tiempo: "Clase 4 y durante el proyecto", actividades: [
        "Asignar roles de coordinación y de ejecución; comparar responsabilidades.",
        "Después de la feria: comparar lo planificado con lo real."
      ]}
    ],
    evaluacion: ["Establece precedencias correctamente.", "Identifica la ruta crítica.", "Construye un Gantt legible.", "Analiza desvíos entre lo planificado y lo ejecutado."],
    variantes: ["Con un caso productivo: la construcción de un galpón o la plantación de un yerbal."],
    recursos: ["tool-ganttproject", "doc-nap-secundaria"]
  }
];
