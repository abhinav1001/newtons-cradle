
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Body;
var engine,world;
function preload()
{
	
}

function setup() {
	createCanvas(1800, 700);


	engine = Engine.create();
	world = engine.world;
  
	//Create the Bodies Here.
	  ball1=new balls(1000,500);
    
    //Arod=new rod 
   ball2=new balls(1200,500);
   log=new logs(800,500,60,1200)
   
    //ball3=new balls()
	Engine.run(engine);
	
}


function draw() {
 // rectMode(CENTER);
  background(0);
  ball1.display();
  log.display();
  ball2.display();



  drawSprites();
 
}



