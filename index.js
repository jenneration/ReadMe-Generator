// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
// const path = require("path");

// TODO: Create an array of questions for user input
const questions = [{
        type: "input",
        message: "What is your project title?",
        name: "title"
    },
    {
        type: "input",
        message: "Provide a short description of your project.",
        name: "description"
    },
    {
        type: "input",
        message: "Provide installation instructions for your project.",
        name: "installation"
    },
    {
        type: "input",
        message: "Describe how to use this application.",
        name: "usage"
    },
    {
        type: "checkbox",
        message: "What are the guidelines for others to contribute to your project?",
        choices: ["Review Code", "Bug/Features"],
        name: "contributing"
    },
    {
        type: "input",
        message: "List test instructions, if any.",
        name: "testing"
    },
    {
        type: "list",
        message: "Do you have any licenses?",
        choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"],
        name: "license"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    }
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//     return fs.writeFileSync(path.join(process.cwd(), fileName), data)
// }


// fs.writeFile('README.md', data, (err) =>
//     err ? console.error(err) : console.log('Success!')
// );




// TODO: Create a function to initialize app
// function init() {
//     inquirer.prompt(questions).then(response => {
//         writeToFile("README.md", generateMarkdown(response))
//     })
// }
const data = inquirer.prompt.response;

function init() {
    inquirer.prompt(questions).then(response => {
        fs.writeFile('READMEsample.md', generateMarkdown(response), function(err) {
            if (err) throw err;
            console.log("Written");
        });
    })
}






// Function call to initialize app
init();