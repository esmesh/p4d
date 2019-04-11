// IGME-609
// Erika Mesh
// Conditionals Demo (+Random)

// Variable to hold the ball's X position
//   - using variables to hold position data 
//   (like X and Y positions) are good for animation
// This variable holds the rolling ball's X position
var ballXPosition;

// Variables to hold information about randomly placed ellipses
var randomX;
var randomY;

// p5.js setup
function setup() {

  createCanvas(400, 400);

  // Initialize ball's animation variable with value 0
  ballXPosition = 0;

  // Draw/Clear the background once at start of program
  background(0, 0, 0);

  // Generate a new value for the variables randomX and randomY  
  randomX = random(0, width);
  randomY = random(0, height);
}

// p5.js animation loop main function
function draw() {
  changeBackground();
  //animatedBall();

  randomEllipse();
}

// --------------------------------------------
// Changing background example
// --------------------------------------------
function changeBackground() {
  // Change the background color depending
  //   on mouse position.

  // IF mouse is in left side of window, blue background
  if (mouseX < width / 2) {
    background(0, 0, 255);
  }

  // IF mouse is in right side of window, red background
  if (mouseX > width / 2) {
    background(255, 0, 0);
  }

  // IF more than 2 seconds have passed, 
  //   draw an ellipse at the mouse's position.
  if (frameCount > 180) {
    ellipse(mouseX, mouseY, 50, 50);
    console.log(frameCount);
  }
}

// --------------------------------------------
// Animated ball example
// --------------------------------------------
function animatedBall() {

  // Clear the background each frame
  // background(redValue, greenValue, blueValue);
  background(0, 0, 255);

  // Draw the ball
  ellipse(ballXPosition, 50, 20, 20);

  // Move the ball by 1 pixel to the right every frame
  ballXPosition = ballXPosition + 5;

  // You could also do this to add 1 pixel to the ball's X position:
  // This line of code has the same result as the previous line
  //ballXPosition++;

  // Log the position to the console window for debugging
  console.log(ballXPosition);

  // Wrap the ball to the left when it reaches the right side of the window
  if (ballXPosition > width) {
    ballXPosition = 0;
  }
}

// --------------------------------------------
// Randomly colored and placed ellipses example
// --------------------------------------------
function randomEllipse() {

  if (keyIsPressed && key == 'e') {
    // Generate a new value for the variables randomX and randomY  
    randomX = random(0, width);
    randomY = random(0, height);
  }
  // Generate a new random red channel value
  redValue = random(0, 255);
  fill(redValue, 255, 255);

  // Draw an ellipse, positioned at the randomly
  //   generated location. 
  ellipse(randomX, randomY, 30, 30);
}
