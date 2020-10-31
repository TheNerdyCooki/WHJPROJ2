
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	roof1 = new roof(440,200, 400, 30);

	//bob3 = new bob(370, 400, 30)
	bob1 = new bob(400, 400, 30)
	bob2 = new bob(430, 400, 30)
	bob3 = new bob(460, 400, 30)
	bob4 = new bob(490, 400, 30)
	bob5 = new bob(520, 400, 30)

	rope1 = new chain(bob1.body, roof1.body, -60, 0)
	rope2 = new chain(bob2.body, roof1.body, -30, 0)
	rope3 = new chain(bob3.body, roof1.body, 0, 0)
	rope4 = new chain(bob4.body, roof1.body, 30, 0)
	rope5 = new chain(bob5.body, roof1.body, 60, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255, 255, 255);
  
  drawSprites();
	roof1.display()
	bob1.display()  
	bob2.display()
	bob3.display()
	bob4.display()
	bob5.display()
	
	rope1.display()
	rope2.display()
	rope3.display()
	rope4.display()
	rope5.display()
}

function keyPressed() {

	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
	  
	}
}

