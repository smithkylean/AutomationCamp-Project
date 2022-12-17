/// <reference types="cypress" />

describe('Sort',() => {
    beforeEach(() => {
        cy.visit(`/`)

    })

    it(`Should be able to add billing information`, () => {
        

        cy.get(`#signInOrRegister`).click()
        //Login on to site.
        cy.origin(
        "https://dev-mlluudmotpwoldtv.us.auth0.com",
        { args: {} },
        ({}) => {
        cy.get('[type="email"]').type("test1@tester.com");
        cy.get('[type="password"]').type("Password1", { log: false });
         cy.get("[name=submit]").click();
        }
    )       

        // add mousepad to cart
        cy.get('#product-2 > #add-to-cart').click()
        cy.get(`#product-2 > #add-to-cart`).scrollIntoView()
        cy.wait(1500)
        cy.get(`#product-2 > #add-to-cart`).should('be.visible').click()
        cy.get('.snipcart-item-quantity').should('have.length', 1)

        // //add billing information
        cy.get('.snipcart-button-primary').click()
        cy.get(`div[autocomplete='name']`).click()
        .type("John Doe")
        cy.get('div>[name="email"]').click()
        .type('jdoe@gmail.com')


        

    })

})