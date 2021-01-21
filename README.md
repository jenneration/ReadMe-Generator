
# Readme Generator

## Description
A command-line application (CLI) that dynamically generates a README.md file using user input to prompted questions.

## Usage
A user would use this application to generate a README file to upload to their GitHub project repository.

## Installation and Instructions
- The project is built utilizing Node.js and uses the [Inquirer package](https://www.npmjs.com/package/inquirer) from npmjs.com.
- To start the application user will input `node index.js` and prompted questions will begin.
- The user answers each prompt relating to a section normally included in a README.md file.
- Once user has answered all prompts, the application generates a new file named "README.md" and renders user's answers formatted using Markdown syntax.

## Criteria produced in this assignment
- A sample README.md file named "READMEsample.md" which was produced with the generator.
- A GitHub repo containing the application's code.
- A walk-through video demonstrating:
    - How user invokes application from command line.
    - How user enter responses to prompts.
    - A generated README that matches user input demoed.
    - A functioning table of contents.

## Demo
![Readme Generator Demo](assets/project-gif.gif)

**See Full demo here:**
(https://drive.google.com/file/d/15t-EwQFriKfsj_Ntes7Ld2lJJW6srLvh/view)


## In the works
Due to time constraints the application is bare-bones and there are more steps I plan to initiate to improve this project.

1. Allow and render a user's choice for more than one license as well as other badges.

2. Understand more about licenses and requirements and how to possibly take app a step further in linking to those.

3. For descriptions, instructions, and installation notes, consider utilizing npm inquirer's feature that opens a text editor for the user.







