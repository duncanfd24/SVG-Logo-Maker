const { Circle, Square, Triangle } = require("./shapes");

describe("Shape Classes", () => {
    test("Circle renders correctly", () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
    });

    test("Square renders correctly", () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon x="100" y="100" width="100" height="100" fill="blue" />');
    });

    test("Triangle renders correctly", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});