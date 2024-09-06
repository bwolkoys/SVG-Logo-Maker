const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require("./Library/shapes"); 
const { error } = require('console');

inquirer
    .prompt ([
        {
            type: 'input',
            message: 'enter up to three characters',
            name: 'characters',
        },
        {
            type: 'input',
            message: 'enter the text color',
            name: 'textColor', 
        },
        {
            type: 'list',
            message: 'pick a shape below',
            choices: ['Circle', 'Triangle', 'Square'],
            name: 'shape',
        },
        {
            type: 'input',
            message: 'enter the shape color',
            name: 'shapeColor', 
        }
    ])

    .then((response) => {
        if(response.shape === 'Circle') {
            const circle = new Circle(response.characters, response.textColor, response.shapeColor)
            fs.writeFile('./Examples/Logo.svg', circle.render(), (error) => {
                if(error) {
                    console.log(error);
                }
            });
        } else if(response.shape === 'Triangle') {
            const triangle = new Triangle(response.characters, response.textColor, response.shapeColor)
            fs.writeFile('./Examples/Logo.svg', triangle.render(), (error) => {
                if(error) {
                    console.log(error);
                }
            });
        } else {
            const square = new Square(response.characters, response.textColor, response.shapeColor)
            fs.writeFile('./Examples/Logo.svg', square.render(), (error) => {
                if(error) {
                    console.log(error);
                }
            });
        }
    })

    .then(() => {
        return console.log("generated the Logo.svg");
    });