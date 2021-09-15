function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("red");
  rect(10,175,10,70);
  rect(380,mouseY,10,70);
  rect (200,200,10,10);
  text (mouseX+","+mouseY,mouseX,mouseY);
}