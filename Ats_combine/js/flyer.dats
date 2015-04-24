
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
staload "./flyer.sats"
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
    this.dom = null;
    this.isLive = true;
    this.isMove = false;
    this.moveId = null;
    this.isSend = false;
    this.nowBullet = 0;
    this.Lives = 3;
    this.init();
}
//
Flyer.prototype = {
    gamePanel : null,
    gameWidth : 0,
    gameHeight : 0,
    movepx : 10,
    movesp : 30,
    bulletLevel : 1,
    maxBullet : 12,
    keyCodeAndDirection : {
        37 : "left",
        38 : "up",
        39 : "right",
        40 : "down"
    },
    init : function(){
        this.dom = document.createElement('div');
        this.dom.className = 'flyer';
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
    var flyer = flyer;
    var gamePanel = gamePanel;
    gamePanel.appendChild(flyer.dom);
    flyer.dom.style.left = (width - flyer.dom.clientWidth) / 2 + 'px';
    flyer.dom.style.top = height - flyer.dom.clientHeight + 'px';
    flyer.gameWidth = width;
    flyer.gameHeight = height;
}

function
flyer_keydown(flyer,e) {       
    var keyCode = e.keyCode;
    if(keyCode == 32){
        if(!flyer.isSend){
            flyer.onSendBullet();
            flyer.isSend = true;
        }
    }
    else if(!flyer.isMove)flyer.move(keyCode);
}

function
flyer_keyup(flyer,e){
    if(flyer.keyCodeAndDirection[e.keyCode]){
        flyer.stopMove();
    }
    else if(e.keyCode == 32){
        flyer.isSend = false;
    }
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