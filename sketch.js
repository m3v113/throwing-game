const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingshot;
var polygon, polygon_img;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16;
var blob1, blob2, blob3, blob4, blob5, blob6, blob7, blob8, blob9, blob10, blob11, blob12, blob13; 
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);

  stand2 = new Stand(700,200,200,10);
  blob1 = new Block(630,175,30,40);
  blob2 = new Block(660,175,30,40);
  blob3 = new Block(690,175,30,40);
  blob4 = new Block(710,175,30,40);
  blob5 = new Block(740,175,30,40);
  blob6 = new Block(770,175,30,40);

  blob7 = new Block(660,135,30,40);
  blob8 = new Block(690,135,30,40);
  blob9 = new Block(710,135,30,40);
  blob10 = new Block(740,135,30,40);

  blob11 = new Block(690,100,30,40);
  blob12 = new Block(710,100,30,40);

  blob13 = new Block(700,65,30,40)
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);

  polygon = Bodies.circle(50,200,20);
  World.add(world, polygon);

  slingshot = new Slingshot(this.polygon, {x:100,y:200});

  

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow")

  imageMode(CENTER);
  polygon.length = 2;
  polygon.stiffness = 0.7;
  image(polygon_img, polygon.position.x, polygon.position.y, 40,40);

  //polygon(polygon_img);
  //polygon.addImage(polygon_img);

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  blob1.display();
  blob2.display();
  blob3.display();
  blob4.display();
  blob5.display();
  blob6.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  blob7.display();
  blob8.display();
  blob9.display();
  blob10.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();

  blob11.display();
  blob12.display();

  fill("grey");
  block16.display();

  blob13.display();

  slingshot.display();
 
}

function mouseDragged(){
  Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();

}

function keyPressed(){
  if(keyCode === 32) {
      slingshot.attach(polygon);
  }
}       

