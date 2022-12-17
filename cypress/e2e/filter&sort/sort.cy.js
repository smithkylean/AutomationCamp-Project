/// <reference types="cypress" />
import Auth from '../page/auth.page'

describe('Sort',() => {
    beforeEach(() => {
        cy.visit(`/`)

    })

    it('Should sort product list from A-Z', () => { 

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

    
        //sort products from A to Z
        cy.get('#sort').select(`[value="pant"]`)



        // var productList = [`Quality Fitted Hat`, `Quality Trucker Hat`, `Quality Mousepad`, `Quality Mug`, `Quality Pillow`, `Quality Hooded Sweatshirt`,
        //                       'Quality Sweatshirt', 'Quality Kids Tshirt', 'Quality Tshirt', 'Quality Vneck', 'Quality Pink Pants','Quality Cargo Pants',
        //                       'Quality Jeans Pants', 'Quality Blue Shoes', 'Quality Stylish Shoes', 'Quality Healed Shoes', 'Red Couch', 'White Couch',
        //                        'Gray Couch', 'Mackbook Pro', 'Dell Laptop', 'HP Laptop']
        // productList.sort()

        // cy.get(`.inventory_item_name`).each(($elem, index, $list) => {
        //     expect($elem.text()).equal(inventoryList[index])
        // })
    })

    // it('Should sort product list from Z-A', () => { 
    //     Auth.login(`standard_user`,`secret_sauce`)
    //     cy.get('[data-test="product_sort_container"]').select(`za`)

    //     var inventoryList = [`Sauce Labs Backpack`, `Sauce Labs Bike Light`, `Sauce Labs Bolt T-Shirt`, `Sauce Labs Fleece Jacket`, `Sauce Labs Onesie`, `Test.allTheThings() T-Shirt (Red)`]
    //     inventoryList.sort().reverse()

    //     cy.get(`.inventory_item_name`).each(($elem, index, $list) => {
    //         expect($elem.text()).equal(inventoryList[index])
    //     })
    // })

        it(`should be able to reset products after searching`, () => {
            

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

        //reset filter
        cy.get(`#reset`).click();

        
    })

    it.only(`should be able to reset products after selecting category`, () => {
            

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
    cy.get(`#category`).select("//option[@value='shirt']")
    // .type(`Quality Trucker Hat`)
    // .should('have.value','Quality Trucker Hat')

    //reset filter
    //cy.get(`#reset`).click();
    
    
})


})