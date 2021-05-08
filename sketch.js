const Engine = Matter.Engine;

const World = Matter.World;

const Bodies = Matter.Bodies;

var myWorld, myEngine;
var ground;
var floatingBox;
var ball;

function setup() {
  createCanvas(400,400);

  myEngine = Engine.create();

  myWorld = myEngine.world;
  var Option = {
    isStatic:true
  }
  ground = Bodies.rectangle(200,375,500,20,Option);
  World.add(myWorld,ground);

  floatingBox = Bodies.rectangle(200,200,50,50,Option);
  World.add(myWorld,floatingBox);

  var Option = {
    restitution:1
  }
  ball = Bodies.circle(200,300,20,Option);
  World.add(myWorld,ball);
}

function draw() {
  background("white");  
  Engine.update(myEngine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,500,20);
  rect(floatingBox.position.x,floatingBox.position.y,50,50);
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position,y,20,20);
  drawSprites();
}