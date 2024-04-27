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
        return this.generateSVG(text, textColor, shapeType, fillColor);
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
// function createSVG() {
//   const xmlns = "http://www.w3.org/2000/svg";
//   const svg = document.createElementNS(xmlns, "svg");
//   svg.setAttributeNS(null, "width", "300");
//   svg.setAttributeNS(null, "height", "200");
//   document.body.appendChild(svg);
//   return svg;
// }

module.exports = CLI;

// const cli = new CLI();
// cli.run().then(svgString => console.log(svgString));

// example fs.writefile used in another project
// const filename = '${data.name.toLowerCase().split(' ').join('')}.json';
// fs.writeFile(filename, JSON.stringify(data, null, '\t'),
//   (err) =>
//     err ? console.log(err) : console.log('Success')
// );

//     .then(({ text, textColor, shapeType, fillColor }) => {
//       shape = new Square();
//       break;
//     })

//     shape.setColor(shapeColor);

//     const svg = new SVG();
//     svg.setText(text, textColor);
//     svg.setShape(shape);
//     return writeFile("logo.svg", svg.render());
// }
// module.exports = CLI;
