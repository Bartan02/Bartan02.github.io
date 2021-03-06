var img;
function preload() {
  img = loadImage('http://bartan02.github.io/ptak.png');
}
class Bird {
    constructor() {
        this.width = 50;
        this.height = 50;
        this.x = width/2;
        this.y = height/2;
        this.gravity = 0.75;
        this.jump = 16
        this.velocity = 0;
    }

    show() {
        image(img, this.x-25, this.y-25, this.width, this.height);
    }

    fly() {
        this.velocity =- this.jump;
    }

    touches(pipe) {
        if (collideRectCircle(pipe.x, 0, pipe.width, height - pipe.height, this.x, this.y, this.width)) {
            return true;
        }
        if (collideRectCircle(pipe.x, pipe.y+pipe.gap, pipe.width, pipe.height, this.x, this.y, this.width)) {
            return true;
        }
        if (collideRectCircle((pipe.x)+50, pipe.y, (pipe.width)/1000, pipe.gap, this.x, this.y, this.width)) {
            addPoint();
            return false;
        }
        return false;
    }

    update() {
        this.velocity += this.gravity;
        this.y += this.velocity;
        if (this.y > height) {
            this.y = height
            this.velocity = 0
		hitSound.play();
		noLoop() 
		theEnd();
		gameOn=0;
        }
        if (this.y < 0) {
            this.y = 0
            this.velocity = 0
        }
    }
}
