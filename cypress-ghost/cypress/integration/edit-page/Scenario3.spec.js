/// <reference types='cypress' />
import MenuPage from "../pageObjects/MenuPage";
import PagesPage from "../pageObjects/PagesPage";
import PagesListPage from "../pageObjects/PagesListPage";

context("Edit published page title", () => {
  before(() => {
    cy.login();
    cy.visit("ghost/#/editor/page");

    PagesPage.getTitleField().type("Edit test page");
    PagesPage.getContentField().type("Edit test content");

    PagesPage.getPublishTrigger().click();
    PagesPage.getSetItLiveOption().click();
    PagesPage.getPublishButton().click();

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

  it("should navigate to last published page", () => {
    PagesListPage.getLastPublishedPostTitle().click({ force: true });
    cy.url().should("include", "ghost/#/editor/page");
  });

  it("should load previous values", () => {
    PagesPage.getTitleField().should("have.value", "Edit test page");
    PagesPage.getContentField().should("contain.text", "Edit test content");
  });

  it("should change previous values", () => {
    PagesPage.getTitleField().clear().type("Edit test post updated");

    PagesPage.getTitleField().should("have.value", "Edit test post updated");
  });

  it("should open update dialog when publish button is clicked", () => {
    PagesPage.getPublishTrigger().click();

    PagesPage.getPublishMenu().should("be.visible");
  });

  it("should update page", () => {
    PagesPage.getPublishButton().click();

    PagesPage.getPublishButton().should("contain.text", "Updated");
  });
});
