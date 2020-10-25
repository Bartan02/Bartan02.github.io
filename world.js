var bird;
var pipes = [];
var bg;
var prepoints = 0;
var points = 0;
var gameOn = 0;
var wingSound;
var pointSound;
var hitSound;
function sound(src) {
        this.sound = document.createElement("audio");
        this.sound.src = src;
        this.sound.setAttribute("preload", "auto");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        document.body.appendChild(this.sound);
        this.play = function(){
          this.sound.play();
        }
        this.stop = function(){
          this.sound.pause();
        }
}
function setup() {
    wingSound = new sound("wing.mp3");
    pointSound = new sound("point.mp3");
    hitSound = new sound("hit.mp3");
    createCanvas(window.innerWidth, window.innerHeight)
    bird = new Bird();
    background(255,255,255,0)
    pixelDensity(1);
    noLoop()
}
function draw() {
    if(gameOn==1){
    clear();
    if (frameCount % 150 == 0) {
        pipes.push(new Pipe());
    }
    for (var pipe of pipes) {
        pipe.show();
        pipe.update();
        if (bird.touches(pipe)) {
	          hitSound.play();
            noLoop()
            gameOn=0;
            if(prepoints != 0){
              points++;
              document.getElementById("wynik").innerText = points;
              prepoints=0;
            }
	          theEnd();
        }
      }
      bird.show();
      bird.update();
      }
}

var addPoint = function(){
  pointSound.play();
  prepoints++;
  if(prepoints==17){
    points++;
    document.getElementById("wynik").innerText = points;
    prepoints=0;
  }
}

function mousePressed() {
	if(gameOn==1){
    	bird.fly();
    	wingSound.play();
	}
}

function keyPressed() {
    if(gameOn==1){
    if (key == ' ') {
        bird.fly();
	    wingSound.play();
    }
    }
}

