const CLI = require("../lib/cli");

class Shape {
    constructor(text, textColor, fillColor) {
      this.text = text;
      this.textColor = textColor;
      this.fillColor = fillColor;
    }
  
    // Method to render the shape
    render() {
      throw new Error('render() method must be implemented in the child class.');
    }
  }
  
  class Triangle extends Shape {
    constructor(text, textColor, fillColor,) {
      super(text, textColor, fillColor);
    }
  
    render() {
      // Code to render a triangle
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.fillColor}" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
  }
  
  class Circle extends Shape {
    constructor(text, textColor, fillColor, center, radius) {
      super(text, textColor, fillColor);
    }
  
    render() {
      // Code to render a circle
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.fillColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
  }
  
  class Square extends Shape {
    constructor(text, textColor, fillColor, points) {
      super(text, textColor, fillColor);
      
    }
  
    // Method to render the square
    render() {
      // Code to render a square
      return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="${this.fillColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
  }
  
  // Example usage
  const triangle = new Triangle('Triangle', 'black', 'red', [[0, 0], [50, 100], [100, 0]]);
  triangle.render();
  
  const circle = new Circle('Circle', 'white', 'blue', [50, 50], 30);
  circle.render();
  
  const square = new Square('Square', 'white', 'green', [[10, 10], [90, 10], [90, 90], [10, 90]]);
  square.render();
  
module.exports = { Circle, Triangle, Square };

// Polygon points example:
// <polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180"/>

// Path example: so you can draw rectangles-triangles-squares. 
/* <path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/> */
