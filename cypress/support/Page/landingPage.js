class landingPage {

navigationLanderPage(){
    cy.url().should('eq', 'https://beta-uat.ayin.app/')
}

titleVerification(){
    cy.get('.text-2xl')
      .should('be.visible')
}

clickingSwapBtn(){

    cy.get('.gap-6 > [href="/swap?intro=true"]').click();
}

swapUrlVerification(){
    cy.url().should('contain', 'https://beta-uat.ayin.app/swap');
}

redirectionVerification(){
    cy.get("h3[class='text-2xl sm:text-[28px] font-bold text-[#E3E3E3]']",{ timeout: 8000 })   //by text verication on swap page
      .should('be.visible');
}

clickStakingBtn(){
    cy.get('[href="https://classic.ayin.app/stake"] > .text-sm').click();
}
stakingUrlVerification(){
    cy.url().should('eq', 'https://classic.ayin.app/stake');
}

ayinSwapBtn(){
    cy.get('.flex-row > .hidden > .flex')       //viisibity of 'ayin swap' Btn
      .should('be.visible')
}

clickAyinSwap(){
    cy.get('.flex-row > .hidden > .flex')
      .click()
}

urlVerAyinSwap(){
    cy.url().should('contain', 'https://classic.ayin.app/swap');
}

visibleEnterBetaBtn(){
    cy.get('.flex-row > .inline-flex > .group')
      .should('be.visible')
      
}
clickEnterBetaBtn(){
    cy.get('.flex-row > .inline-flex > .group')
      .should('be.visible')
      .click();
}

textVerification(){                         ///Text verification on user is redirected to the 
    cy.get('.w-full > .mt-1')
      .should('be.visible');
}


clickAyinSwapPopup(){
    cy.get('a > .relative').click();
}

visiblePrivacyNotice(){
    cy.xpath("//a[normalize-space()='Privacy Notice']") 
          .should('be.visible')
         
}

clickPrivacyNotice(){
    cy.xpath("//a[normalize-space()='Privacy Notice']") 
          .click()
         
}

textPrivacyNotice(){
    cy.get('.content > :nth-child(2)',{ timeout: 50000 })
          .should('contain.text', 'In this Privacy Notice, we explain how');

}


visibleTermsOfServices(){
    cy.xpath("//a[normalize-space()='Terms of Service']")
    .should('be.visible')
          .should('be.visible')
         
}
clickTermsOfServices(){
    cy.xpath("//a[normalize-space()='Terms of Service']")
    .click()
         
}
textTermsOfServices(){
    cy.get('.text-xl.font-bold.bg-primary-linear-gradient.text-transparent.bg-clip-text.mt-2')

          .should('contain.text', 'Terms of Service');

}

visibleRiskDiscloStatement(){
    cy.xpath("//a[normalize-space()='Risk Disclosure Statement']")
          .should('be.visible')
          
         
}
clickRiskDiscStatement(){
    cy.xpath("//a[normalize-space()='Risk Disclosure Statement']")
    .click()
         
}
textRiskDiscStatement(){
    cy.get(':nth-child(2) > strong',{ timeout: 800000 })
          .should('contain.text', 'Experimental Nature');

}



visibleLegalNotice(){
    cy.xpath("//a[normalize-space()='Legal Notice']")
    .should('be.visible')
          
         
}
clickleLegalNotice(){
    cy.xpath("//a[normalize-space()='Legal Notice']")
    .click();
         
}
textleLegalNotice(){
    cy.get(':nth-child(4) > strong',{ timeout: 80000 })
    .should('be.visible')

}

clickDiscordLogo(){
    cy.xpath("//div[@class='h-11 flex items-center gap-x-5']//a[1]//*[name()='svg']")
    .parents('a') 
       .should('have.attr', 'target', '_blank') //Verification link redirect the user to next tab
       .click()
}

clickTelegramLogo(){
    cy.get("div[class='relative'] a:nth-child(2) svg")
.parents('a') 
  .should('have.attr', 'target', '_blank') //Verification link redirect the user to next tab
  .click()
}

clickTwitterLogo(){
    cy.get("path[fill='silver'][d='M24.802 4.75c-.928.411-1.914.68-2.923.8a5.1 5.1 0 0 0 2.239-2.815 10.168 10.168 0 0 1-3.232 1.235 5.088 5.088 0 0 0-3.717-1.614c-2.791 0-5.089 2.297-5.089 5.09 0 .39.045.783.135 1.165A14.453 14.453 0 0 1 1.727 3.293a5.066 5.066 0 0 0-.69 2.56c0 1.764.899 3.322 2.264 4.235a5.072 5.072 0 0 1-2.304-.636v.063a5.107 5.107 0 0 0 4.082 4.99 5.118 5.118 0 0 1-2.3.088 5.103 5.103 0 0 0 4.754 3.534A10.22 10.22 0 0 1 0 20.235a14.399 14.399 0 0 0 7.8 2.288c9.36 0 14.48-7.755 14.48-14.48 0-.22-.007-.44-.016-.658a10.33 10.33 0 0 0 2.54-2.634l-.002-.001Z']")
.parents('a') 
  .should('have.attr', 'target', '_blank') //Verification link redirect the user to next tab
  .click()
}
























}
export default new landingPage();
