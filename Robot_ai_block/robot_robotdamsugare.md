# Romba

Visst är det tråkigt att damsuga så varför inte försöka koda en egen liten robotdamsugare som kan hjälpa till hemma? 
Det är lättare än vad du tror! 

Börja med att ta bort katt sprajten och klicka sedan på skapa ny sprajt och börja rita din alldeles egen robotdamsugare. Den kan se ut precis så som du vill att den ska se ut!

Roboten kommer också behöva en yta att damsuga, så klicka därefter på bakgrunder och använd fantasin för att rita upp antingen ditt rum eller kanske din drömlägeneht sedd ifrån ovan.
Viktigt här är att alla väggar är samma färg och att inget annat är målat i samma färg!

Här är ett enkelt exempel på hur det kan se ut: 
(Lägg till bild)

En damsugare är ju inte så användbar om det inte finns smuts så nu måste vi också välja en ny färg som ska vara smuts. Rita ut lite smuts eller damm lite här och var, tänk att det inte har städats på riktigt länge 
!

(Lägg till bild)

Sådär! Nu har vi en riktigt smutsig lägenhet och en robot som vi kan programera att städa upp efter oss! 

## Få roboten att röra på sig!

Det första som vi vill göra är att få roboten att röra sig, börja med att lägga till ett rör dig frammåt block och sätt det till 5 steg. Vi vill också att roboten ska sluta göra detta så vi lägger också detta blocket i ett för alltid block. 
(Lägg till bild)

Nu rör sig roboten på sig, men den kommer också röra sig genom väggar och inte städa bort någon smuts. Vi behöver koda lite mer. 

Börja med att ta ett kontrollblock, om ... då, annars ... . och dra ut detta . Klicka därefter på känna av blocken och välj blocket "rör vid färgen", dra in detta i "om" blocket som du tidigare drog ut.

Klicka på den färg som finns i känn av färg blocket och använd pippettverktyget för att välja exakt samma färg som väggarna genom att klicka på en av väggarna.

Nu känner roboten av om den åker in i en vägg, men den vet inte vad den ska göra om det här händer! Vi måste skriva lite kod till. Gå till rörelseblocken och välj sväng vänster. Skriv in 11 grader här.

Sådär, lägg in rör dig frammåt blocket i annars biten av om blocket så att det ser ut något såhär: 
(Lägg till bild)

Om allt har gått bra har vi nu en robot som rör sig runt i rummet vi ritade i början, men ingenting damsugs! Vi behöver koda lite till.

## Damsugare

För den här biten kommer vi behöva lägga till en grupp specialblock. Nere i vänstra hörnet hittar vi en knapp som ser ut såhär (Lägg till bild)
Klickar vi på den kommer vi till en sida där vi kan lägga till massor med olika tillägg, men just den här gånge vill vi lägga till Pennan så vi klickar på den ruta som ser ut såhär (Lägg till bild)

Sådär! Nu kan vi hitta våra pen-block under våra vanliga block. Det första vi måste göra är att sätta pennen till den storlek som vi vill ha. Detta gör vi innan vårt för alltid block. Beroende på hur stor eller liten din robot är så kommer du kanske behöva skriva in en annan siffra här men i mitt fall passar 30 väldigt bra. Vi sätter också pennan till samma färg som golvet genom att dra ut ett "sätt färg till" block. Eftersom vi inte heller vill dammsuga innan vi är ovanför smuts så sätter vi också ut blocket "Penna upp" i vårt "om då" block precis innan "rör dig frammåt" blocket.

Sådär! Nu är vi redo att koda själva städandet!

Inne i vår för alltid loop lägger vi nu till ytterligare ett om block precis under vårt penna upp block. Vi anväder samma känn av färg block som vi använde för att känna av väggarna, men istället för färgen på väggarna väljer vi nu färgen vi valde på smutsen!
(Lägg till bild)

Inne i det här blocket lägger vi in ett penna ner block och med det är vi klara! Scriptet borde nu se ut någo sådanthär:

(Lägg till bild)

Vi kan nu köra det och se hur roboten damsuger upp smutsen vi ritade ut! 
