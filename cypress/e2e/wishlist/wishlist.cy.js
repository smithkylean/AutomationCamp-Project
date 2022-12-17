/// <reference types="cypress" />

describe('Sort',() => {
    beforeEach(() => {
        cy.visit(`/`)

    })

            it(`should be able to add to wishlist`, () => {
            

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
            cy.get('a>.chakra-heading').should(`have.text`,'Automation Camp Store');

            //add quality mouse pad to wishlist
            cy.get('#product-2 > .css-n21gh5 > .css-46p1lt > .css-1oeb4ru > .css-1m8iww1 > #add-to-favorite').click()
            cy.get('#toast-1').should('have.text',`Quality Mousepad added to favorites`)
            cy.get('#toast-1').should('not.have.length',0)
            cy.get('#toast-1').should('have.length',1)


        })
    



        it(`should be able to remove item from wishlist page`, () => {
            

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
        cy.get('a>.chakra-heading').should(`have.text`,'Automation Camp Store');

        //add quality mouse pad to wishlist
        cy.get('#product-2 > .css-n21gh5 > .css-46p1lt > .css-1oeb4ru > .css-1m8iww1 > #add-to-favorite').click()
        
        //nvavigate to favourite and remove item
        cy.get('#top-favorite > .chakra-text').click()
        cy.get('#remove-favorite-btn').click()
        cy.get('#toast-2').should(`have.text`, 'Quality Mousepad removed from favorites')
        
    })  

        it(`should be able to add wishlist item to cart`, () => {
            

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
        cy.get('a>.chakra-heading').should(`have.text`,'Automation Camp Store');

        //add quality mouse pad to wishlist
        cy.get('#product-2 > .css-n21gh5 > .css-46p1lt > .css-1oeb4ru > .css-1m8iww1 > #add-to-favorite').click()
        cy.get('#toast-1').should('have.text',`Quality Mousepad added to favorites`)
        cy.get('#toast-1').should('not.have.length',0)
        cy.get('#toast-1').should('have.length',1)

        //navigate to wishlist and add mouse pad to cart
        cy.get('#top-favorite > .chakra-text').click()
        cy.get('#add-to-cart').click()
        cy.get(`button[aria-label='Close']`).click()
        cy.get(`#top-cart`).click()
        cy.get('.snipcart-layout').should(`have.length`,1)
        //cy.get('.css-u7m3ts').click()
        // cy.get(':nth-child(1) > .snipcart-item-line__container').should(`have.length`,1)
        // cy.get(':nth-child(1) > .snipcart-item-line__container').contains(' Quality Mousepad ')

    })
    it.only(`should be able to remove item from wishlist via producst listing`, () => {
            

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
        cy.get('a>.chakra-heading').should(`have.text`,'Automation Camp Store');

        
       //add quality mouse pad to wishlist
       cy.get('#product-2 > .css-n21gh5 > .css-46p1lt > .css-1oeb4ru > .css-1m8iww1 > #add-to-favorite').click()
       cy.get('#toast-1').should('have.text',`Quality Mousepad added to favorites`)
       cy.get('#toast-1').should('not.have.length',0)
       cy.get('#toast-1').should('have.length',1)

        //remove quality mouse pad from wishlist via products
        cy.get('#product-2 > .css-n21gh5 > .css-46p1lt > .css-1oeb4ru > .css-1m8iww1 > #remove-from-favorite').click()
        cy.get(`button[aria-label='Close']`).click({ multiple: true })
        cy.get('#toast-1').should('not.have.length',0)

    })


})


