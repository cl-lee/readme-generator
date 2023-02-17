import inquirer from "inquirer";
import fs from "fs/promises";
// const path = require('path');
// const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [];

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {}

// function call to initialize program
// init();

// inquirer for user's input
let {
  title,
  description,
  installation,
  usage,
  contribution,
  tests,
  license,
  githubUsername,
  emailAddress,
} = await inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "What is the project's title?",
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a description of the project",
  },
  {
    type: "input",
    name: "installation",
    message: "Please enter the installation instructions",
  },
  {
    type: "input",
    name: "usage",
    message: "Please enter the usage instructions",
  },
  {
    type: "input",
    name: "contribution",
    message: "Please enter the contribution guidelines",
  },
  {
    type: "input",
    name: "tests",
    message: "Please enter the test instructions",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Select the application's license",
    choices: [
      { name: "MIT", value: "mit" },
      { name: "Apache 2.0 License", value: "apache" },
      { name: "Mozilla Public License 2.0", value: "mozilla" },
    ],
  },
  {
    type: "input",
    name: "githubUsername",
    message: "Please enter the your GitHub username (for contact)",
  },
  {
    type: "input",
    name: "emailAddress",
    message: "Please enter the your email address (for contact)",
  },
]);

// Sets the README file contents
let readmeDocument = `# ${title}  

## Description
${description}  
## Table of Contents
- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)
## Installation
${installation}  
## Usage
${usage}
## License
${license}
## Contributing
${contribution}
## Tests
${tests}
## Questions
${renderQuestions(githubUsername, emailAddress)}
`;

// renders Questions section in the README file
function renderQuestions(githubUsername, emailAddress) {
  let questionsText = `For questions, issues or suggestions, please feel free to reach me on my GitHub, or drop me an email!  
    - GitHub: https://github.com/${githubUsername}  
    - Email Address: ${emailAddress}
`;
  return questionsText;
}

// reference to badges URL for licenses
const licenseBadges = [
  {
    mit: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
  },
  {
    apache: `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
  },
  {
    mozilla: `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`,
  },
];

// displays badges
function displayBadges(license) {}

fs.writeFile("./sample/README.md", readmeDocument);
// console.log("success!");

// record screen for this app's readme!
