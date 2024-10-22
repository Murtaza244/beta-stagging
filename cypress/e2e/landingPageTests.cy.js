import landingPage from '../support/Page/landingPage';
describe('Lander Page Functionality Tests', () => {
  
    beforeEach(() => {
      cy.login();
    });
    it('Navigation landing page and title verification after login', () => {
        cy.wait(3000)
        landingPage.navigationLanderPage();
        landingPage.titleVerification();
    });

    it('clicking swap Button and url & text verification', () => {

        cy.wait(2000);
        landingPage.clickingSwapBtn()
        landingPage.swapUrlVerification()
        landingPage.redirectionVerification() 
    });

    it('Should navigate to stake LP on Classic.ayin.app', () => {
        landingPage.clickStakingBtn()
        landingPage.stakingUrlVerification()
    });


    it('Should click on the Ayin Classic button and navigate', () => {
        landingPage.ayinSwapBtn()
        landingPage.clickAyinSwap()
        landingPage.urlVerAyinSwap()
    });

    
    it('clicking enter beta btn and navigation to lander page', () => {
        landingPage.visibleEnterBetaBtn()
        landingPage.clickEnterBetaBtn()
        cy.wait(4000)
        landingPage.swapUrlVerification()
    });

    it('clicking on the ayin swap popup', () => {
        landingPage.clickAyinSwapPopup()
        landingPage.swapUrlVerification()
    });

    it('clicking on Privacy Policy', () => {
        landingPage.visiblePrivacyNotice();
        landingPage.clickPrivacyNotice();
        cy.wait(5000);
        landingPage.textPrivacyNotice();                   //Text verification privacy Notice
    });

   it('clicking on Terms of Service', () => {
        landingPage.visibleTermsOfServices()
        landingPage.clickTermsOfServices()
        cy.wait(5000)
        landingPage.textTermsOfServices()
    });
    
    
    it('clicking on the Disclosure statement', () => {
        landingPage.visibleRiskDiscloStatement()
        landingPage.clickRiskDiscStatement()
        landingPage.textRiskDiscStatement()
    });

    it('clicking on the Legal notice', () => {

        landingPage.visibleLegalNotice()
        landingPage.clickleLegalNotice()
        landingPage.textleLegalNotice()
    });

    it('clicking on discord logo', () => {
        landingPage.clickDiscordLogo()                //Clicking the discord logo and verification itx opening in a new tab
    });

    it('clicking on Telegram logo', () => {
        landingPage.clickTelegramLogo()                //Clicking the Telegram logo and verification itx opening in a new tab
    });

    it('clicking on Twitter', () => {
        landingPage.clickTwitterLogo()                   //Clicking the Twitter logo and verification itx opening in a new tab

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



//Verification that every page loads with in 5 second
describe.only('Verify URL load times', () => {
    const urlsToCheck = [
      'https://beta-uat.ayin.app/',
      'https://beta-uat.ayin.app/swap?intro=true',
      'https://beta-uat.ayin.app/privacy-notice',
      'https://beta-uat.ayin.app/terms-of-service',
      'https://beta-uat.ayin.app/risk-disclosure',
      'https://beta-uat.ayin.app/legal-notice'
    ];
  
    urlsToCheck.forEach(url => {
      it(`Loads within 5 seconds: ${url}`, () => {
        const startTime = Date.now();
  
        cy.request(url).then(() => {
          const loadTime = Date.now() - startTime;
          expect(loadTime).to.be.lessThan(5000);
        });
      });
    });
  });
























});