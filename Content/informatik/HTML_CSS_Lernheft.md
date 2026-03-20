# HTML & CSS – Lernheft

**Fach:** Informatik / Webentwicklung  
**Thema:** HTML & CSS – Grundlagen bis Fortgeschrittene Konzepte  
**Erstellt:** 20. März 2026

---

## 1. HTML Grundstruktur

### Verstehen

HTML (HyperText Markup Language) ist die Grundsprache des Webs: Sie beschreibt die **Struktur** einer Webseite durch sogenannte Tags, die dem Browser mitteilen, was ein Element bedeutet. Jedes gültige HTML-Dokument beginnt mit `<!DOCTYPE html>`, was dem Browser anzeigt, dass es sich um modernes HTML5 handelt. Die Struktur ist hierarchisch – man spricht vom **DOM** (Document Object Model), einem Baum aus verschachtelten Elementen.

### Überblick

```html
<!DOCTYPE html>
<html lang="de">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Seitenname</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <!-- Sichtbarer Inhalt hier -->
  </body>
</html>
```

| Element | Bedeutung |
|---|---|
| `<!DOCTYPE html>` | Deklariert HTML5-Standard |
| `<html lang="de">` | Wurzelelement, Sprache definieren |
| `<head>` | Metadaten (nicht sichtbar auf der Seite) |
| `<meta charset="UTF-8">` | Zeichencodierung (wichtig für Umlaute) |
| `<meta name="viewport" ...>` | Responsives Verhalten auf Mobilgeräten |
| `<title>` | Titel im Browser-Tab |
| `<link rel="stylesheet">` | Externes CSS einbinden |
| `<body>` | Sichtbarer Seiteninhalt |

### Kernaussagen

- Jedes HTML-Dokument braucht `<!DOCTYPE html>`, `<html>`, `<head>` und `<body>`
- **`<head>`** enthält Metadaten (Titel, CSS, Zeichensatz) – nichts davon ist direkt sichtbar
- **`<body>`** enthält alles, was der Nutzer sieht
- `lang="de"` ist wichtig für Barrierefreiheit und Suchmaschinen
- Das `viewport`-Meta-Tag ist Pflicht für Mobile-Darstellung
- HTML beschreibt **Struktur**, CSS beschreibt **Aussehen**

### Prüfungsfragen

1. Was ist der Unterschied zwischen `<head>` und `<body>`?
2. Warum schreibt man `<!DOCTYPE html>` an den Anfang?
3. Wie bindet man eine externe CSS-Datei ein?
4. Was bewirkt `<meta charset="UTF-8">`?
5. Was ist der DOM und wie hängt er mit HTML zusammen?

---

## 2. HTML Elemente & Tags

### Verstehen

HTML-Tags sind die Bausteine einer Webseite. Man unterscheidet zwischen **Block-Elementen** (nehmen die gesamte Breite ein, beginnen auf neuer Zeile) und **Inline-Elementen** (fügen sich in den Textfluss ein). Diese Unterscheidung ist grundlegend für das spätere CSS-Styling. **Semantische Tags** wie `<header>`, `<nav>` oder `<article>` haben keine besondere visuelle Funktion, geben aber Bedeutung – wichtig für Suchmaschinen und Barrierefreiheit.

### Überblick

**Text & Struktur:**

| Tag | Typ | Beschreibung |
|---|---|---|
| `<h1>` bis `<h6>` | Block | Überschriften (h1 = wichtigste) |
| `<p>` | Block | Absatz |
| `<br>` | Inline | Zeilenumbruch (selbstschliessend) |
| `<hr>` | Block | Horizontale Linie |
| `<strong>` | Inline | **Fett** (semantisch: wichtig) |
| `<em>` | Inline | *Kursiv* (semantisch: betont) |
| `<span>` | Inline | Allg. Inline-Container |
| `<div>` | Block | Allg. Block-Container |

**Listen:**

| Tag | Beschreibung |
|---|---|
| `<ul>` | Ungeordnete Liste (Punkte) |
| `<ol>` | Geordnete Liste (Nummern) |
| `<li>` | Listenelement (Kind von ul/ol) |

**Links & Medien:**

```html
<!-- Link -->
<a href="https://example.com" target="_blank">Linktext</a>

<!-- Bild -->
<img src="bild.jpg" alt="Beschreibung" width="300">

<!-- Video -->
<video src="video.mp4" controls autoplay muted></video>
```

**Semantische Elemente (HTML5):**

```html
<header>   <!-- Kopfbereich der Seite -->
<nav>      <!-- Navigationsbereich -->
<main>     <!-- Hauptinhalt -->
<section>  <!-- Thematischer Abschnitt -->
<article>  <!-- Eigenständiger Inhalt (z.B. Blog-Beitrag) -->
<aside>    <!-- Randinhalt / Sidebar -->
<footer>   <!-- Fussbereich -->
```

