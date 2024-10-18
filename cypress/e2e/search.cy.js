describe('Your Test Suite', () => {
  beforeEach(() => {
    cy.login();
    
   
    
  });

  it("click on input file ", () => {
    cy.viewport("macbook-15");
    cy.get(".input").type("ElvjkVysOLrU");
    cy.get(".btn").click();
    cy.get('[data-sentry-element="InputWithIcon"]', { timeout: 800000 })
    .should('not.have.attr', 'disabled').then(() => {
      cy.get('[data-sentry-element="InputWithIcon"]').click({force: true});
    })
    cy.contains('button', 'Ayin').should('be.visible').click();
    cy.contains('h3', 'Pair Metrics').should('be.visible');
  });
});


////