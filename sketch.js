
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree,boy,ground,stone,mango,mango1,mango2,mango3,mango4,chain;

function preload()
{
	
}

function setup() {
	createCanvas(900, 700);




	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  mango = new Mango(750,380,30);
  mango1 = new Mango(754,300,30);
  mango2 = new Mango(687,250,30);
  mango3 = new Mango(750,190,30);
  mango4 = new Mango(640,360,30);
tree = new Tree(700,400,300,500);
boy = new Boy(145,540,200,400);
ground = new Ground(450,660,900,40);
stone = new Stone(90,450);
chain = new Chain(stone.body,{x:90,y:450});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");

 
  
  tree.display();
  boy.display();
ground.display();
stone.display();
mango.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
chain.display();

detectCollision(stone,mango);
detectCollision(stone,mango1);
detectCollision(stone,mango2);
detectCollision(stone,mango3);
detectCollision(stone,mango4);

fill("pink");
textSize(30);
text("PRESS SPACE TO RETRY",400,100);

  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  chain.fly();
}
function KeyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:160,y:500});
    chain.attach(stone.body);
  }
}
function detectCollision(lstone,lmango){
  stoneBodyPosition = lstone.body.position;
  mangoBodyPosition = lmango.body.position;

  var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance <= lmango.r+ lstone.r){
    Matter.Body.setStatic(lmango.body,false);
  }
}
