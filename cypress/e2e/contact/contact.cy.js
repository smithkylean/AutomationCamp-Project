/// <reference types="cypress" />

describe('Sort',() => {
    beforeEach(() => {
        cy.visit(`/`)

    })

    it(`should contact website admin`, () => {
        

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

        //populating fields and sending message via contact page
        cy.get(`#top-contact`).click()
        cy.get(`#firstName`).click()
        .type(`John`)
        cy.get(`#lastName`).click()
        .type(`Brown`)
        cy.get(`#email`).click()
        .type(`test1@tester.com`)
        cy.get(`#subject`).click()
        .type(`Automated Testing of Automation Camp Store`)
        cy.get(`#message`).click()
        .type(`Good day, my name is John Brown and i am contacting you regarding the Automation Camp Store and the ways in which i could assist in the automation testing of same`)
        cy.get('.css-1pdqelo > .chakra-button').click()
        cy.get(`#toast-1-description`).should('have.text','Your message has been sent!')

    })

    it(`should display appropriate error message if field is not populated`, () => {
        

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

        //populating fields and sending message via contact page
        cy.get(`#top-contact`).click()
        cy.get(`#firstName`).click()
        .type(`John`)
        cy.get(`#lastName`).click()
        .type(`Brown`)
        cy.get(`#email`).click()
        .type(`test1@tester.com`)
        
        cy.get(`#message`).click()
        .type(`Good day, my name is John Brown and i am contacting you regarding the Automation Camp Store and the ways in which i could assist in the automation testing of same`)
        cy.get('.css-1pdqelo > .chakra-button').click()
        cy.get(`body > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(3)`)
        .should('have.text','Field is required!')

    })

    it(`should be able to populate appropriate fields via contact page`, () => {
        

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

        //populating fields and sending message via contact page
        cy.get(`#top-contact`).click()
        cy.get(`#firstName`).click()
        .type(`John`)
        cy.get(`#lastName`).click()
        .type(`Brown`)
        cy.get(`#email`).click()
        .type(`test1@tester.com`)
        cy.get(`#subject`).click()
        .type(`Automated Testing of Automation Camp Store`)
        cy.get(`#message`).click()
        .type(`Good day, my name is John Brown and i am contacting you regarding the Automation Camp Store and the ways in which i could assist in the automation testing of same`)
        .should('have.value','Good day, my name is John Brown and i am contacting you regarding the Automation Camp Store and the ways in which i could assist in the automation testing of same')

    })

})