**Tabellen:**

```html
<table>
  <thead>
    <tr><th>Name</th><th>Alter</th></tr>
  </thead>
  <tbody>
    <tr><td>Anna</td><td>17</td></tr>
  </tbody>
</table>
```

### Kernaussagen

- **Block-Elemente**: `<div>`, `<p>`, `<h1-6>`, `<section>`, `<article>` usw.
- **Inline-Elemente**: `<span>`, `<a>`, `<strong>`, `<em>`, `<img>` usw.
- `<a href="...">` für Links – `target="_blank"` öffnet in neuem Tab
- `alt`-Attribut bei `<img>` ist Pflicht (Barrierefreiheit & SEO)
- Semantische Tags wie `<header>`, `<nav>`, `<main>` verbessern Struktur und Lesbarkeit
- `<div>` und `<span>` sind bedeutungslose Container für CSS-Styling

### Prüfungsfragen

1. Was ist der Unterschied zwischen `<strong>` und `<b>` bzw. `<em>` und `<i>`?
2. Wann benutzt man `<div>` vs. `<section>`?
3. Welche Attribute sind bei `<img>` zwingend und warum?
4. Wie erstellt man eine geordnete Liste mit verschachtelten Unterpunkten?
5. Was sind semantische HTML-Elemente und warum sind sie wichtig?

---

## 3. HTML Formulare & Eingaben

### Verstehen

Formulare sind das wichtigste Werkzeug zur Nutzerinteraktion im Web. Das `<form>`-Element umschliesst alle Eingabefelder und definiert, wohin und wie die Daten gesendet werden. Die Methode **GET** hängt Daten an die URL (sichtbar, für Suchanfragen), während **POST** sie im Request-Body überträgt (unsichtbar, für Passwörter, Login-Daten). Das `name`-Attribut der Inputs ist entscheidend – es bestimmt den Schlüsselnamen beim Absenden.

### Überblick

```html
<form action="/submit" method="post">
  <!-- Textfeld -->
  <input type="text" name="vorname" placeholder="Vorname" required>

  <!-- Passwort -->
  <input type="password" name="passwort">

  <!-- E-Mail -->
  <input type="email" name="email">

  <!-- Zahl -->
  <input type="number" name="alter" min="0" max="120">

  <!-- Checkbox -->
  <input type="checkbox" name="agb" id="agb">
  <label for="agb">AGB akzeptieren</label>

  <!-- Radio-Buttons -->
  <input type="radio" name="geschlecht" value="m"> Männlich
  <input type="radio" name="geschlecht" value="w"> Weiblich

  <!-- Dropdown -->
  <select name="land">
    <option value="ch">Schweiz</option>
    <option value="de">Deutschland</option>
  </select>

  <!-- Mehrzeiliger Text -->
  <textarea name="nachricht" rows="4" cols="40"></textarea>

  <!-- Absende-Button -->
  <button type="submit">Absenden</button>
</form>
```

| Attribut | Beschreibung |
|---|---|
| `action` | Ziel-URL für die Formulardaten |
| `method="get/post"` | Übertragungsmethode |
| `required` | Pflichtfeld |
| `placeholder` | Hinweistext im leeren Feld |
| `name` | Schlüssel beim Absenden (wichtig!) |
| `id` + `for` | Verknüpfung Label ↔ Input |

### Kernaussagen

- **GET**: Daten in URL sichtbar → für Suchen, Filterung
- **POST**: Daten im Body versteckt → für Login, sensible Daten
- `name`-Attribut bestimmt den Schlüssel der gesendeten Daten
- `<label for="id">` verbessert Barrierefreiheit und Klickbereich
- `required`, `min`, `max`, `pattern` für clientseitige Validierung
- `<button type="submit">` oder `<input type="submit">` zum Absenden

### Prüfungsfragen

1. Was ist der Unterschied zwischen GET und POST bei Formularen?
2. Warum braucht jedes `<input>` ein `name`-Attribut?
3. Wie verknüpft man ein `<label>` mit einem `<input>`?
4. Welche `type`-Werte kennt das `<input>`-Element?
5. Was macht das `required`-Attribut?

---

## 4. CSS Grundlagen & Selektoren

### Verstehen

CSS (Cascading Style Sheets) kontrolliert das **visuelle Erscheinungsbild** von HTML-Elementen. Das «Cascading» beschreibt eine Prioritätskette: Wenn mehrere Regeln denselben Stil definieren, gewinnt die spezifischere. Diese **Spezifität** wird in einer Punktzahl berechnet. CSS kann inline (im HTML-Tag), intern (im `<style>`-Block) oder extern (in einer .css-Datei) eingebunden werden – externe Dateien sind die beste Praxis.

