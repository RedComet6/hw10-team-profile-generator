const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object with a name, ID, email, role, and office number if provided valid arguments", () => {
            const employee = new Manager("Max", 1, "mpalmer@gmail.com", "Manager", 123);

            // Verify that the new object has the correct properties
            expect(employee.name).toEqual("Max");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("mpalmer@gmail.com");
            expect(employee.role).toEqual("Manager");
            expect(employee.officeNum).toEqual(123);
        });
    });

    describe("Methodizing", () => {
        it("should return the employee's name when getName() is called", () => {
            const employee = new Manager("Max", 1, "mpalmer@gmail.com", "Manager", 123);

            // verify method returns correct value
            expect(employee.getName()).toEqual("Max");
        });

        it("should return the employee's id when getId() is called", () => {
            const employee = new Manager("Max", 1, "mpalmer@gmail.com", "Manager", 123);

            // verify method returns correct value
            expect(employee.getId()).toEqual(1);
        });

        it("should return the employee's email when getEmail() is called", () => {
            const employee = new Manager("Max", 1, "mpalmer@gmail.com", "Manager", 123);

            // verify method returns correct value
            expect(employee.getEmail()).toEqual("mpalmer@gmail.com");
        });

        it("should return the employee's role when getRole() is called", () => {
            const employee = new Manager("Max", 1, "mpalmer@gmail.com", "Manager", 123);

            // verify method returns correct value
            expect(employee.getRole()).toEqual("Manager");
        });

        it("should return the employee's office number when getOfficeNum() is called", () => {
            const employee = new Manager("Max", 1, "mpalmer@gmail.com", "Manager", 123);

            // verify method returns correct value
            expect(employee.getOfficeNum()).toEqual(123);
        });
    });
});
