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
  }
}