
var trex ,trex_running;
var edges, ground, groundImage;
var rand;
var invisibleGround;
var cloud,cloudImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");
  cloudImage = loadImage("cloud.png");
}

function setup(){
    createCanvas(600,200)
  //create a trex sprite
  trex = createSprite(50,160,50,40);
  trex.addAnimation("trexrunning",trex_running);
  trex.scale = 0.5
  //trex.velocityX = 3
  //create ground
  ground = createSprite(50,190,600,20);
  ground.addImage("ground",groundImage);
  ground.velocityX = -3
  ground.x = ground.width/2

  invisibleGround = createSprite(50,210,600,20)
  //invisibleGround.visible = false
  invisibleGround.shapeColor = "white";

  edges = createEdgeSprites();
  rand = Math.round(random(1,100));
  //console.log(rand);
}

function draw(){
  background("white");
  //console.log(trex.y)
  
  if(keyDown("space") && trex.y>=100){
    trex.velocityY = -8
  }
  trex.velocityY = trex.velocityY+0.5;

 if(ground.x<0)
 {
   ground.x = ground.width/2
 }

trex.collide(invisibleGround);
spawnClouds();

console.log(frameCount)
  drawSprites();
}


function spawnClouds(){

if(frameCount%60 ===0)
{ 
   cloud = createSprite(500,100,40,20)
cloud.velocityX = -3
cloud.addImage(cloudImage)
cloud.scale = 0.4
cloud.y = Math.round(random(10,60));

cloud.depth = trex.depth
trex.depth+=1;
}
}
