class Sharpdev_Homepage_PO {
  accessHomepage() {
    cy.visit('https://www.sharp-dev.net/#Development_outsourcing');
  }

  checkLearn_More_Button() {
    cy.get('.promo__btn').contains('Learn More');
  }

  clickLearn_More_Button() {
    cy.get('.promo__btn').contains('Learn More').click();
    cy.url().should('include', 'Software_Development');
  }

  clickOn_Pricing() {
    cy.get('#pricing_link').click();
  }

  check_Pricing_Titles() {
    cy.get(':nth-child(1) > .pricing__type-name').contains('Fixed Price');
    cy.get(':nth-child(2) > .pricing__type-name').contains('Flexible Price');
  }

  clickOn_ContactUs() {
    cy.get('.header__btn').contains('Contact Us').click();
  }

  click_AndSubmit_Form(name, email, comment) {
    cy.get('.mainform__wrp > :nth-child(2) > .hdr').contains('Contact Us');
    cy.get('#name').type(name);
    cy.get('#email').type(email);
    cy.get('#comments').type(comment);
    cy.get('#submitButton').click();
  }

  validate_Results() {
    cy.get('.result-form__message').contains(
      'Request has been sent successfully.'
    );
  }
}
export default Sharpdev_Homepage_PO;
