// requiring needed packages
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");

function askRole() {
    const question = [
        {
            name: "role",
            type: "list",
            choices: ["Manager", "Engineer", "Intern", "Exit"],
            message: "Which role would you like to add?",
        },
    ];

    return inquirer.prompt(question);
}

function askCommon() {
    //array of standard questions for all jobs
    const questions = [
        {
            name: "name",
            type: "input",
            message: "Enter the Employee's name:",
        },
        {
            name: "id",
            type: "input",
            message: "Enter the Employee's ID:",
        },
        {
            name: "email",
            type: "input",
            message: "Enter the Employee's email:",
        },
    ];

    return inquirer.prompt(questions);
}
// inquirer.prompt(questions).then((answers) => {
//     writeToFile("./dist/index.html", generateHTML(answers));
// });

// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, (err) => (err ? console.error(err) : console.log("Success!")));
// }

const test = new Employee("Aidan", "6", "asun", "Employee");
const manager = new Manager("Maddy", "7", "mglight", "Manager", "66");
console.log(test);
console.log(manager);

function init() {
    askRole().then((answer) => {
        if (answer.role === "Exit") {
            console.log("EXITED");
            process.exit();
        } else {
            console.log(answer);
        }
    });
}

init();
