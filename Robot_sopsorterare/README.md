# Sopsorterare 

Tycker du det är jobbigt att sortera sopor för återvinning? Varför inte programmera en robot att hjälpa till! I den här uppgiften kommer vi koda ett spel där du eller en kompis får styra en sorteringsrobot som automatiskt skickar soporna till rätt ställe!

## 1: Välj en robot och koda styrning

Vi ska skapa en robot som sorterar sopor. En robot kan ju se ut precis som du vill, det kan vara en robotskalbagge eller en robotanka. I vår exempel har vi valt en sprajt som ser ut som en robotfigur. 

1. Ta först bort kattsprajten från projektet genom att klicka på den lilla soptunnan på den lilla katt-figuren under scenen. Klicka sen på **Välj ny sprajt** under scenen och välj en sprajt som du vill ha som din robot. I vårt exempel har vi roboten på bilden nedan, men du kan välja vilken sprajt du vill.  

![alt text](RobotSprajt.PNG)

2. Känns roboten för stor? Ändra storleken på den genom att ändra siffran där det står **Storlek 100** under scenen. 100 är full storlek, alltså 100%, så prova dig fram till något mindre procenttal, exempelvis 70. Klicka på gröna startflaggan om roboten inte ändrar storlek, så ändras den. Ändra storlek tills du är nöjd.

![image alt text](SoporÄndraStorlek.png)

2. Nu ska vi koda så att roboten kan styras för att fånga och sortera alla sopor som kommer falla ned mot den. Vi ska styra roboten åt höger och vänster med hjälp av datorns tangentbord med höger- och vänsterpil. 
Börja med att dra ut två stycken block från tema HÄNDELSER som heter **när [mellanslag] tangenten trycks ned**. Lägg dem bredvid varandra på robotens skriptyta. 

3. Klicka på ordet **mellanslag** i blocken och välj istället **vänsterpil** och **högerpil**, så det ser ut såhär:

![alt text](narVansterPilTrycksNed.PNG)

![alt text](narHogerPilTrycksNer.PNG)

4. Under dessa block lägger vi in blocket **gå 10 steg**. Ändra i skriptet för **vänsterpil**tangenten så det står **gå -10 steg**. Då kommer roboten gå åt vänster med vänsterpil-tangenten. När du är klar ska de båda blocken se ut såhär:

![alt text](RobotNärVänster_Högerpil_trycksNed.png)

Sådär! Nu kan vi styra roboten! Enkelt va? Dags att lägga till lite sopor som roboten ska kunna sortera.

## 2: Soporna
Innan vi börjar koda roboten så måste vi först göra lite sopor som den kan sortera. 

1. Måla en egen ny sprajt genom att välja hålla muspekaren över knappen för **Välj ny sprajt** och klicka på lilla penseln som heter **Måla**. Döp denna nya sprajt till **Sopor**.

![image alt text](namn_sprajt_sopor.PNG)

2. Vi ska nu skapa två olika klädslar i den nya sprajten, som vi senare kan använda som olika sopor att källsortera. I denna instruktion ska vi visa hur du kan skapa två olika sopklädslar - en glasflaska och en äppelskrutt. När du förstår principen att göra olika sop-klädslar kommer du enkelt sen kunna skapa fler sopor att slumpa mellan!

Som exempel har vi här skapat en glasflaska som ska sorteras som **glas** och en äppelskrutt som ska sorteras som **kompost** Du kan givetvis själv välja vilka olika sopor du vill ha.

![image alt text](soptypGlas.PNG)
![image alt text](soptypKompost.PNG)

3. Döp klädslarna till vad för typ av sopor det är, exempelvis **glas** för glasflaskan och **kompost** för äppelskrutten. 

![image alt text](namn_klädsel_glas.png)

4. Nu ska du sätta en passande storlek på din sopsprajt, så den känns lagom stor i förhållande till din robot. Gör de ganska liten, ungefär som din tumnagel eller något mindre brukar bli lagom. Se till att din sopsprajt är vald och ändra storleken under scenen där det står **Storlek 100**. Kanske 30 blir lagom? Prova dig fram tills du är nöjd.

![image alt text](SoporÄndraStorlek.png)

5. Vi ska nu koda så att soporna ramlar ner ovanifrån ner mot roboten, så att den kan fånga och sortera soporna! Klicka på fliken som heter KOD högst upp i vänstra hörnet av Scratch, så kommer du ur ritverktyget och tillbaka till skriptytan för din sprajt. 

