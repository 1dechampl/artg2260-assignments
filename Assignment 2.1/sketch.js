var c;
 
function setup() {
 	createCanvas(600, 600);
 	c = color(0);
}
 
function draw()
{
	
	noStroke();
	fill(200);
	rect(0, 0, width, 25);
	fill(0);
	text("Press the 'X, R, B, or G' key on your keyboard to change the color", 10, 15);
}
 
function mouseDragged() 
{ 
	strokeWeight(10);
	stroke(c);
	line(mouseX, mouseY, pmouseX, pmouseY);
}
 
function keyPressed()
{
	if(key == 'r' || key == 'R')
	{
		c = color(255, 0, 0);
	}

	if(key == 'x' || key == 'X')
	{
		c = color(0, 0, 0)
	}

	if(key == 'g' || key == 'G')
	{
		c = color(0, 255, 0)
	}

	if(key == 'b' || key == 'B')
	{
		c = color(0, 0, 255)
	}

	if(key == 'e' || key == 'E')
	{
		c = color(255, 255, 255) //White/Eraser
	}
}