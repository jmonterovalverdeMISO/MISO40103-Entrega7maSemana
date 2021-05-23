/// <reference types='cypress' />
import MenuPage from "../pageObjects/MenuPage";
import PagesPage from "../pageObjects/PagesPage";
import PagesListPage from "../pageObjects/PagesListPage";
import DataPool from "../../data-pool";

const dataPool = new DataPool();

dataPool.random.getBoundariesTestData().forEach((page) => {
  context("Create draft to validate: " + page.scenarioName, () => {
    before(() => {
      cy.login();
    });

    beforeEach(() => {
      Cypress.Cookies.preserveOnce("ghost-admin-api-session");
    });

    after(() => {
      cy.logout();
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
      cy.wait(3000);
      PagesListPage.getLastDraftPageTitle().should(
        "contain.text",
        "(Untitled)"
      );
    });

    it("should fill inputs and update information page", () => {
      PagesListPage.getLastDraftPageTitle().click({ force: true });

      PagesPage.getTitleField().clear().type(page.title, { parseSpecialCharSequences: false });
      PagesPage.getContentField().type(page.content, { parseSpecialCharSequences: false });
      PagesPage.getHeaderStatusLabel().click();
      PagesPage.getBackToPagesPageButton().click();
      cy.wait(1000);
      if(page.title.length > 255)
      {
        PagesPage.getLeaveButton().click();
      }
      cy.wait(3000);
      PagesListPage.getLastDraftPageTitle().should(
        "contain.text",
        page.title
      );
    });
  });
});
