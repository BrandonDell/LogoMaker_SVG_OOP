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
  

  
module.exports = { Circle, Triangle, Square };


