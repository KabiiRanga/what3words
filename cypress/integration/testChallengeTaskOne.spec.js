import './hooks/webHooks'
const searchPanel = require('./pages/searchPanel.js')

describe('what3words - Test Automation Challenge', () => {
  const what3words = 'certified.potato.vine'
  context('Search and select the 3 words address', function () {
    it('should allow me to search and select w3w', () => {
      searchPanel.searchFor(what3words)
      searchPanel.selectW3WFromResults(what3words)
    })
  })

  const searchAddress = 'Tower Bridge'
  const expAddress = 'Tower Bridge hotel'
  context('Search for a location with partial text match', function () {
    it('should be given 5 matched locations and allow me to select desired one', () => {
      searchPanel.searchFor(searchAddress)
      searchPanel.selectLocationFromResults(expAddress)
    })
  })

  const coordinates = '51.521251, -0.20358600'
  const lang = 'German'
  context('Find w3w by coordinates in any language', function () {
    it('should allow me to change w3w language and search by coordinates', () => {
      cy.switchToLang(lang)
      searchPanel.searchFor(coordinates)
      searchPanel.submitSearch()
      searchPanel.printW3WAddress()
    })
  })

  const invalidAddress = 'hear.limited.frown.know'
  context('Invalid w3w address should throw warning', function () {
    it('should display warning message for invalid address', () => {
      searchPanel.searchFor(invalidAddress)
      searchPanel.getWarningMessage().should('have.text', 'No address found.Please try searching for the town or nearby place and zoom in to find the what3words address.')
    })
  })
})
