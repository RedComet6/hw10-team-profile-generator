class Employee {
    constructor(name, id, email, job) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.job = job;
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.job;
    }
}

module.exports = Employee;
