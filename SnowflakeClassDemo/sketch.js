var mySnowflake;
var mySnowflake2;
var mySnowflake3;
var mySnowflake4;

function setup() {
    createCanvas(400, 400);
    
    mySnowflake = new Snowflake();
    mySnowflake2 = new Snowflake();
    mySnowflake3 = new Snowflake();
    mySnowflake4 = new Snowflake();
  
    console.log(mySnowflake);
    console.log(mySnowflake2);
    console.log(mySnowflake3);
    console.log(mySnowflake4);

}

function draw() {
  background(220);
  
  mySnowflake.move();
  mySnowflake.display();
  
  mySnowflake2.move();
  mySnowflake2.display();
  
  mySnowflake3.move();
  mySnowflake3.display();
  
  mySnowflake4.move();
  mySnowflake4.display();
  
}


