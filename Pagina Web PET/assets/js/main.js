/* ==========================================================================
   Biblioteca Virtual para Futuros Docentes — Núcleo del sitio
   Encabezado, pie, tema claro/oscuro, animaciones, buscador y videos.
   ========================================================================== */
(function () {
  "use strict";
  const PET = (window.PET = window.PET || {});

  /* ------------------------------------------------------------------
     CONFIGURACIÓN GENERAL — editá acá el nombre y la navegación
     ------------------------------------------------------------------ */
  PET.config = {
    sitio: "Biblioteca Virtual",
    sub: "Para futuros docentes · ISRG",
    instituto: "Instituto Superior Roque González",
    ciudad: "Posadas, Misiones",
    nav: [
      { href: "index.html", label: "Inicio" },
      { href: "biblioteca.html", label: "Biblioteca" },
      { href: "niveles.html", label: "Contenidos" },
      { href: "secuencias.html", label: "Secuencias" },
      { href: "recursos.html", label: "Recursos" },
      { href: "planificador.html", label: "Planificador" },
      { href: "profesorado.html", label: "Profesorado" },
      { href: "proyecto.html", label: "El proyecto" }
    ]
  };

  /* ------------------------------------------------------------------
     ÍCONOS (SVG en línea, trazo heredado de currentColor)
     ------------------------------------------------------------------ */
  const s = (p, extra = "") => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${p}</svg>`;
  PET.icons = {
    search: s('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>'),
    moon: s('<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"/>', 'class="moon"'),
    sun: s('<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>', 'class="sun"'),
    menu: s('<path d="M4 7h16M4 12h16M4 17h16"/>'),
    close: s('<path d="M18 6 6 18M6 6l12 12"/>'),
    arrow: s('<path d="M5 12h14M13 6l6 6-6 6"/>'),
    up: s('<path d="M12 19V5M6 11l6-6 6 6"/>'),
    chev: s('<path d="m6 9 6 6 6-6"/>', 'class="chev"'),
    ext: s('<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>'),
    play: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z"/></svg>',
    doc: s('<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>'),
    video: s('<rect x="3" y="5" width="13" height="14" rx="2"/><path d="m16 10 5-3v10l-5-3"/>'),
    tool: s('<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4Z"/>'),
    globe: s('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>'),
    gear: s('<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z"/>'),
    flow: s('<rect x="3" y="4" width="6" height="6" rx="1.5"/><rect x="15" y="14" width="6" height="6" rx="1.5"/><path d="M9 7h4a2 2 0 0 1 2 2v5"/><path d="m13 12 2 2 2-2"/>'),
    people: s('<circle cx="9" cy="8" r="3.2"/><path d="M3 20a6 6 0 0 1 12 0"/><circle cx="17" cy="9" r="2.4"/><path d="M15.5 14.2A5 5 0 0 1 21 19"/>'),
    book: s('<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2Z"/><path d="M4 19V5M8 7h7"/>'),
    cap: s('<path d="m2 9 10-5 10 5-10 5Z"/><path d="M6 11v5c3 2.5 9 2.5 12 0v-5M22 9v6"/>'),
    leaf: s('<path d="M5 19c0-8 6-14 15-15-1 9-7 15-15 15Z"/><path d="M5 19 13 11"/>'),
    bolt: s('<path d="M13 2 4 14h7l-1 8 9-12h-7Z"/>'),
    chip: s('<rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9.5" y="9.5" width="5" height="5" rx="1"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>'),
    blocks: s('<rect x="3" y="12" width="8" height="8" rx="1.5"/><rect x="13" y="12" width="8" height="8" rx="1.5"/><rect x="8" y="3" width="8" height="8" rx="1.5"/>'),
    pencil: s('<path d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16Z"/><path d="m13.5 6.5 4 4"/>'),
    clock: s('<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'),
    layers: s('<path d="m12 3 9 5-9 5-9-5Z"/><path d="m3 13 9 5 9-5"/>'),
    map: s('<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2Z"/><path d="M9 4v14M15 6v14"/>'),
    info: s('<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>'),
    star: s('<path d="m12 3 2.8 5.7 6.2.9-4.5 4.4 1 6.2L12 17.3 6.5 20.2l1-6.2L3 9.6l6.2-.9Z"/>'),
    print: s('<path d="M6 9V3h12v6M6 18H4a1 1 0 0 1-1-1v-6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1h-2"/><rect x="6" y="14" width="12" height="7" rx="1"/>'),
    check: s('<path d="m5 12 4.5 4.5L19 7"/>'),
    child: s('<circle cx="12" cy="5" r="2.6"/><path d="M12 8v7M8 11h8M9 22l3-7 3 7"/>'),
    school: s('<path d="M3 21h18M5 21V10l7-5 7 5v11"/><path d="M10 21v-5h4v5M12 10h.01"/>'),
    robot: s('<rect x="5" y="8" width="14" height="11" rx="2.5"/><path d="M12 4v4M9 13h.01M15 13h.01M9.5 16h5M3 12v3M21 12v3"/><circle cx="12" cy="3.5" r="1"/>'),
    bulb: s('<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.6 10.8c.6.5 1 1.2 1 2V16h5.2v-.2c0-.8.4-1.5 1-2A6 6 0 0 0 12 3Z"/>'),
    library: s('<path d="M4 4h4v16H4zM10 4h4v16h-4z"/><path d="m16.5 4.6 3.9-1 3.6 15.4-3.9 1Z" transform="translate(-2 .5)"/>'),
    heart: s('<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z"/>'),
    sparkle: s('<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>')
  };
  PET.ejeIcon = { procesos: PET.icons.flow, medios: PET.icons.gear, reflexion: PET.icons.people, general: PET.icons.book };
  PET.nivelIcon = { inicial: PET.icons.blocks, primaria: PET.icons.school, secundaria: PET.icons.chip, profesorado: PET.icons.cap };
  PET.tipoIcon = { documento: PET.icons.doc, video: PET.icons.video, herramienta: PET.icons.tool, sitio: PET.icons.globe };
  PET.areaColor = { sky: "var(--sky)", brand: "var(--brand)", gold: "var(--gold)", sun: "var(--sun)" };
  PET.tipoNombre = { documento: "Documento", video: "Video", herramienta: "Herramienta", sitio: "Sitio web" };
  PET.nivelNombre = { inicial: "Inicial", primaria: "Primaria", secundaria: "Secundaria", profesorado: "Profesorado" };

  PET.logo = `<svg class="brand-logo" viewBox="0 0 48 48" aria-hidden="true">
      <rect x="1" y="1" width="46" height="46" rx="12" fill="#14306a"/>
      <g fill="none" stroke="#fff" stroke-width="2.4" stroke-linejoin="round" stroke-linecap="round">
        <path d="M24 16.5c-3.6-2.6-8.3-3.2-13-2v18.5c4.7-1.2 9.4-.6 13 2Z"/>
        <path d="M24 16.5c3.6-2.6 8.3-3.2 13-2v18.5c-4.7-1.2-9.4-.6-13 2Z"/>
      </g>
      <path d="M29.5 14.2h4.2v9.6l-2.1-1.6-2.1 1.6Z" fill="#c39a32"/>
    </svg>`;

  /* ------------------------------------------------------------------
     UTILIDADES
     ------------------------------------------------------------------ */
  PET.$ = (sel, ctx = document) => ctx.querySelector(sel);
  PET.$$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  PET.esc = (str) => String(str ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  PET.norm = (str) => String(str ?? "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
  PET.store = {
    get(k, d) { try { const v = localStorage.getItem("pet:" + k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem("pet:" + k, JSON.stringify(v)); } catch (e) { /* sin almacenamiento */ } }
  };
  PET.recurso = (id) => (PET.recursos || []).find((r) => r.id === id);
  PET.concepto = (id) => (PET.conceptos || []).find((c) => c.id === id);
  PET.findGrado = (gid) => {
    for (const n of PET.niveles || []) for (const g of n.grados) if (g.id === gid) return { nivel: n, grado: g };
    return null;
  };

  /* ------------------------------------------------------------------
     TEMA CLARO / OSCURO
     ------------------------------------------------------------------ */
  const savedTheme = PET.store.get("theme", null);
  if (savedTheme) document.documentElement.setAttribute("data-theme", savedTheme);
  function toggleTheme() {
    const root = document.documentElement;
    const current = root.getAttribute("data-theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    PET.store.set("theme", next);
  }

  /* ------------------------------------------------------------------
     ENCABEZADO Y PIE
     ------------------------------------------------------------------ */
  function currentPage() {
    const p = location.pathname.split("/").pop() || "index.html";
    return p === "" ? "index.html" : p;
  }

  function renderHeader() {
    const mount = PET.$("#site-header");
    if (!mount) return;
    const here = currentPage();
    const links = PET.config.nav.map((n) => `<li><a href="${n.href}"${n.href === here ? ' aria-current="page"' : ""}>${n.label}</a></li>`).join("");
    mount.outerHTML = `
      <a class="skip-link" href="#main">Saltar al contenido</a>
      <div class="progress-bar" aria-hidden="true"></div>
      <header class="site-header">
        <div class="container header-inner">
          <a class="brand" href="index.html" aria-label="${PET.config.sitio}, inicio">
            ${PET.logo}
            <span class="brand-text"><span class="brand-name">${PET.config.sitio}</span><span class="brand-sub">${PET.config.sub}</span></span>
          </a>
          <nav class="main-nav" id="main-nav" aria-label="Principal"><ul>${links}</ul></nav>
          <div class="header-actions">
            <button class="icon-btn search-trigger" type="button" data-open-search aria-label="Buscar en la biblioteca">${PET.icons.search}<span>Buscar</span><kbd>Ctrl K</kbd></button>
            <button class="icon-btn theme-toggle" type="button" aria-label="Cambiar entre modo claro y oscuro">${PET.icons.moon}${PET.icons.sun}</button>
            <button class="icon-btn menu-toggle" type="button" aria-label="Abrir menú" aria-expanded="false" aria-controls="main-nav">${PET.icons.menu}</button>
          </div>
        </div>
      </header>`;
  }

  function renderFooter() {
    const mount = PET.$("#site-footer");
    if (!mount) return;
    const year = new Date().getFullYear();
    mount.outerHTML = `
      <footer class="site-footer">
        <div class="footer-strip">
          <div class="container">${PET.icons.bulb}<strong>Proyecto solidario socioeducativo</strong><span>Acceso libre y gratuito</span></div>
        </div>
        <div class="container">
          <div class="footer-grid">
            <div class="footer-brand">
              <a class="brand" href="index.html">${PET.logo}<span class="brand-text"><span class="brand-name">${PET.config.sitio}</span><span class="brand-sub">${PET.config.sub}</span></span></a>
              <p>Un espacio solidario y socioeducativo para compartir saberes y recursos para la formación docente — ${PET.config.instituto}, ${PET.config.ciudad}.</p>
            </div>
            <div><h4>Los 4 estantes</h4><ul>
              ${(PET.areas || []).map((a) => `<li><a href="biblioteca.html#${a.id}">${a.num}. ${PET.esc(a.titulo)}</a></li>`).join("")}
            </ul></div>
            <div><h4>Para el aula</h4><ul>
              <li><a href="niveles.html">Contenidos por nivel</a></li>
              <li><a href="secuencias.html">Secuencias didácticas</a></li>
              <li><a href="planificador.html">Planificador</a></li>
              <li><a href="conceptos.html">Conceptos y diagramas</a></li>
              <li><a href="misiones.html">Tecnología en Misiones</a></li>
            </ul></div>
            <div><h4>El proyecto</h4><ul>
              <li><a href="proyecto.html">Proyecto socioeducativo</a></li>
              <li><a href="profesorado.html">Plan del Profesorado</a></li>
              <li><a href="recursos.html">Recursos y videos</a></li>
              <li><a href="proyecto.html#sumar">Sumá tu material</a></li>
            </ul></div>
          </div>
          <div class="footer-bottom">
            <span>© ${year} · Proyecto de 3° año · Sociología de la Educación · ${PET.config.instituto}</span>
            <span>Material educativo sin fines de lucro. Las fuentes se citan en cada sección.</span>
          </div>
        </div>
      </footer>
      <button class="icon-btn to-top" type="button" aria-label="Volver arriba">${PET.icons.up}</button>`;
  }

  function wireHeader() {
    const header = PET.$(".site-header");
    const bar = PET.$(".progress-bar");
    const toTop = PET.$(".to-top");
    const onScroll = () => {
      const y = window.scrollY;
      header && header.classList.toggle("scrolled", y > 8);
      const h = document.documentElement.scrollHeight - innerHeight;
      if (bar) bar.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
      toTop && toTop.classList.toggle("show", y > 700);
    };
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    toTop && toTop.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));

    const themeBtn = PET.$(".theme-toggle");
    themeBtn && themeBtn.addEventListener("click", toggleTheme);

    const menuBtn = PET.$(".menu-toggle");
    const nav = PET.$("#main-nav");
    if (menuBtn && nav) {
      menuBtn.addEventListener("click", () => {
        const open = nav.classList.toggle("open");
        menuBtn.setAttribute("aria-expanded", String(open));
        menuBtn.innerHTML = open ? PET.icons.close : PET.icons.menu;
      });
      PET.$$("a", nav).forEach((a) => a.addEventListener("click", () => { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); menuBtn.innerHTML = PET.icons.menu; }));
    }
  }

  /* ------------------------------------------------------------------
     ANIMACIONES AL HACER SCROLL
     ------------------------------------------------------------------ */
  let revealObserver = null;
  PET.reveal = function (ctx = document) {
    const els = PET.$$(".reveal:not(.in)", ctx);
    if (!("IntersectionObserver" in window)) { els.forEach((e) => e.classList.add("in")); return; }
    if (!revealObserver) {
      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("in"); revealObserver.unobserve(en.target); } });
      }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    }
    els.forEach((e) => revealObserver.observe(e));
  };
  PET.stagger = function (container, step = 0.06) {
    PET.$$(".reveal", container).forEach((el, i) => el.style.setProperty("--d", Math.min(i * step, 0.6) + "s"));
  };

  PET.countUp = function (ctx = document) {
    const els = PET.$$("[data-count]", ctx);
    const run = (el) => {
      const target = +el.dataset.count;
      const dur = 1400;
      const t0 = performance.now();
      const tick = (t) => {
        const p = Math.min((t - t0) / dur, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3))) + (el.dataset.suffix || "");
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    if (!("IntersectionObserver" in window)) { els.forEach(run); return; }
    const io = new IntersectionObserver((entries) => entries.forEach((en) => { if (en.isIntersecting) { run(en.target); io.unobserve(en.target); } }), { threshold: 0.6 });
    els.forEach((e) => io.observe(e));
  };

  /* ------------------------------------------------------------------
     PESTAÑAS (tabs) con indicador animado
     ------------------------------------------------------------------ */
  PET.tabs = function (tablist, onChange) {
    const tabs = PET.$$('[role="tab"]', tablist);
    let ind = PET.$(".tab-indicator", tablist);
    if (!ind) { ind = document.createElement("span"); ind.className = "tab-indicator"; tablist.prepend(ind); }
    const move = (t) => { ind.style.width = t.offsetWidth + "px"; ind.style.transform = `translateX(${t.offsetLeft}px)`; };
    const select = (t, focus) => {
      tabs.forEach((x) => {
        const on = x === t;
        x.setAttribute("aria-selected", String(on));
        x.tabIndex = on ? 0 : -1;
        const panel = document.getElementById(x.getAttribute("aria-controls"));
        if (panel) panel.hidden = !on;
      });
      move(t);
      if (focus) t.focus();
      onChange && onChange(t);
    };
    tabs.forEach((t, i) => {
      t.addEventListener("click", () => select(t));
      t.addEventListener("keydown", (e) => {
        if (e.key === "ArrowRight") select(tabs[(i + 1) % tabs.length], true);
        if (e.key === "ArrowLeft") select(tabs[(i - 1 + tabs.length) % tabs.length], true);
      });
    });
    const initial = tabs.find((t) => t.getAttribute("aria-selected") === "true") || tabs[0];
    if (initial) requestAnimationFrame(() => select(initial));
    const remeasure = () => { const cur = tabs.find((t) => t.getAttribute("aria-selected") === "true"); cur && move(cur); };
    addEventListener("resize", remeasure);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(remeasure);
    setTimeout(remeasure, 400);
    return { select: (idx) => tabs[idx] && select(tabs[idx]) };
  };

  /* ------------------------------------------------------------------
     VIDEOS de YouTube — carga liviana (miniatura + clic)
     En archivo local (file://) YouTube no permite incrustar: se abre en
     una pestaña nueva. Publicado en un servidor, se reproduce en la página.
     ------------------------------------------------------------------ */
  PET.videoCard = function (r, opts = {}) {
    const tags = (r.niveles || []).map((n) => `<span class="tag tag-${n}">${PET.nivelNombre[n]}</span>`).join("");
    return `
      <article class="card video-card lift ${opts.reveal === false ? "" : "reveal"}">
        <button class="video-thumb" type="button" data-yt="${PET.esc(r.yt)}" data-title="${PET.esc(r.titulo)}"
          style="background-image:url('https://i.ytimg.com/vi/${PET.esc(r.yt)}/hqdefault.jpg')" aria-label="Reproducir video: ${PET.esc(r.titulo)}">
          <span class="play">${PET.icons.play}</span><span class="dur">YouTube</span>
        </button>
        <div class="v-body">
          <h3>${PET.esc(r.titulo)}</h3>
          <p>${PET.esc(r.desc)}</p>
          <div class="res-tags">${tags}</div>
          <span class="v-src">Fuente: ${PET.esc(r.fuente)}</span>
        </div>
      </article>`;
  };
  document.addEventListener("click", (e) => {
    const btn = e.target.closest(".video-thumb[data-yt]");
    if (!btn) return;
    const id = btn.dataset.yt;
    const watch = `https://www.youtube.com/watch?v=${encodeURIComponent(id)}`;
    if (location.protocol === "file:") { window.open(watch, "_blank", "noopener"); return; }
    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1&rel=0`;
    iframe.title = btn.dataset.title || "Video";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    btn.replaceWith(iframe);
  });

  /* ------------------------------------------------------------------
     TARJETA DE RECURSO (documento / herramienta / sitio)
     ------------------------------------------------------------------ */
  PET.resCard = function (r) {
    if (r.tipo === "video") return PET.videoCard(r);
    const tags = (r.niveles || []).map((n) => `<span class="tag tag-${n}">${PET.nivelNombre[n]}</span>`).join("");
    const local = !/^https?:/.test(r.url);
    return `
      <article class="card res-card lift reveal">
        <span class="res-type">${PET.tipoIcon[r.tipo]}${PET.tipoNombre[r.tipo]}${r.destacado ? ' · <span style="color:var(--gold)">★ Clave</span>' : ""}</span>
        <h3>${PET.esc(r.titulo)}</h3>
        <p>${PET.esc(r.desc)}</p>
        <p class="mono" style="font-size:.76rem">${PET.esc(r.fuente)}</p>
        <div class="res-tags">${tags}</div>
        <a class="res-link" href="${PET.esc(r.url)}" ${local ? "" : 'target="_blank" rel="noopener"'}>${local ? "Abrir documento" : "Abrir"} ${PET.icons.ext}</a>
      </article>`;
  };

  /* ------------------------------------------------------------------
     MODALES
     ------------------------------------------------------------------ */
  let lastFocus = null;
  PET.openModal = function (id) {
    const m = document.getElementById(id);
    if (!m) return;
    lastFocus = document.activeElement;
    m.hidden = false;
    document.body.style.overflow = "hidden";
    const f = PET.$("input, button, [href]", m);
    f && setTimeout(() => f.focus(), 30);
  };
  PET.closeModal = function (m) {
    if (!m) return;
    m.hidden = true;
    document.body.style.overflow = "";
    document.body.classList.remove("printing-modal");
    lastFocus && lastFocus.focus && lastFocus.focus();
  };
  document.addEventListener("click", (e) => {
    if (e.target.closest("[data-close-modal]") || e.target.classList.contains("modal-backdrop")) PET.closeModal(e.target.closest(".modal"));
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { const open = PET.$$(".modal").find((m) => !m.hidden); open && PET.closeModal(open); }
  });

  /* ------------------------------------------------------------------
     BUSCADOR GLOBAL (Ctrl + K)
     ------------------------------------------------------------------ */
  function buildIndex() {
    const idx = [];
    (PET.niveles || []).forEach((n) => n.grados.forEach((g) => {
      const textos = [];
      Object.values(g.ejes).forEach((temas) => temas.forEach((t) => { textos.push(t.tema, ...(t.items || []), ...(t.emergentes || [])); }));
      idx.push({ grupo: "Contenidos", icon: PET.nivelIcon[n.id], titulo: `${n.nombre} · ${g.nombre}`, sub: g.foco, href: `niveles.html#${n.id}-${g.id}`, texto: textos.join(" ") + " " + g.foco });
    }));
    (PET.conceptos || []).forEach((c) => idx.push({ grupo: "Conceptos", icon: PET.icons.book, titulo: c.termino, sub: c.def, href: `conceptos.html#${c.id}`, texto: c.def + " " + c.ejemplo }));
    (PET.secuencias || []).forEach((sq) => idx.push({ grupo: "Secuencias", icon: PET.icons.layers, titulo: sq.titulo, sub: `${sq.gradoTxt} · ${sq.resumen}`, href: `secuencias.html#${sq.id}`, texto: sq.resumen + " " + sq.contenidos.join(" ") }));
    (PET.recursos || []).forEach((r) => idx.push({ grupo: "Recursos", icon: PET.tipoIcon[r.tipo], titulo: r.titulo, sub: `${PET.tipoNombre[r.tipo]} · ${r.fuente}`, href: r.tipo === "video" ? `recursos.html#${r.id}` : (r.url || "recursos.html"), ext: r.tipo !== "video" && /^https?:/.test(r.url || ""), texto: r.desc }));
    (PET.profesorado || []).forEach((y) => y.materias.forEach((m) => idx.push({ grupo: "Profesorado", icon: PET.icons.cap, titulo: m.nombre, sub: `${y.titulo} · ${m.sum}`, href: `profesorado.html#${m.id}`, texto: m.sum + " " + m.aporta.join(" ") })));
    (PET.areas || []).forEach((a) => {
      idx.push({ grupo: "Biblioteca", icon: PET.icons[a.icon] || PET.icons.book, titulo: `Estante ${a.num}: ${a.titulo}`, sub: a.desc, href: `biblioteca.html#${a.id}`, texto: a.intro + " " + a.temas.map((t) => t.t + " " + t.d).join(" ") });
      (a.autores || []).forEach((au) => idx.push({ grupo: "Biblioteca", icon: PET.icons.people, titulo: au.n, sub: `${a.titulo} · ${au.idea}`, href: `biblioteca.html#${a.id}`, texto: au.idea }));
      (a.glosario || []).forEach((g) => idx.push({ grupo: "Biblioteca", icon: PET.icons.book, titulo: g.t, sub: `${a.titulo} · ${g.d}`, href: `biblioteca.html#${a.id}`, texto: g.d }));
    });
    (PET.casos || []).forEach((c) => idx.push({ grupo: "Misiones", icon: PET.icons.map, titulo: c.titulo, sub: c.bajada, href: `misiones.html#${c.id}`, texto: c.texto.join(" ") }));
    idx.forEach((it) => { it._t = PET.norm(it.titulo); it._b = PET.norm(it.sub + " " + it.texto); });
    return idx;
  }

  function highlight(text, q) {
    const safe = PET.esc(text);
    if (!q) return safe;
    const nt = PET.norm(safe);
    const i = nt.indexOf(q);
    if (i < 0) return safe;
    return safe.slice(0, i) + "<mark>" + safe.slice(i, i + q.length) + "</mark>" + safe.slice(i + q.length);
  }

  function setupSearch() {
    const modal = document.createElement("div");
    modal.className = "modal search-modal";
    modal.id = "search-modal";
    modal.hidden = true;
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", "Buscar en la biblioteca");
    modal.innerHTML = `
      <div class="modal-backdrop"></div>
      <div class="modal-panel">
        <div class="search-box">${PET.icons.search}<input type="search" placeholder="Buscá un contenido, concepto, video, materia…" aria-label="Texto a buscar" autocomplete="off"><button class="icon-btn" data-close-modal aria-label="Cerrar">${PET.icons.close}</button></div>
        <div class="search-results" role="listbox"></div>
        <div class="search-hint"><span>↑ ↓ para moverte</span><span>Enter para abrir</span><span>Esc para cerrar</span></div>
      </div>`;
    document.body.appendChild(modal);
    const input = PET.$("input", modal);
    const results = PET.$(".search-results", modal);
    let index = null;
    let active = 0;

    const sugerencias = ["poleas", "yerba", "sensor", "biotecnología", "Yacyretá", "programación", "lazo cerrado", "1° grado", "Arduino"];
    const render = () => {
      index = index || buildIndex();
      const q = PET.norm(input.value.trim());
      if (q.length < 2) {
        results.innerHTML = `<div class="search-group-title">Probá con</div><div class="chip-row" style="padding:4px 12px 14px">${sugerencias.map((x) => `<button class="chip" type="button" data-sug="${x}">${x}</button>`).join("")}</div>`;
        return;
      }
      const words = q.split(/\s+/);
      const scored = index.map((it) => {
        let sc = 0;
        for (const w of words) {
          if (it._t.includes(w)) sc += it._t.startsWith(w) ? 6 : 4;
          else if (it._b.includes(w)) sc += 1;
          else return null;
        }
        return { it, sc };
      }).filter(Boolean).sort((a, b) => b.sc - a.sc).slice(0, 30);
      if (!scored.length) { results.innerHTML = `<div class="empty-state">No encontramos «${PET.esc(input.value)}». Probá con otra palabra.</div>`; return; }
      const groups = {};
      scored.forEach(({ it }) => (groups[it.grupo] = groups[it.grupo] || []).push(it));
      let n = 0;
      results.innerHTML = Object.entries(groups).map(([g, items]) => `<div class="search-group-title">${g}</div>` + items.map((it) => `
        <a class="search-item${n === active ? " active" : ""}" data-i="${n++}" href="${PET.esc(it.href)}" ${it.ext ? 'target="_blank" rel="noopener"' : ""} role="option">
          <span class="si-icon">${it.icon || PET.icons.book}</span>
          <span><strong>${highlight(it.titulo, words[0])}</strong><small>${PET.esc(it.sub.length > 130 ? it.sub.slice(0, 130) + "…" : it.sub)}</small></span>
        </a>`).join("")).join("");
    };
    input.addEventListener("input", () => { active = 0; render(); });
    results.addEventListener("click", (e) => {
      const sug = e.target.closest("[data-sug]");
      if (sug) { input.value = sug.dataset.sug; render(); input.focus(); return; }
      const a = e.target.closest(".search-item");
      if (a) {
        PET.closeModal(modal);
        // misma página con ancla: forzar la navegación por hash
        const url = new URL(a.href, location.href);
        if (url.pathname === location.pathname && url.hash) { e.preventDefault(); location.hash = url.hash; window.dispatchEvent(new HashChangeEvent("hashchange")); }
      }
    });
    input.addEventListener("keydown", (e) => {
      const items = PET.$$(".search-item", results);
      if (!items.length) return;
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        active = (active + (e.key === "ArrowDown" ? 1 : -1) + items.length) % items.length;
        items.forEach((x, i) => x.classList.toggle("active", i === active));
        items[active].scrollIntoView({ block: "nearest" });
      }
      if (e.key === "Enter") { e.preventDefault(); items[active].click(); }
    });
    const open = () => { PET.openModal("search-modal"); render(); };
    document.addEventListener("click", (e) => { if (e.target.closest("[data-open-search]")) open(); });
    document.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") { e.preventDefault(); open(); }
      if (e.key === "/" && !/input|textarea|select/i.test(document.activeElement.tagName) && !document.activeElement.isContentEditable) { e.preventDefault(); open(); }
    });
  }

  /* ------------------------------------------------------------------
     INICIO
     ------------------------------------------------------------------ */
  PET.hydrateIcons = function (ctx = document) {
    PET.$$("[data-icon]", ctx).forEach((el) => {
      const svg = PET.icons[el.dataset.icon] || "";
      if (el.tagName === "SPAN") el.outerHTML = svg; else el.innerHTML = svg;
    });
  };

  document.addEventListener("DOMContentLoaded", () => {
    PET.hydrateIcons();
    renderHeader();
    renderFooter();
    wireHeader();
    setupSearch();
    const page = document.body.dataset.page;
    if (PET.pages && PET.pages[page]) PET.pages[page]();
    PET.reveal();
    PET.countUp();
  });
})();
