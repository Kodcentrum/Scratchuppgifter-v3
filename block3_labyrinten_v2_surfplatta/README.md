# Labyrinten (anpassad för surfplatta)

Det här är ett spel där du ska försöka ta dig igenom en labyrint utan att röra väggarna och hinder - för då blir du Game Over! Du kan även utmana dig och skapa nya banor fär att komma till nästa nivå i spelet. Det är ett roligt spel för dig som vill hitta på och rita mycket själv! Du kommer att få lära dig att använda variabler och funktioner.

> Bläddra dig fram genom denna guide, steg för steg. <a href="https://scratch.mit.edu" target="_blank">
  Öppna även kodarverktyget Scratch genom att klicka på länken bredvid katt-figuren ovan eller via www.scratch.mit.edu</a>. Här kodar och skapar du själva spelet utifrån instruktionerna nedan. 

En labyrint kan se ut på många olika sätt och du kan rita din som du vill. Här visar vi två exempel på hur ett labyrintspel skulle kunna se ut, beroende på vilken form labyrintens väggar har:

* <a href="https://scratch.mit.edu/projects/52105140/" target="_blank">Exempel 1</a>

![image alt text](image_0.png)

* <a href="https://scratch.mit.edu/projects/34921466/" target="_blank">Exempel 2</a>

![image alt text](image_1.png)

Hur vill du att din labyrint ska se ut? Dax att börja koda! 
Klicka nedan på nästa kapitel för att gå vidare.

## 1 – Rita din labyrint

Du väljer själv hur du vill rita din labyrint, men du måste följa vissa **regler** för att spelet ska fungera. Labyrintens väggar måste alla vara i samma färg. Start och mål ska ha varsin färg, som inte får vara samma färg som väggar eller bakgrund har. 

Då börjar vi skapa!

1. Skapa först ett nytt projekt i Scratch. Ta bort katt-sprajten genom att trycka på krysset på den.

![image alt text](Ta_bort_Sprajt.png)

2. Tryck på SCEN nere till höger och tryck sen på fliken för BAKGRUNDER uppe till vänster. 

![image alt text](Aktivera_Scen_Bakgrund.png)          ![image alt text](Aktivera_Bakgrunder-flik.png)

<br>

3. Nu ska du skapa din layrint med en **bakgrundsfärg, labyrintväggar, start och mål**. Viktigt att du ger varje del en egen färg för att spelet sen fungera. 

  En enkel labyrint kan se ut såhär, men du ritar din som du vill. Tips är att skapa en enkel, bred bana utan för många väggar och svängar.

  ![image alt text](image_2_b.png)

Börja med att fylla med en ny **bakgrundsfärg** till labyrinten. För att detta ska fungera, behöver du först trycka på blå knappen under målarytan som det står **Gör till bitmap** på. 

![image alt text](Bakgrunder_Gör_till_bitmapp.png)

Välj en ny **färg** du gillar. Klicka på färgverktyget och dra i färgväljarens inställningar tills du är nöjd med din färg.

![image alt text](RITA_Välj_Färg-funktion_bitmapp.png)

Välj sen verktyget som ser ut som en liten **hink** och tryck på den stora vita rutan bredvid, så fylls den med din nya färg.  

![image alt text](Bakgrunder_Fyll_med_färg-verktyg.png)

4. Nu ska du rita din labyrints väggar med **annan färg än bakgrunden**. Välj ett verktyg att måla med och välj en färg du vill ha. Om du vill ha raka streck kan du välja LINJE-verktyget.

![image alt text](Bakgrunder_linje-verktyg.png)

>> **Tänk på!** Det är viktigt att **alla väggarna har samma färg** genom hela labyrinten och att avståndet mellan väggarna ska vara ganska stort så sprajten kommer emellan.

