/// <reference types="cypress" />

import cypress from "cypress"


declare global {
  namespace Cypress {
    interface Chainable {
      getByData(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>;
    }
  }
};

Cypress.Commands.add("getByData", (selector) => {
    return cy.get(`[data-test=${selector}]`)
  });
