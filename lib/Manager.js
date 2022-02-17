const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, job, officeNum) {
        super(name, id, email);
        this.job = job;
        this.officeNum = officeNum;
    }

    getRole() {
        return this.job;
    }

    getOfficeNum() {
        return this.officeNum;
    }
}

module.exports = Manager;
