// IGME-609: Arrays in-class demo
// Erika Mesh

// X and Y variables for each moving snowflake
var snowflake1X;
var snowflake1Y;
var snowflake2X;
var snowflake2Y;

function setup() {  
  createCanvas(400, 400);
  snowflake1X = 50;
  snowflake1Y = 0;
  snowflake2X = 100;
  snowflake2Y = 0;
  
  var groceries = ["rice", "chicken", "lettuce"];	
  var newArray = [];
  var nonArrayVar = "text";
  
  console.log(nonArrayVar);
  console.log(groceries[2]);
  console.log(groceries[1]);
  console.log(groceries[0]);

  var daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var currentMonth = 2;
  var randomMonth = int(random(11));
  console.log(randomMonth+" has "+daysInMonths[randomMonth]+" days");

  
}

function draw() {
  // Clear background for smooth animation 
  background(220);

  // Increase Y position of each snowflake
  snowflake1Y++;
  snowflake2Y++; 
 
  // Wrap them to the top when they hit canvas bottom
  if(snowflake1Y > height)  {
    snowflake1Y = 0;  
  }
  if(snowflake2Y > height)  {
    snowflake2Y = 0;
  }
  
  // Draw snowflakes
  ellipse(snowflake1X, snowflake1Y, 10, 10);
  ellipse(snowflake2X, snowflake2Y, 10, 10);
}
