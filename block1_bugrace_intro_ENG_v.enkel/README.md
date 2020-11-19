# Bug Race - Intro (English)
In the game Bug Race, the goal is to get a beetle to stay on a track until it crosses the finishing line. To steer you use the left and right arrows on the computer keyboard. If the character leaves the track, it will be Game Over!

Test our version of Bug Race below. <a href="https://scratch.mit.edu/projects/452115651" target="_blank"> ![image alt text](BugRace_Intro_exempelspel.png)</a>

> **HOW DO YOU CODE THE GAME?** 
</br>
Follow the step-by-step instructions to code your project in Scratch. <a href="https://scratch.mit.edu" target="_blank"> Click here to open Scratch in a new tab.</a> When you’ve opened Scratch, click Create to get started. If you have a scratch account, log in so that you can save and share your project. If you don’t have an account yet, it is free. 
</br>

Time to start coding! Click on step 1 below to get started.

## 1: Choose a new "sprite" character

Replace the cat sprite with a new sprite, we’ve used a beetle! 
<video src="./BugRacedel1_nytt.mp4" controls muted height=480 width=640 />

>**TIME FOR YOU TO:**

Watch the video to see how to: 

- Remove the cat  
- Choose a new sprite 
- Reduce the size of the sprite

<br>
>**STEP-BY-STEP INSTRUCTIONS:**

In Scratch, you create projects using **sprites**. A sprite is a character you choose to add to your project. All sprites can be controlled with **code**. The code in Scratch looks like small pieces of a puzzle. When you put the pieces together, you build a **script**. The script is your code that controls your project and all your sprites. 

Time to replace the cat with a beetle, or any other sprite you want to have race around the track. This is how: 

1. Click on the **trash can on the small box with the cat** and the sprite will disappear. 

    ![image alt text](1-1_remove_sprite.png) 

2. To add a new sprite, click on the **Choose a sprite** button located under the **stage** with the white background: 

    ![image alt text](1-2_pick_sprite.png)

There are a lot of sprites to choose from. You can use the menu for different categories. If you want to use the beetle, go to "Animals.” Click on the beetle and it will be added to your project. 

3. The beetle is quite large and it will be hard for it to fit on a track. To make it smaller you go to where it says **Size** with 100 next to it. This means that the sprite is in full size, i.e 100%. You change the size by entering a lower number, for example 30%. Find a size that you want by testing different numbers. You can always change it again later when you have your track. 

    ![image alt text](1-3_chage_size.png)

The beetle is ready so it's time to draw the track! 

Click on chapter 2.


## 2: Color the backdrop and draw a track
We are now going to color the backdrop of the game and draw a track for the beetle to run on.
<video src="./BugRacedel2_nytt.mp4" controls muted height=480 width=640 />


>**TIME FOR YOU TO:**

Watch the video to see how to:
- Work on backdrop 
- Activate Bitmap mode 
- Select color and tools to fill backdrop 
- Choose a new color and tool to draw the track 

<br>
>**STEP-BY-STEP INSTRUCTIONS**

1. To change the backdrop, click on the white small box at the bottom right where it says **STAGE**. It will be marked with blue. Now click on the **BACKDROPS** tab at the top left. 

    ![image alt text](2-1_backdrop.png)	    ![image alt text](2-1_backdrop.png)

2. Click on the blue button **"Convert to bitmap.”**

    ![image alt text](2-2_convert_to_bitmap.png)

3. To choose **a color** click on the colored box that says Fill. A color picker will appear. Move the white circles to the color you want. When you are happy with your color, close the color picker by clicking next to it. 

   ![image alt text](2-2_fillcolor.png)
    
4. Now select the tool named **FILL**, which is the icon that looks like a small bucket, and click on the white checkered area. You should now have a different colored backdrop. 

  ![image alt text](2-2_bucket.png)
  
