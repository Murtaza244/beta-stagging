import LoginPage from '../support/Page/LoginPage';  // Import the LoginPage class

describe('Login Functionality Tests', () => {
  const loginPage = new LoginPage(); // Create an instance of LoginPage

  context('Invalid Login Functionality Tests', () => {

    it('Should clear the password field for incorrect password', () => {
      loginPage.navigate();  // Navigate to the login page
      loginPage.enterPassword('Honey manager');  // Enter the password
      loginPage.clickLoginButton();  // Click the login button
      loginPage.getPasswordInput().should('have.value', '');  // Assert that the password field is cleared
    });

    it('Should clear the password field when no password is entered', () => {
      loginPage.navigate();
      loginPage.clickLoginButton();
      loginPage.clearPasswordField();  // Clear the password field
      loginPage.getPasswordInput().should('have.value', '');
    });

    it('Should clear field when entering case-sensitive password', () => {
      loginPage.navigate();
      loginPage.enterPassword('ElvjkVySOlRu');
      loginPage.clickLoginButton();
      loginPage.getPasswordInput().should('have.value', '');
    });
  });

  context('Valid Login Functionality Tests', () => {

    it('Should navigate to the login page', () => {
      loginPage.navigate();
      cy.url().should('include', 'beta-uat.ayin.app');
    });

    it('Should enter the password correctly', () => {
      loginPage.navigate();
      loginPage.enterPassword('ElvjkVysOLrU');
      loginPage.getPasswordInput().should('have.value', 'ElvjkVysOLrU');
    });

    it.only('Should log in successfully with valid password', () => {
      loginPage.navigate();
      loginPage.enterPassword('ElvjkVysOLrU');
      loginPage.clickLoginButton();
      cy.url().should('eq', 'https://beta-uat.ayin.app/');
    });
  });
});
