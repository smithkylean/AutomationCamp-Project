/// <reference types="cypress" />

describe('Sort',() => {
    beforeEach(() => {
        cy.visit(`/`)

    })

            it(`should be able to search for products by name`, () => {
            

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

            //search for quality trucker hat
            cy.get(`#search`).click()
            .type(`Quality Trucker Hat`)
            .should('have.value','Quality Trucker Hat')

        })

     it(`should not return product if it does not exist`, () => {
        

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

        //search for quality trucker bike
        cy.get(`#search`).click()
        .type(`Quality Trucker Bike`)
        cy.get('#Products').should('have.length', 0)
        //.should('not.have.value','Quality Trucker Bike')

    })

    it(`should return all products matching the keyword entered`, () => {
        

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

    //search for all hat
    cy.get(`#search`).click()
    .type(`Hat`)
    cy.get('.css-16xlhis > :nth-child(2)').contains(2)


})

})