/// <reference types="cypress" />

class TagPage {
    static getNameInput() {
        return cy.get('input[name="name"]');
    }
    static getSaveButton() {
        return cy.get('.view-actions button')
    }
}

export default TagPage;
