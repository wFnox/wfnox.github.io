# Potenzen, Wurzeln und Polynome – Lernheft

**Fach:** Mathematik
**Thema:** Kapitel 5 – Potenzen, Wurzeln, wissenschaftliche Notation, Polynome, Faktorisierung, rationale Brüche
**Erstellt:** 20.03.2026

---

## 1. Potenzen mit ganzen Exponenten

### Verstehen

Eine **Potenz** ist eine verkürzte Schreibweise für eine wiederholte Multiplikation: Statt $a \cdot a \cdot a$ schreibt man $a^3$. Die Basis $a$ wird dabei $n$-mal mit sich selbst multipliziert, wobei $n$ der **Exponent** ist. Entscheidend für das Gymnasium ist, dass der Exponent auch null oder negativ sein kann: $a^0 = 1$ (für $a \neq 0$) und $a^{-n} = \frac{1}{a^n}$. Ein negativer Exponent bedeutet also nicht eine negative Zahl, sondern einen Kehrwert.

### Überblick

| Ausdruck | Bedeutung | Beispiel |
|---|---|---|
| $a^n$ ($n > 0$) | $a \cdot a \cdot \ldots \cdot a$ ($n$-mal) | $2^4 = 16$ |
| $a^0$ | $= 1$ (für $a \neq 0$) | $5^0 = 1$ |
| $a^{-n}$ | $= \dfrac{1}{a^n}$ | $2^{-3} = \dfrac{1}{8}$ |
| $(-a)^n$, $n$ gerade | positiv | $(-3)^2 = 9$ |
| $(-a)^n$, $n$ ungerade | negativ | $(-3)^3 = -27$ |
| $-a^n$ | $-(a^n)$, immer negativ | $-3^2 = -9$ |

### Kernaussagen ✔

- **Basis** $a$, **Exponent** $n$: $a^n = \underbrace{a \cdot a \cdots a}_{n\text{-mal}}$
- $a^0 = 1$ gilt für alle $a \neq 0$
- $a^{-n} = \dfrac{1}{a^n}$ – negativer Exponent = Kehrwert der Potenz
- Achtung: $(-a)^n \neq -a^n$ – die Klammer macht den Unterschied!
- $0^0$ ist **nicht definiert**

### Prüfungsfragen

1. Was bedeutet $3^{-2}$ und wie berechnet man es?
→ *$3^{-2} = \frac{1}{3^2} = \frac{1}{9}$. Ein negativer Exponent kehrt die Basis in einen Bruch um.*

2. Was ist der Unterschied zwischen $(-4)^2$ und $-4^2$?
→ *$(-4)^2 = 16$, weil die Basis $-4$ quadriert wird. $-4^2 = -(4^2) = -16$, weil nur $4$ quadriert und das Minus nachträglich angehängt wird.*

---

## 2. Potenzgesetze

### Verstehen

Die **Potenzgesetze** ermöglichen es, Potenzen effizient umzuformen, ohne sie auszurechnen. Sie gelten für alle ganzen Exponenten und sind die Grundlage für das Vereinfachen von algebraischen Ausdrücken. Wichtig: Die Gesetze für Produkte und Quotienten (gleiches $a$, verschiedene Exponenten) dürfen nicht mit den Gesetzen für gleiche Exponenten (verschiedene Basen) verwechselt werden.

### Überblick

| Gesetz | Formel | Beispiel |
|---|---|---|
| **Produktregel** (gleiche Basis) | $a^m \cdot a^n = a^{m+n}$ | $2^3 \cdot 2^4 = 2^7 = 128$ |
| **Quotientenregel** (gleiche Basis) | $\dfrac{a^m}{a^n} = a^{m-n}$ | $\dfrac{5^6}{5^2} = 5^4 = 625$ |
| **Potenz einer Potenz** | $(a^m)^n = a^{m \cdot n}$ | $(3^2)^4 = 3^8$ |
| **Produkt, gleicher Exponent** | $(a \cdot b)^n = a^n \cdot b^n$ | $(2 \cdot 3)^3 = 8 \cdot 27$ |
| **Quotient, gleicher Exponent** | $\left(\dfrac{a}{b}\right)^n = \dfrac{a^n}{b^n}$ | $\left(\dfrac{2}{3}\right)^2 = \dfrac{4}{9}$ |