6.  Dra ut ett startblock **när GRÖN FLAGGA klickas på** från tema HÄNDELSER och lägg på skriptytan för sopsprajten. 

7. Från tema KÄNNA AV lägger du till blocket **sätt dragläge till "dragbar"**, fäst det under startblocket. 

![image alt text](draglageDragbar.PNG)

Blocket för dragläget du just lade till är en liten extra grej som gör att man kan hjälpa roboten sortera rätt genom att klicka och dra soporna till rätt återvinningsställe!

Nu har vi en sprajt som är sopor som kan flyttas på skärmen. men hur ska vi koda så att de olika typerna av sopor visas? Oh hur ska soporna röra sig? Vi går vidare.

## 3: Slumpa sopklädslar som faller ned
Nu ska vi skapa meddelanden så att olika sprajtar kan "prata med varandra" och veta när och vad de ska göra. Meddelanden förenklar vårt arbete, då vi kan skapa en samling med kodblock som körs varje gång som vi skickar meddelandet så att vi inte behöver skriva samma sak flera gånger. Ungefär som att skicka iväg ett och samma sms till flera kompisar samtidigt, istället för att behöva skriva ett i taget till vardera kompis. Praktiskt va?! 

1. Nu ska du koda mer på din sop-sprajt. Dubbelkolla att du kodar på rätt sprajt, genom att klicka på den lilla bilden av din sop-sprajt som finns under scenen. Då blir sprajten aktiverad och får en blå ram omkring sprajtbilden. 

![image alt text](Robot_aktivera.png)

2. Från tema HÄNDELSER drar du ut blocket **när jag tar emot meddelande1**. Lägg det fritt bredvid de andra kodblocken som finns på skriptytan.

![image alt text](narJagTarMotMeddelande.PNG)

3. Klicka på lilla pilen i blocket bredvid där det står **meddelande1** och välj "skapa nytt meddelande". 

![image alt text](narJagTarMotNyttMeddelande.PNG)

4. Meddelandet som ska skickas handlar om att sopsprajten ska starta om sin kod när den tar emot meddelandet. Därför döper vi meddelandet till "omstart", så vet vi vad det handlas om. Tryck sen OK, så skapas ett nytt meddelande.

![image alt text](SkapaBorjaOm.PNG)

När du är klar borde det se ut såhär:

![image alt text](narjagTarMotBorjaOm.PNG)

Sådär! Nu har vi skapat början på en bit kod som kommer att köras varje gång sprajten tar emot meddelandet "omstart".

5. Under detta block sätter vi från tema UTSEENDE in blocket **ändra klädsel till "glas"**. (Kanske det står något annat än just "glas", beroende på vilken klädsel du visar just nu och vad du döpt dina sop-klädslar till.) 

6. Inuti detta block lägger vi från tema OPERATORER in ett blocket **slumptal 1 till 10**. Ändra så det står **1 till 2** istället, då vi ännu bara har två olika sop-klädslar att slumpa mellan. (Om du gör fler sop-klädslar sen så ändrar du bara på sista talet till det totala antal klädslar sop-sprajten har!)

![image alt text](andraKladselHurBygg.PNG)
![image alt text](andraKladselSlumptal.PNG)

Nu har du alltså kodat att sprajten ska slumpa mellan klädslarna så att den ibland visar glasflaskan och ibland äppelskrutten. Så att det blir olika sopor för roboten att sortera. 

>**Testa koden!** Klicka på gröna startflaggan ovanför ditt projekt för att starta koden. Vilke sop-klädsel visas? Klicka på gröna startflaggan flera gånger efter varandra och se om det slumpas fram olika klädslar ibland? Om inte, dubbelkolla att det står rätt i koden, att det står **omstart** i meddelandet som skickas och det som tas emot.

7. Dax att skapa rörelse på soporna. Sopsprajten ska starta högst upp i ovankant på scenen och sedan glida nedåt. Detta gör vi genom att sätta en bestämd startposition för sopsprajten, med hjälp av ett **gå till x och y**-block från tema RÖRELSE. Detta är alltså x och y i ett koordinatsystem, som anger position på scenen. Dra ut blocket och sätt det under **ändra klädsel**-blocket. 

![image alt text](SopsprajtStartpositionBlock_x_y.png)

8. För att dina sopor ska falla från lite olika positioner i toppen, kodar vi in att det ska slumpas fram exakt var sopan faller ned från. Från tema OPERATORER drar du in blocket **slumptal 1 till 10** och lägger in det i det blå blocket efter **x:**. (se bilden nedan).

