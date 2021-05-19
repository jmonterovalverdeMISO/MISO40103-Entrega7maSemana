/// <reference types="cypress" />

import MenuPage from "../pageObjects/MenuPage";
import TagListPage from "../pageObjects/TagListPage";
import TagPage from "../pageObjects/TagPage";

context("Create Internal tag only using name", () => {
  before(() => {
    cy.login();
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("ghost-admin-api-session");
  });

  afterEach(() => {
    cy.screenshot();
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

  it("should fill to tag name", () => {
    TagPage.getNameInput().type("#New internal tag", { force: true });

    TagPage.getNameInput().should("have.value", "#New internal tag");
  });

  it("should save tag by clicking save button", () => {
    TagPage.getSaveButton().click();

    cy.visit("/ghost/#/tags");
    TagListPage.getInternalTab().click();
    cy.get(".gh-main").scrollTo("0%", "100%", {
      easing: "linear",
      ensureScrollable: false,
    });
    cy.wait(100);

    TagListPage.getLastTag()
      .find("h3")
      .should("contain.text", "#New internal tag");
  });
});
