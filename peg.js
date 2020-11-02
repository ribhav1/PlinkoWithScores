class peg{
    constructor(x, y, d, bool){
        var options = {
            isStatic: bool,
            restitution: 0.5,
            friction: 0
        }
        this.body = Bodies.circle(x, y, d, options);
        this.d = d;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        push();
        fill(100, 255, 255);
        translate(pos.x, pos.y);
        ellipse(0, 0, this.d * 2);
        pop();
    }
}