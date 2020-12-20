var movingRect, fixedRect

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200,200,40,80)
  fixedRect.shapeColor = 'red'

  movingRect = createSprite(400,200,80,30)
  movingRect.shapeColor = 'red'
}

function draw() {
  background("black");

  movingRect.x= World.mouseX
  movingRect.y= World.mouseY

  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.width/2 + movingRect.width/2
    && fixedRect.y - movingRect.y < fixedRect.width/2 + movingRect.width/2) 
  {
    movingRect.shapeColor = "yellow"
    fixedRect.shapeColor= "yellow"
  }
  else{
    movingRect.shapeColor = "red"
    fixedRect.shapeColor= "red"
  }
  drawSprites();
}