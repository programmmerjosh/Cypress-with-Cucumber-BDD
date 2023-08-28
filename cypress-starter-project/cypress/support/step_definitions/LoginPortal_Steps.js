/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Login_PO from "../page_objects/Login_PO";

const loginPage = new Login_PO();

// let stub;

// const loginPortalUrl =
//   "https://webdriveruniversity.com/Login-Portal/index.html?";
Given("I navigate to the webdriveruniversity login page", () => {
  // before refactor
  // cy.visit(loginPortalUrl);

  // after refactor#
  loginPage.navigateTo_Login_Page();
});

When(`I type a username {} and a password {word}`, (username, password) => {
  // before refactor
  // cy.get("#text").type(username);
  // cy.get("#password").type(password);

  // after refactor
  loginPage.type_Username(username);
  loginPage.type_Password(password);
});

When("I click on the login button", () => {
  // using the stub to handle window alert
  // stub = cy.stub();
  // cy.on("window: alert", stub);

  // before refactor
  // cy.get("#login-button").click();

  // after refactor
  loginPage.clickOn_Login_Button();
});

Then("I should be presented with an alert saying {string}", (alertText) => {
  // this is one way to handle the alert window validation, another is using the stub
  cy.on("window:alert", (str) => {
    expect(str).to.equal(alertText);
  });

  // using the stub to handle window alert
  // expect(stub).to.have.been.calledWith(alertText);
});
