describe('ui-courses: duplicating courses', () => {
  before('logs in and navigates to Course Reserves', () => {
    cy.login('diku_admin', 'admin')
    cy.get('#app-list-item-clickable-courses-module').click()
  })

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

  describe('inspects a single record', () => {
    it('finds the record', () => {
      cy.get('[data-row-index="row-0"]').click()
      cy.contains('Calculus 101')
      cy.contains('Mathematics')
      cy.contains('12345')
      cy.contains('Main')
      cy.contains('Basic differentiation and integration')
      cy.contains('Online')
      cy.contains('external1')
      cy.contains('external2')
      cy.contains('Annex')
      cy.contains('Taylor, Mike')
      cy.contains('A semantic web primer')
    })
  })

  describe('duplicates a course', () => {
    it('opens the duplicate modal', () => {
      cy.contains('button', 'Actions').click()
      cy.get('#clickable-duplicate-course').click()
      cy.get('#duplicate-course-modal').should('be.visible')
      cy.contains('#duplicate-course-modal', 'Term')
      cy.contains('#duplicate-course-modal', 'Duplicate all cross-listed courses')
      cy.contains('#duplicate-course-modal', 'Create duplicate course')
    })
    it('duplicates the course', () => {
      cy.get('[data-test-select-term-for-duplicate-course]').select('Trinity 2020')
      cy.get('[data-test-checkbox-duplicate-crosslisted-courses]').check()
      cy.get('[data-test-duplicate-modal-clickable-duplicate]').click()
    })
    it('verifies values', () => {
      cy.contains('Calculus 101 - Duplicate')

      cy.contains('Mathematics')
      cy.contains('12345')
      cy.contains('Main')
      cy.contains('Basic differentiation and integration')
      cy.contains('Online')
      cy.contains('external1')
      cy.contains('external2')
      cy.contains('Annex')
      cy.contains('Taylor, Mike')
      cy.contains('A semantic web primer')

      cy.contains('Trinity 2020')
    })
    it('deletes duplicated course', () => {
      cy.get('#clickable-remove-reserve-0').click()
      cy.contains('button', 'Actions').click()
      cy.get('#clickable-edit-course').click()
      cy.get('#clickable-delete-course').click()
      cy.get('#clickable-really-delete-course').click()
    })
  })
})
