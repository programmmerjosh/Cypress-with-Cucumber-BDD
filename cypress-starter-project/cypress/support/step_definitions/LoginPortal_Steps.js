/// <reference types="cypress" />

import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

// let stub;

const loginPortalUrl =
  "https://webdriveruniversity.com/Login-Portal/index.html?";
When(`I click on the login portal button`, () => {
  cy.visit(loginPortalUrl);
});

When(`I type a username {} and a password {word}`, (username, password) => {
  cy.get("#text").type(username);
  cy.get("#password").type(password);
});

When("I click on the login button", () => {
  // using the stub to handle window alert
  // stub = cy.stub();
  // cy.on("window: alert", stub);
  cy.get("#login-button").click();
});

Then("I should be presented with an alert saying {string}", (alertText) => {
  // this is one way to handle the alert window validation, another is using the stub
  cy.on("window:alert", (str) => {
    expect(str).to.equal(alertText);
  });

  // using the stub to handle window alert
  // expect(stub).to.have.been.calledWith(alertText);
});
