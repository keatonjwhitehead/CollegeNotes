function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  //Color Definitons
 		var blue = color(10,150,255);
 		var white = color(255,255,255);
 		var black = color(0,0,0);

  //Body
  	fill(black);
  	rect(50, 50, 450, 450, 200, 200, 200, 200);

  //Star
  	var star = '*';
  	textSize(50);
  	fill(blue);
  	noStroke();
  	text(star,270,185);

  //Temperature
  	var temp = '72';
  	textSize(100);
  	fill(white);
  	text(temp,220,310);

  //ecobee
  	var temp = 'ecobee';
  	textSize(25);
  	fill(white);
  	text(temp,235,450);

  //Percent
  	var temp = '35%';
  	textSize(15);
  	fill(white);
  	text(temp,268,225);

  //Temperature dots
  fill(blue);
  	noStroke();
  	ellipse(400,245,7,7);
  	ellipse(400,235,6,6);
  	ellipse(400,225,6,6);
  	ellipse(400,215,5,5);
  	ellipse(400,205,5,5);
  	ellipse(400,195,4,4);
  	ellipse(400,185,4,4);
  	ellipse(400,175,3,3);
  	ellipse(400,165,3,3);
  	ellipse(400,155,2,2);

  fill(white);
  	ellipse(400,295,6,6);
  	ellipse(400,305,6,6);
  	ellipse(400,315,5,5);
  	ellipse(400,325,5,5);
  	ellipse(400,335,4,4);
  	ellipse(400,345,4,4);
  	ellipse(400,355,3,3);
  	ellipse(400,365,3,3);
  	ellipse(400,375,2,2);

  //Temperature adjustment number + circle
  	fill(black);
  	stroke(white);
  	ellipse(400,270,35,35);

  var temp = '72';
  	textSize(15);
  	fill(blue);
  	noStroke();
  	text(temp,392,275);

  //Buttons
  	stroke(white);
  	line(210,390,230,390);
  	line(210,400,230,400);
 	  line(210,395,230,395);

  	fill(black);
  	stroke(white);
  	ellipse(280.5,395,10,10);
  	line(280,382,280,385);
  	line(280,405,280,408);

  	line(267,394,270,394);
  	line(293,394,290,394);

  	line(287,402,290,405);
  	line(270,386,273,389);

  	line(287,389,290,386);
  	line(270,405,273,402);

  	line(338,390,330,390);
  	line(338,400,330,400);
 	  line(338,395,330,395);
  	ellipse(348,395,15,15);
  	ellipse(348,395,5,5);
}
