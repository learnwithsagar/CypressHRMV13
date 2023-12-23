import { EditRecruitPage } from "../../pages/EditRecruitPage";
import { LoginPage } from "../../pages/LoginPage";
const loginPage = new LoginPage();
import loginData from '../../fixtures/logindata.json'
import { RecruitmentPage } from "../../pages/RecruitmentPage";
const recruitPage = new RecruitmentPage();
const editRecruitPage = new EditRecruitPage();

describe('Recruit Edit Page', () => {
    beforeEach(() => {
        loginPage.openURL();
        
        
    });
    it('Verify that the admin user is able to edit recruit page', () => {

        loginPage.enterUsername(loginData.username)
      loginPage.enterPassword(loginData.password)
      loginPage.clickOnLoginBtn()
  
      cy.url().should('include', '/dashboard');

      //Opening recruitment page
      recruitPage.openRecruitPage();
    //   recruitPage.clickOnAddBtn();
    //   recruitPage.enterFirstName('Ram');
    //   recruitPage.enterMiddleName('prasad');
    //   recruitPage.enterLastName('sharma');
    
      // recruitPage.selectVacancy();
     
      // recruitPage.selectVacancyDropdwn();
    //   recruitPage.enterEmail('ram123@gmail.com');
    //   recruitPage.clickOnSaveBtn();

      //Edit recruitpage
      editRecruitPage.clickOnViewBtn();
      editRecruitPage.clickOnEditBtn();
    //   editRecruitPage.



        
    });
});

describe('', () => {
  it('', () => {
    
  });
});