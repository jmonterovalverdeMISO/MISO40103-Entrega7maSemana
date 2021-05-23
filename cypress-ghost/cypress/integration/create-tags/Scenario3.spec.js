/// <reference types="cypress" />

import MenuPage from "../pageObjects/MenuPage";
import TagListPage from "../pageObjects/TagListPage";
import TagPage from "../pageObjects/TagPage";

context("Error creating Internal tag without name", () => {
  before(() => {
    cy.login();
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("ghost-admin-api-session");
  });

  it("should navigate to /tags by clicking menu button", () => {
    MenuPage.getTagsLink().click();

    cy.url().should("include", "/ghost/#/tags");
  });

  it("should navigate to internal tags by clicking tab", () => {
    TagListPage.getInternalTab().click();

    TagListPage.getInternalTab().should("have.class", "gh-btn-group-selected");
  });

  it("should navigate to new tags by clicking new tag button", () => {
    TagListPage.getNewButton().click();

    cy.url().should("include", "/ghost/#/tags/new");
  });

  it("should show an error message in input and button", () => {
    TagPage.getSaveButton().click();

    TagPage.getSaveButton().should("contain.text", "Retry");
    TagPage.getNameInput()
      .parent()
      .find(".response")
      .should("contain.text", "You must specify a name for the tag.");
  });
});
