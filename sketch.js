var seaImg,shipImg1,ship,sea
function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(400,400);
  sea=createSprite(200,200,400,10)
ship=createSprite(200,300,20,50)
ship.addAnimation("floating",shipImg1)
ship.scale=0.2;
sea.addImage(seaImg);
sea.velocityX=-4;
sea.scale=0.5;
sea.velocityX=-2;
}


function draw()
 {
  background("blue");
  if (sea.x <0){
    sea.x = sea.width/2; 
  }
 drawSprites();
}