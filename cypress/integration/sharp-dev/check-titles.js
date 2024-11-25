import Sharpdev_Homepage_PO from '../../support/pageObjects/sharp-dev/Sharpdev_Homepage_PO';
/// <reference types="cypress" />

describe('Check titles', () => {
  const sharpdev_Homepage_PO = new Sharpdev_Homepage_PO();

  before(function () {
    cy.fixture('example').then(function (data) {
      globalThis.data = data;
    });
  });

  beforeEach(function () {
    sharpdev_Homepage_PO.accessHomepage();
  });

  it('Check button learn-more', () => {
    sharpdev_Homepage_PO.checkLearn_More_Button();
  });

  it('Click on button learn-more', () => {
    sharpdev_Homepage_PO.clickLearn_More_Button();
  });

  it('Check pricing', () => {
    sharpdev_Homepage_PO.clickOn_Pricing();
    sharpdev_Homepage_PO.check_Pricing_Titles();
  });

  it('Check Contact us form', () => {
    sharpdev_Homepage_PO.click_AndSubmit_Form(
      data.name,
      data.email,
      data.comment
    );
    sharpdev_Homepage_PO.validate_Results();
  });
});
