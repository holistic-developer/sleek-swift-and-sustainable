---
theme: ksick-dynatrace
title: Sleek, Swift and Sustainable
defaults:
  eventName: DevTreff Amstetten
  eventDate: April 10, 2024
transition: fade-out
layout: about
image: https://andreas.taranetz.com/images/andreas.webp
speaker: Andreas Taranetz
jobTitle: Software Engineer
website: andreas.taranetz.com
---

<!--
Hallo

Ardagger → Winklarn

Dynatrace

Obervability  != Kunden Tracking wie Google Analytics

Fokus auf Auf Application Performance Monitoring

Performance ist auch das Kernthema des heutigen Vortrags
-->

---
layout: cover
---

<h1 style="line-height: 4rem; text-align: left">Sleek<br/> Swift<br/> Sustainable</h1>

<!--
Möchte euch von einem Projekt erzählen bei dem ich so manches über Optimierung von Webseiten gelernt habe das ich gerne in mehr Webseiten sehen würde

Zuvor schon bei kleineren Firmen

Erste fixe Anstellung bei Startup aus Bachelor Projekt

Warum würde man halbfertige Studenten anstellen? 

Günstig und überambitioniert

Im Master ähnliche Situation → wahlkabine.at

🖐 Wer kennt die Webseite?

🖐 Bei wem kam schon einmal KPÖ raus?
-->

---
layout: center
---

<Tweet id="904748809644859392" />

<!--
Ich habe nichts mit den Zugewinnen der KPÖ in der Steiermark und Salzburg zu tun
-->

---
layout: image-left
image: /page-old.png
transition: slide-left
---

<!-- ! -->

# wahlkabine.at

established 2002

<img v-click src="/questionnaire%20old.PNG" style="width:400px">
<img v-click style="width: 3em; margin: -7em auto 0 auto" src="/loading.gif">

<!--
Wie man sehen kann, in die Jahre gekommen

liegt mir am Herzen → bischen objektivismus → Wahlkämpfe personenzentriert (um nicht Personenkult zu sagen)

die neue Seite sollte hübscher werden und vorallem performant + Accessibility + Maintainable → Features nicht immer vom Kunden

Performant → Wiener Landtagswahl 2015 kam an ihre Grenzen 160.000

conversion → 50 Klicks
→ nicht abbrechen

Aufgabe klar: Features, Resourcen (2 Entwickler ein schwacher Server), Deadline → NRW 2018
-->

---
layout: image
image: /kurz.jpg
transition: slide-left
---

<!--
Nicht nur die Wahlkabine wird neu, auch in der Volkspartei tut sich was

Vorverlegt von der Volkspartei

→ Druck geht nicht immer vom Kunden aus
-->

---
layout: image-right
image: /page-new.png
transition: slide-left
---

# wahlkabine.at

revised 2017

<img src="/questionaire%20new.png" style="width:400px">

<!--
Spoiler: wir habens trotzdem rechtzeitig bis zur Nationalratswahl hinbekommen, knapp

Meine Kollegin hat das Design und die Contentstruktur überarbeitet

Abgesehen von einer großen Bannergrafik sehr schlicht gehalten 

Der Talk heißt aber auch nicht Fancy, sonder Sleek

Ein Konzept das jung und alt verstehen: "Ist es Bunt kann man's klicken"

Ja immer noch Orange

Politisches Spektrum, nicht zuordnen, bis...
-->

---
layout: image-center
image: /Farbschema im Vergleich.png
---

<!--
Wieder diese eine Partei dazwischenfunkt

das war der letzte Seitenhieb auf die ÖVP für diesen Vortrag
-->

---
layout: center
---

# Gain Performance

<v-clicks>

by <span style="color: var(--green)">**reducing**</span>

- Computation
- Size
- Roundtrips

</v-clicks>

<!--
Reden wir endlich über performance

Was muss man in eine Webseite einbauen, damit sie schneller wird?

Wieviel ist 11²?

Richtige Frage: Was muss man ausbauen? | Was kann man reduzieren?

Berechne nur was absolut nötig ist

Reduziere die Bytes die übers Netzwerk geschickt werden

Mach so wenig Roundtrips zum Server wie möglich
-->

---
layout: center
---

# Reduce Computation


<img v-click src="/caching.jpg" width=500>

<!--
Zur Buildzeit ist besser als zur Laufzeit

Wieviel ist 11²?

Am Server, Am Client  ...   1 der 2 schwierigsten Probleme

Hängt ab von: Wie oft wird der Content geändert, wie user spezifisch ist der Content? Besuchen die User die Webseite oft oder unregelmäßig?

