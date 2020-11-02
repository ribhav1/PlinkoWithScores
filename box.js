class box{
    constructor(x, y, w, h, bool){
        var options = {
            isStatic: bool
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.w = w;
        this.h = h;
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        fill(120, 240, 205);
        translate(pos.x, pos.y);
        rect(0, 0, this.w, this.h);
        pop();
    }
}