/// <reference types="Cypress" />

describe('contact form', () => {
    it('should submit the form', () => {
        cy.visit('http://localhost:5173/about')
        cy.get('[data-cy="contact-input-message"]').type("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
        cy.wait(10000)
        cy.get('[data-cy="contact-input-name"]').type("Test Name")
        cy.wait(5000)
        cy.get('[data-cy="contact-input-email"]').type("testname@example.com")
        cy.wait(5000)
        cy.get('[data-cy="contact-btn-submit"]')
        .contains("Send Message")
        .should('not.have.attr', "disabled") // to check whether the disabled attribute is not set 
        cy.get('[data-cy="contact-btn-submit"]').click()
        cy.get('[data-cy="contact-btn-submit"]')
        .contains("Sending...")
        .should('have.attr', "disabled") //to check whether the disabled attribute is set 
    })
})