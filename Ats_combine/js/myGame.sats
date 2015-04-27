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
#define IS_GAME_OVER 0;
//player
#define PLAYER_WIDTH 18;
#define PLAYER_HEIGHT 18;
#define PLAYER_SPEED 20;
#define PLAYER_FREQ 1000;
//screen
#define SCREEN_WIDTH 400;
#define SCREEN_HEIGHT 500;
//KEY CODE
#define KEY_LEFT 37
#define KEY_RIGHT 39
#define KEY_UP 38
#define KEY_DOWN 40
#define KEY_SPACE 32

//datatype
abstype gameobject
abstype store

//Panel Manipulate
fun panel_add(gameobject): void = "mac#"
fun panel_remove(gameobject): void = "mac#"
fun game_tick(dt: int): void = "mac#"
fun gameover(): void = "mac#"

//key press
fun player_keyPress(): void = "mac#"
fun check_key(key: int): int = "mac#"
fun player_move(x:int , y:int): void = "mac#"

//player
fun player_init(): void = "mac#"
fun player_setPosition(x:int , y:int): void = "mac#"
fun player_setPosition_X(x:int): void = "mac#"
fun player_setPosition_Y(y:int): void = "mac#"
fun player_getPosition_X(): int = "mac#"
fun player_getPosition_Y(): int = "mac#"
fun update_lives(int): void = "mac#"
fun player_update(dt: int): void = "mac#"
fun player_get(): Option(int)
//Math funcitons
fun rand(int): int = "mac#"