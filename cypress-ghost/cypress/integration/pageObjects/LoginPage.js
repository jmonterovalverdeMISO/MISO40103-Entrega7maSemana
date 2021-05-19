/// <reference types='cypress' />

class LoginPage {
  static getPasswordField() {
    return cy.get("#ember10");
  }
  static getUserNameField() {
    return cy.get("#ember8");
  }
  static getSignInButon() {
    return cy.get(
      ".login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view"
    );
  }
}
export default LoginPage;
