# Funktionen – Lernheft

**Fach:** Mathematik  
**Thema:** Kapitel 3 – Funktionen (Zuordnungen, Lineare Funktionen, Geraden, Schnittpunkte)  
**Erstellt:** 21.03.2026

---

## 1. Zuordnungen und Funktionen

### Verstehen

Eine **Zuordnung** beschreibt ganz allgemein, wie jedem Element einer Ausgangsmenge ein Element (oder mehrere) einer Zielmenge zugewiesen wird. Nicht jede Zuordnung ist jedoch eine Funktion: Eine Zuordnung ist genau dann eine **Funktion**, wenn jedem Element der Definitionsmenge *genau ein* Element der Wertemenge zugeordnet wird. Im Alltag begegnen uns Funktionen ständig – z. B. die Temperatur als Funktion der Tageszeit, oder der Benzinpreis als Funktion der getankten Literzahl. Der **Vertikale-Linien-Test** (auch: Senkrechtentest) ist ein praktisches Mittel: Schneidet eine senkrechte Linie den Graphen in mehr als einem Punkt, handelt es sich nicht um eine Funktion.

### Überblick

| Begriff | Bedeutung | Beispiel |
|---|---|---|
| **Zuordnung** | Allgemeine Abbildung von einer Menge in eine andere | Jedem Schüler wird eine Note zugeordnet |
| **Funktion** | Jeder Eingabe wird genau eine Ausgabe zugeordnet | f(x) = 2x + 1 |
| **Definitionsmenge D** | Alle erlaubten Eingabewerte (x-Werte) | D = ℝ, D = [0; ∞) |
| **Wertemenge W** | Alle möglichen Ausgabewerte (y-Werte) | W = ℝ, W = [0; ∞) |
| **Graph** | Visuelle Darstellung aller Punkte (x; f(x)) | Parabel, Gerade, Kurve |
| **Vertikaler Linientest** | Prüft, ob ein Graph eine Funktion darstellt | Kein Punkt darf doppelt getroffen werden |

### Kernaussagen

- Eine **Funktion** ordnet jedem x-Wert aus D **genau einen** y-Wert zu.
- Schreibweise: f: D → W, x ↦ f(x)
- Der **Vertikale-Linien-Test**: Schneidet eine senkrechte Gerade den Graphen in mehr als einem Punkt → **keine Funktion**.
- Ein Kreis, eine Ellipse oder eine nach links/rechts liegende Parabel sind **keine Funktionen**.
- Ein Graph muss den Test für **alle** x-Werte bestehen.

### Prüfungsfragen

1. Erkläre in eigenen Worten, warum ein Kreis keine Funktion darstellt.
2. Welche der folgenden Graphen stellen eine Funktion dar – und warum: eine Parabel, ein Kreis, eine Sinuskurve?
3. Skizziere eine Zuordnung, die keine Funktion ist, und eine, die eine Funktion ist.
4. Was versteht man unter dem **Vertikalen-Linien-Test**? Wende ihn auf einen konkreten Graphen an.
5. Gegeben ist eine Tabelle mit x- und y-Werten. Wie erkennst du, ob sie eine Funktion darstellt?

---

## 2. Reelle Funktionen – Definitionsbereich und Wertetabellen

### Verstehen

Eine **reelle Funktion** ist eine Funktion, deren Definitions- und Wertemenge Teilmengen der reellen Zahlen ℝ sind. Der **Definitionsbereich D** gibt an, welche x-Werte die Funktion überhaupt annehmen darf – er wird durch die Funktionsvorschrift eingeschränkt. Bei Wurzelfunktionen darf der Ausdruck unter der Wurzel nicht negativ sein; bei Brüchen darf der Nenner nicht null werden. Eine **Wertetabelle** ist ein strukturiertes Werkzeug, um ausgewählte Punkte einer Funktion zu berechnen und anschliessend den Graphen zu skizzieren.

### Überblick

| Funktionstyp | Einschränkung des Definitionsbereichs | Beispiel |
|---|---|---|
| **Polynomfunktion** | Keine – D = ℝ | f(x) = x² + 3x − 1 |
| **Wurzelfunktion** | Ausdruck unter Wurzel ≥ 0 | f(x) = √(x − 2) → D = [2; ∞) |
| **Gebrochenrationale Funktion** | Nenner ≠ 0 | f(x) = 1/(x−3) → D = ℝ \ {3} |
| **Kombiniert** | Beide Bedingungen gelten | f(x) = √(x)/(x−1) → D = [0;∞) \ {1} |

