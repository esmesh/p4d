var mySnowflake;
var myBall;

function setup() {
    createCanvas(400, 400);
    
    mySnowflake = new Snowflake();
    myBall = new Ball();
}

function draw() {
  background(0);
  
  mySnowflake.move();
  mySnowflake.display();
  
  myBall.move();
  myBall.display();
  
}


