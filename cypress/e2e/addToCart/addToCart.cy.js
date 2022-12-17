import cart from '../page/cart.page'

/// <reference types="cypress" />

describe('Sort',() => {
     beforeEach(() => {
        cy.visit(`/`)

     })

        it(`should add single product to cart`, () => {
        

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

            
        })


        it(`should add multiple quantity of a product to cart`, () => {
        

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
    
            // add multiple quantity of product to cart

            cy.get('#product-0 > .css-5ge9zd > .chakra-aspect-ratio > .chakra-image').click()
            cy.get('.chakra-numberinput__field')
            cy.get('#product-increase').click()
            cy.get('#add-to-cart').click()

            
            // cy.get(`#product-0 > #add-to-cart`).should('be.visible').click()
            cy.get('.snipcart-item-quantity__quantity').contains(2)

            
    })

        it(`should multiple product to cart`, () => {
        

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

            // add mouse pad to cart
            cy.get('#product-2 > #add-to-cart').click()
            cy.get(`#product-2 > #add-to-cart`).scrollIntoView()
            cy.wait(1500)
            cy.get(`#product-2 > #add-to-cart`).should('be.visible').click()
            cy.get('.snipcart-item-quantity').should('have.length', 1)
            cy.get('.snipcart-modal__close-title').click()


            // add quality fitted hat to cart

            cy.get('#product-0 > #add-to-cart').click()
            cy.get(`#product-0 > #add-to-cart`).scrollIntoView()
            cy.wait(1500)
            cy.get(`#product-0 > #add-to-cart`).should('be.visible')
            cy.get('.snipcart-item-quantity').should('have.length', 2)

    })


})