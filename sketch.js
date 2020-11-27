const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,platform;
var bird, slingshot;

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    birdcreate()

    slingshot = new SlingShot(bird1.body,{x:450, y:50});
    slingshot2 = new SlingShot(bird2.body,{x:500, y:50});
    slingshot3 = new SlingShot(bird3.body,{x:550, y:50});
    slingshot4 = new SlingShot(bird4.body,{x:600, y:50});
    slingshot5 = new SlingShot(bird5.body,{x:650, y:50});
}

function draw(){
    if(backgroundImg)
        background(backgroundImg);
    
        noStroke();

    strokeWeight(10);
    line(400, 50, 700, 50);
    
    Engine.update(engine);
    bird1.display();
    bird2.display();
    bird3.display();
    bird4.display();
    bird5.display();
    slingshot.display();
    slingshot2.display();  
    slingshot3.display();   
    slingshot4.display();   
    slingshot5.display();    
     





}














function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird1.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    gameState = "launched";
    flying_sound.play()
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}

function birdcreate(){
    bird1 = new Bird(200,50);
    bird2 = new Bird(200,50);
    bird3 = new Bird(200,50);
    bird4 = new Bird(200,50);
    bird5 = new Bird(200,50);
}