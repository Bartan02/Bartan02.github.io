var bird;
var pipes = [];
var bg;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight)
  bird = new Bird();
}

function draw() {
    clear();
    if (frameCount % 200 == 0) {
        pipes.push(new Pipe());
    }
    for (var pipe of pipes) {
        pipe.show();
        pipe.update();
        if (bird.touches(pipe)) {
            noLoop()
        }
    }
    bird.show();
    bird.update();
    background(255,255,255,0)
}

function mousePressed() {
    bird.fly();
}

function keyPressed() {
    if (key == ' ') {
        bird.fly();
    }
}