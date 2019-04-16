class Ball
{
    constructor()
    {
        // Create a new ball with a default
        // x, y, size, and speed
        this.x = random(width);
        this.y = random(height);
        this.size = random(15,25);
        this.speed = 2;
    }

    move()
    {
        // Move sideways based on the speed
        this.x = this.x + this.speed;
        
        // Wrap the back to the top of the canvas
        this.x %= width; 
    }
    
    display()
    {
        push();
        // Make our ball red
        fill(255, 0, 0, 100);
        noStroke();
        ellipse(this.x, this.y, this.size, this.size);
        pop();
    }
}
