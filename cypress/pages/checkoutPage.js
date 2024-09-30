class checkout {

    //interact with the page elements
    elements = {
        
        visibleSearchBar : () => cy.get('.a9ed8_1Hn0P.c02ba_1SCli').invoke('show'), // Forces the nav to be visible
        inputItem : () => cy.get('#jsSearchInput', { timeout: 10000 }).should('be.visible'),
        searchBtn : () => cy.get('._2e738_10Hxa > ._63857_1TmYU > .ais-InstantSearch__root > form > .fdd83_39Iap'),
        searchResultAssert : () => cy.get('.b49ee_2pjyI').should('be.visible'), // Assert that search results are visible
        minResult : () => cy.get('._588b5_3MtNs').should('have.length.greaterThan', 0), // Assert that at least one result appears
        addItem : () => cy.get(':nth-child(1) > :nth-child(1) > .a2cf5_2S5q5 > ._4941f_1HCZm > form > ._2aac2_3bwnD > ._0a08a_3czMG').should('be.visible'),
        cartResponse : () => cy.get('._12da4_1baq-').should('be.visible').and('contain', 'AKIRA 32 Inches Television has been added to your cart'),
        cartItem : () => cy.get('.fccb0_2PhkY').should('contain', '1'),
        checkoutItem : () => cy.get('._64138_340dY').should('be.visible')

        

    }

    //methods

    makeVisible() {
        this.elements.visibleSearchBar();
    }

    enterItemName(item)
    {
        this.elements.inputItem().type(item);
    }

    clickSearchBtn()
    {
        this.elements.searchBtn().click();
    }

    resultCheck(){
        this.elements.searchResultAssert();
    }

    leastResult(){
        this.elements.minResult();
    }

    addToCart()
    {
        this.elements.addItem().click();
    }

    responseMsgCheck(){
        this.elements.cartResponse();
    }

    cartQtyCheck(){
        this.elements.cartItem();
    }

    clickCheckoutBtn()
    {
        this.elements.checkoutItem().click();
    }
}

export default checkout;