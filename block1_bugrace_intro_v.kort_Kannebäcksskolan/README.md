# Börja koda med Scratch - introuppgift
I denna enkla introuppgift får du prova på några första steg av kodning i verktyget Scratch.  

**Ordlista för Scratch**
**SPRAJT:** En sprajt är en figur eller bilder av saker och ting som du väljer att lägga in i ditt Scratchprojekt. Alla sprajtar kan påverkas och styras med kod som du väljer att lägga till. 
**KOD:** Kod är det du använder när du programmerar. Med hjälp av kod kan du ge instruktioner till dina sprajtar och projektet i sin helhet för vad som ska hända i det, exempelvis att en sprajt ska börja röra på sig. Koden i Scratch ser ut som små pusselbitar som kan pusslas ihop. 
**SKRIPT:** När du byggt ihop olika kod-bitar bildar de tillsammans ett skript. Du kan skapa flera olika skript inom projektet, som alla tillsammans styr olika delar inom projektet, exempelvis olika sprajtfigurers rörelser, musik som spelas och bakgrundsbilder som ändras. 
**PROGRAM:** All kod och skript som finns i projektet ingår i projektets program - alltså det som styr hur hela projektet ska fungera i sin helhet.
**ANIMATION & KLÄDSLAR:** I Scratch kan man skapa **animation**, alltså att figurer och bilder ser ut att röra på sig eller ändra utseende när projektet startats. Detta görs genom att olika bilder av sprajten (så kallade **klädslar**) kodas till att snabbt växlas mellan och därmed ser sprajtarna ut att kunna röra på sig mellan olika positioner eller utseenden, exempelvis att ett öga ser ut att blinka om du växlar flera gånger mellan en bild med ett öppet öga och en bild med ett stängt öga, och tillbaka igen. 

Testa ett exempelprojekt nedan: <a href="https://scratch.mit.edu/projects/27697024/" target="_blank"> ![image alt text](BugRace_Intro_exempelspel.png)</a>

> **HUR KODAR JAG?** 
</br>
Följ denna instruktion steg för steg och koda ditt projekt i verktyget Scratch. <a href="https://scratch.mit.edu" target="_blank"> Klicka här för att öppna Scratch i en ny flik.</a> I Scratch klickar du på **Skapa** för att börja. Logga gärna in på Scratch så kan du även spara och dela ditt projekt efteråt. Saknar du konto på Scratch? Klicka på **Gå med Scratch** och skaffa enkelt och gratis ett konto där.
    ![image alt text](Scratch_sajt.png) 
</br>

Dax att börja koda! Klicka på steg 1 nedan för att gå vidare i instruktionen.

## 1: Välj ny sprajtfigur

Byt ut katt-sprajten till ny sprajt-figur - tillexempelvis en skalbagge!
<video src="./BugRacedel1_nytt.mp4" controls muted height=480 width=640 />

>**VAD SKA JAG GÖRA?**

Se i videon ovan hur du ska:
- Ta bort kattfiguren från projektet
- Välja en ny sprajt-figur (exempelvis en skalbagge)
- Minska sprajtens storlek

<br>
>**INSTRUKTION HUR JAG GÖR STEG-FÖR-STEG:**

Nu ska vi byta ut katten mot en skalbagge. Gör såhär:

1. Tryck på **soptunnan på lilla rutan med kattfiguren** så försvinner den ur projektet.

    ![image alt text](Ta_bort_Sprajt.png) 

2. Nu vill du lägga till en ny sprajt. Tryck på knappen för **Välj en sprajt** som finns under den **scenen** med den vita bakgrunden:

    ![image alt text](Ny_Sprajt-knapp.png)

3. Nu kommer du in i Scratch sprajtbibliotek. Här finns marros av sprajt-figurer att välja mellan. Klicka på den sprajt du vill ha så läggs den till i ditt projekt.

>**Tips!** I menyn längst upp finns olika kategorier som du kan välja för att lättare hitta det du vill ha, exempelvis *Djur* och *Mat*. Det finns också en sökfunktion.

