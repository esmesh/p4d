// Erika Mesh
// IGME 609
// Custom function demo

function setup() {
  createCanvas(400, 400);
}

function draw() {
  fill(255, 0, 0);
  rect(10, 10, 30, 30);

  fill(0, 255, 0);
  rect(80, 80, 30, 30);

  fill(206, 20, 171);
  rect(350, 350, 30, 30);
  
//  filledRectangle(255, 0, 0, 10, 10);
//  filledRectangle(0, 255, 0, 80, 80);
//  filledRectangle(206, 20, 171, 350, 350);
  
  // If I just use fill and rect, the ellipse
  // shows with the last fill color.
  // If I use the custom function with push and
  // pop in it, the fill color set in the function
  // is undone before the ellipse draws
  ellipse(200,200,50);
}

function  filledRectangle ( red, green, blue, x, y ) 
{
  push();
  fill(red, green, blue);
  rect(x, y, 30, 30);
  pop();
}