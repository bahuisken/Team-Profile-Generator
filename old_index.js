// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
//Declare variables
const mgrArray = [];
const engArray = [];
const intArray = [];
const teamHTMLArray = [];
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
        let manager = new Manager(data.name, data.id, data.email, data.officeNumber);
        mgrArray.push(manager);
        console.log(mgrArray);
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
        let engineer = new Engineer(data.name, data.id, data.email, data.github);
        engArray.push(engineer);
        console.log(engArray);
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
        let intern = new Intern(data.name, data.id, data.email, data.school);
        intArray.push(intern);
        console.log(intArray);
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
            choices: ['Engineer', 'Intern', 'I don\'t want to add anymore team members'],
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
                generateTeam();
                break;
        }
    })
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function generateTeam() {
    const filename = 'dist/team.html';
    let mgrHTMLArray = [];
    let engHTMLArray = [];
    let intHTMLArray = [];
    mgrHTMLArray.push(`<div class="card mx-auto mb-3 shadow my-card">
        <div class="card-header text-white bg-primary">
        <h2 class="card-title">${mgrArray[0].name}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot"></i> Manager</h3>
        </div>
        <div class="card-body bg-light">
        <ul class="list-group">
            <li class="list-group-item"><strong>ID:</strong> ${mgrArray[0].id}</li>
            <li class="list-group-item"><strong>Email:</strong> <a href="mailto:${mgrArray[0].email}?subject=So, you're the Manager?">${mgrArray[0].email}</a></li>
            <li class="list-group-item"><strong>Office Number:</strong> ${mgrArray[0].officeNumber}</li>
        </ul>
        </div>
        </div>`);
    for (let i = 0; i < engArray.length; i++) {
        engHTMLArray.push(`<div class="card mx-auto mb-3 shadow my-card">
        <div class="card-header text-white bg-primary">
        <h2 class="card-title">${engArray[i].name}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i> Engineer</h3>
        </div>
        <div class="card-body bg-light">
        <ul class="list-group">
            <li class="list-group-item"><strong>ID:</strong> ${engArray[i].id}</li>
            <li class="list-group-item"><strong>Email:</strong> <a href="mailto:${engArray[i].email}?subject=So, you're an Engineer?">${engArray[i].email}</a></li>
            <li class="list-group-item"><strong>GitHub:</strong> <a href="https://github.com/${engArray[i].github}" target="_blank">${engArray[i].github}</a></li>
        </ul>
        </div>
        </div>`);
    }
    for (let j = 0; j < intArray.length; j++) {
        intHTMLArray.push(`<div class="card mx-auto mb-3 shadow my-card">
        <div class="card-header text-white bg-primary">
        <h2 class="card-title">${intArray[j].name}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate"></i> Intern</h3>
        </div>
        <div class="card-body bg-light">
        <ul class="list-group">
            <li class="list-group-item"><strong>ID:</strong> ${intArray[j].id}</li>
            <li class="list-group-item"><strong>Email:</strong> <a href="mailto:${intArray[j].email}?subject=So, you're an Intern?">${intArray[j].email}</a></li>
            <li class="list-group-item"><strong>School:</strong> ${intArray[j].school}</li>
        </ul>
        </div>
        </div>`);
    }
    const teamOutput = teamHTMLArray.concat(mgrHTMLArray, engHTMLArray, intHTMLArray).join('')
    writeToFile(filename, generateHTML(teamOutput))
    console.log('you will write ', filename)

}

// Function call to initialize app
makeManager();
