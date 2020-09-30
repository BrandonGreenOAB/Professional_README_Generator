const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

inquirer
  .prompt([

// * The generated README includes the following sections: 

// * Title
// * Description
// * Table of Contents
// * Installation
// * Usage
// * License
// * Contributing
// * Tests
// * Questions
// * The generated README includes 1 badge that's specific to the repository.
    {
        type:"input",
        message:"Enter project title",
        name:"title"
    },
    {
        type:"input",
        message:"Enter a description of the project",
        name:"description"
    },
    {
        type:"input",
        message: "please enter a description of the usage of your application:",
        name:"usage"
    },
    {
        type:"list",
        message:"Select the license you would like to use.",
        name:"license",
        choices:["MIT", "GPL", "Apache 3.0", "Apache 2.0", "BSD"]
    },
    {
        
    }

  ])
  .then(answers => {

    const generatedFile = generateMarkdown(answers)

    console.log(generatedFile);

  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });