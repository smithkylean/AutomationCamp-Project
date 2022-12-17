/// <reference types="cypress" />

describe('Sort',() => {
    beforeEach(() => {
        cy.visit(`/`)

    })

     it.skip(`should sign up with username and password`, () => {
        

        cy.get(`#signInOrRegister`).click()
        cy.get(':nth-child(2) > a').click()
        cy.get('[type="email"]').type("Qw123@tester.com");
        cy.get('[type="password"]').type("Password1", { log: false });
        cy.get("[name=submit]").click();
        cy.get('.chakra-heading.css-1jhlc8u').should(`have.text`,'Products');

     })


     it(`should not be able to sign up with invalid email address`, () => {
        

        cy.get(`#signInOrRegister`).click()
        cy.get(':nth-child(2) > a').click()
        cy.get('[type="email"]').type("Qw123.com");
        cy.get('[type="password"]').type("Password1", { log: false });
        cy.get("[name=submit]").click();
        cy.get('#auth0-lock-error-msg-email').should(`have.text`,'Email is invalid');

     })


     it(`should not be able to sign up with already used email address`, () => {
        

        cy.get(`#signInOrRegister`).click()
        cy.get(':nth-child(2) > a').click()
        cy.get('[type="email"]').type("test1@tester.com");
        cy.get('[type="password"]').type("Password1", { log: false });
        cy.get("[name=submit]").click();
        cy.get('.animated.fadeInUp').should(`have.text`,"We're sorry, something went wrong when attempting to sign up.");


     })

})