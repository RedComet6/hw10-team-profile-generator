// requiring needed packages
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");

// function askRole() {
//     const question = [
//         {
//             name: "role",
//             type: "list",
//             choices: ["Manager", "Engineer", "Intern", "Exit"],
//             message: "Which role would you like to add?",
//         },
//     ];

//     return inquirer.prompt(question);
// }

function askCommon() {
    //array of standard questions for all jobs
    const questions = [
        {
            name: "role",
            type: "list",
            choices: ["Manager", "Engineer", "Intern", "Exit"],
            message: "Which role would you like to add?",
        },
        {
            name: "name",
            type: "input",
            when: (answers) => answers.role != "Exit",
            message: "Enter the Employee's name:",
        },
        {
            name: "id",
            type: "input",
            when: (answers) => answers.role != "Exit",
            message: "Enter the Employee's ID:",
        },
        {
            name: "email",
            type: "input",
            when: (answers) => answers.role != "Exit",
            message: "Enter the Employee's email:",
        },
        {
            name: "officeNum",
            type: "input",
            when: (answers) => answers.role === "Manager",
            message: "Enter this manager's office number:",
        },
    ];

    return inquirer.prompt(questions);
}

// function askManager() {
//     const managerQuestion = [
//         {
//             name: "officeNum",
//             type: "input",
//             message: "Enter this manager's office number:",
//         },
//     ];

//     return inquirer.prompt(managerQuestion);
// }

function init() {
    askCommon().then((answers) => {
        if (answers.role === "Exit") {
            console.log("EXITED");
            process.exit();
        } else if (answers.role === "Manager") {
            let manager = new Manager(answers.name, answers.id, answers.email, answers.role, answers.officeNum);
            console.log(manager);
        }
    });
}

init();

// inquirer.prompt(questions).then((answers) => {
//     writeToFile("./dist/index.html", generateHTML(answers));
// });

// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, (err) => (err ? console.error(err) : console.log("Success!")));
// }
