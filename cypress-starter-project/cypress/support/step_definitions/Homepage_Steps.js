/// <reference types="cypress" />

import { Given, When } from "@badeball/cypress-cucumber-preprocessor";

const homepageUrl = "https://www.webdriveruniversity.com/";
Given(`I navigate to the webdriveruniversity homepage`, () => {
  // do something
  cy.visit(homepageUrl);
});

// When I did the exercise, I did it this way and it still worked, but I commented it out to do it the way the instructor did it
// So, I moved this code elsewhere with a minor change
// const loginPortalUrl =
//   "https://webdriveruniversity.com/Login-Portal/index.html?";
// Given(`I navigate to the webdriveruniversity Login Portal`, () => {
//   cy.visit(loginPortalUrl);
// });

When(`I click on the contact us button`, () => {
  cy.get("#contact-us").invoke("removeAttr", "target").click();
});
