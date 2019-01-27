# Min hjälte

Den här berättelsen bygger på den röda tråden: Vem, Var, Vad, Hur, Mål. Det handlar alltså om en hjälte som ska nå ett mål men som möter en motståndare eller ett hinder på vägen som behöver övervinnas för att komma till målet.

Ett exempel på hur det kan se ut hittar du <a href="https://scratch.mit.edu/projects/149517033/" target="_blank">här</a>.

![Scratch-bild Hjälte möter dinosaurie-motståndare](Bild_1.png)

## 1 – "VAR" - Byt bakgrund på scenen

Först ska du få välja VAR din berättelse utspelar sig. Välj bakgrund till scenen genom att klicka på den lilla rutan för Scen längst till vänster under stora scenen. Här väljer du att ta bakgrund från Scratch bibliotek eller om du vill rita en egen bakgrund.

1. Gå in i välj bakgrund från bibliotek eller Rita ny bakgrund för att rita själv.
2. Eftersom vi ska få det att se ut som att bakgrunden rör sig, behöver du en bakgrund som inte avslöjar att den egentligen står stilla! I biblioteket kan du till exempel välja mellan de olika ”Blue sky” eller ”Brick wall”. Om du ritar själv kan du till exempel göra enfärgad bakgrund med en rektangel längst ned som platt mark.

## 2 – "VEM" och "VAD" - Välj sprajtar

Nu ska du välja de karaktärer som ska vara med i berättelsen: hjälten (VEM) och motståndare/hinder (VAD). Under den stora scenen hittar du dina sprajtar. Här får du välja sprajtar i Scratch bibliotek som du tycker passar. Välj även en sprajt som fungerar som rekvisita, alltså som en del av bakgrunden.

Om en stund kommer du kunna rita själv och ändra sprajterna så att de ser ut precis som du vill ha dem, men först vill vi komma igång och koda!

1. Ta bort Katten genom att först klicka på saxen uppe i den grå bannern och sedan på sprajten.
2. Välj en sprajt som Hjälte från Scratch bibliotek och dra den till Scenen. Om du vill att din hjälte ska gå eller springa, välj en sprajt i kategorin Gående (de går att animera så att benen rör på sig) och ska den flyga väljer du en från Flygande.
2. Välj en sprajt som Motståndare/Hinder från Scratch bibliotek.
3. Välj också en sprajt som rekvisita, alltså något som kan vara en del av bakgrunden. Till exempel en måne om det är natt eller ett träd om hjälten går i naturen.

## 3 – Få det att röra på sig!

Nu är det dags att börja koda! Det första du ska göra är att animera dina sprajtar så att det ser ut som att hjälten rör sig utan att egentligen förflytta sig över scenen. Låter det konstigt? Vi ska koda så att bakgrunden kommer närmare istället!

1. Sätt hjälte-sprajten mitt på, eller aningen till vänster, på scenen.
2. Sätt rekvisita-sprajten längst till höger på scenen.
3. Gå in på SKRIPT-fliken för din rekvisita-sprajt. Välj från HÄNDELSER: när START-flaggan klickas på. Nu ska du koda vad som händer när berättelsen startar!
4. Välj från KONTROLL: för alltid och fäst under startblocket. Det här är en loop som upprepar din kod om och om igen. I den bestämmer du vad sprajten ska göra för att få bakgrunden att röra på sig.
5. I loopen sätter du att sprajten ska börja på en speciell plats längst ut till höger. Välj från RÖRELSER: sätt x till 0. Ändra så att det står 250.
6. Välj en till loop från KONTROLL: Repetera 0. Ändra så att det står 250. I den här loopen sätter du in från RÖRELSE: ändra X med 0. Här får du testa dig fram hur snabbt du vill att sprajten ska röra sig, i exemplet använder vi -2.


Testa din kod! Tryck på START-flaggan och se vad som händer! Ser det ut som att bakgrunden rör sig? Känns det som att din hjälte rör sig framåt fastän den står still mitt på scenen?

