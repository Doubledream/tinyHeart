var fruitObj = function(){
	this.alive = [];//bool
	this.x = [];
	this.y = [];
	this.aneNo = [];
	this.l = [];
	this.speed = [];
	this.fruitType = [];
	this.orange = new Image();
	this.blue = new Image();
}
fruitObj.prototype.num = 30;
fruitObj.prototype.init = function(){
	for (var i = 0; i < this.num; i++) {
		this.alive[i] = false;
		this.x[i] = 0;
		this.y[i] = 0;
		this.aneNo[i] = 0;
		this.speed[i] = Math.random() * 0.017 + 0.003;
		//this.born(i);
		this.fruitType[i] = "";
	}
	this.orange.src = "./src/fruit.png"
	this.blue.src = "./src/blue.png"
}
fruitObj.prototype.draw = function()
{
	for(var i = 0;i < this.num; i++){ 
		if(this.alive[i])
		{
			if(this.fruitType[i] == "blue"){
				var pic = this.blue;
			}
			else{
				var pic = this.orange;
			}
			if(this.l[i] <= 14){
				var NO = this.aneNo[i];
				this.x[i] = ane.headx[NO];
				this.y[i] = ane.heady[NO];
				this.l[i] += this.speed[i] * deltaTime;
			}
			else{
				this.y[i] -= this.speed[i] * deltaTime * 7;
			}
			ctx2.drawImage(pic,this.x[i] - this.l[i]*0.5,this.y[i] - this.l[i]*0.5,this.l[i],this.l[i]);
			if(this.y[i] < 10)
			{
				this.alive[i] = false;
			}
		}
	}
}
fruitObj.prototype.born = function(i){
	//var aneID = Math.floor(Math.random()*ane.num);
	this.aneNo[i] = Math.floor(Math.random() * ane.num);
	//this.x[i] = ane.headx[aneNo];
	//this.y[i] = ane.heady[aneNo];
	this.l[i] = 0;
	this.alive[i] = true;
	var ran = Math.random();
	if(ran < 0.3){
		this.fruitType[i] = "blue";
	}
	else{
		this.fruitType[i] = "orange";
	}
}
fruitObj.prototype.dead = function(i){
	this.alive[i] = false;
}
function fruitMonitor(){
	var num = 0;
	for(var i = 0; i < fruit.num; i++){
		if(fruit.alive[i]) num++;
	}
	if(num < 15){
		//send fruit
		sendFruit();
		return;
	}
}
function sendFruit(){
	for(var i =  0; i < fruit.num; i++ ){
		if(!fruit.alive[i]){
			fruit.born(i);
			return;
		}
	}
}
/*fruitObj.prototype.update = function(){
	var num = 0;
	for (var i = 0; i < this.num; i++) {
		if (this.alive[i]) num++;
	}
}*/