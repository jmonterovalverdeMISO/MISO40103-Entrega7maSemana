/// <reference types='cypress' />
import MenuPage from "../pageObjects/MenuPage";
import PagesPage from "../pageObjects/PagesPage";

context("Create scheduled page", () => {
  before(() => {
    cy.login();
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("ghost-admin-api-session");
  });

  afterEach(() => {
    cy.screenshot();
  });

  it("should navigate to /pages from home", () => {
    MenuPage.getPagesLink().click();
    cy.url().should("include", "ghost/#/pages");
  });

  it("should navigate to page editor by clicking new page button", () => {
    PagesPage.getNewPageButton().click();
    cy.url().should("include", "ghost/#/editor/page");
  });

  it("should fill inputs in page editor", () => {
    PagesPage.getTitleField().type("Test page #3");
    PagesPage.getContentField().click();
    PagesPage.getContentField().type("Test content #3");

    PagesPage.getTitleField().should("have.value", "Test page #3");
    PagesPage.getContentField().should("contain.text", "Test content #3");
  });

  it("should open publish dialog when publish button is clicked", () => {
    PagesPage.getPublishTrigger().click();

    PagesPage.getPublishMenu().should("exist");
  });

  it("should schedule page", () => {
    PagesPage.getPublishLaterOption().click();
    PagesPage.getPublishButton().click();

    PagesPage.getPublishButton().should("contain.text", "Scheduled");
  });
});
