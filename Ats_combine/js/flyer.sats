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

(* ****** ****** *)

abstype flyer
abstype gamePanel

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
fun flyerSetPosition(flyer:flyer,gamePanel:gamePanel,width:int,height:int): void = "mac#"

(* end of [flyer.sats] *)