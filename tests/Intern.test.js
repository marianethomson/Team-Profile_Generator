const Intern = require("../lib/Intern");

describe("Intern", () => {
  let intern;

  beforeEach(() => {
    intern = new Intern(
      "Janet Smith",
      "123",
      "jan@provider.com",
      "Intern",
      "Monash"
    );
  });

  it("should be an object", () => {
    expect(typeof intern).toBe("object");
  });

  it("should have a name", () => {
    expect(intern.name).toBe("Janet Smith");
  });
  it("should have a id", () => {
    expect(intern.id).toBe("123");
  });
  it("should have a email", () => {
    expect(intern.email).toBe("jan@provider.com");
  });
  it("should have a role", () => {
    expect(intern.role).toBe("Intern");
  });
  it("should have a school", () => {
    expect(intern.school).toBe("Monash");
  });
  it("should have a getRole() method", () => {
    expect(typeof intern.getRole).toBe("function");
  });
  it('should return "Intern" when getRole() is called', () => {
    expect(intern.getRole()).toBe("Intern");
  });
  it("should have a getSchool() method", () => {
    expect(typeof intern.getSchool).toBe("function");
  });
  it('should return "Monash" when getSchool() is called', () => {
    expect(intern.getSchool()).toBe("Monash");
  });
});
