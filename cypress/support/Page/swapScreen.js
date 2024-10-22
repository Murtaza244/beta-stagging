
class SwapPage {
    
    visitSwapPage() {
        cy.visit('https://beta-uat.ayin.app/swap');
      }

    clickEnterbeta() {
      cy.get('.flex-row > .inline-flex > .group')
        .should('be.visible')
        .click();
    }
  
    verifyUrl() {
      cy.url().should('contain', 'https://beta-uat.ayin.app');
    }
  
    clickhamburger() {
      cy.get('.w-full.gap-y-4 > .justify-between > .inline-flex', { timeout: 60000 })
        .click();
    }
  
    clickAyinSwap() {
      cy.get('.grid > :nth-child(2) > .gap-x-2')
        .should('be.visible')
        .click();
    }
  
    verifySwapPageUrl() {
      cy.url().should('contain', 'https://beta-uat.ayin.app/swap');
      cy.get('.p-4').should('be.visible');
    }
  
    selectFirstToken() {
      cy.get('.block')
        .should('have.text', "ALPH")
        .click();
    }
  

clickALPH(){
cy.get('.block')
    .should('have.text', "ALPH")
    .click();
}

typeTail(Tail){

    cy.get('.relative.block > .flex').type('TAIL')
}

clickTail(){

    cy.get('li.w-full').click()
}

visibilty1stToken() {
    cy.get('.block')
      .should('have.text', "ALPH")
      
  }

  Invisibilty1stToken() {
    cy.get('.space-y-3 > :nth-child(1) > .inline-flex > .w-full')
    .should('not.exist')
      
  }
visibilty2ndoken(){

    cy.get(':nth-child(3) > :nth-child(2) > .inline-flex').should('have.text','Select coin 2')
}
invisibilty2ndoken(){

    cy.get('.space-y-3 > :nth-child(2) > .inline-flex > .w-full').should('not.exist')
}


click2ndToken(){

    cy.get(':nth-child(3) > :nth-child(2) > .inline-flex').click();
}



clickToggle(){
   
    cy.get('#hide-zero').click()
}

clickSlippage(){
    cy.get('[class="text-[8px] sm:text-xs text-[#B2B2B2]"]').should('be.visible')
.click()

}

clickMaxSlippage(){
    cy.get(':nth-child(2) > .space-y-2 > .items-center > .flex').click()
}
typeMaxSlippageVal(){
    cy.get(':nth-child(2) > .space-y-2 > .items-center > .flex').type('8')
}
clickDeadline(){
    cy.get(':nth-child(3) > .w-full > .items-center > .flex').click()
}
typeDeadlineVal(){
cy.get(':nth-child(3) > .w-full > .items-center > .flex').type('2')

}
clickCrossBtn(){
    cy.get('svg[data-sentry-element="svg"][data-sentry-component="X"').click()
}

clickingBackBtn(){
    cy.get('.h-full > .w-full.flex > .flex > .inline-flex').click()
}

clicking2ndTokenBtn(){
    cy.get(':nth-child(3) > :nth-child(2) > .inline-flex').click()
}

clickingChart(){
    cy.get('svg[data-sentry-element="svg"][data-sentry-component="StatsIcon"]').click()
}
viewPairTradeDetails(){
    cy.contains('Type').should('be.visible');
    cy.contains('ALPH').should('be.visible');
    cy.contains('TAIL').should('be.visible');
    cy.contains('Price').should('be.visible');
    cy.contains('Time').should('be.visible');
}

enteringTkn1stField(){
    cy.get('.space-y-1 > :nth-child(1) > :nth-child(2) > .flex').type('1');
}

secondFieldRelect(){
    cy.get('.space-y-1 > :nth-child(3) > :nth-child(2) > .flex').should(($input) => {  // second field will show some number
        const value = $input.val();
        expect(value).to.match(/^\d*\.?\d+$/); // Matches either a whole number or a decimal
      });
}

tradeElements(){
    cy.get('.space-y-3')
    .should('contain.text', 'Price')
    .and('contain.text', 'Expected Output')
    .and('contain.text', 'Price Impact')
    .and('contain.text', 'Minimal received after slippage');
}

visibconiltyConnetWaletBtn(){
    cy.get("span[class='w-full h-full bg-[#17171A] flex items-center justify-center gap-x-4 rounded-[10px] rounded-tl-none']").should('be.visible')
}
clickConnetWaletBtn(){
    cy.get("span[class='w-full h-full bg-[#17171A] flex items-center justify-center gap-x-4 rounded-[10px] rounded-tl-none']").click()
}
















}
  
  
  export default new SwapPage();
  