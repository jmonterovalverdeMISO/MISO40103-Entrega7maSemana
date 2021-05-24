/// <reference types='cypress' />
import MenuPage from "../pageObjects/MenuPage";
import PagesPage from "../pageObjects/PagesPage";
import PagesListPage from "../pageObjects/PagesListPage";
import faker from 'faker';

context("Create draft page", () => {
  before(() => {
    cy.login();
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("ghost-admin-api-session");
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
    PagesPage.getTitleField().click();
    PagesPage.getBackToPagesPageButton().click();

    PagesListPage.getLastDraftPageTitle().should("contain.text", "(Untitled)");
  });

  it("should fill inputs and update information page", () => {
    const titlePage = faker.internet.domainName();

    PagesListPage.getLastDraftPageTitle().click({ force: true });
    PagesPage.getTitleField().clear().type(titlePage);
    PagesPage.getContentField().type(faker.lorem.words());

    PagesPage.getBackToPagesPageButton().click();
    PagesListPage.getLastDraftPageTitle().should(
      "contain.text",
      titlePage
    );
  });
});
