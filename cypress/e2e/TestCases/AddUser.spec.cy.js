import { AddUser } from "../../pages/AddUser";
import { LoginPage } from "../../pages/LoginPage";
const addUser= new AddUser();
const loginPage = new LoginPage();
import loginData from '../../fixtures/logindata.json'
import addUserData from '../../fixtures/adduser.json'

describe('Add user', () => {
    
  
    beforeEach(() => {
      loginPage.openURL()
    });

      
    it('should add user for managment', () => {
      // loginPage.openURL()
      loginPage.enterUsername(loginData.username)
      loginPage.enterPassword(loginData.password)
      loginPage.clickOnLoginBtn()
  
      cy.url().should('include', '/dashboard');
      // cy.get('#welcome').should('contain', 'Welcome');

        addUser.openAdminURL();
        // addUser.clickOnAddBtn();
        addUser.selectUserRole();
        addUser.enterEmployeeName(addUserData.username);
        addUser.selectStatus();
        addUser.enterPassword(addUserData.password);
        addUser.enterConfirmPassword(addUserData.confirmpswd);
    });
    
  });