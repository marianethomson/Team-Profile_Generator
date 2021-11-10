const inquirer = require("inquirer");
const fs = require("fs");
const helper = require("./helper.js");
const { type } = require("os");

const staffType ={
      type: "list",
      name: "staffType",
      message: "What is the staff type you want to register?",
      choices: ["Manager", "Engineer", "Employee", "Intern"],
      filter(val) {
        return val.toUpperCase();
      },
};

function employeeType = () => {
    inquirer.prompt(staffType).then((answers) => {
        switch (answers.staffType) {
            case "MANAGER":
                manager();
                break;
            case "ENGINEER":
                engineer();
                break;
            case "EMPLOYEE":
                employee();
                break;
            case "INTERN":
                intern();
                break;
            default:
                console.log("Please enter a valid option");
                employee();
        }
    });
};

function employee() {
    inquirer.prompt([
    {type:"input",
    name:"name",
    message:"What is the staff name?",
    },
    {type:"input",
    name:"id",
    message:"What is the staff id?",
    },
    {type:"input",
    name:"email",
    message:"What is the staff email?",
    },  
    ]).then((answers) => {
        const employee = new Employee(answers.name, answers.id, answers.email);   
        const html = employee.render();
        fs.appendFile("index.html", html, (err) => {
            if (err) throw err;
            console.log("Employee added!");
        });
    });
}


function manager() {
    inquirer.prompt([
    employee(),
    {type:"input",
    name:"officeNumber",
    message:"What is the manager's office number?",
    },
    ]).then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);     
        const html = manager.render();
        fs.appendFile("index.html", html, (err) => {
            if (err) throw err;
            console.log("Manager added!");
        });
    });
}

function engineer() {
    inquirer.prompt([
    employee(),
    {type:"input",
    name:"github",
    message:"What is the engineer's github?",
    },
    ]).then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        const html = engineer.render();
        fs.appendFile("index.html", html, (err) => {
            if (err) throw err;
            console.log("Engineer added!");
        });
    });
}

function intern() {
    inquirer.prompt([
    employee(),
    {type:"input",
    name:"school",
    message:"What is the intern's school?",
    },
    ]).then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        const html = intern.render();
        fs.appendFile("index.html", html, (err) => {
            if (err) throw err;
            console.log("Intern added!");
        });
    });
}
 
const askAgain = {
    type: "list",
    name: "askAgain",
    message: "Would you like to add another employee?",
    choices: ["Yes", "No"],
    filter(val) {
        return val.toUpperCase();
    },
}

function ask() {
    inquirer.prompt(askAgain).then((answers) => {
        if (answers.askAgain === "YES") {
            employeeType();
        } else {
            console.log("Thanks for using the team profile generator!");
        }
    });
}


function writeToFile(filename, data) {
  return fs.writeFileSync(filename, data);
}

const init = () => {
    employeeType();
    fs.readFile("index.html", "utf8", (err, data) => {
        if (err) throw err;
        writeToFile("index.html", data);
    });
    ask();
};

// Function call to initialize app
init();