5. Rita nu en **startpunkt** och en **målpunkt** i din labyrint. Start och mål kan se ut hur som helst, men de kan **inte ha samma färg** som väggarna eller bakgrundsfärgen - eller varandra. Alltså en färg för start och en annan för mål. Du kan till exempel göra fyllda färgcirklar med CIRKEL-verktyget.

  ![image alt text](Bakgrunder_rita_cirkel-verktyg.png)
  
Nu är labyrinten klar. Tryck på fliken KOD längst upp i vänstra hörnet,m så kommer du ur ritläget.

Dax att lägga till en spelfigur - spelets hjälte.

## 2 – Lägg till sprajt som spelfigur

Nu ska du lägga till en sprajt eller figur som ska kunna styras genom labyrinten, utan att röra väggarna. Det kan vara din spelhjälte. Gör såhär:

6. Tryck på den lilla blå ikonen med en vit katt på längst ned till höger, så blir den grön - tryck på den gröna. Nu kommer du till Scratch  sprajtbibliotek, där du kan välja **en ny sprajt**. Tryck på en sprajt du gillar för att lägga till den i ditt projekt. 

  ![image alt text](Ny_Sprajt-knapp.png) 
  
>>Välj en sprajt som inte är för bred eller lång, den kan vara svår att svänga runt i labyrinten.
  
7. Dra sprajten till din labyrints startpunkt och **ändra storleken** på sprajten så den passar in mellan labyrintens väggar, från 100% full storlek till lägre procenttal. Det gör du i rutan **Storlek** under SCENEN. Prova dig fram tills sprajten är lagom stor, den ska få ordentligt med plats mellan labyrintens väggar.

  ![image alt text](Ändra_Storlek_Sprajt.png) 

>>Tips! Om du vill rita din egen sprajt, så gör du såhär: Håll fingret på ikonen för **Ny Sprajt** i nedre högra hörnet så att fler val kommer fram.  Välj **Måla** som ser ut som en liten pensel. Rita din egen sprajtfigur, men tänk på att den inte ska vara för stor, bred eller lång, då blir den svår att svänga i labyrintens hörn. Var noga med att sprajten ritas med **andra färger** än din bakgrund och labyrintens väggar.

## 3 - Koda sprajtens rörelse

Din sprajt ska kunna röra sig igenom labyrinten och ta sig i mål, utan att stöta i väggarna, för då blir du Game Over. Den ska styras genom att följa efter ditt finger när du drar den genom labyrinten. Ditt finger blir samma sak som om du skulle ha en datormus och sprajten följer muspekaren genom labyrinten. Dax att koda sprajtens rörelser - vi börjar med att få sprajten att gå:

8. Under temat HÄNDELSER finns pusselbiten som heter **När GRÖN FLAGGA klickas på** (den som har en grön flagga på sig). Dra ut denna bit och lägg på sprajtens tomma manusyta i mitten. Denna pusselbit är kopplad till den gröna START-flaggan som finns över ditt spel på SCENEN - alltså en startknapp för ditt spel.

BILD PÅ KODEN

9. Under tema RÖRELSE finns **Gå 10 steg**. Dra in denna bit och sätt den under den första pusselbitarna med gröna flaggan. 

BILD PÅ KODEN

Testa koden genom att trycka några gånger på den gröna flaggan över ditt spel. Sprajten rör sig framåt en bit varje gång du trycker på startflaggan. Men vi vill ju att den ska röra sig hela tiden efter att vi tryckt på start. Vi behöver kontrollera koden med en LOOP.

10. Under tema KONTROLL finns pusselbiten **För alltid**. Dra in den och lägg den runt om den blå pusselbiten **Gå 10 steg**, så den blå hamnar inui den gula. Det ska se ut såhär.

BILD SCRIPT

Testa koden igen! Se, nu springer sprajten hela tiden. 
Stoppa koden med den röda STOPP-knappen över spelet och dra tillbaka sprajten till spelets startcirkel. 

## 4 Koda styrning och position

