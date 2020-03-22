let time;
let weight = 25;
let delta = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
	background(0);
  noFill();
	smooth();
	frameRate(60);

  time = 0;
	weight = 25;

}

function draw() {

	background(0,10)


  var x1 = width * noise(time + 15);
  var x2 = width * noise(time + 25);
  var x3 = width * noise(time + 35);
  var x4 = width * noise(time + 45);
  var y1 = height * noise(time + 55);
  var y2 = height * noise(time + 65);
  var y3 = height * noise(time + 75);
  var y4 = height * noise(time + 85);

	strokeWeight(abs(weight));

  bezier(x1, y1, x2, y2, x3, y3, x4, y4);

	if (delta === 1 || delta === -1){
		delta = 0;
	} else {
		delta = abs(delta) * 20
	}

	stroke(delta );




  time += 0.005;

}


function mouseWheel(event) {
  weight += event.delta;
	delta = event.delta;
	return false;
}
