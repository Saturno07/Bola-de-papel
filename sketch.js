const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var dustbinObj, groundObject;
var world, engine;

var papel;


function setup() {
    createCanvas(1600, 700);
    rectMode(CENTER);
    engine = Engine.create();
    world = engine.world;

    groundObject = new ground(width / 2, 670, width, 20);
    dustbinObj = new dustbin(1200, 650);
   
    papel = new Papel1 (160,400,70);

    var render= Render.create({

   element:document.body,
   engine:engine,
   options:{width:1600,heigt:700,wireframes:false}

    })
   
    Engine.run(engine);
    Render.run(render);

}

function draw() {
    rectMode(CENTER);
    background(230);
    groundObject.display();
    dustbinObj.display();
    papel.display();
    
}

function keyPressed() {
   
    if(keyCode===76){
    Matter.Body.applyForce(papel.body,papel.body.position,{x:120,y:-150});
    }
}

