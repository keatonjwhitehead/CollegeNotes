// number of elements
var n = 50

// your last four digit buffcard ID
// this number will be used as the random seed
// in theory, everyone's submission will look unique
var buffId = 673

// set the inital properties of each element
// you DO NOT need to modify this method
function initElement(element, i){

     element.id = i	// id
     element.x = random(400); // random x position
     element.y = random(400); // random y postion
     element.s = random(100);  // random size
     element.w = 1 + random(20); // random weight
     element.color1 = color(random(255),random(255),random(255)); // random color
     element.color2 = color(random(255),random(255),random(255)); // random color
}

// draw a given element
// you need to modify this method
function drawElement(element) {
     fill(element.color2)
     ellipse(element.x,element.y, (element.s + element.w),(element.s + element.w))
     fill(element.color1)
     ellipse(element.x, element.y, element.s, element.s)
     fill(255,255,255)
     text(element.id,element.x-5,element.y+5)

}

// update a given element
// you DO NOT need to modify this method
function updateElement(element) {

     // no update
}

//
// you do not need to modify the code below
//

// define an array to hold elements
var elements = [];

function setup() {

     // fix to the same random seed so that each time you run, you get
     // the same random numbers, which is easy for debugging
     randomSeed(buffId)

     // adjust the framerate to make the animation seem slower
     // (or faster by setting it to a larger value)
     frameRate(60)

     createCanvas(400, 400);

     for (var i = 0; i < n; i++) {

          // create a new element as a blank javascript object
          var newElement = {};

          // call to initial the element
          initElement(newElement, i);

          // add the element
          elements.push(newElement);
     }

}

// you do not need to chanege anything in draw()
function draw() {
     background(220);

     // iterate through each element in elements
     for (var i = 0; i < elements.length; i++) {

          // update the attributes of the i-th element
          updateElement(elements[i]);

          // call drawElement to draw the i-th element
          drawElement(elements[i]);

     }

}
