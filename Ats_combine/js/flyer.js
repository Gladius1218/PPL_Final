//player class
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
	//direction
	keyCodeAndDirection : {
		37 : "left",
		38 : "up",
		39 : "right",
		40 : "down"
	},
	//init
	init : function(){
		this.dom = document.createElement('div');
		this.dom.className = 'flyer';
	},
	//set position
	setPosition : function(gamePanel,width,height){
		//put player in the panel
		this.gamePanel = gamePanel;
		this.gamePanel.appendChild(this.dom);
		//original position
		this.dom.style.left = (width - this.dom.clientWidth) / 2 + 'px';
		this.dom.style.top = height - this.dom.clientHeight + 'px';
		//backgroung height & width
		this.gameWidth = width;
		this.gameHeight = height;
	},
	//key pressed function
	keydown : function(e) {
		
		var keyCode = e.keyCode;
		//press space to fire
		if(keyCode == 32){
			//if not firing
			if(!this.isSend){
				//fire
				this.onSendBullet();
				this.isSend = true;
			}
		}
		//is moving
		else if(!this.isMove)this.move(keyCode);
	},
	//key release event
	keyup : function(e){
		//key released
		if(this.keyCodeAndDirection[e.keyCode]){
			//stop moving
			this.stopMove();
		}
		//space release
		else if(e.keyCode == 32){
			//set not firing
			this.isSend = false;
		}
	},
	//move
	move : function(keyCode){
		//set moving
		this.isMove = true;
		var _this = this;
		//check direction
		switch(this.keyCodeAndDirection[keyCode]){
			case "left":{
				
				this.moveId = setInterval(function(){_this.moveLeftUp("left");},_this.movesp);
				break;
			}
			case "up":{
				
				this.moveId = setInterval(function(){_this.moveLeftUp("up");},_this.movesp);
				break;
			}
			case "right":{
				
				this.moveId = setInterval(function(){_this.moveRightDown("right")},_this.movesp);
				break;
			}
			case "down":{
				
				this.moveId = setInterval(function(){_this.moveRightDown("down");},_this.movesp);
				break;
			}
			default:break;
		}
		
	},
	//move left or up
	moveLeftUp : function(direction){
		
		var leftOrUp = this.dom[direction=="left"?"offsetLeft":"offsetTop"];
		leftOrUp = leftOrUp - this.movepx >= 0 ? leftOrUp - this.movepx:0;
		this.dom.style[direction=="left"?"left":"top"] = leftOrUp + 'px';
		
		if(leftOrUp == 0){this.stopMove();}
	},
	//move right or down
	moveRightDown : function(direction){
		
		var leftOrUp = this.dom[direction=="right"?"offsetLeft":"offsetTop"];
		var maxDistance = direction=="right"?this.gameWidth-this.dom.clientWidth:this.gameHeight - this.dom.clientHeight;
		leftOrUp = leftOrUp + this.movepx <= maxDistance ? leftOrUp + this.movepx:maxDistance;
		this.dom.style[direction=="right"?"left":"top"] = leftOrUp + 'px';
		
		if(leftOrUp == maxDistance){this.stopMove();}
	},
	//stop moving
	stopMove : function(){
		this.isMove = false;
		clearInterval(this.moveId);
	},
	//fire
	sendBullet :function(enemyList){
		//see bullet remain
		if(this.bulletLevel + this.nowBullet > this.maxBullet){return;}
		
		var _this = this;
		//fire according to bullet level
		for (var i = 1,l=this.bulletLevel; i <= l; i++) {
			//new bullet obj
			var bullet = new Bullet();
			//add dom to game panel
			this.gamePanel.appendChild(bullet.dom);
			//set original location
			bullet.setPosition({
				left: this.dom.offsetLeft,
				top: this.dom.offsetTop,
				width: this.dom.clientWidth,
				position : i,
				level : l
			});
			//check hit
			bullet.checkBeat = function(){
				//search enemy list
				for (var i = 0, l = enemyList.length; i < l; i++) {
					//dead enemy
					if(!enemyList[i].isLive)continue;
					//get enemy position and radiation, also bullet position and radiation
					var e_left = enemyList[i].dom.offsetLeft, e_top = enemyList[i].dom.offsetTop, e_radius = enemyList[0].dom.clientWidth / 2, b_left = this.dom.offsetLeft, b_top = this.dom.offsetTop, b_radius = bullet.dom.clientWidth / 2;
					//see contact or not
					if (Math.sqrt(Math.pow(e_left - b_left, 2) + Math.pow(e_top - b_top, 2)) <= e_radius + b_radius) {
						//enemy down
						enemyList[i].isLive = false;
						//change score
						_this.onChangeScore();
						return true;
					}
				}
				return false;
			}
			//bullet end
			bullet.onend = function(){
				//remove from panel
				_this.gamePanel.removeChild(this.dom);
				//current bullets --
				_this.nowBullet--;
			}
			//bullet move
			bullet.animation();
			//vullet++
			_this.nowBullet++;
		}
	},
	//player down
	burstFlyer : function(){
		this.dom.className = 'bingo';
	},
	//fire(outer interface, to get the enemy list from the game class)
	onSendBullet : function(){},
	//change score
	onChangeScore : function(){}
}
