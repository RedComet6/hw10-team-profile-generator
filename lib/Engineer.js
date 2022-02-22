const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, role, githubUser) {
        super(name, id, email, role);
        this.githubUser = githubUser;
    }

    getRole() {
        return this.role;
    }

    getGitHubUser() {
        return this.githubUser;
    }
}

module.exports = Engineer;
