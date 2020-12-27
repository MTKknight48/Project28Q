
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree;
var treeimg;
var boy;
var boyimg;
function preload()
{
	treeimg=loadImage("images/tree.png");
	boyimg=loadImage("images/boy.png");
}

function setup() {
	createCanvas(1200, 700);

tree = createSprite(800,365,20,20);
tree.addImage(treeimg);
tree.scale= 0.5;

boy = createSprite(200,590,20,20);
boy.addImage(boyimg);
boy.scale= 0.15;


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 stone1 = new Stone(120,500);
	 ground1 = new Ground(600,680,1200,20);
	 mango1 = new Mango(800,400);
	 elastic1 = new Chain(stone1.body,{x:130,y:510});
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  strokeWeight(4);
  drawSprites();
 
  stone1.display();
  ground1.display();
  mango1.display();
  elastic1.display();
 
}



