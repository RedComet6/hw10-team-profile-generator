// require employee as base to extend
const Employee = require("./Employee");

// creates new class intern that is an extension of employee class, with school added
class Intern extends Employee {
    constructor(name, id, email, role, school) {
        super(name, id, email, role);
        this.school = school;
    }

    // methods
    getRole() {
        return this.role;
    }

    getSchool() {
        return this.school;
    }
}

// export to require in other files
module.exports = Intern;
