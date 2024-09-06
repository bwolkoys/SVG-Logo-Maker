const {Circle, Triangle, Square} = require('./shapes');

// Circle
describe('Circle', () => {
    test ('Circle renders correctly', () => {
        const shape = new Circle()
        var color = ('green')
        shape.setColor ('color')
        const expectedValue = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.color}"/>
        <text x="150" y="125" font-size="55" text-anchor="middle fill="${this.textColor}">${this.text}</text>
        </svg>`
        const actualValue = Circle.render();
        expect(actualValue).toEqual(expectedValue)
    });
});

// Triangle
describe('Triangle', () => {
    test ('Triangle renders correctly', () => {
        const shape = new Triangle()
        var color = ('red')
        shape.setColor ('color')
        const expectedValue = `<svg height="220" width="500" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100,10 150,190 50,190" fill="${this.color}"/>
        <text x="200" y="165" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
        const actualValue = Triangle.render();
        expect(actualValue).toEqual(expectedValue)
    });
});

// Square
describe('Square', () => {
    test ('Square renders correctly', () => {
        const shape = new Square()
        var color = ('blue')
        shape.setColor ('color')
        const expectedValue = `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="400" x="20" y="20" rx="20" ry="20" fill="${this.color}"/>
        <text x="62" y="62" font-size="55" text-anchor="middle" fill="${this.textColor}">${this.text}</text> 
        </svg>`
        const actualValue = Square.render();
        expect(actualValue).toEqual(expectedValue)
    });
});