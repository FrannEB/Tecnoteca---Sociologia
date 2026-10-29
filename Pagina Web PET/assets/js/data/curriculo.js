/* ==========================================================================
   CONTENIDOS CURRICULARES — Educación Tecnológica
   --------------------------------------------------------------------------
   Cómo editar:
   - Cada nivel tiene "grados" (salas, grados o años).
   - Cada grado tiene contenidos organizados por los 3 EJES:
       procesos  → Los procesos tecnológicos
       medios    → Los medios técnicos
       reflexion → La reflexión sobre la tecnología como proceso sociocultural
   - Cada eje tiene "temas"; cada tema tiene "items" (contenidos) y,
     opcionalmente, "emergentes" (contenidos emergentes del DC Misiones).
   - "conceptos" usa los id del glosario (conceptos.js).
   - "recursos" usa los id de recursos.js.
   - "fuente" indica de dónde sale el contenido. Si algo es una
     sugerencia de la biblioteca (no un texto oficial), poné oficial: false.
   Los textos están parafraseados y sintetizados para estudiar;
   para citar en una planificación, usá siempre el documento oficial.
   ========================================================================== */
window.PET = window.PET || {};

PET.ejes = {
  procesos: {
    id: "procesos",
    nombre: "Los procesos tecnológicos",
    corto: "Procesos tecnológicos",
    pregunta: "¿Cómo se hacen las cosas?",
    desc: "Las secuencias de operaciones que transforman, transportan y almacenan materiales, energía e información para obtener productos (bienes y servicios). Incluye cómo se organizan y controlan, qué tareas hacen las personas y cómo se comunica la información técnica."
  },
  medios: {
    id: "medios",
    nombre: "Los medios técnicos",
    corto: "Medios técnicos",
    pregunta: "¿Con qué se hacen?",
    desc: "Herramientas, máquinas, artefactos y sistemas: sus partes, sus funciones y cómo las personas van delegando en ellos acciones (de ejecución, de control y de programa). Incluye la resolución de problemas de diseño."
  },
  reflexion: {
    id: "reflexion",
    nombre: "La reflexión sobre la tecnología como proceso sociocultural",
    corto: "Reflexión sociocultural",
    pregunta: "¿Por qué, para quién y con qué consecuencias?",
    desc: "Diversidad, cambios y continuidades: cómo las tecnologías se transforman a lo largo del tiempo, conviven en una misma sociedad, forman sistemas sociotécnicos y afectan la vida, el trabajo y el ambiente."
  }
};