Sprajten ska styras genom labyrinten med ditt finger, som du drar en bit framför sprajten så den leds igenom banan. Fingret på en surfplatta är samma sak som muspekaren på en dator. Gör såhär för att koda styrningen:

11. Under tema RÖRELSE finns pusselbiten **Peka mot muspekare**. Dra in biten och lägg den direkt ovanför biten med **Gå 10 steg** inuti din gula loop **För alltid**. Då ser det ut såhär:

BILD SCRIPT

Testa koden! Nu följer sprajten ditt finger på skärmen. Men det går lite snabbt. Vi sänker hastigheten och fördröjer starten.

12. Klicka på siffran 10 i pusselbiten **Gå 10 steg**. Detta är en variabel som kan ändras till lägre och högre siffra, för att sprajten ska gå långsammare eller snabbare. Ändra förslagsvis till 3, det blir lagom. 

13. Under tema KONTROLL finns pusselbiten **Vänta 1 sekunder**. Dra in biten och lägg den direkt under pusselbiten **När GRÖN FLAGGA klickas på**. Då väntar sprajten 1 sekund innan den börjar springa iväg. 

För att slippa dra tillbaka sprajten till startplattan varje gång ska du koda in sprajtens startposition och även startriktning så den tittar åt rätt håll från början. Vi börjar med riktningen.

14. Dra sprajten till labyrintens startplatta. Under tema RÖRELSE finns pusselbiten **Peka i riktning 90**. Dra in biten och lägg det direkt under pusselbiten **När GRÖN FLAGGA klickas på**. 

15. Om sprajten inte tittar åt rätt håll nu, så tryck på siffran 90 i pusselbiten, och ändra riktningen genom att dra i blå pilen tills du är nöjd med sprajtens riktning. 

BILD

16. Nu lägger du till sprajtens startposition. Se till att sprajten står där du vill att den ska starta när spelet börjar.

17. under tema RÖRELSE finns pusselbiten **Gå till X:__ och Y:__**. (det står siffror vid X och Y). Dra in biten och lägg in den direkt under pusselbiten **När GRÖN FLAGGA klickas på**. Nu startar sprajten på samma ställe varje gång du startar spelet.

>>Testa koden! Går sprajten i lagom hastighet? Startar den på rätt ställe? Ändra i variablerna om du inte är nöjd.

Nu ska vi koda så sprajten kan känna av olika färger - och vinna eller förlora.


## 5 – Vinna eller förlora

Dags att koda det här till ett spel! Här ska du programmera in **villkor** i koden som skapar olika händelser - om en sak händer, då ska något annat hända. Till exempel: OM sprajten rör vid en vägg i labyrinten, DÅ blir spelet Game Over och sprajten hamnar tillbaka på startpunkten. OM sprajten nuddar vid målpunkten - DÅ vinner du.

Men hur ska sprajten veta vad den rör vid? Jo, vi ska koda så att den **känner av vilken färg den rör vid**; labyrintens väggfärg eller målpunktens färg. Det är därför de alla måste ha olika färger så sprajten kan hålla ordning. Dax att koda!

18. Först lägger vi till en pusselbit som kontrollerar om sprajten rör vid en speciell färg. Under tema KONTROLL finns en stor pusselbit med ett kantigt hål på som heter **Oå < > Då... Annars**. Dra in biten och lägg den fritt på skriptytan. Såhär ser pusselbiten ut:

BILD PÅ PUSSELBIT OM DÅ ANNARS

Nu ska du koda så att sprajten hela tiden **känner av** ifall den rör vid färgen för mål eller en vägg. Vi börjar med Mål!

19. Under tema **Känna av** finns pusselbiten **Rör vid färgen ...**. Dra in biten och lägg den inuti det kantiga hålet mellan **Om < > Då**, så det ser ut såhär:

BILD PÅ PUSSELBIT OM DÅ ANNARS MED KÄNNA AV BIT I

