var playerX = 100;
var playerY = 100;
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

var obstacle1X = 150;
var obstacle1Y = 150;
var obstacleX1Speed
var obstacleY1Speed
var obstacle2X = 300;
var obstacle2Y = 300;
var obstacleX2Speed
var obstacleY2Speed
var mouseObstacleX;
var mouseObstacleY;

function setup() {
  createCanvas(500, 600);
  createPlayer(50,50);
  obstacleX1Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  obstacleY1Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  obstacleX2Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
  obstacleY2Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
}
function draw() {
  background(109, 247, 203);
  stroke(0);
  fill(0);
  createBorders(10);
  textSize(20);
  text("EXIT", width-70,height-30)
  drawPlayer();
  playerMovement();
  fill(235, 19, 19);
  circle(obstacle1X, obstacle1Y, 25);
  obstacleX1Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  obstacleY1Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  obstacle1X += obstacleX1Speed;
  obstacle1Y += obstacleY1Speed;
  if(obstacle1X > width){
        obstacle1X = 0;
    }
    if(obstacle1X < 0){
        obstacle1X = width;
    }
    if(obstacle1Y > height){
        obstacle1Y = 0;
    }
    if(obstacle1Y < 0){
        obstacle1Y = height;
    }
  fill(246, 204, 17);
  circle(obstacle2X, obstacle2Y, 15);
  obstacleX2Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
  obstacleY2Speed = Math.floor(Math.random() * (Math.floor(Math.random() * 10)) + 1);
  obstacle2X -= obstacleX2Speed;
  obstacle2Y -= obstacleY2Speed;
  if(obstacle2X > width){
        obstacle2X = 0;
    }
    if(obstacle2X < 0){
        obstacle2X = width;
    }
    if(obstacle2Y > height){
        obstacle2Y = 0;
    }
    if(obstacle2Y < 0){
        obstacle2Y = height;
    }
    fill(218, 0, 228);
    circle(mouseObstacleX, mouseObstacleY, 35);

    if(playerX > width-75 && playerY > width+75){
          fill(0);
          stroke(5);
          textSize(30);
          text("YOU WIN", width/2-50, height/2-50);
      }
}

function playerMovement()
{
    if(keyIsDown(UP_ARROW))
    {
        playerY -= 5;   
    }
    if(keyIsDown(DOWN_ARROW))
    {
        playerY += 5;   
    }
    if(keyIsDown(LEFT_ARROW))
    {
        playerX -= 5;   
    }
    if(keyIsDown(RIGHT_ARROW))
    {
        playerX += 5;   
    }
}
function createPlayer(x,y)
{
    playerX = x;
    playerY = y;
}
function drawPlayer()
{
    fill(17, 166, 246);
    rect(playerX,playerY,25,25);
}

function mouseClicked()
{
    mouseObstacleX = mouseX;
    mouseObstacleY = mouseY;
}

function createBorders(thickness)
{
    rect(0,0,width,thickness);
    rect(0,0,thickness,height);
    rect(0, height-thickness,width-50, thickness);
    rect(width-thickness,0,thickness,height);
}