beforeEach(() => {
  cy.visit('/')
  cy.acceptAllCookies()
  cy.skipOnboarding()
})