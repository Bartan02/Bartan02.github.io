class Pipe {
    constructor() {
        this.width = 100;
        this.gap = 280
        this.height = height / random(1.5,12.5) + this.gap;
        this.x = width / 1;
        this.y = height - this.height;
    }
    show() {
        fill('#543515');
        rect(this.x, this.y+this.gap, this.width, this.height);
        fill('#543515');
        rect(this.x, 0, this.width, height - this.height);
    }
    update() {
        this.x -= 3;
    }
}

