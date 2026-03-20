/* ── Daten laden ──────────────────────────────────── */
let data = null;

async function loadData() {
  const res = await fetch('data/summaries.json');
  data = await res.json();
}

/* ── Dark Mode ────────────────────────────────────── */
function updateThemeIcon() {
  const theme = document.documentElement.getAttribute('data-theme') || 'light';
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.textContent = theme === 'dark' ? '☀' : '🌙';
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeIcon();
}

/* ── TOC observer (cleaned up on each navigation) ── */
let tocObserver = null;

/* ── Routing via Hash ─────────────────────────────── */
// Routen: #  →  Startseite
//         #fach/<id>          →  Themenübersicht
//         #thema/<fachId>/<themaId>           →  Zusammenfassungen
//         #inhalt/<fachId>/<themaId>/<index>  →  Inhaltsanzeige

function navigate(hash) {
  window.location.hash = hash;
}

window.addEventListener('hashchange', route);

async function route() {
  if (!data) await loadData();

  // Disconnect any active TOC observer before re-rendering
  if (tocObserver) { tocObserver.disconnect(); tocObserver = null; }

  const hash = window.location.hash.replace('#', '');
  const parts = hash.split('/').filter(Boolean);

  const app = document.getElementById('app');
  app.innerHTML = '';

  if (parts.length === 0) {
    renderStartseite(app);
  } else if (parts[0] === 'fach' && parts[1]) {
    renderFach(app, parts[1]);
  } else if (parts[0] === 'thema' && parts[1] && parts[2]) {
    renderThema(app, parts[1], parts[2]);
  } else if (parts[0] === 'inhalt' && parts[1] && parts[2] && parts[3] !== undefined) {
    await renderInhalt(app, parts[1], parts[2], parseInt(parts[3]));
  } else {
    app.innerHTML = '<p class="error-box">Seite nicht gefunden.</p>';
  }
}

/* ── Breadcrumb ───────────────────────────────────── */
function setBreadcrumb(items) {
  // items: [{label, hash}]  — letztes ist aktiv
  const nav = document.getElementById('breadcrumb');
  nav.innerHTML = items.map((item, i) => {
    const isLast = i === items.length - 1;
    const crumb = `<span class="crumb${isLast ? ' active' : ''}"
      ${isLast ? '' : `onclick="navigate('${item.hash}')"`}>${item.label}</span>`;
    return i < items.length - 1 ? crumb + '<span class="sep">›</span>' : crumb;
  }).join('');
}

/* ── Farbe als CSS-Variable setzen ───────────────── */
function setFarbe(farbe) {
  document.documentElement.style.setProperty('--farbe', farbe || '#888');
}

/* ── Hilfe: Fach & Thema suchen ──────────────────── */
function getFach(id) {
  return data.faecher.find(f => f.id === id);
}
function getThema(fach, id) {
  return fach?.themen.find(t => t.id === id);
}

/* ══════════════════════════════════════════════════
   VIEW 1 – Startseite: alle Fächer
══════════════════════════════════════════════════ */
function renderStartseite(app) {
  setFarbe(null);
  setBreadcrumb([{ label: 'Startseite', hash: '' }]);

  app.innerHTML = `
    <h1 class="page-title">Meine Schulfächer</h1>
    <p class="page-sub">Wähle ein Fach, um die Themen anzuzeigen.</p>
    <div class="grid" id="faecher-grid"></div>
  `;

  const grid = document.getElementById('faecher-grid');
  data.faecher.forEach(fach => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.setProperty('--farbe', fach.farbe);
    card.innerHTML = `
      <div class="card-icon">${fach.icon}</div>
      <div class="card-name">${fach.name}</div>
      <div class="card-desc">${fach.beschreibung}</div>
      <div class="card-count">${fach.themen.length} Thema${fach.themen.length !== 1 ? 'en' : ''}</div>
    `;
    card.addEventListener('click', () => navigate(`fach/${fach.id}`));
    grid.appendChild(card);
  });
}

/* ══════════════════════════════════════════════════
   VIEW 2 – Fach: alle Themen
══════════════════════════════════════════════════ */
function renderFach(app, fachId) {
  const fach = getFach(fachId);
  if (!fach) { app.innerHTML = '<p class="error-box">Fach nicht gefunden.</p>'; return; }

  setFarbe(fach.farbe);
  setBreadcrumb([
    { label: 'Startseite', hash: '' },
    { label: fach.name, hash: `fach/${fach.id}` },
  ]);

  app.innerHTML = `
    <h1 class="page-title">${fach.icon} ${fach.name}</h1>
    <p class="page-sub">${fach.beschreibung}</p>
    <div class="grid" id="themen-grid"></div>
  `;

  const grid = document.getElementById('themen-grid');
  fach.themen.forEach(thema => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.setProperty('--farbe', fach.farbe);
    card.innerHTML = `
      <div class="card-name">${thema.name}</div>
      <div class="card-desc">${thema.beschreibung}</div>
      <div class="card-count">${thema.zusammenfassungen.length} Zusammenfassung${thema.zusammenfassungen.length !== 1 ? 'en' : ''}</div>
    `;
    card.addEventListener('click', () => navigate(`thema/${fach.id}/${thema.id}`));
    grid.appendChild(card);
  });
}

