 	function setup() {
 	createCanvas(1000, 1000);

}

function draw() {
  //head
  ellipse(100, 100, 80, 80);
  	//eyes
  	ellipse(85, 90, 10, 10);
  	ellipse(115, 90, 10, 10);
  	//mouth
  	curve(85, 110, 87, 110, 115, 110, 125, 110);
  //body
  line(100, 140, 100, 300);
  //legs
  line(100, 300, 150, 400);
  line(100, 300, 50, 400);
  //arms
  line(100, 180, 30, 250);
  line(100, 180, 170, 95);
  //hands
  ellipse(170, 95, 20, 20);
  ellipse(30, 250, 20, 20);
  //feet
  ellipse(150, 400, 30, 10);
  ellipse(50, 400, 30, 10);
}