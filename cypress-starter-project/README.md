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
