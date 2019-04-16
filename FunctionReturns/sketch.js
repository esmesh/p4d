var canvasSize = 400;
var rowsCols = 3;
var numButtons = rowsCols*rowsCols;
var offset = canvasSize/(2*rowsCols);
var buttonSize = canvasSize/rowsCols;

function setup() {
  createCanvas(canvasSize, canvasSize);

}

function draw() {
  background(200);
  for(var n=0; n<numButtons; n++)
  {
    if(isMouseInButton(n))
    {
	    drawButton(n, 255, 0, 0, 0);
    }
    else
    {
  	  drawButton(n, 0, 255, 0, 0);
    }
  }
}

// Draws a button 1/4th the size of the canvas 
// centered at x & y using the given color
// but always with a black boundary
function drawButton(n, r, g, b)
{
  push();
  rectMode(CENTER);
  fill(r, g, b);
  stroke(0);
  strokeWeight(3);
  rect(getButtonX(n), getButtonY(n), buttonSize, buttonSize);
  pop();
}

// Get the X coordinate for the button
function getButtonX(n)
{
  // The column we're in is the remainder of
  // dividing n by the number of buttons in
  // a row
  return (n % rowsCols)*buttonSize + offset;
}

// Get the Y coordinate for the button
function getButtonY(n)
{
  // The row we're in is n divided by the number 
  // of buttons in a column (rounded down)
  return floor(n / rowsCols)*buttonSize + offset;
}

// Determine if the mouse is in a given
// button
function isMouseInButton(n)
{
  var result = true;
  
  // Check the top edge
  result = result && mouseY >= (getButtonY(n) - offset);
  
  // Check the bottom edge
  result = result && mouseY <= (getButtonY(n) + offset);
  
  // Check the left side
  result = result && mouseX >= (getButtonX(n) - offset);
  
  // Check the right side
  result = result && mouseX <= (getButtonX(n) + offset);
  
  // Return the combined result
  return result;
}