>**Note:** Don’t pick the same color for your backdrop or track as your sprite, since that will make it tricky later on.  

5. Now click on the **BRUSH** tool and select a new color for your track. You adjust the size of the brush stroke by clicking on the arrows next to it, or by changing the number in the box. You need the track to be rather thick. 

 ![image alt text](2-3_brush.png)
 
Draw a track like an oval or circle – make it as big as you can but keep it inside the box! 

This is roughly what the game's course may now look like. If the course is very narrow, the game will be very difficult, the beetle will easily end up off the course - and you will be Game Over. If the course is wide, the game will be a little easier as you have more space to steer around without going out! 

  ![image alt text](2-3_what_it_looks_like.png)


## 3: Making the sprite move
Now that the backdrop is done, you can put code together to create your first script and get your sprite to move. 
<video src="./BugRacedel3_nytt.mp4" controls muted height=480 width=640 />


>**TIME FOR YOU TO:**
Watch the video to see how to: 
- Return to CODE and your sprite to start coding 
- Add code for hat block: When GREEN FLAG clicked 
- Add MOTION code: move 10 steps 
- Add code for CONTROL: Forever (a loop) 

<br>
>**STEP-BY-STEP INSTRUCTIONS**

With your colorful backdrop and a track, it is time for you to create your first script. Remember to **save** your game often! You must be logged in to be able to save. 

Click on the CODE tab at the top left to return to the white surface where you can build your code for the game. Now click on the box with the small sprite below the stage so that it gets a blue frame. You are now ready to add code to your beetle. 

Place the mouse pointer on the beetle and hold down the mouse button (or hold it with your finger if you are using a tablet) to drag the sprite onto the painted track, dropping it where you want the beetle to be when you start your game. 

Have you found the START and STOP buttons yet? **The green flag** is the start button and the **red button** is the stop button. 

  ![image alt text](3_start_stopp.png)

You need to add code so that the beetle starts moving when you click on the START button – which is **the green flag**. To do this, you must tell the beetle what to do. The beetle can’t think for itself. It is waiting for your instructions in code that should say: 

"When I click on the START flag, the beetle should move." Code that initiates something is called INIT script.

This is how:

1. On the left-hand side you see colorful dots with headings and next to that code in the shape of puzzle pieces. Click on the yellow dot **EVENTS** and select the puzzle piece with a green flag on: **"when Green flag clicked"**. Drag this block to the script surface (the large empty, white area in the middle) and drop it there. 

  ![image alt text](3-1 _when_flag_clicked.png)

2. Then select the blue heading **MOTION** at the top and the block **"move 10 steps"**. Place this block directly below the first block with the green flag on the script surface. They will connect like puzzle pieces. 

  ![image alt text](3-1_move_10_steps.png)

>**Note:** if you move two blocks close to each other on the script surface, a gray shadow will appear and you can just release and the blocks will automatically connect as puzzle pieces. 

  ![image alt text](3-1_attaching_blocks.png)

>**Test your code!** Test what happens when you click on the green flag **START** above the stage. Does your beetle move to the right? If it doesn’t, don’t worry, just check your code. If it does, great, but you want the beetle to keep moving forward without you having to press start over and over again. Let’s add some more code. 

3. Under the orange heading **CONTROL** find the block **“forever”**. This block is a **loop**, i.e. a **repetition** of something so that it happens over and over again. With this block, the beetle will continue to move forward for as long as the game is running. 
Drag the "forever" block to the script surface and place it under "when green flag clicked" so that "move 10 steps" is placed inside the loop. Look at the picture below to see what it should look like.

  ![image alt text](3-2_forever.png)

>**Test your code!** Time to check you code by clicking on **START** – the green flag. Does your beetle run fast? See what happens if you change the number of steps to a lower number. Click on the number 10 in the block **"move 10 steps"** and enter another number. Test until you find the speed you want. 

  ![image alt text](3-2-3_steps.png)


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
