const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles=[]
var plinkos=[]
var division=[]

var divisionHeight = 300;
function preload(){
  Plinkoimg=loadImage("plinkoimage.png");
} 

function setup() {
  var canvas=createCanvas(620,800);
  engine = Engine.create();
  world = engine.world;
  // bg=createSprite(10,10,800,800)
  // bg.addImage(Plinkoimg);
  
  ground = new Ground(300, 770, 650, 50);
  for (var i = 0; i <= width; i = i + 80){
    division.push(new Division(i, height-divisionHeight/2, 10, divisionHeight));
  }
  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 75));
  }
  for (var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 175));
  }
  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,275));
  }
  for (var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 375));
  }

  

}

function draw() {
  background("black");  
  Engine.update(engine);
  ground.display();
  
  if(frameCount%60===0){
    console.log("I am in 60");
    particles.push(new Particle(random(width/2-30,width/2+30),10,10));

  } 
  for (var k = 0; k < particles.length; k++){
    console.log("I am in for loop");
    particles[k].display();
  }

  for (var j = 0; j < plinkos.length; j++){
    plinkos[j].display();
  }

  for (var i = 0; i < division.length; i++){
    division[i].display();
  }
  
  drawSprites()
}