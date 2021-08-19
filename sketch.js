var garden,rabbit;
var gardenImg,rabbitImg;
var apple
var appleImg
var invisibleWall1 
var invisibleWall2 

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
}
var select_sprites = Math.round(random(1,2))
  if (frameCount % 80 == 0){
    createApples()
}
function setup(){
  
  createCanvas(400,400);
  invisibleWall1 = createSprite(5, 200, 10, 400)
  invisibleWall2 = createSprite(395, 200, 10, 400)
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

rabbit = createSprite(World.mouseX,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX
  if (garden.y >= 400){
    garden.y=height/2;
  }
  drawSprites();
}

function createApples(){
  apple = createSprite(random(50, 350), 40, 10, 10)
  apple.addImage(appleImg, "apple.png")
  apple.setVelocity = 4
  apple.liftetime = 340;
}

