class Block{

    constructor(x, y) {

        var options = {
            isStatic: false,
            restitution : 0.1,
            friction : 0.02,
            density : 0.001
        }
        this.body = Bodies.rectangle(x, y,60,60, options);
        this.width = 60;
        this.height = 60;
        World.add(world, this.body);

    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push()
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(5);
        stroke(0)
        rectMode(CENTER);
        rect(0,0, this.width, this.height);
        pop();
    }
}