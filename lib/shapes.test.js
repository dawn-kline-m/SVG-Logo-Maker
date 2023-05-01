const { Circle, Square, Triangle } = require("./shapes")

// checking to see if circle, square, and triangle render correctly

// Circle Shape
describe('Circle', () => {
    test('renders correctly', () => {
        const shape = new Circle();
        let color = ('orange')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${color}" />`);

    });
});
// Square Shape
describe('Square', () => {
    test('renders correctly', () => {
        const shape = new Square();
        let color = ('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect width="100%" height="100%" fill="${color}" />`);

    });
});
// Triangle Shape
describe('Triangle', () => {
    test('renders correctly', () => {
        const shape = new Triangle();
        let color = ('red')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="150,20 20,180 280,180" fill="${color}" />`);

    });
});