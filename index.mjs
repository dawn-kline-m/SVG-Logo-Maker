import fs from 'fs';
import inquirer from 'inquirer';
import { Circle, Square, Triangle } from './lib/shapes.js';

const createSVG = (answers) => {
    const { letterCode, shapeType, textColor, shapeColor } = answers;

    let shape;
    if (shapeType === "circle") {
        shape = new Circle(shapeColor);
    }
    else if (shapeType === "square") {
        shape = new Square(shapeColor);
    }
    else {
        shape = new Triangle(shapeColor);
    }
    shape.setColor(shapeColor);

    let shapeInfo =
        `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
          ${shape.render()}
             <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${letterCode}</text>
             </svg>`

    return `
${shapeInfo}
  `;
};

inquirer
    .prompt([
        {
            type: 'input',
            name: 'letterCode',
            message: 'Enter up to three characters:',
        },
        {
            type: 'list',
            name: 'shapeType',
            message: 'Choose the shape:',
            choices: ['circle', 'square', 'triangle']
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What is the color (OR a hexadecimal number) of the text:',
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What is the color (OR a hexadecimal number) of the shape:',
        },
    ])
    .then((answers) => {
        const newSVGFile = createSVG(answers);
        fs.writeFile('logo.svg', newSVGFile, (err) =>
            err ? console.error(err) : console.log('Generated logo.svg')

        );

    });
