# Bug Race - Intro (English)
In the game Bug Race, the goal is to get a beetle to stay on a track until it crosses the finishing line. To steer you use the left and right arrows on the computer keyboard. If the character leaves the track, it will be Game Over!

Test our version of Bug Race below. <a href="https://scratch.mit.edu/projects/452115651" target="_blank"> ![image alt text](BugRace_Intro_exempelspel.png)</a>

> **HOW DO YOU CODE THE GAME?** 
</br>
Follow the step-by-step instructions to code your project in Scratch. <a href="https://scratch.mit.edu" target="_blank"> Click here to open Scratch in a new tab.</a> When you’ve opened Scratch, click Create to get started. If you have a scratch account, log in so that you can save and share your project. If you don’t have an account yet, it is free. 
</br>

Time to start coding! 

Click on step 1 below to get started.

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

1. To change the backdrop, we first need to click on the white small box at the bottom right where it says **STAGE**. It will be marked with blue. 

    ![image alt text](2-1_backdrop.png)

2. Now click on the **BACKDROPS** tab at the top left.

   ![image alt text](2-1_backdrop_tab.png)

3. Click on the blue button **"Convert to bitmap.”**. It is found at the bottom under the drawing surface.

    ![image alt text](2-2_convert_to_bitmap.png)

4. Now we will paint the backdrop. To choose **a color** click on the colored box that says **Fill**. A color picker will appear. Move the white circles to the color you want. When you are happy with your color, close the color picker by clicking next to it. 

   ![image alt text](2-2_fillcolor.png)

5. Now select a tool to fill your backdrop with the color. Click on the icon that looks like a small bucket, and click on the white checkered area to the right. You should now have a different colored backdrop.

  ![image alt text](2-2_bucket.png)
  
>**Note:** Don’t pick the same color for your backdrop or track as your sprite, since that will make it tricky later on.  

6. Now click on the **BRUSH** tool and select a new color for your track. You adjust the size of the brush stroke by clicking on the arrows next to it, or by changing the number in the box. You need the track to be rather thick. 

 ![image alt text](2-3_brush.png)
 
7. Draw a track like an oval or circle – make it as big as you can but keep it inside the box! 

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

  ![image alt text](3-1_when_flag_clicked.png)

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


## 4: Set a Starting position
To avoid having to drag the beetle back to the starting point each time you start the game, you can use code to place it at its starting position every time you click the green flag.  
<video src="./BugRacedel4_nytt.mp4" controls muted height=480 width=640 />


>**TIME FOR YOU TO:**

Watch the video to see how to: 
- Drag the sprite to where you want it to start on the track 
- Enter code from MOTION theme: go to x: __ y: __ 

<br>
>**STEP-BY-STEP INSTRUCTIONS**

1. Drag the sprite to the position on the track where you want it to be when you start the game. Place the sprite in the middle of the track and preferably not in a curve.

2. Under **MOTION**, select the block **"go to x: __ y: __"** and place it directly below  **"when green flag clicked"** and above the **"forever"** loop. The numbers (values) for X and Y are the COORDINATES of the starting position where you have placed the beetle – a specific place on your track. 

  ![image alt text](4-2_starting_position.png)

The beetle will now automatically move to the same starting position each time you click on the green START flag. 


## 5: Control the beetle

The next step is to make it possible to control the beetle, so that it doesn’t run straight off the track! For that you need two short scripts. One that tells the beetle to turn to the right when you click on the right arrow key on the computer keyboard, and another that tells it to turn left when you click on the left arrow key. (If you use a tablet with a touch screen, there are Notes further down for how you can code the sprite to follow your finger.) 
<video src="./BugRacedel5_nytt.mp4" controls muted height=480 width=640 />

>**TIME FOR YOU TO:**
Watch the video to see how to: 
- Enter code for EVENTS: “when space key pressed” Drag in two of those blocks 
- Change where it says *“space”* in the blocks to say *"left arrow"* and *"right arrow"* 
- Enter code for MOTION: turn ‘left’ 15 degrees and a turn ‘right’ 15 degrees 

<br>
>**STEP-BY-STEP INSTRUCTIONS**

1. Under the heading **EVENTS** there is a block that says **"when space key pressed"**. Drag in **two of those blocks** and place them next to each other anywhere on the script surface. 

  ![image alt text](5-1_control.png)

Next to the word *"space"* in these two blocks is a small white triangle. Click on the triangle in each block and select from the drop-down list that appears – **left arrow** in one block and **right arrow** in the other. 

  ![image alt text](5-arrows.png)

2. Now you will be able to turn the sprite. Under **MOTION** you find a block that says **"turn (arrow left) 15 degrees"** and one that says **"turn (arrow right) 15 degrees"**. Connect these two blocks under the blocks **"when left arrow key pressed"** and **"when right arrow key pressed"**.

  ![image alt text](5-2_pick_control.png)

>**Test your code!** Click on the green START flag and see if you can control the beetle in both directions with the arrow keys on the keyboard? Is it going too fast? Too slow? Adjust the speed of the beetle by changing the variable number in the motion block! 

>**Note! Are you using a tablet with a touch screen?** Then use the code below instead and the sprite will follow your finger on the screen around the track. 
  ![image alt text](5_tip_tablet.png)


## 6: Change starting direction

When you click on START, you will notice that the beetle moves in the direction it had when you last finished the game. This can make it tricky, so let’s add another init script that tells the beetle that it should always be facing to the right when the game is started. 
<video src="./BugRacedel6_nytt.mp4" controls muted height=480 width=640 />

