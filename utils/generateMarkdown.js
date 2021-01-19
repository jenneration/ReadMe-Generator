//Function to return my project link
const url = function generateProjectUrl(username, title) {
    const kebabCaseTitle = title.toLowerCase().split(" ").join("-");
    return `https://github.com/${username}/${kebabCaseTitle}`;
};

// TODO: BADGE: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const badge = function renderLicenseBadge(license) {
    const splitLicense = license.split(" ", 1);
    console.log(splitLicense);
    if (license != "None") {
        return `![GitHub license](https://img.shields.io/badge/license-${splitLicense}-blue.svg)`
    } else {
        return "";
    }
}
console.log(badge);


// TODO: LICENSE LINK: Create function to return license link
// If there is no license, return an empty string
const licenseLink = function renderLicenseLink(license) {
    const splitLicense = license.split(" ").join("-");
    if (license != "None") {
        return `(https://opensource.org/licenses/${splitLicense})`;
    } else {
        return "";
    }
}

// // TODO: LICENSE SECTION: Create function to return license section of README
// If there is no license, return an empty string
const licenseSection = function renderLicenseSection(license) {
    if (license != "None") {
        return `## License

    This project is licensed under the standard $[${license} License]`
    }
}
console.log(licenseSection);

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
# ${data.title}

[${badge(data.license)}](${licenseLink(data.license)});
${url(data.username, data.title)};


## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Testing](#testing)
- [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Testing
${data.testing}

${licenseSection(data.license)}${licenseLink(data.license)};

## Questions
Contact me with any questions: ${data.email}, [GitHub](https://github.com/${data.username})

`;
}

module.exports = generateMarkdown;