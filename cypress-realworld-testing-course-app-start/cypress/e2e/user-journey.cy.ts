describe("User Journey", () => {
    it("a user can find a course on the home page and complete the courses lesson", () => {
        cy.visit("http://localhost:3000")
        cy.getByData("course-0").find("a").contains("Get started").should("be.visible").click()
        cy.location("pathname").should("equal", "/testing-your-first-application")
        cy.wait(1000)
        cy.getByData("next-lesson-button").click()
        cy.location("pathname").should("equal", "/testing-your-first-application/app-install-and-overview")
        cy.wait(2000)
        cy.getByData("challenge-answer-0").click()
        cy.getByData("next-lesson-button").should("exist").click()
        cy.location("pathname").should("equal", "/testing-your-first-application/installing-cypress-and-writing-our-first-test")
        cy.wait(2000)
        cy.getByData("challenge-answer-0").click()
        cy.getByData("challenge-answer-1").click()
        cy.getByData("next-lesson-button").should("exist").click()
        cy.location("pathname").should("equal", "/testing-your-first-application/setting-up-data-before-each-test")
        cy.wait(2000)
        cy.getByData("challenge-answer-0").click()
        cy.getByData("challenge-answer-1").click()
        cy.getByData("next-lesson-button").should("exist").click()
        cy.location("pathname").should("equal", "/")
        cy.getByData("hero-heading").should("be.visible").contains("Testing Next.js Applications with Cypress")
    })
})