
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,lever,box1,box2,box3;
var R,G,B;
var edge1,edge2,edge3,edge4;
var randcolor1;
var randcolor2;
var chooser1;
var hiderbackground,hiderbackground2;
var PUZZLECHOOSER = 1;
var spr1,spr2,spr3,spr4,spr5,spr6;
var spr11,spr22,spr33,spr44;
var poly1,poly2,poly3,poly4,poly5,poly6;
var polygroup;

function preload(){
	
}

function preload() {
apple = loadImage("apple.png");
banana = loadImage("banana.png");
strawberry = loadImage("strawberry.png");
watermelon = loadImage("watermelon.png");
brinjal = loadImage("brinjal.png");
capsicum = loadImage("capsicum.png");
carrot = loadImage("carrot.png");
potato = loadImage("potato.png");
cow = loadImage("cow.png");
dog = loadImage("dog.png");
goat = loadImage("goat.png");
monkey = loadImage("monkey.png");
planet_atmo = loadImage("planet_atmo.png");
planet_earth = loadImage("planet_earth.png");
planet_mars = loadImage("planet_mars.png");
planet_mook = loadImage("planet_mook.png");

polygroup = new Group();

}


function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

  randfruIMG = Math.round(random(1,4));
randvegIMG = Math.round(random(1,4));
randanmIMG = Math.round(random(1,4));
randplaIMG = Math.round(random(1,4));
randIMGchooser = Math.round(random(1,4));
randoddsprIMGchooser = Math.round(random(1,4));
randoddsprchooser = Math.round(random(1,4));

spr11 = createSprite(200,200,100,100);
spr22 = createSprite(600,200,100,100);
spr33 = createSprite(200,600,100,100);
spr44 = createSprite(600,600,100,100);

hiderbackground2 = createSprite(400,400,800,800);
hiderbackground2.shapeColor = "";


spr1 = createSprite(200,200,100,100);
spr2 = createSprite(400,200,100,100);
spr3 = createSprite(600,200,100,100);
spr4 = createSprite(200,600,100,100);
spr5 = createSprite(400,600,100,100);
spr6 = createSprite(600,600,100,100);
randcolor1 = Math.round(random(1,12));
randcolor2 = Math.round(random(1,12));
chooser1 = Math.round(random(1,6));

hiderbackground = createSprite(400,400,800,800);

ball = new Ball(200,300);
lever = createSprite(75,350,100,20);
box1 = new basket(random(300,750),400,150,20);
box2 = new basket(box1.body.position.x - 85,375,20,70);
box3 = new basket(box1.body.position.x + 85,375,20,70);
edge1 = new basket(-25,400,50,800);
edge2 = new basket(825,400,50,800);
edge3 = new basket(400,825,800,50);
edge4 = new basket(400,-25,800,50);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 

  if(PUZZLECHOOSER === 1){
  R = map(lever.y,0,300,0,255) + 25;
  G = map(lever.y,300,700,0,255);
  B = 25;
  strokeWeight(1);
  fill(255);



lever.shapeColor = rgb(R + 50,G + 50,B);
hiderbackground.shapeColor = 0;
if(mousePressedOver(lever)){
	lever.y = mouseY;
	}
fill(255);
strokeWeight(5);
stroke(255);
line(lever.x,0,lever.x,700);	
  drawSprites();
 ball.display();
 box1.display();
 box2.display();
 box3.display();
 edge1.display();
 edge2.display();
 edge3.display();
 edge4.display();
 
 if(keyDown("2")){
PUZZLECHOOSER = 2;
lever.destroy();	
hiderbackground.destroy();

 }
}

if(PUZZLECHOOSER === 2){

colormatcher();
drawSprites();

if(keyDown("3")){
PUZZLECHOOSER = 3;
hiderbackground2.destroy();
spr1.destroy();
spr2.destroy();
spr3.destroy();
spr4.destroy();
spr5.destroy();
spr6.destroy();
destroy();
}
}

else if(PUZZLECHOOSER === 3){
randomizeimage();
drawSprites();


}

}

function keyPressed(){
if(PUZZLECHOOSER === 1){
var force = 700 - lever.y
console.log(box1.body.position.x);
if(keyCode === 32){
Body.setStatic(ball.body,false);	
Body.applyForce(ball.body,ball.body.position,{x: force/1500,y: -force/1500})
console.log(force/1000 , force/1000);
}
}
}
