class Plinko{
    constructor(x, y) {
        var options = {
            isStatic: true,
        }
        this.x = x;
        this.y = y;
        this.r = 10;
        this.body = Bodies.circle(x, y, 10, options);
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill(108, 6, 77);
        stroke(255, 255, 255);
        ellipse(pos.x, pos.y, this.r, this.r);
      }
}