### Kernaussagen ✔

- **Gleiche Basis, Multiplikation**: Exponenten addieren → $a^m \cdot a^n = a^{m+n}$
- **Gleiche Basis, Division**: Exponenten subtrahieren → $\frac{a^m}{a^n} = a^{m-n}$
- **Potenz einer Potenz**: Exponenten multiplizieren → $(a^m)^n = a^{m \cdot n}$
- **Gleicher Exponent**: Basis auseinandernehmen → $(ab)^n = a^n b^n$
- Häufiger Fehler: $a^m \cdot b^n \neq (ab)^{m+n}$ – verschiedene Basen und verschiedene Exponenten können **nicht** zusammengefasst werden

### Prüfungsfragen

1. Vereinfache: $\dfrac{x^5 \cdot x^{-2}}{x^3}$
→ *Zähler: $x^{5+(-2)} = x^3$. Dann: $\frac{x^3}{x^3} = x^0 = 1$.*

2. Welches Gesetz gilt beim Ausdruck $(2x^3)^4$?
→ *Das Gesetz des gleichen Exponenten: $(2x^3)^4 = 2^4 \cdot (x^3)^4 = 16x^{12}$. Zuerst die $4$ auf alle Faktoren verteilen, dann die Potenz-von-Potenz-Regel anwenden.*

---

## 3. Wissenschaftliche Notation

### Verstehen

Die **wissenschaftliche Notation** (auch Standardform) ist eine einheitliche Schreibweise für sehr grosse oder sehr kleine Zahlen. Man schreibt jede Zahl als Produkt einer Zahl zwischen 1 und 10 (genauer: $1 \leq |m| < 10$) und einer Zehnerpotenz. Diese Notation wird in Wissenschaft und Technik weltweit verwendet, weil sie Vergleiche und Rechnungen stark vereinfacht – zum Beispiel bei Lichtjahren ($9{,}461 \times 10^{15}$ m) oder bei Atomdurchmessern ($10^{-10}$ m).

### Überblick

| Zahl | Wissenschaftliche Notation | Hinweis |
|---|---|---|
| $4\,700\,000$ | $4{,}7 \times 10^6$ | Komma 6 Stellen nach links |
| $0{,}000\,038$ | $3{,}8 \times 10^{-5}$ | Komma 5 Stellen nach rechts |
| $1\,000$ | $1{,}0 \times 10^3$ | Exponent = Anzahl Nullen |
| $3{,}14$ | $3{,}14 \times 10^0$ | Zahl schon zwischen 1 und 10 |

**Rechnen in wissenschaftlicher Notation:**

$$(3 \times 10^4) \cdot (2 \times 10^3) = 6 \times 10^7$$

$$\frac{8 \times 10^6}{2 \times 10^2} = 4 \times 10^4$$

### Kernaussagen ✔

- Schreibweise: $m \times 10^n$, wobei $1 \leq |m| < 10$
- Grosse Zahlen → positiver Exponent, kleine Zahlen nahe 0 → negativer Exponent
- Beim Multiplizieren: Mantissen multiplizieren, Exponenten addieren
- Beim Dividieren: Mantissen dividieren, Exponenten subtrahieren
- **Mantisse** = die Zahl zwischen 1 und 10; **Exponent** = Zehnerpotenz

### Prüfungsfragen

1. Schreibe $0{,}000\,047$ in wissenschaftlicher Notation.
→ *$4{,}7 \times 10^{-5}$. Das Komma wird 5 Stellen nach rechts verschoben, daher negativer Exponent.*

2. Berechne $(2{,}5 \times 10^3) \cdot (4 \times 10^2)$ in wissenschaftlicher Notation.
→ *Mantissen: $2{,}5 \cdot 4 = 10{,}0$. Exponenten: $10^{3+2} = 10^5$. Also $10 \times 10^5 = 1{,}0 \times 10^6$.*

---

## 4. Wurzeln

### Verstehen

