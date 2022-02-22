// requiring needed packages
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

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
        {
            name: "githubUser",
            type: "input",
            when: (answers) => answers.role === "Engineer",
            message: "Enter this engineer's GitHub username:",
        },
        {
            name: "school",
            type: "input",
            when: (answers) => answers.role === "Intern",
            message: "Enter the school this intern attends:",
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

    while (userFinish !== true && tallyEmployees < maxEmployees) {
        const promise = new Promise((resolve, reject) => {
            askCommon()
                .then((answers) => {
                    switch (answers.role) {
                        case "Finish":
                            console.log(`Employee array: ${employeeArray}`);
                            userFinish = true;
                            resolve("\nFinished adding Employees, generating HTML\n");
                            break;
                        case "Manager":
                            newEmployee = new Manager(answers.name, answers.id, answers.email, answers.role, answers.officeNum);
                            employeeArray.push(newEmployee);
                            resolve("\nA manager was added.\n");
                            break;
                        case "Engineer":
                            newEmployee = new Engineer(answers.name, answers.id, answers.email, answers.role, answers.githubUser);
                            employeeArray.push(newEmployee);
                            resolve("\nAn engineer was added.\n");
                            break;
                        case "Intern":
                            newEmployee = new Intern(answers.name, answers.id, answers.email, answers.role, answers.school);
                            employeeArray.push(newEmployee);
                            resolve("\nAn intern was added.\n");
                            break;
                    }
                })
                .catch((err) => console.error("There was an error", err));
        });
        tallyEmployees++;
        const result = await promise;
        console.log(result);
    }

    let cardSection = generateCards(employeeArray);
    writeToFile("./dist/index.html", generateHTML(cardSection));
}

function generateCards(employees) {
    let cardHTML = "";
    employees.forEach((employee) => {
        cardHTML += `<div>
        <div>
            <h3>${employee.name}</h3>
        </div>
        <div>
            <h4>${employee.role}</h4>
        </div>
        <ul>
            <li>${employee.id}</li>
            <li>${employee.email}</li>
            <li>Unique</li>
        </ul>
    </div>`;
    });

    return cardHTML;
}

function generateHTML(cards) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <title>Team Profile Generator</title>
    </head>
    
    <body>
        <header class="navbar navbar-dark bg-dark justify-content-center align-items-center">
            <h1>My Team:</h1>
        </header>
        <div class="row">
            ${cards}
        </div>
    </body>
    
    </html>`;
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => (err ? console.error(err) : console.log("HTML file generated!")));
}

init();
