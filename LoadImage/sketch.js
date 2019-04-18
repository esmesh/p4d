// Create a variable to hold the image
var img;

var x, y; // image location

// https://p5js.org/reference/#/p5/preload
function preload() {
    // Load the image
    img = loadImage('blue_horse.png');
}

function setup() {
    createCanvas(400, 400);
    
    // Set the image's initial position
    x = 0;
    y = height - height*.2;
    
    // We want to draw the image at 20% of the canvas width
    // 0 for the height tells p5 to match the height scaling
    // to the width (to maintain the same aspect ratio)
    img.resize(width * .2, 0); 

}

function draw() {
    background(220);
    
    // Draw the image
    image(img, x, y);
    
}

// When the mouse is dragged, move the image with it
function mouseDragged()
{
    x = mouseX;
    y = mouseY;
}