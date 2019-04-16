var b1;
var b2;

function setup() {
    createCanvas(400, 400);

    b1 = new Button("Button 1", 50, 50, 100, 20);
    b2 = new Button("Button 2", 50, 150, 100, 20);

}

function draw() {
  b1.display();
  b2.display();
}

function doubleClicked()
{
    if(b1.isMouseInButton())
        {
            background(220);
            b1.drawText();
        }
    
    if(b2.isMouseInButton())
        {
            background(220);
            b2.drawText();
        }
}


