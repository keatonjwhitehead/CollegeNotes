// Where is the circle
var x, y;
var count;
function setup() {
     createCanvas(720, 400);
     frameRate(1);
     // Starts in the middle
     x = width / 2;
     y = height / 2;
     count = 0;
}

function draw() {
     var val1 = 0;
     var val2 = 0;
     var val3 = 0;
     var color1;
     background(200);
     if(count == 0){
          color1 = color(0,0,200);
          count++;
     }
     else if(count == 1){
          color1 = color(255,205,0);
          count++;
     }
     else if(count == 2){
          color1 = color(255,255,0);
          count++;
     }
     else if(count == 3){
          color1 = color(200,0,0);
          count++;
     }
     else if(count == 4){
          color1 = color(0,200,0);
          count = 0;
     }
     //var color1 = color(val1, val2, val3);
     // circle 1
     stroke(50);
     fill(color1);
     ellipse(x+50, y, 50, 50);

}
