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

// location of the ball
var x = 200;
var y = 200;

// goal
new p5();
var x1 = random(400);	// Modify me
var y1 = random(400);	// Modify me
var r1 = random(30);	// Modify me

// changes in x, y
var dx = 0;
var dy = 0;

// boolean flag to indicate that whether the goal is reached
var isGoalReached = false;

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

	drawBall();

	drawMouseCursor();

	checkGoal();

	if (!isGoalReached) {
		update();
	}

	fill(150);
	textSize(30);
	textAlign(CENTER);
	text("Made by Keaton Whitehead", 200, 380);
}

function update() {

	x = x + dx
	y = y + dy

}

function checkGoal() {
	if (dist(x, y, x1, y1) <= r1 + 10) {
		isGoalReached = true
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

	else if(mouseY == 200){
		dy = 0
	}

	else{
		dy = 2 * (((mouseY - 200) / 200))
	}


	// add more logic for the y dimension


}
