describe('ui-courses: reserves searching', () => {
  before('logs in and navigates to Course Reserves', () => {
    cy.login('diku_admin', 'admin')
    cy.get('#app-list-item-clickable-courses-module').click()
  })

  describe('searches and sorts reserves', () => {
    describe('performs a search and sort', () => {
      it('navigates to the reserves view', () => {
        cy.get('#segment-navigation-reserves').click()
      })
      it('searches', () => {
        cy.get('#input-reserves-search').type('seman')
        cy.get('#clickable-search-reserves').click()
        cy.contains('1 record found')
      })
      it('resets the search', () => {
        cy.get('#clickable-reset-all').click()
        cy.contains('2 records found')
      })
      it('sorts by title', () => {
        cy.get('#clickable-list-column-title').click()
        cy.get('[data-row-index=row-0]').contains('semantic')
        cy.get('[data-row-index=row-1]').contains('Bridget')
      })
      it('sorts by bard=code', () => {
        cy.get('#clickable-list-column-barcode').click()
        cy.get('[data-row-index=row-0]').contains('Bridget')
        cy.get('[data-row-index=row-1]').contains('semantic')
      })
    })
  })

  describe('inspects a single record', () => {
    it('finds the record', () => {
      cy.get('[data-row-index="row-0"]').click()
      cy.contains('diaries')
      cy.contains('Annex')
      // XXX should work, does but not: cy.contains('2020-04-26')
      cy.contains('Intro to Palaeontology')
      cy.contains('Intro to Palaeobiology')
      cy.contains('Calculus 301')
    })
    it('closes the record', () => {
      cy.get('#close-reserve-form-button').click()
    })
  })
})
