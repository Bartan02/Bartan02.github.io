var bird;
var pipes = [];
var bg;
var points = 0;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
  bird = new Bird();
  background(255,255,255,0)
}

function draw() {
    if(gameOn==1){
    clear();
    if (frameCount % 150 == 0) {
        pipes.push(new Pipe());
    }
	if (frameCount > 450){
	if((frameCount - 191) % 150 == 0)
		points++;
		document.getElementById("wynik").innerText = points;
	}
    for (var pipe of pipes) {
        pipe.show();
        pipe.update();
        if (bird.touches(pipe)) {
            noLoop()
		console.log("GAME OVER");
        }
    }
    bird.show();
    bird.update();
    }
}

function mousePressed() {
    bird.fly();
}

function keyPressed() {
    if (key == ' ') {
        bird.fly();
    }
}
