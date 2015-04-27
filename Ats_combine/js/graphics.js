var DEBUG = false;

var IS_GAME_OVER = false;

var SCREEN_WIDTH = 400;
var SCREEN_HEIGHT = 500;

var PLAYER_WIDTH = 18;
var PLAYER_HEIGHT = 18;
var PLAYER_SPEED = 20;

var KEY_LEFT = 37
var KEY_RIGHT = 39
var KEY_UP = 38
var KEY_DOWN = 40
var KEY_SPACE = 32


var gamePanel = document.getElementById("gamePanel");
var plyer = null;
var keys = {};


//game functions
function Start(){
    IS_GAME_OVER = false;
    document.getElementById('startBtn').style.display = 'none';
    document.getElementById('score').innerHTML = 0;
    document.getElementById('lives').innerHTML = 3;
    js_init();
}

function js_init(){
    gamePanel.focus();
    createjs.Ticker.addEventListener("tick", tick);
    document.body.onkeydown  = function(e){onkeydown(e);};
    document.body.onkeyup = function(e){onkeyup(e);}
    ATS_start();
}

function tick(updateEvent) {
    game_tick(updateEvent.delta);
}

function gameover(){
    //gamePanel.removeChild(this.flyer.dom);
    document.getElementById('score').innerHTML = 0;
    document.getElementById('lives').innerHTML = 0;
    document.body.onkeydown = null;
    document.body.onkeyup = null;    
    document.getElementById('startBtn').style.display = 'block';
}


//Panel Manipulate
function panel_add(obj) {
    gamePanel.appendChild(obj);
}

function panel_remove(obj) {
    gamePanel.removeChild(obj);
}


//key press
function check_key(e) {
    if (keys[e])   
        return 1;
    else 
        return 0;
}

function onkeydown(e){
    switch(e.keyCode){
        case KEY_LEFT:
            player_getPosition_X();
            break;
        case KEY_UP:
            player_getPosition_Y();
            break;
    }
    keys[e.keyCode] = true;
}

function onkeyup(e){
    delete keys[e.keyCode];
}


//player
function player_init(){
    player = document.createElement('div');
    player.className = 'flyer';
    //set position
    var tempW = (SCREEN_WIDTH - PLAYER_WIDTH) / 2;
    var tempH = PLAYER_HEIGHT;
    player_setPosition(tempW , tempH);
    gamePanel.appendChild(player);
}

function update_lives(lives){
    document.getElementById('lives').innerHTML = lives;
}

function player_setPosition(x , y){
    player.style.left = x + 'px';
    player.style.top = SCREEN_HEIGHT - y + 'px';
}

function player_setPosition_X(x){
    player.style.left = x + 'px';
}

function player_setPosition_Y(y){
    player.style.top = SCREEN_HEIGHT - y + 'px';
}

function player_getPosition_X(){
    var x = player["offsetLeft"];
    return x;
}

function player_getPosition_Y(){
    var y = player["offsetTop"];
    y = SCREEN_HEIGHT - y;
    return y;
}

//Math funcitons
function rand(seed) {
    return Math.round(i * Math.random());
}