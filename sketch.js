const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
const Mouse = Matter.MouseConstraint;
var b1,b2,b3,b4,b5;


function preload(){
	
  }

function setup() {
    createCanvas(windowWidth/2,windowHeight/1.5);
	engine = Engine.create();
	world = engine.world;

let canvasmouse = Mouse.create(canvas.elt);
canvasmouse.pixelRatio = pixelDensity();
let options = {
    mouse:canvasmouse
};
 mConstraint = Matter.MouseConstraint.create(engine,options);

  b1 = new Bob(100,300,"brown")
  b2 = new Bob(160,300,"brown")
  b3 = new Bob(220,300,"brown")
  b4 = new Bob(280,300,"brown")
  b5 = new Bob(340,300,"brown")
	
	Engine.run(engine);
}

function draw() {

  background(0);
  

  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();

 Engine.update(engine)

 drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(bob1.body,{x: mouseX,y: mouseY})

}
