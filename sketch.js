var fixedRect, movingRect;
var ob1,ob2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400,100,50,80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityY = +5;
  movingRect = createSprite(400,800,80,30);
  movingRect.shapeColor = "green";
   movingRect.debug = true;
   movingRect.velocityY = -5;

   ob1 = createSprite(100,200,50,50);
  ob1.velocityX = 4
  ob1.shapeColor = "pink";
  ob2 = createSprite(500, 200,50,50);
  ob2.velocityX = -5;
ob2.shapeColor = "pink";
}

function draw() {
  background(255,255,255);  
  
bounceOff(ob1, ob2);
  
  
  bounceOff(movingRect, fixedRect);
  
  drawSprites(); 
}

function bounceOff (object1, object2){
  if(object1.x-object2.x < object2.width/2 + object1.width/2 
    && object2.x - object1.x < object2.width/2 + object1.width/2){
      object1.velocityX = object1.velocityX * (-1);
      object2.velocityX = object2.velocityX * (-1);
}


if(object2.y -object1.y < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.width/2 + object1.width/2 ) {
      object1.velocityY = object1.velocityY * (-1);
      object2.velocityY = object2.velocityY * (-1);
}

}







