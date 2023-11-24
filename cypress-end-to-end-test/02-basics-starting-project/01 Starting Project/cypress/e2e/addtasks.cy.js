///<reference types="Cypress" />

describe('tasks management', () => {
    it('should create a new task', () => {
        cy.visit('http://localhost:5173/')
        cy.contains("Add Task").should("be.visible").click()
        cy.get('#title').type('New Task')
        cy.get('#summary').type('testing the task modal')
        cy.wait(2000)
        cy.get('.modal').contains('Add Task').should('be.visible').click()
        cy.get('backdrop').should('not.exist')
        cy.get('.modal').should('not.exist')
        cy.get('.task').should('have.length', 1)
        cy.get('.task h2').contains('New Task')
        cy.get('.task p').contains('testing the task modal')

    })

    it('should validate user input', () => {
        cy.visit('http://localhost:5173/')
        cy.contains('Add Task').should('be.visible').click()
        cy.get('.modal').contains('Add Task').should('be.visible').click()
        cy.contains('Please provide values for task title, summary and category!').should('be.visible')
    })

    it.only('should add multiple tasks', () => {
        cy.visit('http://localhost:5173/')
        cy.contains("Add Task").should("be.visible").click()
        cy.get('#title').type('First Task')
        cy.get('#summary').type('First Task')
        cy.get('.modal').contains('Add Task').should('be.visible').click()
        cy.get('.task').should('have.length', 1)

        cy.contains("Add Task").should("be.visible").click()
        cy.get('#title').type('Second Task')
        cy.get('#summary').type('Second Task')
        cy.get('.modal').contains('Add Task').should('be.visible').click()
        cy.get('.task').should('have.length', 2)
        cy.get('.task').eq(0).contains('First Task') //first
        cy.wait(10000)
        cy.get('.task').eq(1).contains('Second Task') //last
    })
})