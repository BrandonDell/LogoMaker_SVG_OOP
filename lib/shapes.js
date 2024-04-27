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
    constructor(text, textColor, fillColor, points) {
      super(text, textColor, fillColor);
      if (points.length !== 3) {
        throw new Error('A triangle must have exactly 3 points.');
      }
      this.points = points;
    }
  
    render() {
      // Code to render a triangle
      console.log('Rendering triangle:', this.text, this.textColor, this.fillColor, this.points);
    }
  }
  
  class Circle extends Shape {
    constructor(text, textColor, fillColor, center, radius) {
      super(text, textColor, fillColor);
      this.center = center;
      this.radius = radius;
    }
  
    render() {
      // Code to render a circle
      console.log('Rendering circle:', this.text, this.textColor, this.fillColor, this.center, this.radius);
    }
  }
  
  class Square extends Shape {
    constructor(text, textColor, fillColor, points) {
      super(text, textColor, fillColor);
      if (points.length !== 4) {
        throw new Error('A square must have exactly 4 points.');
      }
      this.points = points;
    }
  
    // Method to render the square
    render() {
      // Code to render a square
      console.log('Rendering square:', this.text, this.textColor, this.fillColor, this.points);
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
