// IGME-609
// Erika Mesh
// Custom function calling yet another function

function setup() {
  
  // Making a temp var for the side length so I can change
  // the size of the square canvas in 1 place (because I'm
  // too lazy to type it twice on the next line)
  var side = 600;
  createCanvas(side, side);
}

function draw() {
  // Set a light gray for the background so it's clear the 
  // target has white rings
  background(220);
  
  // Make the rings 1/20th of the canvas wide by default
  var ringWidth = width/15;
  
  // Draw a target in the center with double the ring width
  target(width/2, height/2, ringWidth);

  // Draw smaller targets in each corner
  target(0, 0, ringWidth); // top left
  target(0, height, ringWidth); // bottom right
  target(width, 0, ringWidth); // top right
  target(width, height, ringWidth); // bottom right
  
}

// Draw a target centerd at the 
// provided x, y coordinates with rings
// of the provided ring width
function target(x, y, ringWidth) {
  
  // To avoid having to do extra math,
  // recenter the canvas to x, y
  push();
  translate(x, y);
  
  // Set the shades for the light and dark rings
  var light = 255;
  var dark = 0;
  
  // Draw the rings using overlapping rings starting
  // with 9* the ringwidth and working down
  ring(0, 0, dark, ringWidth*9);
  ring(0, 0, light, ringWidth*8);
  ring(0, 0, dark, ringWidth*7);
  ring(0, 0, light, ringWidth*6);
  ring(0, 0, dark, ringWidth*5);
  ring(0, 0, light, ringWidth*4);
  ring(0, 0, dark, ringWidth*3);
  ring(0, 0, light, ringWidth*2);
  ring(0, 0, dark, ringWidth*1);
  
  // Undo the translate
  pop();
}

// Draw a ring at the given x, y
// coordinates, filled with the given
// gray scale value, and with the given size
function ring(x, y, gray, size) {
  
  // Set the fill
	push();
  fill(gray);
  
  // Draw the ring
  ellipse(x, y, size);
  
  // Undo the fill
  pop();
}