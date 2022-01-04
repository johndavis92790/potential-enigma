// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project? (Required)',
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('Please enter your title!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'desc',
    message: 'Enter a description of your project (Required)',
    validate: descInput => {
      if (descInput) {
        return true;
      } else {
        console.log('Please enter a description of your project!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'install',
    message: 'Explain the installation process for your project (Required)',
    validate: instalInput => {
      if (instalInput) {
        return true;
      } else {
        console.log('Explain the installation process for your project!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter a description of the usage of your project (Required)',
    validate: usageInput => {
      if (usageInput) {
        return true;
      } else {
        console.log('Please enter a description of the usage of your project!');
        return false;
      }
    }
  },
  {
    type: 'checkbox',
    name: 'license',
    message: 'Which license do you want to use with this project? (Check all that apply)',
    choices: ['MIT', 'GNU GPLv3', 'GNU AGPLv3'],
    validate: licenseInput => {
      if (licenseInput) {
        return true;
      } else {
        console.log('Please choose a license!');
        return false;
      }
    }
  },
  {
    type: 'confirm',
    name: 'confirmContribute',
    message: 'Would you like to enter some information about contributing collaborators?',
    default: true
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'Provide some information about contributing collaborators:',
    when: ({ confirmContribute }) => confirmContribute
  },
  {
    type: 'confirm',
    name: 'confirmTest',
    message: 'Would you like to enter some information about testing your project?',
    default: true
  },
  {
    type: 'input',
    name: 'test',
    message: 'Provide some information about testing your project:',
    when: ({ confirmTest }) => confirmTest
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username (Required)',
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log('Please enter your GitHub usrname!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email (Required)',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log('Please enter your email!');
        return false;
      }
    }
  }
];

// TODO: Create a function to write README file
const writeFile = data => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/README.md', data, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: 'README created!'
      });
    });
  });
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
  .then(questions => {
    return generatePage(questions);
  })
  .then(pageMarkdown => {
    console.log(pageMarkdown)
    return writeFile(pageMarkdown);
  })
  .then(writeResponse => {
    console.log(writeResponse);
  })
  .catch(err => {
    console.log(err);
});
