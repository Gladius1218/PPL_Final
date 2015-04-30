var DEBUG = false;

var IS_GAME_OVER = false;
//screen size
var SCREEN_WIDTH = 400;
var SCREEN_HEIGHT = 500;
//player
var PLAYER_WIDTH = 18;
var PLAYER_HEIGHT = 18;
var PLAYER_SPEED = 20;
//keycode
var KEY_LEFT = 37;
var KEY_RIGHT = 39;
var KEY_UP = 38;
var KEY_DOWN = 40;
var KEY_SPACE = 32;
//enemy
var ENEMY_FREQ = 100;
var ENEMY_SPEED = 5;

var gamePanel = document.getElementById("gamePanel");
var player = null;
var keys = {};
var rand_seed = 3.14159265 * 1618;
var score = 0;

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
    if (IS_GAME_OVER == false) {
        IS_GAME_OVER = true;
        keys = {};
        alert("game over! your survived " + parseInt(score/1000) + " seconds!");
        createjs.Ticker.removeEventListener("tick", tick);
        panel_remove(player);
        score = 0;
        document.getElementById('score').innerHTML = 0;
        document.getElementById('lives').innerHTML = 0;
        document.body.onkeydown = null;
        document.body.onkeyup = null;    
        document.getElementById('startBtn').style.display = 'block';
    }
}


//Panel Manipulate
function panel_add(obj) {
    gamePanel.appendChild(obj);
}

function panel_remove(obj) {
    gamePanel.removeChild(obj);
}
function score_update(delta){
    score = score + delta;
    document.getElementById('score').innerHTML = parseInt(score / 1000);
}


//key press
function check_key(e) {
    if (keys[e])   
        return 1;
    else 
        return 0;
}

function onkeydown(e){
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
    var tempH = (SCREEN_HEIGHT - PLAYER_HEIGHT) / 2;
    player_setPosition(tempW , tempH);
    panel_add(player);
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
    //console.log("player_getPosition_X is:" + x);
    return x;
}

function player_getPosition_Y(){
    var y = player["offsetTop"];
    y = SCREEN_HEIGHT - y;
    //console.log("player_getPosition_Y is:" + y);
    return y;
}

//Math funcitons
function rand(seed) {
    return Math.round(seed * Math.random());
}

function calc_dist(px, py, ex, ey){
    var a = (px - ex) * (px - ex)
    var b = (py - ey) * (py - ey)
    return Math.sqrt(a+b)
}

function calc_speed_x(r){
    var x = (ENEMY_SPEED * ENEMY_SPEED) / (1 + r * r)
    return Math.sqrt(x)
}

//enemy
function create_enemy(){
    var r = (rand(rand_seed) * 142857) % 100;
    enemy = document.createElement('div');
    enemy.className = 'enemy';
    if(r < 25){
        var x = 0;
        var y = (rand(rand_seed) * 142857) % SCREEN_HEIGHT;
    }
    else if(r < 50){
        var x = SCREEN_WIDTH - PLAYER_WIDTH;
        var y = (rand(rand_seed) * 142857) % SCREEN_HEIGHT;
    }
    else if(r < 75){
        var x = (rand(rand_seed) * 142857) % SCREEN_WIDTH;
        var y = PLAYER_HEIGHT;
    }
    else{
        var x = (rand(rand_seed) * 142857) % SCREEN_WIDTH;
        var y = SCREEN_HEIGHT;
    }
    enemy.style.left = x + 'px';
    enemy.style.top = SCREEN_HEIGHT - y + 'px';
    //alert("create enemy:"+x+","+y);
    panel_add(enemy);
    return enemy
}

function enemy_getPosition_X(enemy){
    var x = enemy["offsetLeft"];
    //console.log("enemy_getPosition_X is:" + x);
    return x;
}

function enemy_getPosition_Y(enemy){
    var y = enemy["offsetTop"];
    y = SCREEN_HEIGHT - y;
    //console.log("enemy_getPosition_Y is:" + y);
    return y;
}

function enemy_setPosition(enemy, x, y){
    enemy.style.left = x + 'px';
    enemy.style.top = SCREEN_HEIGHT - y + 'px';
}

function enemy_remove(enemy){
    //alert("enemy eliminated!!");
    enemy.className = 'bingo';
    setTimeout(function(){panel_remove(enemy);return;}, 20);
}