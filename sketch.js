const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;



var boyImage
var tree, ground,stone
var mango1, mango2, mango3, mango4, mango5, mango6, mango7

function preload(){
	boyImage = loadImage("assets/boy.png")
	treeImage = loadImage("assets/tree.png")
}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;
	//tree = new Tree(800,400,400,600)
	ground = new Ground(width/2, height-10, width, 20)
	stone = new Stone(60,530)

  mango1 = new Mango(620,370)
  mango2 = new Mango(650,270)
	mango3 = new Mango(655,410)
	mango4 = new Mango(740,163)
	mango5 = new Mango(720,240)
	mango6 = new Mango(730,340)
	mango7 = new Mango(823,130)
	mango8 = new Mango(820,340)
	mango9 = new Mango(820,244)
	mango10 = new Mango(910,264)
	mango11 = new Mango(910,200)
	mango12 = new Mango(910,340)
	mango13= new Mango(965,400)
	

	slingshot = new SlingShot(stone.body ,{x:69, y:548})

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  
  textSize(30)
  text("PLUCKING MANGOES", 50,50)
  text("Drag the stone with mouse, aim at the mangoes and release ",50,110)
  text("Mangoes fall down if your stone hits it :)",50,160)
  text("Press SPACE to try again",50,210) 
  
  imageMode(CENTER)
  //tree.display();
  image(treeImage,800,400,400,600)
  ground.display();

  image(boyImage,100,620, 100,300 )
 
  stone.display()
 
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  mango10.display()
  mango11.display()
  mango12.display()
  mango13.display()
  

  slingshot.display()

  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)
  detectCollision(stone,mango6)
  detectCollision(stone,mango7)
  detectCollision(stone,mango8)
  detectCollision(stone,mango9)
  detectCollision(stone,mango10)
  detectCollision(stone,mango11)
  detectCollision(stone,mango12)
  detectCollision(stone,mango13)
 

}

function detectCollision(stoneObj,mangoObj){
	var pointA = mangoObj.body.position
	var pointB = stoneObj.body.position

	var distance = dist(pointA.x, pointA.y, pointB.x,pointB.y)
	if(distance <= 2*(mangoObj.width/2 + stoneObj.width/2)){
    Matter.Body.setStatic(mangoObj.body, false)
    textSize(40)
    fill ("red")
    text("BINGO!",width/2-100, height/2)
	}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(stone.body, {x:69, y:548})
		slingshot.attach(stone.body)
	}
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

