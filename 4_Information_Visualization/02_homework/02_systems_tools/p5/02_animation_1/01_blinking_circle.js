// Where is the circle
var x, y;
var colorBool = false;
function setup() {
     createCanvas(720, 400);
     frameRate(5);
     // Starts in the middle
     x = width / 2;
     y = height / 2;
}

function draw() {
     background(200);
     var colorRed = color(255, 0,0);
     var colorWhite = color(255,255,255);

     if(colorBool == true){
          //Blinking Circle: Blinks red/white
          stroke(50);
          fill(colorRed);
          ellipse(x, y, 50, 50);
          colorBool = false;
     }
     else {
          stroke(50);
          fill(colorWhite);
          ellipse(x, y, 50,50);
          colorBool = true;
     }
}
