# Sopsorterare 

Tycker du det är jobbigt att sortera sopor för återvinning? Varför inte programmera en robot att hjälpa till! I den här uppgiften kommer vi koda ett spel där du eller en kompis får styra en sorteringsrobot som automatiskt skickar soporna till rätt ställe!

# Soporna
Innan vi börjar koda roboten så måste vi först göra lite sopor som den kan sortera. Skapa en ny sprajt och döp den till sopor. Vi ska nu skapa två olika klädslar för att ha något att sortera (När du förstår principen kommer du enkelt kunna skapa fler sopsprajtar!)

Som exempel har jag skapat en glasflaska och en äppelskrutt:

![image alt text](soptypGlas.PNG)
![image alt text](soptypKompost.PNG)

Vi ska nu koda så att soporna ramlar ner ifrån ovan för roboten att fånga och sortera! 

1. Börja med att dra ut ett startblock och lägg på skriptytan för sopsprajtarna. 
2. Från tema KÄNNA AV lägger du till blocket **sätt dragläge till "dragbar"**, färst det under startblocket. Blocket du just lade till är en liten extra grej som gör att man kan hjälpa roboten genom att klicka och dra soporna till rätt återvinningsställe!

![image alt text](draglageDragbar.PNG)

Nu har vi två sopor som kan sorteras och flyttas på skärmen. Vi går vidare.

## 2: Skapa meddelande
Nu ska vi skapa meddelanden så att olika sprajtar kan "prata med varandra" och veta när och vad de ska göra. Meddelanden förenklar vårt arbete, då vi kan skapa en samling med kodblock som körs varje gång som vi skickar meddelandet så att vi inte behöver skriva samma sak flera gånger. Praktiskt va?! 

1. Från tema HÄNDELSER drar du ut blocket **när jag tar emot meddelande1**.
![image alt text](narJagTarMotMeddelande.PNG)

2. Klicka på lilla pilen i blocket bredvid där det står **meddelande1** och välj "skapa nytt meddelande". 
![image alt text](narJagTarMotNyttMeddelande.PNG)

3. Nu kan du döpa ditt meddelande till något passande. I vårt fall är "omstart" ett bra namn. Tryck sedan OK, så skapas ett nytt meddelande.
![image alt text](SkapaBorjaOm.PNG)

När du är klar borde det se ut såhär:
![image alt text](narjagTarMotBorjaOm.PNG)

Sådär! Nu har vi skapat början på en bit kod som kommer att köras varje gång vi skickar meddelandet "omstart".

Innan vi går vidare och kodar vad som ska hända vid omstart kan vi passa på att placera ut ett block som skickar iväg vårt nya meddelande. Från tema HÄNDELSER drar du ut blocket **skicka meddelande1**. Ändra i blocket så att det står **skicka omstart**, om det inte redan står det. 
![image alt text](skickaBorjaOm.PNG)


Nu går vi tillbaka till blocket som heter **när jag tar emot omstart**.
![image alt text](narjagTarMotBorjaOm.PNG)

Under detta block sätter vi från tema UTSEENDE in blocket **ändra klädsel**. Inuti detta block lägger vi från tema OPERATORER in ett slumptalsblock som vi sätter till mellan 1 och 2 (Om du gör fler klädslar så ändra bara på sista talet!)
![image alt text](andraKladselHurBygg.PNG)
![image alt text](andraKladselSlumptal.PNG)

Du kan nu testa att starta ditt projekt ett par gånger. Om allt har blivit rätt så borde sprajten byta klädsel ungefär hälften av gångerna. 

Nu vill vi att sopsprajten ska starta högst upp och sedan glida neråt. Detta gör vi med hjälp av ett **gå till x och y**-block från tema RÖRELSE. Även här använder vi oss av slumptal från tema OPERATORER och sätter in något i stil med mellan -73 till 94. Y postionen sätter vi till 140. Du kan anpassa koordinaterna med x och y för att passa till just din sopsorterarrobot, testa dig fram.

![image alt text](gaTillPos.PNG)
![image alt text](gaTillPosKlar.PNG)

Under detta sätter vi sedan ett **glid till**-block som vi sätter till 2 sek och därefter till en slumpmässig x position mellan -73 och 94 och y position -130. 

