/// <reference types='cypress' />
import MenuPage from "../pageObjects/MenuPage";
import PagesPage from "../pageObjects/PagesPage";
import PagesListPage from "../pageObjects/PagesListPage";
import CreatePageAprioriData from "../data-pool/a-priori-page-data";

CreatePageAprioriData.getPageLongContentTextData().forEach((page) => {
  context("Create draft page with Long Content #" + page.id, () => {
    before(() => {
      cy.login();
    });

    beforeEach(() => {
      Cypress.Cookies.preserveOnce("ghost-admin-api-session");
    });

    afterEach(() => {
      cy.screenshot();
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

      PagesListPage.getLastDraftPageTitle().should(
        "contain.text",
        "(Untitled)"
      );
    });

    it("should fill inputs and update information page", () => {
      PagesListPage.getLastDraftPageTitle().click({ force: true });

      PagesPage.getTitleField().clear().type(page.title, { parseSpecialCharSequences: false });
      PagesPage.getContentField().type(page.content, { parseSpecialCharSequences: false });

      PagesPage.getBackToPagesPageButton().click();
      PagesListPage.getLastDraftPageTitle().should(
        "contain.text",
        page.title
      );
    });
  });
});
