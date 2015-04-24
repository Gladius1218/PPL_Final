(*
** SpaceInvaders
*)

(* ****** ****** *)

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

#define XPLAYER 32
#define YPLAYER 32
#define XSCREEN 640
#define YSCREEN 640

(* ****** ****** *)

#define BULLET_VX 0
#define BULLET_VY 16

(* ****** ****** *)

abstype flyer

(* ******flyer functions ****** *)

fun flyer_new(): flyer = "mac#"
fun flyer_init(): void = "mac#"   //fun mygame_flyer_initize(): void = "mac#"
fun flyer_keydown(): void = "mac#"//theKeyDowns_handle(fwork: int -<cloref1> void): void = "mac#"
fun flyer_keyup(): void = "mac#"
fun flyer_move(): void = "mac#"
fun flyer_moveLeftUp(): void = "mac#"
fun flyer_moveRightDown(): void = "mac#"
fun flyer_stopMove(): void = "mac#"
fun flyer_sendBullet(): void = "mac#" //flyer_fire_bullet(flyer): void = "mac#"
fun flyer_burstFlyer(): void = "mac#"
fun flyer_onSendBullet(): void = "mac#"
fun flyer_onChangeScore(): void = "mac#"
fun flyer_thePlayer_get (): Option(flyer) = "mac#"
fun flyerSetPosition(flyer,gamePanel,width,height): void = "mac#"

(* end of [flyer.sats] *)
