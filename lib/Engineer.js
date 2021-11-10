const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, role, github) {
    super(name, id, email, role);
    this.github = github;
  }
}

Engineer.prototype.getRole = function () {
  return "Engineer";
};

Engineer.prototype.getGithub = function () {
  return this.github;
};

module.exports = Engineer;
