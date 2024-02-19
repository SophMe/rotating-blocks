class Block {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.angle = 0;
    this.c = baseColor;
  }

  display() {
    noFill();
    stroke(this. c);
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    // this.drawRect();
    // this.drawX();

    if (this.angle > 0 && this.angle < 45) {
      this.drawRect();
    } else {
      this.drawX();
    }
    
    pop();
  }

  move() {
    // if mouse is moving check distance
    let distance;
    if (pmouseX - mouseX != 0 || pmouseY - mouseY != 0) {
      distance = dist(mouseX, mouseY, this.x, this.y);
      // print(distance)
      if (distance < distMouse) {
        this.angle += 1;
        this.c = lightColor;
      }
    }

    // if squares are rotating continue
    if (this.angle > 0 && this.angle < 91) {
      this.angle += 1;
      if (this.c > baseColor) {
        this.c -= 3; 
      }
    } else {
      this.angle = 0;
      this.c = baseColor;
    }
  }

  drawRect() {
    rect(0, 0, size - offset, size - offset);
  }

  drawX() {
    let margin = -size/2;
    line(margin+offset/2,margin+offset/2, margin+size-offset/2, margin+size-offset/2);
    line(margin+size-offset/2, margin+offset/2, margin+offset/2, margin+size-offset/2);
  }

}


// HOMEWORK

// create different shapes
// create different colors
// create different sspeeds for rotation