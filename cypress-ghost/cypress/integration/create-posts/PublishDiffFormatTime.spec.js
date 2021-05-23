/// <reference types='cypress' />
import MenuPage from "../pageObjects/MenuPage";
import PostsPage from "../pageObjects/PostsPage";
import PostListPage from "../pageObjects/PostListPage";

const postList = require("../../fixtures/create-posts/Mokaroo-Post-TimesDiffFormat.json");

postList.forEach((post) => {
  context("Create draft post with characters differents #" + post.id, () => {
    before(() => {
      cy.login();
    });

    beforeEach(() => {
      Cypress.Cookies.preserveOnce("ghost-admin-api-session");
    });

    after(() => {
      cy.logout();
    });

    it("should navigate to /posts from home", () => {
      MenuPage.getPostsLink().click();
      cy.url().should("include", "ghost/#/posts");
    });

    it("should navigate to post editor by clicking new page button", () => {
      PostsPage.getNewPostButton().click();
      cy.url().should("include", "ghost/#/editor/post");
    });

    it("should create an untitled draft post when no information is provided", () => {
      PostsPage.getTitleField().click();
      PostsPage.getBackToPostsPageButton().click();

      PostListPage.getLastDraftPostTitle().should("contain.text", "(Untitled)");
    });

    it("should fill inputs and update information page", () => {
      PostListPage.getLastDraftPostTitle().click({ force: true });


      PostsPage.getTitleField().clear().type(post.title);
      PostsPage.getContentField().type(post.content);
      cy.wait(300);
    });

    it("should open publish dialog when publish button is clicked", () => {
        PostsPage.getPublishTrigger().click();
    
        PostsPage.getPublishMenu().should("be.visible");
      });
    
      it("should schedule post", () => {
        PostsPage.getPublishLaterOption().click();
        cy.get('.gh-date-time-picker-time > input').first().click().clear().type(post.datePublish);
        cy.wait(300);
        PostsPage.getPublishButton().click();
        cy.wait(500);

      });
  });
});
