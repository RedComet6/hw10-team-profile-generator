// require employee as base to extend
const Employee = require("./Employee");

// creates new class manager that is an extension of employee class, with office number added
class Manager extends Employee {
    constructor(name, id, email, role, officeNum) {
        super(name, id, email, role);
        this.officeNum = officeNum;
    }

    // memthods
    getRole() {
        return this.role;
    }

    getOfficeNum() {
        return this.officeNum;
    }
}

// export to require in other files
module.exports = Manager;
