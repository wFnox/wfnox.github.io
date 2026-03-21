# Vektorgeometrie – Lernheft

**Fach:** Mathematik
**Thema:** Vektorgeometrie (Kapitel 4)
**Erstellt:** 21.03.2026

---

## 1. Was ist ein Vektor?

### Verstehen

In der Mathematik und Physik gibt es zwei Arten von Grössen: **skalare Grössen** wie Gewicht, Zeit oder Temperatur werden allein durch eine Zahl beschrieben. **Vektorielle Grössen** hingegen – wie Geschwindigkeit, Kraft oder Verschiebung – besitzen nicht nur eine Grösse, sondern auch eine **Richtung**. Ein Vektor ist ein mathematisches Objekt, das genau diese zwei Informationen vereint: Betrag und Richtung. Man stellt Vektoren als **Pfeile** dar, wobei die Länge des Pfeils den Betrag und die Richtung des Pfeils die Richtung des Vektors angibt. Entscheidend: Zwei Pfeile, die gleich lang und gleich ausgerichtet sind, stellen denselben Vektor dar – egal wo im Raum sie liegen (**Parallelverschiebung**).

### Überblick

| Begriff | Erklärung | Beispiel |
|---|---|---|
| **Skalare Grösse** | Nur durch eine Zahl beschreibbar | Gewicht, Zeit, Temperatur |
| **Vektorielle Grösse** | Zahl + Richtung nötig | Geschwindigkeit, Kraft, Verschiebung |
| **Vektor** $\vec{v}$ | Pfeil mit Länge (Betrag) und Richtung | Parallelverschiebung |
| **Nullvektor** $\vec{0}$ | Vektor mit Länge 0, keine Richtung | Startpunkt = Endpunkt |
| **Gegenvektor** $-\vec{v}$ | Gleiche Länge, entgegengesetzte Richtung | Umkehrung der Verschiebung |
| **Addition** $\vec{a} + \vec{b}$ | Pfeile aneinanderreihen (Anfang an Ende) | Gesamtverschiebung |
| **Subtraktion** $\vec{a} - \vec{b}$ | $\vec{a} + (-\vec{b})$ | Differenz zweier Verschiebungen |
| **Skalarmultiplikation** $r \cdot \vec{v}$ | Länge um Faktor $r$ strecken/stauchen | $2\vec{v}$ doppelt so lang, gleiche Richtung |

### Kernaussagen

- Ein **Vektor** ist eine gerichtete Grösse mit Länge und Richtung.
- Vektoren werden als **Pfeile** dargestellt; der Pfeil $\overrightarrow{AB}$ verbindet Anfangspunkt $A$ mit Endpunkt $B$.
- Vektoren können frei im Raum verschoben werden (**Parallelverschiebung**), solange Richtung und Länge gleich bleiben.
- **Addition:** Pfeile aneinanderreihen (Dreiecksmethode oder Parallelogrammmethode).
- **Gegenvektoren:** gleiche Länge, entgegengesetzte Richtung: $-\vec{v}$
- **Subtraktion:** $\vec{a} - \vec{b} = \vec{a} + (-\vec{b})$
- **Skalarmultiplikation** mit $r > 0$: Richtung gleich, Länge $r$-fach. Mit $r < 0$: Richtung umgekehrt. Mit $r = 0$: Nullvektor.
- Der **Nullvektor** $\vec{0}$ ist das neutrale Element der Vektoraddition.
- Wichtige Rechengesetze: Kommutativgesetz, Assoziativgesetz, Distributivgesetze (gelten für Vektoren).

### Prüfungsfragen

1. Was unterscheidet eine skalare von einer vektoriellen Grösse? Nenne je zwei Beispiele.
2. Erkläre, was es bedeutet, dass Vektoren als Parallelverschiebungen betrachtet werden können.
3. Wie konstruiert man geometrisch die Summe $\vec{a} + \vec{b}$ zweier Vektoren mit Pfeilen?
4. Was ist der Gegenvektor von $\vec{v}$, und was bedeutet er geometrisch?
5. Was ist der Nullvektor, und welche besondere Rolle spielt er bei der Vektoraddition?

