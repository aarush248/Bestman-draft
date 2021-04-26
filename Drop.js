class Drop{
    constructor(x, y){
        var options={
            restitution:0.8,
            density:0.04,
            friction:1
          }
        this.body=Bodies.circle(x, y, 5, options)
        //this.radius=5;
        World.add(world, this.body)
    }
    update(){
        if(this.body.position.y>height)
        Matter.Body.setPosition(this.body, {x:random(0, 400), y:random(0, 400)})
    }
    display(){
        var pos = this.body.position
        var ang = this.body.angle
        push()
        translate(pos.x, pos.y)
        rotate(ang)
        ellipseMode(RADIUS)
        fill("blue")
        ellipse(0, 0, this.radius, this.radius)
        pop()
          }
}