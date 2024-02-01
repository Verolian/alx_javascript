// 4-rectangle.js

class Rectangle {
    constructor(w, h) {
      if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
        return {};
      }
      this.width = w;
      this.height = h;
    }
  }
  
  // Square class definition
  class Square extends Rectangle {
    constructor(size) {
      // Call the constructor of the parent class (Rectangle)
      super(size, size);
    }
  }
  module.exports = Square;
  