/* ══════════════════════════════════════════════════
   VIEW 3 – Thema: Zusammenfassungen auflisten
══════════════════════════════════════════════════ */
function renderThema(app, fachId, themaId) {
  const fach  = getFach(fachId);
  const thema = getThema(fach, themaId);
  if (!fach || !thema) { app.innerHTML = '<p class="error-box">Thema nicht gefunden.</p>'; return; }

  setFarbe(fach.farbe);
  setBreadcrumb([
    { label: 'Startseite',   hash: '' },
    { label: fach.name,      hash: `fach/${fach.id}` },
    { label: thema.name,     hash: `thema/${fach.id}/${thema.id}` },
  ]);

  app.innerHTML = `
    <h1 class="page-title">${thema.name}</h1>
    <p class="page-sub">${thema.beschreibung} · ${fach.icon} ${fach.name}</p>
    <div class="summary-list" id="summary-list"></div>
  `;

  const list = document.getElementById('summary-list');
  thema.zusammenfassungen.forEach((zf, i) => {
    const item = document.createElement('div');
    item.className = 'summary-item';
    item.style.setProperty('--farbe', fach.farbe);
    item.innerHTML = `
      <span class="summary-type-badge">${zf.typ.toUpperCase()}</span>
      <span class="summary-title">${zf.titel}</span>
    `;
    item.addEventListener('click', () => navigate(`inhalt/${fach.id}/${thema.id}/${i}`));
    list.appendChild(item);
  });
}

/* ══════════════════════════════════════════════════
   VIEW 4 – Inhalt: MD oder PDF anzeigen
══════════════════════════════════════════════════ */
async function renderInhalt(app, fachId, themaId, index) {
  const fach  = getFach(fachId);
  const thema = getThema(fach, themaId);
  const zf    = thema?.zusammenfassungen[index];
  if (!fach || !thema || !zf) { app.innerHTML = '<p class="error-box">Inhalt nicht gefunden.</p>'; return; }

  setFarbe(fach.farbe);
  setBreadcrumb([
    { label: 'Startseite',   hash: '' },
    { label: fach.name,      hash: `fach/${fach.id}` },
    { label: thema.name,     hash: `thema/${fach.id}/${thema.id}` },
    { label: zf.titel,       hash: `inhalt/${fach.id}/${thema.id}/${index}` },
  ]);

  // Layout container — becomes a grid when a TOC is present
  const layout = document.createElement('div');
  layout.className = 'content-layout';

  const wrapper = document.createElement('div');
  wrapper.className = 'content-view';
  wrapper.style.setProperty('--farbe', fach.farbe);

  wrapper.innerHTML = `
    <div class="content-toolbar">
      <button class="btn btn-ghost" onclick="navigate('thema/${fach.id}/${thema.id}')">← Zurück</button>
      <span style="font-weight:700;font-size:1rem;">${zf.titel}</span>
    </div>
    <div id="content-body"></div>
  `;
  layout.appendChild(wrapper);
  app.appendChild(layout);

  const body = document.getElementById('content-body');

  if (zf.typ === 'md') {
    try {
      const res = await fetch(zf.datei);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = await res.text();
      const div = document.createElement('div');
      div.className = 'md-body';
      div.innerHTML = marked.parse(text);

      renderMathInElement(div, {
        delimiters: [
          {left: "$$", right: "$$", display: true},
          {left: "$", right: "$", display: false}
        ]
      });

      body.appendChild(div);

      // Build floating TOC after content is in the DOM
      buildTOC(div, layout);
    } catch (e) {
      body.innerHTML = `<div class="error-box">Datei konnte nicht geladen werden:<br><code>${zf.datei}</code></div>`;
    }
  } else if (zf.typ === 'pdf') {
    const iframe = document.createElement('iframe');
    iframe.className = 'pdf-frame';
    iframe.src = zf.datei;
    body.appendChild(iframe);
  } else {
    body.innerHTML = `<div class="error-box">Unbekannter Dateityp: <strong>${zf.typ}</strong></div>`;
  }
}