Die **Wurzel** ist die Umkehroperation zur Potenz: Gesucht ist jene Zahl, die – zur $n$-ten Potenz erhoben – den Radikanden ergibt. Die Schreibweise $\sqrt[n]{a}$ heisst «$n$-te Wurzel aus $a$». Für das Gymnasium besonders wichtig: Die Quadratwurzel $\sqrt{a}$ ist nur für $a \geq 0$ definiert (im Reellen), und $\sqrt{a}$ bezeichnet stets die **positive** Wurzel. Die $n$-te Wurzel aus einer negativen Zahl existiert nur für ungerade $n$.

### Überblick

| Begriff | Schreibweise | Beispiel |
|---|---|---|
| **Quadratwurzel** | $\sqrt{a}$ | $\sqrt{9} = 3$ |
| **Kubikwurzel** | $\sqrt[3]{a}$ | $\sqrt[3]{8} = 2$ |
| **$n$-te Wurzel** | $\sqrt[n]{a}$ | $\sqrt[4]{16} = 2$ |
| Definitionsbereich | $a \geq 0$ (für gerades $n$) | $\sqrt{-4}$ nicht definiert (reell) |
| Partielle Wurzel | gemeinsamen Faktor ausziehen | $\sqrt{12} = \sqrt{4 \cdot 3} = 2\sqrt{3}$ |

### Kernaussagen ✔

- $\sqrt[n]{a} = b \Leftrightarrow b^n = a$ (mit $b \geq 0$ für gerades $n$)
- $\sqrt{a^2} = |a|$ – Absolutbetrag nötig, da Ergebnis immer positiv
- **Partiell ziehen**: $\sqrt{a \cdot b} = \sqrt{a} \cdot \sqrt{b}$ – Quadratzahlen vor das Wurzelzeichen ziehen
- Beispiel partiell: $\sqrt{72} = \sqrt{36 \cdot 2} = 6\sqrt{2}$
- Negative Zahlen unter gerader Wurzel: **im Reellen nicht definiert**

### Prüfungsfragen

1. Warum ist $\sqrt{(-5)^2} = 5$ und nicht $-5$?
→ *Weil $\sqrt{}$ per Definition die positive Wurzel liefert. Es gilt $\sqrt{x^2} = |x|$, also $\sqrt{25} = 5$.*

2. Ziehe $\sqrt{48}$ partiell.
→ *$\sqrt{48} = \sqrt{16 \cdot 3} = 4\sqrt{3}$. Man sucht die grösste Quadratzahl, die in 48 aufgeht (hier: 16).*

---

## 5. Wurzelgesetze

### Verstehen

Die **Wurzelgesetze** erlauben das Vereinfachen von Ausdrücken mit Wurzeln, ähnlich wie die Potenzgesetze für Potenzen. Sie folgen direkt aus den Potenzgesetzen, wenn man bedenkt, dass $\sqrt[n]{a} = a^{1/n}$. Besonders wichtig ist, dass das Addieren von Wurzelausdrücken nicht einfach möglich ist: $\sqrt{a} + \sqrt{b} \neq \sqrt{a+b}$ – das ist ein typischer Fehler in Prüfungen.

### Überblick

| Gesetz | Formel | Beispiel |
|---|---|---|
| **Produktregel** | $\sqrt[n]{a \cdot b} = \sqrt[n]{a} \cdot \sqrt[n]{b}$ | $\sqrt{12} = \sqrt{4} \cdot \sqrt{3} = 2\sqrt{3}$ |
| **Quotientenregel** | $\sqrt[n]{\dfrac{a}{b}} = \dfrac{\sqrt[n]{a}}{\sqrt[n]{b}}$ | $\sqrt{\dfrac{9}{16}} = \dfrac{3}{4}$ |
| **Potenz unter Wurzel** | $\sqrt[n]{a^m} = a^{m/n}$ | $\sqrt{a^4} = a^2$ |
| **Wurzel einer Wurzel** | $\sqrt[m]{\sqrt[n]{a}} = \sqrt[m \cdot n]{a}$ | $\sqrt{\sqrt[3]{a}} = \sqrt[6]{a}$ |
| **KEIN Additionsgesetz** | $\sqrt{a} + \sqrt{b} \neq \sqrt{a+b}$ | $\sqrt{9} + \sqrt{16} = 7 \neq \sqrt{25} = 5$ |