![image alt text](glidTillSlumptal.PNG)

Tillsammans borde all kod nu se ut såhär:

![image alt text](omstartKlar.PNG)

Vi går nu tillbaka till vårt **när jag tar mot omstart** block. Nu ska vi här placera ut ett **för alltid**-block från tema KONTROLL och inuti blocket ska vi sätta blocket **om...då** från tema KONTROLL. Inuti detta villkorsblock sätter vi block från tema RÖRELSE som kontrollerar om **y positionen är mindre än -129** (Detta eftersom vi tidigare valde att glida till -130). Slutligen sätter vi ett **skicka omstart**-block innuti detta. 

![image alt text](forAlltidYposOm.PNG)
![image alt text](forAlltidYposOmKlar.PNG)

Alltihop tillsammans borde se ut såhär:

![image alt text](forAlltidYposOmKlarIhopsatt.PNG)

## 2: Sopkärl 
Vi måste ju också ha någonting som soporna kan sorteras in i. Nu får du skapa två nya sprajter, rita olika återvinningskärl eller välj någon sprajt som du gillar från Scratch sprajtbibliotek med färdiga sprajter. 

I vårt exempel har vi ritat ett sopkärl som enkla små lådor som ser ut såhär:

![image alt text](KompostSprajt.PNG)

Vi ska nu koda dessa så att de bara tar emot den typ av sopor som vi vill ska hamna just där, exempelvis glasflaskor ska in i glasåtervinningen. Vi börjar med att dra ut ett start block **när GRÖN FLAGGA klickas på**. Under detta placerar vi ett **för alltid** -block. Under detta sätter vi ett **om...då**-block. Inuti detta sätter vi från tema KÄNNA AV ett **rör vid**-block där vi väljer vår skräpsprajt. 
![image alt text](sopkarlskod1.PNG)

Om vi gör det måste vi kolla så att det är rätt soptyp. Vi sätter in ytterligare ett **om...då...annars**-block och i det blocket sätter vi sedan ett = jämförelesblock i vilket vi sätter vi [Om x av y] blocket i vårt jämförelseblock och väljer "Klädselnamn" och vår sopsprajt.  

På andra sidan skriver namnet på soptypen som ska slängas här i. 

Det är viktigt att vi skriver det på exakt det sättet, alltså utan stor bokstav eller utan felstavningar. Roboten är väldigt smart, men den gör också bara exakt som du säger åt den att göra, om vi skriver till exempel "Glas" kommer den att jämföra detta med soptypen "glas", och även om de betyder samma sak så är de ju olika. Roboten kommer därför inte veta vad den ska göra. 

Slutligen sätter vi också ett **skicka omstart**-block inuti vårt **om...då**-block. 
![image alt text](sopkarlskod2.PNG)

När vi sen sätter ihop allting borde det se ut såhär:
![image alt text](sopkarlskod3.PNG)

Sådär! Nu har vi ett sopkärl som är redo att ta emot en typ av sopor och som kommer känna av om vi försöker stoppa i rätt typ av sopor! Testa att starta och dra sopsprajten till ditt sopkärl. 

På samma sätt som vi precis gjort kan vi nu koda ett till sopkärl. Antingen kan du kopiera din sprajt och byta färg eller kanske rita någonting helt annat. För att göra flera sopkärl följer du helt enkelt stegen vi precis gjort men ändrar så att istället för klädsel 1, så kollar till exempel ett glasåtervinningskärl efter klädsel 2 som är just glas. 

(Bygga vidare)
I annars biten lägger vi säg-blocket för att få soptunnan att säga någonting om en försöker slänga fel sak i kärlet. Dra in ett säg-block och skriv någonting i stil med "Oj, nu blev det fel!"


## 3: Styr roboten
Det är ju lite tråkigt att dra varje grej till rätt ställe så istället kan vi programera en robot som gör detta åt oss. 

Vi börjar med att välja en sprajt till vår robot som vi därefter kan koda så att vi kan styra den för att fånga alla sopor. Jag har valt att göra en skalbaggerobot men du kan välja en annan typ av robot om du vill. 

![alt text](skalbaggeRobot.PNG)


För att styra roboten behöver vi två när [någonting] trycks på block. som vi sätter till höger samt vänsterpil.