![image alt text](SopsprajtStartpositionBlockSlump.png)

9. Ändra slumptalet i blocket **1 till 10** så det står koordinatpositioner istället, förslagsvis **-73 till 94**. Då kommer sprajten alltså att slumpvis välja att starta i en plats någonstans mellan x: -73 till x: 94 i scenens ovankant, då x-positioner sätter positionen horisontellt,  åt höger eller vänster på scenen. 

10. **y-postionen** ändrar du till **140**, alltså positionen för hur högt upp sprajten ska starta från på scenen.

![image alt text](gaTillPosKlar.PNG)

>**Tänk på!** Siffran för x-positionen styr positionen av sprajten horisontellt, alltså åt höger och vänster på scenen. Och y-positionen styr sprajtens position vertikalt, alltså uppåt och nedåt. Du kan anpassa koordinaterna x och y för dina sopor för att passa till just din sopsorterarrobot, testa dig fram.

11. Under **gå till x:... och y:...**-blocket sätter vi in blocket **glid 1 sek till x:... y:...** från tema RÖRELSE.

![image alt text](SopsprajtRörelseBlockGlidposition.png)

Ändra i blocket så det står **2 sek** istället. Från tema OPERATORER sätter du sen in blocket **slumptal 1 till 10** i vita bubblan efter **x:...** och skriv in **-73 och 94** i det gröna operatorblocket. Ändra även **y**-positionen **-130**. 

![image alt text](glidTillSlumptal.PNG)

När du är färdig borde all kod nu se ut såhär:

![image alt text](omstartKlar.PNG)

Nu har vi ett skript med kod som gör att en slumpvis vald sopsprajt faller ned när vi startar projektet och sen stannar sopsprajten i luften och inget nytt händer. Men vi vill att det ska falla ned mer sopor hela tiden och att det ska slumpa mellan olika sopklädslar. Vi måste ju lägga till kod för **när** meddelandet "omstart" ska skickas iväg också, så att detta kan hända. Dax att koda vidare!

## 4: Skicka meddelandet omstart

1. Från tema HÄNDELSER drar du ut blocket **skicka meddelande1 och vänta**. Fäst blocket längst ned i sopsprajtens andra kodskript som börjar med blocket **när GRÖN FLAGGA klickas på**. Ändra sen i meddelandeblocket du just lade till så att det står **skicka "omstart" och vänta**. Såhär ska det se ut när det är klart:

![image alt text](skickaBorjaOm.PNG)

>**Testa koden!** Klicka på gröna startflaggan ovanför ditt projekt för att starta koden. Vad händer med soporna? Starta om projektet flera gånger och se vad som händer.

Vi vill att om roboten missar att sortera sopan, och den faller ned till marken, så ska det en ny sopa börja falla ned. För det behöver vi skapa en loopad kodsnutt. Gör såhär:

2. Från tema KONTROLL drar du in ett **för alltid**-block och fäster det längst ned i skriptet du kodar. 

3. Dra sen ut ett villkorsblock med **om...då** från tema KONTROLL och lägg det inuti **för alltid**-blocket. 

![image alt text](SoporLoopVillkorsblockOmDå.png)

4. Från tema OPERATORER drar du in ett jämföresleblock med tecknet **<**, som alltså betyder *mindre än*. Lägg in blocket i hålet mellan **om...då**, så koden ser ut såhär: 

![image alt text](SoporVillkorOperatorblock.png)

5. Nu vill vi att villkoret ska läsa av när soporna har fallit ända ned förbi roboten. Vi börjar med att ändra siffran **50** igröna operatorblocket så det står koordinatorpositionen **-129**. Alltså lite kortare än positionen -130 som vi satte för sopan att falla ned till. 

5. Nu lägger vi till att det är y-positionen villkoret ska kolla efter. Från tema RÖRELSE drar du in blocket som heter **y-position**. Lägg det i den första vita bubblan i det gröna operatorblocket, så att villkoret blir **om y positionen < -129 då**. Då ser koden ut såhär: 

![image alt text](SopsprajtVillkorOperatorY-positionBlock.PNG)

6. Slutligen sätter vi ett **skicka omstart**-block från tema HÄNDELSER innuti villkoret. När du är klar ska koden se ut såhär:

![image alt text](forAlltidYposOmKlarIhopsatt.PNG)