### Überblick

**Selektoren-Typen:**

| Selektor | Syntax | Beispiel | Beschreibung |
|---|---|---|---|
| **Element** | `tag` | `p { }` | Alle `<p>` |
| **Klasse** | `.name` | `.box { }` | Alle mit `class="box"` |
| **ID** | `#name` | `#header { }` | Element mit `id="header"` |
| **Kombinator** | `A B` | `div p { }` | Alle `<p>` innerhalb von `<div>` |
| **Kind** | `A > B` | `ul > li { }` | Direkte Kinder |
| **Attribut** | `[attr]` | `[type="text"] { }` | Elemente mit Attribut |
| **Universal** | `*` | `* { }` | Alle Elemente |
| **Gruppe** | `A, B` | `h1, h2 { }` | Mehrere Elemente |

**CSS Spezifität (Priorität):**

| Typ | Punkte |
|---|---|
| Inline-Style (`style=""`) | 1000 |
| ID (`#id`) | 100 |
| Klasse (`.klasse`), Attribut, Pseudoklasse | 10 |
| Element (`p`, `div`), Pseudoelement | 1 |
| `!important` | Überschreibt alles (sparsam nutzen!) |

```css
/* Syntax */
selektor {
  eigenschaft: wert;
}

/* Beispiele */
h1 {
  color: navy;
  font-size: 2rem;
}

.karte {
  background-color: #f0f0f0;
  border-radius: 8px;
}

#logo {
  width: 150px;
}
```

### Kernaussagen

- CSS-Regeln bestehen aus **Selektor**, **Eigenschaft** und **Wert**
- Klassen (`.klasse`) sind wiederverwendbar, IDs (`#id`) nur einmal pro Seite
- **Spezifität**: Inline > ID > Klasse > Element
- **Kaskade**: Bei gleicher Spezifität gewinnt die zuletzt definierte Regel
- `!important` überschreibt alle anderen Regeln – nur im Notfall benutzen
- Externe CSS-Dateien sind Best Practice (Trennung von Struktur und Design)

### Prüfungsfragen

1. Was bedeutet das «Cascading» in CSS?
2. Was ist der Unterschied zwischen einer Klasse und einer ID?
3. Erkläre die CSS-Spezifität anhand eines Beispiels.
4. Wie schreibt man einen Selektor, der nur direkte Kinder anspricht?
5. Warum sollte man `!important` sparsam verwenden?

---

## 5. Das CSS Box-Modell

### Verstehen

Jedes HTML-Element im Browser ist eine Box. Das **CSS Box-Modell** beschreibt, wie diese Box aufgebaut ist: von innen nach aussen gibt es **Content** (Inhalt), **Padding** (Innenabstand), **Border** (Rahmen) und **Margin** (Aussenabstand). Die Gesamtbreite eines Elements errechnet sich aus der Summe all dieser Ebenen – ausser man setzt `box-sizing: border-box`, was in der modernen Webentwicklung Standard ist.

### Überblick

```
┌─────────────────────────────┐  ← Margin (aussen)
│  ┌───────────────────────┐  │  ← Border
│  │  ┌─────────────────┐  │  │  ← Padding
│  │  │    CONTENT      │  │  │
│  │  └─────────────────┘  │  │
│  └───────────────────────┘  │
└─────────────────────────────┘
```

| Eigenschaft | Beschreibung |
|---|---|
| `width` / `height` | Breite/Höhe des Inhalts |
| `padding` | Abstand zwischen Inhalt und Rahmen (innen) |
| `border` | Rahmen (Dicke, Stil, Farbe) |
| `margin` | Abstand zu anderen Elementen (aussen) |
| `box-sizing: content-box` | Standard: width = nur Content |
| `box-sizing: border-box` | Modern: width = Content + Padding + Border |

```css
/* Empfehlung: box-sizing global setzen */
* {
  box-sizing: border-box;
}

.box {
  width: 300px;
  height: 200px;
  padding: 20px;           /* alle Seiten */
  padding: 10px 20px;      /* oben/unten  links/rechts */
  padding: 5px 10px 15px 20px; /* oben rechts unten links */
  border: 2px solid black;
  margin: 16px auto;       /* vertikal 16px, horizontal zentriert */
}
```

**Margin Shorthand:**

| Syntax | Bedeutung |
|---|---|
| `margin: 10px` | Alle Seiten 10px |
| `margin: 10px 20px` | Oben/Unten 10px, Links/Rechts 20px |
| `margin: 10px 20px 30px 40px` | Oben, Rechts, Unten, Links (Uhrzeigersinn) |
| `margin: auto` | Automatisch zentrieren (horizontal) |

### Kernaussagen

