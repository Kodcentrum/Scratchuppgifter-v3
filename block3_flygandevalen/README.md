# Flygande valen

Nu ska du få göra en version av spelet Sky Whale där en narval flyger omkring och äter munkar för att få extra energi och samlar andra objekt för att flyga högre och högre! Här i vår version ska valen äta så många munkar som möjligt - varje munk ger poäng! Du kommer att lära dig att använda variabler och slumptal för att få spelet att fungera.

> Bläddra dig fram genom denna guide, steg för steg. 
  Öppna även kodarverktyget Scratch genom att klicka på länken bredvid katt-figuren ovan eller via <a href="https://scratch.mit.edu" target="_blank">scratch.mit.edu</a>. Här kodar och skapar du själva spelet utifrån instruktionerna nedan. 

Här kan du se ett exempel på hur ett färdigt spel kan tänkas se ut: <a href="https://scratch.mit.edu/projects/104732551/" target="_blank">https://scratch.mit.edu/projects/104732551/</a>

![Färdigt projekt](image_0.png)
  
  Då börjar vi koda!

## 1: En val som följer muspekaren
När du startar ett nytt projekt visas en katt som enda sprajt på vit bakgrund. Ta bort katten och rita en egen sprajt som ska vara spelets huvudkaraktär, den flygande valen. Den ska kunna styras med hjälp av muspekaren.

1. Tryck på **lilla soptunnan** på lilla kattfiguren nere till höger, så försvinner katt-sprajten ur ditt projekt.

   ![Ta bort sprajt genom att klicka på vita soptunnan på lilla sprajt-ikonen](image_1.png)

2. Håll muspekaren över **"Välj en sprajt”** (katten med det vita plus-tecknet) nere i högra hörnet, så kommer en meny upp. Välj  **Måla** (penseln) i menyn - nu kan du rita en egen ny sprajt. Här får du själv prova dig fram och rita din egen val. Om du hellre vill använda en färdig sprajt ur Scratch sprajtbibliotek, så tryck bara på knappen **”Välj en sprajt”** (katten med det vita plus-tecknet).

  ![Rita nya sprajt genom att klicka på måla i menyn under den vita katten med ett plus](image_2.png)

3. För att spelet ska bli enklare att spela måste du nu minska storleken på valen. Ändra storleken genom att skriva in 50 i **rutan för storlek** (finns på höger sida). Välj en ännu mindre storlek om det behövs.

  ![Skriv i rutan för storlek](image_3.png)

4. Tryck nu på kod-fliken i översta högra hörnet, så stängs ritverktyget och du kan börja koda. Dra sen ut ett kod-block för **HÄNDELSER**: **"när START (flaggan) klickas på”** och lägg ut på kodytan. Under detta block fäster du ett **”för alltid”** block som finns under orangea temat **KONTROLL**. Det här är en LOOP som gör att sprajten fortsätter röra sig hela tiden, om och om igen, så länge programmet är igång.

5. Inuti den orangea loopen lägger du ett block från **RÖRELSE** som säger **"peka mot muspekare”** och under den lägger du i blocket  **”gå 10 steg”**. Ändra värdet 10 i blocket mot ett värde som du tycker ger lagom hastighet! (Ju högre tal, desto snabbare rör sig sprajten i spelet.)

6. För att valen alltid ska starta från samma ställe på scenen varje gång spelet går igång, behöver du sätta en startposition. Gör såhär: Dra valen dit du vill ha den på scenen när ditt spel ska starta. Välj från **RÖRELSE** och dra ut **"gå till x: y:”** och koppla fast direkt under blocket **"när START (flaggan) klickas på"**, alltså ovanför loopen **"för alltd"**. De värden som står automatiskt efter X och Y är KOORDINATER för den plats där du placerat valen. Du kan alltid ändra om dem om du inte är nöjd.

  ![Kod för när flaggan klickas på gå till x och y för alltid peka mot muspekare gå 3 steg](image_4.png)

**Tips:** För att valen inte ska vända sig upp och ned i spelet, klicka på sprajtens riktning och klicka sen på valet **vänster/höger** (de två små pilarna i nedre mitten som pekar mot varandra).

  ![klicka på sprajtens riktning](image_15.png)

> Testa ditt projekt! Klicka på START-flaggan. Kan du styra valen med muspekaren? Går den lagom snabbt?
Vad händer om du inte rör muspekaren och valen hinner ikapp den? Hur ser det ut? Varför händer det, tror du?

