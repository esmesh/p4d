// Variables declared here are global
// whether or not we intiialize here
var globalVar;
var globalVarTwo = 10;

function setup() {
  createCanvas(400, 400);
  globalVar = 0;
  
  // Local variables are accessible only 
  // within the block of code in which
  // they are declared
  var setupLocal = 5;
}

function draw() {
  background(220);
  //console.log(globalVar);
  globalVar++;
  rectMode(CENTER);
  rect(width/2, height/2, globalVar, globalVar);
  // this won't work 
  // console.log(setupLocal);
}