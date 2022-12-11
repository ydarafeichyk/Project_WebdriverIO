const { BasePage } = require('./BasePage');

class OrderPage extends BasePage {
  constructor() {
    super();
    this.input_FastName = '#fastBuyFormName';
    this.input_FastPhone = 'input#fastBuyFormTelephone';
    this.input_message = 'textarea#fastBuyFormMessage';
    this.checkbox = '#personalInfoFastBuy';
    this.btnFormSubmit = 'a#fastBuyFormSubmit';
    this.resultTitle = '#fastBuyResultTitle';
    this.btn_City = "(//a[@data-id='252'])[3]";
    this.btn_Next = "(//a[@class='pull-right btn btn-default btn-md'])[1]";
    this.input_FirstName = 'input#soa-property-1';
    this.input_email = 'input#soa-property-2';
    this.input_phone = 'input#soa-property-3';
    this.input_address = 'textarea#soa-property-7';
    this.input_comment = 'textarea#orderDescription';
    this.btn_Order = 'div#bx-soa-orderSave>a';
    this.orderNumber = '(//td)[1]';
  }
  async buyInOneClick(name, phone, message) {
    await $(this.input_FastName).setValue(name);
    await $(this.input_FastPhone).waitForClickable();
    await $(this.input_FastPhone).setValue(phone);
    await $(this.input_message).waitForClickable();
    await $(this.input_message).setValue(message);
    await $(this.checkbox).waitForClickable();
    await $(this.checkbox).click();
    await $(this.btnFormSubmit).click();
    await browser.pause(2000);
  }
  async buyProduct(name, email, phone, address, message) {
    await $(this.btn_City).click();
    await $(this.btn_Next).scrollIntoView();
    await $(this.btn_Next).waitForClickable();
    await $(this.btn_Next).click();
    await $(this.btn_Next).scrollIntoView();
    await $(this.btn_Next).waitForClickable();
    await $(this.btn_Next).click();
    await $(this.input_FirstName).setValue(name);
    await $(this.input_email).setValue(email);
    await $(this.input_phone).setValue(phone);
    await $(this.input_address).setValue(address);
    await $(this.input_comment).setValue(message);
    await $(this.btn_Next).click();
    await $(this.btn_Order).click();
    await browser.pause(2000);
  }
}

module.exports = { OrderPage };
