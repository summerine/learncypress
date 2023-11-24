/// <reference types="Cypress" />

describe('page navigation', () => {
  it('navigate between pages', () => {
    cy.visit('http://localhost:5173')
    cy.get('[data-cy="header-about-link"]').click()
    cy.location('pathname').should('eq', '/about') //about
    cy.go('back')
    cy.location('pathname').should('eq', '/') //homepage
    cy.get('[data-cy="header-about-link"]').click()
    cy.get('[data-cy="header-home-link"]').click()
  })
})