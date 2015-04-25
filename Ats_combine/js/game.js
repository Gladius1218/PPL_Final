//extend array function, delete, delete specific value
Array.prototype.remove = function(obj){
	
	for(var i=0,l=this.length;i < l;i++){
		if(this[i] == obj){
			this.splice(i,1);
			return this;
		}
	}
	throw "The Array has no this Obj";
}

//Game control
var Game = {
	//Back ground dom
	gamePanel : null,
	//player
	flyer : null,
	//enemy list
	enemyList : [],
	//score
	score : 0,
	//is game over?
	isGameOver : false,
	//init
	init : function(){
		
		var _this = this;
		//get background
		this.gamePanel = document.getElementById("gamePanel");
		//focus on background
		this.gamePanel.focus();
		//gogogo!
		this.startFlyer();
		//enemy contact!
		this.startEnemy();
		//key press
		document.body.onkeydown  = function(e){_this.onkeydown(e);};
		document.body.onkeyup = function(e){_this.onkeyup(e);}
	},
	//start player
	startFlyer : function(){
		
		var _this = this;
		//new player object
		this.flyer = new Flyer();
		//set position
		flyerSetPosition(this.flyer,this.gamePanel,this.gamePanel.clientWidth,this.gamePanel.clientHeight);
		//fire function
		this.flyer.onSendBullet = function(){flyer_sendBullet(_this.flyer, _this.enemyList);};
		//change score
		this.flyer.onChangeScore = function(){_this.changeScore();};
	},
	//start enemy
	startEnemy : function(){
		//game over already
		if(this.isGameOver)return;
		
		var _this = this;
		//new enemy
		var enemy = new Enemy();
		//put into background
		this.gamePanel.appendChild(enemy.dom);
		//get a random x position for enemy show up
		var randomX = parseInt(Math.random()* (this.gamePanel.clientWidth / enemy.dom.clientWidth),10);
		//set the position
		enemy.setPosition(randomX * enemy.dom.clientWidth,0);
		//check hit
		enemy.OnCheckCrash = function(){
			//game over already
			if(_this.isGameOver)return;
			//hit or not
			if(Math.sqrt(Math.pow(_this.flyer.dom.offsetLeft-this.dom.offsetLeft,2)
				+ Math.pow(_this.flyer.dom.offsetTop-this.dom.offsetTop,2))
				<= _this.flyer.dom.clientWidth/2 + this.dom.clientWidth/2){
				//enemy down
				this.isLive = false;
				//if crash, life - 1
				if (!_this.flyer.Lives) {
					burstFlyer(_this.flyer);
					return true;
				}else{
					_this.flyer.Lives = _this.flyer.Lives - 1;
					document.getElementById('lives').innerHTML =  _this.flyer.Lives;
					return false;
				};
				
			}
			return false;
		}
		//enemy remove
		enemy.onend = function(){
			_this.gamePanel.removeChild(this.dom);
			_this.enemyList.remove(this);
		}
		//Mayday!Mayday!I'm shot!
		enemy.manDown = function(){_this.manDown();}
		//game over function
		enemy.gameover = function(){_this.gameover();}
		//enemy move
		enemy.animation(this.gamePanel.clientWidth,this.gamePanel.clientHeight);
		//add to enemy list
		this.enemyList.push(enemy);
		//start next enemy
		setTimeout(function(){_this.startEnemy();},500);
	},
	//key press event
	onkeydown : function(e){
		e = e || window.event;
		
		var keyCode = e.keyCode;
		//prevent default explorer
		if(keyCode == 32 || this.flyer.keyCodeAndDirection[keyCode]){
			if(e.preventDefault)e.preventDefault();
			else e.returnValue = false;
		}
		else return;
		//call key down function
		flyer_keydown(this.flyer, e);
	},
	//key release
	onkeyup : function(e){
		e = e || window.event;
		//call key release function
		flyer_keyup(this.flyer, e);
	},
	//chenge score
	changeScore : function(){
		
		this.score += 100;
		document.getElementById('score').innerHTML =  this.score;
		//score level
		var scoreLevel = 1;//parseInt(this.score / 500,10) + 1;
		//upgade score level and bonus life
		if(scoreLevel > 1){
			this.flyer.bulletLevel = scoreLevel>4?4:scoreLevel;
			//change enemy speed
			Enemy.prototype.movesp = Enemy.prototype.movespMap[this.flyer.bulletLevel];
			Enemy.prototype.movepy = Enemy.prototype.movepyMap[this.flyer.bulletLevel];
		}
	},
	manDown : function(){
		if (this.flyer.Lives > 0) {
			this.flyer.Lives = this.flyer.Lives - 1;
			document.getElementById('lives').innerHTML =  this.flyer.Lives;
		} else{
			this.gameover();
		};
	},
	//game over
	gameover : function(){
		
		this.isGameOver = true;
		
		document.getElementById('score').innerHTML = "Game Over...You Score is:" + this.score;
		
		for(var i=0,l=this.enemyList.length;i < l;i++){
			this.gamePanel.removeChild(this.enemyList[0].dom);
			this.enemyList.remove(this.enemyList[0]);
		}
		
		this.gamePanel.removeChild(this.flyer.dom);
		this.flyer = null;
		this.score = 0;
		
		this.gamePanel = null;
		
		document.body.onkeydown = null;
		document.body.onkeyup = null;
		
		document.getElementById('startBtn').style.display = 'block';
	}
}
//game start
function Start(){
	Game.isGameOver = false;
	Game.init();
	document.getElementById('startBtn').style.display = 'none';
	document.getElementById('score').innerHTML = 0;
	document.getElementById('lives').innerHTML = 3;
}

