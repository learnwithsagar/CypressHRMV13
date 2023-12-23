
import { LoginPage } from "../../pages/LoginPage";
const loginPage = new LoginPage();
import loginData from '../../fixtures/logindata.json'
import { RecruitmentPage } from "../../pages/RecruitmentPage";
const recruitPage = new RecruitmentPage();

describe('Recruit test suite', () => {
    
  
    beforeEach(() => {
      loginPage.openURL()
    });
  
    it('should login with valid credentials and fill the recruitment form', () => {
      // loginPage.openURL()
      loginPage.enterUsername(loginData.username)
      loginPage.enterPassword(loginData.password)
      loginPage.clickOnLoginBtn()
  
      cy.url().should('include', '/dashboard');

      //Opening recruitment page
      recruitPage.openRecruitPage();
      recruitPage.clickOnAddBtn();
      recruitPage.enterFirstName('Ram');
      recruitPage.enterMiddleName('prasad');
      recruitPage.enterLastName('sharma');
    
      // recruitPage.selectVacancy();
     
      // recruitPage.selectVacancyDropdwn();
      recruitPage.enterEmail('ram123@gmail.com');
      recruitPage.clickOnSaveBtn();



      
    });
     
  });