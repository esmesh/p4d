var singleSnowflake = {
  // define properties as "label: value"
  // seperated by commas
	size: 10,
	x: 55,
	y: 20,
	speed: 2,
  
  // Methods are next
  //  methodName: function(){
        // code inside function
  //  },

  display: function(){
    ellipse(this.x, this.y, this.size);
  },
  
  move: function(){
    this.y = this.y + this.speed;
    if(this.y > height)
    {
      this.y = 0;
    }
  }
  
};

var anotherSnowflake = {
  // define properties as "label: value"
  // seperated by commas
	size: 10,
	x: 55,
	y: 20,
	speed: 1,
  
  // Methods are next
  //  methodName: function(){
        // code inside function
  //  },

  display: function(){
    ellipse(this.x, this.y, this.size);
  },
  
  move: function(){
    this.y = this.y + this.speed;
    if(this.y > height)
    {
      this.y = 0;
    }
  }
  
};

function setup() {
  createCanvas(400, 400);
  
  singleSnowflake.size = 15;
  console.log(singleSnowflake.x);
  console.log(singleSnowflake.y);
  console.log(singleSnowflake.size);
  console.log(singleSnowflake.speed);
  console.log(singleSnowflake);
  console.log(anotherSnowflake);
}

function draw() {
  background(220);

  singleSnowflake.display();
  singleSnowflake.move();
  
  anotherSnowflake.display();
  anotherSnowflake.move();
  
  // This gives an error because we need to know which object contains move()
  // move();
  
}