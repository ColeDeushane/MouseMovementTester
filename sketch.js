
let textBox;
let box = [];
let tracer = [];
let tracerIndex;
let startImg;
let endImg;
let restartImg;
let programStartTime;
let startTime;
let endTime;

let boxOneClicked;
let boxTwoClicked;

function preload() {
    startImg = loadImage("pics/start.jpg");
    endImg = loadImage("pics/end.jpg");
    restartImg = loadImage("pics/restart.png");
}

function setup() {
  boxOneClicked = false;
  boxTwoClicked = false;
  tracerIndex = 0;
  createCanvas(1024, 768);
  textBox = new consoleBox();
  box[0] = new Target(100, 300, startImg);
  box[1] = new Target(924, 300, endImg);
  box[2] = new Target(380, 618, restartImg);
  box[2].setLength(20);
  textSize(24);
  textFont("Source Code Pro");
}

function draw() {
  programStartTime = millis();
  background(51);
  textBox.show();
  box[0].show();
  box[1].show();
  box[2].show();

  if(boxOneClicked && mouseMoved() && !boxTwoClicked) {
      tracer[tracerIndex] = createVector(mouseX, mouseY);
      tracerIndex++;
      for(var i = 0; i < tracerIndex; i++) {
          fill(255, 255, 0);
          ellipse(tracer[i].x, tracer[i].y, 5, 5);
      }
  }
}
