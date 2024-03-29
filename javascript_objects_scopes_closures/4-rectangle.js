// Rectangle class definition
class Rectangle {
    // Constructor
    constructor(w, h) {
      // Check if w or h is not a positive integer or equal to 0
      if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
        // If conditions are met, create an empty object
        return {};
      }
  
      // Initialize instance attributes
      this.width = w;
      this.height = h;
    }
  
    // Instance method to print the rectangle using the character X
    print() {
      // Check if the object is empty (indicating invalid input)
      if (Object.keys(this).length === 0) {
        console.log("");  // Print an empty line for an empty object
      } else {
        // Print the rectangle using the character X
        for (let i = 0; i < this.height; i++) {
          console.log("X".repeat(this.width));
        }
      }
    }
  
    // Instance method to exchange the width and height of the rectangle
    rotate() {
      // Swap the values of width and height
      [this.width, this.height] = [this.height, this.width];
    }
  
    // Instance method to double the width and height of the rectangle
    double() {
      // Multiply the values of width and height by 2
      this.width *= 2;
      this.height *= 2;
    }
  };
  module.exports = Rectangle;