PET.niveles = [
  /* ======================================================================
     NIVEL INICIAL
     ====================================================================== */
  {
    id: "inicial",
    nombre: "Nivel Inicial",
    edades: "Salas de 3, 4 y 5 años",
    resumen: "La tecnología forma parte de la indagación del ambiente: explorar objetos, materiales, herramientas y procesos cotidianos a través del juego, la exploración y la resolución de pequeños problemas.",
    enfoque: [
      "En el Nivel Inicial la tecnología no es una materia aparte: se trabaja dentro de la indagación del ambiente natural, social y tecnológico, en unidades didácticas, proyectos, juego-trabajo y talleres.",
      "El juego (de construcción, dramático, con materiales) es el formato privilegiado. Los chicos aprenden haciendo, anticipando y comparando resultados.",
      "Se busca que reconozcan que los objetos están hechos de distintos materiales, que hay herramientas para cada tarea y que las personas siguen pasos para producir cosas."
    ],
    fuentes: [
      { texto: "NAP Nivel Inicial — «La indagación del ambiente natural, social y tecnológico» (CFCyE, 2004)", recurso: "doc-nap-inicial" },
      { texto: "La progresión por sala es una propuesta didáctica de la biblioteca (no es texto oficial).", oficial: false }
    ],
    nota: "Cuando consigamos el Diseño Curricular de Nivel Inicial de Misiones lo cargamos acá para alinear los contenidos con la jurisdicción.",
    grados: [
      {
        id: "s3", corto: "Sala 3", nombre: "Sala de 3 años", ciclo: "Nivel Inicial",
        foco: "Explorar objetos y materiales de la vida cotidiana y descubrir qué se puede hacer con ellos.",
        fuente: "NAP Nivel Inicial + propuesta de progresión de la biblioteca",
        ejes: {
          procesos: [
            { tema: "Explorar y transformar materiales", items: [
              "Explorar materiales variados (masas, arcilla, papeles, telas, maderas, semillas) y descubrir acciones posibles: aplastar, estirar, rasgar, mezclar, apilar.",
              "Observar cambios en los materiales al mojarlos, mezclarlos o dejarlos secar (masa de sal, engrudo, arena mojada).",
              "Participar de preparaciones simples (ensalada de frutas, jugo) reconociendo con qué empezamos y qué obtenemos al final."
            ]}
          ],
          medios: [
            { tema: "Objetos y herramientas cercanos", items: [
              "Reconocer objetos de la sala y del hogar y para qué sirven.",
              "Usar con cuidado herramientas simples: cucharas, palitas, rodillos, moldes, tijera de punta redonda.",
              "Descubrir que algunos objetos «ayudan» al cuerpo: con una pala se junta más arena que con la mano."
            ]}
          ],
          reflexion: [
            { tema: "Los objetos y las personas", items: [
              "Conocer juguetes y objetos que usaban las familias antes y compararlos con los de hoy.",
              "Reconocer que hay personas que fabrican los objetos que usamos (panaderos, carpinteros, costureras)."
            ]}
          ]
        },
        conceptos: ["material", "producto", "herramienta"],
        ideas: [
          { t: "La caja de materiales misteriosos", d: "Una caja con materiales para tocar sin ver: ¿es duro o blando?, ¿se dobla?, ¿suena? Después se clasifican en grupos con tarjetas-dibujo." },
          { t: "Amasamos y modelamos", d: "Con masa de sal, probar distintas herramientas (rodillo, moldes, palitos, tenedor) y comparar las marcas y formas que deja cada una." },
          { t: "Juguetes de antes y de ahora", d: "Las familias envían un juguete antiguo; se arma un pequeño museo en la sala y se compara cómo se mueven y de qué están hechos." }
        ],
        recursos: ["doc-nap-inicial"]
      },
      {
        id: "s4", corto: "Sala 4", nombre: "Sala de 4 años", ciclo: "Nivel Inicial",
        foco: "Relacionar materiales, herramientas y procedimientos: seguir y ordenar los pasos de un proceso.",
        fuente: "NAP Nivel Inicial + propuesta de progresión de la biblioteca",
        ejes: {
          procesos: [
            { tema: "Los procesos tienen pasos", items: [
              "Ordenar los pasos de una preparación (chipá, pan, gelatina) usando una receta con imágenes.",
              "Identificar lo que usamos al principio (insumos), lo que hacemos (mezclar, amasar, cortar, hornear) y lo que obtenemos (producto).",
              "Comparar cómo es la masa antes y después de cocinarla: cambia el color, la dureza, el olor."
            ]},
            { tema: "Comunicar cómo se hace", items: [
              "Leer y armar instructivos con pictogramas para repetir una preparación en casa."
            ]}
          ],
          medios: [
            { tema: "Herramientas y construcciones", items: [
              "Reconocer que cada herramienta sirve para una acción (cortar, mezclar, unir, pegar) y que su forma se relaciona con esa función.",
              "Construir con bloques y materiales de descarte: apilar, encastrar, unir con cinta, broches o plastilina, buscando que la construcción no se caiga.",
              "Explorar objetos con partes que se mueven: ruedas, bisagras, manijas, tapas a rosca."
            ]}
          ],
          reflexion: [
            { tema: "Lugares de trabajo del barrio", items: [
              "Conocer lugares de trabajo cercanos (panadería, carpintería, huerta, feria franca) y quiénes trabajan allí.",
              "Comparar cómo se hace algo en casa y en un comercio o fábrica: cantidad, herramientas, máquinas."
            ]}
          ]
        },
        conceptos: ["insumo", "producto", "proceso", "herramienta", "instructivo"],
        ideas: [
          { t: "La panadería de la sala: hacemos chipá", d: "Proceso completo con receta en pictogramas: medir, mezclar, amasar, dar forma, hornear. Ver la secuencia didáctica completa en «Secuencias»." },
          { t: "¿Con qué lo unimos?", d: "Desafío: unir dos partes de cartón de distintas maneras (cinta, abrochadora, plasticola, hilo, broche). ¿Cuál resiste más? ¿Cuál es más rápida?" },
          { t: "La torre más alta que no se cae", d: "En grupos, construir la torre más alta con vasos, cartas o bloques. Se registra con fotos y se conversa: ¿qué hicieron las torres que no se cayeron?" }
        ],
        recursos: ["doc-nap-inicial"]
      },
      {
        id: "s5", corto: "Sala 5", nombre: "Sala de 5 años", ciclo: "Nivel Inicial",
        foco: "Resolver pequeños problemas técnicos, anticipar con dibujos y producir en grupo.",
        fuente: "NAP Nivel Inicial + NAP de Educación Digital, Programación y Robótica (Res. CFE 343/18) + propuesta de la biblioteca",
        ejes: {
          procesos: [
            { tema: "Producir muchos iguales", items: [
              "Hacer varios productos iguales usando moldes, sellos o plantillas (galletitas, sellos con papa, tarjetas).",
              "Organizarse en grupo para producir: quién hace cada parte, en qué orden.",
              "Registrar con dibujos el orden de los pasos de un proceso."
            ]}
          ],
          medios: [
            { tema: "Pequeños problemas de diseño", items: [
              "Construir un objeto que cumpla una función: un puente para autitos, un barquito que flote, un recipiente que no pierda agua, un carrito que ruede.",
              "Elegir materiales según sus propiedades: flota o se hunde, rígido o flexible, deja pasar el agua o no.",
              "Anticipar con un dibujo qué se va a construir y con qué, y después comparar el dibujo con lo construido."
            ]},
            { tema: "Mecanismos sencillos y secuencias", items: [
              "Explorar mecanismos simples: ruedas y ejes, palancas (sube y baja), roldanas (como la de un pozo).",
              "Seguir y dar secuencias de instrucciones a un compañero «robot» (pensamiento computacional desenchufado)."
            ]}
          ],
          reflexion: [
            { tema: "Antes y ahora, aquí y allá", items: [
              "Comparar medios de transporte y de comunicación de antes y de ahora (carreta, balsa, colectivo; carta, teléfono, celular).",
              "Conocer objetos de distintas culturas para una misma necesidad: cestería y tallas mbya guaraní, alfarería, tejidos.",
              "Reutilizar materiales y cuidar el ambiente: ¿qué hacemos con lo que sobra?"
            ]}
          ]
        },
        conceptos: ["material", "propiedades-materiales", "diseno", "mecanismo", "algoritmo"],
        ideas: [
          { t: "Puentes para los autitos", d: "Con cartón, palitos y cinta, construir un puente entre dos mesas que soporte un autito. Probar, mejorar y volver a probar." },
          { t: "¿Flota o se hunde? Diseñamos un barquito", d: "Primero se exploran materiales en un fuentón; después cada grupo dibuja y construye un barco que lleve «carga» (tapitas) sin hundirse." },
          { t: "El robot de la sala", d: "Un chico es el robot y otro le da órdenes con flechas dibujadas para llegar a un tesoro en una cuadrícula en el piso." },
          { t: "Tejemos como los artesanos", d: "Con tiras de papel o totora, tejer una pequeña cesta entrecruzando. Conversar sobre la cestería guaraní de Misiones." }
        ],
        recursos: ["doc-nap-inicial", "doc-nap-edpr", "tool-pilas-bloques"]
      }
    ]
  },

  /* ======================================================================
     NIVEL PRIMARIO
     ====================================================================== */
  {
    id: "primaria",
    nombre: "Nivel Primario",
    edades: "1° a 7° grado",
    resumen: "Educación Tecnológica como área: procesos sobre materiales, energía e información; herramientas, máquinas y automatismos; y los cambios técnicos en la vida y el trabajo. En Misiones la primaria tiene 7 grados.",
    enfoque: [
      "Primer ciclo (1° a 3°): procesos sobre materiales y herramientas como prolongación del cuerpo; producción artesanal y «muchos iguales».",
      "Segundo ciclo (4° a 6°): del uso de herramientas al de máquinas; mecanismos, motores, energía y control; organización de la producción.",
      "7° grado: comunicaciones a distancia, automatización con sensores y temporizadores, y resolución de problemas de diseño más complejos.",
      "El Diseño Curricular de Primaria de Misiones (aplicado desde 2020) plantea la robótica y las TIC como ejes transversales."
    ],
    fuentes: [
      { texto: "NAP Educación Tecnológica — Primer Ciclo (aprobados por Res. CFE 37/07)", recurso: "doc-nap-primaria-1" },
      { texto: "Cuadernos para el aula: Tecnología — Primer Ciclo (Ministerio de Educación, 2007)", recurso: "doc-cuadernos-tec-1" },
      { texto: "NAP Educación Tecnológica — Segundo Ciclo y 7° año (Res. CFE 97/10)", recurso: "doc-nap-primaria-2" }
    ],
    nota: "Si conseguís el Diseño Curricular Jurisdiccional de Primaria de Misiones (área Tecnología), pasalo y lo integramos grado por grado.",
    grados: [
      {
        id: "p1", corto: "1°", nombre: "1° grado", ciclo: "Primer ciclo",
        foco: "Los procesos sobre los materiales y las herramientas como intermediarias entre el cuerpo y el material.",
        fuente: "NAP Primer Ciclo (Res. CFE 37/07) y Cuadernos para el aula: Tecnología",
        ejes: {
          procesos: [
            { tema: "Los procesos como secuencias de pasos", items: [
              "Reconocer que para obtener un producto se realizan acciones en un orden (por ejemplo: mezclar, amasar, dar forma, cocinar).",
              "Identificar los insumos (lo que se transforma) y los productos (lo que se obtiene).",
              "Explorar distintas maneras de dar forma a un material: modelar, cortar, plegar, moldear."
            ]},
            { tema: "Las personas en los procesos", items: [
              "Reconocer quiénes realizan las tareas y qué saberes necesitan.",
              "Participar de producciones grupales repartiendo tareas."
            ]},
            { tema: "Comunicar la información técnica", items: [
              "Interpretar instructivos con imágenes y registrar los pasos con dibujos."
            ]}
          ],
          medios: [
            { tema: "Las herramientas y el cuerpo", items: [
              "Reconocer las herramientas como intermediarias entre las acciones de las personas y el material: amplían la fuerza, la precisión o el alcance.",
              "Identificar los gestos técnicos (cortar, golpear, apretar, girar, raspar) y relacionarlos con cada herramienta.",
              "Relacionar la forma de las herramientas con su función: filo, punta, dientes, mango."
            ]},
            { tema: "Resolver problemas de diseño", items: [
              "Diseñar y construir una herramienta sencilla para resolver un problema concreto.",
              "Anticipar con dibujos qué se va a hacer y con qué materiales, y luego evaluar si funcionó."
            ]}
          ],
          reflexion: [
            { tema: "Cambios y continuidades", items: [
              "Comparar cómo se hacía una tarea antes y ahora: el pan casero, la panadería del barrio y la fábrica. Los pasos se conservan; cambian los medios técnicos.",
              "Reconocer que hoy conviven formas artesanales e industriales de producir."
            ]},
            { tema: "Diversidad técnica", items: [
              "Conocer herramientas de distintas culturas para la misma tarea: el mortero de madera (angu'a, en guaraní) para pisar maíz, el molinillo, la licuadora."
            ]}
          ]
        },
        conceptos: ["insumo", "producto", "proceso", "operacion", "herramienta", "gesto-tecnico"],
        ideas: [
          { t: "¡Rescatemos el candado!", d: "Un candado cayó al fondo de un frasco y no se puede meter la mano. Los chicos analizan el problema, dibujan una herramienta, la construyen con materiales simples y la prueban." },
          { t: "Herramientas detectives", d: "Describir herramientas por su forma y uso para que otros adivinen; luego clasificarlas según la acción: para cortar, para mezclar, para unir, para agarrar." },
          { t: "Del maíz a la harina", d: "Comparar pisar maíz en mortero, molerlo con molinillo manual y verlo en video en un molino. ¿Qué cambia? ¿Qué se mantiene?" }
        ],
        recursos: ["doc-nap-primaria-1", "doc-cuadernos-tec-1"]
      },
      {
        id: "p2", corto: "2°", nombre: "2° grado", ciclo: "Primer ciclo",
        foco: "Producir muchos productos iguales: técnicas de copiado y organización del trabajo.",
        fuente: "NAP Primer Ciclo (Res. CFE 37/07) y Cuadernos para el aula: Tecnología",
        ejes: {
          procesos: [
            { tema: "Producción de «muchos iguales»", items: [
              "Reconocer que para fabricar muchos productos iguales conviene usar técnicas que controlan la forma: moldes, sellos, plantillas, guías.",
              "Comparar la producción de un producto único con la producción en serie.",
              "Organizar el trabajo en grupo: división de tareas y armado de una pequeña línea de producción escolar."
            ]},
            { tema: "Comunicar la información técnica", items: [
              "Representar con dibujos y secuencias el procedimiento seguido para que otro pueda repetirlo."
            ]}
          ],
          medios: [
            { tema: "Herramientas que controlan", items: [
              "Diseñar y ensayar herramientas para copiar figuras: sello, plantilla calada, molde de contorno.",
              "Analizar ventajas y desventajas de cada herramienta: tiempo, esfuerzo, calidad del resultado, cantidad de pasos.",
              "Distinguir en una herramienta la parte que se agarra (mango) y la parte que actúa sobre el material."
            ]}
          ],
          reflexion: [
            { tema: "Cambios técnicos", items: [
              "De copiar a mano a la imprenta y la impresora: cómo cambió la manera de reproducir textos e imágenes.",
              "Trabajo artesanal y manufactura: qué cambia en las tareas de las personas cuando se divide el trabajo."
            ]}
          ]
        },
        conceptos: ["produccion-serie", "division-trabajo", "herramienta", "proceso"],
        ideas: [
          { t: "Carteles para el comercio: sellos, moldes y plantillas", d: "Un comerciante necesita 30 carteles iguales. Los grupos ensayan tres técnicas, comparan resultados y eligen la mejor." },
          { t: "Fábrica de tarjetas", d: "Primero cada uno hace tarjetas completas solo; después se organiza una cadena con tareas divididas. Se compara tiempo, cantidad y calidad." },
          { t: "Estampamos bolsas", d: "Con plantillas y esponjas, estampar bolsas de tela para la feria escolar." }
        ],
        recursos: ["doc-nap-primaria-1", "doc-cuadernos-tec-1"]
      },
      {
        id: "p3", corto: "3°", nombre: "3° grado", ciclo: "Primer ciclo",
        foco: "Del insumo al producto: procesos de producción, medición para controlar y contextos de trabajo.",
        fuente: "NAP Primer Ciclo (Res. CFE 37/07) y Cuadernos para el aula: Tecnología",
        ejes: {
          procesos: [
            { tema: "Procesos de producción", items: [
              "Analizar procesos completos de elaboración (jugo, dulce de mamón, mermelada de naranja): operaciones, insumos, productos y residuos.",
              "Identificar operaciones (lavar, pelar, cortar, triturar, calentar, mezclar, filtrar, envasar) y reconocer operaciones parecidas en procesos diferentes."
            ]},
            { tema: "Medir para controlar", items: [
              "Usar instrumentos de medida (balanza, jarra graduada, reloj, termómetro) para controlar cantidades, tiempos y temperaturas.",
              "Comprender por qué hay que controlar: para que el producto salga siempre igual."
            ]},
            { tema: "Contextos de trabajo y comunicación", items: [
              "Comparar la producción en la casa, en la chacra y en la fábrica; reconocer los roles de las personas.",
              "Producir textos instructivos con insumos, cantidades, pasos y herramientas."
            ]}
          ],
          medios: [
            { tema: "Herramientas con mecanismos", items: [
              "Reconocer en una herramienta: la parte que se acciona (mango, manivela, pedal), los mecanismos que transmiten el movimiento y el efector (lo que corta, bate, ralla).",
              "Comparar herramientas simples y con mecanismos: batidor de mano y batidor a manivela; rallador; sacapuntas."
            ]}
          ],
          reflexion: [
            { tema: "Tecnificación y coexistencia", items: [
              "Cómo cambia el trabajo cuando se usan máquinas: exprimir a mano, exprimidor eléctrico, planta industrial.",
              "En Misiones conviven la producción familiar en chacras, las cooperativas y las industrias: ¿qué tienen en común y qué cambia?"
            ]}
          ]
        },
        conceptos: ["operacion", "insumo", "control", "instructivo", "mecanismo", "efector", "tecnificacion"],
        ideas: [
          { t: "Del naranjal al jugo", d: "Fabricar jugo de naranja como en una fábrica, con roles, control de cantidades y etiqueta. Ver la secuencia completa en «Secuencias»." },
          { t: "Herramientas por dentro", d: "Desarmar (o analizar en imágenes) un batidor a manivela: dibujar sus partes y explicar cómo el movimiento de la mano llega a las paletas." },
          { t: "La ruta del producto", d: "Con fotos y videos, reconstruir el camino de un producto regional (yerba, té, mandioca) desde la chacra hasta el almacén." }
        ],
        recursos: ["doc-nap-primaria-1", "doc-cuadernos-tec-1", "vid-yerba-inym"]
      },
      {
        id: "p4", corto: "4°", nombre: "4° grado", ciclo: "Segundo ciclo",
        foco: "Los materiales y sus formas de conformación; herramientas con mecanismos y construcción de artefactos de accionamiento manual.",
        fuente: "NAP Educación Tecnológica 2° ciclo — Res. CFE 97/10 (4° año)",
        ejes: {
          procesos: [
            { tema: "Procesos sobre los materiales", items: [
              "Experimentar maneras de dar forma según las propiedades del material: los duros por extracción (aserrar, limar, tallar); los deformables dándoles forma (modelar, moldear); los flexibles por entrecruzado (tejer, trenzar).",
              "Explorar propiedades mecánicas: dureza, plasticidad, flexibilidad.",
              "Ensayar formas de aumentar la resistencia cambiando la forma (plegar, enrollar, agregar material)."
            ]},
            { tema: "Organización de los procesos", items: [
              "Analizar procesos de fabricación de varios pasos: acciones realizadas y medios técnicos empleados.",
              "Reconstruir la secuencia de fabricación de un artefacto según su forma y material (ej.: una pieza de ajedrez de madera: aserrado, tallado, torneado, lijado).",
              "Construir artefactos anticipando y ordenando las operaciones y eligiendo herramientas y procedimientos."
            ]},
            { tema: "Las personas y la comunicación técnica", items: [
              "Participar de producciones grupales asignando roles; analizar procesos reales (visitas, videos, fotos) y el papel de las personas.",
              "Producir textos instructivos con insumos, cantidades, pasos y medios técnicos; reconstruir procesos con imágenes y textos en distintos soportes."
            ]}
          ],
          medios: [
            { tema: "Las actividades con medios técnicos", items: [
              "Reproducir y comparar una operación con herramientas simples y con mecanismos (batidor, rallador, sacapuntas a manivela): gestos técnicos, esfuerzo, tiempo, seguridad y resultado.",
              "Diferenciar acciones de ejecución (empujar, tirar, apretar) de acciones de control (regular la fuerza, mantener la dirección, decidir cuánto dura)."
            ]},
            { tema: "Partes, formas y funciones", items: [
              "Analizar artefactos distinguiendo lo que permite accionarlos (palancas, manivelas, sogas), los mecanismos que transmiten el movimiento (poleas, engranajes) y las partes que actúan (cuchillas, ruedas, ganchos).",
              "Relacionar forma y tamaño de los mecanismos con el cambio de movimiento: más velocidad o más fuerza, cambio de sentido o de plano.",
              "Explorar juguetes y máquinas hogareñas para reconocer el rol de los motores.",
              "Seguir la secuencia de uso de máquinas, incluidas las computadoras y equipos multimedia."
            ]},
            { tema: "Problemas de diseño", items: [
              "Modificar mecanismos para cambiar el funcionamiento: cambiar el tamaño de las poleas, cruzar la correa, mover el punto de apoyo de una palanca.",
              "Construir artefactos de accionamiento manual resolviendo la estabilidad de la estructura y la transmisión del movimiento.",
              "Comunicar ideas técnicas con bocetos y dibujos antes, durante y después de construir."
            ]}
          ],
          reflexion: [
            { tema: "Cambios y continuidades", items: [
              "Valorar el dominio de los materiales en culturas tradicionales y en la actualidad.",
              "Reconocer cómo la innovación en materiales cambió objetos cotidianos, construcciones y herramientas.",
              "Identificar los cambios que produjo el uso de herramientas con mecanismos en la vida cotidiana y el trabajo."
            ]},
            { tema: "Coexistencia de tecnologías", items: [
              "Analizar por qué distintas culturas eligen distintos materiales para construir, vestirse o cocinar.",
              "Reconocer que un mismo proceso puede hacerse con tecnologías diferentes según el contexto: en casa, en el campo o en la fábrica; por carta, teléfono o Internet."
            ]},
            { tema: "Redes y sistemas", items: [
              "Reconocer aspectos técnicos y sociales de entornos de trabajo locales: obras en construcción, aserraderos, molinos, talleres, tambos."
            ]}
          ]
        },
        conceptos: ["propiedades-materiales", "conformado", "mecanismo", "polea", "engranaje", "palanca", "gesto-tecnico", "instructivo"],
        ideas: [
          { t: "Laboratorio de conformado", d: "Estaciones: tallar jabón (extracción), modelar arcilla (deformación), tejer con lana o papel (entrecruzado). Cada grupo completa una tabla material → técnica → herramienta." },
          { t: "Ingeniería de papel", d: "¿Puede una hoja sostener un libro? Probar plegados, cilindros y acordeones para aumentar la resistencia sin agregar material." },
          { t: "El guinche de manivela", d: "Construir un guinche con carretel, manivela y polea para levantar una carga. Variante: comparar poleas de distinto tamaño." },
          { t: "Del monte a la tabla", d: "Analizar con video y fotos el proceso de un aserradero de la región: operaciones, máquinas, personas y residuos." }
        ],
        recursos: ["doc-nap-primaria-2", "vid-mecanismos-transmision", "vid-forestacion"]
      },
      {
        id: "p5", corto: "5°", nombre: "5° grado", ciclo: "Segundo ciclo",
        foco: "De la herramienta a la máquina: motores, mecanismos, energía y organización de la producción.",
        fuente: "NAP Educación Tecnológica 2° ciclo — Res. CFE 97/10 (5° año)",
        ejes: {
          procesos: [
            { tema: "Procesos sobre los insumos", items: [
              "Identificar operaciones en procesos de recolección, transporte y distribución (agua potable, residuos, correo, granos o yerba).",
              "Reconocer operaciones similares en procesos diferentes (analogías).",
              "Reconocer la necesidad de energía para calentar, enfriar, batir o mezclar (molienda, forja).",
              "Construir estructuras y reconocer cómo cambia su resistencia según la disposición de los elementos (triangulación)."
            ]},
            { tema: "Organización y control", items: [
              "Identificar qué operaciones deben ser sucesivas y cuáles pueden ser simultáneas en procesos de ensamble o montaje.",
              "Relacionar la secuencia de operaciones con su distribución en el espacio (dónde se transforma, transporta y almacena).",
              "Analizar cómo cambia un proceso cuando se delegan funciones de las personas en máquinas (ej.: cosechadoras)."
            ]},
            { tema: "Las personas y la comunicación técnica", items: [
              "Reorganizar un proceso al pasar de «productos unitarios» a «muchos productos iguales»: tareas, cantidad de personas, medios técnicos.",
              "Comparar procesos de pequeña y gran escala de un mismo producto y el rol de las personas en cada uno.",
              "Reconocer cómo cambian los saberes requeridos con la división de tareas (manufactura).",
              "Usar instructivos variados (dibujos, bocetos, planos, diagramas) y representar la distribución espacial de un proceso de ensamble."
            ]}
          ],
          medios: [
            { tema: "Reemplazar el esfuerzo y el control humano", items: [
              "Comparar una operación con herramientas y con máquinas accionadas por energía animal, de combustibles, del agua, del viento o eléctrica (aserrar, moler, extraer agua, arar).",
              "Diferenciar el control por los sentidos del control con medios técnicos (guías, topes, plantillas, moldes).",
              "Ensayar técnicas de medición: detectar, transmitir y registrar datos."
            ]},
            { tema: "Partes de las máquinas", items: [
              "Identificar en las máquinas: motor (produce el movimiento), mecanismos (lo transmiten o transforman) y efectores o actuadores (actúan sobre el medio).",
              "Reconocer dispositivos que limitan el movimiento: frenos, trabas, topes, guías, trinquetes.",
              "Relacionar la forma de biela-manivela, cigüeñal y levas con la transformación de movimiento (circular ↔ alternativo).",
              "Ensayar motores eólicos, hidráulicos o a cuerda y relacionar sus dimensiones con la velocidad y la fuerza.",
              "Explorar formas de almacenar energía: contrapesos, resortes, elásticos, depósitos de agua; reconocer la misma función en pilas y baterías."
            ]},
            { tema: "Problemas de diseño", items: [
              "Construir artefactos resolviendo la estabilidad de la estructura y eligiendo motor y mecanismos.",
              "Comunicar ideas con dibujos y bocetos y comparar el modelo terminado con lo planificado."
            ]}
          ],
          reflexion: [
            { tema: "Cambios y continuidades", items: [
              "Analizar el paso del uso de herramientas al uso de máquinas: propósitos y alcances en la vida cotidiana y el trabajo.",
              "Identificar los cambios cuando se fabrica en grandes volúmenes."
            ]},
            { tema: "Coexistencia y sistemas", items: [
              "Reconocer que coexisten máquinas y herramientas para obtener resultados equivalentes.",
              "Analizar formas de recoger, guardar y transportar materiales (agua, alimentos, madera) en distintos contextos.",
              "Discutir cómo cambian aspectos técnicos, sociales y económicos cuando cambia un componente (hormigón elaborado vs. hecho en obra; enfriadora de leche en el tambo)."
            ]}
          ]
        },
        conceptos: ["maquina", "motor", "mecanismo", "biela-manivela", "leva", "efector", "estructura", "energia", "division-trabajo"],
        ideas: [
          { t: "Máquinas que mueven", d: "Construir un guinche o una noria con poleas y engranajes y medir cómo cambia la velocidad. Ver la secuencia completa en «Secuencias»." },
          { t: "Molinos de viento", d: "Diseñar un motor eólico con vasitos o papel; variar la cantidad y forma de las aspas y registrar cuánto peso levanta." },
          { t: "El pájaro que aletea", d: "Juguete con leva o biela-manivela en una caja de cartón: el movimiento circular de la manivela se transforma en alternativo." },
          { t: "De la tarefa a la cosechadora", d: "Comparar la cosecha manual de yerba y la mecanizada: tareas, tiempos, cantidad de personas, cambios para las familias tareferas." }
        ],
        recursos: ["doc-nap-primaria-2", "vid-mecanismos-transmision", "vid-engranajes", "vid-yerba-industrial"]
      },
      {
        id: "p6", corto: "6°", nombre: "6° grado", ciclo: "Segundo ciclo",
        foco: "La energía, el control y los primeros automatismos: de la acción manual a temporizadores y sensores.",
        fuente: "NAP Educación Tecnológica 2° ciclo — Res. CFE 97/10 (6° año)",
        ejes: {
          procesos: [
            { tema: "Procesos de energía", items: [
              "Analizar procesos de producción y generación de energía: almacenamiento, transformación, transporte y distribución; tipo de insumo (agua, viento, combustibles).",
              "Reconocer que animales, ruedas hidráulicas y molinos cumplen la misma función que los motores eléctricos o de combustión: motorizar máquinas.",
              "Reconocer cómo se aprovechó la energía en distintas épocas."
            ]},
            { tema: "Organización y control", items: [
              "Analizar el rol del control en los procesos: qué, cómo, cuánto, cuándo, dónde y para qué se controla (fuerza, consistencia, tiempo, temperatura, velocidad).",
              "Identificar qué operaciones son sucesivas o simultáneas y cómo las demoras afectan la duración total del proceso."
            ]},
            { tema: "Las personas y la comunicación técnica", items: [
              "Planificar y simular líneas de producción: distribución de máquinas, asignación de recursos humanos y técnicos, duración total.",
              "Identificar tareas de control de calidad, de cantidad y de revisión de desperdicios.",
              "Usar diagramas temporales, gráficos de redes y planos; usar TIC para buscar, organizar, producir y compartir información."
            ]}
          ],
          medios: [
            { tema: "Del control manual al automático", items: [
              "Comparar las acciones al usar artefactos con control manual (encender, apagar, variar velocidad) con las de artefactos que cambian solos.",
              "Inferir la presencia de «programas» a partir de cómo se usan máquinas automáticas: expendedoras, lavarropas, microondas."
            ]},
            { tema: "Flujos, programas mecánicos y sensores", items: [
              "Analizar sistemas por los que circulan materia y energía y los dispositivos que regulan el flujo (válvulas, interruptores); representarlos con diagramas de bloques.",
              "Explorar artefactos con movimientos «programados» con levas o tarjetas perforadas (cajita musical, telar de Jacquard).",
              "Reconocer grados de delegación del control: del control sensoriomotriz a guías y plantillas; de interruptores y válvulas al control automático con temporizadores y sensores."
            ]},
            { tema: "Problemas de diseño", items: [
              "Analizar problemas reconociendo especificaciones, restricciones y variables; construir máquinas o sistemas de circulación de flujos.",
              "Elegir el tipo de motor (eólico, hidráulico, de pesas, eléctrico) y ensayar estrategias para regular el movimiento (volante de inercia, aspas reguladoras, levas)."
            ]}
          ],
          reflexion: [
            { tema: "Cambios y continuidades", items: [
              "Reconocer los cambios que implicó pasar del control manual al control con instrumentos.",
              "Analizar cambios y continuidades en el transporte de energía y materiales (agua, gas, mercaderías).",
              "Reconocer usos y cambios de las tecnologías de la información y la comunicación a lo largo del tiempo."
            ]},
            { tema: "Coexistencia, sistemas y potencialidades", items: [
              "Analizar distintas formas de usar la energía según el contexto (leña, garrafa, red eléctrica, paneles solares en zonas rurales) y sus implicancias sociales.",
              "Reconocer que coexisten diferentes formas de controlar un proceso.",
              "Discutir cómo una innovación afecta a varios ámbitos de trabajo relacionados.",
              "Identificar límites y potencialidades de tecnologías nuevas y viejas."
            ]}
          ]
        },
        conceptos: ["energia", "transformacion-energia", "control", "automatizacion", "sensor", "temporizador", "diagrama-bloques", "delegacion"],
        ideas: [
          { t: "Yacyretá en el aula: del río a la lamparita", d: "Seguir el flujo de energía desde el agua del Paraná hasta una lámpara en Posadas, con diagrama de bloques y video de Canal Encuentro." },
          { t: "La cajita musical", d: "Analizar (o construir con un cilindro y palitos) un programador de levas: la posición de cada leva «programa» la secuencia." },
          { t: "¿Cómo sabe el lavarropas qué hacer?", d: "Inferir el programa de un lavarropas a partir de su panel y manual; representarlo con un diagrama de flujo." },
          { t: "Línea de producción de alfajores", d: "Simular una línea, medir tiempos y descubrir dónde se forma el «cuello de botella»." }
        ],
        recursos: ["doc-nap-primaria-2", "vid-yacyreta-encuentro", "vid-yacyreta-energia", "vid-lazo-tostadora"]
      },
      {
        id: "p7", corto: "7°", nombre: "7° grado", ciclo: "Cierre de la primaria",
        foco: "Comunicaciones a distancia, automatización con sensores y programas, y resolución de problemas de diseño.",
        fuente: "NAP Educación Tecnológica — Res. CFE 97/10 (7° año de Primaria / 1° de Secundaria)",
        ejes: {
          procesos: [
            { tema: "Interés e indagación sobre los procesos", items: [
              "Reconocer que productos y procesos (artefactos, instalaciones, programas, ambientes, sistemas) son resultado de un trabajo de diseño.",
              "Analizar interacciones de materia, energía e información en procesos productivos (industria maderera, textil, yerbatera).",
              "Comparar operaciones para enviar y recibir mensajes a distancia (codificar, transmitir, retransmitir, recibir): señales de humo, banderas, telégrafo óptico, telégrafo eléctrico, intercomunicadores."
            ]},
            { tema: "Organización y control", items: [
              "Distinguir momentos en la resolución de problemas de diseño: identificar y analizar el problema, buscar alternativas, evaluar y seleccionar.",
              "Reconocer la necesidad de reglas y códigos para controlar la comunicación (código de Chappe, código Morse).",
              "Diferenciar sistemas automáticos que cambian por información de sensores de los «programados» por tiempo (riego por humedad vs. riego por reloj).",
              "Reconocer cómo se controla la calidad, las condiciones ambientales y la seguridad de las personas en la producción."
            ]},
            { tema: "Las personas y la comunicación técnica", items: [
              "Participar de experiencias grupales de diseño poniendo en juego distintas capacidades.",
              "Participar de experiencias de transmisión de información con circuitos eléctricos; comparar el rol de telegrafistas y telefonistas.",
              "Analizar cómo cambian las tareas de las personas cuando los procesos se automatizan.",
              "Usar diagramas temporales, de procesos, de redes, planos y diagramas de flujo."
            ]}
          ],
          medios: [
            { tema: "Tareas delegadas en los artefactos", items: [
              "Analizar la delegación de operaciones de emisión, recepción, retransmisión y conmutación: de la telefonista a la central automática.",
              "Analizar procesos automáticos programados (riego, semáforos, embotellado) y las decisiones humanas delegadas (inicio, duración, etapas).",
              "Analizar procesos automáticos con sensores (alarmas, invernaderos, nivel de tanques): qué mediciones y correcciones se delegan."
            ]},
            { tema: "Componentes y funciones", items: [
              "Reconocer en los sistemas de comunicación las funciones de emisión, medio de transmisión y recepción; unidireccionales o bidireccionales.",
              "Representar con diagramas artefactos que cambian de estado según sensores e identificar cómo circula la información."
            ]},
            { tema: "Problemas de diseño", items: [
              "Diseñar estructuras y máquinas: variables, especificaciones y restricciones, alternativas, materiales, formas, uniones; evaluar y ajustar.",
              "Diseñar un sistema telegráfico con pilas, lamparitas e interruptores: códigos, protocolos y circuitos.",
              "Diseñar artefactos con programadores mecánicos (tambor de levas) para comportamientos cíclicos.",
              "Diseñar sistemas automáticos con sensores (fin de carrera, magnéticos).",
              "Representar con bocetos, cortes, vistas y perspectivas."
            ]}
          ],
          reflexion: [
            { tema: "Cambios y continuidades", items: [
              "Reconocer los cambios del paso del control manual a la automatización.",
              "Identificar cambios al articular tecnologías de control, telecomunicaciones y robótica.",
              "Valorar los cambios en las prácticas sociales por el acceso masivo a las TIC."
            ]},
            { tema: "Coexistencia, sistemas y consumo", items: [
              "Analizar la coexistencia de sistemas automatizados y manuales y su relación con el trabajo.",
              "Analizar la coexistencia de sistemas de comunicación y su relación con los medios masivos.",
              "Discutir innovaciones en las comunicaciones: telégrafo y ferrocarril, Internet, digitalización y convergencia de soportes.",
              "Seleccionar tecnologías por su valor social y sustentabilidad; discutir el consumo acrítico."
            ]}
          ]
        },
        conceptos: ["codificacion", "codigo-morse", "retransmision", "sensor", "automatizacion", "lazo-abierto", "lazo-cerrado", "diagrama-flujo", "diseno"],
        ideas: [
          { t: "Mensajes a distancia: el telégrafo del aula", d: "Construir un telégrafo con pila, pulsador y lamparita; inventar un código y comparar con Morse. Ver la secuencia completa en «Secuencias»." },
          { t: "Riego automático: ¿por reloj o por humedad?", d: "Comparar dos maquetas (o simulaciones) de riego y discutir ventajas, desventajas y consumo de agua." },
          { t: "Programamos un semáforo", d: "En Pilas Bloques o Scratch, programar la secuencia de un semáforo y después agregar un botón peatonal." },
          { t: "Del telegrama al WhatsApp", d: "Línea de tiempo colaborativa de las comunicaciones en la familia: entrevistas a abuelos y padres." }
        ],
        recursos: ["doc-nap-primaria-2", "vid-morse-ticmas", "vid-morse-historia", "tool-pilas-bloques", "tool-scratch"]
      }
    ]
  },

  /* ======================================================================
     NIVEL SECUNDARIO
     ====================================================================== */
  {
    id: "secundaria",
    nombre: "Nivel Secundario",
    edades: "Ciclo Básico (1° y 2° año) y Ciclo Orientado",
    resumen: "En Misiones, Tecnología se enseña en el Ciclo Básico con contenidos esenciales y contenidos emergentes que conectan el aula con la realidad productiva y tecnológica de la provincia.",
    enfoque: [
      "El Diseño Curricular de Misiones (2022) organiza Tecnología de 1° y 2° año en los tres ejes, cada uno con temas, contenidos esenciales y contenidos emergentes.",
      "Los contenidos esenciales coinciden en gran medida con los NAP del Ciclo Básico (Res. CFE 141/11).",
      "Los contenidos emergentes actualizan el área con temas de agenda: biotecnología, energías renovables, impresión 3D, programación, robótica, inteligencia artificial, y casos misioneros (Silicon Misiones, Biofábrica, Yacyretá, yerba, té, pino, Parque Industrial y de la Innovación)."
    ],
    fuentes: [
      { texto: "Diseño Curricular de Misiones (2022) — Tecnología 1° y 2° año (Ciclo Básico)", recurso: "doc-dc-misiones-2022" },
      { texto: "NAP Educación Tecnológica — Ciclo Básico de Secundaria (Res. CFE 141/11)", recurso: "doc-nap-secundaria" },
      { texto: "NAP Educación Digital, Programación y Robótica (Res. CFE 343/18)", recurso: "doc-nap-edpr" }
    ],
    grados: [
      {
        id: "sec1", corto: "1° año", nombre: "1° año", ciclo: "Ciclo Básico",
        foco: "Procesos de producción y de energía, biotecnología, informática, introducción a la robótica y sistemas automáticos.",
        fuente: "DC Misiones 2022 (Tecnología 1° año) + NAP Ciclo Básico (Res. CFE 141/11)",
        conEmergentes: true,
        ejes: {
          procesos: [
            { tema: "Conocimiento e interrogación", items: [
              "Procesos y tecnologías de producción como secuencias de operaciones; tipos de organización, planificación y organización de los procesos.",
              "Operaciones de transformación que usan microorganismos (biotecnología tradicional): cortar, mezclar, calentar, fermentar, embutir, enfriar; su combinación según insumos y productos en la industria alimenticia, la agricultura y la ganadería.",
              "Procesos de obtención y conversión de energía: flujos de energía, tipos de energía en cada operación; obtención de movimiento, calor, luz y electricidad. Ventajas y desventajas en eficiencia, rendimiento e impacto ambiental."
            ], emergentes: [
              "Transformación de nuevos materiales: materiales para impresión 3D, nanomateriales, bioplásticos y plásticos biodegradables; relación propiedades–operaciones–productos.",
              "Biotecnología moderna: casos de Silicon Misiones y la Biofábrica; organismos genéticamente modificados; producción de semillas y fertilizantes; biocombustibles; procesamiento y conservación de alimentos; monocultivos; los colores de la biotecnología misionera.",
              "Energías alternativas o renovables (biomasa, geotérmica, eólica, nuclear, solar); nuevas fuentes de energía (el DC menciona el «nitrógeno verde»); coexistencia de renovables y no renovables; almacenamiento eléctrico inteligente."
            ]},
            { tema: "Las tareas de las personas en los procesos", items: [
              "Organización de los procesos productivos: flexible o en línea.",
              "Tipos de procesos: intermitentes, por lotes, continuos, por proyecto.",
              "Estados de un proceso automatizado; el rol de las personas según el nivel de automatización."
            ], emergentes: [
              "Tareas de las personas en procesos con alto grado de automatización y sectores críticos para la reconversión laboral.",
              "Nuevos perfiles laborales; seguridad y salud ocupacional en procesos de la región."
            ]},
            { tema: "Comunicar la información técnica de un proceso", items: [
              "Insumos como flujos de información: necesidades de producción, consumidores, tiempos, proveedores, especificaciones técnicas; protocolos de control de calidad.",
              "Las tecnologías para elaborar, producir, presentar y comunicar información en distintos soportes y sistemas de representación.",
              "Diagramas y esquemas de la organización espacial y temporal de líneas de producción en distintos formatos: simulaciones, audio, video."
            ], emergentes: [
              "Minería de datos como herramienta de investigación; trabajo en red y redes sociales; comunicación digital.",
              "Aplicaciones para producciones digitales; edición colaborativa y remix; aprender con plataformas."
            ]}
          ],
          reflexion: [
            { tema: "Conjuntos, redes y sistemas", items: [
              "Interacciones entre procesos tecnológicos, actores y tecnologías que configuran un sistema sociotécnico."
            ], emergentes: [
              "Sistemas de producción de bioplásticos, de impresión 3D; procesos sustentables y cadenas de valor sostenibles."
            ]},
            { tema: "Continuidades y cambios a través del tiempo", items: [
              "Procesos que conservan sus operaciones más allá de los medios técnicos usados.",
              "Tiempos para realizar una misma actividad con tecnologías de distintas épocas o culturas; cómo su reducción afecta la calidad de vida y de trabajo."
            ], emergentes: [
              "El proceso de adopción de una tecnología vigente: actores, expectativas, intereses y alternativas. El caso del Parque Industrial y de la Innovación y el Clúster SBC.",
              "Sistemas automatizados que complementan, refuerzan o sustituyen la acción humana en la vida cotidiana y el trabajo.",
              "Los tiempos de las tecnologías en el agro y en procesos regionales; ciclo de vida del producto; obsolescencia programada."
            ]},
            { tema: "Potencialidad de las tecnologías y condiciones de vida", items: [
              "Seleccionar tecnologías por su valor social y su sustentabilidad ambiental; consecuencias del uso acrítico.",
              "Grados de reciclabilidad de los materiales descartables y ventajas de los reutilizables."
            ]}
          ],
          medios: [
            { tema: "Secuencias de tareas delegadas en los artefactos", items: [
              "Delegación de programas de acción humana en sistemas y artefactos automatizados.",
              "Competencias y habilidades para integrarse en la cultura digital y en la sociedad del futuro."
            ], emergentes: [
              "Relevamiento de variables, comparación con un valor de referencia, toma de decisiones y planes de acción en sistemas automatizados; modelización; distintos grados de intervención humana.",
              "Almacenamiento de datos; pensamiento computacional y programación; evolución de la informática."
            ]},
            { tema: "Componentes de un sistema, propiedades y funciones", items: [
              "Flujos de energía, materia e información en las máquinas; funciones de los mecanismos (transmisión, transformación, almacenamiento) y dispositivos de control.",
              "La informática en los procesos de producción: adquirir, crear, procesar, almacenar y hacer circular información. Equipos (computadoras, redes, móviles, sistemas embebidos) y tipos de software (de base, de programación, de aplicación). Identidades en el ciberespacio; buscar y validar información.",
              "Sistemas automáticos con controladores mecánicos, hidráulicos, neumáticos o eléctricos; el «programa de acciones»; representaciones normalizadas.",
              "Introducción a la robótica: surgimiento, estructura, tipos de robots, sensores y actuadores, formas de programación; impactos en la vida cotidiana y el trabajo.",
              "Dispositivos de producción, transporte y conservación de la energía eléctrica: generador, turbina, acumulador, transformador.",
              "Estructura y funcionamiento de las computadoras; algoritmos, lenguajes y lógicas de programación; la automatización como proceso de tecnificación."
            ], emergentes: [
              "Sistemas integrados; estándares de la industria y de la información; algoritmos.",
              "Diagramas de bloques de máquinas, sistemas de comunicación y de control; dibujos, bocetos y planos.",
              "Lenguajes y lógicas de programación de sensores y actuadores; nociones básicas de inteligencia artificial; Digital Innovation Labs."
            ]},
            { tema: "Alternativas de solución a problemas de diseño", items: [
              "Procesos de producción a escala escolar, tomando decisiones sobre su organización.",
              "Problemas de diseño de productos, procesos y sistemas: variables y relaciones a medir, instrumentos de detección y medición, componentes, códigos y protocolos."
            ], emergentes: [
              "Planificación, organización y ejecución de un proceso de producción que responda a problemáticas del entorno.",
              "Diseño de sistemas y diseño centrado en el usuario; diseño 2D y 3D; impresión 3D y sus efectos en los modos de producción."
            ]}
          ]
        },
        conceptos: ["proceso", "tipos-produccion", "biotecnologia", "colores-biotecnologia", "transformacion-energia", "sistema-sociotecnico", "automatizacion", "robot", "algoritmo", "ciclo-vida", "contenido-emergente"],
        ideas: [
          { t: "La yerba mate como proceso tecnológico", d: "Analizar el proceso yerbatero (cosecha, zapecado, secanza, estacionamiento, molienda, envasado) con diagrama de flujo y roles de las personas. Ver la secuencia completa." },
          { t: "Energía que viene del río", d: "Estudiar Yacyretá: transformaciones de energía, eficiencia, impacto ambiental y social; comparar con biomasa y solar." },
          { t: "Biotecnología misionera en colores", d: "Investigar en grupos un color de la biotecnología con un caso real (Biofábrica: micropropagación de plantines; fermentaciones tradicionales) y armar una infografía." },
          { t: "Diseño 3D de un producto útil", d: "Detectar un problema del aula, diseñar una solución en Tinkercad (2D/3D) y, si hay impresora, fabricarla. Evaluar con usuarios reales." }
        ],
        recursos: ["doc-dc-misiones-2022", "doc-nap-secundaria", "vid-yerba-inym", "vid-yacyreta-encuentro", "vid-biofabrica", "vid-impresion-3d", "tool-tinkercad"]
      },
      {
        id: "sec2", corto: "2° año", nombre: "2° año", ciclo: "Ciclo Básico",
        foco: "Sistemas automáticos y control, programación, comunicaciones digitales, gestión de proyectos y producción regional.",
        fuente: "DC Misiones 2022 (Tecnología 2° año) + NAP Ciclo Básico (Res. CFE 141/11)",
        conEmergentes: true,
        ejes: {
          procesos: [
            { tema: "Conocimiento e interrogación", items: [
              "Productos y procesos tecnológicos a diferentes escalas y contextos de producción.",
              "Operaciones de transformación (de conformación, de cambio de propiedades, de ensamble) y de organización espacio-temporal de los materiales (transporte, demoras, almacenamiento, distribución).",
              "Sistemas y procesos automáticos: por temporización y con sensores que captan información del entorno; funciones de los sensores.",
              "La computadora como sistema de generación, procesamiento, control y comunicación de información: la computadora como controlador. Redes digitales."
            ], emergentes: [
              "Costos y duraciones de un proceso; ensayos y pruebas de calidad; modelización con fórmulas y funciones; tablas dinámicas y análisis de datos.",
              "Escalas de producción, costos, gestión de excedentes, energía, desechos y contaminación en tecnologías que coexisten en la región.",
              "Sistemas cuyos sensores detectan cambios provocados por el propio sistema (semáforos, luces urbanas, refrigeración); estaciones meteorológicas; realimentación y autorregulación.",
              "Procesos cuyo flujo principal es la información: transmisión de señales y comunicación a distancia.",
              "Simuladores para comparar sistemas automáticos; pensamiento lógico-formal y resolución de problemas con algoritmos."
            ]},
            { tema: "Organización y control de los procesos", items: [
              "Comportamientos automáticos en procesos de transporte, transformación o almacenamiento: control por tiempo, con sensores a lazo abierto o por realimentación; operaciones de sensado, temporización, control y actuación.",
              "Estructuras básicas de programación (secuenciales, repetitivas y condicionales); transformar algoritmos en programas.",
              "Producción por proyecto: redes de precedencias, rutas críticas y efecto de los cambios en las tareas críticas sobre la duración total."
            ], emergentes: [
              "Programación aplicada a objetos; interfaces de entrada y salida, puertos y periféricos; lectura de sensores y activación de actuadores; simuladores; operaciones lógicas booleanas; errores.",
              "Casos de producción local: pino, yerba, té; producción hidroeléctrica en Yacyretá."
            ]},
            { tema: "Las tareas de las personas y la comunicación técnica", items: [
              "Proyectos escolares que simulan la planificación de bienes o servicios: decisiones sobre la organización de las tareas, los recursos y los roles.",
              "Diferencias entre el rol de las personas durante la planificación y durante la ejecución de un proyecto."
            ], emergentes: [
              "Experiencias grupales que representan tipos de producción industrial; relación entre automatización y cambios en los modos de producir.",
              "Diagramas de redes o de tiempo y software de gestión de proyectos; simbología normalizada (diagramas temporales, de flujo).",
              "TIC para buscar, representar y presentar información; potencialidad de las tecnologías y condiciones de vida; Internet de las cosas."
            ]}
          ],
          reflexion: [
            { tema: "Conjuntos, redes y sistemas: diversidad, cambios y continuidades", items: [
              "Tecnologías en convivencia: coexistencia de tecnologías diferentes.",
              "Cambios en las prácticas sociales, económicas y científico-tecnológicas por el uso masivo de las tecnologías; interacciones entre procesos, actores y tecnologías.",
              "Convergencia de modos o de medios: procesos que antes usaban tecnologías distintas hoy se realizan sobre un soporte común informático (dibujo, cálculo, fotografía, escritura, comunicaciones)."
            ]}
          ],
          medios: [
            { tema: "Secuencias de tareas delegadas en los artefactos", items: [
              "Técnicas de control discreto y analógico para medir y controlar variables (temperatura, nivel de líquidos).",
              "Programación de robots: textual, gestual, por imitación, por trayectorias y por posiciones."
            ], emergentes: [
              "Programación de puertos de entrada y salida: lectura de sensores y activación de actuadores; el rol de los simuladores; lógica booleana; depuración de errores."
            ]},
            { tema: "Componentes de un sistema, propiedades y funciones", items: [
              "Controladores, sensores y actuadores: cómo circulan los flujos de energía, materia e información en sistemas automáticos complejos (lavadero automático, peajes, procesos agroindustriales).",
              "Digitalización y códigos binarios; señales sonoras digitales.",
              "Problemas de diseño de sistemas de transmisión de información."
            ], emergentes: [
              "Artefactos con sensores; señales analógicas y digitales; redes, centrales telefónicas y conmutadores automáticos.",
              "Internet como red de redes: tecnologías, acceso y conexión, transmisión inalámbrica."
            ]},
            { tema: "Alternativas de solución a problemas de diseño", items: [], emergentes: [
              "Cálculo de tiempos y costos de un proyecto: diagramas de tareas con planillas de cálculo y software de gestión.",
              "Diseño, construcción y ajuste de controladores electromecánicos: temporizado (programadores cíclicos), lógico (llaves en serie o paralelo), con sensores magnéticos o pulsador normal cerrado, con relés.",
              "Control automático con software y controladores (interfaces): programar salidas para activar lámparas o motores según el tiempo o la información de sensores."
            ]}
          ]
        },
        conceptos: ["lazo-abierto", "lazo-cerrado", "realimentacion", "sensor", "actuador", "controlador", "programacion", "senal-digital", "codigo-binario", "ruta-critica", "gantt", "convergencia", "iot"],
        ideas: [
          { t: "Semáforo inteligente con Arduino", d: "Programar un semáforo en Tinkercad Circuits y agregar un pulsador peatonal y un sensor de luz. Ver la secuencia completa." },
          { t: "Planificamos la feria de ciencias", d: "Red de precedencias, ruta crítica y diagrama de Gantt de un evento escolar real con planilla de cálculo o GanttProject." },
          { t: "Del sonido al bit", d: "Grabar audio en el celular, ver la forma de onda y discutir muestreo, digitalización y compresión. Analogía con la telefonía." },
          { t: "Estación meteorológica escolar", d: "Sensores de temperatura y humedad que registran datos; análisis en planilla y debate: ¿para qué le sirven estos datos a un productor de té?" }
        ],
        recursos: ["doc-dc-misiones-2022", "doc-nap-secundaria", "vid-semaforo-tinkercad", "vid-lazo-control", "tool-tinkercad", "tool-wokwi", "tool-ganttproject"]
      },
      {
        id: "sec-co", corto: "Ciclo Orientado", nombre: "Ciclo Orientado y complementos", ciclo: "Complementos",
        foco: "Contenidos para profundizar en 3° a 5° año, en orientaciones afines y en proyectos de Educación Digital, Programación y Robótica.",
        fuente: "NAP Ciclo Básico 2°/3° año (Res. CFE 141/11) y NAP EDPyR (Res. CFE 343/18) — complementos para el aula",
        ejes: {
          procesos: [
            { tema: "Procesos digitales y automatizados", items: [
              "Comunicación a distancia con señales digitales: digitalización, transmisión, decodificación, recepción.",
              "Códigos binarios aplicados a textos e imágenes; almacenamiento y recuperación de información.",
              "Sistemas automáticos programables como medio para dar flexibilidad a los procesos: ciclos, secuencias repetitivas, estructuras condicionales."
            ]}
          ],
          medios: [
            { tema: "Robótica y transmisión de señales", items: [
              "Robots industriales: grados de libertad, tipos de actuadores y sensores, capacidad de adaptarse al entorno (brazos manipuladores, vehículos autónomos).",
              "Medios de transmisión (cobre, coaxil, radio, fibra óptica): alcance, velocidad y cantidad de información.",
              "Tablas de estado y diagramas temporales de información digital; diagramas de flujo y de estados de sistemas automáticos."
            ]}
          ],
          reflexion: [
            { tema: "Enfoques y política tecnológica", items: [
              "Comparar decisiones sociotécnicas desde distintos enfoques (determinismo tecnológico, constructivismo social) mediante análisis de casos.",
              "Cambios en la localización de la producción por las telecomunicaciones; nuevas representaciones del tiempo y el espacio.",
              "Instituciones del Sistema Nacional de Innovación (INTI, INTA, INVAP, CONAE, CNEA, ANMAT, INPI) y de la jurisdicción (universidades, parques tecnológicos, Silicon Misiones).",
              "Ciudadanía digital: privacidad, huella digital, uso crítico de la inteligencia artificial."
            ]}
          ]
        },
        conceptos: ["robot", "grados-libertad", "senal-digital", "sistema-sociotecnico", "determinismo", "inteligencia-artificial", "pensamiento-computacional"],
        ideas: [
          { t: "Mapa del sistema de innovación", d: "Investigar qué hacen INTA Cerro Azul, INTI, la UNaM, la Biofábrica y Silicon Misiones; armar un mapa de actores y relaciones." },
          { t: "Debate: ¿la tecnología determina a la sociedad?", d: "Analizar un caso (celulares en la escuela, cosechadoras de yerba) desde el determinismo y el constructivismo social." },
          { t: "Entrenamos una IA", d: "Con Teachable Machine, entrenar un clasificador de imágenes (hojas sanas y enfermas) y discutir sesgos y errores." }
        ],
        recursos: ["doc-nap-secundaria", "doc-nap-edpr", "tool-teachable", "vid-escuela-robotica"]
      }
    ]
  }
];
