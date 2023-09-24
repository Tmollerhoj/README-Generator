// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your repository title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please add a discription:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please add a installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please add usage information:',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please add contribution guidelines:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please add test instructions:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license did you use?',
        choices: ['MIT', 'Apache 2.0', 'GNU v3.0', 'BSD 2-Clause', 'BSD 3-Clause', 'Boost Software 1.0', 'Eclipse Public 2.0', 'Mozilla Public 2.0',]
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github Username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your Email?',
    }
];

const writeToFile = data => {
    const fileName = 'README.md';
    fs.writeFile (fileName, data, err => {
        if (err) {
            console.log(err);
            return;
        }
    })
};

// TODO: Create a function to initialize app
const init = () => {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
.then(input => {
    return generateMarkdown(input);
})
.then(banana => {
    return writeToFile(banana);
})
.catch(err => {
    console.log(err);
})
