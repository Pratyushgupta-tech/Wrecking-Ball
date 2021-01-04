
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world; 
var box;
var ground;
var ball;
var rope;


function setup() {
  createCanvas(1000,600);
 
  engine = Engine.create();
  world = engine.world 

ground = new Ground(500,550,1000,10);

box1 = new Box(350,500,50,50);
box2 = new Box(400,500,50,50);
box3 = new Box(450,500,50,50);
box4 = new Box(500,500,50,50);
box5 = new Box(550,500,50,50);
box6 = new Box(600,500,50,50);
box7 = new Box(650,500,50,50);

box8 = new Box(375,450,50,50);
box9 = new Box(425,450,50,50);
box10 = new Box(475,450,50,50);
box11 = new Box(525,450,50,50);
box12 = new Box(575,450,50,50);
box13 = new Box(625,450,50,50);

box14 = new Box(400,400,50,50);
box15 = new Box(450,400,50,50);
box16 = new Box(500,400,50,50);
box17 = new Box(550,400,50,50);
box18 = new Box(600,400,50,50);

box19 = new Box(425,350,50,50);
box20 = new Box(475,350,50,50);
box21 = new Box(525,350,50,50);
box22 = new Box(575,350,50,50);

box23 = new Box(450,300,50,50);
box24 = new Box(500,300,50,50);
box25 = new Box(550,300,50,50);

box26 = new Box(475,250,50,50);
box27 = new Box(525,250,50,50);

box28 = new Box(500,200,50,50);


ball = new Ball(300,200,50,50);

rope = new Rope(ball.body,{x:200,y:100})

}

function draw() {

  Engine.update(engine)

  background("green");
  
  ground.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();

  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();

  box19.display();
  box20.display();
  box21.display();
  box22.display();

  box23.display();
  box24.display();
  box25.display();

  box26.display();
  box27.display();

  box28.display();


  ball.display();

  rope.display();

  drawSprites();
}