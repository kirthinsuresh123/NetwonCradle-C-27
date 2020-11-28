const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5,roof,rop1,rop2,rop3,rop4,rop5,engine,world



function setup() {
  createCanvas(1600,700);
  rectMode(CENTER);
engine = Engine.create();
world= engine.world
roof = new Roof(width/2,height/4,width/7,20)
bobdiameter = 40;
var startbobpositionx = width/2
var startbobpositiony = height/4+500
bob1 = new Bob(startbobpositionx-bobdiameter*2,startbobpositiony,bobdiameter)
bob2 = new Bob(startbobpositionx-bobdiameter,startbobpositiony,bobdiameter)
bob3 = new Bob(startbobpositionx,startbobpositiony,bobdiameter)
bob4 = new Bob(startbobpositionx+bobdiameter,startbobpositiony,bobdiameter)
bob5 = new Bob(startbobpositionx+bobdiameter*2,startbobpositiony,bobdiameter)

rop1 = new Rope(bob1.body,roof.body,-bobdiameter*2,0)
rop2 = new Rope(bob2.body,roof.body,-bobdiameter*1,0)
rop3 = new Rope(bob3.body,roof.body,0,0)
rop4 = new Rope(bob4.body,roof.body,bobdiameter*1,0)
rop5 = new Rope(bob5.body,roof.body,bobdiameter*2,0)

}

function draw() {
  background("yellow");  
  Engine.update(engine)
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rop1.display();
  rop2.display();
  rop3.display();
  rop4.display();
  rop5.display();
  roof.display();
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45})
  }
}
function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}
