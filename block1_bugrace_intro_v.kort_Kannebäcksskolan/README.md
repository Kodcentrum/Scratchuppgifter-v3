# Börja koda med Scratch - introuppgift
I denna introuppgift får du som är ny till kodning och verktyget Scratch prova på några enkla första steg av kodning.  

**Målet med projektet:** Lägga till ny figur, måla en bakgrund, koda figuren att röra sig.

**Exempel på färdigt projekt:** Klicka på bilden nedan för att testa ett exempelprojekt av uppgiften: <a href="https://scratch.mit.edu/projects/445589191/" target="_blank"> ![image alt text](Exempelprojekt_sprajtPåBana.png)</a>

> **HUR KODAR JAG?** 
</br>
Följ instruktionen steg-för-steg och koda ditt projekt i verktyget Scratch. <a href="https://scratch.mit.edu" target="_blank"> Klicka här för att öppna Scratch.</a> Vi rekommenderar webbläsaren Chrome.</br>
Klicka på **Skapa** överst på Scratch webbsida för att öppna kodverktyget. Om du har ett konto på Scratch kan du logga in, och sen även spara projektet.
    ![image alt text](Scratch_sajt.png) 
</br>

Dax att börja koda! Se till att du har Scratch öppnat i en flik i din webbläsare och den här instruktionen i en annan flik. Eller i två fönster bredvid varandra.
</br>
Klicka på steg 1 nedanför för att gå vidare.

## 1: Välj ny sprajtfigur

I Scratch kallas alla figurer du kan lägga in i ditt projekt för en **sprajt**.

Här ser du några exempel på olika **sprajtar** som finns i Scratch. </br>
    ![image alt text](exempel_sprajtar.png) 
</br>

Vi börjar med att byta ut katt-sprajten i projektet till ny sprajt-figur - tillexempel en skalbagge! 
</br>
Här kan du se en video på hur du kan göra detta. Under videon finns text som beskriver hur du ska göra, om du vill läsa hur du ska gör steg-för-steg.
<video src="./BugRacedel1_nytt.mp4" controls muted height=480 width=640 />

>**VAD SKA JAG GÖRA?**

Se i videon ovan hur du ska:
- Ta bort kattfiguren från projektet
- Välja en ny sprajt-figur (exempelvis en skalbagge)
- Minska sprajtens storlek

<br>
>**INSTRUKTION HUR JAG GÖR STEG-FÖR-STEG:**

Se till att du har klickat **Skapa** i Scratch så att verktyget Scratch har öppnats så du är redo att skapa ditt projekt. 
Först ska vi byta ut katten mot en annan sprajt-figur. Gör såhär:

1. Det finns två likadana katt-figurer i projektet - en stor och en liten. Den stora står på den vita **Scenen** och den lilla katt-bilden i en ruta under scenen. På den lilla kattfiguren finns **en soptunna**. Klicka på soptunnan så raderas kattsprajten ur projektet. Scenen blir helt tom.

    ![image alt text](Ta_bort_Sprajt.png) 

2. Nu ska vi lägga till en ny sprajt-figur. Under scenen långt ner till höger finns en blå knapp med ett vitt kattansikte på. Knappen heter **Välj en sprajt**. Tryck på den.

    ![image alt text](Ny_Sprajt-knapp.png)

3. Nu kommer du in i Scratch stora sprajtbibliotek. Här finns massor av sprajtar att välja mellan. Klicka på den sprajt du vill ha så läggs den till i ditt projekt och hamnar på scenen.

    ![image alt text](sprajtbiblioteket.png)

>**Tips!** I Sprajtbibliotekets meny längst upp finns olika kategorier som du kan välja mellan för att lättare hitta en sprajt du vill ha, exempelvis kategorin *Djur* eller *Mat*. Det finns även en sökfunktion.  ![image alt text](Sprajtbibliotek_kategorier.png)

4. Sprajten du just lagt till är ganska stor, så om du kan minska storleken på den. Under scenen med sprajten finner du rubriken **Storlek** och bredvid står det 100. Det betyder att sprajten är i full storlek, alltså 100%. Ändra siffran till en lägre procent, exempelvis 50. Du kan alltid ändra det sen igen om det blev för stort eller litet.

    ![image alt text](Ändra_Storlek_Sprajt.png)

Nu har du lagt till en sprajt och det är dax att koda så den kan röra på sig. Vi behöver ge sprajten kod med instruktioner hur den ska göra!

Klicka dig vidare till kapitel 2.

## 2: Sprajten rör på sig
Med kod kan vi styra sprajten och projektet. Sprajtar är egentligen bara en stillastående bild. Sprajten behöver kodas med instruktioner om den ska kunna röra sig över scenen. Koden styr **hur** sprajten ska röra sig och **när** den ska börja röra sig. Koden skapar du med de små pusselbitarna med kod som du ser längst til vänster i Scratch. Dax att koda sprajtens rörelse!
<video src="./BugRacedel3_nytt.mp4" controls muted height=480 width=640 />


