// Declare this as global so I can use it in setup AND draw
var canvasSize;

var xLocation;


function setup() {
  // I want a square canvas and am defining 1 variable to set that up front
  canvasSize = 300;
  
  // Start our image on the right
  xLocation = canvasSize;
  
  // Create the canvas using myy variable
  createCanvas(canvasSize, canvasSize);
}

function draw() {
  background(220);
  
  // Figure out where the center is (assuming canvas is square)
  var center = canvasSize / 2;
  
  var size = canvasSize * .60;
  
  ellipse(xLocation,center,size);
  
  
  // We can also use built in variables for common things
  // And do math as we pass parameters
  ellipse(xLocation,width/2,size/2);
  
  // Decrement our x position
//  xLocation = xLocation - 1;
  xLocation--;  // This does the same as line 34
}