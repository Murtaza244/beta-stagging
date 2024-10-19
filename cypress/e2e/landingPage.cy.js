describe('Lander Page Functionality Tests', () => {
  
  beforeEach(() => {
    cy.login();
  });

  it('Should navigate to the home page after login', () => {
    cy.wait(4000);
    cy.url().should('eq', 'https://beta-uat.ayin.app/');
  });

  it('Should display the main title on the home page', () => {
    cy.wait(4000);
    cy.get('.text-2xl')
      .should('be.visible');
  });

  it('Should navigate to the swap page', () => {
    cy.wait(2000);
    cy.get('.gap-6 > [href="/swap?intro=true"]').click();
    cy.url().should('contain', 'https://beta-uat.ayin.app/swap');
    cy.wait(4000);
    cy.get('.text-2xl.text-\\[\\#E3E3E3\\]')
      .should('be.visible');
  });

  it('Should navigate to stake LP on Classic', () => {
    cy.get('[href="https://classic.ayin.app/stake"] > .text-sm').click();
    cy.url().should('eq', 'https://classic.ayin.app/stake');
  });

  it('Should click on the Ayin Classic button and navigate', () => {
    cy.get('.flex-row > .hidden > .flex')
      .should('be.visible')
      .click();
    cy.url().should('eq', 'https://classic.ayin.app/swap');
  });

  it('Should click on the Enter Beta button if it is visible', () => {
    cy.get('.flex-row > .inline-flex > .group')
      .should('be.visible')
      .click();
    cy.url().should('contain', 'https://beta-uat.ayin.app');
    cy.get('.w-full > .mt-1')
      .should('be.visible');
  });

  it('clicking on the ayin swap popup', () => {
    cy.get('a > .relative').click();
    cy.url().should('eq', 'https://beta-uat.ayin.app/swap?intro=true');


       
  });
  
  
  
  it('clicking on the ayin swap popup', () => {
   cy.get('a > .relative')
   .click()
    cy.url().should('eq','https://beta-uat.ayin.app/')
   
});
    
    
it('clicking on the privacy Notice', () => {
cy.xpath("//a[normalize-space()='Privacy Notice']") 
          .should('be.visible')
          .click();
          cy.get('.content > :nth-child(2)')
          .should('contain.text', 'In this Privacy Notice, we explain how');

});
       
  
it('clicking on Terms of Service', () => {
cy.xpath("//a[normalize-space()='Terms of Service']")
          .should('be.visible')
          .click();
          cy.get('.content > :nth-child(4)')
          .should('contain.text', 'If you are acting for or on behalf of a');

});

it('clicking on Risk Disclosure Statement', () => {
cy.xpath("//a[normalize-space()='Risk Disclosure Statement']")
          .should('be.visible')
          .click();
          cy.get(':nth-child(2) > strong')
          .should('contain.text', 'Experimental Nature');

});

it('clicking on the Legal notice', () => {
cy.xpath("//a[normalize-space()='Legal Notice']")
          .should('be.visible')
          .click();
          cy.get(':nth-child(4) > strong')
          .should('be.visible')
});
    
it('clicking on discord logo', () => {
  cy.xpath("//div[@class='h-11 flex items-center gap-x-5']//a[1]//*[name()='svg']")
 .parents('a') 
    .should('have.attr', 'target', '_blank') //Verification link redirect the user to next tab
    .click()
});

it('clicking on Telegram logo', () => {
cy.get("div[class='relative'] a:nth-child(2) svg")
.parents('a') 
  .should('have.attr', 'target', '_blank') //Verification link redirect the user to next tab
  .click()
});


it('clicking on Twitter', () => {
cy.get("path[fill='silver'][d='M24.802 4.75c-.928.411-1.914.68-2.923.8a5.1 5.1 0 0 0 2.239-2.815 10.168 10.168 0 0 1-3.232 1.235 5.088 5.088 0 0 0-3.717-1.614c-2.791 0-5.089 2.297-5.089 5.09 0 .39.045.783.135 1.165A14.453 14.453 0 0 1 1.727 3.293a5.066 5.066 0 0 0-.69 2.56c0 1.764.899 3.322 2.264 4.235a5.072 5.072 0 0 1-2.304-.636v.063a5.107 5.107 0 0 0 4.082 4.99 5.118 5.118 0 0 1-2.3.088 5.103 5.103 0 0 0 4.754 3.534A10.22 10.22 0 0 1 0 20.235a14.399 14.399 0 0 0 7.8 2.288c9.36 0 14.48-7.755 14.48-14.48 0-.22-.007-.44-.016-.658a10.33 10.33 0 0 0 2.54-2.634l-.002-.001Z']")
.parents('a') 
  .should('have.attr', 'target', '_blank') //Verification link redirect the user to next tab
  .click()
});

it('clicking on Risk Disclosure Statement', () => {
cy.get('.gap-5 > .inline-flex > .w-full')
.should('be.visible')
  .click()
  cy.url().should('eq','https://beta-uat.ayin.app/swap?intro=true')
});

it('clicking on Risk Disclosure Statement', () => {
cy.get('.gap-5 > .mr-8 > .flex > .text-sm')
.should('be.visible')
  .click()
  cy.url().should('eq','https://classic.ayin.app/swap')
});




});

//Veroficaion that every page load with 200 success
describe('Verify URL redirects', () => {

  const urlsToCheck = [
    'https://beta-uat.ayin.app/',
    'https://beta-uat.ayin.app/swap?intro=true',
    'https://beta-uat.ayin.app/privacy-notice',
    'https://beta-uat.ayin.app/terms-of-service',
    'https://beta-uat.ayin.app/risk-disclosure',
    'https://beta-uat.ayin.app/legal-notice'
  ];

  urlsToCheck.forEach(url => {
    it(`Should return a 200 status code for ${url}`, () => {
      cy.request(url).its('status').should('eq', 200);
    });
  });

});


//Verification that every page loads with in 2 second
describe('Verify URL load times', () => {
  const urlsToCheck = [
    'https://beta-uat.ayin.app/',
    'https://beta-uat.ayin.app/swap?intro=true',
    'https://beta-uat.ayin.app/privacy-notice',
    'https://beta-uat.ayin.app/terms-of-service',
    'https://beta-uat.ayin.app/risk-disclosure',
    'https://beta-uat.ayin.app/legal-notice'
  ];

  urlsToCheck.forEach(url => {
    it(`Loads within 2 seconds: ${url}`, () => {
      const startTime = Date.now();

      cy.request(url).then(() => {
        const loadTime = Date.now() - startTime;
        expect(loadTime).to.be.lessThan(2000);
      });
    });
  });
});

