
#define ATS_STATIC_PREFIX "mygame_flyer_"

(* ****** ****** *)

#define ATS_MAINATSFLAG 1
#define ATS_DYNLOADNAME "mygame_flyer_initize"

(* ****** ****** *)
//
#include
"share/atspre_define.hats"
//
(* ****** ****** *)
//
/staload "./flyer.sats"
//
(* ****** ****** *)
//
#include
"{$LIBATSCC2JS}/staloadall.hats"
//
(* ****** ****** *)

%{^
//
var Flyer = function(){
    //player dom
    this.dom = null;
    //alive or not
    this.isLive = true;
    //is moving
    this.isMove = false;
    //move direction
    this.moveId = null;
    //firing?
    this.isSend = false;
    //total bullet in the screen
    this.nowBullet = 0;
    this.Lives = 3;
    this.init();
}
//
Flyer.prototype = {
    //game background dom
    gamePanel : null,
    //width
    gameWidth : 0,
    //height
    gameHeight : 0,
    //flight speed
    movepx : 10,
    //move frequency
    movesp : 30,
    //vullet level
    bulletLevel : 1,
    //max bullet number
    maxBullet : 12,
    //方向键值对应
    keyCodeAndDirection : {
        37 : "left",
        38 : "up",
        39 : "right",
        40 : "down"
    }
}
%} // end of [%{]
//
(* ****** ****** *)
//
%{^
//
function
flyerSetPosition(flyer,gamePanel,width,height){
    var flyer = flyer
    var gamePanel = gamePanel;
    gamePanel.appendChild(flyer.dom);
    flyer.dom.style.left = (width - flyer.dom.clientWidth) / 2 + 'px';
    flyer.dom.style.top = height - flyer.dom.clientHeight + 'px';
    flyer.gameWidth = width;
    flyer.gameHeight = height;
}
%} // end of [%{]
//
(* ****** ****** *)


(* ****** ****** *)

(* end of [mygame_flyer.dats] 

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
fun flyer_theFlyer_get (): Option(flyer) = "mac#"
*)