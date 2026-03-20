/* ── Daten laden ──────────────────────────────────── */
let data = null;

async function loadData() {
  const res = await fetch('data/summaries.json');
  data = await res.json();
}

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
  app.appendChild(wrapper);

  const body = document.getElementById('content-body');

  if (zf.typ === 'md') {
    try {
      const res = await fetch(zf.datei);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = await res.text();
      const div = document.createElement('div');
      div.className = 'md-body';
      div.innerHTML = marked.parse(text);
      body.appendChild(div);
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

/* ── Start ────────────────────────────────────────── */
(async () => {
  await loadData();
  route();
})();
