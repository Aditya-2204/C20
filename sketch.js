var movingRect, fixedRect

function setup(){
  createCanvas(400, 400);
  fixedRect = createSprite(200, 200, 140, 70);
  movingRect = createSprite(300, 200, 50, 100);

}

function draw(){
  background(255);
  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&movingRect.y-fixedRect.y<movingRect.width/2+fixedRect.width/2 && fixedRect.y-movingRect.y<movingRect.width/2+fixedRect.width/2){
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green"
  }
  else{
    movingRect.shapeColor = "orange";
    fixedRect.shapeColor = "orange"
  }
  drawSprites();
}