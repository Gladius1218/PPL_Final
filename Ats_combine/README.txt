TO RUN THE GAME
just run index.html

INTRODUCTION TO THE GAME
Enemy will show up from the edge of the screen and move toward player(but they will not change their direction). Player cannot fire and need to dodge enemy's suicide attack to survive, see how long the player can live.
HOW DID I IMPLEMENT THIS
All the source code are under the js directory, and the image resources are under the img directory.  There are three files: myGame.sats, myGame.dats and graphics.js.

Basically all the interfaces used in the program are in myGame.sats, some of them are implemented in myGame.dats and some of them are implemented in graphics.js(I have marked them in the .sats file).

The player and enemy are div on the screen, and their styles are implemented in index.html.

Most of the graphic dealing part is in GRAPHICS.JS, like position get and set function and enemy div initialize function.
INIT FUCNTION
There is a Start() function in GRAPHICS.JS, which is called when the start button is pressed.  When Start function is called, the program will first initialize some JS arguments and create a Ticker EventListener, which will bind the tick function with the HTML website(I will talk about this later).  After the JS is initialized, it goes to ATS initialize by calling the ATS_start() function.

In ATS_start() function(located in the bottom of myGames.dats), it call my_dynload and init function in the .dats file and initialize the reference value like player lives, enemy show up cool down and all the initialize is over.

Then the game begins, with time passes, the ticker will be called automatically and in the tick handler function(located in line 36, graphics.js), it call the game_tick function in myGame.dats(line 103), the game_tick has an argument dt, which is the time interval between last time and this time the function is called. This argument will be passed to three functions: enemy_update, player_update and score update.  And these three functions basically handle all the game.

PLAYER
Player_update function will call the player_keyPress function and check which key is pressed. Then ATS set the move direction by setting the value need to be added to the current coordinate of the player, and call player_move function to set the new position of the player.  

I used a PLAYER_SPEED to set the player's moving speed and a keys array to store the moving status of the player, if the direction key is pressed, the related digit of in the keys array will be set to true, and when the onkeyup function is called, the value will be erased.

A player has three lives at the beginning of the game, which is implemented using reference of integer, just like the token in Light4 assignment. When an enemy crashed the player, it will call player_get() function. And if the function return None(), then gameover() function is called and the game end.  I will talk about the enemy crash function in ENEMY part.

ENEMY
Enemy_update() function 
Enemy_update() function will call enemy_get function first, enemy_get() will check if the integer reference e_cooldown is less than 0, if it's not, then e_cooldown decrease by dt and return None. If e_cooldown is less than 0 then return Some(1) and set cool down to ENEMY_FREQ.

When enemy update() get Some(_), it call create enemy() function in JS file and get the new enemy object. Then set the enemy animation by sending the enemy object to set_enemy_animation function.

In set_enemy_animation() function, we get the player's coordinate and current enemy's coordinate and set the moving direction.  The total moving speed is set in both the sats file and the graphics.js file.  As the total speed is fixed, we need to calculate the speed_x and speed_y to make sure two points: 1. the enemy move toward the player 2. speed_x^2 + speed_y^2 = ENEMY_SPEED^2. So we calculate the dist_x and dist_y between current enemy and the player to get the ratio between speed_x and speed_y, so we can solve them. I tried the sqrt function in math.sats at first but I'm not sure I did it right, so I solved the equation in JS file instead.

After we get the speed_x and speed_y for the current enemy, we call enemy_move() function to let it start moving.  There is a closure send to the enemy_move() function which calls the player_crash(enemy), the closure will be executed if it crash on the player. Just like every enemy are carrying their fate when they're created.

In enemy_move() function, we add speed_x and speed_y to the current coordinate of the enemy to update its position and then we check if the enemy crash the player by calling enemy_check_crash. If the return value is 1 then we call the closure, if it's not, we need to check the current position of the enemy and see if it's out of the screen. If it is, we remove it from the screen by calling enemy_remove function. If it's still in the screen, we call enemy_move function recursively and let the enemy keep moving. The closure will be passed continuously, just like every enemy can never get rid of their fate.  I used the setTimeout_cloref, which we used in the merge sort assignment, to prevent the enemy from moving too fast.

SCORE
Score_update function 
The score is actually the number of second passed, the argument passed to Score_update by the ticker handler is actually a millisecond time interval, so we add it to the score value, which is initualized in the js file. And when we show the score, we divide the score by 1000 and use parseInt function to change it to the second that player survived.

FEELING ABOUT THIS PROJECT
At first I was intended to make a aircraft shooting game, and I made it in JS, but since I implemented the enemy, player and bullet using the prototype function in js