- **Reihenfolge**: Content → Padding → Border → Margin
- **`box-sizing: border-box`**: Width/Height beinhalten Padding und Border → empfohlen
- `margin: 0 auto` zentriert Block-Elemente horizontal (bei definierter Breite)
- **Margin Collapse**: Vertikale Margins von benachbarten Elementen verschmelzen (der grössere gewinnt)
- `padding` kann nicht negativ sein, `margin` schon
- `border`-Kurzschreibweise: `border: breite stil farbe` z.B. `border: 1px solid #ccc`

### Prüfungsfragen

1. Erkläre den Unterschied zwischen `padding` und `margin`.
2. Was ist der Unterschied zwischen `box-sizing: content-box` und `border-box`?
3. Ein Element hat `width: 200px`, `padding: 20px`, `border: 5px`. Wie breit ist es bei `content-box`? Bei `border-box`?
4. Was ist «Margin Collapse» und wann tritt es auf?
5. Wie zentriert man ein Block-Element horizontal mit CSS?

---

## 6. CSS Farben, Schriften & Einheiten

### Verstehen

CSS bietet viele Möglichkeiten, Farben und Schriften zu definieren. Für **Farben** stehen mehrere Formate zur Verfügung – für einfache Fälle reichen Farbnamen oder Hex-Codes, für Transparenz braucht man `rgba()`. Bei **Einheiten** unterscheidet man zwischen absoluten (px, cm) und relativen (`em`, `rem`, `%`, `vw`, `vh`) – relative Einheiten sind für responsives Design unverzichtbar. `rem` bezieht sich auf die Schriftgrösse des Root-Elements (`<html>`) und ist damit zuverlässiger als `em`.

### Überblick

**Farb-Formate:**

| Format | Beispiel | Besonderheit |
|---|---|---|
| Farbname | `red`, `navy` | Einfach, begrenzte Auswahl |
| HEX | `#ff0000`, `#f00` | Häufigste Methode |
| RGB | `rgb(255, 0, 0)` | Rot, Grün, Blau (0–255) |
| RGBA | `rgba(255, 0, 0, 0.5)` | Mit Transparenz (0–1) |
| HSL | `hsl(0, 100%, 50%)` | Farbton, Sättigung, Helligkeit |

**Einheiten:**

| Einheit | Typ | Beschreibung |
|---|---|---|
| `px` | Absolut | Pixel – feste Grösse |
| `%` | Relativ | Relativ zum Elternelement |
| `em` | Relativ | Relativ zur Schriftgrösse des Elters |
| `rem` | Relativ | Relativ zur Root-Schriftgrösse (16px Standard) |
| `vw` | Relativ | 1% der Viewport-Breite |
| `vh` | Relativ | 1% der Viewport-Höhe |

**Schriften:**

```css
body {
  font-family: 'Helvetica Neue', Arial, sans-serif; /* Fallback-Liste */
  font-size: 16px;
  font-weight: bold;       /* normal | bold | 100–900 */
  font-style: italic;
  line-height: 1.5;        /* Zeilenabstand (1.5x Schriftgrösse) */
  letter-spacing: 0.05em;  /* Zeichenabstand */
  text-align: center;      /* left | right | center | justify */
  text-decoration: none;   /* underline | none */
  text-transform: uppercase; /* lowercase | capitalize */
  color: #333;
}

/* Google Font einbinden (im <head>) */
<link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
```

### Kernaussagen

- **`#RRGGBB`** – Hexadezimal, z.B. `#ff5733` (Rot-Wert: ff, Grün-Wert: 57, Blau: 33)
- **`rgba()`** – Vierter Parameter = Transparenz (0 = unsichtbar, 1 = voll sichtbar)
- **`rem`** > `em` für Schriftgrössen – verlässlicher, weil immer auf Root bezogen
- **`vw`/`vh`** ideal für Vollbild-Layouts (`height: 100vh`)
- `font-family` immer mit Fallback-Kette schreiben
- `line-height: 1.5` gilt als guter Standard für Lesbarkeit

### Prüfungsfragen

1. Was ist der Unterschied zwischen `em` und `rem`?
2. Wie macht man eine Farbe halb-transparent in CSS?
3. Welche Einheit würdest du für einen vollständig bildschirmfüllenden Bereich verwenden?
4. Was bewirkt `font-family: Arial, sans-serif`?
5. Wandle `#ff0000` in das RGB-Format um.

---

## 7. CSS Flexbox

### Verstehen

**Flexbox** ist ein eindimensionales Layout-System, das Elemente entlang einer Achse (Zeile oder Spalte) anordnet. Der **Flex-Container** (das Elternelement mit `display: flex`) bestimmt die Ausrichtung, während **Flex-Items** (die Kinder) sich entsprechend anpassen. Flexbox löst klassische Probleme wie das vertikale Zentrieren oder gleichmässige Aufteilung von Elementen extrem elegant. Es ist ideal für Navigationsleisten, Kartenreihen, oder kleine UI-Komponenten.

