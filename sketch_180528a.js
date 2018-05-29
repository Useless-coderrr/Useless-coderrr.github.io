var angle=0;
var l=270;
var colorss=[40];
function setup() {
createCanvas(window.innerWidth,window.innerHeight);
background(0);
for(var i=0;i<20;i++)
colorss[i]=new colors(l-=15);
}
function draw() {
  translate(width/2,height/2);
  for(var i=0;i<20;i++){
  colorss[i].show();
  colorss[i].update();
  }
}
function colors(l){
  this.show=function(){
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
  }
  this.update=function(){
  angle+=0.002;
  fill(random(256),random(256),150);
  }
}