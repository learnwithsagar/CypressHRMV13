describe('Record and play test script', () => {
  it('Record and play test case', () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://www.saucedemo.com/v1/');
    cy.get('[data-test="username"]').clear('standard_user');
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').clear('secret_sauce');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('#login-button').click();
    cy.get('#item_5_title_link > .inventory_item_name').click();
    cy.get('.btn_primary').click();
    cy.get('path').click();
    cy.get('.btn_action').click();
    cy.get('[data-test="firstName"]').clear('Test');
    cy.get('[data-test="firstName"]').type('Test');
    cy.get('[data-test="lastName"]').clear();
    cy.get('[data-test="lastName"]').type('QATest1');
    cy.get('[data-test="postalCode"]').clear();
    cy.get('[data-test="postalCode"]').type('977');
    cy.get('.btn_primary').click();
    cy.get('.btn_action').click();
    /* ==== End Cypress Studio ==== */
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://www.saucedemo.com/v1/checkout-complete.html');
    /* ==== End Cypress Studio ==== */
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('RecuritOHRM.spec.cy.js', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('Admin');
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('a');
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
    cy.get('.oxd-button').click();
    cy.get(':nth-child(5) > .oxd-main-menu-item > .oxd-text').click();
    cy.get('.orangehrm-header-container > .oxd-button').click();
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').clear('H');
    cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').type('Hari');
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').clear();
    cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').type('Ram');
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').clear();
    cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').type('Sharma');
    cy.get('.oxd-select-text--after > .oxd-icon').click();
    cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('r');
    cy.get(':nth-child(3) > .oxd-grid-3 > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input').type('ram675@gmail.com');
    cy.get(':nth-child(3) > .oxd-grid-3').click();
    cy.get('.oxd-button--secondary').click();
    /* ==== End Cypress Studio ==== */
  });
})