var pointsBez = [10, 600, 300, 10, 800, 600]
function setup(){
  createCanvas(800, 800)
}

function draw(){
  background(255)
  noFill();
  stroke(0, 128, 0);
  ellipse(pointsBez[0], pointsBez[1], 10, 10);
  ellipse(pointsBez[2], pointsBez[3], 10, 10);
  ellipse(pointsBez[4], pointsBez[5], 10, 10);
  line(pointsBez[0], pointsBez[1], pointsBez[2], pointsBez[3])
  line(pointsBez[2], pointsBez[3], pointsBez[4], pointsBez[5])
  stroke(255, 0, 0);
  beginShape();
  for (var i = 0; i<20; i++){
    var x1 = (pointsBez[0]*(1-(i/20)))+(pointsBez[2]*(i/20))
    var x2 = (pointsBez[2]*(1-(i/20)))+(pointsBez[4]*(i/20))
    var y1 = (pointsBez[1]*(1-(i/20)))+(pointsBez[3]*(i/20))
    var y2 = (pointsBez[3]*(1-(i/20)))+(pointsBez[5]*(i/20))
    var x = (x1*(1-(i/20)))+(x2*(i/20))
    var y = (y1*(1-(i/20)))+(y2*(i/20))
    vertex(x, y);
  }
  endShape();
}