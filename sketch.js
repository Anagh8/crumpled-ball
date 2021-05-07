
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(400,680,800,20)

dustbin = new Dustbin(700,650,200,20)
dustbinleft = new Dustbin(600,600,20,150)
dustbinright = new Dustbin(800,600,20,150)
paper = new Paper(100,500,60)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin.display()
  dustbinright.display()
  dustbinleft.display()
  paper.display()
  ground.display()
  drawSprites();
 

}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:40,y:-120})
	}
}

