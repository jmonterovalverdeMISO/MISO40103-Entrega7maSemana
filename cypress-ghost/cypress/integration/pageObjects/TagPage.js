/// <reference types="cypress" />

class TagPage {
    static goToNewTag() {
        cy.visit('/ghost/#/tags/new');
        cy.wait(500);
    }
    static getColorInput() {
        return cy.get('input[name="accent-color"]');
    }
    static getColorInputPreview() {
        return cy.get('.input-color .color-box');
    }
    static getErrorMessage() {
        return cy.get('span.error');
    }
    static getNameInput() {
        return cy.get('input[name="name"]');
    }
    static getSaveButton() {
        return cy.get('.view-actions button')
    }
}

export default TagPage;
