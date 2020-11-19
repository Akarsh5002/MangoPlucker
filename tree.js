class Tree{
    constructor(x,y,width,height){
        var opt={
            isStatic: true,
            density:1.2,
            restitution:0,
            friction:1,
        }
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.image = loadImage("tree.png");
        this.body = Bodies.rectangle(x,y,width,height,opt)
        World.add(world,this.body);
        
        
    }
    display(){
        var pos1 = this.body.position;
        push()
        translate(pos1.x,pos1.y)
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height);
        pop();
    }
};