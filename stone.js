class Stone{
    constructor(x,y){
        var options={
            isStatic: true,
            density:1.2,
            restitution:0,
            friction:1,
        }
        this.width = 40;
        this.height = 40;
        this.x = x;
        this.y = y;
        this.image = loadImage("stone.png");
        this.body = Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body);
    }
    display(){
        var yoyo = this.body.position;
        push()
        translate(yoyo.x,yoyo.y);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height)
        pop();

    }
}