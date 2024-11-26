var playerX = 100;
var playerY = 100;
var w = 87; 
var s = 83;
var a = 65;
var d = 68;

var obstacleX = 150;
var obstacleY = 150;
var obstacle1Xs = [];
var obstacle1Ys = [];
var obstacle1XSpeeds = [];
var obstacle1YSpeeds = [];
var obstacle2Xs = [];
var obstacle2Ys = [];
var obstacle2XSpeeds = [];
var obstacle2YSpeeds = [];
var obstacle3Xs = [];
var obstacle3Ys = [];
var obstacle3XSpeeds = [];
var obstacle3YSpeeds = [];
var obstacle4Xs = [];
var obstacle4Ys = [];
var obstacle4XSpeeds = [];
var obstacle4YSpeeds = [];
var obstacle5Xs = [];
var obstacle5Ys = [];
var obstacle5XSpeeds = [];
var obstacle5YSpeeds = [];
var mouseObstacleX;
var mouseObstacleY;
var diameters = [];

function setup() {
  createCanvas(500, 600);
  for (var i = 0; i < 50; i++) {
    obstacle1XSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    obstacle1YSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    obstacle1Xs[i] = getRandomNumber(500);
    obstacle1Ys[i] = getRandomNumber(600);
    obstacle2XSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    obstacle2YSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    obstacle2Xs[i] = getRandomNumber(500);
    obstacle2Ys[i] = getRandomNumber(600);
    obstacle3XSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    obstacle3YSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    obstacle3Xs[i] = getRandomNumber(500);
    obstacle3Ys[i] = getRandomNumber(600);
    obstacle4XSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    obstacle4YSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    obstacle4Xs[i] = getRandomNumber(500);
    obstacle4Ys[i] = getRandomNumber(600);
    obstacle5XSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    obstacle5YSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
    obstacle5Xs[i] = getRandomNumber(500);
    obstacle5Ys[i] = getRandomNumber(600);
    diameters[i] = getRandomNumber(20);
    }
  createPlayer(50,50);
}
function draw() {
  background(109, 247, 203);
  stroke(0);
  fill(0);
  createExit();
  createBorders(10);
  drawPlayer();
  playerMovement();
  youWinMessage();
    for (var i = 0; i < obstacle1Xs.length; i++) {
        fill(235, 19, 19);
        circle(obstacle1Xs[i], obstacle1Ys[i], diameters[i]);
        obstacle1XSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        obstacle1YSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        obstacle1Xs[i] += obstacle1XSpeeds[i];
        obstacle1Ys[i] += obstacle1YSpeeds[i];
        if (obstacle1Xs[i] > width) {
            obstacle1Xs[i] = 0;
        }
        if (obstacle1Xs[i] < 0) {
            obstacke1Xs[i] = width;
        }
        if (obstacle1Ys[i] > height) {
            obstacle1Ys[i] = 0;
        }
        if (obstacle1Ys[i] < 0) {
            obstacle1Ys[i] = height;
        }
    }
    for (var i = 0; i < obstacle2Xs.length; i++) {
        fill(246, 204, 17);
        circle(obstacle2Xs[i], obstacle2Ys[i], diameters[i]);
        obstacle2XSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        obstacle2YSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        obstacle2Xs[i] += obstacle2XSpeeds[i];
        obstacle2Ys[i] += obstacle2YSpeeds[i];
        if (obstacle2Xs[i] > width) {
            obstacle2Xs[i] = 0;
        }
        if (obstacle2Xs[i] < 0) {
            obstacke2Xs[i] = width;
        }
        if (obstacle2Ys[i] > height) {
            obstacle2Ys[i] = 0;
        }
        if (obstacle2Ys[i] < 0) {
            obstacle2Ys[i] = height;
        }
    }
    for (var i = 0; i < obstacle3Xs.length; i++) {
        fill(0, 128, 64);
        circle(obstacle3Xs[i], obstacle3Ys[i], diameters[i]);
        obstacle3XSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        obstacle3YSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        obstacle3Xs[i] += obstacle3XSpeeds[i];
        obstacle3Ys[i] += obstacle3YSpeeds[i];
        if (obstacle3Xs[i] > width) {
            obstacle3Xs[i] = 0;
        }
        if (obstacle3Xs[i] < 0) {
            obstacke3Xs[i] = width;
        }
        if (obstacle3Ys[i] > height) {
            obstacle3Ys[i] = 0;
        }
        if (obstacle3Ys[i] < 0) {
            obstacle3Ys[i] = height;
        }
    for (var i = 0; i < obstacle4Xs.length; i++) {
        fill(235, 153, 255);
        circle(obstacle4Xs[i], obstacle4Ys[i], diameters[i]);
        obstacle4XSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        obstacle4YSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        obstacle4Xs[i] += obstacle4XSpeeds[i];
        obstacle4Ys[i] += obstacle4YSpeeds[i];
        if (obstacle4Xs[i] > width) {
            obstacle4Xs[i] = 0;
        }
        if (obstacle4Xs[i] < 0) {
            obstacke4Xs[i] = width;
        }
        if (obstacle4Ys[i] > height) {
            obstacle4Ys[i] = 0;
        }
        if (obstacle4Ys[i] < 0) {
            obstacle4Ys[i] = height;
        }
    }
    for (var i = 0; i < obstacle5Xs.length; i++) {
        fill(255, 153, 153);
        circle(obstacle5Xs[i], obstacle5Ys[i], diameters[i]);
        obstacle5XSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        obstacle5XSpeeds[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        obstacle5Xs[i] += obstacle5XSpeeds[i];
        obstacle5Ys[i] += obstacle5YSpeeds[i];
        if (obstacle5Xs[i] > width) {
            obstacle5Xs[i] = 0;
        }
        if (obstacle5Xs[i] < 0) {
            obstacke5Xs[i] = width;
        }
        if (obstacle5Ys[i] > height) {
            obstacle5Ys[i] = 0;
        }
        if (obstacle5Ys[i] < 0) {
            obstacle5Ys[i] = height;
        }
    }
    }
    fill(218, 0, 228);
    circle(mouseObstacleX, mouseObstacleY, 35);
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

function createExit()
{
    textSize(20);
    text("EXIT", width-70,height-30)
}

function youWinMessage(){
    if(playerX > width-75 && playerY > width+75){
        fill(0);
        stroke(5);
        textSize(30);
        text("YOU WIN", width/2-50, height/2-50);
    }
}

function getRandomNumber(number) {
    return Math.floor(Math.random() * number) + 10;
}
