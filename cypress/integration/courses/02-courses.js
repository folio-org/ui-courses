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
    it('closes the record', () => {
      // For some reason, both the <button> and the <span> that it
      // contains have the same data-* attribute, hence the first()
      cy.get('[data-test-pane-header-dismiss-button="true"]').first().click()
    })
  })
})


describe('ui-courses: course creation, editing and deletion', () => {
  it('logs in and navigates to Course Reserves', () => {
    cy.login('diku_admin', 'admin')
    cy.get('#app-list-item-clickable-courses-module').click()
  })

  describe('creates a new record', () => {
    it('creates the record', () => {
      cy.contains('Aardvark breeding').should('not.exist')
      cy.get('#clickable-new-course').click()
      cy.get('#edit-course-name').type('Aardvark breeding')
      cy.get('#edit-course-department').select('Earth Sciences')
      cy.get('#edit-course-number').type('AB101')
      cy.get('#edit-course-section').type('Aleph')
      cy.get('#edit-course-description').type('The care and feeding of tubulidentates')
      cy.get('#edit-course-type').select('In person')
      cy.get('#edit-course-registrar').type('rAB101')
      cy.get('#edit-course-external').type('xAB101')
      cy.get('#edit-course-term').select('Trinity 2020')
      cy.get('#edit-course-location').select('Main Library')
      cy.get('#clickable-create-course').click()
      cy.get('#clickable-reset-all').click()
      cy.contains('Aardvark breeding')
    })
    it('has expected contents', () => {
      cy.contains('Aardvark breeding').click()
      cy.contains('Aardvark breeding')
      cy.contains('Earth Sciences')
      cy.contains('AB101')
      cy.contains('Aleph')
      cy.contains('The care and feeding of tubulidentates')
      cy.contains('In person')
      cy.contains('rAB101')
      cy.contains('xAB101')
      cy.contains('Trinity 2020')
      cy.contains('Main Library')
    })
    it('adds instructors', () => {
      // No plugin available in unit test, so we have to enter by hand
      cy.contains('0 instructors')
      cy.contains('Edit instructor').should('not.exist')
      cy.get('#clickable-add-instructor').click()
      cy.get('#edit-instructor-name').type('Hillare Belloc')
      cy.get('#edit-instructor-barcode').type('12345')
      cy.get('#clickable-update-course').click()

      cy.contains('1 instructor')
      cy.contains('Edit instructor')
      cy.contains('12345')
      cy.get('#clickable-add-instructor').click()
      cy.get('#edit-instructor-name').type('G. K. Chesterton')
      cy.get('#edit-instructor-barcode').type('67890')
      cy.get('#clickable-update-course').click()

      cy.contains('2 instructors')
      cy.contains('G. K. Chesterton')
      cy.contains('67890')
    })
    it('edits an instructor', () => {
      // IDs are numbered from 0; #1 is second, which is Belloc by alpha-sorting
      cy.get('#clickable-edit-instructor-1').click()
      // XXX should work, does but not: cy.contains('Hillare Belloc')
      // XXX should work, does but not: cy.contains('12345')
      cy.get('#edit-instructor-name').clear().type('George Bernard Shaw')
      cy.get('#edit-instructor-barcode').clear().type('13579')
      cy.get('#clickable-update-course').click()

      cy.contains('2 instructors')
      cy.contains('George Bernard Shaw')
      cy.contains('13579')
      cy.contains('Hillare Belloc').should('not.exist')
      cy.contains('12345').should('not.exist')
    })
    it('deletes the instructors', () => {
      cy.get('#clickable-remove-instructor-0').click()
      // Chesterton should be gone as he is alphatically first
      cy.contains('1 instructor')
      cy.contains('George Bernard Shaw')
      cy.contains('13579')
      cy.contains('G. K. Chesterton').should('not.exist')
      cy.contains('12345').should('not.exist')

      cy.get('#clickable-remove-instructor-0').click()
      cy.contains('0 instructors')
      cy.contains('George Bernard Shaw').should('not.exist')
      cy.contains('13579').should('not.exist')
    })
    it('edits the record', () => {
      cy.get('#clickable-edit-course').click()
      // Change a field from the course itself and one from the listing
      cy.get('#edit-course-name').clear().type('Aardvark husbandry')
      cy.get('#edit-course-registrar').clear().type('sAB101')
      cy.get('#clickable-update-course').click()
      // This leaves us on the view-record page
      cy.contains('Aardvark husbandry')
      cy.contains('Aardvark breeding').should('not.exist')
      cy.contains('Earth Sciences')
      cy.contains('AB101')
      cy.contains('Aleph')
      cy.contains('The care and feeding of tubulidentates')
      cy.contains('In person')
      cy.contains('rAB101').should('not.exist')
      cy.contains('sAB101')
      cy.contains('xAB101')
      cy.contains('Trinity 2020')
      cy.contains('Main Library')
    })
    it('deletes the record', () => {
      cy.get('#clickable-edit-course').click()
      cy.contains('Really delete').should('not.exist')
      cy.get('#clickable-delete-course').click()
      cy.contains('Really delete')
      cy.get('#clickable-really-delete-course').click()
      // Now we're back on the search page
      cy.contains('Aardvark husbandry').should('not.exist')
    })
  })
})
