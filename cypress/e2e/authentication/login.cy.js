/// <reference types="cypress" />

describe('Sort',() => {
    beforeEach(() => {
        cy.visit(`/`)

    })

        it(`should login with valid username and valid password`, () => {
        

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

    })

        it(`should not login with invalid username and valid password`, () => {
        

        cy.get(`#signInOrRegister`).click()
        //Login on to site.
        cy.origin(
        "https://dev-mlluudmotpwoldtv.us.auth0.com",
        { args: {} },
        ({}) => {
        cy.get('[type="email"]').type("test123@test.com");
        cy.get('[type="password"]').type("Password1", { log: false });
         cy.get("[name=submit]").click();
        }
    )
        cy.get('.animated > span').should('have.text','Wrong email or password.');

})

    it(`should not login with valid username and invalid password`, () => {
        

        cy.get(`#signInOrRegister`).click()
        //Login on to site.
        cy.origin(
        "https://dev-mlluudmotpwoldtv.us.auth0.com",
        { args: {} },
        ({}) => {
        cy.get('[type="email"]').type("test123@tester.com");
        cy.get('[type="password"]').type("Password1", { log: false });
        cy.get("[name=submit]").click();
    }
)
    cy.get('.animated > span').should('have.text','Wrong email or password.');

})

it(`should not login with invalid username and invalid password`, () => {
        

    cy.get(`#signInOrRegister`).click()
    //Login on to site.
    cy.origin(
    "https://dev-mlluudmotpwoldtv.us.auth0.com",
    { args: {} },
    ({}) => {
    cy.get('[type="email"]').type("qw123@tester.com");
    cy.get('[type="password"]').type("Passwodr1", { log: false });
    cy.get("[name=submit]").click();
}
)
cy.get('.animated > span').should('have.text','Wrong email or password.');

})

})