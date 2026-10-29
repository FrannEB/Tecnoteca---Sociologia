# Biblioteca Virtual para Futuros Docentes — Guía para editar y publicar

Proyecto solidario socioeducativo de acceso libre y gratuito para estudiantes del
Profesorado de Educación Tecnológica del **Instituto Superior Roque González**
(Posadas, Misiones). Proyecto de 3° año · Sociología de la Educación.

La biblioteca se organiza en **4 estantes** (según el boceto del grupo):
1. Educación Ambiental & CTSA · 2. Educación Tecnológica y Robótica ·
3. Educación Social & Sociología · 4. Pedagogía, Sujeto y Psicología Educacional.

---

## 1. Cómo abrir el portal

- **Rápido:** hacé doble clic en `index.html`. Funciona todo, salvo que los videos
  se abren en YouTube (en una pestaña nueva) en lugar de reproducirse dentro de la página.
- **Como en Internet (recomendado para probar):** en una terminal, dentro de esta carpeta:

  ```bash
  python -m http.server 8080
  ```

  y abrí <http://localhost:8080> en el navegador.

## 2. Estructura de carpetas

```
index.html            Portada
biblioteca.html       Los 4 estantes (temas, autores, materias, documentos, videos)
niveles.html          Contenidos por nivel, sala, grado y año
profesorado.html      Las materias de los 4 años, conectadas con el aula
conceptos.html        Glosario + diagramas interactivos
secuencias.html       Secuencias didácticas (imprimibles)
misiones.html         Casos regionales: yerba, té, Yacyretá, forestales, biotecnología, innovación
recursos.html         Documentos, videos, herramientas y sitios
planificador.html     Generador de planificaciones
proyecto.html         El proyecto socioeducativo (plantilla Ander-Egg y Aguilar), cómo sumar material, créditos
assets/css/styles.css Diseño (colores, tipografías, animaciones)
assets/js/main.js     Menú, buscador, modo oscuro, videos, animaciones
assets/js/pages.js    Lógica de cada página
assets/js/data/       ← TODO EL CONTENIDO ESTÁ ACÁ
materiales/           PDFs y apuntes propios
```

**Para cambiar contenidos solo hace falta tocar los archivos de `assets/js/data/`.**
Se abren con cualquier editor de texto (recomendado: Visual Studio Code).

| Archivo | Qué contiene |
|---|---|
| `areas.js` | Los 4 estantes: temas, autores, conceptos, bibliografía, recursos |
| `proyecto.js` | Plantilla del proyecto socioeducativo (la completa el grupo) |
| `curriculo.js` | Niveles → grados → ejes → temas → contenidos (y contenidos emergentes) |
| `conceptos.js` | Glosario |
| `recursos.js` | Documentos, videos, herramientas y sitios |
| `secuencias.js` | Secuencias didácticas |
| `profesorado.js` | Plan de estudios y descripción de cada materia |
| `misiones.js` | Casos regionales, imágenes y colores de la biotecnología |

## 3. Recetas rápidas

### Agregar un PDF
1. Copiá el archivo a `materiales/` (nombre sin espacios ni tildes: `apunte-mecanismos.pdf`).
2. En `recursos.js` copiá un bloque y completalo:

```js
{ id: "doc-apunte-mecanismos", tipo: "documento",
  titulo: "Apunte de mecanismos",
  desc: "Resumen de poleas, engranajes y palancas para 5° grado.",
  fuente: "Cátedra Educación Tecnológica II", url: "materiales/apunte-mecanismos.pdf",
  niveles: ["primaria", "profesorado"], ejes: ["medios"] },
```

### Agregar un video de YouTube
En `https://www.youtube.com/watch?v=fUkbhDxD4BQ` el código es `fUkbhDxD4BQ`:

```js
{ id: "vid-mi-video", tipo: "video", yt: "fUkbhDxD4BQ",
  titulo: "Título del video", desc: "De qué trata.",
  fuente: "Canal", niveles: ["secundaria"], ejes: ["procesos"] },
```

Para que aparezca en un grado, agregá `"vid-mi-video"` a la lista `recursos` de ese grado en `curriculo.js`.

### Agregar un contenido a un grado
En `curriculo.js` buscá el grado (por ejemplo `id: "p5"`), el eje y el tema, y agregá una línea
dentro de `items: [ ... ]`. Cada línea va entre comillas y termina con coma.

### Agregar una secuencia didáctica
Copiá una secuencia completa de `secuencias.js`, cambiale el `id` (sin espacios) y completá los campos.
`grado` tiene que coincidir con un `id` de `curriculo.js` (`s4`, `p3`, `sec1`, etc.).

### Usar fotos propias
Guardalas en `assets/img/` y en `misiones.js` (objeto `PET.imagenes`) cambiá `src` por
`"assets/img/mi-foto.jpg"`. Pedí permiso a las personas que aparecen en las fotos.

> **Cuidado con la sintaxis:** comillas `"..."`, comas entre elementos y llaves `{ }` bien cerradas.
> Si la página queda en blanco después de editar, revisá la última coma o comilla que tocaste.
> En el navegador, F12 → Consola muestra en qué línea está el error.

### Completar el proyecto socioeducativo
En `proyecto.js`, escribí el texto de cada apartado entre las comillas de `v`.
Mientras un apartado esté vacío, la página muestra la pregunta guía como "Por completar".
Para listas usá corchetes: `v: ["Objetivo 1", "Objetivo 2"]`.

### Agregar material a un estante
En `areas.js`, sumá el `id` del recurso a la lista `recursos` del estante,
o agregá temas, autores o bibliografía siguiendo el mismo formato.

## 4. Publicar en Internet (gratis)

**Opción A — Netlify Drop (la más fácil):** entrá a <https://app.netlify.com/drop>
y arrastrá la carpeta completa. Te da un enlace para compartir.

**Opción B — GitHub Pages:** subí la carpeta a un repositorio de GitHub y en
*Settings → Pages* elegí la rama `main` y la carpeta raíz.

Una vez publicado, los videos se reproducen dentro de la página.

## 5. Fuentes

- NAP Nivel Inicial; NAP Educación Tecnológica Primer Ciclo (Res. CFE 37/07),
  Segundo Ciclo y 7° año (Res. CFE 97/10), Ciclo Básico Secundaria (Res. CFE 141/11);
  NAP Educación Digital, Programación y Robótica (Res. CFE 343/18).
- Diseño Curricular de Misiones 2022 — Tecnología 1° y 2° año.
- Cuadernos para el aula: Tecnología, Primer Ciclo (2007).
- Imágenes de Wikimedia Commons con licencias libres (créditos en `proyecto.html`).

Los contenidos están sintetizados y parafraseados para estudiar; para citar,
usar siempre los documentos oficiales.
