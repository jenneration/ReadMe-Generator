
# Readme Generator

## Description
A command-line application (CLI) that dynamically generates a professional README.md file for all your GitHub projects. It presents a series of prompted questions, intakes user input, then generates a fully formatted README file.

## Usage
A user would use this application to generate a README file to upload to their GitHub project repository. To do so the user would:
- Install required packages.
- Open their terminal and input `node index.js` to initiate the program.
- As a series of prompts occurs, user must accurately input answers that will be used by generator to render their README.md file.
- Once prompts are completed, the generator creates a README.md and in with Markdown syntax formatting populates that file based on the user's inputted answers.

## Installation and Instructions
- The project is built utilizing Node.js and uses the [Inquirer package](https://www.npmjs.com/package/inquirer) from npmjs.com.
- To start the application user will input `node index.js` and prompted questions will begin.
- The user answers each prompt relating to a section normally included in a README.md file.
- Once user has answered all prompts, the application generates a new file named "README.md" and renders user's answers formatted using Markdown syntax.

## Criteria met in this assignment
- A sample README.md file named *"READMEsample.md"* which was produced with the generator.
- A GitHub repo containing the application's code.
- A walk-through video demonstrating:
    - How user invokes application from command line.
    - How user enter responses to prompts.
    - Realtime viewing of newly generated README file based the demo.
    - A functioning table of contents.

## Demo
![Readme Generator Demo](assets/project-gif.gif)

**See Full demo here:** https://drive.google.com/file/d/15t-EwQFriKfsj_Ntes7Ld2lJJW6srLvh/view

_**Important!** if video appears "fuzzy" try viewing in full-screen mode. If still unclear, revert back to regular-screen mode. One or both of these actions will render an in-focus video._


## Issues/future improvements
Due to time constraints the application is bare-bones and some steps I plan to initiate to improve this project are:

1. Allow and render user choice for more than one license as well as other badges.

2. Understand more about licenses,requirements, and how to possibly take app a step further in linking to those.

3. For descriptions, instructions, and installation notes, consider utilizing npm inquirer's feature that opens a text editor for the user.

4. Allow user's direct input for other ways to contribute that may not be listed as choice.

5. Implement checks and confirmation to ensure accurate input. Had issues using inquirer's validate but will pursue during project improvement activities.









