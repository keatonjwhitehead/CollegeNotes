var batteryLife;
var gray;
var black;
var green;
var yellow;
var red;
var blink;

function setup() {
  createCanvas(400, 400);
  batteryLife = 100;
  gray = color(128,128,128);
  black = color(0,0,0);
  green = color(0,200,0);
  yellow = color(200,200,0);
  red = color(200,0,0);
  frameRate(3);
  blink = false;
}

function draw() {
  background(220);

  //Amazon remote

    fill(gray);
    noStroke();
    rect(30, 20, 120, 350, 30, 30, 50,50, 50);

  //Buttons
  //Navigation buttons
    fill(black);
    noStroke();
    ellipse(90,130,70,70);

    fill(gray);
    noStroke();
    ellipse(90,130,40,40);

  //Microphone
    fill(black);
    noStroke();
    ellipse(90,32,5,10);

  //Microphone Button
    fill(black);
    noStroke();
    ellipse(90,65,20,20);

  //Six black buttons
    fill(black);
    noStroke();
    ellipse(60,200,20,20);

    fill(black);
    noStroke();
    ellipse(90,200,20,20);

  	fill(black);
    noStroke();
    ellipse(120,200,20,20);

  	 fill(black);
    noStroke();
    ellipse(60,230,20,20);

    fill(black);
    noStroke();
    ellipse(90,230,20,20);

  	fill(black);
    noStroke();
    ellipse(120,230,20,20);

  //Battery indicator
     if(batteryLife >= 66){
          fill(green);
          rect(65,270,40,20);
          rect(105,275,5,10);

     }
     else if(batteryLife >= 33){
          fill(yellow);
          rect(65,270,40,20);
          rect(105,275,5,10);

          fill(gray);
          rect(90,275,10,10);
     }

     else if(batteryLife >= 10){
          fill(red);
          rect(65,270,40,20);
          rect(105,275,5,10);

          fill(gray);
          rect(90,275,10,10);

          fill(gray);
          rect(80,275,10,10);
     }
  	 else if(batteryLife < -100){
            batteryLife = 100;
            }

     else {
          if(blink == true){
               blink = false;
          }
          else {
               fill(red);
               rect(65,270,40,20);
               rect(105,275,5,10);

               fill(gray);
               rect(90,275,10,10);

               fill(gray);
               rect(80,275,10,10);

               fill(gray);
               rect(70,275,10,10);
               blink = true;
          }
     }

     batteryLife = batteryLife - 10;

  //Amazon text
     fill(black);
  	var text1 = 'Amazon';
  	textSize(25);
  	text(text1,45,330);
}

function mousePressed(){
     redraw();
}
