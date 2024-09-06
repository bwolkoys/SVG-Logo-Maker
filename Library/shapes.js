class Shape{
    constructor(){
        this.color=''
    }
    setColor(color){
        this.color=(color);
    }
};
//Circle
class Circle extends Shape {
    render () {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
    }
};

//Triangle
class Triangle extends Shape {
    render () {
        return `<polygon height="100%" width="100%" points="200,50 70,275 330,275" fill="${this.color}"/>`
    }
};

//Square
class Square extends Shape {
    render () {
        return `<rect width="400" height="400" fill="${this.color}"/>`
    }
};

module.exports = {Circle, Triangle, Square}