4. Sprajten du just lagt till är ganska stor, så om du vill kan du minska storleken på den. Under scenen med sprajten finner du rubriken **Storlek** och bredvid står det 100. Det betyder att sprajten är i full storlek, alltså 100%. Ändra siffran till en lägre procent, exempelvis 70. Du kan alltid ändra det sen igen om det blev för stort eller litet.

    ![image alt text](Ändra_Storlek_Sprajt.png)

Nu har du lagt till en sprajt och det är dags att den ska börja röra på sig. Vi behöver ge den kod med instruktioner!

Klicka dig vidare till kapitel 2.

## 2: Sprajten rör på sig
Sprajten kan inte röra på sig, då den inte har några instruktioner om hur den ska göra. Den skapar du med de små pusselbitarna med kod.Dax att koda rörelse.
<video src="./BugRacedel3_nytt.mp4" controls muted height=480 width=640 />


>**VAD SKA JAG GÖRA?**

Se i videon ovan hur du ska:
- Lägga in kod för start-block: *När GRÖN FLAGGA klickas på*
- Lägga in kod för RÖRELSE: *Gå 10 steg*
- Lägga in kod för KONTROLL: *För alltid* (en loop)

<br>
>**INSTRUKTION HUR JAG GÖR STEG-FÖR-STEG:**

Har du lagt märke till START- och STOPP-knappen för projektet som finns ovanför scenen med dig sprajtfigur? **Den gröna flaggan** är en start-knapp och **den röda knappen** är en stopp-knapp.

  ![image alt text](START_STOPP-funktion.png)

Nu ska du koda så att din sprajtfigur börjar röra sig när du trycker på START-knappen - som alltså är **den gröna flaggan**. För att göra det måste du tala om för sprajten precis vad den ska göra, annars händer ingenting. Sprajtar kan inte tänka av sig själva, de väntar på dina instruktioner. Du ska alltså koda och lägga till ditt första skript som säger:

"När jag trycker på START-flaggan, ska sprajten röra sig framåt."

Gör såhär:

1. Längst till vänster hittar du olika färgade rubriker. Om man klickar på rubrikerna kommer olka färgade pusselbitar fram bredvid. Klicka på den gula rubriken som heter **HÄNDELSER** och välj pusselbiten som har en grön flagga på sig och som heter **"när START (grön flagga) klickas på"**. Ta tag pusselbiten och dra detta kodblock ut till den stora, tomma skriptytan i mitten av Scratch. Släpp kodblocket där. 

  ![image alt text](Koda_HÄNDELSER-När_START_klickas_på.png)
  
Nu har du lagt in ett så kallat **start-block** i ditt projekt. Men det behövs mer kod för att prajten ska veta vad den ska göra när den gröna flaggan klickats på. Vi kodar vidare.

2. Välj nu den blå rubriken som heter **RÖRELSE** och välj blocket **"gå 10 steg"**. Dra ut blocket till skriptytan och fäst det  direkt under det första kodblocket som ligger där. Koppla ihop dem som pusselbitar.

  ![image alt text](Koda_Exempelscript_RÖRELSE_Gå10Steg.png)

> Tips: om man för två block nära varandra på skriptytan så dyker en grå skugga upp. Då kan du släppa kodblocket du håller i så kopplar blocken automatiskt ihop sig som pusselbitar.

  ![image alt text](Koda_exempelbild_snapfunktion_kodblock.png)

>**Testa koden!** Testa vad som händer när du trycker på START-knappen (den gröna flaggan ovanför scenen). Flyttar sig sprajten lite åt höger nr du klickat på startknappen? Prova fler gånger, vad händer?

2. Nu ska vi koda så att sprajten rör sig framåt hela tiden efter att du tryckt på startknappen. Under den orangea rubriken som heter **KONTROLL** finns kodblocket som heter **"för alltid"**. Detta kodblock är en **loop**, alltså en **repetition** av något som sker om och om igen. Med detta block kommer sprajten fortsätta att röra sig framåt för alltid ända tills du stoppar koden med stoppknappen.
Dra in **"för alltid"**-loopen och lägg den direkt under **"när *GRÖN FLAGGA* klickas på"** så blocket **"gå 10 steg"** hamnar inuti blocket med **för alltid**-loopen. Kolla på bilden nedan så ser du hur du ska göra.

  ![image alt text](Koda_Exempelscript-KONTROLL-För_Alltid-loop.png)

  _För att sprajten ska fortsätta att gå måste du lägga "gå 10 steg" i mitten av "för alltid"-loopen. "Gå 10 steg" kommer då att upprepas för alltid - om och om igen, så skalbaggen går och går och går._

