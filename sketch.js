var rad;
function setup() {
  createCanvas(600, 400);
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
    ellipse(i, 400*noise(i)+height/10, rad+(sin(frameCount/50)),rad+(sin(frameCount/50)));
    // fill(map(rad, 0, rad, 0,255));
    pop();
  }
}