### Überblick

```css
/* Container-Eigenschaften */
.container {
  display: flex;
  flex-direction: row;         /* row | row-reverse | column | column-reverse */
  justify-content: center;     /* Ausrichtung auf Hauptachse */
  align-items: center;         /* Ausrichtung auf Querachse */
  flex-wrap: wrap;             /* Umbruch erlauben */
  gap: 16px;                   /* Abstand zwischen Items */
}
```

**`justify-content` (Hauptachse):**

| Wert | Verhalten |
|---|---|
| `flex-start` | Items am Anfang (Standard) |
| `flex-end` | Items am Ende |
| `center` | Items zentriert |
| `space-between` | Gleicher Abstand zwischen Items, kein Rand |
| `space-around` | Gleicher Abstand um Items (halber Rand) |
| `space-evenly` | Komplett gleichmässige Abstände |

**`align-items` (Querachse):**

| Wert | Verhalten |
|---|---|
| `stretch` | Items dehnen sich aus (Standard) |
| `flex-start` | Items oben/links |
| `flex-end` | Items unten/rechts |
| `center` | Items zentriert |
| `baseline` | An Textbasis ausgerichtet |

**Item-Eigenschaften:**

```css
.item {
  flex-grow: 1;      /* Wie viel freien Platz darf es einnehmen? */
  flex-shrink: 1;    /* Darf es schrumpfen? */
  flex-basis: 200px; /* Ausgangsgrösse */
  flex: 1;           /* Kurzform: grow shrink basis */
  align-self: flex-end; /* Einzelnes Item anders ausrichten */
  order: 2;          /* Reihenfolge ändern */
}
```

**Zentrierung (häufigste Anwendung):**

```css
.zentriert {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

### Kernaussagen

- **`display: flex`** macht ein Element zum Flex-Container
- **`justify-content`** steuert die Hauptachse (bei `row` = horizontal)
- **`align-items`** steuert die Querachse (bei `row` = vertikal)
- **`flex-wrap: wrap`** verhindert, dass Items ausserhalb des Containers ragen
- **`gap`** ist moderner Ersatz für Margins zwischen Flex-Items
- **`flex: 1`** lässt ein Item den gesamten verfügbaren Platz ausfüllen
- Perfekte Zentrierung: `display: flex; justify-content: center; align-items: center;`

### Prüfungsfragen

1. Was ist der Unterschied zwischen `justify-content` und `align-items`?
2. Was bewirkt `flex: 1` bei einem Flex-Item?
3. Wie zentriert man ein Element vertikal und horizontal mit Flexbox?
4. Was passiert, wenn man `flex-direction: column` setzt?
5. Erkläre den Unterschied zwischen `space-between` und `space-around`.

---

## 8. CSS Grid

### Verstehen

CSS Grid ist ein **zweidimensionales** Layout-System – im Gegensatz zu Flexbox, das nur eine Achse kennt. Mit Grid definiert man explizit Zeilen und Spalten und platziert Elemente in diesem Raster. Grid eignet sich besonders für komplexe Seitenstrukturen (Header, Sidebar, Content, Footer) und Galerien. Die Kurzschreibweise `fr` (fraction) teilt den verfügbaren Platz proportional auf und ist das Kernkonzept von Grid.

### Überblick

```css
/* Container */
.grid {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;  /* 3 Spalten, Mittlere doppelt so breit */
  grid-template-rows: auto 1fr auto;   /* 3 Zeilen */
  gap: 20px;                           /* Abstand zwischen Zellen */
}

/* Nützliche Funktionen */
grid-template-columns: repeat(3, 1fr);       /* 3 gleiche Spalten */
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Responsive! */
```

**Items platzieren:**

```css
.item {
  grid-column: 1 / 3;  /* von Linie 1 bis Linie 3 (= 2 Spalten breit) */
  grid-row: 1 / 2;     /* von Linie 1 bis Linie 2 */
  grid-column: span 2; /* Nimmt 2 Spalten ein */
}
```

**Template Areas (sehr lesbar!):**

```css
.container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar content"
    "footer footer";
  grid-template-columns: 250px 1fr;
}

