// TODO: Include packages needed for this application
import inquirer from "inquirer";

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your project?"
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project. What was your motivation? Why did you build this project? What problem does it solve? What did you learn?"
  },
  {
    type: "input",
    name: "installation",
    message: "What are the step-by-step instructions required to install your project?"
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for use. Include screenshots as needed."
  },
  {
    type: "input",
    name: "contributing",
    message: "If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so."
  },
  {
    type: "input",
    name: "tests",
    message: "Provide example on how to run test for your application."
  }
];

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {}

// TODO: Create a function to initialize app
const init = () => {
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Use user feedback for... whatever!!
      console.log(answers)
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    });
}

// Function call to initialize app
init();
