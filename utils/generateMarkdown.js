// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT'){
    return `[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://opensource.org/licenses/MIT)`;
  } else if (license === 'GNU GPLv3'){
    return `[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://www.gnu.org/licenses/gpl-3.0.en.html)`;
  } else if (license === 'GNU AGPLv3'){
    return `[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)`;
  } else {
    return ``;
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT'){
    return `[MIT License](https://opensource.org/licenses/MIT)`;
  } else if (license === 'GNU GPLv3'){
    return `[GPLv3 License](https://www.gnu.org/licenses/gpl-3.0.en.html)`;
  } else if (license === 'GNU AGPLv3'){
    return `[AGPL License](http://www.gnu.org/licenses/agpl-3.0)`;
  } else {
    return ``;
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT'){
    return `
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
  } else if (license === 'GNU GPLv3' || 'GNU AGPLv3'){
    return `Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.`;
  } else {
    return ``;
  }
};

function renderContributingTable(contribute) {
  if (contribute){
    return `* [Contributing](#contributing)`;
  } else {
    return ``;
  }
};

function renderContributingSection(contribute) {
  if (contribute.confirmContribute){
    return `
## Contributing

${contribute.contribute}`;
  } else {
    return ``;
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description 

  ${data.desc}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  ${renderContributingTable(data.confirmContribute)}
  * [Testing](#testing)
  * [Questions](#questions)


  ## Installation

  ${data.install}

  ## Usage 

  ${data.usage}
  
  ## License

  ${renderLicenseLink(data.license)}

  ${renderLicenseSection(data.license)}
  ${renderContributingSection(data)}
  ## Testing

  ${data.test}

  ## Questions?

  [GitHub Account](https://github.com/${data.github}/)

  [Email](mailto:${data.email})

`;
}

module.exports = generateMarkdown;
