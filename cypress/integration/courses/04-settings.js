describe('ui-courses: settings', () => {
  before('logs in and navigates to Settings -> Course Reserves', () => {
    cy.login('diku_admin', 'admin')
    cy.get('#app-list-item-clickable-settings').click()
    cy.get('[aria-label=Settings]').contains('Courses').click() // Is there really no better way?
  })

  function describeTests(descriptor) {
    const { singular, plural, settingsName, id, initialDescription, newDescription, newName, secondDescription } = descriptor

    describe(`manages ${plural}`, () => {
      it('lists course types', () => {
        cy.contains(settingsName).click()
        cy.contains(initialDescription)
        cy.contains(newDescription).should('not.exist') // will add later
        cy.contains(secondDescription)
      })
      it(`edits a ${singular}`, () => {
        // Edit but cancal
        cy.get(`#clickable-edit-${id}-0`).click()
        cy.get('[aria-label="Description 0"]').clear().type(newDescription)
        cy.get(`#clickable-cancel-${id}-0`).click()
        cy.contains(newDescription).should('not.exist')
        cy.contains(initialDescription)

        // Edit and save
        cy.get(`#clickable-edit-${id}-0`).click()
        cy.get('[aria-label="Description 0"]').clear().type(newDescription)
        cy.get(`#clickable-save-${id}-0`).click()
        cy.contains(newDescription)
        cy.contains(initialDescription).should('not.exist')

        // Revert
        cy.get(`#clickable-edit-${id}-0`).click()
        cy.get('[aria-label="Description 0"]').clear().type(initialDescription)
        cy.get(`#clickable-save-${id}-0`).click()
        cy.contains(newDescription).should('not.exist')
        cy.contains(initialDescription)
      })
      it(`adds and deletes a ${singular}`, () => {
        cy.get(`#clickable-add-${id}`).click()
        cy.get('[aria-label="Name 0"]').type(`AAA ${newName}`) // force to top
        cy.get('[aria-label="Description 0"]').clear().type(newDescription)
        cy.get(`#clickable-save-${id}-0`).click()
        cy.contains(newDescription)
        cy.contains(initialDescription)

        cy.get(`#clickable-delete-${id}-0`).click()
        cy.contains('will be deleted')
        cy.get('#clickable-delete-controlled-vocab-entry-confirmation-confirm').click()
        cy.contains(newDescription).should('not.exist')
        cy.contains(initialDescription)
      })
    })
  }

  // Testing terms is more complicated due to the datepickers; skip for now
  describeTests({
    singular: 'course type',
    plural: 'course types',
    settingsName: 'Course Types',
    id: 'coursetypes',
    initialDescription: 'No online component',
    newDescription: 'All in-person',
    newName: 'Colocated',
    secondDescription: 'No in-person component',
  })
  describeTests({
    singular: 'course department',
    plural: 'course departments',
    settingsName: 'Course Departments',
    id: 'departments',
    initialDescription: 'Including geology, petrology and palaeontology',
    newDescription: 'The study of the planet',
    newName: 'Geology',
    secondDescription: 'Including both pure and applied maths',
  })
})
