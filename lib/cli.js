const { default: inquirer } = require('inquirer');
const colors = require('colors');
const SVG = require('../lib/svg');
const { Circle, Triangle, Square } = require('../lib/shapes');

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
        type: 'input',
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
        type: 'input',
        name: 'fillColor',
        message: 'What color would you like to use to fill in your shape?',
        choices: ['black', 'blue', 'grey', 'green', 'yellow', 'red', 'white'],
      },
    ]);
  
      return this.generateSVG(text, textColor, ShapeType, ShapeColor);
  }
    generateSVG(text, textColor, shapeType, fillColor) {
        const svg = createSVG().size(300, 200);

        // Draw Shape based on shapeType
        let shape;
          swith(shapeType) {
            case 'circle':
             shape = svg.circle(100).center(100, 100);
            break;
            case 'triangle':
             shape = svg.polygon('150, 18 244, 182 56, 182');
            break;
            case 'square':
             shape = svg.rect(100, 100).center(100, 100);
            break;
        }
        // apply fill color to shape
        shape.fill(fillColor);

        // add text to svg.....what about font size?
        svg.text(text).fill(textColor).font({ size: 24 });

        return svg.svg
    } 
}

const cli = new CLI();
cli.run().then(svgString => console.log(svgString));




  
  
