class Tree {
    constructor (x,y,width,height){
        this.x = x
        this.y = y
        this.width = width 
        this.height = height

        var options = {
            isStatic : true
        };
        this.image = loadImage("assets/tree.png")
        this.body = Bodies.rectangle(x, y, width, height, options);
        World. add (world , this.body )
    };

    display(){

        var pos = this.body.position
        var angle = this.body.angle

        push ();
        translate(pos.x,pos.y)
        rotate (angle)
        imageMode(CENTER)
        fill("green")
        image(this.image,0,0, this.width,this.height)
        pop ();
    };

}