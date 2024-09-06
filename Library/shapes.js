class Shape{
    constructor(text, color, textColor){
        this.text = text,
        this.color = color,
        this.textColor = textColor
    }

};
//Circle
class Circle extends Shape {
    render () {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="80" fill="${this.color}"/>
        <text x="150" y="125" font-size="55" text-anchor="middle fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
};

//Triangle
class Triangle extends Shape {
    render () {
        return `<svg height="220" width="500" xmlns="http://www.w3.org/2000/svg">
        <polygon points="100,10 150,190 50,190" fill="${this.color}"/>
        <text x="200" y="165" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
};

//Square
class Square extends Shape {
    render () {
        return `<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="200" x="10" y="10" rx="0" ry="0" fill="${this.color}"/>
        <text x="62" y="62" font-size="55" text-anchor="middle" fill="${this.textColor}">${this.text}</text> 
        </svg>`
    }
};

module.exports = {Circle, Triangle, Square}