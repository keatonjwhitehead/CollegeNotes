var p1, p2;
var p1controls = [87,68,83,65,69,81] //up,right,down,left,HIT (WDSAE)
var p2controls = [73,76,75,74,85] //up,right,down,left,HIT (ILKJU)
var playerLocationX, playerLocationY;
var zombieKills = 0;
function setup() {
	createCanvas(600,600);

	p1 = new playerObj('blue', 30, 5, p1controls)
	p2 = new zombieObj('green', 30, 1, p2controls)
}

function draw(){
	background(255);
	if(p2.score <= 0){
		p2.x = random(width/2)
		p2.y = random(height/2)
		p2.score = 100;
		p1.score += 10;
		zombieKills++;
	}

	//draw and collide the players
	if(p1.score >= 1){
		p1.disp();
		p1.collide(p2);
		p2.disp();
		p2.collide(p1);
	}
	else{
		textSize(32);
		text('Game over', width/2, height/2);
		text('Zombies Killed:' + zombieKills, width/2, height/2+40);
	}
}

function checkRotation(p1,p2){

}

function playerObj(color, sz, speed, controls){
	this.x = random(width/2)
	this.y = random(height/2)
	this.linex;
	this.liney;
	this.speed = speed;
	this.swordSpeed = 0.10
	this.color = color;
	this.saveColor = color;
	this.d = sz;
	this.angle = 0;
	this.scalar = sz + 20;
	this.hit = false
	this.score = 100;
	this.gate = false;
	this.overlap = false;
	var angle;


	this.disp = function(){
			//move the player
			angleMode(DEGREES);
			angle = atan2(mouseY - this.y, mouseX - this.x);
			this.angle = angle;
			if( keyIsDown( controls[0] )){
				//up
				this.y -= this.speed
			}
			if( keyIsDown( controls[1] )){
				// right
				this.x += this.speed
			}
			if( keyIsDown( controls[2] )){
				//down
				this.y += this.speed
			}
			if( keyIsDown( controls[3] )){
			//left
			this.x -= this.speed
			}
			if( keyIsDown( controls[4] )){
				this.angle += this.swordSpeed;
			}
			if( keyIsDown( controls[5] )){
				this.angle -= this.swordSpeed;
			}

		//loop around the edges
		if(this.x < 0){
			this.x = width;
		}
		if(this.x > width){
			this.x = 0;
		}
		if(this.y < 0){
			this.y = height;
		}
		if (this.y > height){
			this.y = 0;
		}

		//draw the sword
		this.linex = this.x + cos(this.angle) * this.scalar;
		this.liney = this.y + sin(this.angle) * this.scalar;
		strokeWeight(1);
		stroke(this.color);
		line(this.x,this.y,this.linex,this.liney);

		//draw the player
		noStroke();
		fill(this.color);
		ellipse(this.x,this.y,this.d,this.d);

		//draw the score
		text(this.score,this.x-3,this.y-30)
	}

	this.collide = function(enemy){

		this.overlap = collideCircleCircle(this.x,this.y,this.d,enemy.x,enemy.y,enemy.d) // are we overlapping with the enemy?
		this.hit = collideLineCircle(this.x, this.y, this.linex, this.liney, enemy.x, enemy.y, enemy.d); //sword hitting the other player?

		if(this.overlap == false){ // prevent from scoreing id overlapped
			if(this.gate == false){ //debounce madness so only one point/hit gets added
				if(this.hit == true){
					enemy.score -= 20;
					this.gate = true;

					//quickly change the enemy's color to red for 100ms
					enemy.color = 'red'
					setTimeout(function(){
						enemy.color = enemy.saveColor;
					},100)
				}
			}
		}
		else{
			if(this.gate == false){ //debounce madness so only one point/hit gets added
				if(this.hit == true){
					enemy.score -= 20;
					this.gate = true;

					//quickly change the enemy's color to red for 100ms
					enemy.color = 'red'
					setTimeout(function(){
						enemy.color = enemy.saveColor;
					},100)
				}
			}
		}

		if(this.hit == false){
			this.gate = false;
		}
	}

}
function zombieObj(color, sz, speed, controls){
	this.x = random(width/2)
	this.y = random(height/2)
	this.linex;
	this.liney;
	this.speed = speed;
	this.swordSpeed = 5;
	this.color = color;
	this.saveColor = color;
	this.d = sz;
	this.angle = 0;
	this.scalar = sz + 20;
	this.hit = false
	this.score = 100;
	this.gate = false;
	this.overlap = false;
	this.targetx = p1.x;
	this.targety = p1.y;


	this.disp = function(){
		//move the zombie
		this.angle += this.swordSpeed;
		this.targetx = p1.x;
		this.targety = p1.y;
		if(this.targetx > this.x){
			this.x += this.speed;
		}
		if (this.targetx < this.x){
			this.x -= this.speed;
		}
		if(this.targetx == this.x){
			//Do not move in any x direction
		}
		if (this.targety < this.y){
			this.y -= this.speed;
		}
		if(this.targety > this.y){
			this.y += this.speed;
		}
		if(this.targety == this.y){
			//Do not move in any y direction
		}

		this.angle += this.swordSpeed;

		//loop around the edges
		if(this.x < 0){
			this.x = width;
		}
		if(this.x > width){
			this.x = 0;
		}
		if(this.y < 0){
			this.y = height;
		}
		if (this.y > height){
			this.y = 0;
		}
		//draw the sword
		this.linex = this.x + cos(this.angle) * this.scalar;
		this.liney = this.y + sin(this.angle) * this.scalar;
		strokeWeight(1);
		stroke(this.color);
		line(this.x,this.y,this.linex,this.liney);

		//draw the player
		noStroke();
		fill(this.color);
		ellipse(this.x,this.y,this.d,this.d);

		//draw the score
		text(this.score,this.x-3,this.y-30)
	}

	this.collide = function(enemy){

		this.overlap = collideCircleCircle(this.x,this.y,this.d,enemy.x,enemy.y,enemy.d) // are we overlapping with the enemy?
		this.hit = collideLineCircle(this.x, this.y, this.linex, this.liney, enemy.x, enemy.y, enemy.d); //sword hitting the other player?

		if(this.overlap == false){ // prevent from scoreing id overlapped
			if(this.gate == false){ //debounce madness so only one point/hit gets added
				if(this.hit == true){
					enemy.score -= 20;
					this.gate = true;

					//quickly change the enemy's color to red for 100ms
					enemy.color = 'red'
					setTimeout(function(){
						enemy.color = enemy.saveColor;
					},100)
				}
			}
		}
		else{
			enemy.score -= 1;
		}


		if(this.hit == false){
			this.gate = false;
		}
	}

} // close playerObj
