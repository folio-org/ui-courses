import localforage from 'localforage'


describe('Sanity test', () => {
  it('checks one and one is two', () => {
    expect(1 + 1).to.equal(2)
  })
})


describe('ui-courses: tab navigation', () => {
  describe('Login > navigate to app > verify tabs work', () => {
    // These first two steps are the same as cy.login()

    it('logs out if already logged in', () => {
      // We use a behind-the-scenes method of ensuring we are logged
      // out, rather than using the UI, in accordance with the Best
      // Practices guidance at
      // https://docs.cypress.io/guides/references/best-practices.html#Organizing-Tests-Logging-In-Controlling-State
      localforage.removeItem('okapiSess')
    })

    it('logs in', () => {
      // But it's not feasible to log in to Stipes using a similar
      // behind-the-scenes approach, so we have to use the UI.
      cy.visit('')
      cy.contains('Log in')
      cy.get('#input-username').type('diku_admin')
      cy.get('#input-password').type('admin')
      cy.get('#clickable-login').click()
      // Login can be too slow for the default 4-second timeout
      cy.contains('Welcome', { timeout: 10000 })
    })

    it('should open app and see selected Course Reserves tab', () => {
      cy.get('#app-list-item-clickable-courses-module').click()
      cy.get('#clickable-new-course')
      cy.url().should('contain', '/courses')
      cy.get('#segment-navigation-courses').should('have.attr', 'aria-selected', 'true')
      cy.get('#segment-navigation-reserves').should('have.attr', 'aria-selected', 'false')
    })

    it('should click Reserves tab and see updated URL', () => {
      cy.get('#segment-navigation-reserves').click()
      cy.url().should('contain', '/reserves')
      cy.get('#segment-navigation-reserves').should('have.attr', 'aria-selected', 'true')
      cy.get('#segment-navigation-courses').should('have.attr', 'aria-selected', 'false')
    })

    it('should click Courses tab and see updated URL', () => {
      cy.get('#segment-navigation-courses').click()
      cy.url().should('contain', '/courses')
      cy.get('#segment-navigation-courses').should('have.attr', 'aria-selected', 'true')
      cy.get('#segment-navigation-reserves').should('have.attr', 'aria-selected', 'false')
    })
  })
})


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
