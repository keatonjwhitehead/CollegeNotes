// Where is the circle
var x, y;

function setup() {
  createCanvas(400, 400);
  // Starts in the middle
  x = 0;
  y = 0;
}

function draw() {
  background(200);
  var color1 = color(random(0,255),random(0,255),random(0,255));
  // Draw a circle
  stroke(50);
  fill(color1);
  ellipse(x, y, x, y);

  // Jiggling randomly on the horizontal axis
  x = x + 1;
  // Moving up at a constant speed
  y = y + 1;

  // Reset to the bottom
  if (y >= height || x > width) {
    x = 0;
    y = 0;
  }
}
