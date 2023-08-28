/// <reference types="cypress" />

import { Before, Given, When } from "@badeball/cypress-cucumber-preprocessor";
// import Base_PO from "../page_objects/Base_PO";
import Homepage_PO from "../page_objects/Homepage_PO";

// const homepageUrl = "https://www.webdriveruniversity.com/";

// const basePage = new Base_PO();
const homePage = new Homepage_PO();

Before(() => {
  cy.log("Executing commands inside Homepage Steps");
});

Given(`I navigate to the webdriveruniversity homepage`, () => {
  // do something
  // cy.visit(homepageUrl);
  // basePage.navigate("");
  homePage.navigate("");
});

// When I did the exercise, I did it this way and it still worked, but I commented it out to do it the way the instructor did it
// So, I moved this code elsewhere with a minor change
// const loginPortalUrl =
//   "https://webdriveruniversity.com/Login-Portal/index.html?";
// Given(`I navigate to the webdriveruniversity Login Portal`, () => {
//   cy.visit(loginPortalUrl);
// });

When(`I click on the contact us button`, () => {
  // FYI, the invoke("removeAttr", "target") part is basically stopping the clicked link from opening it up in a new tab. But we are refactoring this logic as it is used in multiple places
  // cy.get("#contact-us").invoke("removeAttr", "target").click();

  // refactored. See the function in ../commands.js
  // cy.clickAndOpenLink_InSameTab("#contact-us");

  // refactored further
  homePage.clickOn_ContactUs_Button();
});

When(`I click on the login portal button`, () => {
  // refactored. See the function in ../commands.js
  // cy.clickAndOpenLink_InSameTab("#login-portal");

  // refactored further
  homePage.clickOn_Login_Button();
});
