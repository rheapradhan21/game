
function setup() {
  createCanvas(500,500);
  var box=createSprite(250,250,20,20);
  

 
}


function draw() 
{
  background(30);
  
if(keyIsDown(UP_ARROW)){
box.position.y=box.position.y-5;
}

  drawSprites();
}




