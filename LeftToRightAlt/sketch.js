function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  //Negative Scale values invert which "side" of the shape a point is on
  //Setting scale to -1.0 in X reverses all of the x points
  //while keeping them the same relative size
	scale(-1.0, 1.0)
  
  //Starting at the far end of the canvas (which is now -width)
  //Incrementing by frameCount brings us closer to 0, moving the shapes the other direction
	ellipse(-width + frameCount, 30, 30, 30)
	rect(-width + frameCount, 60, 30, 30)	
}