### Kernaussagen ✔

- Wurzeln dürfen **multipliziert und dividiert** werden, aber **nicht addiert/subtrahiert**
- Gleichnamige Wurzelterme (gleicher Radikand) können zusammengefasst werden: $3\sqrt{2} + 5\sqrt{2} = 8\sqrt{2}$
- **Wurzel rationalisieren** (Nenner wurzelfrei machen): $\dfrac{1}{\sqrt{2}} = \dfrac{\sqrt{2}}{2}$
- Rationalisierung mit konjugiertem Ausdruck: $\dfrac{1}{\sqrt{a}-\sqrt{b}} \cdot \dfrac{\sqrt{a}+\sqrt{b}}{\sqrt{a}+\sqrt{b}}$

### Prüfungsfragen

1. Vereinfache: $\sqrt{50} - \sqrt{8}$
→ *$\sqrt{50} = 5\sqrt{2}$, $\sqrt{8} = 2\sqrt{2}$. Also $5\sqrt{2} - 2\sqrt{2} = 3\sqrt{2}$.*

2. Rationalisiere den Nenner: $\dfrac{3}{\sqrt{5}}$
→ *$\dfrac{3}{\sqrt{5}} \cdot \dfrac{\sqrt{5}}{\sqrt{5}} = \dfrac{3\sqrt{5}}{5}$.*

---

## 6. Wurzeln als Potenzen (Bruchexponenten)

### Verstehen

Wurzeln lassen sich immer als **Potenzen mit Bruchexponenten** schreiben: $\sqrt[n]{a} = a^{1/n}$. Diese Schreibweise ist besonders nützlich, wenn man Wurzeln und Potenzen in einem Ausdruck gleichzeitig vereinfachen will – alle Potenzgesetze gelten dann direkt auch für Bruchexponenten. So wird $\sqrt[3]{a^2} = a^{2/3}$ zu einer normalen Potenz, die man mit den bekannten Gesetzen umformen kann.

### Überblick

| Wurzelausdruck | Als Potenz | Beispiel |
|---|---|---|
| $\sqrt{a}$ | $a^{1/2}$ | $4^{1/2} = 2$ |
| $\sqrt[3]{a}$ | $a^{1/3}$ | $8^{1/3} = 2$ |
| $\sqrt[n]{a^m}$ | $a^{m/n}$ | $8^{2/3} = (8^{1/3})^2 = 4$ |
| $\dfrac{1}{\sqrt[n]{a^m}}$ | $a^{-m/n}$ | $4^{-1/2} = \dfrac{1}{2}$ |

**Berechnung von $a^{m/n}$:** Entweder zuerst Wurzel, dann Potenz: $(a^{1/n})^m$ — oder zuerst Potenz, dann Wurzel: $(a^m)^{1/n}$. Der erste Weg ist meist einfacher.

### Kernaussagen ✔

- $\sqrt[n]{a^m} = a^{m/n}$ – die allgemeine Umwandlungsformel
- $a^{1/n} = \sqrt[n]{a}$ – Wurzel als Potenz mit Exponent $\frac{1}{n}$
- Alle **Potenzgesetze** gelten auch für Bruchexponenten
- Trick: Zähler = Exponent der Potenz, Nenner = Grad der Wurzel
- Vereinfachung: $\sqrt[6]{a^4} = a^{4/6} = a^{2/3} = \sqrt[3]{a^2}$

### Prüfungsfragen

1. Schreibe $\sqrt[4]{x^3}$ als Potenz und vereinfache wenn möglich.
→ *$\sqrt[4]{x^3} = x^{3/4}$. Der Bruch $\frac{3}{4}$ kann nicht vereinfacht werden.*

2. Berechne $27^{2/3}$ ohne Taschenrechner.
→ *Zuerst Wurzel: $27^{1/3} = 3$. Dann Potenz: $3^2 = 9$. Also $27^{2/3} = 9$.*

---

## 7. Monome und Polynome

### Verstehen

