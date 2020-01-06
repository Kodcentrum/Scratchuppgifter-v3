# Sopsorterare 

Många kanske tycker det är tråkigt att sortera sopor för återvinning, så varför inte programera en robot att hjälpa till med detta. I den här uppgiften kommer vi koda ett litet spel där du eller en kompis får styra en robot som automatiskt lägger soporna på rätt ställe!

# Soporna
För att kunna sortera sopor så behöver vi ju först koda lite sopor. Skapa en ny sprajt och döp den till sopor. Vi ska nu skapa två olika klädslar för att ha något att sortera (Lite senare kommer vi kunna skapa fler!)

Som exempel har jag valt en glasflaska och en äppelskrot.

Vi ska nu koda så att soporna ramlar ner ifrån ovan för roboten att fånga! 

Börja med att dra ut ett startblock. Under detta sätter vi känna av blocket sätt dragläge till "dragbar". Detta är en liten extra grej som gör att en kan hjälpa roboten genom att klicka och dra soporna till rätt ställe!

Nu ska vi göra något som kanske är nytt för dig eller som du kanske har gjort tidigare, vi ska skicka ett medelande. När vi skickar ett medelande kan vi skapa en samling block som körs varje gång som vi skickar meddelandet så att vi inte behöver skriva samma sak flera gånger. Praktiskt va?! 

Detta gör att vi efter vi har satt dragläget ska vi skicka medelandet "börjaOm"

På samma ställe som vi hittade skicka blocket kan vi också hitta händelseblocket när jag tar emot vilket vi drar ut och sätter till "börjaOm". 

Under detta sätter vi sedan ett ändra klädselblock och i det ett slumptalsblock som vi sätter till mellan 1 och 2 (Om du gör fler klädslar så ändra bara på sista talet!)

Därefter vill vi placera spajten högst upp så den kan glida ner vilket vi gör med hjälp av ett gå till x block. Även här använder vi oss av slumptal och sätter in något i stil med mellan -73 till 94. Y postionen sätter vi till 140.

Under detta sätter vi sedan ett glid till block som vi sätter till 2 sek och därefter till en slumpmässig x position mellan -73 och 94 och y position -130. Sådär! 

Vi går nu tillbaka till efter att vi skickade vårt "börjaOm" block. Nu ska vi här placera ut ett  för alltid block och i det sätter vi därefter ett om block i vilket vi kollar om y positionen är mindre än tex -129. Slutligen sätter vi ett skicka "börjaOm" innuti detta. Nu kommer det nya sopor varje gång de ramlat hela vägen!




# Sopkärl 
Vi måste ju också ha någonting som soporna kan sorteras in i. Nu får du skapa fyra nya sprajter, rita olika återvinningskärl eller välj någon sprajt som du hittar. 

Vi ska nu koda dessa så att de bara tar emot den typ av sopor som vi vill ska hamna där. Vi börjar med att dra ut ett start block med den gröna flaggan. Under detta placerar vi ett för alltid block. Under detta sätter vi ett om-block. I detta sätter vi sedan ett jämförelseblock där vi helt enkelt kollar om vi kolliderar med vår skräpsprajt. 

Om vi gör det måste vi kolla så att det är rätt soptyp. Vi sätter in ytterligare ett om-annars-block och i det blocket sätter vi sedan ett = jämförelesblock där vi på ena sidan sätter soptypen som ska slängas här i, och på den andra sidan sätter vi variabeln "soptyp". 

[Återvinn genom att skicka meddelande]

I annars biten lägger vi säg-blocket för att få soptunnan att säga någonting om en försöker slänga fel sak i kärlet. Dra in ett säg-block och skriv någonting i stil med "Oj, nu blev det fel!"

Sådär! Nu är våra sopkärl redo att ta emot sopor och kommer känna av om vi försöker stoppa i rätt typ av sopor! Testa att starta och dra något med musen till fel kärl.

# Styr roboten
Det är ju lite tråkigt att dra varje grej till rätt ställe så istället kan vi programera en robot som gör detta åt oss. 

Vi börjar med att välja en sprajt till vår robot som vi därefter kan koda så att vi kan styra den för att fånga alla sopor. Jag har valt att göra en skalbaggerobot men du kan välja en annan typ av robot om du vill. 

För att styra roboten behöver vi två när [någonting] trycks på block 
som vi sätter till höger samt vänsterpil, och därefter sätter gå -10 steg under vänsterpil, och gå 10 steg under högerpil. 

Sådär! Nu kan vi styra roboten! Enkelt va? 

# Fånga Sopor
Vi måste också programera roboten så den tar hand om soporna som faller ner på rätt sätt så att allt tas om hand och kan bli till nya saker. 

För att göra detta måste roboten känna igen vad för typ av sopor det är som den stöter på. För detta kommmer vi använda vad som kallas en variabel. Du har kanske stött på detta begrepp tidigare och vet redan vad det är, men om du inte gör det, kan vi lite kort säga att det är som en låda där vi har lagt en liten kom-ihåg lapp för att spara en bit information som vi vill använda senare. I det här fallet så ligger i den här lådan vilken typ av skräp det är som faller ner. 
Projektet är förberett ifrån början så det ska finnas fyra sorters sopor, kompost, metall, batterier och glas. Lite senare kommer jag förklara hur du kan lägga till fler skräpsorter!

Vi börjar med att lägga till en [för alltid loop] under [startblocket] med den gröna flaggan. Innuti detta lägger vi därefter ett om block vi vilket vi sätter ett [rör vid] och väljer "skräpsprajt". I detta blocket kommer vi därefter att lägga flera block som var och en kommer hantera de olika typerna av skräp.

Vi börjar med om skräptypen är glas. Ta ett till om block och lägg i detta ett jämförelseblock med = som jämförelse. På den ena sidan sätter vi variabeln soptyp, och på den andra sidan skriver vi helt enkelt glas. Det är viktigt att vi skriver det på exakt det sättet, alltså utan stor bokstav eller utan felstavningar. Roboten är väldigt smart, men den gör också bara exakt som du säger åt den att göra, om vi skriver till exempel "Glas" kommer den att jämföra detta med soptypen "glas", och även om de beryder samma sak så är de ju olika. Roboten kommer därför inte veta vad den ska göra. 

Det finns ifrån början som sagt fyra sopsorter att hantera så vi kommer behöva skapa 4 stycken liknande block för att hantera de andra sorterna. Gör precis som innan men skriv nu istället "metall", "kompost" och "batteri". Kom ihåg att dubbelkolla stavningen så att det blir rätt!

När du är klar borde det se ut något sådanthär: [bild]


# Sortera!
Nu ska vi i varje litet om-block vi skapat för de olika soptyperna använda oss av medelanden för att få sakerna att hamna rätt. I blocket för metall ska vi skicka meddelandet metall. 

På samma sätt ska vi göra för alla andra soptyper. För batteri ska vi skicka soptyp batteri och så vidare för glas och kompost.





