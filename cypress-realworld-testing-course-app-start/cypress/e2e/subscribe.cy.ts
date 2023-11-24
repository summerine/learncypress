import { get } from "lodash"
describe("home page", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000")
    })
  
    it("allows the user to subscribe to the email list", () => {
      cy.getByData("email-input").should("be.visible").type("tom@aol.com")
      cy.getByData("submit-button").click()
      //cy.getByData("success-message").should("exist").contains("tom@aol.com")
    })

    it("does NOT ALLOW an invalid email address", () => {
    cy.getByData("email-input").should("be.visible").type("tom")
    cy.getByData("submit-button").click()
    cy.getByData("success-message").should("not.exist")
    })

    it("does NOT ALLOW subscribed email to subscribe again", () => {
        cy.getByData("email-input").should("be.visible").type("john@example.com")
        cy.getByData("submit-button").click()
        cy.getByData("server-error-message").should("exist").contains("Error: john@example.com already exists. Please use a different email address")
    })

    it("does NOT ALLOW empty email address",() => {
        cy.getByData("email-input").should("be.visible")
        cy.getByData("submit-button").click()
        cy.getByData("error-message").should("exist").contains("Email is required")
    })
  })
