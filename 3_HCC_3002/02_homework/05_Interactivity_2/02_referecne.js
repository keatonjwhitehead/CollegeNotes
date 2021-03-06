

// your last four digit buffcard ID
// this number will be used as the random seed
// in theory, everyone's submission will look unique
var buffId = 9902
var friction = 0.97
function setup() {
	// fix to the same random seed so that each time you run, you get
	// the same random numbers, which is easy for debugging
	randomSeed(buffId)

	createCanvas(400, 400);
}

// goal
new p5();
//Parameters for all objects to keep them from spawning at 200,200 and near the border
     var rand1 = [random(50,150),random(250,350)];
     var rand2 = [random(50,150),random(250,350)];

     var rand3 = [random(50,150),random(250,350)];
     var rand4 = [random(50,150),random(250,350)];

     var rand5 = [random(50,150),random(250,350)];
     var rand6 = [random(50,150),random(250,350)];

     var rand7 = [random(50,150),random(250,350)];
     var rand8 = [random(50,150),random(250,350)];

     var rand9 = [random(50,150),random(250,350)];
     var rand10 = [random(50,150),random(250,350)];

//Initalizing all the objects locations
     // location of the ball
     var x = 200;
     var y = 200;
     //Goal location
     var x1 = random(rand1);	// Modify me
     var y1 = random(rand2);	// Modify me
     var r1 = random(30);	// Modify me
     var dx1 = 90;
     var dy1 = 270;
     //Bomb1 location
     var bx1 = random(rand3);	// Modify me
     var by1 = random(rand4);	// Modify me
     var br1 = random(30);	// Modify me
     var bdx1 = 90;
     var bdy1 = 270;
     //Bomb2 location
     var bx2 = random(rand5);	// Modify me
     var by2 = random(rand6);	// Modify me
     var br2 = random(30);	// Modify me
     var bdx2 = 90;
     var bdy2 = 270;
     //Bomb3 location
     var bx3 = random(rand7);	// Modify me
     var by3 = random(rand8);	// Modify me
     var br3 = random(30);	// Modify me
     var bdx3 = 90;
     var bdy3 = 270;
     //Bomb4 location
     var bx4 = random(rand9);	// Modify me
     var by4 = random(rand10);	// Modify me
     var br4 = random(30);	// Modify me
     var bdx4 = 90;
     var bdy4 = 270;


// changes in x, y
     var dx = 0;
     var dy = 0;

// boolean flag to indicate that whether the goal is reached
     var isGoalReached = false;

//boolean flag to pause and play the game
     var pauseGame = false;

//boolean flag to end the game if user hits a bomb
     var isBombReached = false;

// draw the ball
function drawBall() {
	fill(color(0, 255, 0));
	ellipse(x, y, 20, 20);
}

function drawGoal() {
	// add an if logic to change the color of the goal circle
	// depending on whether the goal has been reached

	if(isGoalReached == true){
		fill(color(55,200,55));
		ellipse(x1, y1, r1 * 2, r1 * 2);
	}
	else{
		ellipse(x1, y1, r1 * 2, r1 * 2);
	}

}

function drawBomb() {
	// add an if logic to change the color of the goal circle
	// depending on whether the goal has been reached

	if(isBombReached == true){
		fill(color(255,0,0));
		ellipse(bx1, by1, br1 * 2, br1 * 2);
	}
	else{
          fill(color(20,20,255));
		ellipse(bx1, by1, br1 * 2, br1 * 2);
	}

}
// draw the mouse cursor location
function drawMouseCursor() {
	fill(color(255, 0, 0))
	ellipse(mouseX, mouseY, 20, 20);
}

function draw() {
	background(220);

	line(200, 0, 200, 400);
	line(0, 200, 400, 200);
	drawGoal();
     drawBomb();
	drawBall();
	drawMouseCursor();
	checkGoal();

     if (!isGoalReached && !pauseGame) {
		update();
	}

	fill(150);
	textSize(30);
	textAlign(CENTER);
	text("Made by Keaton Whitehead", 200, 380);
}

function update() {
     //Logic to move ball
     x = x + dx
	y = y + dy
     //Logic to move Goal in a circle
     x1 = x1 + (sin(3*dy1));
     y1 = y1 + (sin(3*dx1));
     dx1 = dx1 + .01;
     dy1 = dy1 + .01;
}

function keyPressed(){
     if (keyCode == 32){
          pauseGame = !pauseGame;
     }
     if (keyCode == 82){
          x = 200;
          y = 200;
          isGoalReached = false;
     }
}

function checkGoal() {
	if (dist(x, y, x1, y1) <= r1 + 10) {
		isGoalReached = true;
	}
     if(dist(x,y,bx1,by1) <= br1 + 10){
          isBombReached = true;
     }
}

// When the user moves the mouse
function mouseMoved() {

	if (mouseX > 200) {
		// Modify this line such that dx depends on the distance from
		// the center; the further away from the center, the higher dx is.
		// 0 < dx < 2
		dx = 2 * (((mouseX - 200) / 200))

	}
	else if(mouseX == 200){
		dx = 0
	}
	else {
		// Modify this line such that dx depends on the distance from
		// the center; the further away from the center, the lower dx is.
		// -2 < dx < 0

		dx =  2 * (((mouseX - 200) / 200))
	}
	if(mouseY > 200){
		dy = 2 * (((mouseY - 200) / 200))
	}
     // add more logic for the y dimension
	else if(mouseY == 200){
		dy = 0
	}
	else{
		dy = 2 * (((mouseY - 200) / 200))
	}



}
