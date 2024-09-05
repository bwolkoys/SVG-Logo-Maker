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

// Square