>**Testa koden!** Tryck på START-knappen för projektet. Nu blir det fart på sprajten som springer iväg åt höger! 

3. Sprajten stoppar vid kanten. Klicka på den del av sprajten som du kan se vid kanten och dra den tillbaka ut på scenen igen. Fortsätter den att springa? Du mpste trycka på den röda **stopp-knappen** ovanför scenen för att stoppa koden och få sprajten att sluta springa.

3. Går sprajten för fort framåt? Du kan ändra hastigheten genom att skriva en lägre siffra i det blå kodblocket dom heter **gå 10 steg**. . Klicka på siffran 10 och ändra till en lägre siffra, exempelvis 5. Starta projektet igen - går sprajten lagom fort nu? Testa dig fram tills du är nöjd med hastigheten.

  ![image alt text](Koda_RÖRELSE-Ändra_i_variabel-sänk_hastighet.png)


## 3: Rita en bakgrund
Du ska nu rita en bakgrund som sprajten kan springa på.
<video src="./BugRacedel2_nytt.mp4" controls muted height=480 width=640 />


>**VAD SKA JAG GÖRA?**

Se i videon ovan hur du ska:
- Aktivera bakgrunder
- Aktivera Bitmapp-läge
- Välj färg och verktyg för att fylla bakgrund
- Välj ny färg och verktyg för att måla en bana

<br>
>**INSTRUKTION HUR JAG GÖR STEG-FÖR-STEG:**

1. För att ändra på bakgrunden trycker du först på den vita lilla rutan längst ner till höger där det står **SCEN**, så den blir markerad. Klicka sedan på fliken **BAKGRUNDER** som du finner högst upp till vänster.

    ![image alt text](Aktivera_Scen_Bakgrund.png)	    ![image alt text](Aktivera_Bakgrunder-flik.png)

2. Tryck på blå knappen som det står **"Gör till bitmapp** på. 

    ![image alt text](Bakgrunder_Gör_till_bitmapp.png)

Välj sen **en färg** du gillar genom att klicka på den lilla färgade rutan ovanför och ställ in färgen du vill ha, genom att dra eller klicka på de olika reglagen tills du är nöjd.

   ![image alt text](RITA_Välj_Färg-funktion_bitmapp.png)
    
Fyll sen bakgrunden med färgen du valt genom att klicka på verktyget **Fyll** som ser ut som en liten hink och sen klicka på stora vita rutan så fylls bakgrunden med den färg du valt.

  ![image alt text](Bakgrunder_Fyll_med_färg-verktyg.png)
  
> Tips: Viktigt att färgen du valt inte är samma som någon färg som din sprajt har på sig. Annars kan det bli problem i ditt projekt längre fram.

3. Tryck sen på verktyget **PENSEL** och välj en ny färg till banan i ditt spel. Viktigt att färgen inte är samma som skalbaggens färger. Gör även penseln mycket bredare genom att klicka länge på uppåtpilen som finns snett ovanför, eller bara skriva 100 i rutan bredvid pilarna. Strecket ska bli tjockt. 

 ![image alt text](Bakgrund_måla_pensel.png)
 
Rita nu en bana som en oval eller en utdragen cirkel - gör den så stor som du kan, utan att den hamnar utanför spelets ruta!

Ungefär så här kan nu spelets bana se ut. Om banan är väldigt smal kommer spelet bli väldigt svårt, skalbaggen hamnar då lätt utanför banan - och du blir Game Over. Är banan bred blir spelet lite lättare då du har mer plats att styra runt på utan att åka ut! 

  ![image alt text](BugRace_Intro_ritad_bana_bakgrund_exempel.png)



