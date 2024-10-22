
import swapPage from '../support/Page/swapScreen';

describe('Swap screen', () => {
  beforeEach(() => {
    cy.login(); 
  });

  it('should navigate to the swap page and select the first token', () => {
    swapPage.clickEnterbeta(); 
    swapPage.verifyUrl(); 
    swapPage.clickhamburger(); 
    swapPage.clickAyinSwap(); //
    swapPage.verifySwapPageUrl(); 
    swapPage.selectFirstToken(); 
  });

  it('should navigate to the swap page and select the first token', () => {
    swapPage.visitSwapPage() 
    swapPage.clickALPH()  
    swapPage.typeTail()
    swapPage.clickTail()
    swapPage.visibilty2ndoken()
});
it('should navigate to the swap page and select the first token', () => {
  swapPage.visitSwapPage() 
  swapPage.visibilty1stToken()
  swapPage.visibilty2ndoken()
  swapPage.click2ndToken()
  swapPage.clickToggle()
  swapPage.Invisibilty1stToken()
  swapPage.invisibilty2ndoken()
});

it('should navigate to the swap page and select the first token', () => {
  swapPage.visitSwapPage() 
  swapPage.clickSlippage()
  swapPage.clickMaxSlippage()
  swapPage.typeMaxSlippageVal()
  swapPage.clickDeadline()
  swapPage.typeDeadlineVal()
  swapPage.clickCrossBtn()
  swapPage.clickSlippage()
  swapPage.clickingBackBtn()

  });
  it('Verification of the chart for a specific token pair', () => {
    swapPage.visitSwapPage()
    swapPage.clicking2ndTokenBtn()
    swapPage.typeTail()
    swapPage.clickTail()
    swapPage.clickingChart()       //For opening
    swapPage.viewPairTradeDetails()
    swapPage.clickingChart()          //For closing

  });
  it('Token Conversion by typing the first token amount', () => {
    swapPage.visitSwapPage()
    swapPage.clicking2ndTokenBtn()
    swapPage.typeTail()
    swapPage.clickTail()
    swapPage.enteringTkn1stField()
    swapPage.secondFieldRelect()

 });

 it('Connect wallet button visiblity and click', () => {
  swapPage.visitSwapPage()
swapPage.visibconiltyConnetWaletBtn()
swapPage.clickConnetWaletBtn()

});



});
