var playerX = 100;
var playerY = 100;
var w = 87; 
var s = 83;
var a = 65;
var d = 68;
var playersDiameter = 60;

var comPlayerX = 500;
var comPlayerY = 300;
var comPlayerXSpeed;
var comPlayerYSpeed;
var minSpeed;
var maxSpeed;

var collectibleX = 250;
var collectibleY = 150;
var collectibleXSpeed = 5;
var collectibleYSpeed = 5;
var collectibleDiameter = 10;
var diameterGrowth = 1;

var playerPoints = 0;
var comPlayerPoints = 0;

function setup() {
  createCanvas(700, 400);
  createPlayer(50,50);
  comPlayerXSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 8)) + 1);
  comPlayerYSpeed = Math.floor(Math.random() * (Math.floor(Math.random() * 8)) + 1);
}
function draw() {
  background(227, 222, 79);
  stroke(0);
  fill(0);
  createBorders(10);
  drawPlayers();
  drawScores();
  drawCollectible();
  playerMovement();
  comPlayerMovement();
  collectibleMovement();
  collision();
  if (collision(playerX, playerY, collectibleX, collectibleY, (playersDiameter / 2) + (collectibleDiameter / 2))) {
    playerPoints++;
    resetCollectible();
}
if (collision(comPlayerX, comPlayerY, collectibleX, collectibleY, (playersDiameter / 2) + (collectibleDiameter / 2))) {
    comPlayerPoints++;
    resetCollectible();
}
    }

function playerMovement()
{
    if(keyIsDown(w))
    {
        playerY -= 10;   
    }
    if(keyIsDown(s))
    {
        playerY += 10;   
    }
    if(keyIsDown(a))
    {
        playerX -= 10;   
    }
    if(keyIsDown(d))
    {
        playerX += 10;   
    }
}

function comPlayerMovement(){
// Movement for the computer player, bounces them when hitting the borders
comPlayerX += comPlayerXSpeed;
comPlayerY += comPlayerYSpeed;
minSpeed = Math.floor(Math.random() * 2) + 1;
maxSpeed = Math.floor(Math.random() * 8) + 5;
if (comPlayerX > width - 10) { 
  comPlayerX = width - 10;
  comPlayerXSpeed *= -1 * Math.floor(Math.random() * (Math.floor(Math.random() * 8)) + 1);
}
if (comPlayerX < 10) {
  comPlayerX = 10;
  comPlayerXSpeed *= -1 * Math.floor(Math.random() * (Math.floor(Math.random() * 8)) + 1);
}

if (comPlayerY > height - 10) {
  comPlayerY = height - 10;
  comPlayerYSpeed *= -1 * Math.floor(Math.random() * (Math.floor(Math.random() * 8)) + 1);
}
if (comPlayerY < 10) {
  comPlayerY = 10;
  comPlayerYSpeed *= -1 * Math.floor(Math.random() * (Math.floor(Math.random() * 8)) + 1);
}
// Sets a min and max speed so the speed doesn't start getting insanely fast or slow
comPlayerXSpeed = Math.max(minSpeed, Math.min(Math.abs(comPlayerXSpeed), maxSpeed)) * Math.sign(comPlayerXSpeed);
comPlayerYSpeed = Math.max(minSpeed, Math.min(Math.abs(comPlayerYSpeed), maxSpeed)) * Math.sign(comPlayerYSpeed);
}
function createPlayer(x,y)
{
    playerX = x;
    playerY = y;
}
function drawPlayers()
{
    fill(55, 99, 219);
    circle(playerX,playerY,playersDiameter);
    fill(214, 34, 21);
    circle(comPlayerX,comPlayerY,playersDiameter);
}

function collectibleMovement(){
    collectibleX += collectibleXSpeed;
    collectibleY += collectibleYSpeed;
    // The collectible goes through the borders and out the other side unlike the computer player
    if(collectibleX > width){
        collectibleX = 0;
    }
    if(collectibleX < 0){
        collectibleX = width;
    }
    if(collectibleY > height){
        collectibleY = 0;
    }
    if(collectibleY < 0){
        collectibleY = height;
    }
}
function drawCollectible(){
    fill(250, 35, 243);
    circle(collectibleX, collectibleY, collectibleDiameter)
    // The diameter will grow and shrink to make it harder to catch
    collectibleDiameter += diameterGrowth;
    if (collectibleDiameter >= 50) {
        diameterGrowth = -1;
    }
    if (collectibleDiameter <= 10) {
        diameterGrowth = 1;
    }
}
function resetCollectible(){
    collectibleX = Math.random() * (width - collectibleDiameter * 2) + collectibleDiameter;
    collectibleY = Math.random() * (height - collectibleDiameter * 2) + collectibleDiameter;
}

// Checks to see if the player or computer player has touched the collectible
function collision(x1, y1, x2, y2, combinedRadius) {
    distance = dist(x1, y1, x2, y2);
    return distance <= combinedRadius;
}

function createBorders(thickness)
{
    fill(0, 92, 15);
    rect(0,0,width,thickness);
    rect(0,0,thickness,height);
    rect(0, height-thickness,width, thickness);
    rect(width-thickness,0,thickness,height);
}
function drawScores() {
    textSize(20);
    fill(0);
    textAlign(LEFT, TOP);
    text(`Player Score: ${playerPoints}`, 50, 30);
    text(`Computer Score: ${comPlayerPoints}`, 450, 30);
}