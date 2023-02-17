import inquirer from 'inquirer';
import fs from 'fs/promises';
// const path = require('path');
// const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
// init();


// ***PSEUDO CODES***
// inquirer for user's input
// inquirer 
let {title, description, installation, usage, construction, test, license} = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: "What is the project's title?",
        },
        {
            type: 'input',
            name: 'description',
            message: "Please enter a description of the project",
        },
        // {
        //     type: 'input',
        //     name: 'installation',
        //     message: "Please enter the installation instructions",
        // },
        // {
        //     type: 'input',
        //     name: 'usage',
        //     message: "Please enter the usage instructions",
        // },
        // {
        //     type: 'input',
        //     name: 'contribution',
        //     message: "Please enter the contribution guidelines",
        // },
        // {
        //     type: 'input',
        //     name: 'test',
        //     message: "Please enter the test instructions",
        // },
        {
            type: 'checkbox',
            name: "license",
            message: "Select the application's license",
            choices: [
              { name: 'MIT', value: 'mit' },
              { name: 'Mozilla Public License 2.0', value: 'mozilla' },
            ],
        },
    ])

// Sets the README file contents
let readmeDocument = 
`# ${title}
## Description
${description}
## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)
`

fs.writeFile("./sample/SAMPLE.md", readmeDocument);
// console.log("success!");




// record screen for this app's readme!