## 4: Sätt en Startposition
För att slippa dra tillbaka skalbaggen till startplatsen varje gång du vill starta spelet, kan du säga åt datorn att placera den på en bestämd plats vid start.
<video src="./BugRacedel4_nytt.mp4" controls muted height=480 width=640 />


>**VAD SKA JAG GÖRA?**

Se i videon ovan hur du ska:
- Dra sprajten till där du vill den ska starta på banan
- Lägg in kod för RÖRELSE: gå till x:__ y:__

<br>
>**INSTRUKTION HUR JAG GÖR STEG-FÖR-STEG:**

1. Dra sprajten till den position där du vill att den ska starta på banan när spelet börjar. Se till att sprajten står på mitten av banan och helst på en raksträcka, inte en kurva. 

2. Under **RÖRELSE** väljer du blocket **"gå till x:__ y:__"** och koppla fast blocket direkt under **"när START klickas på"**, ovanför **"för alltid"**-loopen. De siffror (värden) som står vid X och Y är KOORDINATERNA för den startposition som du har ställt skalbaggen på - alltså en bestämd plats i ditt spel. 

  ![image alt text](Koda_RÖRELSE_Gå_till_X_Y_Startposition.png)

Nu kommer skalbaggen automatiskt att förflyttas till samma startposition varje gång du trycker på gröna START-flaggan.


## 5: Styra skalbaggen

Nästa steg blir att göra det möjligt att styra skalbaggen, så den inte rusar rakt av banan! För det behöver du två korta skript. Ett som säger åt datorn att skalbaggen ska svänga åt höger när du trycker ned höger piltangent på datorns tangentbord, och ett annat som säger åt den att svänga vänster när du trycker ned vänster piltangent. (Använder du surfplatta med pekskärm finns tips på hur du kan koda sprajten att följa ditt finger längre ned.)
<video src="./BugRacedel5_nytt.mp4" controls muted height=480 width=640 />

>**VAD SKA JAG GÖRA?**

Se i videon ovan hur du ska:
- Lägg in kod för HÄNDELSER: när mellanslag trycks ned. Dra in två stycken sådana block
- Ändra *mellanslag* i kodblocken till *vänsterpil* och *högerpil*
- Lägg in kod för RÖRELSE: rotera vänster 15 grader och ett block rotera höger 15 grader

<br>
>**INSTRUKTION HUR JAG GÖR STEG-FÖR-STEG:**

>**Tips! Använder du surfplatta med pekskärm?** Koda då som bilden visar nedan istället för knappar att styra med, så följer sprajten ditt finger på skärmen runt banan: 
  ![image alt text](Bugrace_touchscreen_följ_muspekare.png)

1. **Koda styrknappar såhär:** under rubriken **HÄNDELSER** finns ett block som säger **"när mellanslag trycks ned"**. Dra in två sådana block och lägg dem bredvid varandra vart som som helst fritt på skriptytan. 

  ![image alt text](Koda_HÄNDELSER-När_Mellanslag_Trycks_Ned_tangentbord-styrfunktion.png)

Bredvid ordet **mellanslag** i dessa två block finns en liten vit triangel. Klicka på lilla triangeln i vardera block och välj i rullistan som kommer fram -  ändra till **vänsterpil** i det ena blocket och till **högerpil** i det andra.

  ![image alt text](Exempelbild_Händelser_Byt_tangentbordsknapp-funktion.png)

2. Nu ska vi få sprajten att kunna vända sig. Under **RÖRELSE** hittar du ett block som säger **"rotera (pil vänster) 15 grader"** och ett som säger **"rotera (pil höger) 15 grader"**. Koppla fast dessa två block under blocken **"när vänsterpil tangent trycks ned"** och **"när högerpil tangent trycks ned"**.

  ![image alt text](Koda_HÄNDELSER_RÖRELSE_Styra_Sprajten_med_piltangent-funktion.png)

> Testa vad som händer nu när du trycker på gröna START-flaggan. Kan du styra skalbaggen åt båda hållen med piltangenterna på tangentbordet? Går det för fort? Sänk skalbaggens hastighet genom att ändra variabelsiffran i rörelse-blocket!


## 6: Ändra startriktning

