const inquirer = require("inquirer");
const fs = require('fs');
const CLI = require("./lib/cli");

new CLI().run();

class CLI { }
  run() {
    return inquirer
        .prompt()
        .then()
        .catch()
  }

module.exports = CLI;