---

## 2. Komponentenschreibweise von Vektoren

### Verstehen

Im Koordinatensystem lässt sich jeder Vektor eindeutig durch seine **Komponenten** beschreiben. Der **Ortsvektor** $\overrightarrow{OP}$ eines Punktes $P(p_1, p_2)$ ist der Vektor vom Ursprung $O$ zu diesem Punkt – seine Komponenten entsprechen direkt den Koordinaten des Punktes. Durch die Komponentenschreibweise werden alle Vektoroperationen (Addition, Subtraktion, Skalarmultiplikation) zu einfachen komponentenweisen Rechenoperationen. Zwei Vektoren sind **kollinear**, wenn einer ein skalares Vielfaches des anderen ist – sie zeigen also in dieselbe oder entgegengesetzte Richtung und liegen auf parallelen Geraden.

### Überblick

| Operation | Formel | Beispiel |
|---|---|---|
| **Schreibweise** | $\vec{v} = \begin{pmatrix} v_1 \\ v_2 \end{pmatrix}$ (2D) oder $\begin{pmatrix} v_1 \\ v_2 \\ v_3 \end{pmatrix}$ (3D) | $\begin{pmatrix} 3 \\ -2 \end{pmatrix}$ |
| **Addition** | $\vec{a} + \vec{b} = \begin{pmatrix} a_1 + b_1 \\ a_2 + b_2 \end{pmatrix}$ | $\begin{pmatrix} -2 \\ 2 \end{pmatrix} + \begin{pmatrix} 4 \\ -1 \end{pmatrix} = \begin{pmatrix} 2 \\ 1 \end{pmatrix}$ |
| **Subtraktion** | $\vec{a} - \vec{b} = \begin{pmatrix} a_1 - b_1 \\ a_2 - b_2 \end{pmatrix}$ | $\begin{pmatrix} 3 \\ -3 \end{pmatrix} - \begin{pmatrix} 2 \\ -1 \end{pmatrix} = \begin{pmatrix} 1 \\ -2 \end{pmatrix}$ |
| **Gegenvektoren** | $-\vec{v} = \begin{pmatrix} -v_1 \\ -v_2 \end{pmatrix}$ | $-\begin{pmatrix} -3 \\ 2 \end{pmatrix} = \begin{pmatrix} 3 \\ -2 \end{pmatrix}$ |
| **Skalarmultiplikation** | $r \cdot \vec{v} = \begin{pmatrix} r \cdot v_1 \\ r \cdot v_2 \end{pmatrix}$ | $3 \cdot \begin{pmatrix} -2.5 \\ -\pi \end{pmatrix} = \begin{pmatrix} -7.5 \\ -3\pi \end{pmatrix}$ |
| **Kollinearität** | $\vec{a} \parallel \vec{b}$, falls $\vec{a} = r \cdot \vec{b}$ für ein $r \in \mathbb{R}$ | $\begin{pmatrix} 4 \\ -2 \end{pmatrix}$ und $\begin{pmatrix} -5 \\ 2.5 \end{pmatrix}$: nicht kollinear |
| **Ortsvektor** | $\overrightarrow{OP} = \begin{pmatrix} p_1 \\ p_2 \end{pmatrix}$ (Koordinaten = Komponenten) | Punkt $P(3, -1)$ → $\overrightarrow{OP} = \begin{pmatrix} 3 \\ -1 \end{pmatrix}$ |

### Kernaussagen

- Jeder Vektor hat im Koordinatensystem eindeutige **Komponenten** (auch: Koordinaten des Vektors).
- Der **Ortsvektor** $\overrightarrow{OP}$ verbindet den **Ursprung** $O$ mit Punkt $P$ – Koordinaten von $P$ = Komponenten von $\overrightarrow{OP}$.
- Alle Vektoroperationen werden **komponentenweise** ausgeführt.
- Zwei Vektoren $\vec{a}$ und $\vec{b}$ sind **kollinear**, falls ein reelles $r$ existiert, sodass $\vec{a} = r \cdot \vec{b}$.
- Kollineare Vektoren sind **parallel** (oder antiparallel), d.h. sie zeigen in dieselbe oder entgegengesetzte Richtung.
- Im 3D-Raum hat jeder Vektor **drei Komponenten**: $\vec{v} = \begin{pmatrix} v_1 \\ v_2 \\ v_3 \end{pmatrix}$.