Om du har en hjälte som flyger kan det här räcka för att den ska se ut att röra sig. Men om du har en hjälte som ska gå eller springa - och som har flera olika klädslar för det - behöver du animera sprajten. Det gör du så här:

1. Markera din hjältesprajt och gå in på SKRIPT-fliken. Välj från HÄNDELSER: när START-flaggan klickas på.
2. Även här behöver du en loop, välj från KONTROLL: för alltid och fäst under startblocket.
3. I loopen ska du välja att sprajten byter klädsel. Det gör du med UTSEENDE: nästa klädsel.
4. Nu byter sprajten klädsel jättesnabbt! Sätt en liten paus mellan bytena med KONTROLL: vänta 1 sekund. Ändra till 0,5 eller det du tycker ser bra ut. Prova dig fram.
5. Omdu inte vill att hjälten ska förvinna bakom rekvisitan (alltså trädet med mera), kan du lägga till en UTSEENDE: lägg överst innan loopen. Nu är alltid hjälten längst fram i bilden och döljs inte av deandra sprajtarna i rekvisitan.

![image alt text](BugRace_Intro_exempelspel.png)

Testa din kod! Tryck på START-flaggan och se vad som händer! Ser det ut som att hjälten rör sig nu? Byter den klädsel lagom fort?

## 4 – "HUR" – Vad händer när hjälten möter motståndaren?

Nu ska du koda vad som händer när hjälten möter motståndaren. Vad gör hjälten och vad gör motståndaren? HUR kan hjälten övervinna motståndaren? Det ska du koda med hjälp av VILLKOR, det vill säga att OM hjälten möter motståndaren, DÅ händer något.

![image alt text](BugRace_Intro_exempelspel.png)

1. Markera din motståndare-sprajt. Sätt den längst till höger på scenen.
2. Gå in på skriptfliken. Välj från HÄNDELSER: när START-flaggan klickas på.
3. Välj för alltid-loopen från KONTROLL och fäst under startblocket.
4. I loopen ska du styra så att motståndaren går mot hjälten. Det gör du med RÖRELSE: gå 10 steg. Ändra antalet steg till hur fort du vill att den ska gå – och i vilken riktning. I exemplet har vi använt -5 för att inte motståndaren ska springa åt fel håll!
5. Om du inte vill att motståndaren ska försvinna bakom rekvisitan, kan du lägga till en UTSEENDE: lägg överst innan loopen. Nu är alltid motståndaren längst fram i bilden, precis som hjälten.
6. För att motståndaren ska starta på samma ställe varje gång du trycker på START-flaggan, behöver du sätta en startposition. Det gör du genom att sätta sprajten där du vill att den startar till höger på scenen. Välj blocket för RÖRELSE: gå till x: y: och lägg det innan loopen i ditt skript. Det står automatiskt rätt värden för x och y-koordinater i blocket!

![image alt text](BugRace_Intro_exempelspel.png)

Testa din kod! Tryck på START-flaggan och se vad som händer! Startar motståndaren på rätt plats? Går motståndaren mot hjälten? Går den lagom fort? Du kan ändra hastighet genom att byta ut värdet i gå-blocket!

![image alt text](BugRace_Intro_exempelspel.png)

Nu fortsätter motståndaren bara att gå förbi hjälten och ut ur scenen! Det ska vi ändra på. När hjälten möter motståndaren ska något hända – här i exemplet kommer motståndaren att försvinna. Dags att använda villkoret OM hjälten möter motståndaren DÅ händer något!

