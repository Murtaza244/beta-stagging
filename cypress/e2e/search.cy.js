describe('Your Test Suite', () => {
  beforeEach(() => {
    cy.login();
    
   
    
  });

  it("click on input file ", () => {
  
    cy.get('[data-sentry-element="InputWithIcon"]', { timeout: 100000 })
    .should('not.have.attr', 'disabled').then(() => {
      cy.get('[data-sentry-element="InputWithIcon"]').click({force: true});
    })
    
    cy.get('button').filter(':visible').first().click();
    //cy.contains('button', 'Ayin').should('be.visible').click();
    cy.contains('h3', 'Pair Metrics').should('be.visible');
  });
});


////