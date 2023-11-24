///<reference types="Cypress" />

it('should filter tasks', () => {
    cy.visit("http://localhost:5173/")
    cy.contains("Add Task").click()
    cy.get('#title').type('New Task')
    cy.get('#summary').type('testing the task modal')
    cy.get('#category').select('urgent')
    cy.get('.modal').contains('Add Task').should('be.visible').click()
    cy.get('.task').should('have.length', 1)
    cy.get('#filter').select('urgent')
    cy.get('.task').should('have.length', 1)
    cy.get('#filter').select('all')
    cy.get('.task').should('have.length', 1)
});