class particle{
    constructor(x, y, d){
        var options = {
            restitution: 0.5,
            friction: 0
        }
        this.body = Bodies.circle(x, y, d, options);
        this.d = d;
        World.add(world, this.body);

        this.isOffScreen = function(){
            var pos = this.body.position;
            return (pos.y > height);
        }
        this.removeFromWorld = function(){
            World.remove(world, this.body);
        }
    }

    display(){
        var pos = this.body.position;
        push();
        fill(0, 255, 140);
        translate(pos.x, pos.y);
        ellipse(0, 0, this.d * 2);
        pop();
    }
}