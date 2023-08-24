### Course notes/summary for future reference:

Setup:

In package.json, we need to tell the cypress-cucumber-preprocessor where our step definitions are located

"cypress-cucumber-preprocessor": {
"stepDefinitions": "cypress/support/step\*definitions/\*\*/\_.js"
}

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
