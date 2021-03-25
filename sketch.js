const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var canvas,myEngine,myWorld,ground, ground_options;
var ball,ball_options;

function setup() {
  canvas=createCanvas(400,400);

  myEngine=Engine.create(); //world is created
  myWorld=myEngine.world;

  ground_options={
    isStatic:true
  }
 
  ground=Bodies.rectangle(200,390,400,20,ground_options);
  World.add(myWorld,ground);
  console.log(ground);
  ball_options={
    restitution:1.0
  }
  ball=Bodies.circle(200,100,20,ball_options);
  World.add(myWorld,ball);

  
}

function draw() {
  background(0,0,0);  
  Engine.update(myEngine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}