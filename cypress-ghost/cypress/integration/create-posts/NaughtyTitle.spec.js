/// <reference types='cypress' />
import MenuPage from "../pageObjects/MenuPage";
import PostsPage from "../pageObjects/PostsPage";
import PostListPage from "../pageObjects/PostListPage";
import DataPool from "../../data-pool";

const dataPool = new DataPool();

dataPool.apriori.getPostNaughtyTitle().forEach((post) => {
  context("Create draft post with content with text naughty #" + post.id, () => {
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

      PostsPage.getBackToPostsPageButton().click();
      PostListPage.getLastDraftPostTitle().should("contain.text", post.title);
    });
  });
});
