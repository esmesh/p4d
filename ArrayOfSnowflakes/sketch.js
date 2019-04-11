var mySnowflakes = [];
var numSnowflakes;

function setup() {
    createCanvas(400, 400);
    
    numSnowflakes = 200;
    for(var i=0; i<numSnowflakes; i++)
    {
        mySnowflakes[i] = new Snowflake();
    }
}

function draw() {
  background(220);
  
    for(var i=0; i<numSnowflakes; i++)
    {
        mySnowflakes[i].move();
        mySnowflakes[i].display();
    }
}


