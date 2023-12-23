export class AddUser {

    weblocators={
    //  addBtn:"button[class='oxd-button oxd-button--medium oxd-button--secondary']",
    //  adminPage:".oxd-main-menu-item.active",
     selectUserRole:"body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)",
     employeeName:"input[placeholder='Type for hints...']",
     status:"body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)",
     username:".oxd-input.oxd-input--active.oxd-input--error",
     password:"div[class='oxd-grid-item oxd-grid-item--gutters user-password-cell'] div[class='oxd-input-group oxd-input-field-bottom-space'] div input[type='password']",
     confirmPassword:"div[class='oxd-grid-item oxd-grid-item--gutters'] div[class='oxd-input-group oxd-input-field-bottom-space'] div input[type='password']"
    
    }
    
    openAdminURL(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser');
      }

    //   clickOnAddBtn(){
    //     cy.get(this.weblocators.addBtn).click();
    //   }

      selectUserRole(){
        cy.get(this.weblocators.selectUserRole).select('Admin').should('have.value','Admin');
      }

      enterEmployeeName(ename){
        cy.get(this.weblocators.employeeName).type(ename);
      }

      
      selectStatus(){
        cy.get(this.weblocators.selectUserRole).select(0).should('have.value','Enabled');
      }

      enterUsername(username){
        cy.get(this.weblocators.username).type(username);
      }

      enterPassword(pswd){
        cy.get(this.weblocators.password).type(pswd);
      }

      enterConfirmPassword(confirmpswd){
        cy.get(this.weblocators.confirmPassword).type(confirmpswd);
      }
    
    }
      