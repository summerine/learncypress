/// <reference types="Cypress" />

//happy or positive test cases 
//1. fill in message, name and email 
//2. click on submit button 
//expected result: "Send Message" button should be changed to "Sending..." 
describe('contact form', () => {
    it('should submit the form', () => {
        cy.visit('http://localhost:5173/about')
        cy.get('[data-cy="contact-input-message"]').type("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
        cy.wait(3000)
        cy.get('[data-cy="contact-input-name"]').type("Test Name")
        cy.wait(1000)
        cy.wait(1000)
        cy.get('[data-cy="contact-btn-submit"]').then((el) => {
            expect(el.attr('disabled')).to.be.undefined; //the button should not be disabled thus the "disabled" is undefined
            //expect(el.text()).to.eq('Send Message')
            expect(el.text()).contain('Send Message')
        })
        cy.get('[data-cy="contact-input-email"]').type("testname@example.com{enter}")
        // cy.get('[data-cy="contact-btn-submit"]')
        // .contains("Send Message")
        // .should('not.have.attr', "disabled") // to check whether the disabled attribute is not set 
        cy.get('[data-cy="contact-btn-submit"]').as('submitBtn') //add alias for the submit button as "submitBtn"
        //cy.get('@submitBtn').click() //call the alias @submitBtn
        cy.get('@submitBtn').contains("Sending...")
        cy.get('@submitBtn').should('have.attr', "disabled") //to check whether the disabled attribute is set 
    });

    // negative test cases 
    it('should validate the form input', () => {
        cy.visit('http://localhost:5173/about')
        cy.get('[data-cy="contact-btn-submit"]').click()
        cy.get('[data-cy="contact-btn-submit"]').then(el => {
            expect(el).to.not.have.attr('disabled')
            expect(el.text()).to.not.equal('Sending...')
        })
        cy.get('[data-cy="contact-btn-submit"]').contains('Send Message')
        cy.get('[data-cy="contact-input-message"]').as('msgInput') //use alias 
        cy.screenshot()
        cy.get('@msgInput').focus().blur() //focus on a dom element then blur a focused element
        cy.get('@msgInput')
        .parent() //going one level up 
        .should('have.attr', 'class').and('match', /invalid/)

        cy.get('[data-cy="contact-input-name"]').as('inputName') // use alias 
        cy.screenshot() //do screenshot on the certain period of test 
        cy.get('@inputName').focus().blur() //focus on a dom element then blur a focused element
        cy.get('@inputName')
        .parent()
        .should('have.attr', 'class').and('match', /invalid/) 
        /*the assertion will pass if class attribute on this parent, 
        that contains the word 'invalid' (must include the word invalid) */

        cy.get('[data-cy="contact-input-email"]').as('inputEmail') //use alias 
        cy.screenshot()
        cy.get('@inputEmail').focus().blur() //focus on a dom element then blur a focused element
        cy.get('@inputEmail')
        .parent()
        .should('have.attr', 'class').and('match', /invalid/)

    })
})