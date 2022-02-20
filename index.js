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
//             choices: ["Manager", "Engineer", "Intern", "Finish"],
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
            choices: ["Manager", "Engineer", "Intern", "Finish"],
            message: "Which role would you like to add?",
        },
        {
            name: "name",
            type: "input",
            when: (answers) => answers.role != "Finish",
            message: "Enter the Employee's name:",
        },
        {
            name: "id",
            type: "input",
            when: (answers) => answers.role != "Finish",
            message: "Enter the Employee's ID:",
        },
        {
            name: "email",
            type: "input",
            when: (answers) => answers.role != "Finish",
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

async function init() {
    const employeeArray = [];
    const maxEmployees = 5;
    let tallyEmployees = 0;
    let userFinish = false;
    let newEmployee;

    // for (let tally = 0; tally < maxEmployees; tally++) {
    //     const promise = new Promise((resolve, reject) => {
    //         askCommon()
    //             .then((answers) => {
    //                 if (answers.role === "Finish") {
    //                     console.log("FINISHED");
    //                     console.log(`Employee array: ${employeeArray}`);
    //                     resolve("Finished adding Employees, time to make HTML");
    //                     // RUN HTML GENERATOR HERE
    //                     // process.exit();
    //                 } else if (answers.role === "Manager") {
    //                     newEmployee = new Manager(answers.name, answers.id, answers.email, answers.role, answers.officeNum);
    //                     employeeArray.push(JSON.stringify(newEmployee));
    //                     resolve("added an employee");
    //                 }
    //             })
    //             .catch((err) => console.error("There was an error", err));
    //     });

    //     const result = await promise;
    //     console.log(result);
    // }

    while (userFinish !== true && tallyEmployees < maxEmployees) {
        const promise = new Promise((resolve, reject) => {
            askCommon()
                .then((answers) => {
                    if (answers.role === "Finish") {
                        console.log("FINISHED");
                        console.log(`Employee array: ${employeeArray}`);
                        userFinish = true;
                        resolve("Finished adding Employees, time to make HTML");
                        // RUN HTML GENERATOR HERE
                        // process.exit();
                    } else if (answers.role === "Manager") {
                        newEmployee = new Manager(answers.name, answers.id, answers.email, answers.role, answers.officeNum);
                        employeeArray.push(JSON.stringify(newEmployee));
                        resolve("added an employee");
                    }
                })
                .catch((err) => console.error("There was an error", err));
        });
        tallyEmployees++;
        const result = await promise;
        console.log(result);
    }
}

init();

// inquirer.prompt(questions).then((answers) => {
//     writeToFile("./dist/index.html", generateHTML(answers));
// });

// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, (err) => (err ? console.error(err) : console.log("Success!")));
// }
