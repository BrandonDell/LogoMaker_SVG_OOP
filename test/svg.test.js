const SVG = require("../lib/svg");
const { square } = require("../lib/shapes")

class CLI {
    run() {
        .then(({ text, textColor, shapeType, fillColor }) => {
            default;
    shape = new Triangle();
    break;
}
const svg = new SVG();
svg.setText(text.textColor);
svg.setShape(shape);
return writeFile("logo.svg", svg.render());
}

.then(() => {
    console.log("Generated logo.svg");
})
    .catch((error) => {
        console.log(error);
        console.log("Something went wrong.");
    });
}

module.exports = CLI;