### Prüfungsfragen

1. Was ist ein Ortsvektor? Erkläre den Zusammenhang zwischen einem Punkt $P(x, y)$ und seinem Ortsvektor $\overrightarrow{OP}$.
2. Berechne: $\begin{pmatrix} 2 \\ -3 \end{pmatrix} + 3 \cdot \begin{pmatrix} -1 \\ 4 \end{pmatrix}$
3. Sind die Vektoren $\begin{pmatrix} 4 \\ -2 \end{pmatrix}$ und $\begin{pmatrix} -6 \\ 3 \end{pmatrix}$ kollinear? Begründe.
4. Was bedeutet es geometrisch, wenn zwei Vektoren kollinear sind?
5. Bestimme alle Vektoren, die kollinear zu $\vec{a} = \begin{pmatrix} 2 \\ -1 \end{pmatrix}$ sind und die gleiche Länge wie $\vec{a}$ haben.

---

## 3. Die Komponenten des Vektors $\overrightarrow{AB}$

### Verstehen

Während der Ortsvektor immer vom Ursprung ausgeht, verbindet $\overrightarrow{AB}$ zwei beliebige Punkte $A$ und $B$ im Raum. Die entscheidende Formel lautet: $\overrightarrow{AB} = \overrightarrow{OB} - \overrightarrow{OA}$, also Endpunkt minus Anfangspunkt (jeweils als Ortsvektor). Diese Formel ist fundamental für viele Anwendungen, etwa das Bestimmen fehlender Eckpunkte eines Parallelogramms oder das Finden von Mittelpunkten. Beim Parallelogramm $ABCD$ gilt: $\overrightarrow{AB} = \overrightarrow{DC}$, was direkt zur Berechnung des unbekannten Punktes $D$ führt.

### Überblick

| Aufgabentyp | Formel | Vorgehen |
|---|---|---|
| **Komponenten von** $\overrightarrow{AB}$ | $\overrightarrow{AB} = \overrightarrow{OB} - \overrightarrow{OA} = \begin{pmatrix} b_1 - a_1 \\ b_2 - a_2 \end{pmatrix}$ | Koordinaten Endpunkt − Koordinaten Anfangspunkt |
| **Fehlenden Punkt D** im Parallelogramm $ABCD$ finden | $\overrightarrow{AB} = \overrightarrow{DC}$ → $\overrightarrow{OD} = \overrightarrow{OC} - \overrightarrow{AB}$ | Aus Parallelogrammregel ableiten |
| **Mittelpunkt M** einer Strecke $\overline{AB}$ | $\overrightarrow{OM} = \overrightarrow{OA} + \frac{1}{2}\overrightarrow{AB} = \frac{1}{2}(\overrightarrow{OA} + \overrightarrow{OB})$ | Mittelwert der Koordinaten |
| **Punkt auf Strecke** (Verhältnis $t$) | $\overrightarrow{OP} = \overrightarrow{OA} + t \cdot \overrightarrow{AB}$ mit $0 \leq t \leq 1$ | Parameterdarstellung der Strecke |

**Beispiel Parallelogramm:** $A(2, 6)$, $B(-2, -1)$, $C(-3, 5)$ – finde $D$.
$$\overrightarrow{AB} = \begin{pmatrix} -4 \\ -7 \end{pmatrix}, \quad \overrightarrow{OD} = \overrightarrow{OC} - \overrightarrow{AB} = \begin{pmatrix} -3 \\ 5 \end{pmatrix} - \begin{pmatrix} -4 \\ -7 \end{pmatrix} = \begin{pmatrix} 1 \\ 12 \end{pmatrix} \Rightarrow D(1, 12)$$

### Kernaussagen

