class Boy{
    constructor(x,y,width,height){
        var options={
            isStatic:true,
            restitution: 0,
        
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.image  = loadImage("boy.png");
        this.body = Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.body);
    }
    display(){
        var akarsh = this.body.position;
        push()
        translate(akarsh.x,akarsh.y)
        
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}