import inquirer from "inquirer";
import fs from "fs/promises";

// --- Inquirer for user input ---
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
      { name: "MIT License", value: "mit" },
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

// --- Sets the README file contents ---
// reference to license badges URL
const licenseBadges = {
  mit: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
  apache: `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
  mozilla: `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`,
};

// displays badges
const displayBadge = license => licenseBadges[license[0]];

// reference to full names of licenses
const licenseNames = {
  mit: "MIT License",
  apache: "Apache 2.0 License",
  mozilla: "Mozilla Public License 2.0"
}

// displays full names of licenses
const displayLicenseName = license => licenseNames[license[0]];

// renders Questions section in the README file
const renderQuestions = (githubUsername, emailAddress) => {
  let questionsText = ` - GitHub Profile: https://github.com/${githubUsername}  
  - Email: ${emailAddress}  
  For questions, issues or suggestions regarding this project, please feel free to drop me an email!`;
  return questionsText;
}

// the README file output text
let readmeDocument = `# ${title}  
${displayBadge(license)}
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
The ${title} is licensed under the ${displayLicenseName(license)}.
## Contributing
${contribution}
## Tests
${tests}
## Questions
${renderQuestions(githubUsername, emailAddress)}
`;

// --- Generates output to README file ---
fs.writeFile("./output/README.md", readmeDocument);