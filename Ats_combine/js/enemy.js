//enemy class
var Enemy = function(){
	//enemy dom
	this.dom = null;
	//alive or not
	this.isLive = true;
	this.init();
}
Enemy.prototype = {
	//move speed X
	movepx : 6,
	//move speed Y
	movepy : 4,
	//move frequency
	movesp : 75,
	//move freq map
	movespMap : {
		1: 75,
		2: 65,
		3: 55,
		4: 45
	},
	//move speed y level
	movepyMap : {
		1: 4,
		2: 5,
		3: 6,
		4: 8
	},
	//init
	init : function(){
		this.dom = document.createElement('div');
		this.dom.className = 'enemy';
	},
	//init enemy location
	setPosition : function(x,y){
		this.dom.style.left = x +'px';
		this.dom.style.top = y + 'px';
	},
	//enemy movement
	animation : function(gameWidth,gameHeight){
		var _this = this,
		//left or right
		_movepx = this.dom.offsetLeft < gameWidth / 2 ?-1*this.movepx:this.movepx;
		//movement processor
		var process = function(){
			//position
			var left = _this.dom.offsetLeft,top = _this.dom.offsetTop;
			//move left
			if(_movepx > 0){
				left = left + _movepx >= gameWidth-_this.dom.clientWidth ? gameWidth-_this.dom.clientWidth : left + _movepx;
			}
			//move right
			else {
				left = left + _movepx <=0 ? 0 : left + _movepx;
			}
			//reach the edge, change direction
			if(left <= 0 || left >= gameWidth-_this.dom.clientWidth){_movepx *= -1;}
			//move down
			top = top + _this.movepy >= gameHeight - _this.dom.clientHeight?gameHeight - _this.dom.clientHeight:top + _this.movepy;
			//set direction
			_this.dom.style.top = top + 'px';
			_this.dom.style.left = left + 'px';
			//see if it's crash
			var isCrash = _this.OnCheckCrash();
			//reach the end? alive?
			if(top < gameHeight - _this.dom.clientHeight && _this.isLive && !isCrash){
				//keep moving
				setTimeout(process,_this.movesp);
			}
			else {
				//dead without crash
				if (!_this.isLive && !isCrash) 
					//explode
					_this.effect();
				//crash
				else {
					//explode
					_this.effect();
					//player die
					setTimeout(function(){_this.manDown();}, 100);
				}
			}
		}
		//start moving
		process();
	},
	//explode
	effect : function(){
		
		this.dom.className = 'bingo';
		
		var _this = this;
		
		setTimeout(function(){_this.onend()},50);
	},
	//check crash
	OnCheckCrash : function(){},
	//enemy end
	onend : function(){},
	//game over
	gameover:function(){},
	//player die
	manDown:function(){}
}
