let distMouse = 30;
let size = 30;
let offset = 4; 
let cols;
let rows;
let blocks = [];

function setup() {
  createCanvas (400, 400);
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