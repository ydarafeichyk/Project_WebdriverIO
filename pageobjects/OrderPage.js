const { BasePage } = require('./BasePage');

const I = require('../helpers/BaseElements');

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
    await I.setValue(this.input_FastName, name);
    await $(this.input_FastPhone).waitForClickable();
    await I.setValue(this.input_FastPhone, phone);
    await $(this.input_message).waitForClickable();
    await I.setValue(this.input_message, message);
    await I.click(this.checkbox);
    await I.click(this.btnFormSubmit);
    await browser.pause(2000);
  }
  async buyProduct(name, email, phone, address, message) {
    await I.click(this.btn_City);
    await I.scroll(this.btn_Next);
    await I.click(this.btn_Next);
    await I.scroll(this.btn_Next);
    await I.click(this.btn_Next);
    await I.setValue(this.input_FirstName, name);
    await I.setValue(this.input_email, email);
    await I.setValue(this.input_phone, phone);
    await I.setValue(this.input_address, address);
    await I.setValue(this.input_comment, message);
    await I.click(this.btn_Next);
    await I.click(this.btn_Order);
    await browser.pause(2000);
  }
}

module.exports = { OrderPage };
