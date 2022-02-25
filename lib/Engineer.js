// require employee as base to extend
const Employee = require("./Employee");

// creates new class engineer that is an extension of employee class, with github username added
class Engineer extends Employee {
    constructor(name, id, email, role, githubUser) {
        super(name, id, email, role);
        this.githubUser = githubUser;
    }

    // methods
    getRole() {
        return this.role;
    }

    getGithubUser() {
        return this.githubUser;
    }
}

// export to require in other files
module.exports = Engineer;
