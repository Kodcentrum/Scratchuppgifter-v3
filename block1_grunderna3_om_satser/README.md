# Startövning 3: Villkor

Nu ska du få lära dig hur man kan få olika skript att köra beroende på vad som händer i programmet.

> Bläddra dig fram genom denna guide, steg för steg. <a href="https://scratch.mit.edu" target="_blank">
  Öppna även verktyget Scratch på sajten www.scratch.mit.edu</a> där du kodar och skapar själva koden utifrån Kodbokens instruktioner.

Vi ska göra en robot som ställer frågor och säger olika saker beroende på vad vi svarar. Tänk på program som du brukar använda där olika saker händer beroende var du klickar, till exempel spel som startar olika banor när du klickar på dem.

## 1: Remixa

Precis som i den förra uppgiften ska vi börja med att remixa ett program.

1. Klicka på länken nedanför för att komma till det förberedda programmet.

<a href="https://scratch.mit.edu/projects/210050672/" target='_blank'>Projektlänk</a> <!--_-->

2. Om texten på hemsidan är på Engelska så kan du ändra språk längst ner på sidan.

![Alt Text](Image_1.png)

3. Se till att du är inloggad på ditt konto.

![Alt Text](Image_2.png)

4. Klicka på Se inuti.

![Alt Text](Image_3.png)

5. Klicka på remixknappen för att spara en egen kopia av programmet

![Alt Text](Image_4.png)

Vi kan nu koda som vi vill i det remixade projektet. I detta program finns redan några skript utplacerade. Vi ska nu lära oss hur vi kan få roboten att ställa frågor till oss.

## 2: Fråga-och-vänta-skriptet

Roboten kan just nu bara säga hej. För att få roboten att ställa en fråga använder du blocket **"fråga _Vad heter du?_ och vänta"** ifrån rubriken **Känna av**.

1. Dra in ett fråga-och-vänta-skript. Ändra texten till "Vad heter du?".

![Alt Text](Skript_1.gif)

2. Dra sedan in två stycken **"säg _Hej!_ i 2 sekunder"**-skript ifrån rubriken **Utseende** och lägg efter varandra under frågan. Ändra texten i det första skriptet till _Hej_.

3. Ta sedan **"svar"**-skriptet ifrån rubriken **Känna av** och sätt istället för texten i det andra skriptet.

![Alt Text](Skript_2.gif)

4. Provkör programmet

Bra jobbat! Nu har du en robot som kan säga hej till folk. Nu ska vi göra roboten lite mer avancerad!

## 3: Om-skriptet

Med hjälp av skriptet **"om <> då"** under rubriken **Kontroll** kan vi få roboten att säga olika saker beroende på vad vi svarat. Vi ska nu göra roboten lite mer personligt anpassad efter oss själva.

1. Lägg till **"om <> då"**-skriptet efter de andra skripten.

2. Lägg till ett **"() = ()"**-skript ifrån rubriken **Operatorer** inuti **"om <> då"**-skriptet.

![Alt Text](Skript_3.gif)

**"() = ()"**-skriptet säger åt roboten att jämföra om svaret som vi gav är lika med något annat.

3. Dra in ett **"svar"**-skript på vänstra sidan av **"() = ()"**-skriptet.

4. Ta bort siffran 50 och skriv ditt eget namn på högersidan.

![Alt Text](Skript_4.gif)

Nu kan vi få roboten att säga speciella saker till oss, som hon inte kommer säga till någon annan.

5. Dra in ett **"säg _Hej!_ i 2 sekunder"**-skript innanför **"om <> då"**-skriptet.

6. Ändra texten till _Det är du som har programmerat mig!_

![Alt Text](Image_5.png)

Superbra jobbat! Nu har du en robot som kan säga ett meddelande bara till dig. Andra personer som använder roboten kommer bara få ett hej tillbaka.

## 4: Om-då-annars-skriptet

Nästa steg är nu att få roboten att säga helt olika saker baserat på vad du har svarat. Då är det bra att ha ett **"om <> då annars"**-skript.

1. Dra in en ny fråga efter dina tidigare frågor och ändra texten till _Vad tycker du om programmering?_

2. Dra in ett **"om <> då annars"**-skript ifrån rubriken **Kontroll**.

3. Dra in ett **"() = ()"**-skript i **"om <> då annars"**-skriptet.

![Alt Text](Skript_5.gif)

Precis som förra gången vill vi se vad svaret är lika med.

4. Dra in ett **"svar"**-skript på vänster sida och ändra högersidan från _50_ till _Jättekul_.

![Alt Text](Skript_6.gif)

Skript som du lägger in i den övre delen av **"om <> då annars"**-skriptet kommer köras om man svarat att man tycker programmering är jättekul. Skript som du lägger in i den undre delen kommer köras om man svarar något annat.

5. Dra in ett **"säg _Hej!_ i 2 sekunder"**-skript i den övre delen och ändra texten till _Åh jag med! Jättekul!_

6. Dra in ett skript i den undre delen och ändra texten till _Jag tycker programmering är jättekul!_

![Alt Text](Image_6.png)

Bra jobbat! Nu har du en robot som kan svara på dina frågor. Kan du komma på några fler frågor att lägga till? Känner du till några andra robotar som kan svara på dina frågor?