Ein **Monom** ist ein Produkt aus einer Zahl (dem **Koeffizienten**) und einer oder mehreren Variablen mit natürlichem Exponenten, wie $3x^2y$. Ein **Polynom** ist eine Summe von Monomen. Polynome sind die grundlegenden Bausteine der Algebra – sie beschreiben Geraden, Parabeln und komplexere Kurven. Der **Grad** eines Polynoms ist der höchste Exponent, der in einem Term vorkommt, und bestimmt das Verhalten der zugehörigen Funktion.

### Überblick

| Begriff | Definition | Beispiel |
|---|---|---|
| **Monom** | Produkt aus Koeffizient und Variablen | $5x^3$, $-2xy^2$ |
| **Polynom** | Summe von Monomen | $3x^2 - 2x + 7$ |
| **Grad** | höchster Exponent | $3x^4 + x - 1 \Rightarrow$ Grad 4 |
| **Koeffizient** | Zahlenfaktor eines Terms | in $-7x^3$: Koeffizient $= -7$ |
| **Konstantes Glied** | Term ohne Variable | in $x^2 + 5$: konstantes Glied $= 5$ |
| **Leitkoeffizient** | Koeffizient des höchsten Terms | in $3x^4 + x$: Leitkoeffizient $= 3$ |

**Grad-Namen:**

| Grad | Name | Beispiel |
|---|---|---|
| 0 | Konstante | $7$ |
| 1 | Linear | $2x + 3$ |
| 2 | Quadratisch | $x^2 - 4$ |
| 3 | Kubisch | $x^3 + 2x$ |
| $n$ | Grad $n$ | $a_n x^n + \ldots$ |

### Kernaussagen ✔

- **Monom** = ein einziger Term (kein Plus/Minus)
- **Polynom** = Summe von Monomen, geordnet nach absteigendem Grad
- Der **Grad** bestimmt, wie viele Nullstellen ein Polynom maximal haben kann (höchstens $n$ Nullstellen)
- Polynome werden **standardmässig nach absteigendem Grad** geschrieben
- Zwei Monome heissen **gleichartig**, wenn sie dieselbe Variablenkombination mit denselben Exponenten haben

### Prüfungsfragen

1. Welchen Grad hat $3x^2y^3 + 4xy - 5$?
→ *Beim Term $3x^2y^3$ sind die Exponenten der Variablen $2+3=5$. Das ist der höchste Gesamtgrad, also hat das Polynom **Grad 5**.*

2. Ist $\sqrt{x} + 2$ ein Polynom? Begründe.
→ *Nein, denn $\sqrt{x} = x^{1/2}$ hat einen nicht-ganzen Exponenten. Polynome dürfen nur natürliche (oder null) Exponenten in den Variablen haben.*

---

## 8. Polynomoperationen

### Verstehen

Polynome können addiert, subtrahiert, multipliziert und (mit Rest) dividiert werden. Bei **Addition und Subtraktion** werden nur gleichartige Terme zusammengefasst. Bei der **Multiplikation** wendet man das Distributivgesetz an: jedes Glied des einen Polynoms wird mit jedem Glied des anderen multipliziert. Die **Polynomdivision** funktioniert analog zur schriftlichen Division und liefert ein Ergebnis plus eventuell einen Rest.

### Überblick

**Addition/Subtraktion** – nur gleichartige Terme zusammenfassen:
$$(3x^2 + 2x - 1) + (x^2 - 5x + 4) = 4x^2 - 3x + 3$$

**Multiplikation** – jedes mit jedem (Distributivgesetz):
$$(x + 2)(x - 3) = x^2 - 3x + 2x - 6 = x^2 - x - 6$$

**Polynomdivision** (Schema):

$$\frac{x^3 - 2x^2 + x - 4}{x - 2} = x^2 + r$$

Schritte: Führenden Term dividieren → Ergebnis aufschreiben → Multiplizieren → Subtrahieren → wiederholen → Rest ablesen.

| Operation | Methode | Achtung |
|---|---|---|
| Addition | gleichartige Terme sammeln | Vorzeichen beachten |
| Subtraktion | alle Vorzeichen des Subtrahenden umkehren | Klammern bei $-(a+b)$ |
| Multiplikation | Distributivgesetz, jedes mit jedem | Vorzeichen bei negativen Gliedern |
| Division | schriftliche Division Schritt für Schritt | Rest als Bruch angeben |

