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
(* ****** ****** *)
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
#define ENEMY_FREQ 200
#define ENEMY_WIDTH 18.0
#define ENEMY_HEIGHT 18.0

//datatype
typedef cont = () -<cloref1> void
abstype gameobject
abstype store

//Panel Manipulate
fun init():void = "mac#"
fun panel_add(gameobject): void = "mac#"
fun panel_remove(gameobject): void = "mac#"
fun game_tick(dt: int): void = "mac#"
fun gameover(): void = "mac#"
fun test(x:double, y: double, z: double, a: double): void = "mac#"
fun crash_report(x:double, y: double, z: double, a: double): void = "mac#"
fun score_update(x:int): void = "mac#"

//key press
fun player_keyPress(): void = "mac#"
fun check_key(key: int): int = "mac#"
fun player_move(x:double , y:double): void = "mac#"

//player
fun player_init(): void = "mac#"
fun player_setPosition(x:double , y:double): void = "mac#"
fun player_setPosition_X(x:double): void = "mac#"
fun player_setPosition_Y(y:double): void = "mac#"
fun player_getPosition_X(): double = "mac#"
fun player_getPosition_Y(): double = "mac#"
fun update_lives(int): void = "mac#"
fun player_update(dt: int): void = "mac#"
fun player_get(): Option(int)
fun player_fire_cooldown(): Option(int) = "mac#"
fun player_fire(): void = "mac#"
fun player_crash(enemy: gameobject):void = "mac#"

//Math funcitons
fun rand(int): int = "mac#"
fun calc_dist(px:double, py:double, ex:double, ey:double): double = "mac#"
fun setTimeout_cloref(fwork: cont, ntime: double) : void = "mac#"

//enemy
fun enemy_get(dt: int): Option(int) = "mac#"
fun enemy_move_get(dt:int): Option(int) = "mac#"
fun enemy_getPosition_X(enemy: gameobject): double = "mac#"
fun enemy_getPosition_Y(enemy: gameobject): double = "mac#"
fun enemy_update(dt: int): void = "mac#"
fun create_enemy(): gameobject = "mac#"
fun set_enemy_animation(enemy: gameobject): void = "mac#"
fun enemy_setPosition(enemy: gameobject, x:double, y: double): void = "mac#"
fun enemy_move(enemy: gameobject, speed_x: double, speed_y: double, k: cont): void = "mac#"
fun enemy_check_crash(enemy: gameobject, x:double, y: double): int = "mac#"
fun enemy_check_bound(enemy: gameobject, x:double, y: double): int = "mac#"
fun enemy_remove(enemy: gameobject): void = "mac#"