header { grid-area: header; }
.sidebar { grid-area: sidebar; }
main { grid-area: content; }
footer { grid-area: footer; }
```

| Eigenschaft | Beschreibung |
|---|---|
| `grid-template-columns` | Spaltenstruktur definieren |
| `grid-template-rows` | Zeilenstruktur definieren |
| `gap` | Abstand zwischen Zellen |
| `grid-column` | Item horizontal platzieren |
| `grid-row` | Item vertikal platzieren |
| `grid-area` | Item in benannte Area platzieren |
| `fr` | Fraction – Anteil am freien Platz |

### Kernaussagen

- **`display: grid`** aktiviert Grid auf einem Container
- **`fr`** (fraction) = anteiliger freier Platz, z.B. `1fr 2fr` = 1/3 und 2/3
- **`repeat(n, breite)`** vereinfacht identische Spalten/Zeilen
- **`minmax(min, max)`** setzt Mindest- und Maximalbreite – ideal für Responsive
- **`grid-template-areas`** erlaubt layoutkonforme Benennung von Bereichen
- Grid ist zweidimensional (Zeilen **und** Spalten), Flexbox eindimensional

### Prüfungsfragen

1. Was ist der Unterschied zwischen Flexbox und Grid?
2. Was bedeutet `grid-template-columns: repeat(3, 1fr)`?
3. Wie lässt man ein Grid-Item zwei Spalten überspannen?
4. Erkläre `grid-template-areas` anhand eines Beispiels.
5. Was macht `minmax(200px, 1fr)` und wann ist es nützlich?

---

## 9. Responsive Design & Media Queries

### Verstehen

Responsive Design bedeutet, dass sich eine Webseite an verschiedene Bildschirmgrössen anpasst – vom Smartphone bis zum Desktop-Monitor. Das Kernwerkzeug dafür sind **Media Queries**, die CSS-Regeln aktivieren, wenn bestimmte Bedingungen erfüllt sind (z.B. Bildschirm kleiner als 768px). Der Ansatz **Mobile First** bedeutet, zuerst das kleine Layout zu stylen und dann für grössere Bildschirme zu erweitern – er gilt als Best Practice.

### Überblick

```css
/* Mobile First Ansatz */
/* 1. Basis-Styles (für alle Bildschirme / Mobile) */
.container {
  width: 100%;
  padding: 16px;
}

/* 2. Tablet (ab 768px) */
@media (min-width: 768px) {
  .container {
    max-width: 720px;
    margin: 0 auto;
  }
}

/* 3. Desktop (ab 1024px) */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
  }
}
```

**Häufige Breakpoints:**

| Breakpoint | Breite | Gerät |
|---|---|---|
| XS | < 576px | Kleines Smartphone |
| SM | ≥ 576px | Smartphone (gross) |
| MD | ≥ 768px | Tablet |
| LG | ≥ 1024px | Laptop |
| XL | ≥ 1280px | Desktop |
| XXL | ≥ 1536px | Grosser Monitor |

**Media Query Typen:**

```css
@media (max-width: 600px) { }      /* Nur bis 600px (Desktop First) */
@media (min-width: 600px) { }      /* Ab 600px (Mobile First) */
@media (orientation: landscape) { } /* Querformat */
@media print { }                    /* Druckansicht */
@media (prefers-color-scheme: dark) { } /* Dark Mode */
```

**Responsive Bilder:**

```css
img {
  max-width: 100%;
  height: auto;
}
```

### Kernaussagen

- **Mobile First**: Erst Mobile stylen, dann mit `min-width` für grössere Bildschirme erweitern
- **`@media (min-width: ...)`** für Mobile First, `@media (max-width: ...)` für Desktop First
- `max-width: 100%; height: auto;` macht Bilder responsiv
- `viewport` Meta-Tag im `<head>` ist Pflicht für Mobile
- **Breakpoints** sind Schwellenwerte, bei denen das Layout wechselt
- `prefers-color-scheme: dark` für automatischen Dark Mode

### Prüfungsfragen

1. Was ist der Unterschied zwischen Mobile First und Desktop First?
2. Schreibe eine Media Query für Bildschirme ab 768px Breite.
3. Wie macht man Bilder responsiv?
4. Was macht das viewport Meta-Tag?
5. Welche Media Query aktiviert Styles nur beim Drucken?

---

## 10. CSS Pseudoklassen & Pseudoelemente

### Verstehen

**Pseudoklassen** beschreiben den **Zustand** eines Elements (wird die Maus drübergeführt? Ist der Link besucht?). **Pseudoelemente** hingegen sprechen **Teile** eines Elements an oder fügen virtuellen Inhalt hinzu, ohne das HTML zu verändern. Beide werden mit einem oder zwei Doppelpunkten geschrieben und ermöglichen interaktive, dynamische Styles ohne JavaScript.

### Überblick

**Pseudoklassen (1 Doppelpunkt):**

| Pseudoklasse | Bedeutung |
|---|---|
| `:hover` | Maus über dem Element |
| `:focus` | Element ist fokussiert (z.B. Input) |
| `:active` | Element wird gerade geklickt |
| `:visited` | Link wurde besucht |
| `:first-child` | Erstes Kind-Element |
| `:last-child` | Letztes Kind-Element |
| `:nth-child(n)` | n-tes Kind (z.B. `2n` = gerade) |
| `:not(selektor)` | Alle AUSSER dem angegebenen |
| `:checked` | Checkbox/Radio ist ausgewählt |
| `:disabled` | Deaktiviertes Formular-Element |

**Pseudoelemente (2 Doppelpunkte):**

| Pseudoelement | Bedeutung |
|---|---|
| `::before` | Fügt Inhalt VOR dem Element ein |
| `::after` | Fügt Inhalt NACH dem Element ein |
| `::first-line` | Erste Zeile des Texts |
| `::first-letter` | Erster Buchstabe |
| `::placeholder` | Placeholder-Text von Inputs |
| `::selection` | Markierter Text |

```css
/* Hover-Effekt */
button:hover {
  background-color: darkblue;
  cursor: pointer;
}

