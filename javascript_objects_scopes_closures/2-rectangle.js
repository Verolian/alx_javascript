#!/usr/bin/node
class Rectangle {
    constructor(w, h) {
      if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
        // Create an empty object if w or h is invalid
        return {};
      }
  
      this.width = w;
      this.height = h;
    }
  }

  module.exports=Rectangle
/*const r1 = new Rectangle(2, 3);
console.log(r1);
console.log(r1.width);
console.log(r1.height);*/