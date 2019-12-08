# Sopsorterare 

Många kanske tycker det är tråkigt att sortera sopor för återvinning, så varför inte programera en robot att hjälpa till med detta 

# Styr roboten
Vi börjar med att koda hur vi ska styra roboten för att samla alla sopor. För detta behöver vi två när [någonting] trycks på block 
som vi sätter till höger samt vänsterpil, och därefter sätter gå -10 steg under vänsterpil, och gå 10 steg under högerpil. 

Sådär! Nu kan vi styra roboten! Enkelt va? 
!!§
# Sopor
Vi måste också programera roboten så den tar hand om soporna som faller ner på rätt sätt så att allt tas om hand och kan bli till nya saker. 

För att göra detta måste roboten känna igen vad för typ av sopor det är som den stöter på. För detta kommmer vi använda vad som kallas en variabel. Du har kanske stött på detta begrepp tidigare och vet redan vad det är, men om du inte gör det, kan vi lite kort säga att det är som en låda där vi har lagt en liten kom-ihåg lapp för att spara en bit information som vi vill använda senare. I det här fallet så ligger i den här lådan vilken typ av skräp det är som faller ner. 
Projektet är förberett ifrån början så det ska finnas fyra sorters sopor, kompost, metall, batterier och glas. Lite senare kommer jag förklara hur du kan lägga till fler skräpsorter!

Vi börjar med att lägga till en [för alltid loop] under [startblocket] med den gröna flaggan. Innuti detta lägger vi därefter ett om block vi vilket vi sätter ett [rör vid] och väljer "skräpsprajt". I detta blocket kommer vi därefter att lägga flera block som var och en kommer hantera de olika typerna av skräp.

Vi börjar med om skräptypen är glas. Ta ett till om block och lägg i detta ett jämförelseblock med = som jämförelse. På den ena sidan sätter vi variabeln soptyp, och på den andra sidan skriver vi helt enkelt glas. Det är viktigt att vi skriver det på exakt det sättet, alltså utan stor bokstav eller utan felstavningar. Roboten är väldigt smart, men den gör också bara exakt som du säger åt den att göra, om vi skriver till exempel "Glas" kommer den att jämföra detta med soptypen "glas", och även om de beryder samma sak så är de ju olika. Roboten kommer därför inte veta vad den ska göra.




