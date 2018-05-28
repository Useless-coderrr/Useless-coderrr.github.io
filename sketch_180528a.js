var angle=0;
var l=250;
function setup() {
createCanvas(window.innerWidth,window.innerHeight);
background(0);
}

function draw() {
  translate(width/2,height/2);
  colors(l);
}
function colors(l){
  fill(random(256),random(256),150);
  push();
  rotate(angle);
  beginShape();
  vertex(-l,-l);
  vertex(l,-l);
  vertex(-l,l);
  vertex(l,l);
  endShape(CLOSE);
  pop();
  angle+=0.01;
  fill(random(256),random(256),150);
  if(l>=100)
  colors(l-50);
  
  
}