>**TIME FOR YOU TO:**

Watch the video to see how to: 
- Enter code for MOTION: point in 90 degrees 

<br>
>**STEP-BY-STEP INSTRUCTIONS:**       

1. Under **MOTION**, select the block that says **"point in 90 direction”**. 

  ![image alt text](6-1_point_in_direction.png)

>**Test your code!** Test what happens if you change the value from 90 degrees to something else. Just click on the number 90 in the block, and a clock-like image will appear. Move the mouse pointer to another angle and click outside the image to select another angle.
  
  ![image alt text](6-2_adjust_direction.png)


## 7: Sense when the beetle leaves the track

Now you want the beetle to sense when it ends up off the track for it to be Game Over! For that you need to work with the colors. By adding code for a **condition** that says: "**IF** touching a specific color – **THEN** the game is over". 
<video src="./BugRacedel7_nytt.mp4" controls muted height=480 width=640 />


>**TIME FOR YOU TO:**

Watch the video to see how to: 
- Enter code for CHECK: if ... then 
- Enter code for SENSE: touching color_?. Place the block in the angular hole between if ... then. 
- Enter code for LOOKS: say Hello! for 2 seconds. Change the text to Game Over! 

<br>
>**STEP-BY-STEP INSTRUCTIONS:**

1. Under **CONTROL** there is the block **"if <> then"**, drag it to the script area, place it next to the other scripts. This block says that **IF** whatever is within **"<>"** happens, **THEN** something else should happen. For example: If the beetle *<touches the color green>**, say *Game Over* for 2 seconds.

  ![image alt text](7-1_if_then.png)
  
2. Under **SENSING** there is the block **"Touching color <>?"**. Drag this block to the hole **"<>"** inside the **"if <> then"** block that you placed on the script surface.

  ![image alt text](7-2_sense_color.png)

3. The color in the small oval circle to the right of the text **"touching color"** in your script needs to be exactly the same color as the game's backdrop color. You change it by clicking the mouse pointer on the small color circle and selecting the small symbol with a pipette at the bottom. Then click on the game's backdrop color and it will be the correct color in the code block circle. You have now told the computer that something is going to happen when the beetle touches this color. 

  ![image alt text](7-2_pick_color.png)

4. Finally, create a script for the game to say it's Game Over if the beetle touches the backdrop color. Under the theme **LOOKS**, select the block **"say Hello! for 2 seconds"** and drag this block inside **"if <touching color green?> then"**. Click on the word" Hello!" and change the text to what you want the beetle to say – we’ve chosen Game Over.

  ![image alt text](7-3_game_over.png)

>**Test your code!** Press start and test your game! Does anything happen when the beetle touches the backdrop color? If not, what do you think may be the reason? 


## 8: Complete the script 

Something is missing for the code to work! Let’s think a bit: **When** do you want the computer to detect if the beetle is touching the backdrop color? It needs to be done after every step the beetle takes, so as not to miss if it runs off the track. The computer must **check exactly where the beetle is "over and over again"**, all the time. Therefore, you need to connect the script that senses the color outside the track with what makes the beetle move. 
<video src="./BugRacedel8_nytt.mp4" controls muted height=480 width=640 />

>**TIME FOR YOU TO:**

Watch the video to see how to: 
- Put the script inside the forever loop 
- Enter code for CONTROL: stop all. Place the block at the bottom inside *if ... then*. Change to *“stop this script”*. 

<br>
>**STEP-BY-STEP INSTRUCTIONS:**

1. Place the color-sensing script **inside** your **"forever"** loop. Now the computer will check to see **if** the beetle has left the track before taking the next step forward. It will check it again and again.  

  ![image alt text](8-1_touch_color.png)

2. When it is Game Over, everything should end and the beetle should stop completely. Find the block **“stop all”** under **CONTROL**. Drag this block to the script field. Click on the small arrow in the block and switch to **"stop this script"**. 

  ![image alt text](8-2_stop_script.png)

Insert this block at the bottom inside the script with **"if <> then"** under the purple block. The code now says that if the beetle goes off the track, it will stop and it is Game Over. 

>**Test your code!** Can you take the beetle around the track, steering with the arrow keys? What happens if it ends up off the track? 


Is it difficult to know how to put all the blocks in the script? On the next page you can see what the finished script should look like. 


## Finished!
Congratulations, you have created your first game! If you followed the instructions, the finished script should look something like this: 

 ![image alt text](Final_script.png)

**Don't forget to save your project – and rename it!** It can be Bug Race – or you can come up with your own name, so that you can easily find your game again. Enter the name of your project at the top, where it says "Untitled" and save. You must be logged in to be able to save. 

> **Test your project**  
Feel free to show someone your game and let them test it. If you want, click on the SHARE button at the top, which allows others to find the game on the Scratch site and test it.

> **Important if you share your project:** Remember that shared projects can be viewed, tested and remixed (remodeled) by anyone who wants to on the Scratch site. If you share a project, it is important that it doesn’t contain information, images or sounds you do not want others to see. 

## Challenge
Is something missing? Would you like to develop the game more? 
Perhaps add another player? Notes on how to make your Bug Race more challenging can be found under .  
<a href="https://www.kodboken.se/start/skapa-spel/uppgifter-i-scratch/bug-race-additions-english" target="_blank">**"Bug Race – Additions"**</a>.

![Bug race med två spelare](image_2.png)

## Questions: 

* What is a sprite? 

* What is a loop? 

* Why might it be good to use a loop? 

* What is an INIT-Script? 