1. Markera din hjälte-sprajt och gå in på SKRIPT-fliken. Inuti för alltid-loopen ska du nu få lägga in ett block från KONTROLL:om _ då.
2. Mellan om och då finns en ruta där du kan välja vad sprajten ska känna av. Där lägger du ett block från KÄNNA AV: rör _ ?. Välj från rullistan så att det står om rör (motståndar-sprajten) då.
3. Vad vill du ska hända när hjälten nuddar motståndaren? Här i exemplet börjar vi med att hjälten får säga vad den gör för att övervinna motståndaren. Från UTSEENDE tar vi blocket säg _ i _ sekunder och skriver in att hjälten säger ”Min supersnällhet trollar bort alla monster!” i 2 sekunder.

![image alt text](BugRace_Intro_exempelspel.png)

4. Sedan vill vi att något ska hända med motståndar-sprajten! Markera motståndarsprajten och gå in på SKRIPT. Gör ett likadant skript som för hjälten: om rör (hjälte-sprajten) då.
5. Vad vill du ska hända med motståndaren? I vårt exempel säger motståndar-sprajten ”Hjälp! Supersnällkraften!” i 1 sekund och sedan trollas motståndaren bort. Det gör vi med blocken säg_ i _sekunder och göm som finns i UTSEENDE.
6. För att motståndar-sprajten ska synas i början av berättelsen, behöver du nu lägga till blocket visa innan för alltid-loopen. I vårt exempel har vi valt att sprajten först är gömd, väntar 2 sekunder, och sedan visar sig för att dyka upp i berättelsen!

![image alt text](BugRace_Intro_exempelspel.png)

Testa din kod! Tryck på START-flaggan och se vad som händer! Vad händer nu när hjälten och motståndaren möts? Övervinner hjälten motståndaren?

![image alt text](BugRace_Intro_exempelspel.png)

Om du vill att något annat ska hända kan du självklart använda andra skriptblock!
Här kommer några tips:

1. Du kan animera motståndar-sprajtens klädslar för att den till exempel ska ändra ansiktsuttryck, falla ned till marken eller vad du vill att den ska göra.
2. Du kan animera hjälte-sprajtens klädslar om du vill att den till exempel ska krama motståndaren, använda ett trollspö eller hur den nu ska övervinna motståndaren. Rita dit om hjälten ska hålla i något som den använder!
3. Motståndar-sprajten kan ändra storlek eller färgeffekt för att till exempel krympa eller bli sjuk eller förtrollad.
4. Hjälten kan hoppa på motståndaren för att övervinna den, eller hoppa upp och ned av glädje efteråt. Använd RÖRELSE-blocken för det, till exempel ändra x eller ändra y.
5. Låt hjälten och motståndaren säga fler saker om det behövs för att förklara berättelsens handling!

Testa din kod! Tryck på START-flaggan och se vad som händer!


## 5 – "MÅL" – Hjälten övervinner motståndaren!

Till sist behöver du koda slutet på berättelsen, när hjälten har övervunnit motståndaren. Vad händer då? Vad är målet med berättelsen? Här behöver du koda det som behövs för just din berättelse – du hittar tips för olika skript längst ned i detta steg.

I vårt exempel byter rekvisita-sprajten klädsel och fjärilar dyker upp i trädet! Här behöver sprajtarna ”prata” med varandra för att rekvisita-sprajten ska veta när hjälten har övervunnit motståndaren och den ska byta klädsel. Det gör vi med MEDDELANDEN: hjälte-sprajten skickar ett meddelande till rekvisita-sprajten.

![image alt text](BugRace_Intro_exempelspel.png)

1. Markera din hjälte-sprajt och gå in på SKRIPT. Under HÄNDELSER hittar du blocket skicka _. Välj ”nytt meddelande” i rullistan och hitta på ett namn till meddelandet, till exempel ”Mål”.
2. Lägg blocket skicka Mål sist inuti skriptet om rör (motståndar-sprajten) då.

![image alt text](BugRace_Intro_exempelspel.png)

