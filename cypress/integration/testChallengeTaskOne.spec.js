import './hooks/webHooks'
const searchPanel = require('./pages/searchPanel.js')

describe('what3words - Test Automation Challenge', () => {

  const what3words = 'brand.herbs.locked'
  context('Search and select the 3 words address', function () {
    it('should allow me to search and select w3w', () => {
      searchPanel.searchFor(what3words)
      searchPanel.selectW3WFromResults(what3words)
    })
  })
})