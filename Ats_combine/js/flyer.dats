
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
    var _this = flyer;
    switch(this.keyCodeAndDirection[keyCode]){
        case "left":{
            this.moveId = setInterval(function(){flyer_moveLeftUp("left");},_this.movesp);
            break;
        }
        case "up":{
            this.moveId = setInterval(function(){flyer_moveLeftUp("up");},_this.movesp);
            break;
        }
        case "right":{
            this.moveId = setInterval(function(){flyer_moveRightDown("right")},_this.movesp);
            break;
        }
        case "down":{
            this.moveId = setInterval(function(){flyer_moveRightDown("down");},_this.movesp);
            break;
        }
        default:break;
    } 
}

function
flyer_moveLeftUp(flyer, direction){
    var this = flyer
    var leftOrUp = this.dom[direction=="left"?"offsetLeft":"offsetTop"];
    leftOrUp = leftOrUp - this.movepx >= 0 ? leftOrUp - this.movepx:0;
    this.dom.style[direction=="left"?"left":"top"] = leftOrUp + 'px';
    if(leftOrUp == 0){this.stopMove();}
}

function
flyer_moveRightDown(flyer, direction){
    var this = flyer
    var leftOrUp = this.dom[direction=="right"?"offsetLeft":"offsetTop"];
    var maxDistance = direction=="right"?this.gameWidth-this.dom.clientWidth:this.gameHeight - this.dom.clientHeight;
    leftOrUp = leftOrUp + this.movepx <= maxDistance ? leftOrUp + this.movepx:maxDistance;
    this.dom.style[direction=="right"?"left":"top"] = leftOrUp + 'px';
    if(leftOrUp == maxDistance){this.stopMove();}
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