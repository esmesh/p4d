class Button
{
    // Constructors can also take parameters just like other
    // functions!
    constructor(label, x, y, w, h)
    {
        this.label = label;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }

    display()
    {
        push();
        fill(0, 0, 255);
        rect(this.x, this.y, this.w, this.h);
        pop();
    }
    
    // Class functions can also return values!
    isMouseInButton()
    {
        if(mouseX > this.x && mouseX < this.x+this.w
          && mouseY > this.y && mouseY < this.y+this.h)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
    
    // Do something extra
    drawText()
    {
        text(this.label+" double clicked!", 50, 200);
    }
}
