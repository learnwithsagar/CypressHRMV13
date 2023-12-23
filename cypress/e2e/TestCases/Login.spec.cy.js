
import { LoginPage } from "../../pages/LoginPage";
const loginPage = new LoginPage();
import loginData from '../../fixtures/logindata.json'

describe('Login', () => {
    
  
    beforeEach(() => {
      loginPage.openURL()
    });
  
    it('should login with valid credentials', () => {
      // loginPage.openURL()
      loginPage.enterUsername(loginData.username)
      loginPage.enterPassword(loginData.password)
      loginPage.clickOnLoginBtn()
  
      cy.url().should('include', '/dashboard');
      // cy.get('#welcome').should('contain', 'Welcome');
    });
  
    it('should show error message with invalid credentials', () => {
      loginPage.enterUsername(loginData.username)
      loginPage.enterPassword(loginData.invalidpswd)
      loginPage.clickOnLoginBtn()
  
        loginPage.getInvalidErrorMsg()
    });
  });