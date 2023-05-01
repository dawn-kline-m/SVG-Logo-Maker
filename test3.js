import fs from 'fs';
import inquirer from 'inquirer';
import Circle from './lib/shapes.js';
import Triangle from './lib/shapes.js';
import Square from './lib/shapes.js';

//const fetch = require('node-fetch');


const createSVG = (answers) => {
    const { letterCode, shape, textColor, shapeColor } = answers;

    let shapeInfo;
    if (shape === 'circle') {
        shapeInfo =
            `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="100" r="80" fill="green" />
             <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${letterCode}</text>
             </svg>`

    }
    else if (shape === 'square') {
        shapeInfo =
            `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="red" />
             <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${letterCode}</text>
             </svg>`
    }
    else if (shape === "triangle") {
        shapeInfo =
            `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
             <polygon points="150,20 20,180 280,180" fill="blue" />
            <text x="150" y="135" font-size="55" text-anchor="middle" fill="${textColor}">${letterCode}</text>
          </svg>`
    }
    else { }
    return `
${shapeInfo}
  `;
};

inquirer
    .prompt([
        {
            type: 'input',
            name: 'letterCode',
            message: 'Type in three characters',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose the shape:',
            choices: ['circle', 'square', 'triangle']
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'What is the color text:',
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'What is the color of the shape:',
        },

    ])
    .then((answers) => {
        const newSVGFile = createSVG(answers);
        fs.writeFile('new.svg', newSVGFile, (err) =>
            err ? console.error(err) : console.log('new.svg generated successfully!')

        );
    });
