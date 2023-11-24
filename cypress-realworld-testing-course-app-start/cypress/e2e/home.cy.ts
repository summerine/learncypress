import { get } from "lodash"

describe("home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })

  it("the h1 contains the correct text", () => {
    cy.getByData("hero-heading").should("be.visible").contains(
      "Testing Next.js Applications with Cypress"
    )
  })

  it("the features on the homepage are correct", () => {
   cy.get("dt").should("be.visible").eq(0).contains("4 Courses")
   cy.get("dt").should("be.visible").eq(1).contains("25+ Lessons")
   cy.get("dt").should("be.visible").eq(2).contains("Free and Open Source")
  })

  context("Courses section", () => {
    it("Course: Testing your First Next.js Application", () => {
        cy.getByData("course-0").find("a").contains("Get started").should("be.visible").click()
        cy.location("pathname").should("equal", "/testing-your-first-application")
    })
  })

  context("Testing Foundations", () => {
    it("Testing Foundations", () => {
        cy.getByData("course-1").find("a").contains("Get started").should("be.visible").click()
        cy.location("pathname").should("equal", "/testing-foundations")
        cy.get("h1").should("be.visible").contains("Testing Foundations")
    })
  })

  context("Cypress Fundamentals", () => {
    it.only("Cypress Fundamentals", () => {
        cy.getByData("course-2").find("a").contains("Get started").should("be.visible").click()
        cy.location("pathname").should("equal", "/cypress-fundamentals")
        cy.get("h1").should("be.visible").contains("Cypress Fundamentals")
      
    })
  })


})