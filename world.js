var bird;
var pipes = [];
var bg;
var points = 0;
var gameOn = 0;
var time;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
  bird = new Bird();
  background(255,255,255,0)
}

function draw() {
    time = frameCount;
    if(gameOn==1){
    clear();
    if (time % 150 == 0) {
        pipes.push(new Pipe());
    }
	if (time > 450){
	if((time - 191) % 150 == 0)
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
    if(gameOn==1){
	loop()
	}
	if(gameOn==0){
    	noLoop()
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