20. Nu ska vi ställa in rätt färg. Tryck på färgcirkeln i kodbiten **Rör vid färgen ...**. Välj lilla pimpett-verktyget i menyn längst ned, och tryck sen på labyrintens mål-markering på SCENEN, så blir färgen för målet vald. Färgen ändras då i pusselbiten **Rör vid färgen ...**.

BILD PÅ RÖR VID FÄRGEN - VÄLJ FÄRG PINMPETTVERKTYG...

21. Om sprajten rör vid målet i labyrinten, ska du vinna spelet och sprajten ska säga "Jag vann!" och hamna tillbaka på start-markeringen igen. Spelet ska då stoppa. Koda nu så att sprajten kan säga Jag vann så här: Under tema UTSEENDE finns pusselbiten **Säg Hej! i 2 sekunder**. Dra in biten och lägg den inuti din villkorsloop, så det ser ut såhär. 

BILD OM-DÅ-ANNARS-LOOP med UTSEENDE SÄG HEJ 2 SEKUNDER INUTI

22. Tryck på texten Hej! i pusselbiten och skriv istället Game Over!

23. Om spelet blir Game over, ska sprajten flyttas tillbaka till start-positionen igen. Dra din sprajt till start-plattan. Under tema RÖRELSE finns pusselbiten **Gå till X... och Y...**. Dra in biten och lägg den direkt under **Säg Game Over i 2 sekunder**. 

24. När det blir Game Over ska spelet stoppas - och koden sluta köras. Under tema KONTROLL finns pusselbiten **Stoppa alla**. Lägg in det direkt under **Gå till X... Y...** i din villkors-loop.

25. När sprajten **inte** rör vid mål-färgen, ska den för alltid fortsätta gå framåt. Lägg därför ett rörelseblock med **Gå 10 steg** in under där det står **annars** i sin gula villkor-loop. Ändra siffran 10 till ett lägre tal, 1 kan vara lagom. 

BILD FÄRDIG OM/DÅ/ANNARS-loop med gå 3 steg.

26. Nu ska du koda ett likadant skript till, men byt färg så att sprajten känner av labyrintens väggar istället, och att den säger "Game Over!! i två sekunder istället för Jag vann!.

27. Till sist ska du **lägga in båda dessa skript under varandra inuti det första skriptets För alltid-loop**. Då har du kodat ett skript som **för alltid - gång på gång under hela spelet** känner av om sprajten rör vid vägg eller mål-färgerna - annars går den vidare framåt. Då ska ditt skript se ut såhär när du är klar.

BILD PÅ FÄRDIGt SKRIPt MED ALLA LOOPAR:

>> Testa ditt projekt! Klicka på START-flaggan. Går sprajten åt rätt håll och med en hastighet som känns bra? Säger den "Game Over!" när du nuddar en vägg? Går den tillbaka till startpunkten. Säger den "Du vann!" när du nuddar målpunkten? Tips: Tryck på symbolen med fyra pilar som pekar utåt, som finns överst i högra hörnet ovanför SCENEN, så kan du spela labyrintspelet i större fönster - det är lättare.


## 5 Lägg till ett hinder 
Det behöver inte bara vara väggarna i labyrinten som gör dig Game Over. Du kan hitta på andra hinder eller motståndare som din sprajt måste ta sig förbi på väg till mål. 

* Du kan välja att hindret ska vara en färdig sprajt som du lägger till i projektet - eller rita ett eget hinder.

* Om du ritar eget hinder, tänk på att ge den en annan färg än vägg- och mål-färgen.

* Välj om du vill att hindret ska röra sig eller om det ska stå stilla.

* Se till så att det faktiskt är möjligt för sprajten att ta sig förbi hindret.

* Lägg till kod i skriptet för sprajten så att den känner av hindren på samma sätt som väggen.


## Färdig!
Grattis, nu har du gjort klart uppgiften.

**Glöm inte att spara ditt projekt!** Döp det gärna till uppgiftens namn så att du enkelt kan hitta den igen.

