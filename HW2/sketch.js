var rSky = 204;
var gSky = 229;
var bSky = 255;

var rStep = 2;
var gStep = 1;
var bStep = 0.5;

var flowerSize = 30;

var daySpeed = 1.5;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(rSky, gSky, bSky);
  sun();
  moon();
  flower(width/10,10*height/12);
  flower(2*width/10,8*height/12);
  flower(3*width/10,9*height/12);
  flower(4*width/10,7*height/12);
  flower(5*width/10,10*height/12);
  flower(6*width/10,9*height/12);
  flower(7*width/10,7*height/12);
  flower(8*width/10,8*height/12);
  flower(9*width/10,10*height/12);
  butterfly();
  
  rSky -= rStep;
  gSky -= gStep;
  bSky -= bStep;
}

function sun()
{
  push();
  noStroke();
  fill(255, 255, 0);
  ellipse(80,(frameCount/daySpeed)+40, 60,60);
  pop();
}

function moon()
{
  push();
  noStroke();
  var moonY = height - frameCount/daySpeed;
  fill(255);
  ellipse(width-100,moonY, 60,60);
  fill(rSky, gSky, bSky);
  ellipse(width-80,moonY, 60,60);
  pop();
}

function flower(x, y)
{
  // Draw a stem to the ground
  push();
  stroke(0, 153, 0);
  strokeWeight(5);
  line(x, y, x, height);
  pop();
  
  push();
  // Make all the petals pink with
  // no outline
  fill(255,153,255);
  noStroke();
  
  // To make life easy, tell p5 that the center
  // of the canvas is point 0,0
  translate(x,y);
  
  // This is also going to be easier if we
  // draw all out petals starting from a
  // corner vs. the center
  ellipseMode(CORNER);
  
  // 8 petals, working our way around
  // The petals look angled b/c this rotates
  // around a corner, not the very end.
  ellipse(0,0,flowerSize,flowerSize/2);
  
  rotate(QUARTER_PI);
  ellipse(0,0,flowerSize,flowerSize/2);
  
  rotate(HALF_PI);
  ellipse(0,0,flowerSize,flowerSize/2);
  
  rotate(HALF_PI + QUARTER_PI);
  ellipse(0,0,flowerSize,flowerSize/2);
  
  rotate(PI);
  ellipse(0,0,flowerSize,flowerSize/2);
  
  rotate(PI + QUARTER_PI);
  ellipse(0,0,flowerSize,flowerSize/2);
  
  rotate(PI + HALF_PI);
  ellipse(0,0,flowerSize,flowerSize/2);
  
  rotate(PI + HALF_PI + QUARTER_PI);
  ellipse(0,0,flowerSize,flowerSize/2);
  
  // Back to no rotation or translation
  pop();
  
  // Draw a yellow center
  push();
  noStroke();
  fill(255,255,0);
  ellipseMode(CENTER);
  ellipse(x,y,flowerSize/3);
  pop();
  
}

function butterfly()
{
  push();
  translate(mouseX, mouseY);
  noStroke();
  
  var bugHeight = 7*flowerSize/8;
  var bugWidth = flowerSize/4;
  
  // Left wing
  fill(0, 204, 204);
  bezier(
    0, -bugHeight/2+5,
    -4*bugWidth, -2*bugHeight,
    -4*bugWidth, 2*bugHeight,
    0, bugHeight/2-5);
  
  //Right wing
  bezier(
    0, -bugHeight/2+5,
    4*bugWidth, -2*bugHeight,
    4*bugWidth, 2*bugHeight,
    0, bugHeight/2-5);
  
  // Center
  fill(255, 128, 0);
  ellipse(0, 0, bugWidth, bugHeight);
  
  pop();
  
}