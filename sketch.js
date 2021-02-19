var rad;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(40);
  noStroke();
  fill(244,150);
  rad=0.8
  
  for(i=0; i<width; i+=0.3){
    push();
    if(i<width/2){
      rad+=0.002
    }else{
      rad-=0.002
    }
    ellipse(i, 400*noise(i)+height/10, rad+(sin(frameCount/10)),rad+(sin(frameCount/10)));
  
    pop();
  }
}
