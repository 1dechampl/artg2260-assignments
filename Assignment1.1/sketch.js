function setup() {
	createCanvas(600, 600);
	background(135,206,250);
	noStroke();

//Sun
	fill(255, 215, 0)
	ellipse(100, 100, 100, 100);

	fill(255, 215, 0, 127);
	ellipse(100, 100, 200, 200);

//Cloud
	fill(255);
	ellipse(500, 300, 50, 50);
	ellipse(520, 320, 50, 50);
	ellipse(470, 300, 50, 50);
	ellipse(485, 320, 50, 50);
	ellipse(455, 320, 50, 50);
//Land
	fill(34, 139, 34);
	bezier(-100, 600, 400, 400, 500, 500, 700, 600);

//Tree
	fill(139, 69, 19);
	rect(150, 430, 30, 100);

	fill(0,128,0);
	ellipse(150, 430, 50, 50);
	ellipse(170, 430, 50, 50);
	ellipse(150, 400, 50, 50);
	ellipse(130, 430, 50, 50);
	ellipse(190, 430, 50, 50);
	ellipse(175, 400, 50, 50);
	ellipse(160, 369, 50, 50);
	ellipse(115, 470, 50, 50);
	ellipse(200, 470, 50, 50);
	ellipse(150, 470, 50, 50);
	ellipse(170, 470, 50, 50);


//Pond
	fill(0, 0, 255)
	ellipse(300, 550, 200, 70);

	fill(30, 144, 255, 127);
	ellipse(300, 550, 150, 60);





	
}