Provide Entity Tags

Die besten Anfragen sind die, die nie verarbeitet werden müssen

CDNs, System Fonts
-->

---
layout: center
---

# Reduce Size

<img v-click src="/compression.jpg" width=500>

<!--
Minify + GZIP Javascript um eine Größenordnung reduziert

Moderne Formate für Schriftarten

Logos als Vektorgrafiken

Moderne Bild- Video formate webp

Low fidelity Variante → Youtube / Netflix

Verschiedene Auflösungen

picture tag + source

Low fidelity von Text?
-->

---
layout: center
---

# Reduce Roundtrips

<img v-click src="/inline.jpg" width=500>

<!--
Willhaben Beispiel

Servern ist es egal unfreundlich zu sein

Schick alles was wichtig ist am besten auf einmal

Inline das wichtigste CSS

Bau alles Tracking aus das du dir nicht ansiehst → Server side tracking

→ Warum war die alte Version der Wahlkabine eigentlich so langsam?
-->

---
layout: center
---

# Server Side Rendering
<p></p>
<img src="/1 Classic Server Side rendering.png">

---
layout: center
transition: fade
---

# Client Side Rendering
<p></p>
<img src="/2 Classic Client Side rendering part 1.png">

---
layout: center
transition: fade
---

# Client Side Rendering
<p></p>
<img src="/3 Classic Client Side rendering part 2.png">

---
layout: center
transition: fade
---

# Client Side Rendering
<p></p>
<img src="/4 Classic Client Side rendering part 3.png">

---
layout: center
---

# Server + Client Side Rendering
<p></p>
<img src="/5 Server and Client Side rendering.png">

<!--
Schicken das Javascript

Das CSS (SPA!)

Die Daten um die Homepage rendern zu können

Prerendering der Webseite (für Bots)
-->

---
layout: image
image: /Preloading.png
backgroundSize: contain
transition: fade
---
# Server Side Prerender

---
layout: two-cols-header
class: text-center
---

# Bundle size

::left::

<img v-click=1 src="/bundles with jit 2.72MB.png" width=500>
<span v-click=1>2.72 MB</span>

::right::

<img v-click=2 src="/bundles with aot 2.24MB.png" width=500>
<span v-click=2 style="color: var(--green)">2.24 MB</span>

<!--
Damals neues Feature AOT

mittlerweile Standard

System Fonts
-->

---

# Results

<div style="display: flex; flex-direction: column; gap: 1em">
<div v-click>
  <h3>Requests</h3>
  <div><span style="width: 530px" class="bar-container"><span class="bar old" style="background: #98c37988"><span class="label-old">53</span></span></span></div>
  <div><span style="width: 160px" class="bar-container"><span class="bar new" style="background: #98c379CC"><span class="label-new">16</span></span></span></div>
</div>


<div v-click>
  <h3>Page size</h3>
  <div><span style="width: 273px" class="bar-container"><span class="bar old" style="background: #d19a6688"><span class="label-old">546kB</span></span></span></div>
  <div><span style="width: 650px" class="bar-container"><span class="bar new" style="background: #d19a66CC"><span class="label-new">1100kB</span></span></span></div>
</div>

<div v-click>
  <h3>Page load</h3>
  <div><span style="width: 780px" class="bar-container"><span class="bar old" style="background: #56b6c288"><span class="label-old">1560ms</span></span></span></div>
  <div><span style="width: 473px" class="bar-container"><span class="bar new" style="background: #56b6c2CC"><span class="label-new">957ms</span></span></span></div>
</div>
</div>

<!--
Nur für das initiale Laden der Webseite
-->

---
layout: center
---

# Loadtest

<Tweet v-click id="904443522727727104" />

---
layout: center
---

<img src="/per-minute.PNG">
Questionaires started in September 2017

<!--
Performante Webseiten lassen sich auch leichter skallieren
-->

---
layout: center
---

# Conclusion

<!--
Next JS → Einfachere Kontrolle darüber was wann geladen wird 

State management issue

HTTP/2 Server Push

also brings header compression

HTTP/3 Reduces the number of handshakes by using UDP 

Vieles noch genauso machen, aber aus anderen Gründen
-->

---
layout: center
---

# Sustainability

<!-- 
Warum ist mir performance so wichtig?

Wenn nicht gekauft durch stärkere Hardware → Performanter = Nachhaltiger

Jede Webseite hat auch einen CO2 Fußabdruck

Wenn ihr es schon nicht für die Umwelt oder aus Kostengründen macht dann für mich

Bei Zugfahrten auch
-->
