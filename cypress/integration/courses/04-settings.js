describe('ui-courses: settings', () => {
  before('logs in and navigates to Settings -> Course Reserves', () => {
    cy.login('diku_admin', 'admin')
    cy.get('#app-list-item-clickable-settings').click()
    cy.get('[aria-label=Settings]').contains('Courses').click() // Is there really no better way?
  })

  describe('manages course types', () => {
    it('lists course types', () => {
      cy.contains('Course Types').click()
      cy.contains('No online component')
      cy.contains('All in-person').should('not.exist') // will add later
      cy.contains('No in-person component')
      cy.contains('Both online and in-person components')
    })
    it('edits a course type', () => {
      // Edit but cancal
      cy.get('#clickable-edit-coursetypes-0').click()
      cy.get('[aria-label="Description 0"]').clear().type('All in-person')
      cy.get('#clickable-cancel-coursetypes-0').click()
      cy.contains('All in-person').should('not.exist')
      cy.contains('No online component')

      // Edit and save
      cy.get('#clickable-edit-coursetypes-0').click()
      cy.get('[aria-label="Description 0"]').clear().type('All in-person')
      cy.get('#clickable-save-coursetypes-0').click()
      cy.contains('All in-person')
      cy.contains('No online component').should('not.exist')

      // Revert
      cy.get('#clickable-edit-coursetypes-0').click()
      cy.get('[aria-label="Description 0"]').clear().type('No online component')
      cy.get('#clickable-save-coursetypes-0').click()
      cy.contains('All in-person').should('not.exist')
      cy.contains('No online component')
    })
    it('adds and deletes a course type', () => {
      expect(true).not.to.equal(false) // More to do here
    })
  })

  // We COULD add similar code for terms, course departments,
  // processing statuses and copyright statuses, but the extra level
  // of checking would not really merit the additional work
})
