// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license){
    if(license === "MIT"){
      let licenseBadge  = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      return licenseBadge;
    } 
    if(license === "GPLv2"){
      let licenseBadge = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
      return licenseBadge;
    }
  } else return "";
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license){
    if(license === "MIT"){
      let licenseText = `
      ## License
      MIT License

      Copyright (c) 2023 MykhailoZakh
  
      Permission is hereby granted, free of charge, to any person obtaining a copy
      of this software and associated documentation files (the "Software"), to deal
      in the Software without restriction, including without limitation the rights
      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
      copies of the Software, and to permit persons to whom the Software is
      furnished to do so, subject to the following conditions:
  
      The above copyright notice and this permission notice shall be included in all
      copies or substantial portions of the Software.
  
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
      SOFTWARE.
      `;
      return licenseText;
    }
    if(license === "GPLv2"){
      let licenseText = `
      ## License
      
      GNU GENERAL PUBLIC LICENSE
      Version 2, June 1991
  
      Copyright (C) 1989, 1991 Free Software Foundation, Inc.,
      51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA
      Everyone is permitted to copy and distribute verbatim copies
      of `;
      return licenseText;
    }
  } else return "";
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  ## ${data.title}

  ## Badges

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.projectWhy}

  ${data.problemSolve}
  
  ${data.motivation}
  
  ## Table of Contents 
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installationSteps}
  
  ## Usage

  ${data.usage}

  ## Contributing

  ${data.cont}
  
  ## Tests

  ${data.tests}

  ${renderLicenseSection(data.license)}
  
  ## Questions

  If you have any question reach me throu email.
  Email : ${data.email} 

  GitHub Profile:
  https://github.com/${data.username}

`;
}

module.exports = generateMarkdown;