### Kernaussagen ✔

- **Gleichartige Terme** (gleiche Variable, gleicher Exponent) können addiert/subtrahiert werden
- Bei $-(a + b)$ wird das Minuszeichen auf **alle** Terme verteilt: $-a - b$
- Multiplikation zweier Polynome vom Grad $m$ und $n$ ergibt Grad $m + n$
- Polynomdivision: Ergebnis kann einen **Rest** haben → $\frac{P(x)}{Q(x)} = S(x) + \frac{R(x)}{Q(x)}$
- Probe bei Division: $S(x) \cdot Q(x) + R(x) = P(x)$

### Prüfungsfragen

1. Multipliziere $(2x - 3)(x^2 + x - 1)$.
→ *$2x \cdot x^2 + 2x \cdot x + 2x \cdot (-1) + (-3) \cdot x^2 + (-3) \cdot x + (-3) \cdot (-1)$*
*$= 2x^3 + 2x^2 - 2x - 3x^2 - 3x + 3 = 2x^3 - x^2 - 5x + 3$.*

2. Dividiere $x^3 + x^2 - 2$ durch $(x + 1)$ mit Rest.
→ *$(x^3 + x^2 - 2) \div (x+1) = x^2 - 2$, Rest $0$. Das heisst, $(x+1)$ ist ein Teiler von $x^3+x^2-2$.*

---

## 9. Binomische Formeln und Pascalsches Dreieck

### Verstehen

Die drei **binomischen Formeln** sind Abkürzungen für häufig vorkommende Produkte zweier Binome. Sie sollten auswendig bekannt sein, da sie sowohl beim Ausmultiplizieren als auch beim Faktorisieren eingesetzt werden. Das **Pascalsche Dreieck** verallgemeinert dieses Prinzip auf beliebige Potenzen eines Binoms $(a+b)^n$: Die Koeffizienten der einzelnen Terme lesen sich direkt aus dem Dreieck ab.

### Überblick

**Die drei binomischen Formeln:**

| Formel | Ausdruck |
|---|---|
| 1. Binomische Formel | $(a+b)^2 = a^2 + 2ab + b^2$ |
| 2. Binomische Formel | $(a-b)^2 = a^2 - 2ab + b^2$ |
| 3. Binomische Formel | $(a+b)(a-b) = a^2 - b^2$ |

**Pascalsches Dreieck** (erste 5 Zeilen):

```
       n=0:       1
       n=1:      1  1
       n=2:     1  2  1
       n=3:    1  3  3  1
       n=4:   1  4  6  4  1
       n=5:  1  5  10  10  5  1
```

Jede Zahl = Summe der zwei darüberliegenden Zahlen.

**Anwendung für $(a+b)^n$:** Koeffizienten aus Zeile $n$ ablesen:
$$(a+b)^3 = 1\cdot a^3 + 3\cdot a^2b + 3\cdot ab^2 + 1\cdot b^3$$

**Schema:** Exponent von $a$ nimmt ab (von $n$ auf $0$), Exponent von $b$ nimmt zu (von $0$ auf $n$).

### Kernaussagen ✔

- Die **3 binomischen Formeln** auswendig kennen und in beide Richtungen anwenden können (ausmultiplizieren und faktorisieren)
- **3. binomische Formel** = Differenz zweier Quadrate: $(a+b)(a-b) = a^2-b^2$
- **Pascalsches Dreieck**: Jede Zeile $n$ liefert die Koeffizienten von $(a+b)^n$
- Der mittlere Term bei $(a\pm b)^2$ hat immer den Faktor $\mathbf{2}$ – häufig vergessen!
- Für $(a-b)^n$: Vorzeichen alternieren ($+, -, +, -, \ldots$) ab dem zweiten Term

### Prüfungsfragen

1. Berechne $(3x - 2)^2$ mit der binomischen Formel.
→ *$(3x)^2 - 2 \cdot 3x \cdot 2 + 2^2 = 9x^2 - 12x + 4$.*

2. Schreibe $(a+b)^4$ vollständig aus (mit Pascalschem Dreieck).
→ *Zeile 4: $1, 4, 6, 4, 1$. Also: $a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4$.*

