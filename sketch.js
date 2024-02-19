let distMouse = 30;
let size = 20;
let offset = 4; 
let cols;
let rows;
let blocks = [];
let baseColor = 70;
let lightColor = 255;

function setup() {
  createCanvas (windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
  cols = width/size;
  rows = height/size;

  for (let i=0; i<cols; i++) {
    blocks[i] = [];
    for (let j=0; j<rows; j++) {
      blocks[i][j] = new Block(i*size, j*size);
    }
  }
}

function draw() {
  background('#bac8ce');
  for (let i=0; i<cols; i++) {
    for (let j=0; j<rows; j++) {
      blocks[i][j].move();
      blocks[i][j].display();
    }
  }
}