// requiring needed packages
const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// creates questions and returns inquirer prompt
function askCommon() {
    //array of questions to be prompted to user
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

// initialize app to ask questions, run loop, generate cards and html
async function init() {
    // initialize variables
    const employeeArray = [];
    const maxEmployees = 5;
    let tallyEmployees = 0;
    let userFinish = false;
    let newEmployee;

    // while loop iterates code chunk until user selects "finish" or the maximum number of employees have been added
    while (userFinish !== true && tallyEmployees < maxEmployees) {
        // inquirer prompts user with questions array from above
        await askCommon()
            .then((answers) => {
                // switch to determine what to do depending on user input
                switch (answers.role) {
                    // if user chooses Finish, end loop
                    case "Finish":
                        console.log(`Employee array: ${employeeArray}`);
                        userFinish = true;
                        console.log("\nFinished adding Employees, generating HTML\n");
                        break;
                    // if user chooses manager, create new manager and push to employee array
                    case "Manager":
                        newEmployee = new Manager(answers.name, answers.id, answers.email, answers.role, answers.officeNum);
                        employeeArray.push(newEmployee);
                        console.log("\nA manager was added.\n");
                        break;
                    // if user chooses engineer, create new engineer and push to employee array
                    case "Engineer":
                        newEmployee = new Engineer(answers.name, answers.id, answers.email, answers.role, answers.githubUser);
                        employeeArray.push(newEmployee);
                        console.log("\nAn engineer was added.\n");
                        break;
                    // if user chooses intern, create new intern and push to employee array
                    case "Intern":
                        newEmployee = new Intern(answers.name, answers.id, answers.email, answers.role, answers.school);
                        employeeArray.push(newEmployee);
                        console.log("\nAn intern was added.\n");
                        break;
                }
            })
            // catch and display errors
            .catch((err) => console.error("There was an error", err));

        // increment employee count, exits the loop if max number is reached
        tallyEmployees++;
    }

    // create card section html using the employee array
    let cardSection = generateCards(employeeArray);

    // write html file using card section variable
    writeToFile("./dist/index.html", generateHTML(cardSection));
}

// generates card html for each employee added by user
function generateCards(employees) {
    // initialize variables
    let uniqueInfo = "";
    let cardHTML = "";

    // loops through employee array and creates card html for each employee
    employees.forEach((employee) => {
        // sets html for the unique question associated with each role
        if (employee.officeNum) {
            uniqueInfo = `Office Number: ${employee.officeNum}`;
        } else if (employee.githubUser) {
            uniqueInfo = `Github: <a href="https://github.com/${employee.githubUser}" target="_blank">${employee.githubUser}</a>`;
        } else if (employee.school) {
            uniqueInfo = `School: ${employee.school}`;
        }

        // creates and appends new cards as employees are looped through
        cardHTML += `<div class="border border-success card m-5 rounded">
        <div class="bg-success p-3 text-white">
            <div>
                <h3>${employee.name}</h3>
            </div>
            <div>
                <h4>${employee.role}</h4>
            </div>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${employee.id}</li>
            <li class="list-group-item">Email:
                <a href="mailto:${employee.email}">${employee.email}</a>
            </li>
            <li class="list-group-item">${uniqueInfo}</li>
        </ul>
    </div>`;
    });

    return cardHTML;
}

// creates html to be saved to new file
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
    <header class="navbar bg-info text-white justify-content-center align-items-center">
        <h1>My Team:</h1>
    </header>
    <div class="row justify-content-center">
        ${cards}
    </div>
    </body>
            
    </html>`;
}

// writes file to system
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => (err ? console.error(err) : console.log("HTML file generated!")));
}

// runs app
init();