/* Jede zweite Zeile einfärben */
tr:nth-child(even) {
  background-color: #f5f5f5;
}

/* Inhalt einfügen */
.preis::before {
  content: "CHF ";
}

/* Fokus-Stil für Barrierefreiheit */
input:focus {
  outline: 2px solid #0066cc;
}
```

### Kernaussagen

- **Pseudoklassen** (`:hover`, `:focus`, `:nth-child`) = Zustände
- **Pseudoelemente** (`::before`, `::after`) = virtuelle Teile des Elements
- `::before` und `::after` brauchen immer `content: ""` (auch wenn leer)
- `:nth-child(odd/even)` für alternierende Tabellenzeilen
- `:not()` ist mächtig für Ausnahmen: `li:not(:last-child) { border-bottom: 1px solid; }`
- `cursor: pointer` bei klickbaren Elementen setzen

### Prüfungsfragen

1. Was ist der Unterschied zwischen Pseudoklassen und Pseudoelementen?
2. Schreibe CSS, das jeden zweiten Listeneintrag grau einfärbt.
3. Wie fügt man mit CSS Text vor einem Element ein, ohne HTML zu ändern?
4. Was macht `:not()`-Selektor?
5. Warum ist `::before` ohne `content`-Eigenschaft unsichtbar?

---

## 11. CSS Transitions & Animationen

### Verstehen

CSS **Transitions** ermöglichen sanfte Übergänge zwischen zwei Zuständen (z.B. beim Hover). Sie sind einfach und performant, weil der Browser sie direkt mit der Grafikkarte berechnen kann. **Animations** (`@keyframes`) sind komplexer und erlauben mehrstufige Animationen mit vollständiger Kontrolle über Zwischenschritte. Für einfache Hover-Effekte reicht `transition`, für komplexe Animationen braucht man `@keyframes`.

### Überblick

**Transition:**

```css
.button {
  background-color: blue;
  transition: background-color 0.3s ease;
  /* transition: eigenschaft dauer timing-function verzögerung */
}

.button:hover {
  background-color: darkblue;
}