>**VAD SKA JAG GÖRA?**

Se i videon ovan hur du ska:
- Lägga in kod för start-block: *när GRÖN FLAGGA klickas på*
- Lägga in kod för RÖRELSE: *gå 10 steg*
- Lägga in kod för KONTROLL: *för alltid* (en loop)

<br>
>**INSTRUKTION HUR JAG GÖR STEG-FÖR-STEG:**

Har du lagt märke till START- och STOPP-knappen för projektet som finns ovanför scenen med sprajtfiguren? **Den gröna flaggan** är en start-knapp och **den röda knappen** är en stopp-knapp.

  ![image alt text](START_STOPP-funktion.png)

Nu ska du koda så att din sprajtfigur börjar röra sig när du trycker på START-knappen - som alltså är **den gröna flaggan**. För att göra det måste du tala om för sprajten precis vad den ska göra och när den ska börja röra sig, annars händer ingenting. Sprajtar kan inte tänka av sig själva, de väntar på dina instruktioner. Du ska alltså koda och lägga till ditt första skript som gör att detta händer:

"När START-flaggan klickas på, ska sprajten röra sig framåt."

**Gör såhär:**

1. Längst till vänster hittar du olika färgade teman med rubriker, ex. Rörelse och Utseende. Om man klickar på dessa olika teman kommer flera kodblock i form av pusselbitar fram. Temat och kodblocken har samma färg. 
Klicka först på det gula temat som heter **HÄNDELSER** och välj kodblocket med en grön flagga på, som heter: **"när GRÖN FLAGGA klickas på"**. Ta tag i kodblocket och dra det åt höger ut till den stora, vita ytan i mitten av Scratch - den vita yta kallas för Skript-ytan. Släpp kodblocket där, så ligger det kvar. Nu har du lagt in din första kod i ditt spel.

  ![image alt text](Koda_HÄNDELSER-När_START_klickas_på.png)
  
Nu har du lagt in ett så kallat **start-block** i ditt projekt. Ett startblock ligger alltid överst i koden du vill bygga ihop.  Men det behövs mer kod för att prajten ska veta vad den ska göra när den gröna start-flaggan  har klickats på. Vi mpste koda vidare.

2. Klicka på den blå rubriken som heter **RÖRELSE** och välj blocket **"gå 10 steg"**. Dra ut blocket till den stora skriptytan och fäst det **under** det första kodblocket med gröna flaggan som ligger där. Koppla ihop blocken som pusselbitar, som i bilden nedan.

  ![image alt text](Koda_Exempelscript_RÖRELSE_Gå10Steg.png)

 >**Tips!** Om man för två block nära varandra på skriptytan så syns en grå skugga. Då kan du släppa kodblocket du håller i så kopplar blocken automatiskt ihop sig som pusselbitar.
![image alt text](Koda_exempelbild_snapfunktion_kodblock.png)
</br>

>**Testa koden!** Testa vad som händer när du trycker på START-knappen (den gröna flaggan ovanför scenen). Flyttar sig sprajten lite åt höger när du klickat på startknappen? Prova fler gånger, vad händer?

2. Vi vill att sprajten ska röra sig framåt länge och hela tiden efter att vi tryckt på startknappen. Vi behöver lägga till kodblock som repeterar röreslen framåt om och om igen - alltås en loop i koden. Gör såhär: 
Klicka på det orangea temat som heter **KONTROLL**. Här finner du ett kodblock som heter **"för alltid"**. Detta kodblock är en **loop**, alltså en **repetition** av något som sker om och om igen. Med detta block kommer sprajten fortsätta att röra sig framåt för alltid, ända tills du stoppar koden med den röda stoppknappen ovanför projektet på scenen.
Dra in **"för alltid"**-loopen till skriptytan och lägg den direkt under **"när *GRÖN FLAGGA* klickas på"** så det blå röresleblocket **"gå 10 steg"** lägger sig inuti **för alltid**-loopens block. Då ser det ut som i bilden nedan:

  ![image alt text](Koda_Exempelscript-KONTROLL-För_Alltid-loop.png)

>**Testa koden!** Tryck på START-knappen för projektet. Nu blir det fart på sprajten som springer iväg åt höger och stoppar vid kanten.

3. Sprajten stoppar vid kanten. Klicka på den del av sprajten som du kan se vid kanten och dra den tillbaka ut på scenen igen. Fortsätter den att springa iväg igen? Du måste trycka på den röda **stopp-knappen** ovanför scenen för att stoppa koden och få sprajten att sluta springa.

  ![image alt text](START_STOPP-funktion.png)

