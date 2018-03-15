var buttons = []

function setup() {
  createCanvas(600, 900);
}

function createButton(x, y, radius, type){
     var newButton = {}
     newButton.x = x;
     newButton.y = y;
     newButton.radius = radius;
     newButton.type = type;
     buttons.push(newButton); ``
}

function draw() {
  background(220);
  //Color Definitons
 		var blue = color(10,150,255);
 		var white = color(255,255,255);
 		var black = color(0,0,0);
  	var red = color(200,0,0);

   //Body
  	fill(black);
  	rect(170, 50, 250, 550, 50, 50, 100, 100);

  //Buttons
  	//3 lined button
      stroke(white);
      line(230,420,250,420);
      line(230,430,250,430);
      line(230,425,250,425);

 		//Power button
  		noStroke();
  		fill(red);
  		ellipse(210,95,25,25);
      fill(black);
      stroke(black);
      ellipse(210,95,10,10);
      line(209.5,82,209.5,85);
      line(209.5,105,209.5,108);
      line(196.5,94,199.5,94);
      line(222.5,94,219.5,94);
      line(216.5,102,219.5,105);
      line(199.5,86,202.5,89);
      line(216.5,89,219.5,86);
      line(199.5,105,202.5,102);

		//Settings
  		stroke(white);
      line(338,420,330,420);
      line(338,430,330,430);
      line(338,425,330,425);
      ellipse(348,425,15,15);
      ellipse(348,425,5,5);


  //Channel
  	var channel = '52';
  	textSize(100);
  	fill(white);
  	text(channel,245,310);

  //Channel
    //Channel dots
    fill(red);
      noStroke();
      ellipse(390,245,7,7);
      ellipse(390,235,6,6);
      ellipse(390,225,6,6);
      ellipse(390,215,5,5);
      ellipse(390,205,5,5);
      ellipse(390,195,4,4);
      ellipse(390,185,4,4);
      ellipse(390,175,3,3);
      ellipse(390,165,3,3);
      ellipse(390,155,2,2);

    fill(white);
      ellipse(390,295,6,6);
      ellipse(390,305,6,6);
      ellipse(390,315,5,5);
      ellipse(390,325,5,5);
      ellipse(390,335,4,4);
      ellipse(390,345,4,4);
      ellipse(390,355,3,3);
      ellipse(390,365,3,3);
      ellipse(390,375,2,2);

    //Channel adjustment number + circle
      fill(black);
      stroke(white);
      ellipse(390,270,35,35);

    //Small channel
      textSize(15);
      fill(red);
      noStroke();
      text(channel,382,275);

  //Volume
    //Volume dots
    fill(white);
      noStroke();
      ellipse(210,245,7,7);
      ellipse(210,235,6,6);
      ellipse(210,225,6,6);
      ellipse(210,215,5,5);
      ellipse(210,205,5,5);
      ellipse(210,195,4,4);
      ellipse(210,185,4,4);
      ellipse(210,175,3,3);
      ellipse(210,165,3,3);
      ellipse(210,155,2,2);

    fill(blue);
      ellipse(210,295,6,6);
      ellipse(210,305,6,6);
      ellipse(210,315,5,5);
      ellipse(210,325,5,5);
      ellipse(210,335,4,4);
      ellipse(210,345,4,4);
      ellipse(210,355,3,3);
      ellipse(210,365,3,3);
      ellipse(210,375,2,2);

    //Small volume
      textSize(15);
      fill(blue);
      noStroke();
      text('78',225,310);

  	//Volume Adjuster
  	//Channel adjustment number + circle
      fill(black);
      stroke(white);
      ellipse(210,270,35,35);

    //Small channel
      textSize(15);
      fill(blue);
      noStroke();
      text('78',202,275);

  //ecobee
  	var temp = 'Nozama';
  	textSize(25);
  	noStroke();
  	fill(red);
  	text(temp,245,550);

  //Percent
  	noStroke();
  	var temp = 'Battery:35%';
  	textSize(10);
  	fill(white);
  	text(temp,275,225);
}
