export class LoginPage {

weblocatos={
  username:'input[name="username"]',
  pasword:'input[name="password"]',
  loginBtn:'button[type="submit"]',
  errmsg:'div[role="alert"] div p'

}

openURL(){
  cy.visit(Cypress.env('URL'));
}
   
enterUsername(userName){
  cy.get(this.weblocatos.username).should('be.visible').type(userName);
}

enterPassword(pswd){
 cy.get(this.weblocatos.pasword).type(pswd);
}

clickOnLoginBtn(){
  cy.get(this.weblocatos.loginBtn).click();
}

getInvalidErrorMsg(){
  cy.get(this.weblocatos.errmsg).should('contain', 'Invalid credentials');
}

}
  