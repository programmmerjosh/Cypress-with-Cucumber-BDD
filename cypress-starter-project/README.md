## Course notes/summary for future reference:

### How to run this particular project locally:

1. Download the project repo
2. Make sure you have node v18 installed or use Node Version Manager: (**nvm use v18.17.1**)
   2a. We are also assuming cypress is already installed on your machine.
3. **npm install**
4. **npm run SCRIPT_NAME** (see script key value pairs in package.json)

---

How to Setup another UI test project like this one:

1. Create a new project repo
2. Open up a cmd/terminal from the project directory
3. `npm init` and follow the setup guide (project name, project version, project description etc) -> this will create our package.json file which is the starting point
4. `npm install --save-dev cypress`
5. `npx cypress open` (assuming you already have npx installed)
6. A window should pop up and say 'Welcome to Cypress'
7. Select E2E Testing
8. Keep all checkboxes checked
9. Select Continue
10. Cypress will then create the project setup for you
11. Select a browser and click on Start E2E testing
12. Click on the 'Scaffold example specs' button to create dummy tests
13. Go to https://www.npmjs.com/package/cypress-cucumber-preprocessor to get installation instructions for this package. Should just be `npm install --save-dev cypress-cucumber-preprocessor`
14. We can delete the cypress.config.js file and copy over the cypress.config.ts from another cypress project or go to the GitHub cypress-cucumber-preprocessor repo for the readme documentation
15. `npm install --save-dev @bahmutov/cypress-esbuild-preprocessor`
16. `npm install ts-loader --save-dev`
17. import a config.json file from any other cypress project
18. In package.json, we need to tell the cypress-cucumber-preprocessor where our step definitions are located

```
"cypress-cucumber-preprocessor": {
"stepDefinitions": "cypress/support/step\*definitions/\*\*/\_.js"
}
```

### But it might be best to copy over the entire cypress-cucumber-preprocessor js object from this project's (or another working cypress project's) package.json

See Docs on commands if needed: https://docs.cypress.io/api/table-of-contents

---

Custom Scripts:

- package.json => "scripts": {} for custom scripts

  > You can run a custom script by opening a terminal and typing: npm run SCRIPT_NAME

---

feature files:

- Declare Background, Scenario & Scenario Outlines (Given, When, And, Then)

---

\_Steps.js:

- This is where you match up your Given, When, And, Then's and provide actions for those steps

---

Reports:

- We can create HTML reports for our tests by

1. Adding an html object with a file location within the "cypress-cucumber-preprocessor" object
   ```
   "html": {
      "enabled": true,
      "output": "cypress/reports/cucumber-html/cucumber-report.html"
    },
   ```
2. (Optional) Adding a messages object to specify the desired file location for the cucumber-report.ndjson file, also within the "cypress-cucumber-preprocessor" object

```
"messages": {
      "enabled": true,
      "output": "cypress/reports/cucumber-ndjson/cucumber-report.ndjson"
    }
```

3. Open a terminal and run any custom script

- We can create json reports for more advanced reporting - i.e Jenkins reports

1. Download the cucumber json formatter: https://github.com/cucumber/json-formatter

2. Adding a json object with a file location within the "cypress-cucumber-preprocessor" object

```
"json": {
      "enabled": true,
      "formatter": "cucumber-json-formatter",
      "output": "cypress/reports/cucumber-json/cucumber-report.json"
    }

```

3. Open a terminal and run any custom script

- Another important note: If you make changes to your tests and want to regenerate a report, and after running your custom script via the terminal, you can follow up with this command: node cucumber-html-report.js (this using the Multiple cucumber Html reports package). Alternatively, you can append the command to any custom script using && for example:

```
"login-tests-headed": "cypress run -e TAGS=\"@login\" --headed && node cucumber-html-report.js",
```

---

Hooks:
See cypress/support/step_definitions/Base_Steps.js

---

Custom commands:
See cypress/support/commands.js

---

Page Object Modelling:
See Base_PO in cypress/support/page_objects/Base_PO.js and where it's used

---

Running Jenkins:

- locate the jenkins.war file (you should have java jdk 11 or 17 installed btw). Open a terminal in the directory where the jar file lives.
- type: java -jar jenkins.war
- if it says the port is already in use, you can use the same command above but append --httpsPort=9090 or whatever port you want to use.

- For a readable format in the console logs, start up Jenkens with this command in your terminal:
  java -Dfile.encoding=UTF8 -jar jenkins.war
