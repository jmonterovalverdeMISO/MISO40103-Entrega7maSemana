/// <reference types="cypress" />
import TagPage from "../pageObjects/TagPage";
import DataPool from "../../data-pool/index";

const dataPool = new DataPool();

context("Create tag color input", () => {
  before(() => {
    cy.login();
  });

  beforeEach(() => {
    Cypress.Cookies.preserveOnce("ghost-admin-api-session");
    TagPage.goToNewTag();
  });

  dataPool.dynamic.getTags(25).forEach((tag) => {
    if (!tag.color) {
      return;
    }

    context(`when a valid ${tag.color} is provided`, () => {
      it('should show color in preview box', () => {
        const input = TagPage.getColorInput();
        input.type(tag.color.replace(/#/gi, ''), { force: true, parseSpecialCharSequences: false });
        input.blur();

        const colorBox = TagPage.getColorInputPreview();
  
        colorBox.should('have.attr', 'style').and('eq', `background-color: ${tag.color}`)
      });
    });
  });

  dataPool.dynamic.getDirtyTags(25).forEach((tag) => {
    if (!tag.color) {
      return;
    }

    context(`when an invalid ${tag.color} is provided`, () => {
      it('should show an error message', () => {
        const input = TagPage.getColorInput();
        input.type(tag.color, { force: true, parseSpecialCharSequences: false });
        input.blur();
  
        const message = TagPage.getErrorMessage();
        message.should('contain.text', 'The color should be in valid hex format')
      });
  
      it('should show white color in preview box', () => {
        const colorBox = TagPage.getColorInputPreview();
  
        colorBox.should('have.attr', 'style').and('eq', 'background-color: #ffffff')
      });
    });
  });
});