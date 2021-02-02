
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var polygon;
var ground,ground1,ground2,bg;
var hero,monster;
// var box6,box7,box8,box9,box10,box11,box12,box13,box14,box15;

var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15;

var flyobj;

function preload(){
bg = loadImage("GamingBackground.png");
}

function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

ground = new Ground(windowWidth/4,windowHeight - 100,width/1.1,25);

hero = new Superman(300,150,150);
monster = new Monster(1050,250,300)

block1 = new Block(520,80);
block2 = new Block(520,150);
block3 = new Block(520,220);
block4 = new Block(520,290);
block5 = new Block(520,360);
block6 = new Block(520,430);

block7 = new Block(600,80);
block8 = new Block(600,150);
block9 = new Block(600,220);

block10 = new Block(680,80);
block11 = new Block(680,150);
block12 = new Block(680,220);
block13 = new Block(680,290);
block14 = new Block(680,360);
block15 = new Block(680,430);


flyobj = new Fly(hero.body,{x:300,y:150});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
  

ground.display();
hero.display();
monster.display();



fill("red");

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();

fill("purple");
block7.display();
block8.display();
block9.display();

fill("yellow");
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();

flyobj.display();



  drawSprites();

  textSize(20)
fill(0)
  text("CHALLENGE YOU TO KILL THE MONSTER!",100,100);


}
function mouseDragged(){

    Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
	
    
}
