///<reference types="Cypress" />


describe('tasks page', () => {
  it('should render the main image', () => {
    cy.visit('http://localhost:5173/');
    cy.get('.main-header').find('img');
  });

  it("should include the page title", () => {
    cy.visit('http://localhost:5173/');
    cy.get("h1").should("have.length", 1);
    cy.get("h1").contains("My Cypress Course Tasks"); // text can only be found inside h1 element 
    //cy.contains("My Cypress Courses Tasks"); // text can be found anywhere within the page
  })
})