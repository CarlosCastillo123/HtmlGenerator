const htmlGeneratorfile = require('./src/htmlGenerator')
const inquirer = require('inquirer')
const fs = require('fs')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/manager')
const teamArray = []


async function addManager() {
  await inquirer.prompt(questionsM)
    .then(answers => {
      const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
      teamArray.push(manager)
      crossroads()
    })
   
}
async function crossroads() {
  const { choice } = await inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: "Would you like to add an intern, engineer or generate your Html",
      choices: [
        'Engineer',
        'Intern',
        'Build Team'
      ],
    }
  ])
  //ask user if they would like to add intern engineer or are ready to genrerate html
  switch (choice) {
    case 'Engineer':
      return addEngineer()
    case 'Intern':
      return addIntern()
    case 'Build Team':
      return buildTeam()
  }
}
//adds Intern
function addIntern() {
  inquirer.prompt(questionsI)
    .then(answers => {
      const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
      teamArray.push(intern)
      //returns back to prompt
      crossroads()
    })
}

function addEngineer() {
  inquirer.prompt(questionsE)
  .then(answers => {
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
    teamArray.push(engineer)
      //returns back to prompt
  crossroads()
  })

}

function buildTeam() {
  //generates html
  console.log(teamArray)
  fs.writeFileSync('index.html', htmlGeneratorfile(teamArray))
  //let htmlData = teamArray.length
  //writeToFile(index.html, htmlData)

}
// Managers questions
const questionsM = [
  {
    type: 'input',
    message: "Enter team managers name.",
    name: 'name'
  },
  {
    type: 'input',
    message: "Enter team managers ID.",
    name: 'id'
  },
  {
    type: 'input',
    message: "Enter team managers email address.",
    name: 'email'
  },
  {
    type: 'input',
    message: "Enter team managers office number.",
    name: 'officeNumber'
  },
]
//Engineer questions
var questionsE = [
  {
    type: 'input',
    message: "Enter employee's name.",
    name: 'name'
  },
  {
    type: 'input',
    message: "Enter employee's ID.",
    name: 'id'
  },
  {
    type: 'input',
    message: "Enter employee's e-mail.",
    name: 'email'
  },
  {
    type: 'input',
    message: "Enter employee's Github username.",
    name: 'github'
  },
]
//Interns question
var questionsI = [
  {
    type: 'input',
    message: "Enter intern's name.",
    name: 'name'
  },
  {
    type: 'input',
    message: "Enter intern's id.",
    name: 'id'
  },
  {
    type: 'input',
    message: "Enter intern's email.",
    name: 'email'
  },
  {
    type: 'input',
    message: "Enter intern's school.",
    name: 'school'
  },
]
addManager()


