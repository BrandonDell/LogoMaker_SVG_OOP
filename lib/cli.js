const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('../lib/shapes');
const fs = require('fs');
class CLI {
  run() {
    return inquirer.prompt([
        {
          type: 'input',
          name: 'text',
          message:
            'What text would you like to use for the logo (no more than three)?',
          validate: function (input) {
            if (input.length <= 3) {
              return true;
            } else {
              return 'Please enter up to three characters';
            }
          },
        },
        {
          type: 'list',
          name: 'textColor',
          message: 'What color would you like to use for your text?',
          choices: ['black', 'blue', 'grey', 'green', 'yellow', 'red', 'white'],
        },
        {
          type: 'list',
          name: 'shapeType',
          message: 'What shape would you like to use?',
          choices: ['circle', 'triangle', 'square'],
        },
        {
          type: 'list',
          name: 'fillColor',
          message: 'What color would you like to use to fill in your shape?',
          choices: ['black', 'blue', 'grey', 'green', 'yellow', 'red', 'white'],
        },
      ])
      .then(({ text, textColor, shapeType, fillColor }) => {
        return this.generateSVG(text, textColor, shapeType, fillColor,);
      });
  }
  generateSVG(text, textColor, shapeType, fillColor) {

    // Draw Shape based on shapeType
    let shape;
    switch (shapeType) {
      case 'circle':
        shape = new Circle(text, textColor, fillColor,);
        break;
      case 'triangle':
        shape = new Triangle(text, textColor, fillColor,);
        break;
      case 'square':
        shape = new Square(text, textColor, fillColor,);
        break;
    }
   
    fs.writeFileSync("logo.svg", shape.render());
  }
}

module.exports = CLI;

