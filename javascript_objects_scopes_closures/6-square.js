#!/usr/bin/node

// 5-square.js
class Square {
    constructor(size) {
      if (size <= 0 || !Number.isInteger(size)) {
        return {};
      }
      this.width = size;
      this.height = size;
    }
  
    // Instance method to print the square using the character c (default is X)
    charPrint(c) {
      if (c === undefined) {
        c = 'X'; // Default character is X
      }
  
      // Print the square using the specified character c
      for (let i = 0; i < this.height; i++) {
        console.log(c.repeat(this.width));
      }
    }
  }
  
  // Square class definition, inherits from Square in 5-square.js
  class Square extends Square {
    constructor(size) {
      // Call the constructor of the parent class (Square)
      super(size);
    }
  }
  module.exports = Square;