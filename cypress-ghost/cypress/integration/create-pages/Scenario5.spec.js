/// <reference types='cypress' />
import MenuPage from "../pageObjects/MenuPage";
import PagesPage from "../pageObjects/PagesPage";
import PagesListPage from "../pageObjects/PagesListPage";

context("Create Page - ", () => {
    before(() => {
        cy.login();
      });

  it("creates pages", () => {
    cy.url().should("include", "ghost/#/site");
    MenuPage.getPagesLink().click();
    cy.wait(5000);
    cy.url().should("include", "ghost/#/pages");
    PagesPage.getNewPageButton().click();
    cy.url().should("include", "ghost/#/editor/page");
    PagesPage.getTitleField().click();
    PagesPage.getBackToPagesPageButton().click();
    cy.wait(5000);
  });

  it("fills pages fields with injection of HTML", () => {
    MenuPage.getPagesLink().click();
    cy.wait(5000);
    PagesListPage.getLastDraftPageTitle().click({ force: true });
    cy.wait(5000);
    cy.url().should("include", "ghost/#/editor/page");
    PagesPage.getTitleField().clear().type("Test page #5");
    PagesPage.getPageUnformattedContentField().click();
    PagesPage.getPlusMenu().click();
    PagesPage.getAddHtmlCode().click();
    PagesPage.getEditorHtmlCode().type('<h1> The &lt;div&gt; Tag </h1><div style="background-color:#8ebf42"><p>We use the &lt;div&gt; tag to group two paragraphs for applying a background to the text, and to add color to this<span style="color:#1c87c9">word</span> we place it within &lt;span&gt; tag.</p><p> Pay attention, that the &lt;div&gt; tag is a block-level element, so a line break is placed before and after it.</p></div>');
    PagesPage.getMainPanel().click({ force: true });
    PagesPage.getPublishMenu().click();
    PagesPage.getSetItLiveOption().click();
    PagesPage.getPublishButton().click();
	  PagesPage.getMessageViewPage().contains('View Page').click({ force: true });
  });
});