---

## 10. Faktorisierung

### Verstehen

**Faktorisierung** (Zerlegung in Faktoren) ist die Umkehrung des Ausmultiplizierens: Man schreibt einen Ausdruck als Produkt. Sie ist das wichtigste Werkzeug zum Lösen von Polynomgleichungen und zum Kürzen von Brüchen. Es gibt drei Hauptmethoden, die man auch kombiniert anwenden kann: **Ausklammern**, **binomische Formeln** erkennen und **Trinome aufspalten** (auch: Zerlegung quadratischer Ausdrücke).

### Überblick

| Methode | Wann? | Vorgehen | Beispiel |
|---|---|---|---|
| **Ausklammern** | gemeinsamer Faktor erkennbar | GGT bestimmen, ausklammern | $6x^2 + 4x = 2x(3x + 2)$ |
| **Binomische Formel** | Muster $a^2 \pm 2ab + b^2$ oder $a^2 - b^2$ | Formel rückwärts erkennen | $x^2 - 9 = (x+3)(x-3)$ |
| **Triom aufspalten** | $ax^2 + bx + c$ mit $a = 1$ oder $a \neq 1$ | Vieta oder AC-Methode | $x^2 - 5x + 6 = (x-2)(x-3)$ |

**Triom aufspalten (Vieta)** für $x^2 + bx + c$:
Gesucht sind zwei Zahlen $p, q$ mit $p + q = b$ und $p \cdot q = c$.
Dann gilt: $x^2 + bx + c = (x+p)(x+q)$.

**Vorgehen bei kombinierten Aufgaben:**
1. Zuerst **ausklammern**
2. Dann **binomische Formeln** prüfen
3. Dann **Triom** aufteilen

### Kernaussagen ✔

- **Ausklammern** = GGT aller Terme vor die Klammer ziehen
- **3. binomische Formel rückwärts**: $a^2 - b^2 = (a+b)(a-b)$
- **Vieta** für $x^2 + bx + c$: zwei Zahlen mit Summe $b$ und Produkt $c$ suchen
- Probe: durch Ausmultiplizieren prüfen
- Faktorisierung ermöglicht Kürzen in rationalen Brüchen: gemeinsame Faktoren im Zähler und Nenner fallen heraus

### Prüfungsfragen

1. Faktorisiere vollständig: $2x^3 - 8x$
→ *Schritt 1 – ausklammern: $2x(x^2 - 4)$. Schritt 2 – 3. binomische Formel: $2x(x+2)(x-2)$.*

2. Faktorisiere: $x^2 + 3x - 10$
→ *Vieta: Gesucht $p + q = 3$ und $p \cdot q = -10$. Lösung: $p = 5$, $q = -2$. Also $(x + 5)(x - 2)$.*

---

## 11. Rationale Brüche

### Verstehen

Ein **rationaler Bruch** (auch: rationale Funktion) ist ein Bruch, bei dem Zähler und/oder Nenner Polynome sind. Durch **Faktorisierung** lassen sich solche Brüche oft kürzen – gemeinsame Faktoren in Zähler und Nenner werden herausgeteilt. Beim **Addieren und Subtrahieren** muss man zuerst den **Hauptnenner** (kleinstes gemeinsames Vielfaches der Nenner) bestimmen. Wichtig: Der Definitionsbereich eines rationalen Bruches schliesst immer jene $x$-Werte aus, für die der Nenner null wird.

### Überblick

| Operation | Methode | Beispiel |
|---|---|---|
| **Kürzen** | Zähler und Nenner faktorisieren, gemeinsame Faktoren streichen | $\dfrac{x^2-4}{x-2} = \dfrac{(x+2)(x-2)}{x-2} = x+2$ |
| **Multiplizieren** | Zähler mit Zähler, Nenner mit Nenner | $\dfrac{a}{b} \cdot \dfrac{c}{d} = \dfrac{ac}{bd}$ |
| **Dividieren** | mit dem Kehrwert multiplizieren | $\dfrac{a}{b} \div \dfrac{c}{d} = \dfrac{a}{b} \cdot \dfrac{d}{c}$ |
| **Addieren/Subtrahieren** | Hauptnenner bestimmen, umschreiben, addieren | $\dfrac{1}{x} + \dfrac{1}{x+1} = \dfrac{x+1+x}{x(x+1)}$ |
| **Polynomgleichung lösen** | Faktorisieren → Nullstellen der Faktoren bestimmen | $x^2 - 3x = 0 \Rightarrow x(x-3) = 0$ |

