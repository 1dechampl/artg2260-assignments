function setup() {
	createCanvas(600, 400);
}

function draw() {
	 var bg = map(mouseX, 0, width, 255, 0);
	background(bg);
	strokeWeight(4);
	stroke(255)

	for (var x = 0; x <= width; x += 50) {
		for (var y = 0; y <= width; y += 50) {
	fill(0, random(255), random(255));
	rect(x, y, 25, 25);
        }
    }
}
	
	