Om du trycker på START-flaggan igen märker du att skalbaggen behåller den riktning som den hade när du avslutade spelet sist. Kan lätt bli fel håll och detta kan du lösa genom att lägga in ett till init-skript som säger åt datorn att skalbaggen alltid ska vara vänd åt höger när du startar spelet.
<video src="./BugRacedel6_nytt.mp4" controls muted height=480 width=640 />

>**VAD SKA JAG GÖRA?**

Se i videon ovan hur du ska:
- Lägg in kod för RÖRELSE: peka i 90 graders ritning

<br>
>**INSTRUKTION HUR JAG GÖR STEG-FÖR-STEG:**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        

1. Under **RÖRELSE** väljer du blocket som säger **"peka i 90 riktning"**. 

  ![image alt text](Koda_Exempelscript-RÖRELSE-Peka_i_90_graders_riktning.png)

> Testa vad som händer om du ändrar på värdet från 90 grader till något annat (klicka på siffran 90 i blocket, dra runt muspekaren till annan vinkel och klicka utanför bilden för att välja annan vinkel).
  
  ![image alt text](Koda_exempelbild_RÖRELSE-Ändra_peka_i_riktning_gradantal.png)


## 7: Känna av när skalbaggen åker av banan

Skalbaggen måste känna av när den hamnar utanför banan och bli Game Over! Det löser vi genom att skalbaggen känner av vilken färg den åker på. Vi kodar ett VILLKOR för skalbaggen, som säger att: "**OM** skalbaggen rör vid färgen utanför banan - **DÅ** ska spelet ta slut".
<video src="./BugRacedel7_nytt.mp4" controls muted height=480 width=640 />


>**VAD SKA JAG GÖRA?**

Se i videon ovan hur du ska:
- Lägg in kod för KONTROLL: om...då
- Lägg in kod för KÄNNA AV: rör färgen_. Lägg blocket i det kantiga hålet mellan om...då.
- Lägg in kod för UTSEENDE: säg Hej! i 2 sekunder. Ändra texten till Game Over!

<br>
>**INSTRUKTION HUR JAG GÖR STEG-FÖR-STEG:**

1. Under **KONTROLL** finns blocket "**om <> då**", dra in det till scriptytan, lägg det fritt någonstans bredvid de övriga scripten. Det här blocket säger att **OM** det som står inom **<>** händer, **DÅ** ska något annat direkt hända. Till exempel: Om skalbaggen <rör färgen grön>, säg Game Over i 2 sekunder.

  ![image alt text](Koda_KONTROLL-Om-Då-block.png)
  
2. Under **KÄNNA AV** finns blocket "**Rör färgen <> ?"**. 
Dra in detta block till hålet **<>** inom blocket "**om <> då**" som du lagt på skriptytan. 

  ![image alt text](Koda_Exempelscript_KÄNNA_AV-Rör_vid_färgen-block_i_OM__DÅ-block.png)

Kolla att lilla ovala cirkeln med färg till höger om texten **"rör färgen"** i ditt script är exakt samma färg som spelets bakgrundsfärg. Byt annars genom att klicka med muspekaren på den lilla färgcirkeln och välj den lilla symbolen med en pimpett längst ned. Klicka sedan med den på spelets bakgrundsfärg, så blir det rätt färg i kodblockets cirkel. Nu har du talat om för datorn att något ska hända när skalbaggen rör vid denna färg.

  ![image alt text](Känna_av_byt_färg_pimpett.png)

3. Till sist skapar du ett skript för att spelet ska säga att det är Game Over om skalbaggen nuddar färgen utanför banan. Under tema   **UTSEENDE** väljer du blocket **"säg Hej! i 2 sekunder"** och drar in detta block innanför **"om <**"**Rör färgen grön?> då"**". Klicka sedan på ordet "Hej!" och ändra texten till det du vill skalbaggen ska säga - till exempel Game Over.

  ![image alt text](Koda_UTSEENDE-Säg__i_2_sekunder.png)

> Testa ditt spel! Händer det något när skalbaggen nuddar färgen utanför banan? Om inte, vad tror du att det kan bero på? 


## 8: Gör klart skriptet