**Beispiel einer Wertetabelle** für f(x) = x² − 1:

| x | −2 | −1 | 0 | 1 | 2 |
|---|---|---|---|---|---|
| f(x) | 3 | 0 | −1 | 0 | 3 |

### Kernaussagen

- Schreibweise des Definitionsbereichs: D = ℝ, D = [a; b], D = (a; ∞), D = ℝ \ {c}
- **Wurzel**: Bedingung → Ausdruck ≥ 0 aufstellen und lösen.
- **Nenner**: Bedingung → Nenner ≠ 0, entsprechende x-Werte ausschliessen.
- Wertetabelle: Mehrere x-Werte einsetzen, f(x) berechnen, Punkte ins Koordinatensystem eintragen.
- **Notation**: D = [2; ∞) bedeutet x ≥ 2; runde Klammern bedeuten ausgeschlossen.

### Prüfungsfragen

1. Bestimme den Definitionsbereich von f(x) = √(3x − 6).
2. Bestimme den Definitionsbereich von g(x) = 1 / (x² − 4).
3. Erstelle eine Wertetabelle für f(x) = −x² + 4 mit x ∈ {−2, −1, 0, 1, 2} und skizziere den Graphen.
4. Warum ist der Definitionsbereich von h(x) = √(x) / (x − 1) nicht einfach D = [0; ∞)?
5. Bestimme den Definitionsbereich von f(x) = √(4 − x²).

---

## 3. Nullstellen von Funktionen

### Verstehen

Eine **Nullstelle** ist ein x-Wert, für den die Funktion den Wert 0 annimmt, also f(x₀) = 0. Graphisch entspricht eine Nullstelle dem Schnittpunkt des Graphen mit der x-Achse. Das Bestimmen von Nullstellen ist eine zentrale Technik, die in vielen Kontexten auftaucht – von der einfachen linearen Gleichung bis hin zur quadratischen Formel (**abc-Formel** oder **Lösungsformel**).

### Überblick

| Funktionstyp | Vorgehen | Formel / Methode |
|---|---|---|
| **Linear**: f(x) = mx + b | f(x) = 0 setzen, x lösen | x = −b/m |
| **Quadratisch**: f(x) = ax² + bx + c | Lösungsformel anwenden | x = (−b ± √(b²−4ac)) / (2a) |
| **Faktorisiert**: f(x) = (x−a)(x−b) | Jeden Faktor = 0 | x = a oder x = b |
| **Wurzel**: z. B. √(x−2) = 0 | Gleichung lösen | x = 2 |

### Kernaussagen

- **Nullstelle** x₀: f(x₀) = 0 → Schnittpunkt mit der x-Achse.
- Eine lineare Funktion hat genau **eine** Nullstelle (ausser m = 0).
- Eine quadratische Funktion kann **0, 1 oder 2** Nullstellen haben → Diskriminante D = b² − 4ac.
  - D > 0: zwei Nullstellen
  - D = 0: eine Nullstelle (Berührpunkt)
  - D < 0: keine reelle Nullstelle
- **Lösungsformel**: x = (−b ± √(b² − 4ac)) / (2a)

### Prüfungsfragen

1. Bestimme die Nullstelle(n) von f(x) = 2x − 8.
2. Bestimme die Nullstellen von g(x) = x² − 5x + 6.
3. Hat h(x) = x² + 2x + 5 reelle Nullstellen? Begründe mit der Diskriminante.
4. Bestimme die Nullstellen von f(x) = (x − 3)(x + 1)(x − 2).
5. Wie viele Nullstellen hat eine quadratische Funktion, deren Graph die x-Achse berührt, aber nicht schneidet?

---

## 4. Lineare Funktionen – Steigung und y-Achsenabschnitt

### Verstehen

Eine **lineare Funktion** hat die Form f(x) = mx + b und beschreibt eine **Gerade** im Koordinatensystem. Die Konstante **m** ist die **Steigung** und gibt an, um wie viel der y-Wert zunimmt (oder abnimmt), wenn x um 1 erhöht wird. Der Wert **b** ist der **y-Achsenabschnitt** – dort schneidet die Gerade die y-Achse (d. h. bei x = 0). Eine positive Steigung bedeutet eine steigende Gerade, eine negative eine fallende. Bei m = 0 erhält man eine horizontale Gerade.

### Überblick

