# Sopsorterare 

Många kanske tycker det är tråkigt att sortera sopor för återvinning, så varför inte programera en robot att hjälpa till med detta. I den här uppgiften kommer vi koda ett litet spel där du eller en kompis får styra en robot som automatiskt skickar soporna till rätt ställe!

# Soporna
Innan vi börjar kode roboten så måste vi först koda lite sopor som den kan sortera. Skapa en ny sprajt och döp den till sopor. Vi ska nu skapa två olika klädslar för att ha något att sortera (När du förstår principen kommer du enkelt kunna skapa fler!)

Som exempel har jag skapat en glasflaska och en äppelskrott 
![alt text](https://github.com/Kodcentrum/Scratchuppgifter-v3/blob/feature_sopsorterare/Robot_sopsorterare/soptypGlas.PNG)
![alt text](https://github.com/Kodcentrum/Scratchuppgifter-v3/blob/feature_sopsorterare/Robot_sopsorterare/soptypKompost.PNG)

Vi ska nu koda så att soporna ramlar ner ifrån ovan för roboten att fånga! 

Börja med att dra ut ett startblock. Under detta sätter vi känna av blocket sätt dragläge till "dragbar". Detta är en liten extra grej som gör att en kan hjälpa roboten genom att klicka och dra soporna till rätt ställe!

![alt text](https://github.com/Kodcentrum/Scratchuppgifter-v3/blob/feature_sopsorterare/Robot_sopsorterare/draglageDragbar.PNG)

Nu ska vi göra något som kanske är nytt för dig eller som du kanske har gjort tidigare, vi ska skicka ett medelande. När vi skickar ett medelande kan vi skapa en samling block som körs varje gång som vi skickar meddelandet så att vi inte behöver skriva samma sak flera gånger. Praktiskt va?! 

## Skapa meddelade

Börja med att dra ut ett när jag tar emot block. När du drar ut det står det meddelande1 men det ska vi snart ändra på.
![alt text](https://github.com/Kodcentrum/Scratchuppgifter-v3/blob/feature_sopsorterare/Robot_sopsorterare/narJagTarMotMeddelande.PNG)

Klicka på medelande1 och när du får upp menyn med alternativen välj det översta "skapa nytt meddelande". 

![alt text](https://github.com/Kodcentrum/Scratchuppgifter-v3/blob/feature_sopsorterare/Robot_sopsorterare/narJagTarMotNyttMeddelande.PNG)

Nu kan du döpa ditt meddelande till något passande. I vårat fall är "omstart" ett bra namn. 

![alt text](https://github.com/Kodcentrum/Scratchuppgifter-v3/blob/feature_sopsorterare/Robot_sopsorterare/SkapaBorjaOm.PNG)

När du är klar borde det se ut såhär:

![alt text](https://github.com/Kodcentrum/Scratchuppgifter-v3/blob/feature_sopsorterare/Robot_sopsorterare/narjagTarMotBorjaOm.PNG)

Sådär! Nu har vi skapat början på en bit kod som kommer att köras varje gång vi skickar meddelandet "omstart" 

Innan vi går vidare och kodar vad som ska hända vid omstart kan vi passa på att placera ut ett block som skickar vårat nya meddelande.

![alt text](https://github.com/Kodcentrum/Scratchuppgifter-v3/blob/feature_sopsorterare/Robot_sopsorterare/skickaBorjaOm.PNG)

På samma ställe som vi hittade skicka blocket kan vi också hitta händelseblocket när jag tar emot vilket vi drar ut och sätter till vårt meddelande "omstart".

Nu går vi tillbaka till vårat när jag tar emot omstart block

![alt text](https://github.com/Kodcentrum/Scratchuppgifter-v3/blob/feature_sopsorterare/Robot_sopsorterare/narjagTarMotBorjaOm.PNG)

Under detta sätter vi sedan ett ändra klädselblock och i det ett slumptalsblock som vi sätter till mellan 1 och 2 (Om du gör fler klädslar så ändra bara på sista talet!)

![alt text](https://github.com/Kodcentrum/Scratchuppgifter-v3/blob/feature_sopsorterare/Robot_sopsorterare/andraKladselHurBygg.PNG)

![alt text](https://github.com/Kodcentrum/Scratchuppgifter-v3/blob/feature_sopsorterare/Robot_sopsorterare/andraKladselSlumptal.PNG)

Du kan nu testa att starta ditt projekt ett par gånger. Om allt har blivit rätt så borde sprajten byta klädsel ungefär hälften av gångerna. 

Nu vill vi att spajten ska starta högst upp så den kan glida ner. Detta göra vi med hjälp av ett gå till x block. Även här använder vi oss av slumptal och sätter in något i stil med mellan -73 till 94. Y postionen sätter vi till 140.

![alt text](https://github.com/Kodcentrum/Scratchuppgifter-v3/blob/feature_sopsorterare/Robot_sopsorterare/gaTillPos.PNG)

![alt text](https://github.com/Kodcentrum/Scratchuppgifter-v3/blob/feature_sopsorterare/Robot_sopsorterare/gaTillPosKlar.PNG)

Under detta sätter vi sedan ett glid till block som vi sätter till 2 sek och därefter till en slumpmässig x position mellan -73 och 94 och y position -130. 

![alt text](https://github.com/Kodcentrum/Scratchuppgifter-v3/blob/feature_sopsorterare/Robot_sopsorterare/glidTillSlumptal.PNG)

Tillsammans borde allt se ut såhär:

![alt text](https://github.com/Kodcentrum/Scratchuppgifter-v3/blob/feature_sopsorterare/Robot_sopsorterare/omstartKlar.PNG)

Vi går nu tillbaka till vårat när jag tar mot omstart block. Nu ska vi här placera ut ett för-alltid block och i det ska vi sätta ett om-block i vilket vi kollar om y positionen är mindre än -129 (Detta eftersom vi tidigare valde att glida till -130). Slutligen sätter vi ett skicka "omstart" innuti detta. 

![alt text](https://github.com/Kodcentrum/Scratchuppgifter-v3/blob/feature_sopsorterare/Robot_sopsorterare/forAlltidYposOm.PNG)

![alt text](https://github.com/Kodcentrum/Scratchuppgifter-v3/blob/feature_sopsorterare/Robot_sopsorterare/forAlltidYposOmKlar.PNG)

Alltihop tillsammans borde se ut såhär:

![alt text](https://github.com/Kodcentrum/Scratchuppgifter-v3/blob/feature_sopsorterare/Robot_sopsorterare/forAlltidYposOmKlarIhopsatt.PNG)

# Sopkärl 
Vi måste ju också ha någonting som soporna kan sorteras in i. Nu får du skapa två nya sprajter, rita olika återvinningskärl eller välj någon sprajt som du hittar. 

Jag har valt att rita så jag ritar enkla små lådor som ser ut såhär:

![alt text](https://github.com/Kodcentrum/Scratchuppgifter-v3/blob/feature_sopsorterare/Robot_sopsorterare/KompostSprajt.PNG)

Vi ska nu koda dessa så att de bara tar emot den typ av sopor som vi vill ska hamna där. Vi börjar med att dra ut ett start block med den gröna flaggan. Under detta placerar vi ett för alltid block. Under detta sätter vi ett om-block. I detta sätter vi sedan ett jämförelseblock där vi om vi rör vid vår skräpsprajt. 

![alt text](https://github.com/Kodcentrum/Scratchuppgifter-v3/blob/feature_sopsorterare/Robot_sopsorterare/sopkarlskod1.PNG)

Om vi gör det måste vi kolla så att det är rätt soptyp. Vi sätter in ytterligare ett om-annars-block och i det blocket sätter vi sedan ett = jämförelesblock där vi på första sidan sätter klädselnamn av Sopor och på andra sidan skriver namnet på soptypen som ska slängas här i. Slutligen sätter vi också ett skicka "omstart" block innuti vårt om block. 
 
![alt text](https://github.com/Kodcentrum/Scratchuppgifter-v3/blob/feature_sopsorterare/Robot_sopsorterare/sopkarlskod2.PNG)

När vi sen sätter ihop allting borde det se ut såhär:

![alt text](https://github.com/Kodcentrum/Scratchuppgifter-v3/blob/feature_sopsorterare/Robot_sopsorterare/sopkarlskod2.PNG)

Sådär! Nu har vi ett sopkärl som är redo att ta emot en typ av sopor och som kommer känna av om vi försöker stoppa i rätt typ av sopor! Testa att starta och dra sopsprajten till ditt sopkärl. 

På samma sätt som vi precis gjort kan vi nu koda ett till sopkärl. Antingen kan du kopiera din sprajt och byta färg eller kanske rita någonting helt annat. För att göra flera sopkärl följer du helt enkelt stegen vi precis gjort men ändrar så att istället för klädsel 1, så kollar till exempel ett glasåtervinningskärl efter klädsel 2 som är just glas. 

(Bygga vidare)
I annars biten lägger vi säg-blocket för att få soptunnan att säga någonting om en försöker slänga fel sak i kärlet. Dra in ett säg-block och skriv någonting i stil med "Oj, nu blev det fel!"



# Styr roboten
Det är ju lite tråkigt att dra varje grej till rätt ställe så istället kan vi programera en robot som gör detta åt oss. 

Vi börjar med att välja en sprajt till vår robot som vi därefter kan koda så att vi kan styra den för att fånga alla sopor. Jag har valt att göra en skalbaggerobot men du kan välja en annan typ av robot om du vill. 

![alt text](https://github.com/Kodcentrum/Scratchuppgifter-v3/blob/feature_sopsorterare/Robot_sopsorterare/skalbaggeRobot.PNG)


För att styra roboten behöver vi två när [någonting] trycks på block. som vi sätter till höger samt vänsterpil.

![alt text](https://github.com/Kodcentrum/Scratchuppgifter-v3/blob/feature_sopsorterare/Robot_sopsorterare/narVansterPilTrycksNed.PNG)

![alt text](https://github.com/Kodcentrum/Scratchuppgifter-v3/blob/feature_sopsorterare/Robot_sopsorterare/narHogerPilTrycksNer.PNG)

Under dessa placerar vi sen blocken gå -10 steg under vänsterpil, och blocket gå 10 steg under högerpil. När du är klar ska de båda blocken se ut såhär:

![alt text](https://github.com/Kodcentrum/Scratchuppgifter-v3/blob/feature_sopsorterare/Robot_sopsorterare/klarNarHogerpilTrycksNed.PNG)

![alt text](https://github.com/Kodcentrum/Scratchuppgifter-v3/blob/feature_sopsorterare/Robot_sopsorterare/klarNarVansterpilTrycksNed.PNG)



Sådär! Nu kan vi styra roboten! Enkelt va? 

# Fånga Sopor
Vi måste också programera roboten så den tar hand om soporna som faller ner på rätt sätt så att allt tas om hand och kan bli till nya saker. 

För att göra detta måste roboten känna igen vad för typ av sopor det är som den stöter på. 

Vi börjar med att lägga till en [för alltid loop] under [startblocket] med den gröna flaggan. 

![alt text](https://github.com/Kodcentrum/Scratchuppgifter-v3/blob/feature_sopsorterare/Robot_sopsorterare/robotNarKlickarStart.PNG)

Innuti detta lägger vi därefter ett om block i vilket vi sätter ett [rör vid] och väljer vår sopsprajt. I detta blocket kommer vi därefter att lägga flera block som var och en kommer hantera de olika typerna av skräp.

Vi börjar med om skräptypen är glas. Vi börjar med att ta ett till om block och lägg i detta ett jämförelseblock med = som jämförelse. På den ena sidan sätter vi som tidigare klädselnamn av Sopsprajten och på andra sidan skriver vi glas. Det är viktigt att vi skriver det på exakt det sättet, alltså utan stor bokstav eller utan felstavningar. Roboten är väldigt smart, men den gör också bara exakt som du säger åt den att göra, om vi skriver till exempel "Glas" kommer den att jämföra detta med soptypen "glas", och även om de beryder samma sak så är de ju olika. Roboten kommer därför inte veta vad den ska göra. 

Eftersom vi både har sopsorterna glas och kompost behöver vi göra samma sak för kompost. 
Ta ett till om block och lägg i detta ett jämförelseblock med = som jämförelse. På den ena sidan sätter vi som tidigare klädselnamn av Sopsprajten och på andra sidan skriver vi kompost. 

När du är klar borde det se ut något sådanthär: [bild]

# Sortera!
Nu ska vi i varje litet om-block vi skapat för de olika soptyperna använda oss av medelanden för att få sakerna att hamna rätt. I blocket för metall ska vi skicka meddelandet metall. 

Gör du fler sopsorter är det bara att upprepa dessa steg. Skapar du exempelvis ett batteri ska du istället kolla efter klädselnamn batteri och skicka den soptypen. 


Vi går nu tillbaka till vår sopsprajt. Det sista vi behöver göra är att få soporna att glida till rätt sopkärl. Detta gör vi helt enkelt genom att dra ut när jag tar emot block för och sätter dessa till våra olika soptypsmedelanden. Eftersom vi började med glas och kompost och har satt block som skickar dessa så sätter vi blocken till de två. 

Under de två blocken sätter vi ett glid till block och sätter det till 1 sekund och på den ena skriver positionen för komposten och för den andra positionen för glasåtervinningen. 

Sådär! Om inget har blivit tokigt har du nu en robot som sorterar sopor! 

