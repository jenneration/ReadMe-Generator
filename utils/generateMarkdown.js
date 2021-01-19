// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function generateProjectUrl(GitHub, title) {
    const kebabCaseTitle = title.toLowerCase().split(" ").join("-");
    return `https://GitHub.com/${GitHub}/${kebabCaseTitle}`
}

function renderLicenseBadge(license) {
    if (license != "None") {
        return `[![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)](${generateProjectUrl(username, title)})`
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license != "None") {
        return `\n * [License](#license)\n`;
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license != "None") {
        return `## License

    This project is licensed under the ${license} License`
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
    # ${data.title}

    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [Testing](#testing)
    - [Questions](#questions)

    ### Description
    ${data.description}

    ### Installation
    ${data.installation}

    ### Usage
    ${data.usage}

    ### Contributing
    ${data.contributing}

    ### Testing
    ${data.testing}

    ### License
    ${data.license}

    ### Questions
    Contact me with any questions: ${data.email}, [GitHub](https://github.com/${data.username})

`;
}

module.exports = generateMarkdown;