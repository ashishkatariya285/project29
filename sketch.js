
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var world,engine;
var  bobobject,roofobject,rope1;
function preload()
{
	
}

function setup() {
	createCanvas(1200,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roofobject =new roof(500,200,700,20)
bobobject1= new bob(500,600,80);
bobobject2= new bob(420,600,80);
bobobject3= new bob(340,600,80);
bobobject4= new bob(580,600,80)
bobobject5= new bob(660,600,80);
rope1=new rope(bobobject1.body,{x:500,y:200})
rope2=new rope(bobobject2.body,{x:420,y:200})
rope3=new rope(bobobject3.body,{x:340,y:200})
rope4=new rope(bobobject4.body,{x:580,y:200})
rope5=new rope(bobobject5.body,{x:660,y:200})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roofobject.display();
  bobobject1.display();
  bobobject2.display();
  bobobject3.display();
  bobobject4.display();
  bobobject5.display();
  rope1.display();
  rope2.display();
  rope4.display();
  rope3.display();
  rope5.display();
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(bobobject1.body, {x: mouseX , y: mouseY});
}
function mouseReleased(){
  rope.fly();
}