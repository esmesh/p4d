// Erika Mesh
// IGME-609
// Translate, rotate, color, and ellipse mode demo

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Make all the petals pink with
  // no outline
  fill(255,153,255);
  noStroke();
  
  // To make life easy, tell p5 that the center
  // of the canvas is point 0,0
  translate(200,200);
  
  // This is also going to be easier if we
  // draw all out petals starting from a
  // corner vs. the center
  ellipseMode(CORNER);
  
  // 8 petals, working our way around
  // The petals look angled b/c this rotates
  // around a corner, not the very end.
  ellipse(0,0,150,70);
  
  rotate(QUARTER_PI);
  ellipse(0,0,150,70);
  
  rotate(HALF_PI);
  ellipse(0,0,150,70);
  
  rotate(HALF_PI + QUARTER_PI);
  ellipse(0,0,150,70);
  
  rotate(PI);
  ellipse(0,0,150,70);
  
  rotate(PI + QUARTER_PI);
  ellipse(0,0,150,70);
  
  rotate(PI + HALF_PI);
  ellipse(0,0,150,70);
  
  rotate(PI + HALF_PI + QUARTER_PI);
  ellipse(0,0,150,70);
  
  // Back to no rotation
  rotate(0);
  
  // Draw a yellow center
  fill(255,255,0);
  ellipseMode(CENTER);
  ellipse(0,0,60);
  
  
}