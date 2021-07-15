Cypress.Commands.add('acceptAllCookies', () => {
  cy.get('#cookies-title').should('have.text', 'Our cookies')
  cy.contains('Accept all cookies').click()
})

Cypress.Commands.add('skipOnboarding', () => {
  cy.get('.OnboardingDialog-SlidesWrap')
  cy.get('.OnboardingDialog-Skip').click()
  cy.get('[data-testid="OnboardingPrompt-CloseButton"]').click()
})

Cypress.Commands.add('switchToLang', (lang) => {
  cy.get('[data-testid="HeaderMenu-Menu_open"]').click()
  if (cy.get('[data-testid="ThreeWordsLanguage"]').find('.ListItemValue-Label').invoke('text') !== lang) {
    cy.get('[data-testid="ThreeWordsLanguage"]').click()
    cy.get('[data-testid="Language-Name"]').each(($lan) => {
      if ($lan.text() === lang) {
        $lan.click()
        return false
      }
    })
  }
  cy.get('[data-testid="HeaderMenu-Menu_close"]').click()
  cy.get('[data-testid="HeaderMenu-Menu_open"]').click()
  cy.get('[data-testid="ThreeWordsLanguage"]').find('.ListItemValue-Label').should('have.text', lang)
  cy.get('[data-testid="HeaderMenu-Menu_close"]').click()
})
