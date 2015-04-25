//Bullet class
var Bullet = function(){
	//bullet dom
	this.dom = null;
	this.init();
}
Bullet.prototype = {
	//bullet move speed
	movepx : 8,
	//bullet move frequency
	movesp : 10,
	//init
	init : function(){
		this.dom = document.createElement('div');
		this.dom.className = 'bullet';
	},
	//bullet init location
	//flyerinfo = {left:1,top:1,width:1,position:1,level:1}
	setPosition : function(flyerinfo){
		//bull out from middle of the plane
		var center = flyerinfo.left + ((flyerinfo.width-this.dom.clientWidth)/2),
			//bullet offset
			offset = 0;
		//count the number of the bullet
		flyerinfo.position = (flyerinfo.level % 2 != 0)?flyerinfo.position:flyerinfo.position+1;
		//calculate offset
		offset = (flyerinfo.position % 2 != 0)?(parseInt(flyerinfo.position/2,10) * this.dom.clientWidth):flyerinfo.position / 2 * this.dom.clientWidth * -1;
		//set bullet place
		this.dom.style.left = center + offset + 'px';
		this.dom.style.top = flyerinfo.top - this.dom.clientHeight + 'px';
	},
	//bullet move
	animation : function(){
		var _this = this;
		//process movement
		var process = function(){
			var top = _this.dom.offsetTop;
			top = top - _this.movepx >= 0 ? top - _this.movepx : 0;
			_this.dom.style.top = top + 'px';
			//see if the bullet reached the end or hit enemy
			if(top > 0 && !_this.checkBeat()){
				setTimeout(process,_this.movesp);
			}
			else {
				_this.onend();
			}
		}
		process();
	},
	//enemy hit
	checkBeat : function(){},
	//bullet end
	onend : function(){}
	
}
