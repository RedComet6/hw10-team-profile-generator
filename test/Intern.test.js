const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an object with a name, ID, email, role, and school if provided valid arguments", () => {
            const employee = new Intern("Max", 1, "mpalmer@gmail.com", "Intern", "Purdue");

            // Verify that the new object has the correct properties
            expect(employee.name).toEqual("Max");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("mpalmer@gmail.com");
            expect(employee.role).toEqual("Intern");
            expect(employee.school).toEqual("Purdue");
        });
    });

    describe("Methodizing", () => {
        it("should return the employee's name when getName() is called", () => {
            const employee = new Intern("Max", 1, "mpalmer@gmail.com", "Intern", "Purdue");

            // verify method returns correct value
            expect(employee.getName()).toEqual("Max");
        });

        it("should return the employee's id when getId() is called", () => {
            const employee = new Intern("Max", 1, "mpalmer@gmail.com", "Intern", "Purdue");

            // verify method returns correct value
            expect(employee.getId()).toEqual(1);
        });

        it("should return the employee's email when getEmail() is called", () => {
            const employee = new Intern("Max", 1, "mpalmer@gmail.com", "Intern", "Purdue");

            // verify method returns correct value
            expect(employee.getEmail()).toEqual("mpalmer@gmail.com");
        });

        it("should return the employee's role when getRole() is called", () => {
            const employee = new Intern("Max", 1, "mpalmer@gmail.com", "Intern", "Purdue");

            // verify method returns correct value
            expect(employee.getRole()).toEqual("Intern");
        });

        it("should return the employee's school when getSchool() is called", () => {
            const employee = new Intern("Max", 1, "mpalmer@gmail.com", "Intern", "Purdue");

            // verify method returns correct value
            expect(employee.getSchool()).toEqual("Purdue");
        });
    });
});
