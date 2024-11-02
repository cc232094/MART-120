var x1 = 165;
var x2 = 235;
var diagonalx = 185;
var y = 165;
var diagonaly = 250;
var size = 32;
var count = 0;
var sizeDirection = 2;
var movement;

function setup(){
    createCanvas(400,400);
    movement = floor(random() * 5) + 1;
}
function draw(){
    strokeWeight(2);
    background(220);
    rect(diagonalx,diagonaly,30,125);
    if(diagonalx <= 0 || diagonalx >= 800)
        {
            movement*=-1;
        }
        diagonalx += movement;
    if(diagonaly <= 0 || diagonaly >= 800)
        {
            movement*=-1;
        }
        diagonaly += movement;
    ellipse(200,180,120,200);
    ellipse(200,105,90,50);
    triangle(155, 113, 160, 140, 170, 122);
    triangle(170, 122, 180, 140, 190, 128);
    triangle(190, 128, 200, 140, 210, 128);
    triangle(210, 128, 220, 140, 230, 122);
    triangle(230, 122, 240, 140, 245, 113);
    line(155, 155, 160, 150);
    line(160, 150, 170, 150);
    line(240, 150, 245, 155);
    line(230, 150, 240, 150);
    ellipse(x1,165,20,10);
    if(x1 <= 0 || x1 >= 800)
        {
            movement*=1;
        }
        x1 -= movement;
    ellipse(x2,165,20,10);
    if(x2 >= 800 || x2 <= 0)
        {
            movement*=-1;
        }
        x2 += movement;
    circle(165,y,9);
    if(y <= 0 || y >= 800)
        {
            movement*=-1;
        }
        y += movement;
    circle(235,y,9);
    if(y >= 800 || y <= 0)
        {
            movement*=-1;
        }
        y += movement;
    triangle(190, 185, 200, 175, 210, 185);
    triangle(195, 225, 200, 240, 205, 225);
    strokeWeight(4);
    point(195, 185);
    point(205, 185);
    line(160, 205, 165, 215);
    line(165, 215, 235, 215);
    line(235, 215, 240, 205);
    textSize(size);
    size+= sizeDirection;
    count++;
    if(count > 5)
    {
        sizeDirection *=-1;
        count = 0;
    }
    text("Portrait of Chase", 80, 30);
    textSize(15);
    text("By: Chase Comella", 250, 350);
}