>**Tips!** Springer sprajten för fort? Du kan ändra hastigheten genom att skriva en lägre siffra i det blå kodblocket som heter **gå 10 steg**. Klicka på siffran 10 i blocket och skriv exempelvis 3. Starta projektet igen - går sprajten lagom fort nu? Testa dig fram tills du är nöjd med hastigheten.
![image alt text](Koda_RÖRELSE-Ändra_i_variabel-sänk_hastighet.png)
</br>


## 3: Rita en bakgrund
Nu ska vi rita en bakgrund som sprajten kan springa på.
<video src="./BugRacedel2_nytt.mp4" controls muted height=480 width=640 />


>**VAD SKA JAG GÖRA?**

Se i videon ovan hur du ska:
- Aktivera bakgrunder
- Aktivera Bitmapp-läge i ritverktyget
- Välj färg och verktyg för att fylla bakgrund
- Välj ny färg och verktyg för att måla en väg

<br>
>**INSTRUKTION HUR JAG GÖR STEG-FÖR-STEG:**

Den vita rutan bakom din sprajt kallas för en Scen. Vi kan ändra bakgrund på scenen, antingen genom att lägga till en färdig bild från Scratch bakgrundsbibliotek, eller genom att rita en egen bakgrund. Nu ska vi rita en bakgrund. Gör såhär:

1. Först ska vi välja scenens bakgrund och öppna ritverktyget. Klicka först den lilla vita rutan långt ned till höger där det står **SCEN**. Då blir den markerad med en blå ram. Klicka sedan på fliken som heter **BAKGRUNDER** som finns högt upp till vänster i Scratch. (se bilderna nedan)

    ![image alt text](Aktivera_Scen_Bakgrund.png)	    ![image alt text](Aktivera_Bakgrunder-flik.png)

2. Viktigt! Tryck allra först på den blå knappen under ritytan som det står **"Gör till bitmapp** på. 

    ![image alt text](Bakgrunder_Gör_till_bitmapp.png)

3. Välj nu **en färg** för bakgrunden genom att klicka på den lilla färgade rutan ovanför verktygen. Dra i den vita cirkeln i färgväljaren tills du får en färg du vill ha.

   ![image alt text](RITA_Välj_Färg-funktion_bitmapp.png)
    
4. Klicka på vertyget som ser ut som en **hink**. Klicka sen på den vita rutan bredvid hinken så fylls hela bakgrunden med din färg.

  ![image alt text](Bakgrunder_Fyll_med_färg-verktyg.png)

5. Nu ska vi måla en väg på bakgrunden som sprajten sen kan springa på. Klicka på verktyget som ser ut som en **PENSEL**, så blir den vald. Klicka sen på **siffran 10** som står ovanför ritytan och ändra penselns storleken till 100. Välj sen en **ny färg** med färgväljaren. Strecket ska bli tjockt så sprajten får plats på vägen.

 ![image alt text](Bakgrund_måla_pensel.png)
 
6. Måla nu en rak väg på ritytan med penseln och den nya färgen.

  ![image alt text](BugRace_Intro_ritad_bana_bakgrund_exempel.png)



## 4: Sätt en Startposition
För att slippa dra tillbaka skalbaggen varje gång du vill starta spelet, kan du koda in att sprajten alltid ska starta på en bestämd plats.
<video src="./BugRacedel4_nytt.mp4" controls muted height=480 width=640 />


>**VAD SKA JAG GÖRA?**

Se i videon ovan hur du ska:
- Dra sprajten till en plats på vägen där du vill den ska starta
- Lägg in kodblock för position med RÖRELSE: gå till x:__ y:__

<br>
>**INSTRUKTION HUR JAG GÖR STEG-FÖR-STEG:**

1. Dra sprajten till den position där du vill att den ska starta på vägen när spelet börjar. 

2. Klicka på tema **RÖRELSE** och välj blocket **"gå till x:__ y:__"**. Lägg in kodblocket i skriptet direkt under gula blocket som heter **"när START klickas på"**. De siffror (värden) som står i blocket vid X och Y är **KOORDINATERNA** för den position som du har ställt skalbaggen på - alltså en bestämd plats i ditt spel. 

  ![image alt text](Koda_RÖRELSE_Gå_till_X_Y_Startposition.png)

Nu kommer skalbaggen automatiskt att ställa sig på samma startposition varje gång du trycker på gröna START-flaggan.

>**Testa koden!** Testa ditt projekt och starta koden. Startar sprajten från samma plats varje gång du trycker på den gröna start-flaggan? Går den lagom fort?

Nu har du skapat ditt första projekt i Scratch och kodat ditt första program som styr en sprajt att röra sig. Bra jobbat! 


## Färdig!
Grattis, nu har du skapat ditt första projekt i Scratch och kodat ditt första program med ett skript som styr en sprajt! 
Nu har du lärt dig lite grunder i Scratch och kan ta dig an lite större projekt!


## Frågeställningar

* Vad är en sprajt?

* Vad är en loop?

* Vad är ett skript?
