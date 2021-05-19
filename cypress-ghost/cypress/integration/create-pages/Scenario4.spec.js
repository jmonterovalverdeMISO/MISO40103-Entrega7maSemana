/// <reference types='cypress' />
import MenuPage from "../pageObjects/MenuPage";
import PagesPage from "../pageObjects/PagesPage";

context("Delete draft page", () => {
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

  it("should create an untitled draft page when no information is provided", () => {
    PagesPage.getTitleField().type("Test page #4");

    PagesPage.getTitleField().should("have.value", "Test page #4");
  });

  it("should open settings menu", () => {
    PagesPage.getPostSettingsButton().click();
    PagesPage.getSettingsMenu().should("be.visible");
  });

  it("should open confirmation dialog clicking delete", () => {
    PagesPage.getDeleteButtonPage().click();
    PagesPage.getDeleteDialog().should("be.visible");
  });

  it("should delete page and redirect user", () => {
    PagesPage.getDeleteDialog().get(".gh-btn.gh-btn-red").click();
    cy.url().should("not.include", "ghost/#/editor/page");
  });
});