**Testa koden!** Tryck på startflaggan och se vad som händer. Startar soporna om när de fallit till marken? Slumpas det mellan olika sopor ibland? 

**Tips!** Om du gjort rätt i koden, men soporna ändå inte startar om när de fallit till marken, så kan du testa att ändra koordinatposition till en lite lägre siffra än just -129. Prova exempelvis -120 och se om det fungerar bättre när du startar om koden. Om sopsprajtarna är ganska stora, kan du även prova att göra dem lite mindre genom att minska storleken på den under scenen där det står Storlek 100. 

Nu har vi en robot som kan styras och sopor som kan röra sig och slumpas mellan olika sopklädslar samt startas om. Men vart ska soporna sorteras? Vi går vidare!

## 5: Sopornas återvinningslådor
Vi måste ju också ha någonting som soporna kan sorteras in i. Nu ska du skapa två nya sprajter som blir robotens återvinningslådor. Du kan välja att rita två egna sprajter för återvinningslådorna eller välja två sprajter som du tycker passar från Scratch sprajtbibliotek. 

I vårt exempel har vi ritat en sprajt som återvinningslåda som ser ut såhär:

![image alt text](KompostSprajt.PNG)

Sen har vi gjort en kopia av sprajten så det blivit två likadana sprajter och bara bytt ut färgen på den ena. Då ser det ut som två olika lådor. 

Vi ska nu koda sopkärlen så att de bara tar emot just den typ av sopor som vi vill ska hamna just där, exempelvis glasflaskor ska in i glasåtervinningen och äppelskruttar ska in i komposten. 

1. Vi börjar med att dra ut ett start block **när GRÖN FLAGGA klickas på** från tema HÄNDELSER och lägger in blocket på en av sopkärlens skriptyta. 

2. Under detta block placerar vi ett **för alltid** -block från tema KONTROLL. 

3. Under detta sätter vi ett **om...då**-block från tema KONTROLL. 

4. Inuti **om...då**-blocket sätter vi in ett **rör vid muspekare**-block från tema KÄNNA AV. Klicka på ordet **muspekare** i blocket och välj istället din skräpsprajt. I vårt exempel står det nu **rör vid sopor**, alltså vår sprajt som heter sopor.

![image alt text](sopkarlskod1.PNG)

5. I sprajten  **sopor** finns våra två olika klädslar, en glasflaska och en äppelskrutt. För att rätt typ av sopor ska hamna i rätt sopkärl behöver vi koda så att sopkärlet känner av vilken klädsel som visas på sopsprajten. Vi sätter därför in ytterligare ett **om...då**-block från tema KONTROLL. Lägg det inuti ditt första **om...då**-block i skriptet.

6. I det kantiga hålet mellan **om...då** i blocket sätter vi in ett = jämförelseblock från tema OPERATORER, så det ser ut såhär. 

![image alt text](sopkärl_jämförelseblock.png)

7. Från tema KÄNNA AV drar vi in blocket **bakgrundsnummer av scen**. Lägg in det i den första tomma vita ringen i det gröna operatorblocket, så det ser ut som i bilden nedanför. 

![image alt text](sopkärlKännaAvKlädselnamnBlock.png)

8. Nu ska vi ändra i det blå blocket du just lade in, så att sopkärls-sprajten kan känna av om det är rätt sopor den tar meot. Klicka på ordet **scen** i det blå blocket och byt till sprajten **sopor**. Ordet **bakgrundsnummer** ändrades nu automatiskt till **x position**. Klicka på ordet **x position** och välj istället **klädselnamn**. I den andra vita ringen där det står siffran **50** skriver du istället namnet på klädseln för den typ av sopor kärlet ska ta emot, exempelvis **glas**. När du är klar ska koden se ut såhär:

![image alt text](sopkärlKännaAvKlädselnamnGlas.png)

>**Tänk på!** Det är viktigt att vi skriver namnet på soptypen på exakt samma sätt som den heter i sprajtens klädselnamn, alltså kola  noga om du har stor eller liten bokstav i namnet och inga felstavningar. Sopsorterarroboten du ska skapa är väldigt smart, men den gör bara exakt som du säger åt den att göra. Om vi skriver till exempel "Glas" med stor bokstav, men soporna heter "glas" med liten bokstav kommer roboten jämföra dessa två namn och inte hitta glas-soporna. Roboten kommer då inte veta vad den ska göra och välja att göra ingenting.

