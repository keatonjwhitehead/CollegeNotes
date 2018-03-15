// number of elements
var n = 20
var increase = true;
// your last four digit buffcard ID
// this number will be used as the random seed
// in theory, everyone's submission will look unique
var buffId = 4374

// set the inital properties of each element
// you need to modify here
function initElement(element, i){

     element.s = random(30);		// MODIFY ME
     element.xi = 200	// current x position (intialized to center)
     element.yi = 200	// current y position (intialized to center)
     element.dx = 3*sin(2*PI/n*i)
     element.dy = 3*cos(2*PI/n*i)
     element.ds = 2;		// MODIFY ME
     element.color = {
          r: random(255),	// MODIFY ME
          g: random(255),	// MODIFY ME
          b: random(255)	// MODIFY ME
     }
}

// draw a given element
// you DO NOT need to modify here
function drawElement(element) {

     fill(color(element.color.r, element.color.g, element.color.b))
     ellipse(element.xi, element.yi, element.s, element.s)

}

// update a given element
// you need to modify how to update each element at each drawing cycle
function updateElement(element) {

     element.xi = element.xi + element.dx

     element.yi = element.yi + element.dy

     element.dx = 1.1 * element.dx  	// MODIFY ME

     element.dy = 1.1 * element.dy  	// MODIFY ME

     element.color.r = element.color.r 	  // MODIFY ME
     element.color.g = element.color.g 		// MODIFY ME
     element.color.b = element.color.b 		// MODIFY ME


     if (element.s >= 30) { // MODIFT ME
          element.s = element.s - element.ds
          increase = false

     }
     else if(element.s <= 0){
          element.s = element.s + element.ds
          increase = true
     }
     else{
          if(increase == true){
               element.s = element.s + element.ds
          }
          else{
               element.s = element.s - element.ds
          }
     }
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
     frameRate(10)

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
     // background(220);

     // iterate through each element in elements
     for (var i = 0; i < elements.length; i++) {

          // update the attributes of the i-th element
          updateElement(elements[i]);

          // call drawElement to draw the i-th element
          drawElement(elements[i]);

     }

}