7. Studsar din val omkring helt tokigt när den kommer nära muspekaren? Du kan förhindra det genom att lägga till blocket **"om <> då”** som finns under **KONTROLL**. Blocket för **"om <> då”** ska då läggas inuti loopen men utanför din kod för rörelsen.

8. Välj sen två olika block att lägga in från **OPERATORER** och **KÄNNA AV**. (Se bilden nedan för hur de ska läggas in i skriptet.) När du är klar ska val-sprajten göra detta:

  * Om **avståndet till muspekare är större än 10** då **Peka mot muspekaren** och **gå** 

  * Stå stilla om avståndet är mindre än eller lika med 10.

  ![Tidigare koden med om avståndet till musen är större än 10](image_5.png)

> Testa ditt projekt! Klicka på START. Fungerar det bättre att styra valen nu? 

## 2: En himmel som bakgrund
Du ska nu få rita en bakgrund till spelet. Här i exemplet är det en blå himmel, men du får hitta på som du vill. Du behöver inte rita moln på himlen, för det lägger du till som sprajtar. Då kan du välja att programmera dem senare i en av våra utmaningar!

9. För att ändra bakgrunden trycker du först på SCEN längst till höger och sedan på fliken BAKGRUNDER högst upp i mitten.

  ![En vit bakgrund till höger som säger bakgrund](image_6.png)
  ![En tabb i övre menyn som säger bakgrund](image_7.png)

10. Tryck på **"Gör till bitmapp"**. Välj en färg under **"Fyll"**. Tryck på målarburken sedan på bakgrunden för att måla hela bakgrunden med den valda färgen.

11. Moln gör du som sprajtar. Rita egna med **"Måla”** eller välj en som redan finns. Sök efter **”Cloud”** för att hitta moln. Gör sprajten lagom stor och placera på scenen. Kopiera för flera moln, eller välj två olika moln om du vill!

  ![Två sprajtar som visar clouds efter man har sökt efter dem](image_8.png)

## 3: Munkar att äta
I spelet ska valen äta munkar som rör sig över himlen. Du ska nu få skapa dessa sprajtar och få dem att röra sig slumpmässigt. Om du inte vill rita egna munkar själv finns det färdiga i Scratch. Du gör en munk-sprajt som du kodar, sen kopierar du den till fler munkar  efter att skriptet med dess kod är klart. På så vis slipper du koda om samma sak för vardera munk, det blir enklare. Nu börjar vi:

12. Rita en egen munk med **"Måla”** eller välj en färdig som redan finns i Scratch sprajt-bibliotek. Under kategorin **"Mat"** hittar du en munk, **”Donut”**. Ändra sprajtens storlek så den blir lagom stor och placera på en startposition på scenen med valen. Vänta med att kopiera sprajten till efter att du har programmerat den! Du behöver bara en sprajt för alla dina munkar - de blir kopior av varandra.

  ![En bild av en donut](image_9.png)

13. Då börjar vi koda vår munk. Se till att munk-sprajten är vald, så att du kodar munken och inte valen. Dra sen ut blocket för **HÄNDELSER**: **"när START (flaggan) klickas på”** till skriptytan för munk-sprajten. Under start-blocket fäster du sen blocket **”för alltid”** från **KONTROLL** - alltså en loop.

14. Inuti loopen fäster du nu olika block från **RÖRELSE** och även **"Operatorer"** som säger att sprajten ska:

  **För alltid**

  * Gå 2 steg

  * Slumpmässigt rotera sig mellan -20 till 20 grader

  * Studsa vid kanten


  ![Donuts kod](image_10.png)


**Tips:** Blocket för **"slumptal”** hittar du under **OPERATORER**. Du lägger in blocket inuti rutan för värdet på **”rotera”**. Skriv in de värden som du vill att skriptet ska slumpa mellan. Prova dig fram vilka värden som blir bra, minusvärde ger vänster och plusvärde är höger!

> Testa ditt projekt! Klicka på START. Flyger munken runt på himlen?
> Pröva att byta ut värdena för "slumptal” och ”gå”-blocken. Rör sig munken annorlunda? Vad gör "studsa om vid kanten”-blocket? Pröva att ta bort det blocket och se vad som händer!


