// Where is the circle
var x, y;
var color1;
var color2;
var color3;
var count;

function setup() {
     createCanvas(720, 400);
     frameRate(3);
     // Starts in the middle
     x = width / 2;
     y = height / 2;
     color1 = color(random(0, 255),random(0, 255),random(0, 255));
     color2 = color(random(0, 255),random(0, 255),random(0, 255));
     color3 = color(random(0, 255),random(0, 255),random(0, 255));
     count = 0;
}

function draw() {
     background(200);

     // circle 1
     stroke(50);
     if(count % 7){
          color1 = color(random(0, 255),random(0, 255),random(0, 255));
     }
     fill(color1);
     ellipse(x+50, y, 50, 50);

     //circle 2
     stroke(50);
     if(count % 4){
          color2 = color(random(0, 255),random(0, 255),random(0, 255));
     }
     fill(color2);
     ellipse(x-50, y,50, 50);

     //circle 3
     stroke(50);
     if(count % 2){
          color3 = color(random(0, 255),random(0, 255),random(0, 255));
     }
     fill(color3);
     ellipse(x, y,50, 50);

     count++;
}
