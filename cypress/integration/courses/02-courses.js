describe('ui-courses: course searching', () => {
  it('logs in and navigates to Course Reserves', () => {
    cy.login('diku_admin', 'admin')
    cy.get('#app-list-item-clickable-courses-module').click()
  })

  describe('searches and sorts', () => {
    describe('performs a search and sort', () => {
      it('searches', () => {
        cy.get('#input-courses-search').type('calcu')
        cy.get('#clickable-search-courses').click()
        cy.contains('3 records found')
      })
      it('sorts', () => {
        cy.get('#clickable-list-column-coursenumber').click()
        cy.contains('3 records found')
      })
    })
    describe('finds the expected records', () => {
      it('has three calculus records', () => {
        cy.get('[data-row-index="row-0"]').contains('Calculus 101')
        cy.get('[data-row-index="row-1"]').contains('Calculus 301')
        cy.get('[data-row-index="row-2"]').contains('Calculus 201')
      })
    })
  })

  describe('inspects a single record', () => {
    it('finds the record', () => {
      // Here we check parts of the record that should have been drawn
      // in from various different back-end objects (departments,
      // course-type, etc.)
      cy.get('[data-row-index="row-0"]').click()
      cy.contains('Calculus 101')
      cy.contains('Course 12345')
      cy.contains('Mathematics')
      cy.contains('Online')
      cy.contains('Annex')
      cy.contains('3 instructors')
      cy.contains('Michaelmas 2019')
      cy.contains('Item title: A semantic web primer')
      cy.contains('Main Library')
      cy.contains('TK5105.88815')
    })
  })
})
