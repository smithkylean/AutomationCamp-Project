/// <reference types="cypress" />

describe('Sort',() => {
    beforeEach(() => {
        cy.visit(`/`)

    })

    it(`should remove product from cart`, () => {
        

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

        // //remove mousepad from cart
        cy.get('.snipcart-item-line__header > .snipcart-button-icon').click()
        cy.get('.snipcart-item-quantity').should('have.length', 0)
        cy.get('.snipcart-item-quantity').should('not.have.length', 1)

    })

    it(`should increase cart product quantity`, () => {
        

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

        // add quality fitted hat to cart
        cy.get('#product-0 > #add-to-cart').click()
        cy.get(`#product-0 > #add-to-cart`).scrollIntoView()
        cy.wait(1500)
        cy.get(`#product-0 > #add-to-cart`).should('be.visible').click()
        cy.get('.snipcart-item-quantity').should('have.length', 1)

        // increase quality fitted cost ($30.00) hat in cart to ($60.00)
        cy.get("button[title='Increment quantity']").click()
        cy.get('.snipcart-item-quantity__total-price').should('not.have.text',' $30.00 ')
        cy.get('.snipcart-item-quantity__total-price').should('have.text',' $60.00 ')

    })

    it(`should decrease cart product quantity`, () => {
        

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

        // add quality trucker hat to cart
        cy.get('#product-1 > #add-to-cart').click()
        cy.get(`#product-1 > #add-to-cart`).scrollIntoView()
        cy.wait(1500)
        cy.get(`#product-1 > #add-to-cart`).should('be.visible').click()
        cy.get('.snipcart-item-quantity').should('have.length', 1)

        // increase quality trucker hat cost to ($48.00) from $24.00
        cy.get("button[title='Increment quantity']").click()
        cy.get('.snipcart-item-quantity__total-price').should('not.have.text',' $24.00 ')
        cy.get('.snipcart-item-quantity__total-price').should('have.text',' $48.00 ')

        // decrease quality trucker hat quantity from 2 to 1
        cy.get("button[title='Decrement quantity']").click()
        cy.get('.snipcart-item-quantity__total-price').should('not.have.text',' $48.00 ')
        cy.get('.snipcart-item-quantity__total-price').should('have.text',' $24.00 ')

    })


})