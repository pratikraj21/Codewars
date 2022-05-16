// My Solution
class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  add(anotherVector) {
    return new Vector(this.x + anotherVector.x, this.y + anotherVector.y);
  }
}
