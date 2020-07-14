// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import localforage from 'localforage'

Cypress.Commands.add('login', (username, password) => {
  // We use a behind-the-scenes method of ensuring we are logged
  // out, rather than using the UI, in accordance with the Best
  // Practices guidance at
  // https://docs.cypress.io/guides/references/best-practices.html#Organizing-Tests-Logging-In-Controlling-State
  localforage.removeItem('okapiSess')

  // But it's not feasible to log in to Stipes using a similar
  // behind-the-scenes approach, so we have to use the UI.
  cy.visit('')
  cy.contains('Log in')
  cy.get('#input-username').type(username)
  cy.get('#input-password').type(password)
  cy.get('#clickable-login').click()
  // Login can be too slow for the default 4-second timeout
  cy.contains('Welcome', { timeout: 10000 })
})
