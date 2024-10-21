class LoginPage {
  
    getPasswordInput() {
      return cy.get('.input');
    }
  
   
    getLoginButton() {
      return cy.get('.btn');
    }
  
    
    navigate() {
      cy.visit('https://beta-uat.ayin.app');
    }
  
   
    enterPassword(password) {
      this.getPasswordInput().type(password);
    }
  
    
    clickLoginButton() {
      this.getLoginButton().click();
    }
  
  
    clearPasswordField() {
      this.getPasswordInput().clear();
    }
  }
  
 
  export default LoginPage;
  