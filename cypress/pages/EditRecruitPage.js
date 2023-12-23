export class EditRecruitPage {

    weblocators={
      viewBtn:"body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > button:nth-child(1) > i:nth-child(1)",
      editBtn:".oxd-switch-input.oxd-switch-input--active.--label-left",
      browse:".oxd-file-button",
      saveBtn:"button[type='submit']" 
    }

    openRecruitPage(){
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates')
    }

    clickOnViewBtn(){
      cy.get(this.weblocators.viewBtn).click();
    }

    clickOnEditBtn(){
        cy.get(this.weblocators.clickOnEditBtn).click();
      }

      clickOnBrowseBtn(){
        cy.get(this.weblocators.clickOnBrowseBtn).click();
      }

  
    clickOnSaveBtn(){
      cy.get(this.weblocators.saveBtn).click();
    }

    
}