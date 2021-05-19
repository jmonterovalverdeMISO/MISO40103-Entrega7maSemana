/// <reference types='cypress' />
import MenuPage from "../pageObjects/MenuPage";
import PostsPage from "../pageObjects/PostsPage";

context("Create post with tags", () => {
  before(() => {
    cy.login();
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
    PostsPage.getTitleField().type("Test post #4");
    PostsPage.getContentField().click();
    PostsPage.getContentField().type("Test content #4");

    PostsPage.getTitleField().should("have.value", "Test post #4");
    PostsPage.getContentField().should("contain.text", "Test content #4");
  });

  it("should open post settings", () => {
    PostsPage.getPostSettingsButton().click();

    PostsPage.getSettingsMenu().should("be.visible");
  });

  it("should open tag dropdown clicking in tags field", () => {
    PostsPage.getTagsTextbox().click();
    PostsPage.getTagsDropdown().should("be.visible");
  });

  it("should add tag clicking an option", () => {
    PostsPage.getFirstTagFromList().click();
    PostsPage.getTagsTextbox().find('li').should("have.length", 1);
  });

  it("should open publish dialog when publish button is clicked", () => {
    PostsPage.getCloseSettingsButton().click();
    PostsPage.getPublishTrigger().click();

    PostsPage.getPublishMenu().should("be.visible");
  });

  it("should schedule post", () => {
    PostsPage.getSetItLiveOption().click();
    PostsPage.getPublishButton().click();

    PostsPage.getPublishButton().should("contain.text", "Published");
  });
});
