import LoginPage from "../integration/pageObjects/LoginPage";
import MenuPage from "../integration/pageObjects/MenuPage";

Cypress.Commands.add('login', () => {
  const user = Cypress.env('GHOST_USER') || 'user@test.com';
  const password = Cypress.env('GHOST_PASS') || 'dev1234567';

  Cypress.config('baseUrl', Cypress.env('GHOST_3_42_5'))

  cy.visit('/ghost/#/signin')
  cy.wait(5000);
  LoginPage.getUserNameField().type(user)
  LoginPage.getPasswordField().type(password)
  LoginPage.getSignInButon().click()

  cy.wait(500)
})

Cypress.Commands.add('logout', () => {
  cy.visit('/ghost/#/signout')
  cy.wait(500)
})