| Parameter | Bedeutung | Beispiel |
|---|---|---|
| **m > 0** | Steigende Gerade | f(x) = 2x + 1 |
| **m < 0** | Fallende Gerade | f(x) = −3x + 4 |
| **m = 0** | Waagrechte Gerade | f(x) = 5 |
| **b > 0** | Schneidet y-Achse oberhalb des Ursprungs | f(x) = x + 3 |
| **b = 0** | Gerade durch den Ursprung | f(x) = 2x |
| **b < 0** | Schneidet y-Achse unterhalb des Ursprungs | f(x) = x − 4 |

**Steigung berechnen aus zwei Punkten P₁(x₁; y₁) und P₂(x₂; y₂):**

$$m = \frac{y_2 - y_1}{x_2 - x_1} = \frac{\Delta y}{\Delta x}$$

### Kernaussagen

- **Normalform**: f(x) = **m**x + **b**
- **Steigung m**: m = Δy / Δx (Höhenänderung / Horizontale Änderung)
- **y-Achsenabschnitt b**: f(0) = b
- **Nullstelle** der linearen Funktion: x₀ = −b / m (für m ≠ 0)
- Graph einer linearen Funktion ist immer eine **Gerade** und hat D = ℝ.
- Zwei verschiedene Punkte bestimmen eindeutig eine Gerade → Gleichungssystem aufstellen.

### Prüfungsfragen

1. Bestimme Steigung und y-Achsenabschnitt von f(x) = −3x + 7.
2. Skizziere die Gerade f(x) = 2x − 4 ohne Wertetabelle. Beschreibe dein Vorgehen.
3. Bestimme die Nullstelle der Funktion f(x) = 5x − 15.
4. Eine Gerade verläuft durch P₁(1; 3) und P₂(4; 9). Bestimme ihre Funktionsgleichung.
5. Warum genügen zwei Punkte, um eine Gerade eindeutig zu bestimmen?

---

## 5. Geradengleichungen – Aufstellen und Anwenden

### Verstehen

Es gibt verschiedene Formen, eine Geradengleichung darzustellen. Die **Normalform** f(x) = mx + b ist die gebräuchlichste für Funktionen. Die **allgemeine Geradengleichung** ax + by + c = 0 erlaubt auch senkrechte Geraden darzustellen (bei b = 0). Um die Gleichung einer Geraden aus zwei gegebenen Punkten zu bestimmen, berechnet man zuerst die Steigung m und setzt dann einen der Punkte ein, um b zu finden. In Textaufgaben beschreibt eine lineare Funktion oft proportionale oder lineare Zusammenhänge, z. B. Kosten, Geschwindigkeiten oder Temperaturverläufe.

### Überblick

| Form | Gleichung | Anwendung |
|---|---|---|
| **Normalform** | f(x) = mx + b | Standard, wenn Steigung und Achsenabschnitt bekannt |
| **Zwei-Punkte-Form** | m = (y₂−y₁)/(x₂−x₁), dann b bestimmen | Wenn zwei Punkte gegeben sind |
| **Allgemeine Form** | ax + by + c = 0 | Erlaubt auch senkrechte Geraden |
| **Punkt-Steigungs-Form** | y − y₁ = m(x − x₁) | Wenn Steigung und ein Punkt bekannt sind |

**Vorgehen: Gerade durch zwei Punkte bestimmen**

1. Steigung berechnen: m = (y₂ − y₁) / (x₂ − x₁)
2. Einen Punkt einsetzen: y₁ = m · x₁ + b → b lösen
3. Gleichung aufschreiben: f(x) = mx + b

### Kernaussagen

- **Umformen** der allgemeinen Form in Normalform: ax + by = −c → y = (−a/b)x + (−c/b)
- Geradengleichung aus zwei Punkten: Schritt für Schritt (m berechnen → b bestimmen).
- **Textaufgaben**: Zuordnung erkennen → Punkte (x; y) bestimmen → Gerade aufstellen.
- Jede lineare Gleichung der Form y = mx + b beschreibt eine Gerade mit D = ℝ.

### Prüfungsfragen

1. Bestimme die Gleichung der Geraden durch A(2; 5) und B(6; 13).
2. Forme die Gleichung 3x − 2y + 8 = 0 in die Normalform um.
3. Ein Taxi kostet 3 CHF Grundgebühr und 2.50 CHF pro Kilometer. Stelle eine lineare Funktion auf und berechne, wann die Fahrt 18 CHF kostet.
4. Zwei Geraden haben die gleiche Steigung, aber unterschiedliche y-Achsenabschnitte. Was kann man über deren Lage sagen?
5. Bestimme b, wenn die Gerade f(x) = 4x + b durch den Punkt P(3; 10) verläuft.

