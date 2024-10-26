function setup(){
    createCanvas(400,400);
}
function draw(){
    strokeWeight(2);
    background(220);
    rect(185,250,30,125);
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
    ellipse(165,165,20,10);
    ellipse(235,165,20,10);
    circle(165,165,9);
    circle(235,165,9);
    triangle(190, 185, 200, 175, 210, 185);
    triangle(195, 225, 200, 240, 205, 225);
    strokeWeight(4);
    point(195, 185);
    point(205, 185);
    line(160, 205, 165, 215);
    line(165, 215, 235, 215);
    line(235, 215, 240, 205);
    textSize(32);
    text("Portrait of Chase", 80, 30);
    textSize(15);
    text("By: Chase Comella", 250, 350);
}