![alt text](https://github.com/Kodcentrum/Scratchuppgifter-v3/blob/feature_sopsorterare/Robot_sopsorterare/narVansterPilTrycksNed.PNG)

![alt text](https://github.com/Kodcentrum/Scratchuppgifter-v3/blob/feature_sopsorterare/Robot_sopsorterare/narHogerPilTrycksNer.PNG)

Under dessa placerar vi sen blocken gå -10 steg under vänsterpil, och blocket gå 10 steg under högerpil. När du är klar ska de båda blocken se ut såhär:

![alt text](https://github.com/Kodcentrum/Scratchuppgifter-v3/blob/feature_sopsorterare/Robot_sopsorterare/klarNarHogerpilTrycksNed.PNG)

![alt text](https://github.com/Kodcentrum/Scratchuppgifter-v3/blob/feature_sopsorterare/Robot_sopsorterare/klarNarVansterpilTrycksNed.PNG)



Sådär! Nu kan vi styra roboten! Enkelt va? 

## 4: Fånga sopor
Vi måste också programera roboten så den tar hand om soporna som faller ner på rätt sätt så att allt tas om hand och kan bli till nya saker. 

För att göra detta måste roboten känna igen vad för typ av sopor det är som den stöter på. Vi kommer att koda detta på ett sätt som påminner mycket om det vi kodade till sopkärlen.

Vi börjar med att lägga till en [för alltid loop] under [startblocket] med den gröna flaggan. 

![alt text](https://github.com/Kodcentrum/Scratchuppgifter-v3/blob/feature_sopsorterare/Robot_sopsorterare/robotNarKlickarStart.PNG)

Sen kan vi börja med om skräptypen är glas. Vi skapar fört ett jämförelseblock som vi därefter kan sätta in i ett om-block. På den ena sidan sätter vi som tidigare klädselnamn av Sopsprajten och på andra sidan skriver vi glas. 

![alt text](https://github.com/Kodcentrum/Scratchuppgifter-v3/blob/feature_sopsorterare/Robot_sopsorterare/omRorVidLogik.PNG)

Vi upprepar samma steg för andra soptyper vi skapat och när du är klar borde det se ut något sådanthär: 

![alt text](https://github.com/Kodcentrum/Scratchuppgifter-v3/blob/feature_sopsorterare/Robot_sopsorterare/omRorVidSoporKlar.PNG)

Kom igåg att det är viktigt att det står exakt så som du skrev namnet på din klädsel på andra sidan!

För vår andra soptyp kan vi kopiera blocken vi skapade i föregående steg men glöm inte att byta namn på din soptyp! 

När du är klar ser det nog ut något sådant här:

![alt text](https://github.com/Kodcentrum/Scratchuppgifter-v3/blob/feature_sopsorterare/Robot_sopsorterare/olikaSoporFanga.PNG)


## 5: Sortera!
Nu ska vi i varje litet om-block vi skapat för de olika soptyperna använda oss av medelanden för att få sakerna att hamna rätt. I blocket för glas ska vi skicka meddelandet glas. 

Gör du fler sopsorter är det bara att upprepa dessa steg. Skapar du exempelvis ett batteri ska du istället kolla efter klädselnamn batteri och skicka den soptypen. 

![alt text](https://github.com/Kodcentrum/Scratchuppgifter-v3/blob/feature_sopsorterare/Robot_sopsorterare/SorteradeSopor.PNG)


Vi går nu tillbaka till vår sopsprajt. Det sista vi behöver göra är att få soporna att glida till rätt sopkärl. Detta gör vi helt enkelt genom att dra ut när jag tar emot meddelande block och sätter dessa till våra olika soptypsmedelanden. 

![alt text](https://github.com/Kodcentrum/Scratchuppgifter-v3/blob/feature_sopsorterare/Robot_sopsorterare/glidGlas.PNG)


![alt text](https://github.com/Kodcentrum/Scratchuppgifter-v3/blob/feature_sopsorterare/Robot_sopsorterare/glidKompost.PNG)

Under de två blocken sätter vi ett glid till block och sätter det till 1 sekund och på den ena skriver positionen för komposten och för den andra positionen för glasåtervinningen. 



Sådär! Om inget har blivit tokigt har du nu en robot som sorterar sopor! 