/* ── Floating Table of Contents ───────────────────── */
function buildTOC(mdDiv, layout) {
  const headings = Array.from(mdDiv.querySelectorAll('h2, h3'));
  if (headings.length < 2) return;

  // Assign stable IDs to headings
  const seen = {};
  headings.forEach(h => {
    let base = h.textContent.trim()
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-');
    let slug = base;
    if (seen[base] !== undefined) { seen[base]++; slug = `${base}-${seen[base]}`; }
    else { seen[base] = 0; }
    h.id = slug;
  });

  // Build sidebar element
  const toc = document.createElement('aside');
  toc.className = 'toc';

  const tocTitle = document.createElement('div');
  tocTitle.className = 'toc-title';
  tocTitle.textContent = 'Inhalt';
  toc.appendChild(tocTitle);

  const links = headings.map(h => {
    const a = document.createElement('a');
    a.href = `#${h.id}`;
    a.textContent = h.textContent;
    if (h.tagName === 'H3') a.classList.add('toc-h3');
    a.addEventListener('click', e => {
      e.preventDefault();
      h.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    toc.appendChild(a);
    return { h, a, visible: false };
  });

  layout.appendChild(toc);
  layout.classList.add('has-toc');

  // IntersectionObserver: highlight the first heading visible near the top
  tocObserver = new IntersectionObserver(entries => {
    entries.forEach(({ target, isIntersecting }) => {
      const link = links.find(l => l.h === target);
      if (link) link.visible = isIntersecting;
    });
    const first = links.find(l => l.visible);
    links.forEach(l => l.a.classList.toggle('active', !!first && l === first));
  }, { rootMargin: `-${56 + 8}px 0px -60% 0px`, threshold: 0 });

  headings.forEach(h => tocObserver.observe(h));
}

/* ── Search Index ─────────────────────────────────── */
let searchIndex = [];

function buildSearchIndex() {
  searchIndex = [];
  data.faecher.forEach(fach => {
    searchIndex.push({
      type: 'Fach',
      label: `${fach.icon} ${fach.name}`,
      sub: fach.beschreibung,
      hash: `fach/${fach.id}`,
      farbe: fach.farbe,
    });
    fach.themen.forEach(thema => {
      searchIndex.push({
        type: 'Thema',
        label: thema.name,
        sub: `${fach.icon} ${fach.name}`,
        hash: `thema/${fach.id}/${thema.id}`,
        farbe: fach.farbe,
      });
      thema.zusammenfassungen.forEach((zf, i) => {
        searchIndex.push({
          type: zf.typ.toUpperCase(),
          label: zf.titel,
          sub: `${fach.icon} ${fach.name} › ${thema.name}`,
          hash: `inhalt/${fach.id}/${thema.id}/${i}`,
          farbe: fach.farbe,
        });
      });
    });
  });
}

/* ── Search UI ────────────────────────────────────── */
function initSearch() {
  const input   = document.getElementById('search-input');
  const results = document.getElementById('search-results');
  if (!input || !results) return;

  let activeIndex   = -1;
  let currentItems  = [];

  function closeResults() {
    results.classList.remove('open');
    results.innerHTML = '';
    activeIndex  = -1;
    currentItems = [];
    input.setAttribute('aria-expanded', 'false');
  }

  function renderResults(items) {
    currentItems = items;
    activeIndex  = -1;
    results.innerHTML = '';

    if (items.length === 0) {
      const li = document.createElement('li');
      li.className = 'search-no-results';
      li.textContent = 'Keine Ergebnisse';
      results.appendChild(li);
    } else {
      items.forEach((item, i) => {
        const li = document.createElement('li');
        li.className = 'search-result-item';
        li.setAttribute('role', 'option');
        li.innerHTML = `
          <div class="search-result-title">
            <span class="search-result-badge"
              style="background:${item.farbe}28;color:${item.farbe}">${item.type}</span>${item.label}
          </div>
          <div class="search-result-sub">${item.sub}</div>
        `;
        li.addEventListener('mousedown', e => {
          e.preventDefault(); // keep focus so blur doesn't fire first
          navigate(item.hash);
          input.value = '';
          closeResults();
        });
        results.appendChild(li);
      });
    }

    results.classList.add('open');
    input.setAttribute('aria-expanded', 'true');
  }

  function setActive(index) {
    const items = results.querySelectorAll('.search-result-item');
    items.forEach((el, i) => el.classList.toggle('active', i === index));
    activeIndex = index;
    if (items[index]) items[index].scrollIntoView({ block: 'nearest' });
  }

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (q.length < 1) { closeResults(); return; }
    const filtered = searchIndex.filter(item =>
      item.label.toLowerCase().includes(q) ||
      item.sub.toLowerCase().includes(q)
    ).slice(0, 10);
    renderResults(filtered);
  });

  input.addEventListener('keydown', e => {
    const itemEls = results.querySelectorAll('.search-result-item');
    if (e.key === 'Escape') {
      closeResults();
      input.blur();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive(Math.min(activeIndex + 1, itemEls.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive(Math.max(activeIndex - 1, 0));
    } else if (e.key === 'Enter') {
      if (activeIndex >= 0 && currentItems[activeIndex]) {
        navigate(currentItems[activeIndex].hash);
        input.value = '';
        closeResults();
      }
    }
  });

  input.addEventListener('blur', () => {
    setTimeout(closeResults, 150);
  });
}

/* ── Start ────────────────────────────────────────── */
(async () => {
  updateThemeIcon();
  await loadData();
  buildSearchIndex();
  initSearch();
  route();
})();
