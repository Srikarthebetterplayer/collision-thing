var fixedRect, movingRect;

var rect1

var rect2

var rect3

var rect4

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  rect1 = createSprite(100, 200, 50, 50);
  rect2 = createSprite(200, 200, 50, 50);
  rect3 = createSprite(300, 200, 50, 50);
  rect4 = createSprite(400, 200, 50, 50);
  rect1.shapeColor = "green";
  rect2.shapeColor = "green";
  rect3.shapeColor = "green";
  rect4.shapeColor = "green";

}


function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  
  drawSprites();

  if(istouching(movingRect, rect2)){
    movingRect.shapeColor = "red";
    rect2.shapeColor = "red"
  }
  else {
    movingRect.shapeColor = "green"
    rect2.shapeColor = "green"
  }
  
}


function istouching(a, b){


  if (a.x - b.x < b.width/2 + a.width/2
    && b.x - a.x < b.width/2 + a.width/2
    && a.y - b.y < b.height/2 + a.height/2
    && b.y - a.y < b.height/2 + a.height/2) {
  return true
    }
  else {
   return false
  }


}
