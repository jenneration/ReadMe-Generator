//Function to return my project link
const url = function generateProjectUrl(username, title) {
    const kebabCaseTitle = title.toLowerCase().split(" ").join("-");
    return `https://github.com/${username}/${kebabCaseTitle}`
};

// LICENSE BADGE: Returns license badge per user selection
// If no license, returns an empty string
const badge = function renderLicenseBadge(license) {
    const splitLicense = license.split(" ").join("");

    if (license != "None") {
        return `[![GitHub license](https://img.shields.io/badge/license-${splitLicense}-blue.svg)]`
    } else {
        return "";
    };
};

// LICENSE LINK: Returns license link
// If there no license is chosen, return empty string
const licenseLink = function renderLicenseLink(license) {
    const splitLicense = license.split(" ").join("-");
    if (license != "None") {
        return `(https://opensource.org/licenses/${splitLicense})`
    } else {
        return "";
    };
};

// LICENSE SECTION: Returns license section of README
// If there is no license, return an empty string
const licenseSection = function renderLicenseSection(license) {
    if (license != "None") {
        return `## License
Copyright &copy; Jenner Garcia 2021

This project is licensed under the standard [${license} License]`
    };
};

//LICENSE: Table of contents link
const licenseTOC = function renderLicenseTOC(license) {
    if (license != "None") {
        return `- [License](#license)`
    };
};


//CONTRIBUTING: Return text and links in README depending on user's answer to prompted questions
function rendercontribLinks(contributing) {
    console.log(contributing) //Test how data is returned

    //If user passes over or has no contributing options: generate this message in README file.
    if (contributing.length === 0) {
        return `This project is not accepting contributions at this time`
    } else {
        //If user choses 1 or both contributing options: generate appropriate message in README file.
        for (var i = 0; i < contributing.length; i++) {

            if (contributing.length === 2) {
                return `Contributions to this project are welcomed. There are a few ways you can do that:
            
- [Submit issues and report bugs](https://github.com/jenneration/ReadMe-Generator/issues), and help verify as they are checked in

- Review the [documentation](https://github.com/jenneration/ReadMe-Generator) and make [pull requests](https://github.com/jenneration/ReadMe-Generator/pulls) for anything from typos to new content`;

            } else if (contributing[i] === "Bug/Features") {
                return `- [Submit issues and report Bugs](https://github.com/jenneration/ReadMe-Generator/issues)`;

            } else if (contributing[i] === "Review Code") {
                return `- [Request a review for new or modified code](https://github.com/jenneration/ReadMe-Generator/pulls)`;
            }
        };
    }
};

//Generates markdown for README
function generateMarkdown(data) {
    return `
# ${data.title}

${badge(data.license)}${licenseLink(data.license)}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Testing](#testing)
- [Questions](#questions)
${licenseTOC(data.license)}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${rendercontribLinks(data.contributing)}

## Testing
${data.testing}

## Questions
Please contact me with any questions about this **Readme Generator**:

At my [GitHub Profile page](https://github.com/${data.username})

Or by email:  ${data.email} 

${licenseSection(data.license)}${licenseLink(data.license)}

`;
}

module.exports = generateMarkdown;