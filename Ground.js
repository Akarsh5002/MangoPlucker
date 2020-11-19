class Ground{
    constructor(x,y,width,height){
        var options = {
            isStatic: true,
            
            
              }
this.width = width;
this.height = height;
this.x = x;
this.y = y;

this.body = Bodies.rectangle(x,y,width,height,options);
World.add(world,this.body);
    }
display(){

    var net = this.body.position;
    
    
    strokeWeight(4);
    fill("red");
    rectMode(CENTER);
    rect(net.x,net.y,this.width,this.height);
    
    }
};