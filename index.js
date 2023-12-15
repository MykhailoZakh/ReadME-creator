// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    "What is title name of your project?",
    "Provide a short description explaining why did you build this project?",
    "What problem does it solve?",
    "What was your motivation?",
    "What are the steps required to install your project?",
    "Provide instructions and examples for use",
    "List your collaborators, if any",
    "Add your test instructions",
    "What is good email to reach you with additional questions?",
    "What is your GitHub username?",
    "What license do you want?",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
const generatedFile = generateMarkdown(data);
// console.log(generatedFile);
fs.writeFile(`${fileName}.md`, generatedFile, (err) => err ? console.log("something wrong") : console.log('succseed!'));
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
        {
            type: "list",
            name: "license",
            message: questions[10],
            choices: ["none", "MIT", "GPLv2"],
        },
        {
            type: 'input',
            name: 'title',
            message: questions[0]
        },
        {
            type: 'input',
            name: 'projectWhy',
            message: questions[1]
        },
        {
            type: 'input',
            name: 'problemSolve',
            message: questions[2]
        },
        {
            type: 'input',
            name: 'motivation',
            message: questions[3]
        },
        {
            type: 'input',
            name: 'installationSteps',
            message: questions[4]
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[5]
        },
        {
            type: 'input',
            name: 'cont',
            message: questions[6]
        },
        {
            type: 'input',
            name: 'tests',
            message: questions[7]
        },
        {
            type: 'input',
            name: 'email',
            message: questions[8]
        },
        {
            type: 'input',
            name: 'username',
            message: questions[9]
        },

    ]).then((data) => writeToFile("README", data))
}

// Function call to initialize app
init();