3. Markera nu din rekvisita-sprajt och gå in på SKRIPT. Välj blocket när jag tar emot Mål från HÄNDELSER och lägg det fritt på skriptytan.
4. Välj vad som ska hända när rekvisita-sprajten får meddelandet om att hjälten övervunnit motståndaren! I vårt exempel har vi skapat en ny klädsel till sprajten, där trädet har fullt med fjärilar i lövkronan. Sedan har vi använt blocket byt klädsel till (klädsel 2) från UTSEENDE och lagt det till skriptet när jag tar emot Mål.

![image alt text](BugRace_Intro_exempelspel.png)

Testa din kod! Tryck på START-flaggan och se vad som händer! Efter att hjälten har övervunnit motståndaren, byter rekvisita-sprajten sin klädsel?

![image alt text](BugRace_Intro_exempelspel.png)

Om du vill att något annat ska hända kan du självklart använda andra skriptblock!

Här kommer några tips:

1. Du kan byta bakgrund på scenen om du vill ändra miljön, till exempel att natt förvandlas till dag eller att regnväder förvandlas till solsken.
2. Du kan animera hjälte-sprajtens klädslar eller ändra storlek eller färgeffekt på sprajten om du vill att hjälten ska ändra utseende i slutet av berättelsen.
3. Du kan lägga till fler sprajtar som visas i slutet av berättelsen, så att de dyker upp när motståndaren är borta.
4. Du kan lägga till fler sprajtar som är med i berättelsen hela tiden och som byter klädsel i slutet på berättelsen.
5. Låt hjälten eller andra sprajtar säga fler saker om det behövs för att förklara hur berättelsen slutar!

Testa din kod! Tryck på START-flaggan och se vad som händer!


## GRATTIS – Du har en färdig berättelse!

Om du har tid över kan du nu göra om din hjälte och din motståndare, och fortsätta med berättelsen som du önskar! 
Här kommer några tips:

1. Nu kan du ändra din Hjälte så som du vill att den ska se ut! Gå in på sprajtens klädslar och använd ritverktygen för att göra om din hjälte. Använd till exempel penseln för att rita eller färgburken för att ändra färg på exempelvis kläder eller hår.
2. Om du inte redan har animerat din hjälte-sprajt kan du nu kopiera klädseln så att hjälten har flera utseenden. Ändra något i den ena klädseln så kan du animera mellan de båda! Vissa sprajtar har redan flera klädslar att animera mellan, till exempel så att hjälten rör på benen eller ändrar ansiktsuttryck.
3. Du kan ändra motståndar-sprajten om du vill att den ska se annorlunda ut eller ha klädslar att animera mellan. Kanske ska motståndaren ändra ansiktsuttryck när hjälten möter den?
4. Om du vill att fler saker ska hända i berättelsen, så kan du nu lägga till fler sprajtar och koda dem. Testa dig fram och se vad som händer!
5. Du kan ha fler bakgrunder till scenen och animera dem om du vill att berättelsen ska byta miljö.
6. Du kan lägga till en bakgrund som inleder berättelsen och i ritverktyget skriva en text som förklarar berättelsen, till exempel börja med ”Det var en gång…”. 
7. Du kan också lägga till en bakgrund som avslutar berättelsen och skriva en text som förklarar vad som händer sedan, till exempel ”Så levde de lyckliga i alla sina dagar. Snipp snapp slut så var sagan slut!”. 

Om du vill lägga till inledning och avslutning, kom ihåg att pausa sprajtarna i början och slutet på berättelsen, så att berättelsetexten hinner visas. Använd blocket vänta till det.

**Glöm inte att spara ditt projekt!** Döp det gärna till uppgiftens namn så att du enkelt kan hitta den igen.

> Testa! Visa gärna någon det som du har gjort och låt dem testa. Tryck på DELA för att andra ska kunna hitta berättelsen på Scratch. Gå ut till projektsidan och låt någon annan testa berättelsen!

## Utmaningar
???

## Frågeställningar (korrigeras?)

* Vad är en variabel?
* Vad kan du använda ett slumptal till?
* Vad är en klon?
* Varför kan det vara bra att skapa kloner i stället för att bara kopiera en sprajt flera gånger?