**Polynomgleichungen mit Faktorisierung lösen:**
- Alles auf eine Seite bringen
- Faktorisieren
- Jeden Faktor null setzen und lösen

Beispiel: $x^2 - 5x + 6 = 0 \Rightarrow (x-2)(x-3) = 0 \Rightarrow x = 2$ oder $x = 3$

### Kernaussagen ✔

- Beim **Kürzen** zuerst immer faktorisieren – nie einzelne Terme kürzen, nur ganze Faktoren!
- **Definitionsbereich**: alle $x$, für die der Nenner $\neq 0$ ist
- Hauptnenner = **kgV** (kleinstes gemeinsames Vielfaches) der Nenner
- **Satz vom Nullprodukt**: $A \cdot B = 0 \Leftrightarrow A = 0$ oder $B = 0$
- Fehler vermeiden: $\dfrac{x^2 + 1}{x + 1} \neq x$ – Zähler muss sich vollständig faktorisieren lassen

### Prüfungsfragen

1. Kürze: $\dfrac{x^2 - x - 6}{x^2 - 4}$
→ *Zähler: $x^2 - x - 6 = (x-3)(x+2)$. Nenner: $x^2 - 4 = (x+2)(x-2)$. Kürzen: $\dfrac{(x-3)(x+2)}{(x+2)(x-2)} = \dfrac{x-3}{x-2}$ (für $x \neq -2$).*

2. Addiere: $\dfrac{2}{x-1} + \dfrac{3}{x+2}$
→ *Hauptnenner: $(x-1)(x+2)$. Umschreiben: $\dfrac{2(x+2) + 3(x-1)}{(x-1)(x+2)} = \dfrac{2x+4+3x-3}{(x-1)(x+2)} = \dfrac{5x+1}{(x-1)(x+2)}$.*

---

## Abschlussübersicht

| Kapitel | Wichtigste Schlagworte |
|---|---|
| 1. Potenzen | Basis, Exponent, $a^0 = 1$, $a^{-n} = 1/a^n$, Klammern |
| 2. Potenzgesetze | Produkt: +, Quotient: −, Potenz von Potenz: ·, gleichartige Basis nötig |
| 3. Wissenschaftliche Notation | $m \times 10^n$, $1 \leq m < 10$, Mantisse, Exponent |
| 4. Wurzeln | $\sqrt[n]{a}$, partiell ziehen, $\sqrt{a^2} = \|a\|$, nur $a \geq 0$ (gerades $n$) |
| 5. Wurzelgesetze | Produkt- & Quotientenregel, kein Additionsgesetz, rationalisieren |
| 6. Bruchexponenten | $\sqrt[n]{a^m} = a^{m/n}$, Zähler = Potenz, Nenner = Wurzelgrad |
| 7. Polynome | Monom, Polynom, Grad, Koeffizient, Leitkoeffizient |
| 8. Polynomoperationen | gleichartige Terme, Distributivgesetz, Polynomdivision mit Rest |
| 9. Binomische Formeln | 3 Formeln, Pascalsches Dreieck, $(a+b)^n$ |
| 10. Faktorisierung | Ausklammern, binomische Formeln, Vieta, kombiniert anwenden |
| 11. Rationale Brüche | kürzen, Hauptnenner, Nullprodukt, Definitionsbereich |

---

> **Hinweis zu Lücken im Quellmaterial:** Das PDF-Skript lag als komprimiertes Bild vor, weshalb einzelne Beispielaufgaben und handschriftliche Notizen nur visuell ausgewertet wurden. Die Formelsammlung und Erklärungen basieren auf den klar erkennbaren Lernzielen (Kapitel 6.1). Falls dein Skript zusätzliche spezifische Definitionen oder Formeln enthält, die hier fehlen, bitte schick mir gerne eine höher aufgelöste Version oder spezifische Seiten.
