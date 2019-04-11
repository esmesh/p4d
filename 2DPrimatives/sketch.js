function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(220);
  
  // Line:  https://p5js.org/reference/#/p5/line
  line(5, 5, 30, 30);
  
	// Point:  https://p5js.org/reference/#/p5/point
  point(40,15);
  point(50,15);
  point(60,15);
  
	// Rectangle:  https://p5js.org/reference/#/p5/rect
  rect(70,5,40,20);

  // Ellipse:  https://p5js.org/reference/#/p5/ellipse
  ellipse(60,60,25,60);
  ellipse(100,60,25); // an ellipse with width only is a circle
  
	// Triangle:  https://p5js.org/reference/#/p5/triangle
  triangle(100,80,75,150,150,125);
  
	// Quad:  https://p5js.org/reference/#/p5/quad
	quad(10,160,145,170,179,190,20,195);
}