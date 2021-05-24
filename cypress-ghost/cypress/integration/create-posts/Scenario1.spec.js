/// <reference types='cypress' />
import MenuPage from "../pageObjects/MenuPage";
import PostsPage from "../pageObjects/PostsPage";
import PostListPage from "../pageObjects/PostListPage";
import faker from 'faker';

context("Create draft post", () => {
  before(() => {
    cy.login();
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("ghost-admin-api-session");
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
    const tit = faker.lorem.words(3);
    PostListPage.getLastDraftPostTitle().click({ force: true });

    PostsPage.getTitleField().clear().type(tit);
    PostsPage.getContentField().type(faker.lorem.words(20));

    PostsPage.getBackToPostsPageButton().click();
    PostListPage.getLastDraftPostTitle().should("contain.text", tit);
  });
});
