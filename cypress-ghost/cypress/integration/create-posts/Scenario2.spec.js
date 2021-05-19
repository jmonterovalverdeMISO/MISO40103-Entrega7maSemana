/// <reference types='cypress' />
import MenuPage from "../pageObjects/MenuPage";
import PostsPage from "../pageObjects/PostsPage";

context("Create a published post", () => {
  before(() => {
    cy.login('3.3.0');
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("ghost-admin-api-session");
  });

  afterEach(() => {
    cy.screenshot();
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
    PostsPage.getTitleField().type("Test post #2");
    PostsPage.getContentField().click();
    PostsPage.getContentField().type("Test content #2")

    PostsPage.getTitleField().should("have.value", "Test post #2");
    PostsPage.getContentField().should(
      "contain.text",
      "Test content #2"
    );
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
