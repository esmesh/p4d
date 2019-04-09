/**
* Yourfirstand Lastname
* IGME-609: Assignment Name, m/d/18
* Summarization of sketch activity
*/ 

/**
* setup : Initialization runs once; called automatically
* Summarize code that you add
*/
function setup() {
    //put setup code here
	createCanvas(500, 500);
	background(255);
}

/**
* draw : Loops forever; called automatically
* Summarize code that you add
*/
function draw() {
    //put drawing code here 
	line(20, 20, 400, 400);
	line(380, 20, 20, 400);
	line(200, 200, mouseX, mouseY);
}
 