- **Schlüsselformel:** $\overrightarrow{AB} = \overrightarrow{OB} - \overrightarrow{OA}$ (Endpunkt − Anfangspunkt als Ortsvektoren).
- Im Koordinatensystem: Komponente $= $ Koordinate Endpunkt $-$ Koordinate Anfangspunkt.
- Beim **Parallelogramm** $ABCD$ gilt stets: $\overrightarrow{AB} = \overrightarrow{DC}$ und $\overrightarrow{AD} = \overrightarrow{BC}$.
- **Mittelpunkt** $M$ der Strecke $\overline{AB}$: $M = \left(\frac{a_1+b_1}{2},\ \frac{a_2+b_2}{2}\right)$.
- Im 3D-Raum gilt dieselbe Formel mit drei Komponenten.

### Prüfungsfragen

1. Gegeben $A(-4, 3)$ und $B(2, -1)$. Bestimme $\overrightarrow{AB}$ und $\overrightarrow{BA}$.
2. Gegeben das Parallelogramm $ABCD$ mit $A(0, -2)$, $B(4, 1)$, $C(3, 5)$. Finde den fehlenden Punkt $D$.
3. Erkläre, wie man den Mittelpunkt $M$ der Strecke $\overline{AB}$ mit Vektoren berechnet. Gib die Formel an.
4. Beweise mithilfe von Vektoren, dass $ABCD$ ein Parallelogramm ist, wenn $\overrightarrow{AB} = \overrightarrow{DC}$.
5. Gegeben $A(1, -2, 3)$ und $B(4, 0, -1)$ im Raum. Bestimme den Mittelpunkt $M$ der Strecke $\overline{AB}$.

---

## 4. Der Betrag eines Vektors

### Verstehen

Der **Betrag** eines Vektors ist seine geometrische Länge und wird mit $||\vec{v}||$ bezeichnet. Er berechnet sich direkt aus den Komponenten über den Satz des Pythagoras: Im 2D ist $||\vec{v}|| = \sqrt{v_1^2 + v_2^2}$, im 3D $||\vec{v}|| = \sqrt{v_1^2 + v_2^2 + v_3^2}$. Ein **Einheitsvektor** ist ein Vektor mit Betrag 1 – er beschreibt nur noch die Richtung, ohne Aussage über die Länge. Jeden Vektor kann man durch Division durch seinen Betrag in einen Einheitsvektor umwandeln: $\hat{v} = \frac{\vec{v}}{||\vec{v}||}$. Dies ist z.B. nützlich, um einen kollinearen Vektor einer bestimmten gewünschten Länge zu konstruieren.

### Überblick

| Begriff | Formel | Erklärung |
|---|---|---|
| **Betrag** (2D) | $||\vec{v}|| = \sqrt{v_1^2 + v_2^2}$ | Pythagoras in der Ebene |
| **Betrag** (3D) | $||\vec{v}|| = \sqrt{v_1^2 + v_2^2 + v_3^2}$ | Pythagoras im Raum |
| **Einheitsvektor** | $||\vec{v}|| = 1$ | Vektor mit Länge 1 |
| **Normierung** | $\hat{v} = \frac{1}{||\vec{v}||} \cdot \vec{v}$ | Richtungsvektor der Länge 1 |
| **Vektor der Länge** $L$ in Richtung $\vec{v}$ | $L \cdot \frac{\vec{v}}{||\vec{v}||}$ | Normieren, dann skalieren |
| **Fehlende Komponente** bei gegebenem Betrag | Gleichung aufstellen und lösen | $\sqrt{v_1^2 + v_2^2} = c \Rightarrow v_2 = \pm\sqrt{c^2 - v_1^2}$ |

**Beispiele:**

$\vec{v} = \begin{pmatrix} -3 \\ 6 \end{pmatrix}$: $\ ||\vec{v}|| = \sqrt{9 + 36} = \sqrt{45} \approx 6.71$

Einheitsvektor zu $\vec{a} = \begin{pmatrix} 4 \\ 0 \\ 0 \end{pmatrix}$: $\ \hat{a} = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}$ ✓ (da $||a|| = 4$, teile durch 4)

