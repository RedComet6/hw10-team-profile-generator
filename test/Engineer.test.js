const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object with a name, ID, email, role, and github username if provided valid arguments", () => {
            const employee = new Engineer("Max", 1, "mpalmer@gmail.com", "Engineer", "mpalm6");

            // Verify that the new object has the correct properties
            expect(employee.name).toEqual("Max");
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual("mpalmer@gmail.com");
            expect(employee.role).toEqual("Engineer");
            expect(employee.githubUser).toEqual("mpalm6");
        });
    });

    describe("Methodizing", () => {
        it("should return the employee's name when getName() is called", () => {
            const employee = new Engineer("Max", 1, "mpalmer@gmail.com", "Engineer", "mpalm6");

            // verify method returns correct value
            expect(employee.getName()).toEqual("Max");
        });

        it("should return the employee's id when getId() is called", () => {
            const employee = new Engineer("Max", 1, "mpalmer@gmail.com", "Engineer", "mpalm6");

            // verify method returns correct value
            expect(employee.getId()).toEqual(1);
        });

        it("should return the employee's email when getEmail() is called", () => {
            const employee = new Engineer("Max", 1, "mpalmer@gmail.com", "Engineer", "mpalm6");

            // verify method returns correct value
            expect(employee.getEmail()).toEqual("mpalmer@gmail.com");
        });

        it("should return the employee's role when getRole() is called", () => {
            const employee = new Engineer("Max", 1, "mpalmer@gmail.com", "Engineer", "mpalm6");

            // verify method returns correct value
            expect(employee.getRole()).toEqual("Engineer");
        });

        it("should return the employee's github username when getGithubUser() is called", () => {
            const employee = new Engineer("Max", 1, "mpalmer@gmail.com", "Engineer", "mpalm6");

            // verify method returns correct value
            expect(employee.getGithubUser()).toEqual("mpalm6");
        });
    });
});
