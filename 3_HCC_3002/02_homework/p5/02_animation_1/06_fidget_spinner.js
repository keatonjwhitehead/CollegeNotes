// Where is the circle
var x, y;
//rotation speed
var rotateSpeed;
//speed incrementor
var speedIncrease;

function setup() {
     createCanvas(400, 400);
     // Starts in the middle
     x = 0;
     y = 0;
     rotateSpeed = 0;
     speedIncrease = 0;
}

function draw() {
     background(100);
     var color1 = color(0,200,200);
     var color2 = color(200,0,0);
     var color3 = color(100);
     var color4 = color(200,200,200);
     // Draw a circle
     stroke(50);
     //Rotate the fidget spinner
     translate(100,80);
     rotate(rotateSpeed);
     fill(color3);
     ellipse(0,0,30,30);
     //Top berring
     //Drak Gray
          fill (color3);
          ellipse(0,-30,30,30);
          //Gray
          fill(color4);
          ellipse(0,-30,25,25);
          //Red
          fill(color2);
          ellipse(0,-30,22,22);

     //Left berring
          //Drak Gray
          fill (color3);
          ellipse(-26,15,30,30);
          //Gray
          fill(color4);
          ellipse(-26,15,25,25);
          //Red
          fill(color2);
          ellipse(-26,15,22,22);

     //Right berring
          //Drak Gray
          fill (color3);
          ellipse(26,15,30,30);
          //Gray
          fill(color4);
          ellipse(26,15,25,25);
          //Red
          fill(color2);
          ellipse(26,15,22,22);

     //Middle berring
          //Drak Gray
          fill (color3);
          ellipse(0,0,30,30);
          //Gray
          fill(color4);
          ellipse(0,0,25,25);
          //Red
          fill(color2);
          ellipse(0,0,22,22);

     speedIncrease = speedIncrease + .0001;
     rotateSpeed = rotateSpeed + speedIncrease;

}
