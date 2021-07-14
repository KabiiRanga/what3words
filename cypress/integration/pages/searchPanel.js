module.exports = {
  searchFor: function (address) {
    cy.get('.SearchPanel-InputContainer').type(address)
  },
  getSearchResults: function () {
    return cy
      .get('[data-testid="SearchPanel-Item"]')
      .as('searchResultsBox')
  },
  selectW3WFromResults: function (what3words) {
    this.getSearchResults()
      .should(($list) => {
        expect($list).to.have.length(3)
        expect($list).to.contain(what3words)
      })
      .each(($ele) => {
        if ($ele.find('[data-testid="ThreeWordAddress-Text"]').text() === what3words) {
          $ele.click()
          return false
        }
      })
      .then(() => {
        cy.get('[data-testid="ThreeWordAddress-Text"]').should('have.text', what3words)
      })
  },
  selectLocationFromResults: function (expLocation) {
    this.getSearchResults()
      .should(($list) => {
        expect($list).to.have.length(5)
      })
      .each(($ele) => {
        if ($ele.find('.SearchPanel-LocationLine1').text() === expLocation) {
          $ele.click()
          return false
        }
      }).then(() => {
        cy.get('[data-testid="ThreeWordAddress-Text"]').should('not.have.text', '').invoke('text').should('match', /^([a-z]+\.[a-z]+\.[a-z]+)$/)
      })
  },
  submitSearch: function () {
    cy.get('[data-testid="SearchPanel-Input"]').type('{enter}')
  },
  printW3WAddress: function () {
    cy.get('[data-testid="ThreeWordAddress-Text"]').as('w3w').should('not.have.text', '').invoke('text').then((text) => {
      expect(text.split('.')).to.have.lengthOf(3)
      cy.log('w3w address: ' + text)
    })
  },
  getWarningMessage: function () {
    return cy.get('.NotificationMessage-Label div').as('warningMessage').should('be.visible')
  }
}