---

## 6. Schnittpunkt zweier Geraden

### Verstehen

Der **Schnittpunkt** zweier Geraden ist der Punkt, an dem beide Geraden denselben x- und y-Wert haben. **Algebraisch** findet man ihn, indem man die beiden Funktionsgleichungen gleichsetzt: f(x) = g(x) und nach x löst – dieses x ist die x-Koordinate des Schnittpunkts. **Graphisch** ist der Schnittpunkt der Kreuzungspunkt der beiden Geraden. Parallel verlaufende Geraden (gleiche Steigung, verschiedene b) haben **keinen** Schnittpunkt; identische Geraden haben **unendlich viele** Schnittpunkte.

### Überblick

| Situation | Erkennbar an | Anzahl Schnittpunkte |
|---|---|---|
| **Zwei verschiedene Geraden, m₁ ≠ m₂** | Unterschiedliche Steigungen | Genau 1 |
| **Parallele Geraden** | m₁ = m₂, b₁ ≠ b₂ | 0 |
| **Identische Geraden** | m₁ = m₂, b₁ = b₂ | ∞ (unendlich viele) |

**Vorgehen algebraisch:**

1. f(x) = g(x) setzen: m₁x + b₁ = m₂x + b₂
2. x lösen → x-Koordinate des Schnittpunkts
3. x in eine der Gleichungen einsetzen → y-Koordinate bestimmen
4. Schnittpunkt S(x; y) angeben

### Kernaussagen

- **Schnittpunkt** S: f(x_S) = g(x_S) → Gleichsetzen und lösen.
- x und y des Schnittpunkts immer als **Koordinatenpaar S(x; y)** angeben.
- Gleiche Steigung → parallel → **kein Schnittpunkt** (ausser identisch).
- Schnittpunkt kann auch als Lösung eines **linearen Gleichungssystems** interpretiert werden.

### Prüfungsfragen

1. Bestimme den Schnittpunkt von f(x) = 2x + 1 und g(x) = −x + 7.
2. Haben f(x) = 3x − 2 und g(x) = 3x + 5 einen Schnittpunkt? Begründe.
3. Bestimme den Schnittpunkt von f(x) = 0.5x + 4 und g(x) = −2x − 1.
4. Skizziere zwei Geraden mit genau einem Schnittpunkt und zwei parallele Geraden ohne Schnittpunkt.
5. Zwei Geraden schneiden sich im Punkt S(3; 7). Gerade f hat Steigung 2. Bestimme die Gleichung von f.

---

## 7. Schnittwinkel zweier Geraden

### Verstehen

Der **Schnittwinkel** α ist der Winkel, den zwei sich schneidende Geraden einschliessen. Er lässt sich mit den Steigungen m₁ und m₂ berechnen. Die Formel nutzt den Tangens des Winkels: tan(α) = |m₁ − m₂| / (1 + m₁ · m₂). Das Ergebnis ist der **spitze** Winkel (≤ 90°). Falls 1 + m₁ · m₂ = 0 gilt, sind die Geraden senkrecht zueinander und der Schnittwinkel beträgt genau 90°.

### Überblick

| Situation | Bedingung | Schnittwinkel |
|---|---|---|
| **Allgemeine Geraden** | m₁ ≠ m₂ | tan(α) = \|m₁ − m₂\| / (1 + m₁ · m₂) |
| **Senkrechte Geraden** | m₁ · m₂ = −1 | α = 90° |
| **Parallele Geraden** | m₁ = m₂ | Kein Schnittwinkel (kein Schnittpunkt) |

**Formel für den Schnittwinkel:**

$$\tan(\alpha) = \left| \frac{m_1 - m_2}{1 + m_1 \cdot m_2} \right|$$

→ α = arctan(...) mit dem Taschenrechner berechnen.

### Kernaussagen

- **Schnittwinkel-Formel**: tan(α) = |m₁ − m₂| / (1 + m₁ · m₂)
- Immer den **Betrag** nehmen → der spitze Winkel wird berechnet.
- Wenn 1 + m₁ · m₂ = 0 → α = **90°** (senkrecht).
- Das Ergebnis mit **arctan** in Grad umrechnen.

### Prüfungsfragen