## 4: Valen äter munkar
Nu ska du få valen att äta munken. När valen når fram till en munk ska munken bli osynlig för att sedan visa sig igen en stund senare, så att munkarna aldrig tar slut! Gör såhär:

15. Se till att din munk-sprajt är vald för att kunna kodas. Dra ut blocket **"om <> då"** som finns under **KONTROLL** och lägg det inuti munkens **”för alltid”**-loop, efter rörelserna. Nu ska du lägga till block så att munken kan **KÄNNA AV** om den **”rör vid sprajten”** som alltså är valen - så den vet när den ska bli osynlig. Skriptet ska då inehålla instruktioner som säger att:

  **Om** rör valen, **då** ska munk-sprajten:

  * Gömma sig

  * Vänta 3 sekunder

  * Visa sig igen
  

16.  Lägg till ett block för **"visa”** även direkt under **”när START klickas på”**. Annars kan det bli fel när du startar spelet! När tror du att det kan hända?

  ![Kod för donuts gömmer nu donuts om den rör vid valen](image_11.png)

> Testa ditt projekt! Klicka på START. Försvinner munken när den nuddar vid valen? Spelar det någon roll vilken del av valen som rör vid munken?

Munken försvinner oavsett var på valen den nuddar. Men den borde egentligen bara försvinna om den nuddar valens mun eftersom den blir uppäten. Dessutom kan valen nu vänta på stället och äta upp munken igen när den dyker upp, vilket inte är så rättvist!

17. Hur kan du se till att munken bara försvinner om den nuddar valens mun? Se först till att din val har en speciell färg på sin mun, en färg som inte finns någon annanstans på sprajten. Du kan byta ut blocket **"rör sprajten”** mot blocket **”rör färgen”** och välja färgen som valen har på sin mun. Då försvinner munken endast om den rör vid munnens färg, och inte om den stöter emot andra delar av valems kropp.

  **Tips:** När du har ritat munnen kan du i skriptet för **"rör färgen”** välja färg genom att klicka på färgrutan och sedan färgväljaren och därefter på valens mun! Då blir det rätt färg i blovket i ditt skript.

 ![Färgväljaren längst ner i menyn, en bild av en pipett och ett fotografi](image_11b.png)

18. Sedan kan du få munken att flytta sig till en slumpvis plats på scenen innan den visar fram sig igen. För det behöver du lägga till ett  block för **"gå till x: y:”** och välja **”slumptal”** som munkens nya koordinater! Dra runt munken på scenen för att se vilka värden som hela scenen har.

  ![Kod för donut som nu går slumpmässigt mellan x -240 och 240 och slumpmässigt mellan y -180 och 180](image_12.png)


> Testa ditt projekt! Klicka på START. Försvinner munken endast om den nuddar valens mun? Dyker den upp igen på en ny slumpvis vald plats på scenen istället för där den blev uppäten?



## 5: Poäng för att äta munkar!
Det räcker inte med att bara äta munkar. Du ska kunna samla poäng också! För varje munk som valen äter ska spelet lägga till 1 poäng, och du vill kunna se hur många poäng du har fått.

För att räkna poäng behöver du med kod skapa en VARIABEL. Det kan liknas vid en låda där du lägger i eller tar ur saker. I variabeln lägger du ett värde, t ex en siffra, som kan öka eller minska. Variablen håller reda på hur många saker som ligger i lådan, exempevis hur många poäng du har i ditt spel, en poängräknare. Låter det konstigt? Snart får du se hur det fungerar. Låt oss koda en poängräknare som håller koll på hur många munkar valen ätit upp - ett poäng för vardera munk.

19. Börja med att skapa ett skript som får munken att skicka ett **meddelande** när den blir uppäten. Fäst blocket **"skicka"** från **HÄNDELSER** under **”rör färgen”** och ändra till ett nytt meddelande i rullistan. Döp meddelandet till ”*jag är uppäten*”.

  ![Koden skickar meddelande "jag är uppäten" när den rör vid valens mun](image_13.png)

20. Markera nu SCEN istället för sprajtarna, så du kan lägga kod på scenen istället. Här gör du ett skript för den som tar emot meddelandet som den uppätna munken skickar ut. Här vill du tala om för scenen att den ska räkna poäng när munken blir uppäten. För det behöver du **skapa en variabel** från **VARIABLER** som du döper till "*poäng*”. Fäst blocket **”ändra _poäng_ med 1”** efter **”när jag tar emot "*meddelande1"* ”**. Klicka på lilla pilen i blocket bredvid texten "*meddelande1*" och ändra till "*poäng*", så scenen tar emot rätt meddelande.

