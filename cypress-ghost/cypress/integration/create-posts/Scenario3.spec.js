/// <reference types='cypress' />
import MenuPage from "../pageObjects/MenuPage";
import PostsPage from "../pageObjects/PostsPage";

context("Create post with bookmark", () => {
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

  it("should navigate to post editor by clicking new post button", () => {
    PostsPage.getNewPostButton().click();
    cy.url().should("include", "ghost/#/editor/post");
  });

  it("should fill inputs in post editor", () => {
    PostsPage.getTitleField().type("Test post #3 with Bookmark");

    PostsPage.getTitleField().should(
      "have.value",
      "Test post #3 with Bookmark"
    );
  });

  it("should open widgets menu", () => {
    PostsPage.getContentField().click();

    cy.wait(500);

    PostsPage.getAddCardButton().click();
    PostsPage.getCardMenu().should("be.visible");
  });

  it("should add bookmark field to content", () => {
    PostsPage.getBookmarkOption().click();

    PostsPage.getBookmarkInput().type("https://biblioteca.uniandes.edu.co/");
    PostsPage.getBookmarkInput().should("exist");
  });

  it("should open publish dialog when publish button is clicked", () => {
    PostsPage.getPublishTrigger().click();

    PostsPage.getPublishMenu().should("be.visible");
  });

  it("should publish post", () => {
    PostsPage.getSetItLiveOption().click();
    PostsPage.getPublishButton().click();

    PostsPage.getPublishButton().should("contain.text", "Published");
  });
});
