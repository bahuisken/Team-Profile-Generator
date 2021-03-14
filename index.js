// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const createFullTeam = require('./src/template');

const OUTPUT_DIR = path.resolve(__dirname, 'dist');
const outputPath = path.join(OUTPUT_DIR, 'se-team.html');
//Declare variables
const teamArr = [];
// Function to make a Manager
function makeManager() {
    console.log("Please build your team");
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the team Manager\'s name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the team Manager\'s id?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is the team Manager\'s email?',
            name: 'email',
            validate: function (email) {
                // Regex mail check (return true if valid mail)
                valid = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                if (valid) {
                    return true;
                } else {
                    console.log("\nPlease enter a valid email")
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'What is the team Manager\'s office number?',
            name: 'officeNumber',
        },
    ]).then(data => {
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        teamArr.push(manager);
        //call addTeammate
        addTeammate();
    })
}
//makeEngineer
function makeEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the Engineer\'s name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the the Engineer\'s id?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is the the Engineer\'s email?',
            name: 'email',
            validate: function (email) {
                // Regex mail check (return true if valid mail)
                valid = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                if (valid) {
                    return true;
                } else {
                    console.log("\nPlease enter a valid email")
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'What is the the Engineer\' github username?',
            name: 'github',
        },
    ]).then(data => {
        const engineer = new Engineer(data.name, data.id, data.email, data.github);
        teamArr.push(engineer);
        //call addTeammate
        addTeammate();
    })
}
//makeIntern
function makeIntern() {
    inquirer.prompt([
        {
            type: 'input',
            message: 'What is the Intern\'s name?',
            name: 'name',
        },
        {
            type: 'input',
            message: 'What is the the Intern\'s id?',
            name: 'id',
        },
        {
            type: 'input',
            message: 'What is the the Intern\'s email?',
            name: 'email',
            validate: function (email) {
                // Regex mail check (return true if valid mail)
                valid = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
                if (valid) {
                    return true;
                } else {
                    console.log("\nPlease enter a valid email")
                    return false;
                }
            }
        },
        {
            type: 'input',
            message: 'What is the the Intern\' school?',
            name: 'school',
        },
    ]).then(data => {
        const intern = new Intern(data.name, data.id, data.email, data.school);
        teamArr.push(intern);
        //call addTeammate
        addTeammate();
    })
}
//add teammate
function addTeammate() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Would you like to add a team member?',
            choices: ['Engineer',
                new inquirer.Separator(),
                'Intern',
                new inquirer.Separator(),
                'I don\'t want to add anymore team members'],
            name: 'teamMember'
        }
    ]).then(response => {
        switch (response.teamMember) {
            case 'Engineer':
                makeEngineer();
                break;
            case 'Intern':
                makeIntern();
                break;
            default:
                buildTeam();
                break;
        }
    })
}
//Build whole team, pass array to template.js
function buildTeam() {
    fs.writeFileSync(outputPath, createFullTeam(teamArr));
    console.log('you will write ', outputPath);
}

// Function call to initialize app
makeManager();