Något saknas för att koden ska fungera! Tänk efter: **När** vill du att datorn ska känna av om skalbaggen rör färgen utanför banan? Det behöver ju göras **efter varje steg** skalbaggen tar, för att inte missa om den springer av banan. Datorn måste kolla **exakt vart skalbaggen befinner sig** "om och om igen", hela tiden. Därför måste du koppla ihop skriptet som känner av färgen utanför banan med det som får skalbaggen att röra sig. 
<video src="./BugRacedel8_nytt.mp4" controls muted height=480 width=640 />

>**VAD SKA JAG GÖRA?**

Se i videon ovan hur du ska:
- Lägg skriptet inuti för alltid-loopen
- Lägg in kod för KONTROLL: stoppa alla. Lägg blocket längst ned inom *om...då*. Ändra till *stoppa detta skript*.

<br>
>**INSTRUKTION HUR JAG GÖR STEG-FÖR-STEG:**

1. Lägg skriptet som känner av färgen **inuti** din **"för alltid"**-loop. Nu kollar datorn av om skalbaggen ramlat av banan **varje gång** innan den tar nästa steg framåt igen. Sen kollar den igen - har jag ramlat av banan? Om inte, spring vidare, kolla, spring...

  ![image alt text](Koda_exempelbild_BugRaceIntro_lägg_OM-DÅ_in_i_För_Alltid-loop.png)

2. När spelet blir Game Over ska ju allt ta slut och skalbaggen stoppa helt. Under **KONTROLL** finns blocket **"stoppa alla"**. Dra in detta block till skriptfältet. Klicka på lilla pilen i blocket och byt till **"stoppa detta skript"**.

  ![image alt text](Koda_exempelbild_KONTROLL-Stoppa_alla-block_byt_till_Stoppa_detta_script.png)

Lägg in detta block längst ned inuti skriptet med **"om <> då"**. På så sätt avslutas spelet och skalbaggen stannar om den hamnar utanför banan och blir Game Over.

>**Testa koden!** Kan du styra skalbaggen runt banan med piltangenterna? Vad händer om sprajten åker utanför banan? 

> Är det svårt att veta hur alla blocken ska läggas in i skriptet? På nästa sida kan du se en bild på hur det färdiga skriptet ska se ut. 


## Färdig!
Grattis, nu har du skapat ditt första spel! Det färdiga skriptet i sin helhet borde se ut ungefär så här - om du följt instruktionerna:

 ![image alt text](Koda_exempelbild_färdigt_script_BugRaceIntro.png)

**Glöm inte att spara ditt projekt - och att döpa det!** Döp det gärna till uppgiftens namn Bug Race - eller hitta på ett eget namn, så att du enkelt kan hitta det igen. Du skriver in namn på spelet högt upp ovanför projektet, där det nu står "Scratchprojekt". Spara sedan, men du måste vara inloggad för att kunna spara.

> **Testa ditt projekt**  
Visa gärna någon ditt spel och låt dem testa. Om du vill, tryck på knappen DELA som du finner överst så kan andra också hitta spelet på Scratch sajt och testa det.

> **Viktigt om du delar ditt projekt:** Tänk på att delade projekt kan ses, testas och remixas (omskapas) av alla som vill på Scratch sajt. Det är viktigt när du sparar och delar att projektet inte innhåller information, bilder eller ljud du inte vill sprida till andra.


## Utmaning
Saknas något? Hur skulle du vilja utveckla spelet?

Tips på hur du kan bygga vidare på Bug Race hittar du i uppgiften som heter <a href="https://www.kodboken.se/start/skapa-spel/uppgifter-i-scratch/bug-race-tillagg?chpt=0" target="_blank"> Bug Race - Tillägg</a>.
Där kan du bland annat skapa Bug Race för två spelare samtidigt och göra en mjukare styrning av sprajtarna.
![Bug race med två spelare](image_2.png)

## Frågeställningar

* Vad är en sprajt?

* Vad är en loop?

* Varför kan det vara bra att använda en loop?

* Vad är ett INIT-Script eller Start-Script?

* Vad händer i spelet Bug Race om sprajten har samma färg som bakgrunden?
