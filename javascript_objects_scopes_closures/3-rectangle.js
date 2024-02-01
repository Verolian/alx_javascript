class Rectangle {
    constructor(w, h) {
      if (w <= 0 || h <= 0 || !Number.isInteger(w) || !Number.isInteger(h)) {
        // Create an empty object if w or h is invalid
        return {};
      }
  
      this.width = w;
      this.height = h;
    }
  
    print() {
      if (this.width && this.height) {
        // Print the rectangle using X characters
        for (let i = 0; i < this.height; i++) {
          console.log("X".repeat(this.width));
        }
      } else {
        console.log("Invalid rectangle");
      }
    }
  }