const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with a name, ID, email, and role if provided valid arguments", () => {
            const employee = new Employee("Max", 1, "mpalmer@gmail.com", "Employee");

            // Verify that the new object has the correct properties
            expect(employee.name).toEqual("Max");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("mpalmer@gmail.com");
            expect(employee.role).toEqual("Employee");
        });
    });

    describe("Methodizing", () => {
        it("should return the employee's name when getName() is called", () => {
            const employee = new Employee("Max", 1, "mpalmer@gmail.com", "Employee");

            // verify method returns correct value
            expect(employee.getName()).toEqual("Max");
        });

        it("should return the employee's id when getId() is called", () => {
            const employee = new Employee("Max", 1, "mpalmer@gmail.com", "Employee");

            // verify method returns correct value
            expect(employee.getId()).toEqual(1);
        });

        it("should return the employee's email when getEmail() is called", () => {
            const employee = new Employee("Max", 1, "mpalmer@gmail.com", "Employee");

            // verify method returns correct value
            expect(employee.getEmail()).toEqual("mpalmer@gmail.com");
        });

        it("should return the word Employee as a string when getRole() is called", () => {
            const employee = new Employee("Max", 1, "mpalmer@gmail.com", "Employee");

            // verify method returns correct value
            expect(employee.getRole()).toEqual("Employee");
        });
    });
});
