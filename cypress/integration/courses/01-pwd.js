describe('Sanity test', () => {
  it('checks true is truthful', () => {
    expect(true).to.equal(true)
  })
})

describe('ui-courses: tab navigation', () => {
  describe('Login > navigate to app > verify tabs work', () => {
    it('logs out if already logged in', () => {
      cy.visit('')

      // Warning: see caveats at https://docs.cypress.io/guides/core-concepts/conditional-testing.html#Element-existence
      // This is not working correctly yet, and may be impossible to do right.
      // console.log('considering whether to logout')
      cy.wait(2000) // long enough for the loaded app to start up
      cy.get('#root').then(($body) => {
        if ($body.find('#input-username').length) {
          // console.log('no need to logout: already at login page')
        } else {
          // console.log('logging out')
          cy.get('#profileDropdown').click()
          cy.get('#clickable-logout').click()
        }
      })
    })

    it('logs in', () => {
      cy.contains('Log in')
      cy.get('#input-username').type('diku_admin')
      cy.get('#input-password').type('admin')
      cy.get('#clickable-login').click()
      cy.contains('Welcome')
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
