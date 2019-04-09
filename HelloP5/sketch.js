/**
* Erika Mesh
* IGME-609: p5.js Demo
*/ 

/**
* setup : Initialization runs once; called automatically
* Summarize code that you add
*/
function setup() {
  createCanvas(400, 400);
}

/**
* draw : Loops forever; called automatically
* Summarize code that you add
*/
function draw() {
  // Draw HI
  line(20, 20, 20, 100);	// H left
  line(60, 20, 60, 100);	// H right
  line(20, 60, 60, 60);	    // H middle
  line(100, 20, 100, 100);  // I
  
  // Draw a smiley
  ellipse(200,200,200);     // Face
  ellipse(200,200,15); 	    // Nose
  ellipse(160,160,20);	    // Left eye
  ellipse(240,160,20);	    // Right eye
  arc(200,200,110,110,0,PI);// Mouth
}

 