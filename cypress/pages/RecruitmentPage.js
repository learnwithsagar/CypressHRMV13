export class RecruitmentPage {

    weblocatos={
      addButton:'.orangehrm-header-container > .oxd-button',
      firstName:"input[name='firstName']",
      middleName:"input[name='middleName']",
      lastName:"input[name='lastName']",
      vacancyClick:".oxd-select-text-input",
      vacancyDropdown:".oxd-select-text-input",
      email:"body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)",
      saveBtn:"button[type='submit']"
    
    }

    openRecruitPage(){
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates')
    }

    clickOnAddBtn(){
      cy.get(this.weblocatos.addButton).click();
    }

    enterFirstName(fName){
      cy.get(this.weblocatos.firstName).type(fName);
    }

    enterMiddleName(mName){
      cy.get(this.weblocatos.middleName).type(mName);
    }

    enterLastName(lName){
      cy.get(this.weblocatos.lastName).type(lName);
    }

    // selectVacancy(){
    //   // cy.get(this.weblocatos.vacancyClick).should('be.visible').contains('Senior QA Lead').click();
    //   // cy.get(this.weblocatos.vacancyClick).should('exist').contains('Senior QA Lead').click();
    //   cy.get(this.weblocatos.vacancyClick).should('be.visible').then(($el) => {
    //     console.log($el.text());
    //   }).contains('Senior QA Lead').click();


    // }

    // selectVacancyDropdwn(){
    //   cy.get(this.weblocatos.vacancyDropdown).should('be.visible').contains('Senior QA Lead').click();
    //   // cy.get(this.weblocatos.vacancyDropdown).should('have.value','Senior QA Lead').click();
    //   // cy.get(this.weblocatos.vacancyClick).select('Senior QA Lead');
    // }
    


    enterEmail(email){
      cy.get(this.weblocatos.email).type(email);
    }

    clickOnSaveBtn(){
      cy.get(this.weblocatos.saveBtn).click();
    }

    
}