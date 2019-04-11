class Snowflake
{
    constructor()
    {
        // Create a new snowflake with a default
        // x, y, size, and speed
        this.x = random(width);
        this.y = random(height);
        this.size = random(10,20);
        this.speed = random(1,3);
        this.rotation = 0;
    }

    move()
    {
        // Move down based on the speed
        this.y = this.y + this.speed;
        
        // Wrap the snowflake back to the top of the canvas
        this.y %= height; // Divides y by the height and then sets y to the remainder
        
        // Rotate a bit
        this.rotation += 2;
        if(this.rotation >= 360)
            this.rotation = 0;
    }
    
    display()
    {
        push();
        angleMode(DEGREES);
        stroke(255, 255, 255, 75);
        
        translate(this.x, this.y);
        rotate(this.rotation);
        line(0, 0, -this.size, 0);
        line(0, 0, -this.size, -this.size);
        line(0, 0, 0, -this.size);
        line(0, 0, this.size, -this.size);
        line(0, 0, this.size, 0);
        line(0, 0, this.size, this.size);
        line(0, 0, 0, this.size);
        
        pop();
    }
}
