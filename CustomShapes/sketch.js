// Erin Cascioli

// Day 3 Demo 

// Arcs, Custom shapes with begin and end shape, HSB color



// This will make sense later!  

// For now, it's a way to hold the value 0

//   that I will use in my code to change colors

var hueVal = 0;




function setup() 
{
 
  createCanvas(400, 400);

} 




function draw() {
  // This is a sentence and it's getting really long
  //    and should be broken into two lines of comments.

  // This is a second comment.

  // Breaking your code into comments is good style

  //   and makes your code easier to read.

  // Adding line breaks helps the readability of your code, too.
 
  // Background color
  background(220);


  
// Play with an arc

  // Arcs use radians, not degrees

  // 0 degrees = 0 radians

  // 180 degrees = 3.14 radians, or PI radians
  // 360 degrees = 6.28 radians, or TWO_PI radians

  colorMode(RGB);

  fill(0, 255, 0);

  arc(200, 200, 300, 300, QUARTER_PI, HALF_PI + QUARTER_PI, PIE);



  // Custom Shape with HSB color instead of RGB color

  // HSB color uses:

  //    ranges from 0 - 360 for the first parameter (hue)

  //    ranges from 0 - 100 for the second parameter (saturation)

  //    ranges from 0 - 100 for the third parameter (brightness)

  colorMode(HSB);

  fill(hueVal, 100, 100);


  // Colors will change in a rainbow fashion

  // This will make sense later in the semester!  :)

  // This is commented out for now.  

  // Feel free to uncomment to see the color change.

  //hueVal++;

  //if(hueVal > 360)

  //{
  
  //  hueVal = 0;

  //}
  
  

  // Begin the shape

  beginShape();

  // Add as many vertices as you want

  vertex(30, 5);

  vertex(200, 20);

  vertex(65, 278);

  vertex(359, 0);

  vertex(284, 46);

  // End the shape with CLOSE parameter to fill the shape in

  //   and add a stroke from end to start vertices.

  endShape(CLOSE);

}
