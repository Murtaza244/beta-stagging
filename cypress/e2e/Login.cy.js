
describe('Login Functionality Tests', () => {
  
  context('Invalid Login Functionality Tests', () => {
    
    it('Should clear the password field for incorrect password', () => {
      cy.visit('https://beta-uat.ayin.app');
      cy.get('.input')
        .type('Honey manager');
      cy.get('.btn')
        .click();
      cy.get('.input')
        .should('have.value', '');
    });

    it('Should clear the password field when no password is entered', () => {
      cy.visit('https://beta-uat.ayin.app');
      cy.get('.btn')
        .click();
        cy.get('.input').clear()
        cy.get('.input')
        .should('have.value', '');
    });

    it('Should clear field when entering case-sensitive password', () => {
      cy.visit('https://beta-uat.ayin.app');
      cy.get('.input')
        .type('ElvjkVySOlRu');
      cy.get('.btn')
        .click();
      cy.get('.input')
        .should('have.value', '');
    });
    
  });

  context('Valid Login Functionality Tests', () => {
    
    it('Should navigate to the login page', () => {
      cy.visit('https://beta-uat.ayin.app');
      cy.url()
        .should('include', 'beta-uat.ayin.app');
    });

    it('Should enter the password correctly', () => {
      cy.visit('https://beta-uat.ayin.app');
      cy.get('.input')
        .type('ElvjkVysOLrU');
      cy.get('.input')
        .should('have.value', 'ElvjkVysOLrU');
    });

    it.only('Should log in successfully with valid password', () => {
      cy.visit('https://beta-uat.ayin.app');
      cy.get('.input')
        .type('ElvjkVysOLrU');
      cy.get('.btn')
        .click();
      cy.url()
        .should('eq', 'https://beta-uat.ayin.app/');
    });
    
  });

});


