var bullet,wall;
var speeeed,weight,thickness;
var damage ;
var lin1,lin2;
var resetButton,r;

function setup() {
  createCanvas(1650,400);
  bullet = createSprite(50, 200, 75, 8);
  bulletBack = createSprite(39,200,55,13);
  wall = createSprite(1500, 200, thickness, height/2 + 20);
  
  speeeed = random (55,95);
  weight = random (400,1500);
  thickness = random(22,83);
}

function draw() {
  background("teal"); 
  
  bullet.shapeColor = "white";
  bulletBack.shapeColor = "white";
  bullet.velocityX = speeeed;
  bulletBack.velocityX = bullet.velocityX;
  wall.shapeColor = "brown"

  damage = 0.5*weight*speeeed*speeeed/(thickness*thickness*thickness);

  if(bullet.x - wall.x < wall.width/2 + bullet.width/2 &&
    wall.x - bullet.x < wall.width / 2 + bullet.width/2&&
    bullet.y - wall.y < wall.height/2 + bullet.height/2 &&
    wall.y - bullet.y   < wall.height/2 + bullet.height/2){
    bullet.velocityX = 0;
    bulletBack.velocityX = 0;
    textSize(20);
    text("damage:" + damage,850,300);
    stroke("blue")
    fill("blue")
    
    if(damage > 1 && damage < 10){
      wall.shapeColor = "lightgreen";
    }

    if( damage > 10){
      wall.shapeColor = "red";
    }

   
    }
  
  

  drawSprites();
}


