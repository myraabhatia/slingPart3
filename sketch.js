const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var holder1,holder2;
var ball1
var block1,block2;


function setup(){
   var  canvas = createCanvas(1200,400);
engine = Engine.create();
world = engine.world;
Engine.run(engine);
ball = new Ball(mouseX,mouseY,20,20)

holder1 = new holder(390,300,300,20)
holder2 = new holder(700,200,300,20);

block1 = new Block(300,275,30,40);
block2 = new Block(330,275,30,40);
block3 = new Block(360,275,30,40);
block4 = new Block(390,275,30,40);
block5 = new Block(420,275,30,40);
block6 = new Block(450,275,30,40);
block7 = new Block(390,240,30,40);
block8 = new Block(420,240,30,40);
block9 = new Block(340,240,30,40);
block10 = new Block(390,240,30,40);
block11 = new Block(370,240,30,40);
block12 = new Block(310,240,30,40);
block12 = new Block(390,200,30,40)
block13 = new Block(360,200,30,40)
block14 = new Block(370,160,30,40)
block15 = new Block(770,170,30,40)
block16 = new Block(740,170,30,40)
block17 = new Block(710,170,30,40)
block18 = new Block(680,170,30,40)
block19 = new Block(650,170,30,40)
block20 = new Block(620,170,30,40)
block21 = new Block(700,130,30,40)
block22 = new Block(730,130,30,40)
block23 = new Block(670,130,30,40)
block24 = new Block(700,90,30,40)
block25 = new Block(620,170,30,40)
block26 = new Block(620,170,30,40)








}

function draw(){
    background("blue")
    Engine.update(engine);
holder1.display();
holder2.display();

ball.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();
block26.display();



}