> **Testa ditt projekt**  
Visa gärna någon det som du har gjort och låt dem testa. Tryck på DELA för att andra ska kunna hitta spelet på Scratch. Gå ut till projektsidan och låt någon annan testa spelet!


## Utmaningar
Har du tid över och bygga mer på spelet. Då kan du lägga till en timer som räknar ned speltiden opch fler banor och nivåer. Här kommer några förslag på hur du kan skapa detta. 

## En timer

Dags att göra spelet lite svårare! Du ska se till att spelaren har en viss tid på sig att ta sig igenom labyrinten. Om du inte är i mål när tiden är slut förlorar du! Nu ska du skapa en timer, alltså en tidräknare.

1. Skapa en VARIABEL som heter **Tid**. Den ska vara **synlig** på scenen.

2. Gör ett nytt skript för sprajten som säger:

  * Starta när START klickas på

  * **Gå till** startpunkten

  * **Sätt Tid** till 60 sekunder (eller välj själv antal sekunder)

  * **För alltid om Tid > 60**

    * **Då** ska sprajten **vänta** 1 sekund

    * **Ändra Tid** med -1

    * Annars **säg "Game over"** och **stoppa** alla skript

  ![image alt text](image_7.png)

  Nu har du en timer, det vill säga en tidräknare! Men för att göra det ännu svårare ska du nu säga åt sprajten att den förlorar extra mycket tid om den nuddar väggen.

3. Lägg till ett block som **ändrar Tid med -10** på alla dina skript som kollar om sprajten har nuddat väggen (alltså den färg din vägg har). Kommer du ihåg vilka skript det är?

  ![image alt text](image_8.png)

  _Så här ska alla skript se ut som kollar om sprajten nuddar väggen_

> Testa ditt projekt! Klicka på START. Räknar tiden ned? Vad händer om du nuddar väggen? Är det enkelt eller svårt att spela? Tänk på att du kan ändra tiden som timern startar med, om du vill.


## Fler banor

Som spelet ser ut nu händer ingenting när du vinner. Det ska du ändra på nu! Du ska få göra så att du kommer till en ny bana, en ny nivå, när du tagit dig genom labyrinten.

14. Klicka på SCEN i nedre högra hörnet. Kopiera din bakgrund med labyrintbanan, genom att högerklicka på den lilla bilden som visar din bagrund och välj kopiera, så får du två likadana bakgrunder. Klicka på den nya andra bakgrunden så den blir aktiverad och sudda sen bort allt **förutom startpunkten** med verktyget som ser ut som ett suddgummi.

  ![image alt text](Välj_Scen.png)
  
  ![image alt text](Bakgrund_kopiera.png)

15. Du kan nu rita en ny labyrint precis som du vill ha den, men kom ihåg att använda **samma färger på väggarna och på målpunkten som i förra labyrinten**.

16. Nu behöver du se till att den nya banan kommer fram när du har gått i mål och vunnit den första. Det gör du genom att lägga till ett block som sänder ut ett **meddelande** när du **nuddar målpunkten**. Kalla meddelandet för **NästaNivå**.

  ![image alt text](image_9.png)

17. Lägg sedan till ett nytt skript för scenen som säger:

  * När sprajten **tar emot meddelandet NästaNivå**

  * Byt till **nästa klädsel**

> Testa ditt projekt! Klicka på START. Vad händer när du har klarat den första banan?
Har du tid över? Här kommer ett par utmaningar för dig som vill fortsätta.

### Fler nivåer
Du kan lägga till ännu fler nivåer genom att rita nya **bakgrunder** som följer reglerna:

  * Samma position på startpunkten

  * Samma färg på väggarna

  * Samma färg på målpunkten

  * Att det inte finns andra saker med samma färg som väggen eller målpunkten


## Frågeställningar

* Var kan du hitta de nuvarande koordinaterna för en sprajt?

* Vad är en variabel?

* Vad händer om start och mål har samma färg?

* Vad måste du tänka på när du skapar flera banor?
