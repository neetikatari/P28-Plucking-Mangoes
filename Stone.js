class Stone {
    constructor (x,y){
        var options ={
            isStatic : false,
            restitution :0,
            friction :1,
            density:1.2
        }
        this.x=x
        this.y=y
        this.width =40
        this.height=40
        this.image =loadImage("assets/stone.png")
        this.body = Bodies.rectangle(this.x, this.y, this.width,this.height, options)
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle

        push ();
        translate(pos.x,pos.y)
        rotate (angle)
        imageMode(CENTER)
        image(this.image,0,0,this.width, this.height)
        pop ();
    };

}