var bird;
var pipes = [];
var bg;
var points = 0;
var gameOn = 0;
var time;
var wingSound;
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
  createCanvas(window.innerWidth, window.innerHeight)
  bird = new Bird();
  background(255,255,255,0)
  noLoop()
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