1. Berechne den Schnittwinkel von f(x) = 2x + 1 und g(x) = −x + 4.
2. Zwei Geraden haben die Steigungen m₁ = 3 und m₂ = −1/3. Sind sie senkrecht zueinander?
3. Welche Bedingung müssen die Steigungen zweier Geraden erfüllen, damit sie einen Schnittwinkel von 90° bilden?
4. Berechne den Schnittwinkel von f(x) = 0.5x und g(x) = 3x + 1.
5. Erkläre, warum die Formel für den Schnittwinkel den Betrag verwendet.

---

## 8. Senkrechte Geraden

### Verstehen

Zwei Geraden stehen **senkrecht** aufeinander (orthogonal), wenn das Produkt ihrer Steigungen −1 ergibt: m₁ · m₂ = −1. Das bedeutet: Die Steigung der senkrechten Geraden ist der **negative Kehrwert** der ursprünglichen Steigung. Hat eine Gerade die Steigung m, so hat die senkrechte Gerade die Steigung −1/m. Eine besondere Situation sind senkrechte Geraden der Form x = c (parallele Geraden zur y-Achse), die gar keine Steigung haben und senkrecht auf der x-Achse stehen.

### Überblick

| Gegebene Gerade | Steigung der Senkrechten | Beispiel |
|---|---|---|
| f(x) = 2x + b | m⊥ = −1/2 | g(x) = −½x + b |
| f(x) = −3x + b | m⊥ = 1/3 | g(x) = ⅓x + b |
| f(x) = ½x + b | m⊥ = −2 | g(x) = −2x + b |
| f(x) = 4x + b | m⊥ = −¼ | g(x) = −¼x + b |

**Vorgehen: Senkrechte Gerade durch einen gegebenen Punkt bestimmen**

1. Steigung der gegebenen Gerade ablesen: m₁
2. Senkrechte Steigung berechnen: m₂ = −1/m₁
3. Punkt P(x₀; y₀) einsetzen: y₀ = m₂ · x₀ + b → b lösen
4. Gleichung aufschreiben: g(x) = m₂x + b

### Kernaussagen

- **Bedingung für Senkrechtstehen**: m₁ · m₂ = **−1**
- Steigung der Senkrechten: m₂ = **−1/m₁** (negativer Kehrwert)
- An den Funktionsgleichungen erkennbar: Produkt der Steigungen = −1.
- Senkrechte Gerade durch einen Punkt: m₂ berechnen → Punkt einsetzen → b bestimmen.
- Horizontale Geraden (m = 0) stehen senkrecht auf vertikalen Geraden (x = c).

### Prüfungsfragen

1. Bestimme die Gleichung der Geraden, die senkrecht zu f(x) = 3x − 2 ist und durch P(1; 4) verläuft.
2. Sind f(x) = 2x + 5 und g(x) = −0.5x − 3 senkrecht zueinander? Begründe.
3. Welche Steigung hat eine Gerade, die senkrecht zu h(x) = −⅔x + 1 steht?
4. Bestimme die senkrechte Gerade zu f(x) = 4x durch den Ursprung.
5. Erkläre mithilfe eines Beispiels, was der "negative Kehrwert" der Steigung bedeutet.

---

## Abschlussübersicht

| Kapitel | Wichtigste Schlagworte |
|---|---|
| 1. Zuordnungen und Funktionen | Funktion, Zuordnung, Vertikaler Linientest, D, W |
| 2. Reelle Funktionen | Definitionsbereich, Wertetabelle, Wurzel, Nenner ≠ 0 |
| 3. Nullstellen | Nullstelle, f(x) = 0, Diskriminante, Lösungsformel |
| 4. Lineare Funktionen | f(x) = mx + b, Steigung m, y-Achsenabschnitt b, Gerade |
| 5. Geradengleichungen | Normalform, Zwei-Punkte-Form, Textaufgaben, Umformen |
| 6. Schnittpunkt | Gleichsetzen, f(x) = g(x), Koordinaten S(x; y) |
| 7. Schnittwinkel | tan(α)-Formel, arctan, 90°-Bedingung |
| 8. Senkrechte Geraden | m₁ · m₂ = −1, negativer Kehrwert, Orthogonalität |

---

> **Hinweis zum Quellmaterial:** Das Skript liegt als Bildseite vor – einige Übungsaufgaben und Lösungswege konnten nicht vollständig extrahiert werden. Der Theorieteil und alle Lernziele aus dem Wiederholungsblatt sind vollständig abgedeckt. Bei den Formeln empfiehlt sich die Überprüfung mit dem Originalheft.