Kollinearer Vektor zu $\vec{v}$ mit Länge 15: $\quad 15 \cdot \frac{\vec{v}}{||\vec{v}||}$

### Kernaussagen

- Der **Betrag** $||\vec{v}||$ ist die **Länge** des Vektors (immer $\geq 0$).
- **Formel 2D:** $||\vec{v}|| = \sqrt{v_1^2 + v_2^2}$ (Pythagoras).
- **Formel 3D:** $||\vec{v}|| = \sqrt{v_1^2 + v_2^2 + v_3^2}$.
- **Einheitsvektor:** Betrag = 1; Berechnung: $\hat{v} = \frac{\vec{v}}{||\vec{v}||}$.
- Durch Multiplikation des Einheitsvektors mit einer Länge $L$ erhält man einen zu $\vec{v}$ **kollinearen Vektor der Länge** $L$.
- Bei der **fehlenden Komponente:** Betrag-Gleichung aufstellen → quadrieren → auflösen → $\pm$ beachten.
- Skalarmultiplikation skaliert den Betrag: $||r \cdot \vec{v}|| = |r| \cdot ||\vec{v}||$.

### Prüfungsfragen

1. Berechne den Betrag von $\vec{v} = \begin{pmatrix} 5 \\ -12 \end{pmatrix}$ und von $\vec{w} = \begin{pmatrix} 2 \\ -3 \\ 6 \end{pmatrix}$.
2. Bestimme den Einheitsvektor in Richtung von $\vec{a} = \begin{pmatrix} 3 \\ -4 \end{pmatrix}$.
3. Der Betrag des Vektors $\vec{v} = \begin{pmatrix} 6 \\ v_2 \end{pmatrix}$ beträgt 10. Bestimme alle möglichen Werte von $v_2$.
4. Finde alle Vektoren, die kollinear zu $\vec{u} = \begin{pmatrix} 1 \\ -2 \\ 2 \end{pmatrix}$ sind und die Länge 6 haben.
5. Zwei Autos fahren vom selben Punkt los. Auto 1 mit Geschwindigkeit $\vec{v}_1 = \begin{pmatrix} 80 \\ -60 \end{pmatrix}$ km/h, Auto 2 mit $\vec{v}_2 = \begin{pmatrix} 60 \\ 80 \end{pmatrix}$ km/h. Wie weit ist Auto 1 nach 3 Stunden vom Startpunkt entfernt?

---

## 5. Abschlussübersicht

| Kapitel | Schlüsselbegriffe | Kernformel |
|---|---|---|
| **1. Was ist ein Vektor?** | Vektor, Pfeil, Parallelverschiebung, Betrag, Richtung, Gegenvektoren, Addition, Skalarmultiplikation, Nullvektor | $\vec{a} - \vec{b} = \vec{a} + (-\vec{b})$ |
| **2. Komponentenschreibweise** | Komponenten, Ortsvektor, Kollinearität, komponentenweise Rechnung | $\vec{a} \parallel \vec{b} \Leftrightarrow \vec{a} = r \cdot \vec{b}$ |
| **3. Vektor** $\overrightarrow{AB}$ | Anfangspunkt, Endpunkt, Parallelogramm, Mittelpunkt, Diagonale | $\overrightarrow{AB} = \overrightarrow{OB} - \overrightarrow{OA}$ |
| **4. Betrag** | Betrag, Länge, Einheitsvektor, Normierung, fehlende Komponente | $\|\vec{v}\| = \sqrt{v_1^2 + v_2^2 + v_3^2}$ |

---

> **Tipp für die Prüfung:** Die meisten Aufgaben kombinieren mehrere Konzepte. Bei Parallelogramm-Aufgaben: immer zuerst $\overrightarrow{AB} = \overrightarrow{OB} - \overrightarrow{OA}$ anwenden. Bei Kollinearitätsprüfungen: Verhältnisse der Komponenten vergleichen. Bei Einheitsvektoren: zuerst Betrag berechnen, dann dividieren.
