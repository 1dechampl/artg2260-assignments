 	function setup() {
 	createCanvas(1000, 1000);

}

function draw() {
  fill(255, 0, 0);
  ellipse(200, 300, 60, 60);

  fill(0, 225, 219);
  bezier(50, 21, 200, 50, 200, 100, 21, 100);


  
  fill(213,192,238);
  rect(50, 150, 150, 50);

  fill(222, 178, 192);
  triangle(50, 250, 200, 250, 50, 300);
}