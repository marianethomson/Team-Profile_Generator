const Employee = require("../src/Employee");

describe("Employee", () => {
  let employee;

  beforeEach(() => {
    employee = new Employee("John Doe", "01", "nope@no.com", "Employee");
  });
  describe("Initialization", () => {
    it("should be an object", () => {
      expect(typeof Employee).toBe(Object);
    });
    it("should have a name", () => {
      expect(employee.name).toBe("John Doe");
    });
    it("should have an id", () => {
      expect(employee.id).toBe("01");
    });
    it("should have an email", () => {
      expect(employee.email).toBe("nope@no.com");
      it("should have a role", () => {
        expect(employee.role).toBe("Employee");
      });
    });
    describe("getName()", () => {
      it("should return the name", () => {
        expect(employee.getName()).toBe("John Doe");
      });
    });

    describe("getId()", () => {
      it("should return the id", () => {
        expect(employee.getId()).toBe("01");
      });
    });

    describe("getEmail()", () => {
      it("should return the email", () => {
        expect(employee.getEmail()).toBe("noppe@no.com");
      });
    });
    describe("getRole()", () => {
      it("should return the role", () => {
        expect(employee.getRole()).toBe("Employee");
      });
    });
  });
});
