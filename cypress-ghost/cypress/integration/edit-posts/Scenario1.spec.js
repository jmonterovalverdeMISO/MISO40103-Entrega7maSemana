/// <reference types='cypress' />
import MenuPage from "../pageObjects/MenuPage";
import PostsPage from "../pageObjects/PostsPage";
import PostListPage from "../pageObjects/PostListPage";

context("Edit published post", () => {
  before(() => {
    cy.login();
    cy.visit("ghost/#/editor/post");

    PostsPage.getTitleField().type("Edit test post");
    PostsPage.getContentField().type("Edit test content");

    PostsPage.getPublishTrigger().click();
    PostsPage.getSetItLiveOption().click();
    PostsPage.getPublishButton().click();

    cy.visit("ghost/#/site");
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("ghost-admin-api-session");
  });

  afterEach(() => {
    cy.screenshot();
  });

  it("should navigate to /posts from home", () => {
    cy.wait(3000);
    MenuPage.getPostsLink().click();
    cy.url().should("include", "ghost/#/posts");
  });

  it("should navigate to last published post", () => {
    PostListPage.getLastPublishedPostTitle().click({ force: true });
    cy.url().should("include", "ghost/#/editor/post");
  });

  it("should load previous values", () => {
    PostsPage.getTitleField().should("have.value", "Edit test post");
    PostsPage.getContentField().should("contain.text", "Edit test content");
  });

  it("should change previous values", () => {
    PostsPage.getTitleField().clear().type("Edit test post updated");
    PostsPage.getContentField().click();
    PostsPage.getContentField().clear().type("Edit test content updated");

    PostsPage.getTitleField().should("have.value", "Edit test post updated");
    PostsPage.getContentField().should(
      "contain.text",
      "Edit test content updated"
    );
  });

  it("should open update dialog when publish button is clicked", () => {
    PostsPage.getPublishTrigger().click();

    PostsPage.getPublishMenu().should("be.visible");
  });

  it("should update post", () => {
    PostsPage.getPublishButton().click();

    PostsPage.getPublishButton().should("contain.text", "Updated");
  });
});
