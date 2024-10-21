describe('Swap screen', () => {
  beforeEach(() => {
    cy.login();
  });

  it('should click on hamburger and navigate to the swap page', () => {
    cy.get('.flex-row > .inline-flex > .group')
      .should('be.visible')
      .click();

    cy.url().should('contain', 'https://beta-uat.ayin.app');

    cy.get('.w-full.gap-y-4 > .justify-between > .inline-flex', { timeout: 60000 })
      .click();

    cy.get('.grid > :nth-child(2) > .gap-x-2')
      .should('be.visible')
      .click();

    cy.url().should('contain', 'https://beta-uat.ayin.app/swap');

    cy.get('.p-4').should('be.visible');

    cy.get('.block')
      .should('have.text', "ALPH")
      .click();
  });

  it('opening 1st token list & Typing token & CLicking token', () => {
    cy.visit('https://beta-uat.ayin.app/swap?intro=true')
    cy.get('.block')
    .should('have.text', "ALPH")
    .click();
    cy.get('.relative.block > .flex').type('TAIL')
    cy.get('li.w-full').click()
    cy.get('.block').should('have.text', "TAIL")
    cy.get(':nth-child(3) > :nth-child(2) > .inline-flex').should('have.text','Select coin 2')
  });
  
it('opening 2nd token list & Typing token & CLicking token & Hide zero toggle', () => {
const toggleSelector = '#hide-zero'; // Toggle selector
const token1Selector = '.space-y-3 > :nth-child(1) > .inline-flex > .w-full'; // First token selector
const token2Selector = '.space-y-3 > :nth-child(2) > .inline-flex > .w-full'; // Second token selector

cy.visit('https://beta-uat.ayin.app/swap?intro=true');
cy.get(':nth-child(3) > :nth-child(2) > .inline-flex').click();
cy.get(token1Selector).should('be.visible');
cy.get(token2Selector).should('be.visible');

cy.get(toggleSelector).should('be.visible').click();

cy.get(token1Selector).should('not.exist');
cy.get(token2Selector).should('not.exist');
cy.get(toggleSelector).click();
cy.get(token1Selector).should('be.visible');
cy.get(token2Selector).should('be.visible');
});
  
it('Slipage dropdown', () => {
  cy.visit('https://beta-uat.ayin.app/swap');
 cy.get('[class="text-[8px] sm:text-xs text-[#B2B2B2]"]').should('be.visible')
.click()
cy.get(':nth-child(2) > .space-y-2 > .items-center > .flex').type('8')
cy.get(':nth-child(3) > .w-full > .items-center > .flex').type('0.9')
cy.get('svg[data-sentry-element="svg"][data-sentry-component="X"]').click()
cy.get('[class="text-[8px] sm:text-xs text-[#B2B2B2]"]').click()
cy.get('.h-full > .w-full.flex > .flex > .inline-flex').click()
});

it('Verification of the chart for a specific token pair', () => {
  cy.visit('https://beta-uat.ayin.app/swap');
  cy.get(':nth-child(3) > :nth-child(2) > .inline-flex').click()
  cy.get('.relative.block > .flex').type('TAIL')
    cy.get('li.w-full').click()
  cy.get('svg[data-sentry-element="svg"][data-sentry-component="StatsIcon"]').click()
  cy.contains('Type').should('be.visible');
    cy.contains('ALPH').should('be.visible');
    cy.contains('TAIL').should('be.visible');
    cy.contains('Price').should('be.visible');
    cy.contains('Time').should('be.visible');
    cy.get('svg[data-sentry-element="svg"][data-sentry-component="StatsIcon"]').click()
});
it('Token Conversion by typing the first token amount', () => {
  cy.visit('https://beta-uat.ayin.app/swap');
  cy.get(':nth-child(3) > :nth-child(2) > .inline-flex').click();
  cy.get('.relative.block > .flex').type('TAIL');
  cy.get('li.w-full').click();
  cy.get('.space-y-1 > :nth-child(1) > :nth-child(2) > .flex').type('1');
  
  cy.get('.space-y-1 > :nth-child(3) > :nth-child(2) > .flex').should(($input) => {  // second field will show some number
    const value = $input.val();
    expect(value).to.match(/^\d*\.?\d+$/); // Matches either a whole number or a decimal
  });
  
  cy.get('.space-y-3')
    .should('contain.text', 'Price')
    .and('contain.text', 'Expected Output')
    .and('contain.text', 'Price Impact')
    .and('contain.text', 'Minimal received after slippage');
    
});
it.only('Token Conversion by typing the first token amount', () => {
  cy.visit('https://beta-uat.ayin.app/swap');
cy.get("span[class='w-full h-full bg-[#17171A] flex items-center justify-center gap-x-4 rounded-[10px] rounded-tl-none']").should('be.visible')
    .click()
    

  });


});