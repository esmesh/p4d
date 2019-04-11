function setup() {
  createCanvas(400, 400);
}

function draw() {
  
  // Blue fill and no stroke
  push();
  noStroke();
  fill(51,51,255,200);

  // Ellipse
  ellipse(200,200,60);
  
  
  // White stroke (all outlines/lines)
  stroke(200);
  strokeWeight(5);
  rect(90,100,50,12);
  
  
  pop();
  
  // no fill
//  noFill();
  

  // Draw more stuff with default colors
  //stroke(0);
 // strokeWeight(1);
  line(5,5,100,100);
  ellipse(300,300,50,30);
  
}