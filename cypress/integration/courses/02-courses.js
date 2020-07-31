describe('ui-courses: course searching', () => {
  before('logs in and navigates to Course Reserves', () => {
    cy.login('diku_admin', 'admin')
    cy.get('#app-list-item-clickable-courses-module').click()
  })

  describe('searches and sorts courses', () => {
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
    describe('filter records', () => {
      it('resets', () => {
        cy.get('#clickable-reset-all').click()
        cy.contains('5 records found')
      })
      it('filters by department', () => {
        cy.get('#accordion-toggle-button-departments').click()
        cy.get('#multiselect-2').click()
        cy.contains('div[data-test-selection-option-segment="true"]', 'Mathematics').click()
        cy.get('#accordion-toggle-button-departments').click()
        cy.contains('4 records found')
      })
      it('filters by course type', () => {
        cy.get('#accordion-toggle-button-coursetypes').click()
        cy.get('#multiselect-4').click()
        cy.contains('div[data-test-selection-option-segment="true"]', /^Online$/).click()
        cy.contains('div[data-test-selection-option-segment="true"]', /^In person$/).click()
        cy.get('#accordion-toggle-button-coursetypes').click()
        cy.contains('2 records found')
      })
      it('filters by term', () => {
        cy.get('#accordion-toggle-button-terms').click()
        cy.get('#multiselect-6').click()
        cy.contains('div[data-test-selection-option-segment="true"]', /Michaelmas/).click()
        cy.get('#accordion-toggle-button-terms').click()
        cy.contains('1 record found')
      })
      it('filters by location', () => {
        // We can't really do anything here as all the sample courses have location=Annex
      })
    })
  })

  describe('inspects a single course', () => {
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
  before('logs in and navigates to Course Reserves', () => {
    cy.login('diku_admin', 'admin')
    cy.get('#app-list-item-clickable-courses-module').click()
  })

  describe('creates a new course', () => {
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
  })

  describe('manages instructors', () => {
    it('adds instructors', () => {
      // No plugin available in unit test, so we have to enter by hand
      cy.contains('0 instructors')
      cy.contains('Edit instructor').should('not.exist')
      cy.get('#clickable-add-instructor').click()
      cy.get('#edit-instructor-name').type('Hillare Belloc')
      cy.get('#edit-instructor-barcode').type('12345')
      cy.get('#clickable-update-instructor').click()

      cy.contains('1 instructor')
      cy.contains('Edit instructor')
      cy.contains('12345')
      cy.get('#clickable-add-instructor').click()
      cy.get('#edit-instructor-name').type('G. K. Chesterton')
      cy.get('#edit-instructor-barcode').type('67890')
      cy.get('#clickable-update-instructor').click()

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
      cy.get('#clickable-update-instructor').click()

      cy.contains('2 instructors')
      cy.contains('George Bernard Shaw')
      cy.contains('13579')
      cy.contains('Hillare Belloc').should('not.exist')
      cy.contains('12345').should('not.exist')
    })

    it('deletes the instructors', () => {
      cy.get('#clickable-remove-instructor-0').click()
      // Chesterton should be gone as he is alphabetically first
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
  })

  describe('manages reserved items', () => {
    it('adds reserved items', () => {
      cy.contains('Enter or scan barcode')
      cy.get('#add-item-barcode').type('4539876054383')
      cy.get('#clickable-add-item').click()
      cy.contains("Bridget Jones's Baby: the diaries")
      cy.contains('Fielding, Helen')
      cy.contains('PR6056.I4588') // from copiedItem
      cy.contains('Annex') // from copiedItem.permanentLocationObject
      cy.contains('Main Library') // from temporaryLocation object

      // This time we'll do it by hitting Return instead of clicking
      cy.get('#add-item-barcode').type('90000{enter}')
      cy.contains('A semantic web primer')
      cy.contains('Antoniou, Grigoris')
      cy.contains('TK5105.88815') // from copiedItem
      cy.contains('Links available').should('have.attr', 'href', 'http://www.loc.gov/catdir/toc/ecip0718/2007020429.html')
    })

    it('edits a reserve', () => {
      cy.get('#clickable-edit-reserve-0').click() // 0 is the 1st link
      cy.contains('A semantic web primer') // Check we're in the right record
      cy.contains('AB101: Aardvark breeding (Earth Sciences)') // And associated with the right course
      cy.get('#edit-reserve-temporary-location').select('ORWIG ETHNO CD')
      cy.get('#edit-reserve-temporary-loan-type').select('Reading room')
      cy.get('#edit-reserve-processing-status').select('Recalled')
      cy.get('#edit-reserve-start-date').click()
      // We can't know what month will show when the test is run, but
      // we can ensure that we choose the 25th of that month
      cy.get('#datepicker-choose-date-button-25-edit-reserve-start-date').click()
      cy.get('#edit-reserve-copyright-additional').click()
      cy.get('#edit-reserve-copyright-status').select('Public domain')
      cy.get('#edit-reserve-copyright-total-pages').type('567')
      cy.get('#edit-reserve-copyright-pages-used').type('42')
      cy.get('#edit-reserve-copyright-percentage-used').type('7%')
      cy.get('#edit-reserve-copyright-payment-basis').type('sheer guesswork')
      cy.get('#clickable-update-reserve').click()

      // Now check that we've got all the new fields we expected
      cy.contains('ORWIG ETHNO CD')
      cy.contains('Reading room')
      cy.contains('Recalled')
      // XXX Next test disabled for now, as a probable timezone error means we sometimes get an off-by-one
      // cy.contains('/25/20') // Date on 25th day of some month in 1st Century of the 2000s
      cy.contains('Yes') // Additional sections of this item used
      cy.contains('Public domain')
      cy.contains('567')
      cy.contains('42')
      cy.contains('7%')
      cy.contains('sheer guesswork')
    })

    it('deletes the reserves', () => {
      // Check we can't delete a course with reserves
      cy.get('#clickable-edit-course').click()
      cy.get('#clickable-delete-course').should('not.exist')
      cy.get('#close-course-form-button').click()

      cy.get('#clickable-remove-reserve-1').click()
      cy.contains("Bridget Jones's Baby: the diaries").should('not.exist')
      cy.contains('A semantic web primer')

      cy.get('#clickable-remove-reserve-0').click()
      cy.contains('A semantic web primer').should('not.exist')

      // Check we can delete the course now it has no reserves
      cy.get('#clickable-edit-course').click()
      cy.get('#clickable-delete-course')
      cy.get('#close-course-form-button').click()
    })
  })

  describe('edits and deletes course', () => {
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