9. Slutligen sätter vi in ett **skicka omstart**-block inuti vårt sista**om...då**-block. 

Nu är koden färdig och borde det se ut såhär:

![image alt text](sopkarlskod3.PNG)

>**Testa koden!** Nu har vi ett sopkärl som är redo att ta emot en typ av sopor och som kommer känna av om vi försöker stoppa i rätt typ av sopor i det! Testa att starta och dra sopsprajten **glas** till det sopkärl du just kodat. Vad händer? Börjar programmet om med nya sopor som faller från toppen? Om du gör det flera gåpnger, växlar utseendet av soporna ibland till den andra typen då (alltså äppelskrutten)? 
 
10. På samma sätt som vi precis kodat det gförsta sopkärlet, ska vi nu koda det andra sopkärlet också. Antingen kan du kopiera din sprajt och byta färg eller kanske rita någonting helt annat. För att göra flera sopkärl följer du helt enkelt stegen vi precis gjort men ändrar så att istället för klädseln **glas** så kollar detta andra sopkärlet efter klädseln **kompost** (som kan ta emot äppelskrutten). Byt bara namnet i Känna-av-blocket. 

![image alt text](sopkärl_2_KännaAvKlädselKompost.png)

**Utveckla koden om du vill!**
Vill du att sopsorterarroboten ska säga något om du lägger fel sopor i de olika sopkärlen? Då kan du byta ut det sista **om...då**-blocket du lade in i dina olika sopkärl mot ett **om...då...annars**-block istället. Inom **annars**-biten lägger vi in ett **säg Hej! i 2 sekunder**-block från tema UTSEENDE. Klicka på ordet Hej! och skriv istället exempelvis "Oj, nu blev det fel!". Gör lika dant på båda sopkärlen, se exempel på hur koden kan se ut i bilden nedan. Testa koden och prova att lägga fel sopor i de olika kärlen. Vad händer?

![image alt text](sopkärl_OmDåAnnars_SägFel.png)


## 6: Fånga sopor
Vi måste också programera roboten så den tar hand om soporna som faller ner på rätt sätt så att allt tas om hand och kan bli till nya saker. 

För att göra detta måste roboten känna igen vad för typ av sopor det är som den stöter på. Vi kommer att koda detta på ett sätt som påminner mycket om det vi kodade till sopkärlen.

Vi börjar med att lägga till en [för alltid loop] under [startblocket] med den gröna flaggan. 

![alt text](robotNarKlickarStart.PNG)

Sen kan vi börja med om skräptypen är glas. Vi skapar fört ett jämförelseblock som vi därefter kan sätta in i ett om-block. På den ena sidan sätter vi som tidigare klädselnamn av Sopsprajten och på andra sidan skriver vi glas. 

![alt text](omRorVidLogik.PNG)

Vi upprepar samma steg för andra soptyper vi skapat och när du är klar borde det se ut något sådanthär: 

![alt text](omRorVidSoporKlar.PNG)

Kom igåg att det är viktigt att det står exakt så som du skrev namnet på din klädsel på andra sidan!

För vår andra soptyp kan vi kopiera blocken vi skapade i föregående steg men glöm inte att byta namn på din soptyp! 

När du är klar ser det nog ut något sådant här:

![alt text](olikaSoporFanga.PNG)


## 7: Sortera!
Det är ju lite tråkigt att dra soporna till rätt sopkärl så istället ska vi programmera roboten att den gör detta åt oss. Nu ska vi i varje litet om-block vi skapat för de olika soptyperna använda oss av meddelanden för att få sakerna att hamna rätt. I blocket för glas ska vi skicka meddelandet **glas**. 

Gör du fler soptyper är det bara att upprepa dessa steg nedan. Skapar du exempelvis ett batteri ska du istället kolla efter klädselnamnet **batteri** och skicka den soptypen i ditt meddelande. 

![alt text](SorteradeSopor.PNG)


Vi går nu tillbaka till vår sopsprajt. Det sista vi behöver göra är att få soporna att glida till rätt sopkärl. Detta gör vi helt enkelt genom att dra ut när jag tar emot meddelande block och sätter dessa till våra olika soptypsmedelanden. 

![alt text](glidGlas.PNG)


![alt text](glidKompost.PNG)

Under de två blocken sätter vi ett glid till block och sätter det till 1 sekund och på den ena skriver positionen för komposten och för den andra positionen för glasåtervinningen. 



Sådär! Om inget har blivit tokigt har du nu en robot som sorterar sopor! 

