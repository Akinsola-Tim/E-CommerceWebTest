import checkout from "../pages/checkoutPage";

describe('Ecommerce checkout and assertions test', () => {

  it('passes', () => {
    //visit the ecommerce website
    cy.visit('https://www.konga.com/')
    cy.url().should('eq', 'https://www.konga.com/'); // Assert correct URL
    cy.title().should('include', "Buy Phones, Fashion, Electronics in Nigeria_Konga Online Shopping | Konga Online Shopping"); // Assert the title of the webpage
    cy.wait(5000);

    const checkoutObj = new checkout();
    const item = 'television'


    checkoutObj.makeVisible();
    checkoutObj.enterItemName(item);
    checkoutObj.clickSearchBtn();
    cy.wait(1000);
    checkoutObj.resultCheck();//assert that the search results are visible
    checkoutObj.leastResult();//assert that the responses from search are greater than 0
    checkoutObj.addToCart();
    checkoutObj.responseMsgCheck();//assert the response message in the cart
    checkoutObj.cartQtyCheck();//assert the number of item in the cart
    checkoutObj.clickCheckoutBtn();

  })
})