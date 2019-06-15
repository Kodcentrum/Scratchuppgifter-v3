## Koda ditt piano

I denna uppgift kommer du få koda ett spel, som kommer att spela en melodi som du ska följa och försöka spela samma som på ditt piano. Du kommer även att få lära dig lite grundläggande om noter. Dax att börja koda!

Starta med att klicka på nedanstående länk
1. [https://scratch.mit.edu/projects/311971291/editor/](https://scratch.mit.edu/projects/311971291/editor/)

![alt text](bilder/bild_piano_startbild)

Du startar med en bakgrund av ett piano. Klicka på **Bakgrunder**. Där ser du att det finns flera 9 backgrunder.
Varje bakgrund representerar en vit tangent på pianot. Namnet på bakgrunden säger vilken ton du spelar på pianot i en C-skala.
C-skalan består av 8 noter och är: **C D E F G A B C**.

Längst till vänster ser du olika kategorier som heter "Rörelse", "Utseende", "Ljud" m.m. Under varje kategorie finns det olika block du kan programmera med. Vi kommer i denna uppgift främst att använda block från "Utseende", "Händelse" och "Musik".

---

## 1 - Välja instrument

Det första vi ska göra är att sätta bakgrund och välja instrument. Nu kommer vi att välja piano men sedan kan du testa att byta till ett annat instrument. Den gröna flaggan sätter i gång ditt progam.

Dessa block behöver vi ha:

![alt text](bilder/startblock.PNG)

Kan du koppla ihop dessa? I nästa steg ska vi koppla ihop block så att du kan spela en not på pianot.

---

## 2 - Spela en not

Nu ska vi göra så att vi kan spela på pianot med tangentbordet.

Dessa block behöver vi ha:

![alt text](bilder/spela-not-block.PNG)

1. På blocket ``` När mellanslag tangenten trycks ned ``` välj bokstaven **a**.

Nu ska vi sätta bakgrund som ska visa vilken ton vi spelar.

2. På blocket ``` Byt bakgrund till ``` och välj **Not-C**.Detta betyder att vi kommer att spela noten C på pianot.

3. På blocket ``` Spela not 60 i 0.25 takter ``` så klicka på siffran 60. Då kommer du få upp ett litet piano välj not C(60).

Testa ditt program nu och tryck på bokstaven **a** på tangentbordet, ser du att du spelar noten C?

---

## 3 - Resten av noterna

Nu ska vi programmera resten av noterna.
För varje not gör dessa tre steg:
1. På blocket ``` När mellanslag tangenten trycks ned ``` välj en bokstav.
2. På blocket ``` Byt bakgrund till ``` och välj **Not-**.
3. På blocket ``` Spela not 60 i 0.25 takter ``` så klicka på siffran 60. Då kommer du få upp ett litet piano välj en not.

Bokstäverna du ska använda är **s, f, g, h, j, k** och noterna är **D(62) E(64) F(65) G(67) A(69) B(71) C(72)**.	

Kan du spela hela C-skalan nu?

---

## 4 - Hemligt meddelande
Du ska vara kvar på bakgrunder nu.
Klicka på kategorien "Händelser" och dra ut blocket ``` Skicka din tur ``` och koppla ihop det med ``` När gröna flaggan klickas ```. Ändra sedan meddelandet till **hemligt meddelande**. Tryck sedan på den gröna flaggan och se vad som händer!

Kan du spela samma melodi som precis spelades?

---

## 5 - Extra utmaning

Om du vill ha en extra utmaning kan du testa och göra ditt eget piano med Makey Makey.

Klicka på ikonen som du ser i bilden nedan

![alt text](bilder/fler-block.PNG)

Välj tillägget Makey Makey.

![alt text](bilder/makey-makey.PNG)

Nu har du fått två nya block att programmera med! Kan du byta ut dessa block:

![alt text](bilder/tangent-trycks-ned-block.PNG)

Mot dessa block:

![alt text](bilder/makey-block.PNG)

Koppla sedan in din Makey Makey i en USB-ingång och testa att spela igen!

---

## 6 - En till utmaning

Skulle du kunna med blocket som är i bilden nedan fråga efter varje not du spelar och spelaren skriva in notens namn?

![alt text](bilder/fraga-block.PNG)
 
---

## 7 - Färdig!

Gratulerar nu har du gjort ett piano som kan spela en C-skala.

