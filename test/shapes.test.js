const { Triangle, Circle, Square } = require("../lib/shapes");

describe("Circle", () => {
    test("should render a circle", () => {
        const expectedCircle = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="grey" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">BD</text></svg>'
        const circle = new Circle('BD', 'blue', 'grey');
        expect(circle.render()).toEqual(expectedCircle)
    })
})

describe("Square", () => {
    test("should render a square", () => {
        const expectedSquare = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" fill="grey" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">BD</text></svg>'
        const square = new Square('BD', 'blue', 'grey');
        expect(square.render()).toEqual(expectedSquare)
    })
})

describe("Triangle", () => {
    test("should render a triangle", () => {
        const expectedTriangle = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="grey" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="blue">BD</text></svg>'
        const triangle = new Triangle('BD', 'blue', 'grey');
        expect(triangle.render()).toEqual(expectedTriangle)
    })
})