//Function to return my project link
var url = function generateProjectUrl(username, title) {
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

//RENDER PAGE: Generates markdown for README
function generateMarkdown(data) {

    //Format Contributions section per user choice(s)
    function rendercontribLinks(contributing) {
        //TODO: Need to find a shorter way to produce URL - previous attempts not pulling in URL for DRY coding
        const bugs = `[Submit issues and report bugs](${url(data.username, data.title)}/issues), and help verify as they are checked in`;

        const code = `Review the [documentation](${url(data.username, data.title)}) and make [pull requests](${url(data.username, data.title)}/pulls) for anything from typos to new content`;

        //If user passes over or has no contributing options: generate this message in README file.
        if (contributing.length === 0) {
            return `This project is not accepting contributions at this time`
        } else {
            //If user choses 1 or both contributing options: generate appropriate message in README file.
            for (var i = 0; i < contributing.length; i++) {

                if (contributing.length === 2) {

                    return `Contributions to this project are welcomed. There are a few ways you can do that:                    
- ${bugs};

- ${code}`;

                } else if (contributing[i] === "Bug/Features") {
                    return `- ${bugs}`

                } else if (contributing[i] === "Review Code") {
                    return `- ${code}`;
                }
            };
        }
    };

    //Format page render
    return `# ${data.title}

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
For questions or more information about this **Readme Generator** or other projects:

Visit my [GitHub profile page](https://github.com/${data.username})

Or contact me by email:  ${data.email} 

${licenseSection(data.license)}${licenseLink(data.license)}

`;
}

module.exports = generateMarkdown;