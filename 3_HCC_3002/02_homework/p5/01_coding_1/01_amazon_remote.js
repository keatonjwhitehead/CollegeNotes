function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  //Amazon remote
    var c1 = color(128,128,128);
    fill(c1);
    noStroke();
    rect(30, 20, 120, 350, 30, 30, 50,50, 50);

  //Buttons
  //Navigation buttons
    var c2 = color(0,0,0);
    fill(c2);
    noStroke();
    ellipse(90,130,70,70);

    fill(c1);
    noStroke();
    ellipse(90,130,40,40);
  //Microphone
    fill(c2);
    noStroke();
    ellipse(90,32,5,10);
  //Microphone Button
    fill(c2);
    noStroke();
    ellipse(90,65,20,20);

    fill(c2);
    noStroke();
    ellipse(60,200,20,20);

    fill(c2);
    noStroke();
    ellipse(90,200,20,20);

  	fill(c2);
    noStroke();
    ellipse(120,200,20,20);

  	 fill(c2);
    noStroke();
    ellipse(60,230,20,20);

    fill(c2);
    noStroke();
    ellipse(90,230,20,20);

  	fill(c2);
    noStroke();
    ellipse(120,230,20,20);

  	var text1 = 'Amazon';
  	textSize(25);
  	text(text1,45,330);
}
