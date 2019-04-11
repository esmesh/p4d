var bgColor;
var circleColor;
var circleX, circleY;
var circleSize;

// Setup by created a square canvas and initializing the background
// and circle attributes
function setup() {
  createCanvas(500, 500);
  
  bgColor = color(153, 102, 51);
  circleColor = color(0, 0, 175);
  circleX = width/2;
  circleY = height/2;
  circleSize = width/10;
}

// With each frame, repaint the background and
// draw a circle using the current color and location
// values
function draw() {
  background(bgColor);
  
  fill(circleColor);
  circle(circleX, circleY, circleSize);
}

// When the 'r' key is types, reset all colors
// and the circle location
function keyTyped()
{
  if(key == 'r')
  {
    bgColor = color(153, 102, 51);
    circleColor = color(0, 0, 175);
    circleX = width/2;
    circleY = height/2;
  }
}

// Returns true if the mouse is currently in the circle
function mouseInCircle()
{
  // Check if the mouse is currently within the circle
  // by making sure the distance from the mouse to the
  // center of the circle is less than the circleSize
  return dist(mouseX, mouseY, circleX, circleY) < circleSize;
}

// Event triggered if the mouse is currently
// being dragged (button down and moving)
function mouseDragged()
{
  // If the user is dragging with the left mouse button
  // in the circle, change the circle to white and
  // drag it with the mouse
  if(mouseButton == LEFT && mouseInCircle())
  {
    circleX = mouseX;
    circleY = mouseY;
    circleColor = color(255);
  }
  // If the user is dragging with the right mouse button
  // alter the background color based on the mouse
  // position
  else if(mouseButton == RIGHT)
  {
    bgColor = color(mouseX, mouseY, 0);
  }
}

// Event triggered when the mouse button is
// released
function mouseReleased()
{
  // If it was the left that was release, reset
  // the circle color
  if(mouseButton == LEFT)
  {
  	circleColor = color(0, 0, 175);
  }
}