/* Mehrere Eigenschaften */
.card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}
```

**Timing-Functions:**

| Wert | Beschreibung |
|---|---|
| `ease` | Langsam, schnell, langsam (Standard) |
| `linear` | Konstante Geschwindigkeit |
| `ease-in` | Langsam starten |
| `ease-out` | Langsam enden |
| `ease-in-out` | Langsam starten und enden |

**Keyframe-Animation:**

```css
@keyframes einblenden {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.element {
  animation: einblenden 0.6s ease-out forwards;
  /* animation: name dauer timing fill-mode */
}

/* Mit Prozent-Zwischenwerten */
@keyframes pulsieren {
  0%   { transform: scale(1); }
  50%  { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.puls {
  animation: pulsieren 1.5s ease-in-out infinite;
}
```

**Transform-Funktionen (oft kombiniert):**

```css
transform: translateX(20px);   /* Horizontal verschieben */
transform: translateY(-10px);  /* Vertikal verschieben */
transform: scale(1.2);         /* Skalieren */
transform: rotate(45deg);      /* Drehen */
transform: skew(10deg);        /* Verzerren */
```

### Kernaussagen

- **`transition`**: Animiert Änderungen zwischen zwei Zuständen (z.B. `:hover`)
- **`@keyframes`**: Definiert mehrstufige Animationen
- **`animation`**: Wendet `@keyframes` an ein Element an
- `transform: translate/scale/rotate` ist performanter als `margin/top/left` zu animieren
- **`forwards`** behält den End-Zustand bei, `infinite` lässt Animation endlos laufen
- `transition: all` animiert alle änderbaren Eigenschaften – sparsam einsetzen

### Prüfungsfragen

1. Was ist der Unterschied zwischen `transition` und `animation`?
2. Schreibe eine Transition, die eine Schaltfläche beim Hover in 300ms farblich wechselt.
3. Was bedeutet `animation: name 1s ease infinite`?
4. Warum ist `transform: translateY()` performanter als `top` zu animieren?
5. Was macht `animation-fill-mode: forwards`?

---

## 12. Nützliche CSS-Tricks & Best Practices

### Verstehen

In der modernen Webentwicklung gibt es eine Reihe von wiederkehrenden Problemen und deren elegante Lösungen. CSS Custom Properties (Variablen) ermöglichen konsistente Designsysteme, `calc()` erlaubt mathematische Berechnungen und `overflow` kontrolliert verdeckten Inhalt. Diese Best Practices machen den Code wartbarer, lesbarer und professioneller.

### Überblick

**CSS Custom Properties (Variablen):**

```css
/* Variablen deklarieren (im :root = global) */
:root {
  --farbe-primaer: #0066cc;
  --farbe-text: #333;
  --abstand-gross: 32px;
  --radius: 8px;
}

/* Variablen verwenden */
.button {
  background-color: var(--farbe-primaer);
  border-radius: var(--radius);
  margin-bottom: var(--abstand-gross);
}
```

**`calc()` – Berechnungen:**

```css
.sidebar {
  width: calc(100% - 300px); /* Feste Breite abziehen */
}

.hero {
  height: calc(100vh - 80px); /* Minus Header-Höhe */
}
```

**Häufige Hilfsmittel:**

```css
/* Text abschneiden mit Ellipsis */
.titel {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Scroll-Verhalten */
html {
  scroll-behavior: smooth; /* Sanftes Scrollen bei Anker-Links */
}

/* Overlay / Schatten */
.karte {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Aspect Ratio */
.thumbnail {
  aspect-ratio: 16 / 9;
  object-fit: cover; /* Bild ausfüllen ohne Verzerrung */
}

/* Cursor */
.klickbar {
  cursor: pointer;
}

/* Unsichtbar aber im DOM */
.versteckt {
  visibility: hidden; /* nimmt noch Platz ein */
  /* oder: */
  display: none;      /* verschwindet komplett */
  /* oder: */
  opacity: 0;         /* unsichtbar, aber animierbar */
}
```

**CSS Reset (Empfehlung für jedes Projekt):**

```css
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, sans-serif;
  line-height: 1.5;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}
```

### Kernaussagen

- **CSS Variablen** (`--name: wert`) machen Designs konsistent und leicht änderbar
- **`calc()`** erlaubt gemischte Einheiten: `calc(100% - 80px)`
- `display: none` entfernt Element komplett; `visibility: hidden` behält Platz
- `object-fit: cover` füllt Container ohne Verzerrung aus
- `text-overflow: ellipsis` bricht überlangen Text mit `...` ab
- CSS Reset am Anfang jedes Projekts verhindert Browser-Inkonsistenzen

### Prüfungsfragen

1. Was ist der Vorteil von CSS Custom Properties gegenüber fixen Werten?
2. Was ist der Unterschied zwischen `display: none` und `visibility: hidden`?
3. Wie schneidet man einen zu langen Text mit `...` ab?
4. Was macht `object-fit: cover`?
5. Erkläre, wie `calc(100vh - 60px)` funktioniert.

---

## Abschlussübersicht

| # | Kapitel | Wichtigste Schlagworte |
|---|---|---|
| 1 | HTML Grundstruktur | `<!DOCTYPE>`, `<head>`, `<body>`, DOM, viewport |
| 2 | HTML Elemente & Tags | Block/Inline, semantisch, `<div>`, `<span>`, `<a>`, `<img>` |
| 3 | Formulare | `<form>`, GET/POST, `<input>`, `name`, `required` |
| 4 | CSS Selektoren | Spezifität, Kaskade, Klasse vs. ID, `!important` |
| 5 | Box-Modell | Content, Padding, Border, Margin, `box-sizing` |
| 6 | Farben & Schriften | HEX, RGBA, `rem`, `vw/vh`, `font-family` |
| 7 | Flexbox | `display: flex`, `justify-content`, `align-items`, `gap` |
| 8 | Grid | `display: grid`, `fr`, `repeat`, `minmax`, `grid-area` |
| 9 | Responsive Design | Media Queries, Mobile First, Breakpoints, viewport |
| 10 | Pseudoklassen/-elemente | `:hover`, `:nth-child`, `::before`, `::after` |
| 11 | Transitions & Animationen | `transition`, `@keyframes`, `transform`, `animation` |
| 12 | Best Practices | CSS Variablen, `calc()`, Reset, `object-fit`, `clip` |

---

> **Hinweis:** Dieses Lernheft deckt HTML & CSS ohne JavaScript ab. Für eine vollständige Webentwicklungs-Grundlage wäre ein separates Lernheft zu JavaScript (DOM-Manipulation, Events, Fetch API) sinnvoll.
