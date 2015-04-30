#define ATS_MAINATSFLAG 1
#define ATS_DYNLOADNAME "my_dynload"
(* ****** ****** *)
//
#include
"share/atspre_define.hats"
//
(* ****** ****** *)
//
#include
"{$LIBATSCC2JS}/staloadall.hats"
//
(* ******const values ****** *)
#define IS_GAME_OVER 0
//player
#define PLAYER_WIDTH 18.0
#define PLAYER_HEIGHT 18.0
#define PLAYER_SPEED 20.0
#define PLAYER_FIRE_COOLDOWN 1000
//screen
#define SCREEN_WIDTH 400.0
#define SCREEN_HEIGHT 500.0
//KEY CODE
#define KEY_LEFT 37
#define KEY_RIGHT 39
#define KEY_UP 38
#define KEY_DOWN 40
#define KEY_SPACE 32
//enemy
#define ENEMY_SPEED 5
#define ENEMY_FREQ 100
#define ENEMY_WIDTH 18.0
#define ENEMY_HEIGHT 18.0

//datatype
typedef cont = () -<cloref1> void
abstype gameobject

(************Implemented in graphics.js************)
//Panel Manipulate
    //add game object into the screen
fun panel_add(gameobject): void = "mac#"
    //remove game object from the screen
fun panel_remove(gameobject): void = "mac#"
    //game tick handler
fun game_tick(dt: int): void = "mac#"
    //game over function
fun gameover(): void = "mac#"
    //update current survive time
fun score_update(x:int): void = "mac#"

//key press
    //check which key is pressed
fun check_key(key: int): int = "mac#"

//player
    //player initialize
fun player_init(): void = "mac#"
    //set player position by coordinate
fun player_setPosition(x:double , y:double): void = "mac#"
    //set player position x
fun player_setPosition_X(x:double): void = "mac#"
    //set player position y
fun player_setPosition_Y(y:double): void = "mac#"
    //get player position x
fun player_getPosition_X(): double = "mac#"
    //get player position y
fun player_getPosition_Y(): double = "mac#"
    //update lives remain to the screen
fun update_lives(int): void = "mac#"


//Math funcitons
    //send a seed and get a random number
fun rand(int): int = "mac#"
    //calculate the enemy speed x based on the fixed moving speed for enemy
fun calc_speed_x(ratio:double): double = "mac#"
    //calculate distant between player and enemy
fun calc_dist(px:double, py:double, ex:double, ey:double): double = "mac#"

//enemy
    //get enemy position x
fun enemy_getPosition_X(enemy: gameobject): double = "mac#"
    //get enemy position y
fun enemy_getPosition_Y(enemy: gameobject): double = "mac#"
    //create a new enemy
fun create_enemy(): gameobject = "mac#"
    //set enemy position by coordinate
fun enemy_setPosition(enemy: gameobject, x:double, y: double): void = "mac#"
    //remove an enemy from the screen
fun enemy_remove(enemy: gameobject): void = "mac#"

(************implemented in myGame.dats**************)
//Panel Manipulate
    //initialize function
fun init():void = "mac#"
    //test function, print coordinate on the console log
fun test(x:double, y: double, z: double, a: double): void = "mac#"
    //test function, print crash coordinate on the console log
fun crash_report(x:double, y: double, z: double, a: double): void = "mac#"

//key press
    //check which key is pressed and get the direction
fun player_keyPress(): void = "mac#"
    //move player
fun player_move(x:double , y:double): void = "mac#"

//Math function
    //set timeout to execute the closure
fun setTimeout_cloref(fwork: cont, ntime: double) : void = "mac#"

//player
    //update player after time delta dt
fun player_update(dt: int): void = "mac#"
    //get one more life and return Some(1), in none return None
fun player_get(): Option(int) = "mac#"
    //called after player crash with enemy
fun player_crash(enemy: gameobject):void = "mac#"

//enemy
    //check enemy cooldown, prevent making too many enemy 
fun enemy_get(dt: int): Option(int) = "mac#"
    //intend to slow down enemy, implemented but not used. Using CPS instead
fun enemy_move_get(dt:int): Option(int) = "mac#"
    //update enemy by dt
fun enemy_update(dt: int): void = "mac#"
    //set animation for a new enemy
fun set_enemy_animation(enemy: gameobject): void = "mac#"
    //moving an enemy
fun enemy_move(enemy: gameobject, speed_x: double, speed_y: double, k: cont): void = "mac#"
    //check if enemy crash with player
fun enemy_check_crash(enemy: gameobject, x:double, y: double): int = "mac#"
    //check if enemy still in the screen
fun enemy_check_bound(enemy: gameobject, x:double, y: double): int = "mac#"