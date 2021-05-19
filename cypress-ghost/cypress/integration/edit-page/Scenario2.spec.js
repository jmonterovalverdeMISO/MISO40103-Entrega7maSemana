/// <reference types='cypress' />
import MenuPage from "../pageObjects/MenuPage";
import PagesListPage from "../pageObjects/PagesListPage";
import PagesPage from "../pageObjects/PagesPage";

context("Edit draft page", () => {
  before(() => {
    cy.login();
    cy.visit("ghost/#/editor/page");

    PagesPage.getTitleField().type("Edit test page");
    PagesPage.getContentField().type("Edit test content");

    cy.visit("ghost/#/site");
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("ghost-admin-api-session");
  });

  afterEach(() => {
    cy.screenshot();
  });

  it("should navigate to /pages from home", () => {
    cy.wait(3000);
    MenuPage.getPagesLink().click();
    cy.url().should("include", "ghost/#/pages");
  });

  it("should navigate to last draft page", () => {
    PagesListPage.getLastDraftPageTitle().click({ force: true });
    cy.url().should("include", "ghost/#/editor/page");
  });

  it("should load previous values", () => {
    PagesPage.getTitleField().should("have.value", "Edit test page");
    PagesPage.getContentField().should("contain.text", "Edit test content");
  });

  it("should update previous values", () => {
    PagesPage.getTitleField().clear().type("Edit test page updated");
    PagesPage.getContentField().click();
    PagesPage.getContentField().clear().type("Edit test content updated");

    PagesPage.getTitleField().should("have.value", "Edit test page updated");
    PagesPage.getContentField().should(
      "contain.text",
      "Edit test content updated"
    );
  });

  it("should save new values clicking back button", () => {
    PagesPage.getBackToPagesPageButton().click();
    PagesListPage.getLastDraftPageTitle().should(
      "contain.text",
      "Edit test page updated"
    );
  });
});