22. För att nollställa spelets poängräknare vid start gör du ett till skript som säger att **"när START (flaggan) klickas på”** så **”sätt poäng till 0”**.

  ![Bakgrundens kodyta har kod för att nollställa vid start av programmet och kod för att om den tar emot meddelandet jag är uppäten att ändra poäng med 1](image_14.png)


23. Nu kan du kopiera munk-sprajten så att du får så många munkar som du vill ha på himlen! Lopiera genom att högerklicka på den lilla bilden av din munk-sprajt och välj kopiera. Då får du en till likadan munk, med dess kod-skript och allt. Kopiera fram flera munkar. 

> **Glöm inte!** Du behöver ändra i vardera munk-sprajts **startposition** för var de ska vara när spelet börjar. Annars börjar alla munkar på exakt samma ställe när spelet börjar.

Om du vill att munkarna ska bli unika och därmed lite olika varandra kan du till exempel:

  * Ändra munkarnas färg och storlek

  * Ändra munkarnas hastighet och riktning

**Tips:** Om du vill kan du lägga till en ljudeffekt när valen äter munken! Lägg in ett block för **"starta ljud"** i det skript du nyss gjort. Välj ljud i Scratch ljud-bibliotek. 

> Testa ditt projekt! Klicka på START. Står poängräknaren på 0 när du startar spelet? Ändras poängen när valen äter upp munkar?



## Nu har du ett färdigt spel!

Grattis, nu har du gjort färdigt uppgiften.

* **Döp ditt projekt** i rutan högst upp till vänster.

* Tryck på **DELA** högst upp till höger för att andra ska kunna hitta projektet på Scratch.

* Gå ut till projektsidan och låt någon annan **testa ditt spel**.

## Utmaningar

Nu är det fritt fram för dig att hitta på helt egna funktioner till ditt spel – eller fortsätta med någon av våra utmaningar:

  * Tidsgräns för spelet med en tidräknare (VARIABLER)

  * Minuspoäng för moln

  * Flera banor - andra figurer än valen?
  
  * Munkar i olika hastighet och rörelsemönster
  
  * Super-munkar som ger mer än 1 poäng - eller motståndare som ger minuspoäng eller stjäl tid?
  
  * En motståndare som åker runt och äter upp munkarna eller som du måste undvika för att inte bli game over?
  
  * Vad mer kan du komma på att spelet kan innehålla?


### Tidsgräns för spelet 
Testa ett exempelspel av en påskinspirerat spel nedan med en tidräknare. <a href="https://scratch.mit.edu/projects/383201383/" target="_blank">
  ![projektexempel Påskharen äter ägg](Flygande_påskharen_äter_ägg.png)</a> 
  
Om du vill att spelet ska vara på tid kan du göra ett skript som avslutar spelet efter ett visst antal sekunder. Hur många munkar hinner valen äta på exempelvis 30 sekunder?

För det behöver du först skapa en ny VARIABEL som du döper till **"tid”** och som gäller för alla sprajtar. Sedan gör du ett skript för SCEN som talar om att:

  * Starta när spelet startar

  * Sätt **"tid”** till 30

  * **Repetera** tills **tid < 0**

    * **ändra tid med -1**

    * **vänta** 1 sekund

* Om **tid < 0**, då **stoppa alla skript** så att spelet avslutas


### Minuspoäng för moln
I spelet SkyWhale ska valen undvika vissa flygande objekt, som bläckfiskar och hårtorkar. Kan du skapa ett skript för att minska poäng, **"ändra poäng med -1”**, om valen flyger på ett moln?


### Flera banor
I spelet SkyWhale kan valen även flyga ut i rymden och ner till en undervattensvärld. Kan du göra ett skript som **byter scenens bakgrund** när spelaren når en viss poäng – så att ditt spel består av flera banor? Rita flera bakgrundsbilder eller välj ur biblioteket under fliken BAKGRUNDER.

## Frågeställningar

* Vad är slumptal och vad kan du använda dem till?

* Vad är en variabel?

* Vilka två sätt kan du använda för att köra kod när två sprajtar rör vid varandra?
