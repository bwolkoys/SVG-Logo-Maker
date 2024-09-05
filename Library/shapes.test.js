const {Circle, Triangle, Square} = require('./shapes');

// Circle
describe('Circle', () => {
    test ('Circle renders correctly', () => {
        const shape = new Circle()
        var color = ('green')
        shape.setColor ('color')
        expect (shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${color}"/>`)
    });
});

// Triangle
describe('Triangle', () => {
    test ('Triangle renders correctly', () => {
        const shape = new Triangle()
        var color = ('red')
        shape.setColor ('color')
        expect (shape.render()).toEqual(`<polygon height="100%" width="100%" points="200,50 70,275 330,275" fill="${color}"/>`)
    });
});

// Square
describe('Square', () => {
    test ('Square renders correctly', () => {
        const shape = new Square()
        var color = ('blue')
        shape.setColor ('color')
        expect (shape.render()).toEqual(`<rect width="400" height="400" fill="${color}"/>`)
    });
});