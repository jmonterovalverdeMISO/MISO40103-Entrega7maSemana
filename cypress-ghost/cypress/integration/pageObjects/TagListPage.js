/// <reference types="cypress" />

class TagListPage {
  static getPublicTab() {
    return cy.get(".view-actions button").first();
  }
  static getInternalTab() {
    return cy.get(".view-actions button").last();
  }
  static getNewButton() {
    return cy.get('.view-actions a[href="#/tags/new/"]');
  }
  static getLastTag() {
    return cy.get(".tags-list li").last();
  }
}

export default TagListPage;
