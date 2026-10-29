/* ==========================================================================
   Biblioteca Virtual — Renderizado de cada página
   Cada página tiene <body data-page="..."> y acá está su función.
   ========================================================================== */
(function () {
  "use strict";
  const PET = (window.PET = window.PET || {});
  const { $, $$, esc, icons } = PET;
  PET.pages = {};

  const ejeOrden = ["procesos", "medios", "reflexion"];
  const tagEje = (e) => `<span class="tag tag-${e}">${PET.ejes[e] ? PET.ejes[e].corto : "General"}</span>`;
  const img = (key, cls = "") => {
    const im = PET.imagenes && PET.imagenes[key];
    if (!im) return "";
    return `<figure class="figure ${cls}"><img src="${im.src}" alt="${esc(im.alt)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"><figcaption>${esc(im.alt)} · Foto: ${esc(im.autor)} (<a href="${im.pagina}" target="_blank" rel="noopener">${esc(im.licencia)}</a>)</figcaption></figure>`;
  };
  PET.figure = img;

  /* ======================================================================
     ESTANTES (helpers)
     ====================================================================== */
  const areaCard = (a, i = 0, asLink = true, selected = false) => {
    const inner = `
      <div class="area-top"><span class="area-num">${a.num}</span><span class="area-icon">${icons[a.icon] || icons.book}</span></div>
      <h3>${esc(a.titulo)}</h3>
      <p>${esc(a.desc)}</p>
      <span class="arrow">${asLink ? "Entrar al estante" : "Ver estante"} ${icons.arrow}</span>`;
    return asLink
      ? `<a class="card area-card lift card-link reveal area-${a.color}" style="--d:${i * 0.08}s" href="biblioteca.html#${a.id}">${inner}</a>`
      : `<button class="card area-card lift reveal area-${a.color}" style="--d:${i * 0.06}s" type="button" role="tab" data-area="${a.id}" aria-selected="${selected}">${inner}</button>`;
  };
  PET.areasDeMateria = (mid) => (PET.areas || []).filter((a) => a.materias.includes(mid));

  /* ======================================================================
     BIBLIOTECA
     ====================================================================== */
  PET.pages.biblioteca = function () {
    const sel = $("#area-select");
    const view = $("#area-view");
    let current = PET.areas[0].id;
    const fromHash = () => { const h = location.hash.slice(1); if (PET.areas.some((a) => a.id === h)) current = h; };

    const materiaById = {};
    PET.profesorado.forEach((y) => y.materias.forEach((m) => (materiaById[m.id] = { m, y })));

    function render() {
      const a = PET.areas.find((x) => x.id === current);
      sel.innerHTML = PET.areas.map((x, i) => areaCard(x, i, false, x.id === a.id)).join("");
      view.className = `area-${a.color}`;
      const recs = (a.recursos || []).map(PET.recurso).filter(Boolean);
      const vids = recs.filter((r) => r.tipo === "video");
      const docs = recs.filter((r) => r.tipo !== "video");
      const conceptos = (a.conceptos || []).map(PET.concepto).filter(Boolean);
      view.innerHTML = `
        <div class="area-head reveal">
          <span class="area-num-big" aria-hidden="true">${a.num}</span>
          <div>
            <span class="eyebrow">Estante ${a.num}</span>
            <h2>${esc(a.titulo)}</h2>
            <p class="lead">${esc(a.intro)}</p>
          </div>
        </div>

        <section class="area-block">
          <h3>Materias del profesorado</h3>
          <div class="chip-row">${a.materias.map((id) => materiaById[id]).filter(Boolean).map(({ m, y }) => `<a class="chip" href="profesorado.html#${m.id}">${esc(m.nombre)} <span class="muted">· ${y.anio}°</span></a>`).join("")}</div>
        </section>

        <section class="area-block">
          <h3>Temas clave</h3>
          <div class="grid grid-3">${a.temas.map((t) => `<article class="card mini-card reveal"><h4>${esc(t.t)}</h4><p>${esc(t.d)}</p></article>`).join("")}</div>
        </section>

        ${a.autores ? `<section class="area-block">
          <h3>Autores y autoras de referencia</h3>
          <div class="grid grid-auto">${a.autores.map((au) => `<article class="card mini-card reveal"><h4>${esc(au.n)}</h4><p>${esc(au.idea)}</p></article>`).join("")}</div>
        </section>` : ""}

        ${a.glosario ? `<section class="area-block">
          <h3>Conceptos del estante</h3>
          <div class="grid grid-2">${a.glosario.map((g) => `<article class="card mini-card reveal"><h4>${esc(g.t)}</h4><p>${esc(g.d)}</p></article>`).join("")}</div>
        </section>` : ""}

        ${conceptos.length ? `<section class="area-block">
          <h3>Conceptos relacionados del glosario</h3>
          <div class="chip-row">${conceptos.map((c) => `<a class="chip" href="conceptos.html#${c.id}">${esc(c.termino)}</a>`).join("")}</div>
        </section>` : ""}

        ${a.biblio ? `<section class="area-block">
          <h3>Bibliografía de cátedra</h3>
          <ul class="biblio-list">${a.biblio.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
        </section>` : ""}

        ${docs.length ? `<section class="area-block">
          <h3>Documentos, normativa y sitios</h3>
          <div class="grid grid-3">${docs.map(PET.resCard).join("")}</div>
        </section>` : ""}

        ${vids.length ? `<section class="area-block">
          <h3>Videos</h3>
          <div class="grid grid-3">${vids.map((r) => PET.videoCard(r)).join("")}</div>
        </section>` : ""}

        <section class="area-block">
          <h3>Seguí explorando</h3>
          <div class="grid grid-auto">${a.enlaces.map((l) => `<a class="card lift card-link mini-card reveal" href="${l.h}"><h4>${esc(l.t)}</h4><p>${esc(l.d)}</p><span class="arrow">Ir ${icons.arrow}</span></a>`).join("")}</div>
        </section>

        <div class="callout reveal" style="margin-top:32px">${icons.heart}<p><strong>¿Tenés material para este estante?</strong> Apuntes, PDFs, videos o actividades que te sirvieron. <a href="proyecto.html#sumar">Mirá cómo sumarlo</a> para que les sirva a todos los años del profesorado.</p></div>`;
      PET.stagger(view, 0.03);
      PET.reveal(sel);
      PET.reveal(view);
      if (location.hash.slice(1) !== a.id) history.replaceState(null, "", "#" + a.id);
    }
    sel.addEventListener("click", (e) => {
      const b = e.target.closest("[data-area]");
      if (!b) return;
      current = b.dataset.area;
      render();
      const top = view.getBoundingClientRect().top + scrollY - 80;
      if (scrollY < top - 200 || scrollY > top) scrollTo({ top, behavior: "smooth" });
    });
    addEventListener("hashchange", () => { fromHash(); render(); });
    fromHash();
    render();
  };

  /* ======================================================================
     INICIO
     ====================================================================== */
  PET.pages.home = function () {
    // Estadísticas
    const nGrados = PET.niveles.reduce((a, n) => a + n.grados.length, 0);
    const nContenidos = PET.niveles.reduce((a, n) => a + n.grados.reduce((b, g) => b + Object.values(g.ejes).reduce((c, t) => c + t.reduce((d, x) => d + (x.items || []).length + (x.emergentes || []).length, 0), 0), 0), 0);
    const set = (id, v) => { const el = document.getElementById(id); if (el) { el.dataset.count = v; el.textContent = v; } };
    set("stat-grados", nGrados);
    set("stat-contenidos", nContenidos);
    set("stat-conceptos", PET.conceptos.length);
    set("stat-recursos", PET.recursos.length);

    // Estantes de la biblioteca
    const ar = $("#home-areas");
    if (ar) ar.innerHTML = PET.areas.map((a, i) => areaCard(a, i, true)).join("");

    // Niveles
    const lv = $("#home-niveles");
    if (lv) lv.innerHTML = PET.niveles.map((n, i) => `
      <a class="card level-card lift lv-${n.id} card-link reveal" style="--d:${i * 0.1}s" href="niveles.html#${n.id}">
        <div class="lc-top"><span class="lc-icon">${PET.nivelIcon[n.id]}</span><span class="lc-tag">${n.edades}</span><h3>${n.nombre}</h3></div>
        <div class="lc-body">
          <p class="muted" style="margin:0">${esc(n.resumen)}</p>
          <div class="lc-grades">${n.grados.map((g) => `<span>${esc(g.corto)}</span>`).join("")}</div>
          <span class="arrow">Ver contenidos ${icons.arrow}</span>
        </div>
      </a>`).join("");

    // Profesorado
    const pf = $("#home-profesorado");
    if (pf) pf.innerHTML = PET.profesorado.map((y, i) => `
      <a class="card lift card-link reveal" style="--d:${i * 0.08}s" href="profesorado.html#anio-${y.anio}">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:10px">
          <span class="stat-num" style="font-size:2.6rem;color:var(--brand)">${y.anio}°</span>
          ${y.nuestro ? '<span class="tag tag-emergente">Nuestro año</span>' : ""}
        </div>
        <h3 style="margin-top:8px">${y.titulo}</h3>
        <p class="muted" style="font-size:.92rem">${esc(y.lema)}</p>
        <p class="mono" style="font-size:.76rem;color:var(--muted);margin:0">${y.materias.length} espacios curriculares</p>
      </a>`).join("");

    // Secuencias destacadas
    const sq = $("#home-secuencias");
    if (sq) sq.innerHTML = ["chipa", "telegrafo", "semaforo"].map((id) => PET.secuencias.find((x) => x.id === id)).filter(Boolean).map((x, i) => seqCard(x, i, true)).join("");

    // Videos destacados
    const vd = $("#home-videos");
    if (vd) vd.innerHTML = ["vid-yacyreta-encuentro", "vid-yerba-inym", "vid-biofabrica"].map(PET.recurso).filter(Boolean).map((r) => PET.videoCard(r)).join("");
    PET.stagger(vd, 0.1);

    // Imagen Misiones
    const mi = $("#home-misiones-img");
    if (mi) mi.innerHTML = img("yerba-secado");
  };

  function seqCard(x, i = 0, asLink = false) {
    const tag = `<span class="tag tag-${x.nivel}">${PET.nivelNombre[x.nivel]} · ${esc(x.gradoTxt)}</span>`;
    const inner = `
        <div class="seq-top">${tag}${x.ejes.map(tagEje).join("")}</div>
        <h3>${esc(x.titulo)}</h3>
        <p>${esc(x.resumen)}</p>
        <div class="seq-meta"><span>${icons.clock}${esc(x.duracion)}</span><span>${icons.layers}${x.momentos.length} momentos</span></div>`;
    return asLink
      ? `<a class="card seq-card lift card-link reveal" style="--d:${i * 0.08}s" href="secuencias.html#${x.id}">${inner}</a>`
      : `<button class="card seq-card lift reveal" style="--d:${Math.min(i * 0.05, 0.4)}s" type="button" data-seq="${x.id}" id="${x.id}">${inner}</button>`;
  }

  /* ======================================================================
     CONTENIDOS POR NIVEL
     ====================================================================== */
  PET.pages.niveles = function () {
    const sw = $("#level-switch");
    const intro = $("#level-intro");
    const bar = $("#grade-bar");
    const view = $("#grade-view");
    let state = { nivel: PET.niveles[0].id, grado: PET.niveles[0].grados[0].id, tab: 0, emerg: PET.store.get("emergentes", true) };

    sw.innerHTML = PET.niveles.map((n) => `
      <button class="level-btn lv-${n.id}" role="tab" type="button" data-nivel="${n.id}" aria-selected="false">
        <span class="lb-icon">${PET.nivelIcon[n.id]}</span>
        <span><strong>${n.nombre}</strong><small>${esc(n.edades)}</small></span>
      </button>`).join("");

    function readHash() {
      const h = decodeURIComponent(location.hash.slice(1));
      if (!h) return;
      const [nid, gid] = h.split("-").length > 1 ? [h.split("-")[0], h.slice(h.indexOf("-") + 1)] : [h, null];
      const n = PET.niveles.find((x) => x.id === nid);
      if (!n) return;
      state.nivel = n.id;
      state.grado = (gid && n.grados.find((g) => g.id === gid)) ? gid : n.grados[0].id;
    }

    function renderLevel() {
      const n = PET.niveles.find((x) => x.id === state.nivel);
      $$(".level-btn", sw).forEach((b) => b.setAttribute("aria-selected", String(b.dataset.nivel === n.id)));
      document.body.className = document.body.className.replace(/\blv-\w+/g, "").trim() + ` lv-${n.id}`;
      intro.innerHTML = `
        <details class="acc" style="margin-bottom:18px">
          <summary>${icons.info} Enfoque del ${esc(n.nombre)} y fuentes ${icons.chev}</summary>
          <div class="acc-body">
            <p class="lead" style="font-size:1.02rem">${esc(n.resumen)}</p>
            <ul class="tick-list">${n.enfoque.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
            <h4 style="margin-top:18px">Fuentes</h4>
            <ul class="tick-list">${n.fuentes.map((f) => {
              const r = f.recurso && PET.recurso(f.recurso);
              return `<li>${r ? `<a href="${esc(r.url)}" ${/^https?:/.test(r.url) ? 'target="_blank" rel="noopener"' : ""}>${esc(f.texto)}</a>` : esc(f.texto)} ${f.oficial === false ? '<span class="tag tag-sugerencia">Sugerencia</span>' : '<span class="tag tag-oficial">Oficial</span>'}</li>`;
            }).join("")}</ul>
            ${n.nota ? `<div class="callout" style="margin-top:16px">${icons.star}<p>${esc(n.nota)}</p></div>` : ""}
          </div>
        </details>`;
      bar.innerHTML = `<span class="label">${n.id === "inicial" ? "Sala" : n.id === "primaria" ? "Grado" : "Año"}</span>` + n.grados.map((g) => `
        <button class="grade-pill" type="button" data-grado="${g.id}" aria-selected="${g.id === state.grado}">${esc(g.corto)}${g.ciclo && n.id !== "inicial" ? `<small>${esc(g.ciclo)}</small>` : ""}</button>`).join("");
      renderGrade();
    }

    function renderGrade() {
      const n = PET.niveles.find((x) => x.id === state.nivel);
      const g = n.grados.find((x) => x.id === state.grado) || n.grados[0];
      $$(".grade-pill", bar).forEach((b) => b.setAttribute("aria-selected", String(b.dataset.grado === g.id)));
      const seqs = PET.secuencias.filter((s) => s.grado === g.id);

      const cols = ejeOrden.map((e) => {
        const temas = g.ejes[e] || [];
        return `
          <section class="eje-col eje-${e} reveal">
            <header>${PET.ejeIcon[e]}<div><small>Eje ${ejeOrden.indexOf(e) + 1}</small><h3>${PET.ejes[e].nombre}</h3></div></header>
            <div class="eje-body">
              ${temas.map((t) => `
                <div class="tema">
                  <h4>${esc(t.tema)}</h4>
                  ${(t.items || []).length ? `<ul class="tick-list" style="--eje:var(--eje-${e})">${t.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>` : ""}
                  ${(t.emergentes || []).length ? `<div class="emerg"><strong>${icons.sparkle} Contenidos emergentes</strong><ul>${t.emergentes.map((i) => `<li>${esc(i)}</li>`).join("")}</ul></div>` : ""}
                </div>`).join("") || '<p class="muted">Sin contenidos específicos en este eje.</p>'}
            </div>
          </section>`;
      }).join("");

      const conceptos = (g.conceptos || []).map(PET.concepto).filter(Boolean);
      const recursos = (g.recursos || []).map(PET.recurso).filter(Boolean);
      const num = n.id === "inicial" ? g.corto.replace("Sala ", "") : g.corto.replace(/\s*año/, "");

      view.innerHTML = `
        <div class="grade-head reveal">
          <div style="position:relative;z-index:1">
            <span class="eyebrow">${esc(n.nombre)}${g.ciclo && g.ciclo !== n.nombre ? " · " + esc(g.ciclo) : ""}</span>
            <h2>${esc(g.nombre)}</h2>
            <p class="focus">${esc(g.foco)}</p>
            <div class="meta"><span class="tag tag-oficial">Fuente: ${esc(g.fuente)}</span>${g.conEmergentes ? '<span class="tag tag-emergente">Incluye contenidos emergentes del DC Misiones</span>' : ""}</div>
          </div>
          <div class="big-num" aria-hidden="true">${esc(num.length <= 3 ? num : "")}</div>
        </div>
        <div class="tabs content-tabs" role="tablist" aria-label="Secciones del grado">
          <button class="tab" role="tab" id="t-cont" aria-controls="p-cont" aria-selected="${state.tab === 0}">Contenidos por eje</button>
          <button class="tab" role="tab" id="t-conc" aria-controls="p-conc" aria-selected="${state.tab === 1}">Conceptos clave (${conceptos.length})</button>
          <button class="tab" role="tab" id="t-idea" aria-controls="p-idea" aria-selected="${state.tab === 2}">Ideas para el aula (${(g.ideas || []).length + seqs.length})</button>
          <button class="tab" role="tab" id="t-rec" aria-controls="p-rec" aria-selected="${state.tab === 3}">Recursos (${recursos.length})</button>
        </div>
        <div class="tab-panel" id="p-cont" role="tabpanel" aria-labelledby="t-cont">
          ${g.conEmergentes ? `<div class="toolbar"><label class="compare-toggle"><input type="checkbox" class="visually-hidden" id="toggle-emerg" ${state.emerg ? "checked" : ""}><span class="switch"></span> Mostrar contenidos emergentes (DC Misiones 2022)</label></div>` : ""}
          <div class="eje-columns ${state.emerg ? "" : "hide-emergentes"}" id="eje-columns">${cols}</div>
          <div class="source-note">${icons.info}<span>Los contenidos están <strong>sintetizados y parafraseados</strong> para estudiar y planificar. Para citar textualmente, usá el documento oficial (ver «Recursos» o las fuentes del nivel). ${g.oficial === false ? "" : ""}</span></div>
        </div>
        <div class="tab-panel" id="p-conc" role="tabpanel" aria-labelledby="t-conc" hidden>
          <div class="grid grid-auto">${conceptos.map((c) => `
            <a class="card lift card-link reveal" href="conceptos.html#${c.id}">
              <div style="display:flex;gap:8px;align-items:center;margin-bottom:8px">${tagEje(c.eje)}</div>
              <h3 style="font-size:1.08rem">${esc(c.termino)}</h3>
              <p class="muted" style="font-size:.9rem;margin:0">${esc(c.def.length > 170 ? c.def.slice(0, 170) + "…" : c.def)}</p>
              <span class="arrow">Ver en el glosario ${icons.arrow}</span>
            </a>`).join("")}</div>
        </div>
        <div class="tab-panel" id="p-idea" role="tabpanel" aria-labelledby="t-idea" hidden>
          ${seqs.length ? `<h3 style="margin-bottom:12px">Secuencias completas para este ${n.id === "secundaria" ? "año" : n.id === "inicial" ? "nivel" : "grado"}</h3><div class="grid grid-auto" style="margin-bottom:26px">${seqs.map((x, i) => seqCard(x, i, true)).join("")}</div>` : ""}
          <h3 style="margin-bottom:12px">Ideas rápidas <span class="tag tag-sugerencia">Sugerencias de la biblioteca</span></h3>
          <div class="grid grid-2">${(g.ideas || []).map((it, i) => `
            <article class="card idea-card reveal" style="--lv:var(--lv-${n.id})">
              <span class="idea-n">IDEA ${String(i + 1).padStart(2, "0")}</span>
              <h3 style="font-size:1.08rem;margin-top:4px">${esc(it.t)}</h3>
              <p class="muted" style="margin:0;font-size:.94rem">${esc(it.d)}</p>
            </article>`).join("")}</div>
          <div class="callout ok" style="margin-top:20px">${icons.pencil}<p>¿Querés armar una clase con estos contenidos? Usá el <a href="planificador.html#${n.id}-${g.id}">Planificador</a>: elegís los contenidos y te arma el esqueleto de la planificación.</p></div>
        </div>
        <div class="tab-panel" id="p-rec" role="tabpanel" aria-labelledby="t-rec" hidden>
          <div class="grid grid-3">${recursos.map(PET.resCard).join("") || '<p class="muted">Todavía no hay recursos cargados para este grado. ¡Sumá el tuyo!</p>'}</div>
          <p style="margin-top:18px"><a class="btn btn-ghost btn-sm" href="recursos.html">Ver todos los recursos ${icons.arrow}</a></p>
        </div>`;

      PET.tabs($(".content-tabs", view), (t) => { state.tab = ["t-cont", "t-conc", "t-idea", "t-rec"].indexOf(t.id); PET.reveal(view); });
      const tg = $("#toggle-emerg", view);
      tg && tg.addEventListener("change", () => { state.emerg = tg.checked; PET.store.set("emergentes", state.emerg); $("#eje-columns").classList.toggle("hide-emergentes", !state.emerg); });
      PET.stagger(view, 0.05);
      PET.reveal(view);
      const newHash = `#${n.id}-${g.id}`;
      if (location.hash !== newHash) history.replaceState(null, "", newHash);
    }

    sw.addEventListener("click", (e) => {
      const b = e.target.closest(".level-btn");
      if (!b) return;
      state.nivel = b.dataset.nivel;
      state.grado = PET.niveles.find((x) => x.id === state.nivel).grados[0].id;
      state.tab = 0;
      renderLevel();
    });
    bar.addEventListener("click", (e) => {
      const b = e.target.closest(".grade-pill");
      if (!b) return;
      state.grado = b.dataset.grado;
      renderGrade();
      const top = bar.getBoundingClientRect().top + scrollY - 90;
      if (scrollY > top) scrollTo({ top, behavior: "smooth" });
    });
    addEventListener("hashchange", () => { readHash(); renderLevel(); });
    readHash();
    renderLevel();
  };

  /* ======================================================================
     PROFESORADO
     ====================================================================== */
  PET.pages.profesorado = function () {
    const rail = $("#year-rail");
    const view = $("#year-view");
    let anio = 3;

    rail.innerHTML = PET.profesorado.map((y) => `
      <button class="year-btn" type="button" role="tab" data-anio="${y.anio}" aria-selected="${y.anio === anio}">
        <span class="yb-circle">${y.anio}°</span><span>${y.titulo}</span>${y.nuestro ? '<span class="yb-flag">NUESTRO AÑO</span>' : ""}
      </button>`).join("");

    function render() {
      const y = PET.profesorado.find((x) => x.anio === anio);
      $$(".year-btn", rail).forEach((b) => b.setAttribute("aria-selected", String(+b.dataset.anio === anio)));
      const byCampo = {};
      y.materias.forEach((m) => (byCampo[m.campo] = byCampo[m.campo] || []).push(m));
      view.innerHTML = `
        <div class="section-head reveal" style="margin-bottom:24px">
          <div><span class="eyebrow">${y.titulo}</span><h2 style="margin:0">${esc(y.lema)}</h2></div>
          <p class="mono" style="font-size:.84rem">${y.materias.length} espacios curriculares</p>
        </div>
        ${Object.keys(PET.campos).filter((c) => byCampo[c]).map((c) => `
          <div class="campo-block ${PET.campos[c].clase}">
            <div class="campo-title reveal"><span class="dot"></span><div><h3>${PET.campos[c].nombre}</h3><small>${esc(PET.campos[c].desc)}</small></div></div>
            <div class="grid grid-auto">${byCampo[c].map((m) => `
              <button class="card materia-card lift reveal ${PET.campos[c].clase}" type="button" data-materia="${m.id}" id="${m.id}">
                <h4>${esc(m.nombre)}</h4>
                <p class="m-sum">${esc(m.sum)}</p>
                <span class="arrow">¿Cómo me ayuda a enseñar? ${icons.arrow}</span>
              </button>`).join("")}</div>
          </div>`).join("")}`;
      PET.stagger(view, 0.04);
      PET.reveal(view);
    }

    function openMateria(id) {
      let found = null;
      PET.profesorado.forEach((y) => y.materias.forEach((m) => { if (m.id === id) found = { y, m }; }));
      if (!found) return;
      const { y, m } = found;
      const c = PET.campos[m.campo];
      $("#materia-content").innerHTML = `
        <span class="eyebrow">${y.titulo} · ${c.nombre}</span>
        <h2>${esc(m.nombre)}</h2>
        <p class="lead">${esc(m.sum)}</p>
        <h3 style="margin-top:22px">Cómo te ayuda a enseñar los contenidos curriculares</h3>
        <ul class="tick-list">${m.aporta.map((a) => `<li>${esc(a)}</li>`).join("")}</ul>
        ${PET.areasDeMateria(m.id).length ? `<h3 style="margin-top:22px">En la biblioteca</h3><div class="chip-row">${PET.areasDeMateria(m.id).map((a) => `<a class="chip" href="biblioteca.html#${a.id}">Estante ${a.num}: ${esc(a.titulo)} ${icons.arrow}</a>`).join("")}</div>` : ""}
        ${m.conecta.length ? `<h3 style="margin-top:22px">Conectá con la biblioteca</h3><div class="chip-row">${m.conecta.map((l) => `<a class="chip" href="${l.h}">${esc(l.t)} ${icons.arrow}</a>`).join("")}</div>` : ""}
        <div class="callout info" style="margin-top:24px">${icons.info}<p>Descripción orientativa. Si tenés el programa de la cátedra, pasalo y completamos esta materia con sus unidades y bibliografía.</p></div>`;
      PET.openModal("materia-modal");
    }

    rail.addEventListener("click", (e) => { const b = e.target.closest(".year-btn"); if (!b) return; anio = +b.dataset.anio; render(); history.replaceState(null, "", "#anio-" + anio); });
    view.addEventListener("click", (e) => { const b = e.target.closest("[data-materia]"); if (b) openMateria(b.dataset.materia); });

    const fromHash = () => {
      const h = location.hash.slice(1);
      if (!h) return;
      if (h.startsWith("anio-")) { anio = +h.slice(5) || 3; render(); return; }
      const y = PET.profesorado.find((x) => x.materias.some((m) => m.id === h));
      if (y) { anio = y.anio; render(); setTimeout(() => openMateria(h), 150); }
    };
    render();
    fromHash();
    addEventListener("hashchange", fromHash);
  };

  /* ======================================================================
     CONCEPTOS (glosario + diagramas interactivos)
     ====================================================================== */
  PET.pages.conceptos = function () {
    const grid = $("#terms");
    const input = $("#term-search");
    const chips = $("#eje-filter");
    let eje = "todos";

    chips.innerHTML = [["todos", "Todos"], ["procesos", "Procesos"], ["medios", "Medios técnicos"], ["reflexion", "Reflexión sociocultural"], ["general", "Generales"]]
      .map(([k, l]) => `<button class="chip" type="button" data-eje="${k}" aria-pressed="${k === eje}">${k !== "todos" ? '<span class="dot" style="color:var(--eje-' + k + ', var(--muted))"></span>' : ""}${l}</button>`).join("");

    const sorted = [...PET.conceptos].sort((a, b) => a.termino.localeCompare(b.termino, "es"));
    function render() {
      const q = PET.norm(input.value.trim());
      const list = sorted.filter((c) => (eje === "todos" || c.eje === eje) && (!q || PET.norm(c.termino + " " + c.def + " " + c.ejemplo).includes(q)));
      $("#term-count").textContent = `${list.length} de ${sorted.length} conceptos`;
      grid.innerHTML = list.map((c) => `
        <article class="card term-card reveal in eje-${c.eje}" id="${c.id}">
          <h3>${esc(c.termino)} ${tagEje(c.eje)}</h3>
          <p style="margin-bottom:0">${esc(c.def)}</p>
          <div class="ex"><b>Ejemplo</b>${esc(c.ejemplo)}</div>
          <div class="chip-row" style="margin-top:12px">${c.niveles.map((n) => `<span class="tag tag-${n}">${PET.nivelNombre[n]}</span>`).join("")}</div>
        </article>`).join("") || `<div class="empty-state">No hay conceptos con «${esc(input.value)}».</div>`;
    }
    input.addEventListener("input", render);
    chips.addEventListener("click", (e) => {
      const b = e.target.closest("[data-eje]"); if (!b) return;
      eje = b.dataset.eje;
      $$("[data-eje]", chips).forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
      render();
    });
    render();
    // Ir al concepto del hash (después de renderizar)
    const goHash = () => { const h = location.hash.slice(1); const el = h && document.getElementById(h); if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "center" }), 120); };
    goHash();
    addEventListener("hashchange", goHash);

    systemDiagram();
    loopSim();
  };

  // ---- Diagrama de sistema con flujos M-E-I ----
  function systemDiagram() {
    const box = $("#sys-diagram");
    if (!box) return;
    const ejemplos = {
      licuadora: { t: "Licuadora", m: ["Fruta, leche", "Licuado"], e: ["Energía eléctrica", "Calor, ruido"], i: ["Selección de velocidad", "Luz de encendido"], p: "Triturar y mezclar" },
      secadero: { t: "Secadero de yerba", m: ["Hoja verde", "Yerba canchada"], e: ["Leña o gas", "Calor perdido, humo"], i: ["Temperatura deseada", "Registro de humedad"], p: "Zapecar, secar, canchar" },
      represa: { t: "Central hidroeléctrica", m: ["Agua del río", "Agua turbinada"], e: ["Energía del agua", "Energía eléctrica"], i: ["Demanda del sistema", "Datos de generación"], p: "Turbinar y generar" },
      celular: { t: "Celular", m: ["—", "—"], e: ["Batería", "Luz, sonido, calor"], i: ["Voz, toques, datos", "Mensajes, imágenes"], p: "Procesar y comunicar" }
    };
    const ctrl = $("#sys-controls");
    ctrl.innerHTML = Object.entries(ejemplos).map(([k, v], i) => `<button class="chip" type="button" data-sys="${k}" aria-pressed="${i === 0}">${v.t}</button>`).join("");
    const draw = (k) => {
      const d = ejemplos[k];
      const row = (y, cls, label, a, b) => `
        <text x="20" y="${y - 12}" class="d-label">${label}</text>
        <rect x="20" y="${y - 2}" width="190" height="40" rx="10" class="d-box"/><text x="115" y="${y + 23}" text-anchor="middle" font-size="14">${esc(a)}</text>
        <path d="M212 ${y + 18} H 318" class="d-arrow flow-anim ${cls}" stroke-width="3"/>
        <path d="M502 ${y + 18} H 608" class="d-arrow flow-anim ${cls}" stroke-width="3"/>
        <rect x="610" y="${y - 2}" width="190" height="40" rx="10" class="d-box"/><text x="705" y="${y + 23}" text-anchor="middle" font-size="14">${esc(b)}</text>`;
      box.innerHTML = `
        <svg viewBox="0 0 820 300" role="img" aria-label="Diagrama de sistema de ${esc(d.t)}">
          <defs><marker id="ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0 0 10 5 0 10z" fill="var(--ink-2)"/></marker></defs>
          <text x="115" y="24" text-anchor="middle" class="d-title">ENTRADAS</text>
          <text x="705" y="24" text-anchor="middle" class="d-title">SALIDAS</text>
          <rect x="320" y="50" width="180" height="230" rx="18" class="d-proc"/>
          <text x="410" y="150" text-anchor="middle" class="d-title">${esc(d.t)}</text>
          <text x="410" y="176" text-anchor="middle" font-size="13" class="d-label">${esc(d.p)}</text>
          ${row(70, "mei-m", "MATERIA", d.m[0], d.m[1])}
          ${row(150, "mei-e", "ENERGÍA", d.e[0], d.e[1])}
          ${row(230, "mei-i", "INFORMACIÓN", d.i[0], d.i[1])}
        </svg>`;
    };
    ctrl.addEventListener("click", (e) => {
      const b = e.target.closest("[data-sys]"); if (!b) return;
      $$("[data-sys]", ctrl).forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
      draw(b.dataset.sys);
    });
    draw("licuadora");
  }

  // ---- Simulador de control: tanque con lazo abierto / cerrado ----
  function loopSim() {
    const water = $("#tank-water");
    if (!water) return;
    const refLine = $("#tank-ref");
    const out = { level: $("#sim-level"), valve: $("#sim-valve"), mode: $("#sim-mode"), msg: $("#sim-msg") };
    const consumo = $("#sim-consumo");
    let mode = "abierto";
    let level = 30, t = 0, valveOpen = true;
    const REF = 70;
    refLine.style.bottom = REF + "%";
    $$("[data-mode]").forEach((b) => b.addEventListener("click", () => {
      mode = b.dataset.mode; t = 0;
      $$("[data-mode]").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
    }));
    setInterval(() => {
      const c = +consumo.value; // 0..10
      t += 1;
      if (mode === "abierto") {
        // Programa por tiempo: 6 s abierta, 4 s cerrada, sin mirar el nivel
        valveOpen = (t % 50) < 30;
      } else {
        // Sensor: compara con la referencia y corrige
        valveOpen = level < REF;
      }
      level += (valveOpen ? 1.1 : 0) - c * 0.12;
      level = Math.max(0, Math.min(100, level));
      water.style.height = level + "%";
      out.level.textContent = level.toFixed(0) + " %";
      out.valve.textContent = valveOpen ? "ABIERTA" : "CERRADA";
      out.valve.style.color = valveOpen ? "var(--sky-ink)" : "var(--gold-ink)";
      out.mode.textContent = mode === "abierto" ? "Por tiempo (lazo abierto)" : "Con sensor (lazo cerrado)";
      out.msg.textContent = level >= 99 ? "¡Rebalsa! El programa no mide el nivel." : level <= 1 ? "¡Tanque vacío!" : Math.abs(level - REF) < 6 ? "Nivel cerca de la referencia" : level > REF ? "Por encima de la referencia" : "Por debajo de la referencia";
    }, 200);
  }

  /* ======================================================================
     SECUENCIAS
     ====================================================================== */
  PET.pages.secuencias = function () {
    const grid = $("#seq-grid");
    const chips = $("#seq-filter");
    let nivel = "todos";
    chips.innerHTML = [["todos", "Todas"], ["inicial", "Inicial"], ["primaria", "Primaria"], ["secundaria", "Secundaria"]]
      .map(([k, l]) => `<button class="chip" type="button" data-nivel="${k}" aria-pressed="${k === nivel}">${l}</button>`).join("");
    const render = () => {
      grid.innerHTML = PET.secuencias.filter((x) => nivel === "todos" || x.nivel === nivel).map((x, i) => seqCard(x, i)).join("");
      PET.reveal(grid);
    };
    chips.addEventListener("click", (e) => {
      const b = e.target.closest("[data-nivel]"); if (!b) return;
      nivel = b.dataset.nivel;
      $$("[data-nivel]", chips).forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
      render();
    });
    grid.addEventListener("click", (e) => { const b = e.target.closest("[data-seq]"); if (b) openSeq(b.dataset.seq); });
    render();

    function openSeq(id) {
      const x = PET.secuencias.find((s) => s.id === id);
      if (!x) return;
      const g = PET.findGrado(x.grado);
      const recs = (x.recursos || []).map(PET.recurso).filter(Boolean);
      $("#seq-content").innerHTML = `
        <article class="seq-detail">
          <div class="chip-row"><span class="tag tag-${x.nivel}">${PET.nivelNombre[x.nivel]} · ${esc(x.gradoTxt)}</span>${x.ejes.map(tagEje).join("")}<span class="tag">${esc(x.duracion)}</span></div>
          <h2>${esc(x.titulo)}</h2>
          <p class="lead">${esc(x.resumen)}</p>
          <div class="no-print chip-row" style="margin-top:10px">
            <button class="btn btn-primary btn-sm" type="button" data-print>${icons.print} Imprimir / guardar PDF</button>
            ${g ? `<a class="btn btn-ghost btn-sm" href="niveles.html#${g.nivel.id}-${g.grado.id}">Ver contenidos de ${esc(g.grado.nombre)}</a>` : ""}
            ${g ? `<a class="btn btn-ghost btn-sm" href="planificador.html#${g.nivel.id}-${g.grado.id}">Planificar con esta base</a>` : ""}
          </div>
          <section><h3>Propósitos</h3><ul class="tick-list">${x.propositos.map((p) => `<li>${esc(p)}</li>`).join("")}</ul></section>
          <section><h3>Contenidos</h3><ul class="tick-list">${x.contenidos.map((p) => `<li>${esc(p)}</li>`).join("")}</ul></section>
          <section><h3>Materiales</h3><ul class="tick-list">${x.materiales.map((p) => `<li>${esc(p)}</li>`).join("")}</ul></section>
          <section><h3>Momentos de la secuencia</h3>
            ${x.momentos.map((m) => `<div class="moment"><h4>${esc(m.nombre)} <span>${esc(m.tiempo)}</span></h4><ol>${m.actividades.map((a) => `<li>${esc(a)}</li>`).join("")}</ol></div>`).join("")}
          </section>
          <section><h3>Criterios de evaluación</h3><ul class="tick-list">${x.evaluacion.map((p) => `<li>${esc(p)}</li>`).join("")}</ul></section>
          ${x.variantes && x.variantes.length ? `<section><h3>Variantes y adaptaciones</h3><ul class="tick-list">${x.variantes.map((p) => `<li>${esc(p)}</li>`).join("")}</ul></section>` : ""}
          ${recs.length ? `<section class="no-print"><h3>Recursos</h3><div class="grid grid-2">${recs.map((r) => r.tipo === "video" ? PET.videoCard(r, { reveal: false }) : PET.resCard(r).replace("reveal", "")).join("")}</div></section>` : ""}
          <p class="muted" style="font-size:.84rem;margin-top:24px">Propuesta de la Biblioteca Virtual basada en los NAP, el Diseño Curricular de Misiones y los Cuadernos para el aula. Adaptala a tu grupo y tu escuela.</p>
        </article>`;
      PET.openModal("seq-modal");
      history.replaceState(null, "", "#" + id);
    }
    document.addEventListener("click", (e) => {
      if (e.target.closest("[data-print]")) { document.body.classList.add("printing-modal"); window.print(); setTimeout(() => document.body.classList.remove("printing-modal"), 500); }
    });
    const fromHash = () => { const h = location.hash.slice(1); if (h && PET.secuencias.some((s) => s.id === h)) openSeq(h); };
    fromHash();
    addEventListener("hashchange", fromHash);
  };

  /* ======================================================================
     MISIONES
     ====================================================================== */
  PET.pages.misiones = function () {
    const wrap = $("#casos");
    const idx = $("#casos-index");
    idx.innerHTML = PET.casos.map((c) => `<a class="chip" href="#${c.id}">${esc(c.titulo)}</a>`).join("");
    wrap.innerHTML = PET.casos.map((c, i) => {
      const vids = (c.videos || []).map(PET.recurso).filter(Boolean);
      const sitio = c.sitio && PET.recurso(c.sitio);
      const media = c.img ? img(c.img, i % 2 ? "reveal reveal-left" : "reveal reveal-right") : `
        <div class="diagram reveal"><h3 style="margin-bottom:12px">Los colores de la biotecnología</h3>
          <div class="bio-colors">${PET.coloresBio.map((b) => `<div class="bio-color" style="background:${b.hex}"><strong>${b.color}</strong><span>${esc(b.campo)}<br><em style="opacity:.85">${esc(b.ej)}</em></span></div>`).join("")}</div>
        </div>`;
      return `
        <article class="section-tight" id="${c.id}"${i ? ' style="border-top:1px solid var(--line)"' : ""}>
          <div class="feature-split" style="${i % 2 ? "direction:rtl" : ""}">
            <div style="direction:ltr" class="reveal">
              <span class="eyebrow" style="color:${c.color}">Caso ${String(i + 1).padStart(2, "0")}</span>
              <h2>${esc(c.titulo)}</h2>
              <p class="lead">${esc(c.bajada)}</p>
              ${c.texto.map((t) => `<p>${esc(t)}</p>`).join("")}
            </div>
            <div style="direction:ltr">${media}</div>
          </div>
          <div class="grid grid-3" style="margin-top:26px">
            <div class="card reveal">
              <h3 style="font-size:1.05rem">El proceso paso a paso</h3>
              <ol style="margin:0;padding-left:1.2em;color:var(--ink-2);display:grid;gap:6px;font-size:.93rem">${c.proceso.map((p) => `<li>${esc(p)}</li>`).join("")}</ol>
            </div>
            <div class="card reveal">
              <h3 style="font-size:1.05rem">Dónde aparece en el currículum</h3>
              <ul class="tick-list" style="font-size:.93rem">${c.contenidos.map((x) => { const f = PET.findGrado(x.g); return `<li>${f ? `<a href="niveles.html#${f.nivel.id}-${f.grado.id}">${esc(x.t)}</a>` : esc(x.t)}</li>`; }).join("")}</ul>
              ${c.secuencia ? `<a class="btn btn-ghost btn-sm" style="margin-top:14px" href="secuencias.html#${c.secuencia}">Ver secuencia didáctica ${icons.arrow}</a>` : ""}
            </div>
            <div class="card reveal">
              <h3 style="font-size:1.05rem">Preguntas para el aula</h3>
              <ul class="tick-list" style="font-size:.93rem;--eje:var(--gold)">${c.preguntas.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
              ${sitio ? `<a class="res-link" style="display:inline-flex;margin-top:14px;gap:6px;font-weight:600;text-decoration:none" href="${sitio.url}" target="_blank" rel="noopener">${esc(sitio.titulo)} ${icons.ext}</a>` : ""}
            </div>
          </div>
          ${c.img2 ? `<div class="grid grid-2" style="margin-top:22px">${img(c.img2, "reveal")}${vids[0] ? PET.videoCard(vids[0]) : ""}</div>${vids.length > 1 ? `<div class="grid grid-2" style="margin-top:22px">${vids.slice(1).map((v) => PET.videoCard(v)).join("")}</div>` : ""}`
            : vids.length ? `<div class="grid grid-2" style="margin-top:22px">${vids.map((v) => PET.videoCard(v)).join("")}</div>` : ""}
        </article>`;
    }).join("");
    PET.reveal(wrap);
    const h = location.hash.slice(1);
    if (h) setTimeout(() => { const el = document.getElementById(h); el && el.scrollIntoView({ behavior: "smooth" }); }, 200);
  };

  /* ======================================================================
     RECURSOS
     ====================================================================== */
  PET.pages.recursos = function () {
    const grid = $("#res-grid");
    const q = $("#res-search");
    const tipoChips = $("#res-tipo");
    const nivelSel = $("#res-nivel");
    const ejeSel = $("#res-eje");
    const areaSel = $("#res-area");
    const enEstante = (r, aid) => {
      const listed = PET.areas.filter((a) => a.recursos.includes(r.id)).map((a) => a.id);
      if (listed.includes(aid)) return true;
      return aid === "tecnologica" && !listed.length && (r.ejes || []).length > 0;
    };
    if (areaSel) areaSel.innerHTML = `<option value="">Todos los estantes</option>` + PET.areas.map((a) => `<option value="${a.id}">${a.num}. ${esc(a.titulo)}</option>`).join("");
    let tipo = "todos";
    tipoChips.innerHTML = [["todos", "Todos", ""], ["documento", "Documentos", icons.doc], ["video", "Videos", icons.video], ["herramienta", "Herramientas", icons.tool], ["sitio", "Sitios", icons.globe]]
      .map(([k, l]) => `<button class="chip" type="button" data-tipo="${k}" aria-pressed="${k === tipo}">${l} <span class="muted" style="font-weight:500">${k === "todos" ? PET.recursos.length : PET.recursos.filter((r) => r.tipo === k).length}</span></button>`).join("");

    const render = () => {
      const nq = PET.norm(q.value.trim());
      const nv = nivelSel.value, ej = ejeSel.value, ar = areaSel ? areaSel.value : "";
      const list = PET.recursos.filter((r) => (tipo === "todos" || r.tipo === tipo) && (!nv || (r.niveles || []).includes(nv)) && (!ej || (r.ejes || []).includes(ej)) && (!ar || enEstante(r, ar)) && (!nq || PET.norm(r.titulo + " " + r.desc + " " + r.fuente).includes(nq)))
        .sort((a, b) => (b.destacado ? 1 : 0) - (a.destacado ? 1 : 0));
      $("#res-count").textContent = `${list.length} recurso${list.length === 1 ? "" : "s"}`;
      grid.innerHTML = list.map((r) => PET.resCard(r).replace("<article ", `<article id="${r.id}" `)).join("") || '<div class="empty-state">No hay recursos con esos filtros.</div>';
      PET.reveal(grid);
    };
    tipoChips.addEventListener("click", (e) => {
      const b = e.target.closest("[data-tipo]"); if (!b) return;
      tipo = b.dataset.tipo;
      $$("[data-tipo]", tipoChips).forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
      render();
    });
    [q, nivelSel, ejeSel, areaSel].filter(Boolean).forEach((el) => el.addEventListener("input", render));
    const fromHash = () => {
      const h = location.hash.slice(1);
      if (["documento", "video", "herramienta", "sitio"].includes(h)) { const b = $(`[data-tipo="${h}"]`, tipoChips); b && b.click(); return; }
      render();
      const el = h && document.getElementById(h);
      if (el) setTimeout(() => { el.scrollIntoView({ behavior: "smooth", block: "center" }); el.classList.add("pulse"); setTimeout(() => el.classList.remove("pulse"), 3000); }, 150);
    };
    fromHash();
    addEventListener("hashchange", fromHash);
  };

  /* ======================================================================
     PLANIFICADOR
     ====================================================================== */
  PET.pages.planificador = function () {
    const f = {
      nivel: $("#pl-nivel"), grado: $("#pl-grado"), escuela: $("#pl-escuela"), docente: $("#pl-docente"), curso: $("#pl-curso"),
      periodo: $("#pl-periodo"), clases: $("#pl-clases"), titulo: $("#pl-titulo"), conts: $("#pl-contenidos"), ideas: $("#pl-ideas")
    };
    const sheet = $("#pl-sheet");
    const saved = PET.store.get("plan", {});

    f.nivel.innerHTML = PET.niveles.map((n) => `<option value="${n.id}">${n.nombre}</option>`).join("");
    const fillGrados = () => {
      const n = PET.niveles.find((x) => x.id === f.nivel.value);
      f.grado.innerHTML = n.grados.map((g) => `<option value="${g.id}">${esc(g.nombre)}</option>`).join("");
    };
    const fillChecks = (keep = []) => {
      const { grado: g } = PET.findGrado(f.grado.value);
      let k = 0;
      f.conts.innerHTML = ejeOrden.map((e) => {
        const items = [];
        (g.ejes[e] || []).forEach((t) => { (t.items || []).forEach((i) => items.push({ i, em: false })); (t.emergentes || []).forEach((i) => items.push({ i, em: true })); });
        if (!items.length) return "";
        return `<div class="check-group-title">${PET.ejes[e].corto}</div>` + items.map((it) => {
          const key = `${e}|${k++}`;
          return `<label class="check-item"><input type="checkbox" data-eje="${e}" data-key="${key}" value="${esc(it.i)}" ${keep.includes(it.i) ? "checked" : ""}><span>${it.em ? '<span class="tag tag-emergente" style="margin-right:4px">Emergente</span>' : ""}${esc(it.i)}</span></label>`;
        }).join("");
      }).join("");
      const seqs = PET.secuencias.filter((s) => s.grado === g.id);
      f.ideas.innerHTML = (g.ideas || []).map((it) => `<label class="check-item"><input type="checkbox" value="${esc(it.t)}" data-desc="${esc(it.d)}"><span><strong>${esc(it.t)}</strong> — ${esc(it.d)}</span></label>`).join("")
        + seqs.map((s) => `<label class="check-item"><input type="checkbox" value="${esc(s.titulo)}" data-seq="${s.id}"><span><span class="tag tag-oficial" style="margin-right:4px">Secuencia</span><strong>${esc(s.titulo)}</strong></span></label>`).join("");
    };

    function generate() {
      const { nivel: n, grado: g } = PET.findGrado(f.grado.value);
      const checked = $$("input:checked", f.conts);
      const byEje = {};
      checked.forEach((c) => (byEje[c.dataset.eje] = byEje[c.dataset.eje] || []).push(c.value));
      const ejesSel = Object.keys(byEje);
      const ideas = $$("input:checked", f.ideas);
      const nClases = Math.max(1, +f.clases.value || 4);
      const titulo = f.titulo.value.trim() || g.foco;
      const destinatarios = n.id === "inicial" ? "los niños y niñas" : n.id === "primaria" ? "los alumnos y alumnas" : "los y las estudiantes";

      const propositos = [];
      if (ejesSel.includes("procesos") || !ejesSel.length) propositos.push(`Promover situaciones en las que ${destinatarios} analicen procesos tecnológicos, identificando insumos, operaciones, productos y el rol de las personas.`);
      if (ejesSel.includes("medios") || !ejesSel.length) propositos.push(`Ofrecer problemas de diseño y análisis de medios técnicos que permitan a ${destinatarios} anticipar, construir, ensayar y evaluar soluciones.`);
      if (ejesSel.includes("reflexion") || !ejesSel.length) propositos.push(`Propiciar la reflexión sobre los cambios, continuidades y consecuencias sociales y ambientales de las tecnologías, con ejemplos de Misiones.`);
      propositos.push("Favorecer el trabajo colaborativo y la comunicación de ideas técnicas mediante textos, dibujos y diagramas.");

      const objetivos = [];
      if (byEje.procesos) objetivos.push("Identificar y representar las operaciones de un proceso tecnológico y su secuencia.");
      if (byEje.medios) objetivos.push("Reconocer las partes y funciones de los medios técnicos analizados y resolver un problema de diseño.");
      if (byEje.reflexion) objetivos.push("Comparar tecnologías de distintas épocas o contextos y argumentar sobre sus efectos.");
      if (!objetivos.length) objetivos.push("Completar a partir de los contenidos seleccionados.");

      const acts = ideas.map((x) => x.dataset.seq ? { t: x.value, d: "Ver la secuencia completa en la Biblioteca Virtual (secuencias.html#" + x.dataset.seq + ")." } : { t: x.value, d: x.dataset.desc });
      const reparto = (i) => i === 0 ? "Inicio" : i === acts.length - 1 && acts.length > 1 ? "Cierre" : "Desarrollo";

      const fuentes = n.fuentes.map((ff) => ff.texto).filter((t) => !/propuesta|sugerencia/i.test(t));
      const recursos = (g.recursos || []).map(PET.recurso).filter(Boolean).map((r) => `${r.titulo} (${r.fuente})`);

      sheet.innerHTML = `
        <h2 contenteditable="true">${esc(titulo)}</h2>
        <p class="muted" style="margin-bottom:6px">Planificación de Educación Tecnológica · ${esc(n.nombre)} · ${esc(g.nombre)}</p>
        <table>
          <tr><th>Institución</th><td contenteditable="true">${esc(f.escuela.value) || "—"}</td></tr>
          <tr><th>Docente / practicante</th><td contenteditable="true">${esc(f.docente.value) || "—"}</td></tr>
          <tr><th>Curso / sección</th><td contenteditable="true">${esc(f.curso.value) || esc(g.nombre)}</td></tr>
          <tr><th>Período / duración</th><td contenteditable="true">${esc(f.periodo.value) || "—"} · ${nClases} clase${nClases > 1 ? "s" : ""}</td></tr>
        </table>
        <h3>Fundamentación</h3>
        <p contenteditable="true">La Educación Tecnológica busca que ${destinatarios} comprendan el mundo artificial en el que viven: cómo se producen los bienes y servicios, con qué medios técnicos y con qué consecuencias. Esta propuesta se enmarca en los ejes de ${ejesSel.length ? ejesSel.map((e) => PET.ejes[e].nombre.toLowerCase()).join(", ") : "los procesos tecnológicos, los medios técnicos y la reflexión sociocultural"}, y recupera situaciones problemáticas y casos cercanos a la realidad de Misiones para dar sentido a los aprendizajes. [Completá con el diagnóstico del grupo.]</p>
        <h3>Propósitos</h3>
        <ul contenteditable="true">${propositos.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
        <h3>Objetivos</h3>
        <p class="muted" style="margin:0 0 6px">Que ${destinatarios} logren:</p>
        <ul contenteditable="true">${objetivos.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
        <h3>Contenidos</h3>
        ${ejesSel.length ? ejeOrden.filter((e) => byEje[e]).map((e) => `<p style="margin:10px 0 4px"><strong>${PET.ejes[e].nombre}</strong></p><ul contenteditable="true">${byEje[e].map((c) => `<li>${esc(c)}</li>`).join("")}</ul>`).join("") : '<p class="muted">Seleccioná contenidos en el panel.</p>'}
        <h3>Actividades</h3>
        ${acts.length ? `<table>${acts.map((a, i) => `<tr><th>${reparto(i)}</th><td contenteditable="true"><strong>${esc(a.t)}</strong><br>${esc(a.d)}</td></tr>`).join("")}</table>` : '<p class="muted" contenteditable="true">Seleccioná ideas o secuencias en el panel, o escribí acá las actividades de inicio, desarrollo y cierre.</p>'}
        <h3>Recursos</h3>
        <ul contenteditable="true">${recursos.map((r) => `<li>${esc(r)}</li>`).join("") || "<li>—</li>"}</ul>
        <h3>Evaluación</h3>
        <p contenteditable="true">Evaluación continua y formativa a partir de la observación del trabajo en grupo, las producciones (dibujos, diagramas, prototipos, informes) y la puesta en común. Criterios:</p>
        <ul contenteditable="true">
          ${byEje.procesos ? "<li>Identifica y ordena las operaciones del proceso y las representa adecuadamente.</li>" : ""}
          ${byEje.medios ? "<li>Explica la función de las partes de los medios técnicos y propone, construye y mejora soluciones.</li>" : ""}
          ${byEje.reflexion ? "<li>Compara tecnologías y argumenta sobre sus efectos sociales y ambientales.</li>" : ""}
          <li>Participa, colabora y comunica sus ideas con vocabulario técnico.</li>
        </ul>
        <h3>Bibliografía y marco curricular</h3>
        <ul contenteditable="true">${fuentes.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>
        <p class="muted" style="font-size:.8rem;margin-top:20px">Generado con la Biblioteca Virtual para Futuros Docentes · Revisá y adaptá cada apartado. Podés editar el texto haciendo clic sobre él.</p>`;
    }

    const save = () => PET.store.set("plan", {
      nivel: f.nivel.value, grado: f.grado.value, escuela: f.escuela.value, docente: f.docente.value, curso: f.curso.value,
      periodo: f.periodo.value, clases: f.clases.value, titulo: f.titulo.value, conts: $$("input:checked", f.conts).map((c) => c.value)
    });

    // Estado inicial: hash > guardado > primero
    const h = location.hash.slice(1);
    const fromHash = h && PET.findGrado(h.slice(h.indexOf("-") + 1));
    f.nivel.value = fromHash ? fromHash.nivel.id : (saved.nivel || PET.niveles[0].id);
    fillGrados();
    f.grado.value = fromHash ? fromHash.grado.id : (saved.grado || f.grado.options[0].value);
    if (!f.grado.value) f.grado.selectedIndex = 0;
    ["escuela", "docente", "curso", "periodo", "clases", "titulo"].forEach((k) => { if (saved[k]) f[k].value = saved[k]; });
    fillChecks(fromHash && fromHash.grado.id !== saved.grado ? [] : (saved.conts || []));
    generate();

    f.nivel.addEventListener("change", () => { fillGrados(); fillChecks(); generate(); save(); });
    f.grado.addEventListener("change", () => { fillChecks(); generate(); save(); });
    $("#pl-form").addEventListener("input", (e) => { if (e.target === f.nivel || e.target === f.grado) return; generate(); save(); });
    $("#pl-all").addEventListener("click", () => { $$("input", f.conts).forEach((c) => (c.checked = true)); generate(); save(); });
    $("#pl-none").addEventListener("click", () => { $$("input", f.conts).forEach((c) => (c.checked = false)); generate(); save(); });
    $("#pl-print").addEventListener("click", () => window.print());
    $("#pl-reset").addEventListener("click", () => {
      if (!confirm("¿Borrar los datos del formulario?")) return;
      PET.store.set("plan", {});
      ["escuela", "docente", "curso", "periodo", "titulo"].forEach((k) => (f[k].value = ""));
      f.clases.value = 4;
      fillChecks(); generate();
    });
  };

  /* ======================================================================
     PROYECTO (créditos de imágenes)
     ====================================================================== */
  PET.pages.proyecto = function () {
    const psc = $("#psc-body");
    if (psc && PET.proyecto) {
      const filled = (v) => Array.isArray(v) ? v.length > 0 : String(v || "").trim() !== "";
      const val = (v) => Array.isArray(v) ? `<ul>${v.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>` : String(v).split(/\n\s*\n/).map((p) => `<p>${esc(p)}</p>`).join("");
      let total = 0, done = 0;
      psc.innerHTML = PET.proyecto.secciones.map((sec) => {
        const campos = sec.campos.map((c) => {
          total++; if (filled(c.v)) done++;
          return `<div class="psc-field">
            <div class="k"><strong>${esc(c.k)}</strong>${c.p ? `<small>${esc(c.p)}</small>` : ""}</div>
            <div class="v">${filled(c.v) ? val(c.v) : `<div class="psc-empty"><b>Por completar</b>${esc(c.guia)}</div>`}</div>
          </div>`;
        }).join("");
        let crono = "";
        if (sec.cronograma) {
          total++; if (sec.cronograma.length) done++;
          crono = sec.cronograma.length
            ? `<div class="psc-field"><div class="k"><strong>Cronograma</strong></div><div class="v" style="overflow-x:auto"><table class="table"><thead><tr><th>Tarea</th><th>Responsable</th><th>Recursos</th><th>Tiempo</th></tr></thead><tbody>${sec.cronograma.map((r) => `<tr><td>${esc(r.tarea)}</td><td>${esc(r.responsable)}</td><td>${esc(r.recursos)}</td><td>${esc(r.tiempo)}</td></tr>`).join("")}</tbody></table></div></div>`
            : `<div class="psc-field"><div class="k"><strong>Cronograma</strong></div><div class="v"><div class="psc-empty"><b>Por completar</b>Tabla con tareas, responsables, recursos y tiempos de implementación.</div></div></div>`;
        }
        return `<section class="psc-sec reveal"><h3><span>${sec.n}</span>${esc(sec.titulo)}</h3>${campos}${crono}</section>`;
      }).join("");
      const pct = Math.round((done / total) * 100);
      $("#psc-progress").innerHTML = `<div style="display:flex;justify-content:space-between;gap:12px;font-size:.86rem;color:var(--muted)"><span>Avance de la plantilla</span><strong style="color:var(--ink)">${done} de ${total} apartados</strong></div><div class="progress-line"><span style="width:${pct}%"></span></div>`;
    }
    const st = $("#biblio-stats");
    if (st) {
      const nCont = PET.niveles.reduce((a, n) => a + n.grados.reduce((b, g) => b + Object.values(g.ejes).reduce((c, t) => c + t.reduce((d, x) => d + (x.items || []).length + (x.emergentes || []).length, 0), 0), 0), 0);
      const items = [[PET.areas.length, "estantes temáticos"], [nCont, "contenidos curriculares"], [PET.secuencias.length, "secuencias didácticas"], [PET.recursos.filter((r) => r.tipo === "video").length, "videos"], [PET.recursos.filter((r) => r.tipo !== "video").length, "documentos y herramientas"], [PET.conceptos.length, "conceptos"]];
      st.innerHTML = items.map(([n, l]) => `<div class="stat"><span class="stat-num">${n}</span><span class="stat-label">${l}</span></div>`).join("");
    }
    const ul = $("#creditos");
    if (ul) ul.innerHTML = Object.values(PET.imagenes).map((im) => `<li>${esc(im.alt)} — ${esc(im.autor)}, <a href="${im.pagina}" target="_blank" rel="noopener">${esc(im.licencia)}</a>, vía Wikimedia Commons.</li>`).join("");
    const pi = $("#proyecto-img");
    if (pi) pi.innerHTML = img("puente");
  };
})();
