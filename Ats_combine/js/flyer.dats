
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
    else if(!flyer.isMove) flyer_move(flyer, keyCode);
}

function
flyer_keyup(flyer,e){
    if(flyer.keyCodeAndDirection[e.keyCode]){
        flyer_stopMove(flyer);
    }
    else if(e.keyCode == 32){
        flyer.isSend = false;
    }
}

function
flyer_stopMove(flyer){
        flyer.isMove = false;
        clearInterval(flyer.moveId);
}

function
flyer_move(flyer, keyCode){
    flyer.isMove = true;
    switch(flyer.keyCodeAndDirection[keyCode]){
        case "left":{
            flyer.moveId = setInterval(function(){flyer_moveLeftUp(flyer,"left");},flyer.movesp);
            break;
        }
        case "up":{
            flyer.moveId = setInterval(function(){flyer_moveLeftUp(flyer,"up");},flyer.movesp);
            break;
        }
        case "right":{
            flyer.moveId = setInterval(function(){flyer_moveRightDown(flyer,"right")},flyer.movesp);
            break;
        }
        case "down":{
            flyer.moveId = setInterval(function(){flyer_moveRightDown(flyer,"down");},flyer.movesp);
            break;
        }
        default:break;
    } 
}

function
flyer_moveLeftUp(flyer, direction){
    var flyer = flyer
    var leftOrUp = flyer.dom[direction=="left"?"offsetLeft":"offsetTop"];
    leftOrUp = leftOrUp - flyer.movepx >= 0 ? leftOrUp - flyer.movepx:0;
    flyer.dom.style[direction=="left"?"left":"top"] = leftOrUp + 'px';
    if(leftOrUp == 0){flyer_stopMove(flyer);}
}

function
flyer_moveRightDown(flyer, direction){
    var flyer = flyer
    var leftOrUp = flyer.dom[direction=="right"?"offsetLeft":"offsetTop"];
    var maxDistance = direction=="right"?flyer.gameWidth-flyer.dom.clientWidth:flyer.gameHeight - flyer.dom.clientHeight;
    leftOrUp = leftOrUp + flyer.movepx <= maxDistance ? leftOrUp + flyer.movepx:maxDistance;
    flyer.dom.style[direction=="right"?"left":"top"] = leftOrUp + 'px';
    if(leftOrUp == maxDistance){flyer_stopMove(flyer);}
}

function
burstFlyer(flyer){
        flyer.dom.className = 'bingo';
}

%} // end of [%{]
//
(* ****** ****** *)

(* ****** ****** *)

(* end of [mygame_flyer.dats] 

fun flyer_init(): void = "mac#"   //fun mygame_flyer_initize(): void = "mac#"
fun flyer_moveLeftUp(): void = "mac#"
fun flyer_moveRightDown(): void = "mac#"
fun flyer_sendBullet(): void = "mac#" //flyer_fire_bullet(flyer): void = "mac#"
fun flyer_onSendBullet(): void = "mac#"
fun flyer_onChangeScore(): void = "mac#"
fun flyer_theFlyer_get (): Option(flyer) = "mac#"
*)