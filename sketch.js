const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var box;

function setup(){
    var canvas = createCanvas(400,400);
    myEngine = Engine.create();
    myWorld = myEngine.world;
   
  box1 =  new Box(200,200,30,40);
   box2 = new Box(240,90,40,60);
    //ground = new Ground(200,390,400,10);

    
}

function draw(){
    background(0);
    Engine.update(myEngine);
    //box.display();
    box1.display();
   box2.display();
    //ground.display();
    //box.display();
    
}